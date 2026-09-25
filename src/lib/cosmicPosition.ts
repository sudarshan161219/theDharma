import { BRAHMA_LIFE_YEARS, KALPA_YEARS, MAHAYUGA_YEARS, MANVANTARA_SANDHI, MANVANTARA_YEARS, manvantaras, yugas } from '../data/cosmos';
import { kalpaElapsed } from './time';

/** Brahma has completed 50 years; we are on the first day of his 51st year. */
const BRAHMA_YEARS_DONE = 50;
const DAY_AND_NIGHT = 2 * KALPA_YEARS;
const BRAHMA_YEAR = 360 * DAY_AND_NIGHT;

/** Years since Brahma's birth, for an astronomical year (1 BCE = 0, 2 BCE = -1 …). */
export const brahmaElapsedAtYear = (astroYear: number) => BRAHMA_YEARS_DONE * BRAHMA_YEAR + kalpaElapsed(astroYear);

/** Years since Brahma's birth at a point inside the present kalpa. */
export const brahmaElapsedAtKalpa = (kalpaYears: number) => BRAHMA_YEARS_DONE * BRAHMA_YEAR + kalpaYears;

/** Convert the calendar the user typed into an astronomical year number. */
export const toAstroYear = (year: number, era: 'CE' | 'BCE') => (era === 'CE' ? year : 1 - year);

export type Phase = 'dawn' | 'main' | 'dusk';

export interface Position {
  /** Years since Brahma's birth. */
  B: number;
  brahmaYear: number;
  brahmaDay: number;
  /** Day of Brahma (a kalpa) or his night (dissolution). */
  isNight: boolean;
  kalpaName: string;
  /** Years into the kalpa (day) or the night. */
  kalpaYears: number;
  /** null when in a twilight (sandhi) between manvantaras. */
  manvantara: number | null;
  sandhiAfter: number | null;
  mahayuga: number | null;
  yuga: (typeof yugas)[number] | null;
  yearOfYuga: number | null;
  yugaRemaining: number | null;
  phase: Phase | null;
  frac: { life: number; kalpa: number; manvantara: number | null; mahayuga: number | null; yuga: number | null };
}

export type Outcome = { ok: true; pos: Position } | { ok: false; reason: string };

function kalpaName(year: number, day: number) {
  if (year === 51 && day === 1) return 'Shveta-Varaha Kalpa (the present day of Brahma)';
  if (year === 50 && day === 360) return 'Padma Kalpa (last day of the first half of Brahma’s life)';
  return `Day ${day} of Brahma’s year ${year}`;
}

/** Locate a moment, given as years since Brahma's birth, in the whole scheme of cosmic time. */
export function locate(B: number): Outcome {
  if (!Number.isFinite(B)) return { ok: false, reason: 'Enter a number.' };
  if (B < 0) return { ok: false, reason: 'That is before the birth of Brahma, before this creation began.' };
  if (B >= BRAHMA_LIFE_YEARS) return { ok: false, reason: 'That is beyond Brahma’s 100 years: the great dissolution (maha-pralaya), when all returns to Prakriti.' };

  const cycle = Math.floor(B / DAY_AND_NIGHT);
  const brahmaYear = Math.floor(cycle / 360) + 1;
  const brahmaDay = (cycle % 360) + 1;
  const within = B - cycle * DAY_AND_NIGHT;
  const isNight = within >= KALPA_YEARS;
  const kalpaYears = isNight ? within - KALPA_YEARS : within;

  const base: Position = {
    B,
    brahmaYear,
    brahmaDay,
    isNight,
    kalpaName: kalpaName(brahmaYear, brahmaDay),
    kalpaYears,
    manvantara: null,
    sandhiAfter: null,
    mahayuga: null,
    yuga: null,
    yearOfYuga: null,
    yugaRemaining: null,
    phase: null,
    frac: { life: B / BRAHMA_LIFE_YEARS, kalpa: kalpaYears / KALPA_YEARS, manvantara: null, mahayuga: null, yuga: null },
  };
  if (isNight) return { ok: true, pos: base };

  // Kalpa = opening twilight + 14 × (manvantara + twilight)
  if (kalpaYears < MANVANTARA_SANDHI) return { ok: true, pos: { ...base, sandhiAfter: 0 } };
  const t = kalpaYears - MANVANTARA_SANDHI;
  const m = Math.floor(t / (MANVANTARA_YEARS + MANVANTARA_SANDHI));
  const r = t - m * (MANVANTARA_YEARS + MANVANTARA_SANDHI);
  if (r >= MANVANTARA_YEARS) return { ok: true, pos: { ...base, sandhiAfter: m + 1 } };

  const mahayuga = Math.floor(r / MAHAYUGA_YEARS) + 1;
  let ry = r - (mahayuga - 1) * MAHAYUGA_YEARS;
  let yi = 0;
  while (ry >= yugas[yi].humanYears) {
    ry -= yugas[yi].humanYears;
    yi++;
  }
  const yuga = yugas[yi];
  const twilight = yuga.humanYears / 12; // dawn and dusk are each 1/12 of the yuga
  const phase: Phase = ry < twilight ? 'dawn' : ry >= yuga.humanYears - twilight ? 'dusk' : 'main';

  return {
    ok: true,
    pos: {
      ...base,
      manvantara: m + 1,
      mahayuga,
      yuga,
      yearOfYuga: Math.floor(ry) + 1,
      yugaRemaining: yuga.humanYears - Math.floor(ry) - 1,
      phase,
      frac: { ...base.frac, manvantara: r / MANVANTARA_YEARS, mahayuga: (r - (mahayuga - 1) * MAHAYUGA_YEARS) / MAHAYUGA_YEARS, yuga: ry / yuga.humanYears },
    },
  };
}

