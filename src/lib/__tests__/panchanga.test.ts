import { describe, expect, it } from 'vitest';
import { panchanga, sunriseIST, upcomingFestivals } from '../panchanga';
import { festivals } from '../../data/calendar';

const at = (y: number, m: number, d: number) => panchanga(sunriseIST(y, m - 1, d));

describe('panchanga at sunrise (IST)', () => {
  it('finds Ugadi 2025 (Chaitra Shukla Pratipada, 30 March)', () => {
    const p = at(2025, 3, 30);
    expect(p.masa).toBe('Chaitra');
    expect(p.tithi).toBe('Pratipada');
    expect(p.paksha).toBe('Shukla');
    expect(p.samvatsara).toBe('Vishvavasu');
    expect(p.shaka).toBe(1947);
  });

  it('has the old year running just before Ugadi', () => {
    const p = at(2025, 3, 20);
    expect(p.masa).toBe('Phalguna');
    expect(p.samvatsara).toBe('Krodhi');
  });

  it('finds the new moon of 11 January 2024', () => {
    const p = at(2024, 1, 11);
    expect(p.tithi).toBe('Amavasya');
    expect(p.masa).toBe('Margashirsha');
  });

  it('knows 2026–27 is Parabhava, Shaka 1948, Vikram 2083', () => {
    const p = at(2026, 9, 26);
    expect(p.samvatsara).toBe('Parabhava');
    expect(p.shaka).toBe(1948);
    expect(p.vikram).toBe(2083);
    expect(p.tithi).toBe('Purnima');
  });

  it('detects the adhika Jyeshtha of 2026', () => {
    const p = at(2026, 6, 1);
    expect(p.adhika).toBe(true);
    expect(p.masa).toBe('Jyeshtha');
  });
});

describe('festival dates', () => {
  const found = upcomingFestivals(festivals, new Date(Date.UTC(2025, 0, 1)));
  const on = (id: string) => {
    const f = found.find((x) => x.rule.id === id);
    return f?.date.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  };

  it.each([
    ['makar', '2025-01-14'],
    ['shivaratri', '2025-02-26'],
    ['holi', '2025-03-13'],
    ['ugadi', '2025-03-30'],
    ['rama', '2025-04-06'],
    ['ganesha', '2025-08-27'],
    ['dussehra', '2025-10-02'],
    ['diwali', '2025-10-20'],
  ])('%s falls on %s', (id, date) => {
    expect(on(id)).toBe(date);
  });
});
