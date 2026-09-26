/**
 * A small Sanskrit prosody engine: split a verse (IAST or Devanagari) into syllables,
 * weigh each as laghu (light) or guru (heavy), and check a pada against the classical
 * Anushtubh (shloka) rules.
 */

export type Weight = 'L' | 'G';

export interface Syllable {
  text: string;
  weight: Weight;
  /** Why it has that weight, in plain words. */
  why: string;
}

// ——— Devanagari → IAST ———

const DV_VOWELS: Record<string, string> = {
  'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ॠ': 'ṝ', 'ऌ': 'ḷ', 'ॡ': 'ḹ',
  'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
};
const DV_MATRAS: Record<string, string> = {
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'ॄ': 'ṝ', 'ॢ': 'ḷ', 'ॣ': 'ḹ',
  'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
};
const DV_CONS: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ',
  'च': 'c', 'छ': 'ch', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
  'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'ळ': 'ḷ', 'व': 'v',
  'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h',
};
const DV_OTHER: Record<string, string> = { 'ं': 'ṃ', 'ः': 'ḥ', 'ँ': 'm̐', 'ऽ': "'", '।': '|', '॥': '||' };
const VIRAMA = '्';

export const hasDevanagari = (s: string) => /[ऀ-ॿ]/.test(s);

export function devanagariToIast(s: string): string {
  let out = '';
  const chars = [...s.normalize('NFC')];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === '़') continue; // nukta
    if (DV_CONS[c]) {
      out += DV_CONS[c];
      const next = chars[i + 1] === '़' ? chars[i + 2] : chars[i + 1];
      if (next === VIRAMA) {
        i += chars[i + 1] === '़' ? 2 : 1;
      } else if (next && DV_MATRAS[next]) {
        out += DV_MATRAS[next];
        i += chars[i + 1] === '़' ? 2 : 1;
      } else {
        out += 'a';
      }
    } else if (DV_VOWELS[c]) out += DV_VOWELS[c];
    else if (DV_MATRAS[c]) out += DV_MATRAS[c];
    else if (DV_OTHER[c] !== undefined) out += DV_OTHER[c];
    else if (/[०-९]/.test(c)) out += ' '; // Devanagari digits (verse numbers)
    else out += c;
  }
  return out;
}

// ——— Tokenising IAST ———

type Unit = { k: 'V'; s: string; long: boolean } | { k: 'C'; s: string } | { k: 'M'; s: string } | { k: 'SP'; s: string };

const LONG_VOWELS = ['ai', 'au', 'ā', 'ī', 'ū', 'ṝ', 'ḹ', 'e', 'o'];
const SHORT_VOWELS = ['a', 'i', 'u', 'ṛ', 'ḷ'];
const ASPIRATES = ['kh', 'gh', 'ch', 'jh', 'ṭh', 'ḍh', 'th', 'dh', 'ph', 'bh'];
const CONSONANTS = 'kgṅcjñṭḍṇtdnpbmyrlvśṣsh'.split('').concat(['ḻ']);

function tokenize(text: string): Unit[] {
  const s = text
    .normalize('NFC')
    .toLowerCase()
    .replace(/ṁ/g, 'ṃ')
    .replace(/m̐/g, 'ṃ');
  const units: Unit[] = [];
  let i = 0;
  while (i < s.length) {
    const two = s.slice(i, i + 2);
    const one = s[i];
    if (two === 'ai' || two === 'au') {
      units.push({ k: 'V', s: two, long: true });
      i += 2;
    } else if (LONG_VOWELS.includes(one)) {
      units.push({ k: 'V', s: one, long: true });
      i++;
    } else if (SHORT_VOWELS.includes(one)) {
      units.push({ k: 'V', s: one, long: false });
      i++;
    } else if (ASPIRATES.includes(two)) {
      units.push({ k: 'C', s: two });
      i += 2;
    } else if (CONSONANTS.includes(one)) {
      units.push({ k: 'C', s: one });
      i++;
    } else if (one === 'ṃ' || one === 'ḥ') {
      units.push({ k: 'M', s: one });
      i++;
    } else if (one === "'" || one === '’') {
      i++; // avagraha: an elided short a, not pronounced
    } else {
      // Spaces, hyphens, punctuation: keep a single space marker for display
      if (units.length && units[units.length - 1].k !== 'SP') units.push({ k: 'SP', s: ' ' });
      i++;
    }
  }
  return units;
}

const GLIDES = ['r', 'y', 'v', 'l'];

/**
 * How many of the units between two vowels belong to the earlier syllable, for display.
 * Breaks at a word boundary if there is one; inside a word, a consonant + r/y/v/l
 * (pra, tva, tre) and kṣ / jñ stay together as the next syllable's onset.
 */