export const manuName = (n: number) => manvantaras[n - 1]?.manu ?? `${n}th`;

/** Regional era years for an astronomical year (the new year falls in March–April, so these are approximate). */
export function eras(astroYear: number) {
  return {
    kali: astroYear + 3102,
    vikram: astroYear + 57,
    shaka: astroYear - 78,
  };
}

const kalpaAt = (manv: number, mahayuga: number, yugaIndex: number, offset = 0) =>
  MANVANTARA_SANDHI +
  (manv - 1) * (MANVANTARA_YEARS + MANVANTARA_SANDHI) +
  (mahayuga - 1) * MAHAYUGA_YEARS +
  yugas.slice(0, yugaIndex).reduce((s, y) => s + y.humanYears, 0) +
  offset;

/** Landmarks of sacred time, as years since Brahma's birth. */
export const presets: { id: string; label: string; note: string; B: () => number; year?: { value: number; era: 'CE' | 'BCE' } }[] = [
  { id: 'now', label: 'Today', note: 'This year', B: () => brahmaElapsedAtYear(new Date().getFullYear()) },
  { id: 'kali', label: 'Start of Kali-yuga', note: '3102 BCE, when Krishna left the world', B: () => brahmaElapsedAtYear(-3101), year: { value: 3102, era: 'BCE' } },
  { id: 'war', label: 'The Mahabharata war', note: 'Traditional date, 36 years before Kali: 3138 BCE', B: () => brahmaElapsedAtYear(-3137), year: { value: 3138, era: 'BCE' } },
  { id: 'rama', label: 'Rama’s reign', note: 'By tradition at the close of the Treta of the 24th mahayuga', B: () => brahmaElapsedAtKalpa(kalpaAt(7, 24, 2) - 1) },
  { id: 'vamana', label: 'Start of this manvantara', note: 'Vaivasvata Manu begins his reign', B: () => brahmaElapsedAtKalpa(kalpaAt(7, 1, 0)) },
  { id: 'kalpa', label: 'Dawn of this kalpa', note: 'Varaha lifts the Earth; Brahma begins to create', B: () => brahmaElapsedAtKalpa(0) },
  { id: 'kalki', label: 'Kalki & the next Satya-yuga', note: 'End of the 28th Kali-yuga', B: () => brahmaElapsedAtKalpa(kalpaAt(7, 29, 0)) },
  { id: 'savarni', label: 'The 8th Manu, Savarni', note: 'Next manvantara: Bali as Indra, Ashvatthama among the seven sages', B: () => brahmaElapsedAtKalpa(kalpaAt(8, 1, 0)) },
  { id: 'night', label: 'Brahma’s night', note: 'End of this kalpa: the three worlds dissolve', B: () => brahmaElapsedAtKalpa(KALPA_YEARS) },
];
