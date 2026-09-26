import { describe, expect, it } from 'vitest';
import { brahmaElapsedAtYear, eras, locate, toAstroYear } from '../cosmicPosition';
import { compareGotras, gotras } from '../../data/gotra';

describe('cosmic time', () => {
  it('puts 2026 CE in Kali-yuga of the 28th mahayuga of the 7th manvantara', () => {
    const r = locate(brahmaElapsedAtYear(2026));
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.pos.brahmaYear).toBe(51);
    expect(r.pos.brahmaDay).toBe(1);
    expect(r.pos.manvantara).toBe(7);
    expect(r.pos.mahayuga).toBe(28);
    expect(r.pos.yuga?.id).toBe('kali');
    expect(r.pos.yearOfYuga).toBe(5128);
  });

  it('makes 3102 BCE the first year of Kali', () => {
    const r = locate(brahmaElapsedAtYear(toAstroYear(3102, 'BCE')));
    expect(r.ok && r.pos.yearOfYuga).toBe(1);
  });

  it('refuses times before Brahma’s birth', () => {
    expect(locate(-1).ok).toBe(false);
  });

  it('gives regional eras', () => {
    expect(eras(2026)).toEqual({ kali: 5128, vikram: 2083, shaka: 1948 });
  });
});

describe('gotra check', () => {
  const g = (id: string) => gotras.find((x) => x.id === id)!;

  it('bars the same gotra', () => {
    expect(compareGotras(g('bharadvaja'), g('bharadvaja')).barred).toBe(true);
  });

  it('bars a majority-shared pravara in the Angiras gana', () => {
    expect(compareGotras(g('bharadvaja'), g('gargya')).barred).toBe(true);
  });

  it('allows a single shared pravara-rishi in the Angiras gana', () => {
    expect(compareGotras(g('bharadvaja'), g('gautama')).barred).toBe(false);
  });

  it('allows different ganas', () => {
    expect(compareGotras(g('atreya'), g('gautama')).barred).toBe(false);
  });
});
