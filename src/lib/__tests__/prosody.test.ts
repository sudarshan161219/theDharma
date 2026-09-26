import { describe, expect, it } from 'vitest';
import { devanagariToIast, scanLine, scanVerse } from '../prosody';
import { examples } from '../../data/chandas';

const pattern = (text: string) =>
  scanLine(text)
    .map((s) => s.weight)
    .join('');

describe('syllable weight', () => {
  it('marks long vowels, anusvara/visarga and clusters as guru', () => {
    expect(pattern('kā')).toBe('G');
    expect(pattern('saṃ')).toBe('G');
    expect(pattern('duḥ')).toBe('G');
    // “dhar-ma”: the short a before r+m is heavy by position
    expect(pattern('dharma')).toBe('GL');
    expect(pattern('ka ni ru')).toBe('LLL');
  });

  it('counts a cluster across a word boundary', () => {
    // “ma kṣe”: the final a of the first word is followed by kṣ
    expect(pattern('ma kṣe')).toBe('GG');
  });
});

describe('Devanagari', () => {
  it('transliterates to IAST', () => {
    expect(devanagariToIast('धर्मक्षेत्रे कुरुक्षेत्रे')).toBe('dharmakṣetre kurukṣetre');
    expect(devanagariToIast('मा निषाद')).toBe('mā niṣāda');
  });
});

describe('shloka rules', () => {
  it.each(examples.map((e) => [e.ref, e.text]))('%s passes every rule', (_ref, text) => {
    const r = scanVerse(text)!;
    expect(r.padas).toHaveLength(4);
    for (const p of r.padas) {
      expect(p.syllables).toHaveLength(8);
      expect(p.rules.every((rule) => rule.ok)).toBe(true);
    }
  });

  it('gives the same result for Devanagari and IAST', () => {
    const iast = scanVerse('dharmakṣetre kurukṣetre samavetā yuyutsavaḥ')!;
    const deva = scanVerse('धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः')!;
    expect(deva.padas.map((p) => p.syllables.map((s) => s.weight).join(''))).toEqual(iast.padas.map((p) => p.syllables.map((s) => s.weight).join('')));
  });

  it('flags a Gayatri line as not a shloka', () => {
    const r = scanVerse('tat savitur vareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt')!;
    expect(r.padas.length).not.toBe(4);
  });
});
