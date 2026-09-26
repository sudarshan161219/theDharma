/**
 * A small, self-contained panchanga calculator.
 *
 * Sun and Moon positions use the low-precision series from Meeus, “Astronomical Algorithms”
 * (ch. 25 and 47, main terms only): good to a few tenths of a degree, so tithi and nakshatra
 * boundaries are right to within about an hour. Sidereal positions use the Lahiri ayanamsa.
 * Times are taken for India (IST, UTC+5:30), with sunrise fixed at 06:00 as a convention.
 */

const RAD = Math.PI / 180;
const norm = (x: number) => ((x % 360) + 360) % 360;
const sin = (deg: number) => Math.sin(deg * RAD);

export const IST_OFFSET_MIN = 330;
const J2000 = 2451545;

export const julianDay = (d: Date) => d.getTime() / 86400000 + 2440587.5;

/** Tropical longitude of the Sun, degrees. */
export function sunLongitude(jd: number): number {
  const T = (jd - J2000) / 36525;
  const L0 = 280.46646 + 36000.76983 * T;
  const M = 357.52911 + 35999.05029 * T;
  const C = (1.914602 - 0.004817 * T) * sin(M) + 0.019993 * sin(2 * M) + 0.000289 * sin(3 * M);
  return norm(L0 + C);
}

/** Tropical longitude of the Moon, degrees (main periodic terms). */
export function moonLongitude(jd: number): number {
  const T = (jd - J2000) / 36525;
  const L = 218.3164477 + 481267.88123421 * T;
  const D = 297.8501921 + 445267.1114034 * T;
  const M = 357.5291092 + 35999.0502909 * T;
  const Mp = 134.9633964 + 477198.8675055 * T;
  const F = 93.272095 + 483202.0175233 * T;
  const terms =
    6.288774 * sin(Mp) +
    1.274027 * sin(2 * D - Mp) +
    0.658314 * sin(2 * D) +
    0.213618 * sin(2 * Mp) -
    0.185116 * sin(M) -
    0.114332 * sin(2 * F) +
    0.058793 * sin(2 * D - 2 * Mp) +
    0.057066 * sin(2 * D - M - Mp) +
    0.053322 * sin(2 * D + Mp) +
    0.045758 * sin(2 * D - M) -
    0.040923 * sin(M - Mp) -
    0.03472 * sin(D) -
    0.030383 * sin(M + Mp) +
    0.015327 * sin(2 * D - 2 * F) -
    0.012528 * sin(Mp + 2 * F) +
    0.01098 * sin(Mp - 2 * F) +
    0.010675 * sin(4 * D - Mp) +
    0.010034 * sin(3 * Mp) +
    0.008548 * sin(4 * D - 2 * Mp);
  return norm(L + terms);
}

/** Lahiri ayanamsa (precession offset between tropical and sidereal zodiacs), degrees. */
export const ayanamsa = (jd: number) => 23.853 + ((jd - J2000) / 365.25) * (50.29 / 3600);

/** Moon minus Sun, 0–360: 0 at new moon, 180 at full moon. */
export const elongation = (jd: number) => norm(moonLongitude(jd) - sunLongitude(jd));

/** The new moon at or before jd. */
export function newMoonBefore(jd: number): number {
  let t = jd - elongation(jd) / 12.19;
  for (let i = 0; i < 6; i++) {
    let e = elongation(t);
    if (e > 180) e -= 360;
    t -= e / 12.19;
  }
  return t > jd + 1e-6 ? newMoonBefore(jd - 25) : t;
}

export const TITHIS = [
  'Pratipada', 'Dvitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami',
  'Navami', 'Dashami', 'Ekadashi', 'Dvadashi', 'Trayodashi', 'Chaturdashi',
];

export const NAKSHATRAS: { name: string; deity: string }[] = [
  { name: 'Ashvini', deity: 'the Ashvins' },
  { name: 'Bharani', deity: 'Yama' },
  { name: 'Krittika', deity: 'Agni' },
  { name: 'Rohini', deity: 'Prajapati' },
  { name: 'Mrigashira', deity: 'Soma' },
  { name: 'Ardra', deity: 'Rudra' },
  { name: 'Punarvasu', deity: 'Aditi' },
  { name: 'Pushya', deity: 'Brihaspati' },
  { name: 'Ashlesha', deity: 'the Serpents' },
  { name: 'Magha', deity: 'the Pitris' },
  { name: 'Purva Phalguni', deity: 'Bhaga' },
  { name: 'Uttara Phalguni', deity: 'Aryaman' },
  { name: 'Hasta', deity: 'Savitri' },
  { name: 'Chitra', deity: 'Tvashtri' },
  { name: 'Svati', deity: 'Vayu' },
  { name: 'Vishakha', deity: 'Indra and Agni' },
  { name: 'Anuradha', deity: 'Mitra' },
  { name: 'Jyeshtha', deity: 'Indra' },
  { name: 'Mula', deity: 'Nirriti' },
  { name: 'Purva Ashadha', deity: 'the Waters (Apah)' },
  { name: 'Uttara Ashadha', deity: 'the Vishvedevas' },
  { name: 'Shravana', deity: 'Vishnu' },
  { name: 'Dhanishtha', deity: 'the Vasus' },
  { name: 'Shatabhisha', deity: 'Varuna' },
  { name: 'Purva Bhadrapada', deity: 'Aja Ekapada' },
  { name: 'Uttara Bhadrapada', deity: 'Ahirbudhnya' },
  { name: 'Revati', deity: 'Pushan' },
];

