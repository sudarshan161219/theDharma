import { manvantaras, vyasas, yugas } from '../data/cosmos';
import { acharyas, darshanas } from '../data/acharyas';
import { darshans, nastikas, traditions } from '../data/darshanas';
import { dharmashastras, gitaChapters, upanishads, vedangas, vedas } from '../data/vedas';
import { festivals } from '../data/calendar';
import { dikpalas, navagrahas, trimurti, vedicGods } from '../data/devas';
import { ashramas, purusharthas, samskaras } from '../data/dharma';
import { dashavatara } from '../data/avatars';
import { mahavidyas, navadurga } from '../data/devi';
import { allPlaces } from '../data/places';
import { kuladevatas } from '../data/kuladevata';
import { gotras } from '../data/gotra';
import { flatten, lunar, solar } from '../data/dynasties';
import { glossary } from '../data/glossary';
import { people } from '../data/people';
import { scriptures } from '../data/scriptures';
import { href } from './router';

export interface Hit {
  kind: string;
  title: string;
  subtitle: string;
  to: string;
}

interface Entry extends Hit {
  haystack: string;
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    // common transliteration variants: sh/s, aa/a, ee/i …
    .replace(/sh/g, 's')
    .replace(/aa/g, 'a')
    .replace(/ee/g, 'i')
    .replace(/oo/g, 'u')
    .replace(/w/g, 'v');

const index: Entry[] = [
  ...scriptures.map((s) => ({
    kind: s.category,
    title: s.name,
    subtitle: s.verses ? `${s.composer} · ${s.verses.toLocaleString('en-IN')} verses` : s.composer,
    to: href('scriptures', s.id),
    haystack: [s.name, s.deity, s.composer, s.summary, s.note ?? '', ...(s.furtherReading ?? []).map((f) => f.label), ...(s.structure ?? []), ...s.highlights, ...s.narration.map((n) => `${n.speaker} ${n.listener} ${n.context}`)].join(' '),
  })),
  ...people.map((p) => ({
    kind: p.kind,
    title: p.name,
    subtitle: p.short,
    to: href('people', p.id),
    haystack: [p.name, p.short, p.about ?? '', ...(p.facts ?? []).map((f) => f.value)].join(' '),
  })),
  ...manvantaras.map((m) => ({
    kind: 'Manvantara',
    title: `${m.n}. ${m.manu} Manu`,
    subtitle: `Indra: ${m.indra}`,
    to: href('manvantaras') + `?n=${m.n}`,
    haystack: [m.manu, m.indra, ...m.saptarishi, m.avatara ?? '', m.note ?? '', 'manu manvantara'].join(' '),
  })),
  ...vyasas.map((v) => ({
    kind: 'Vyasa',
    title: `${v.n}. ${v.name}`,
    subtitle: `Vyasa of the ${v.n}th Dvapara`,
    to: href('vyasas'),
    haystack: `${v.name} ${v.note ?? ''} vyasa`,
  })),
  ...yugas.map((y) => ({
    kind: 'Yuga',
    title: y.name,
    subtitle: `${y.humanYears.toLocaleString('en-IN')} human years`,
    to: href('time') + `?yuga=${y.id}`,
    haystack: [y.name, y.practice, ...y.notable, 'yuga'].join(' '),
  })),
  ...dashavatara.map((a) => ({
    kind: 'Avatara',
    title: a.name,
    subtitle: `${a.form} · ${a.yuga} — ${a.purpose}`,
    to: `#/avatars?a=${a.id}`,
    haystack: [a.name, a.form, a.yuga, a.purpose, a.story, 'avatar avatara dashavatara vishnu'].join(' '),
  })),
  ...[...navadurga.map((f) => ({ f, group: 'Navadurga' })), ...mahavidyas.map((f) => ({ f, group: 'Mahavidya' }))].map(({ f, group }) => ({
    kind: group,
    title: f.name,
    subtitle: f.meaning,
    to: `#/avatars?g=devi&a=devi-${f.id}`,
    haystack: [f.name, f.meaning, f.form, f.story, f.aside ?? '', group, 'devi goddess durga shakti avatar'].join(' '),
  })),
  ...allPlaces.map((p) => ({
    kind: p.kind === 'jyotirlinga' ? 'Jyotirlinga' : p.kind === 'shakti' ? 'Shakti Peetha' : 'Tirtha',
    title: p.name,
    subtitle: `${p.today} · ${p.state}`,
    to: `#/places?p=${p.id}`,
    haystack: [p.name, p.today, p.state, p.scriptureSays, p.story, p.bodyPart ?? '', ...(p.alternates ?? []).map((a) => a.place), 'tirtha pilgrimage temple place location'].join(' '),
  })),
  ...kuladevatas.map((d) => ({
    kind: 'Kuladevata',
    title: d.name,
    subtitle: `${d.place}, ${d.state} · ${d.form}`,
    to: `#/kuladevata?k=${d.id}`,
    haystack: [d.name, d.form, d.place, d.state, d.heldBy, d.text, 'kuladevata kuladevi kuldevi kul devta family deity'].join(' '),
  })),
  ...([
    ['solar', solar],
    ['lunar', lunar],
  ] as const).flatMap(([d, line]) =>
    flatten(line)
      .filter((n) => !n.person)
      .map((n) => ({
        kind: d === 'solar' ? 'Solar dynasty' : 'Lunar dynasty',
        title: n.name,
        subtitle: n.note ?? (n.spouse ? `married ${n.spouse}` : 'King of the line'),
        to: `#/dynasties?d=${d}`,
        haystack: [n.name, n.note ?? '', n.spouse ?? '', 'king dynasty vamsha lineage', d === 'solar' ? 'surya ikshvaku ayodhya' : 'chandra soma kuru puru yadu'].join(' '),
      })),
  ),
  {
    kind: 'Chandas',
    title: 'Anushtubh (shloka) metre',
    subtitle: '4 padas × 8 syllables: laghu and guru, the rules, and a verse scanner',
    to: '#/chandas',
    haystack: 'anushtubh anushtup anustubh shloka sloka chandas chhand chanda metre meter prosody laghu guru pingala gana pada syllable scanner',
  },
  ...gotras.map((g) => ({
    kind: 'Gotra',
    title: `${g.name} gotra`,
    subtitle: `${g.gana} gana · pravara: ${g.pravara.join(', ')}`,
    to: `#/gotra?g=${g.id}`,
    haystack: [g.name, ...(g.aka ?? []), g.gana, ...g.pravara, g.note ?? '', 'gotra pravara lineage rishi'].join(' '),
  })),
  ...acharyas.map((a) => ({
    kind: 'Acharya',
    title: a.name,
    subtitle: `${a.dates} · ${darshanas.find((d) => d.id === a.darshana)?.name ?? ''}`,
    to: `#/acharyas?a=${a.id}`,
    haystack: [a.name, a.summary, a.born, a.sampradaya ?? '', ...a.works, ...a.facts.map((f) => f.value), 'acharya teacher'].join(' '),
  })),
  ...vedas.map((v) => ({
    kind: 'Veda',
    title: v.name,
    subtitle: v.meaning,
    to: `#/vedas?v=${v.id}`,
    haystack: [v.name, v.what, v.size, v.shakhas, v.brahmanas, v.aranyakas, v.upanishads, v.upaveda, v.receivedBy, v.mahavakya.iast, v.note, 'veda samhita shruti'].join(' '),
  })),
  ...upanishads.map((u) => ({
    kind: 'Upanishad',
    title: `${u.name} Upanishad`,
    subtitle: `${u.veda} · ${u.teacher} teaches ${u.student}`,
    to: '#/vedas',
    haystack: [u.name, u.veda, u.teacher, u.student, u.setting, u.teaching, u.famous.iast, u.famous.meaning, 'upanishad vedanta'].join(' '),
  })),
  ...vedangas.map((v) => ({
    kind: 'Vedanga',
    title: v.name,
    subtitle: v.what,
    to: '#/vedas',
    haystack: [v.name, v.what, v.texts, v.part, 'vedanga limb of the veda'].join(' '),
  })),
  ...dharmashastras.map((d) => ({
    kind: 'Dharmashastra',
    title: d.name,
    subtitle: d.size,
    to: '#/vedas',
    haystack: [d.name, d.when, d.about, d.commentaries, 'smriti law dharmashastra'].join(' '),
  })),
  ...gitaChapters.map((c) => ({
    kind: 'Gita chapter',
    title: `Gita ${c.n}: ${c.name}`,
    subtitle: `${c.verses} verses · ${c.theme}`,
    to: '#/vedas',
    haystack: [c.name, c.theme, c.key.iast, c.key.meaning, c.key.ref, 'bhagavad gita chapter adhyaya'].join(' '),
  })),
  ...festivals.map((f) => ({
    kind: 'Festival',
    title: f.name,
    subtitle: f.note,
    to: '#/calendar',
    haystack: [f.name, f.note, 'festival utsava calendar panchanga tithi'].join(' '),
  })),
  {
    kind: 'Calendar',
    title: 'Today’s panchanga',
    subtitle: 'Tithi, nakshatra, yoga, karana, month and samvatsara, worked out live',
    to: '#/calendar',
    haystack: 'panchanga panchang calendar tithi nakshatra yoga karana vara masa ritu samvatsara shaka vikram amavasya purnima ekadashi',
  },
  ...trimurti.map((t) => ({
    kind: 'Deva',
    title: t.god,
    subtitle: `${t.role} · with ${t.goddess.split(':')[0]}`,
    to: '#/devas',
    haystack: [t.god, t.goddess, t.vahana, t.abode, t.emblems, t.note, 'trimurti'].join(' '),
  })),
  ...vedicGods.map((g) => ({
    kind: 'Deva',
    title: g.name,
    subtitle: g.role,
    to: '#/devas',
    haystack: [g.name, g.role, 'vedic god rig veda deva'].join(' '),
  })),
  ...navagrahas.map((g) => ({
    kind: 'Navagraha',
    title: g.name,
    subtitle: `${g.body} · ${g.day}`,
    to: '#/devas',
    haystack: [g.name, g.body, g.day, g.parents, g.role, 'graha navagraha planet'].join(' '),
  })),
  ...dikpalas.map((d) => ({
    kind: 'Dikpala',
    title: d.name,
    subtitle: `Guardian of the ${d.dir.toLowerCase()}`,
    to: '#/devas',
    haystack: [d.name, d.dir, d.weapon, d.vahana, d.consort, 'dikpala lokapala direction guardian'].join(' '),
  })),
  ...samskaras.map((x) => ({
    kind: 'Samskara',
    title: x.name,
    subtitle: `${x.when} · ${x.what}`,
    to: '#/dharma',
    haystack: [x.name, x.when, x.what, x.phase, 'samskara rite of passage'].join(' '),
  })),
  ...[...ashramas, ...purusharthas].map((x) => ({
    kind: 'Dharma',
    title: x.name,
    subtitle: 'duty' in x ? `${x.who} · ${x.years}` : x.meaning,
    to: '#/dharma',
    haystack: [x.name, 'duty' in x ? x.duty : x.about, 'ashrama purushartha stage aim of life dharma'].join(' '),
  })),
  ...darshans.map((d) => ({
    kind: 'Darshana',
    title: d.name,
    subtitle: `${d.focus} · ${d.founder}`,
    to: `#/darshanas?d=${d.id}`,
    haystack: [d.name, d.meaning, d.focus, d.founder, d.rootText, d.inBrief, d.about, ...d.categories.items, ...d.commentators.map((c) => c.label), 'darshana astika philosophy school'].join(' '),
  })),
  ...nastikas.map((n) => ({
    kind: 'Darshana',
    title: n.name,
    subtitle: `Nastika · ${n.founder}`,
    to: '#/darshanas',
    haystack: [n.name, n.founder, n.teaching, ...n.key, 'nastika philosophy school'].join(' '),
  })),
  ...traditions.flatMap((t) => [
    {
      kind: 'Sampradaya',
      title: `${t.name} tradition`,
      subtitle: t.inBrief,
      to: `#/darshanas?t=${t.id}`,
      haystack: [t.name, t.deity, t.inBrief, t.scriptures, 'sampradaya tradition sect'].join(' '),
    },
    ...t.sampradayas.map((s) => ({
      kind: 'Sampradaya',
      title: s.name,
      subtitle: `${t.name} · ${s.founder}`,
      to: `#/darshanas?t=${t.id}`,
      haystack: [s.name, s.founder, s.deity, s.darshana, s.texts, s.centres, s.practice, s.about, ...(s.parampara ?? []), 'sampradaya lineage parampara'].join(' '),
    })),
  ]),
  ...darshanas.map((d) => ({
    kind: 'School',
    title: d.name,
    subtitle: d.inBrief,
    to: `#/acharyas?d=${d.id}`,
    haystack: [d.name, d.inBrief, d.jivaBrahman, d.world, d.liberation, 'vedanta darshana philosophy school'].join(' '),
  })),
  ...glossary.map((t) => ({
    kind: 'Definition',
    title: t.term,
    subtitle: t.meaning,
    to: `#/glossary?t=${t.id}`,
    haystack: [t.term, t.meaning, t.body, ...(t.list ?? []).map((x) => `${x.name} ${x.text}`), 'definition meaning what is'].join(' '),
  })),
].map((e) => ({ ...e, haystack: norm(e.title + ' ' + e.haystack) }));

export function search(q: string, limit = 30): Hit[] {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return index
    .map((e) => {
      if (!terms.every((t) => e.haystack.includes(t))) return null;
      const title = norm(e.title);
      const score = terms.reduce((s, t) => s + (title.includes(t) ? 10 : 1), 0);
      return { e, score };
    })
    .filter((x): x is { e: Entry; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ e }) => ({ kind: e.kind, title: e.title, subtitle: e.subtitle, to: e.to }));
}
