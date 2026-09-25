import {
  CURRENT_MAHAYUGA,
  CURRENT_MANVANTARA,
  KALI_START_BCE,
  MAHAYUGA_YEARS,
  MANVANTARA_SANDHI,
  MANVANTARA_YEARS,
  yugas,
} from '../data/cosmos';

/** Years of Kali-yuga elapsed at the start of the given CE year (no year zero). */
export const kaliElapsed = (ceYear = new Date().getFullYear()) => ceYear + KALI_START_BCE - 1;

export const kaliRemaining = (ceYear?: number) => yugas[3].humanYears - kaliElapsed(ceYear);

/** Years elapsed since the start of the present kalpa (Shveta-Varaha). */
export function kalpaElapsed(ceYear?: number) {
  const firstThree = yugas[0].humanYears + yugas[1].humanYears + yugas[2].humanYears;
  return (
    MANVANTARA_SANDHI + // sandhi before the first Manu
    (CURRENT_MANVANTARA - 1) * (MANVANTARA_YEARS + MANVANTARA_SANDHI) +
    (CURRENT_MAHAYUGA - 1) * MAHAYUGA_YEARS +
    firstThree +
    kaliElapsed(ceYear)
  );
}

export const fmt = (n: number) => n.toLocaleString('en-IN');

/** Compact, readable figure: 4.32 billion, 306.72 million … */
export function human(n: number): string {
  const units: [number, string][] = [
    [1e12, 'trillion'],
    [1e9, 'billion'],
    [1e6, 'million'],
  ];
  for (const [v, w] of units) {
    if (n >= v) return `${+(n / v).toFixed(2)} ${w}`;
  }
  return fmt(n);
}