export const YOGAS = [
  'Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti', 'Shula',
  'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata', 'Variyan',
  'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti',
];

const MOVABLE_KARANAS = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti'];

export const RASHIS = ['Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya', 'Tula', 'Vrishchika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'];

export const MASAS = ['Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha', 'Shravana', 'Bhadrapada', 'Ashvina', 'Kartika', 'Margashirsha', 'Pausha', 'Magha', 'Phalguna'];

export const RITUS = ['Vasanta (spring)', 'Grishma (summer)', 'Varsha (rains)', 'Sharad (autumn)', 'Hemanta (early winter)', 'Shishira (late winter)'];

export const VARAS: { name: string; graha: string }[] = [
  { name: 'Ravivara', graha: 'Sun' },
  { name: 'Somavara', graha: 'Moon' },
  { name: 'Mangalavara', graha: 'Mars' },
  { name: 'Budhavara', graha: 'Mercury' },
  { name: 'Guruvara', graha: 'Jupiter' },
  { name: 'Shukravara', graha: 'Venus' },
  { name: 'Shanivara', graha: 'Saturn' },
];

/** The sixty-year cycle, as used in South and West India (year 1, Prabhava, began in 1987). */
export const SAMVATSARAS = [
  'Prabhava', 'Vibhava', 'Shukla', 'Pramoda', 'Prajapati', 'Angirasa', 'Shrimukha', 'Bhava', 'Yuva', 'Dhatu',
  'Ishvara', 'Bahudhanya', 'Pramathi', 'Vikrama', 'Vrisha', 'Chitrabhanu', 'Svabhanu', 'Tarana', 'Parthiva', 'Vyaya',
  'Sarvajit', 'Sarvadhari', 'Virodhi', 'Vikriti', 'Khara', 'Nandana', 'Vijaya', 'Jaya', 'Manmatha', 'Durmukhi',
  'Hevilambi', 'Vilambi', 'Vikari', 'Sharvari', 'Plava', 'Shubhakrit', 'Shobhakrit', 'Krodhi', 'Vishvavasu', 'Parabhava',
  'Plavanga', 'Kilaka', 'Saumya', 'Sadharana', 'Virodhikrit', 'Paridhavi', 'Pramadi', 'Ananda', 'Rakshasa', 'Nala',
  'Pingala', 'Kalayukti', 'Siddharthi', 'Raudri', 'Durmati', 'Dundubhi', 'Rudhirodgari', 'Raktakshi', 'Krodhana', 'Akshaya',
];

export interface Panchanga {
  /** 0–29: 0 = Shukla Pratipada, 14 = Purnima, 29 = Amavasya. */
  tithiIndex: number;
  tithi: string;
  paksha: 'Shukla' | 'Krishna';
  /** Fraction of the current tithi already elapsed, 0–1. */
  tithiProgress: number;
  elongation: number;
  nakshatraIndex: number;
  nakshatra: string;
  nakshatraDeity: string;
  yoga: string;
  karana: string;
  vara: string;
  varaGraha: string;
  sunRashi: string;
  moonRashi: string;
  masaIndex: number;
  masa: string;
  adhika: boolean;
  ritu: string;
  /** Gregorian year in which this lunar year (from Chaitra) began. */
  yearStart: number;
  shaka: number;
  vikram: number;
  samvatsara: string;
  samvatsaraIndex: number;
}

export const tithiName = (i: number) => (i === 14 ? 'Purnima' : i === 29 ? 'Amavasya' : TITHIS[i % 15]);

const siderealSun = (jd: number) => norm(sunLongitude(jd) - ayanamsa(jd));
const siderealMoon = (jd: number) => norm(moonLongitude(jd) - ayanamsa(jd));
const rashiIndex = (lng: number) => Math.floor(lng / 30);

/** Lunar month (amanta: new moon to new moon), named by the sun's sign at the month's new moon. */
export function lunarMonth(jd: number): { index: number; adhika: boolean } {
  const start = newMoonBefore(jd);
  const end = newMoonBefore(start + 32);
  const s1 = rashiIndex(siderealSun(start));
  const s2 = rashiIndex(siderealSun(end));
  // No sankranti (sign change) during the month: it is an extra (adhika) month.
  return { index: (s1 + 1) % 12, adhika: s1 === s2 };
}