function displaySplit(between: Unit[]): number {
  const sp = between.findIndex((u) => u.k === 'SP');
  if (sp >= 0) return sp;
  const marksEnd = between.findIndex((u) => u.k !== 'M');
  const lead = marksEnd < 0 ? between.length : marksEnd;
  const cons = between.slice(lead).map((u) => u.s);
  const len = cons.length;
  if (len <= 1) return lead;
  let onset = 1;
  const [a, b] = [cons[len - 2], cons[len - 1]];
  if ((GLIDES.includes(b) && a !== 'r') || (a === 'k' && b === 'ṣ') || (a === 'j' && b === 'ñ')) onset = 2;
  if (onset === 2 && len >= 3 && cons[len - 3] === 'k' && a === 'ṣ') onset = 3; // kṣ + glide
  return lead + (len - onset);
}

/**
 * Split one line (a pada or half-verse) into weighed syllables.
 * Guru if the vowel is long, or followed by anusvara/visarga, or by two or more consonants
 * (even across a word boundary). Otherwise laghu.
 */
export function scanLine(text: string): Syllable[] {
  const units = tokenize(text);
  const vIdx = units.map((u, i) => (u.k === 'V' ? i : -1)).filter((i) => i >= 0);
  const out: Syllable[] = [];
  let displayStart = 0;

  vIdx.forEach((vi, n) => {
    const v = units[vi] as Extract<Unit, { k: 'V' }>;
    const nextV = n + 1 < vIdx.length ? vIdx[n + 1] : units.length;
    // What follows the vowel up to the next vowel
    const after = units.slice(vi + 1, nextV);
    const marks = after.filter((u) => u.k === 'M');
    const cons = after.filter((u) => u.k === 'C');

    let weight: Weight = 'L';
    let why = 'short vowel';
    if (v.long) {
      weight = 'G';
      why = 'long vowel';
    } else if (marks.length && after[0]?.k === 'M') {
      weight = 'G';
      why = after[0].s === 'ṃ' ? 'anusvara (ṃ)' : 'visarga (ḥ)';
    } else if (cons.length >= 2) {
      weight = 'G';
      why = 'followed by a consonant cluster';
    } else if (n === vIdx.length - 1 && cons.length >= 1) {
      weight = 'G';
      why = 'closed by a final consonant';
    }

    // Display only (weight is already decided): where does this syllable end?
    let end: number;
    if (n === vIdx.length - 1) end = units.length;
    else end = vi + 1 + displaySplit(after);
    const text2 = units
      .slice(displayStart, end)
      .map((u) => u.s)
      .join('')
      .trim();
    if (weight === 'L' && /[^aeiouāīūṛṝḷḹ\s]$/.test(text2)) why = 'short vowel; its final consonant joins the next word’s vowel';
    out.push({ text: text2, weight, why });
    displayStart = end;
  });
  return out;
}

export interface PadaCheck {
  n: number; // 1..4
  syllables: Syllable[];
  rules: { label: string; ok: boolean; note?: string }[];
}

/** Split a verse into padas: by danda/newline, then halves of 16 are cut 8 + 8. */
export function splitVerse(input: string): string[] | null {
  const iast = hasDevanagari(input) ? devanagariToIast(input) : input;
  const parts = iast
    .replace(/\d+/g, ' ')
    .split(/\|+|\n|;/)
    .map((p) => p.trim())
    .filter((p) => p && tokenize(p).some((u) => u.k === 'V'));
  return parts.length ? parts : null;
}

export function scanVerse(input: string): { padas: PadaCheck[]; total: number } | null {
  const parts = splitVerse(input);
  if (!parts) return null;
  // Scan each line, then regroup the syllables into padas of 8 where a line holds 16 or 32.
  const lines = parts.map((p) => scanLine(p));
  const padasRaw: Syllable[][] = [];
  for (const l of lines) {
    if (l.length === 16) padasRaw.push(l.slice(0, 8), l.slice(8));
    else if (l.length === 32) for (let k = 0; k < 4; k++) padasRaw.push(l.slice(k * 8, k * 8 + 8));
    else padasRaw.push(l);
  }
  const padas = padasRaw.map((syl, i) => checkPada(syl, i + 1));
  return { padas, total: padasRaw.reduce((s, p) => s + p.length, 0) };
}

/** The classical shloka rules for one pada (1-based position n in the verse). */
export function checkPada(syl: Syllable[], n: number): PadaCheck {
  const odd = n % 2 === 1;
  const w = (i: number) => syl[i - 1]?.weight;
  const rules = [
    { label: '8 syllables', ok: syl.length === 8, note: syl.length === 8 ? undefined : `has ${syl.length}` },
    { label: '5th laghu', ok: w(5) === 'L' },
    { label: '6th guru', ok: w(6) === 'G' },
    odd
      ? { label: '7th guru (odd pada)', ok: w(7) === 'G', note: w(7) === 'G' || syl.length !== 8 ? undefined : 'a permitted variation (vipulā) in the epics' }
      : { label: '7th laghu (even pada)', ok: w(7) === 'L' },
    { label: '2nd & 3rd not both laghu', ok: !(w(2) === 'L' && w(3) === 'L') },
  ];
  return { n, syllables: syl, rules };
}
