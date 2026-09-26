/**
 * Check the links in src/data.
 *
 *   npm run links            internal links + non-wisdomlib sites
 *   npm run links -- --list  also print every wisdomlib URL, for checking by hand
 *
 * Internal links (#/section/id?p=…) in the data and in the pages are checked against the routes and the data.
 * wisdomlib.org answers every scripted request with 403 (a Cloudflare bot check), so its
 * links cannot be verified automatically; they are only checked for a well-formed shape.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { createServer } from 'vite';

const LIST = process.argv.includes('--list');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const load = (p) => server.ssrLoadModule(p);

const sources = new Map(); // url → { labels, files }
const internal = new Map(); // "#/…" → files

function walk(v, file, seen = new Set()) {
  if (v == null || typeof v === 'function') return;
  if (typeof v === 'string') {
    if (v.startsWith('#/')) (internal.get(v) ?? internal.set(v, new Set()).get(v)).add(file);
    return;
  }
  if (typeof v !== 'object' || seen.has(v)) return;
  seen.add(v);
  if (typeof v.url === 'string' && typeof v.label === 'string') {
    const e = sources.get(v.url) ?? sources.set(v.url, { labels: new Set(), files: new Set() }).get(v.url);
    e.labels.add(v.label);
    e.files.add(file);
  }
  const values = v instanceof Map ? [...v.values()] : Array.isArray(v) ? v : Object.values(v);
  for (const x of values) walk(x, file, seen);
}

for (const f of readdirSync('src/data').filter((f) => f.endsWith('.ts'))) walk(await load(`/src/data/${f}`), f);

// Literal links written in the pages and components (template strings with ${…} are skipped).
for (const dir of ['src/pages', 'src/components']) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.tsx'))) {
    for (const m of readFileSync(`${dir}/${f}`, 'utf8').matchAll(/["'`](#\/[\w-][^"'`\s${}]*)["'`]/g)) walk(m[1], f);
  }
}

const { SECTION_TITLES } = await load('/src/lib/title.ts');
const { personById } = await load('/src/data/people.ts');
const { scriptureById } = await load('/src/data/scriptures.ts');
const { placeById } = await load('/src/data/places.ts');
const { acharyaById } = await load('/src/data/acharyas.ts');
await server.close();

// ——— internal links ———
const broken = [];
for (const [link, files] of internal) {
  const [path, query = ''] = link.slice(2).split('?');
  const [section, id] = path.split('/');
  const q = new URLSearchParams(query);
  let problem = null;
  if (section && !(section in SECTION_TITLES)) problem = `unknown page “${section}”`;
  else if (section === 'people' && id && !personById.has(id)) problem = `no person “${id}”`;
  else if (section === 'scriptures' && id && !scriptureById.has(id)) problem = `no scripture “${id}”`;
  else if (section === 'places' && q.get('p') && !placeById.has(q.get('p'))) problem = `no place “${q.get('p')}”`;
  else if (section === 'acharyas' && q.get('a') && !acharyaById.has(q.get('a'))) problem = `no acharya “${q.get('a')}”`;
  if (problem) broken.push(`  ${link} — ${problem} (in ${[...files].join(', ')})`);
}
console.log(`Internal links: ${internal.size} checked, ${broken.length} broken`);
broken.forEach((b) => console.log(b));

// ——— external links ———
const wisdomlib = [...sources.keys()].filter((u) => new URL(u).hostname.endsWith('wisdomlib.org'));
const others = [...sources.keys()].filter((u) => !wisdomlib.includes(u));

const malformed = wisdomlib.filter((u) => {
  const { pathname } = new URL(u);
  return !/^(\/[\w%.-]+)+$/.test(pathname) || /\/definition\/[^/]*[A-Z\s]/.test(pathname);
});
console.log(`\nwisdomlib links: ${wisdomlib.length} (cannot be fetched by scripts; ${malformed.length} malformed)`);
malformed.forEach((u) => console.log(`  malformed: ${u}`));

async function status(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'user-agent': 'theDharma link check' } });
      if (r.ok || method === 'GET') return r.status;
    } catch (e) {
      if (method === 'GET') return `error: ${e.cause?.code ?? e.name}`;
    }
  }
}

const bad = [];
for (let i = 0; i < others.length; i += 6) {
  const batch = others.slice(i, i + 6);
  const results = await Promise.all(batch.map(status));
  batch.forEach((u, j) => {
    const s = results[j];
    // 403/429 usually mean “not for robots”, not “missing”.
    if (typeof s !== 'number' || (s >= 400 && s !== 403 && s !== 429)) bad.push(`  ${s} ${u} (${[...sources.get(u).files].join(', ')})`);
  });
}
console.log(`Other sites: ${others.length} checked, ${bad.length} broken`);
bad.forEach((b) => console.log(b));

if (LIST) {
  console.log('\nwisdomlib URLs to check by hand:');
  for (const u of wisdomlib.sort()) console.log(`  ${u}`);
}

process.exitCode = broken.length || bad.length || malformed.length ? 1 : 0;