/** Panchanga for an instant. */
export function panchanga(date: Date): Panchanga {
  const jd = julianDay(date);
  const e = elongation(jd);
  const tithiIndex = Math.floor(e / 12);
  const sm = siderealMoon(jd);
  const ss = siderealSun(jd);
  const nak = Math.floor(sm / (360 / 27));
  const yoga = Math.floor(norm(sm + ss) / (360 / 27));
  const half = Math.floor(e / 6);
  const karana = half === 0 ? 'Kimstughna' : half >= 57 ? ['Shakuni', 'Chatushpada', 'Naga'][half - 57] : MOVABLE_KARANAS[(half - 1) % 7];
  const ist = new Date(date.getTime() + IST_OFFSET_MIN * 60000);
  const month = lunarMonth(jd);
  const gYear = ist.getUTCFullYear();
  // Before Chaitra (in Jan–Apr the late months of the old year are still running).
  const yearStart = ist.getUTCMonth() <= 3 && month.index >= 8 ? gYear - 1 : gYear;
  const sIdx = (((yearStart - 1987) % 60) + 60) % 60;
  return {
    tithiIndex,
    tithi: tithiName(tithiIndex),
    paksha: tithiIndex < 15 ? 'Shukla' : 'Krishna',
    tithiProgress: (e % 12) / 12,
    elongation: e,
    nakshatraIndex: nak,
    nakshatra: NAKSHATRAS[nak].name,
    nakshatraDeity: NAKSHATRAS[nak].deity,
    yoga: YOGAS[yoga],
    karana,
    vara: VARAS[ist.getUTCDay()].name,
    varaGraha: VARAS[ist.getUTCDay()].graha,
    sunRashi: RASHIS[rashiIndex(ss)],
    moonRashi: RASHIS[rashiIndex(sm)],
    masaIndex: month.index,
    masa: MASAS[month.index],
    adhika: month.adhika,
    ritu: RITUS[Math.floor(month.index / 2)],
    yearStart,
    shaka: yearStart - 78,
    vikram: yearStart + 57,
    samvatsara: SAMVATSARAS[sIdx],
    samvatsaraIndex: sIdx,
  };
}

/** 06:00 IST on the given IST calendar day. */
export function sunriseIST(y: number, m: number, d: number): Date {
  return new Date(Date.UTC(y, m, d, 6, 0) - IST_OFFSET_MIN * 60000);
}

/** Today's calendar date in India. */
export function todayIST(now = new Date()): { y: number; m: number; d: number } {
  const ist = new Date(now.getTime() + IST_OFFSET_MIN * 60000);
  return { y: ist.getUTCFullYear(), m: ist.getUTCMonth(), d: ist.getUTCDate() };
}

export interface FestivalRule {
  id: string;
  name: string;
  /** Lunar festival: amanta month index and tithi index (0–29). */
  masa?: number;
  tithi?: number;
  /** Solar festival: the day the sun enters this sidereal sign. */
  sankranti?: number;
  /** When the tithi must prevail: at sunrise (default), in the evening (pradosha) or at midnight (nishitha). */
  at?: 'sunrise' | 'evening' | 'midnight';
  note: string;
}

export interface FestivalDate {
  rule: FestivalRule;
  date: Date;
}

const AT_HOUR = { sunrise: 6, evening: 19, midnight: 24 } as const;

const tithiAt = (y: number, m: number, d: number, hour: number) =>
  Math.floor(elongation(julianDay(new Date(Date.UTC(y, m, d, hour) - IST_OFFSET_MIN * 60000))) / 12);

/**
 * Find the next date of each festival from `from`, scanning day by day. A lunar festival falls on the
 * first day whose tithi matches at its observance time (sunrise, evening or midnight). For sunrise
 * festivals, a tithi that begins after one sunrise and ends before the next (kshaya) counts for that day.
 */
export function upcomingFestivals(rules: FestivalRule[], from = new Date(), days = 400): FestivalDate[] {
  const { y, m, d } = todayIST(from);
  const found = new Map<string, FestivalDate>();
  for (let i = 0; i < days && found.size < rules.length; i++) {
    const day = sunriseIST(y, m, d + i);
    const jd = julianDay(day);
    const month = lunarMonth(jd);
    const t0 = tithiAt(y, m, d + i, 6);
    const t1 = tithiAt(y, m, d + i + 1, 6);
    const skipped = (t1 - t0 + 30) % 30 === 2 ? (t0 + 1) % 30 : -1;
    const sign0 = rashiIndex(siderealSun(jd));
    const sign1 = rashiIndex(siderealSun(julianDay(sunriseIST(y, m, d + i + 1))));
    for (const r of rules) {
      if (found.has(r.id)) continue;
      let hit = false;
      if (r.sankranti !== undefined) {
        // A sankranti belongs to the day on which the sun changes sign.
        hit = sign0 !== r.sankranti && sign1 === r.sankranti;
      } else if (r.tithi !== undefined && !month.adhika && month.index === r.masa) {
        const at = r.at ?? 'sunrise';
        hit = at === 'sunrise' ? t0 === r.tithi || skipped === r.tithi : tithiAt(y, m, d + i, AT_HOUR[at]) === r.tithi;
      }
      if (hit) found.set(r.id, { rule: r, date: day });
    }
  }
  return [...found.values()].sort((a, b) => a.date.getTime() - b.date.getTime());
}
