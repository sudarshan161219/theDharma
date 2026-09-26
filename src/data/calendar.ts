import type { Source } from './types';
import { defn, src } from './sources';
import type { FestivalRule } from '../lib/panchanga';

/** Tithi index helpers: Shukla 1–15 → 0–14, Krishna 1–15 → 15–29 (amanta months). */
const S = (n: number) => n - 1;
const K = (n: number) => 14 + n;

/** Major festivals by the amanta (new-moon-ending) lunar month used in South and West India. */
export const festivals: FestivalRule[] = [
  { id: 'makar', name: 'Makar Sankranti · Pongal', sankranti: 9, note: 'The sun enters Makara (sidereal Capricorn) and begins its northward course (uttarayana).' },
  { id: 'vasant', name: 'Vasant Panchami', masa: 10, tithi: S(5), note: 'Magha Shukla 5: worship of Sarasvati; spring begins.' },
  { id: 'shivaratri', name: 'Maha Shivaratri', masa: 10, tithi: K(14), at: 'midnight', note: 'Magha Krishna 14 (amanta): the night of Shiva, kept awake in worship.' },
  { id: 'holi', name: 'Holika Dahan', masa: 11, tithi: S(15), at: 'evening', note: 'Phalguna Purnima: the bonfire of Holika; colours are played the next day.' },
  { id: 'ugadi', name: 'Ugadi · Gudi Padwa · New Year', masa: 0, tithi: S(1), note: 'Chaitra Shukla 1: the lunar new year, and the start of the new samvatsara.' },
  { id: 'rama', name: 'Rama Navami', masa: 0, tithi: S(9), note: 'Chaitra Shukla 9: birth of Rama at midday.' },
  { id: 'hanuman', name: 'Hanuman Jayanti', masa: 0, tithi: S(15), note: 'Chaitra Purnima in North India (other regions keep other dates).' },
  { id: 'vaisakhi', name: 'Mesha Sankranti · Vaisakhi · Vishu', sankranti: 0, note: 'The sun enters Mesha: the solar new year in Punjab, Kerala, Tamil Nadu, Bengal, Assam and Odisha.' },
  { id: 'akshaya', name: 'Akshaya Tritiya', masa: 1, tithi: S(3), note: 'Vaishakha Shukla 3: “never-diminishing”; Parashurama Jayanti.' },
  { id: 'buddha', name: 'Buddha Purnima', masa: 1, tithi: S(15), note: 'Vaishakha Purnima.' },
  { id: 'guru', name: 'Guru Purnima', masa: 3, tithi: S(15), note: 'Ashadha Purnima: honour to the guru; Vyasa’s birthday (Vyasa Purnima).' },
  { id: 'nag', name: 'Nag Panchami', masa: 4, tithi: S(5), note: 'Shravana Shukla 5: worship of the serpents.' },
  { id: 'raksha', name: 'Raksha Bandhan', masa: 4, tithi: S(15), note: 'Shravana Purnima; also Upakarma, when the sacred thread is renewed.' },
  { id: 'janmashtami', name: 'Krishna Janmashtami', masa: 4, tithi: K(8), at: 'midnight', note: 'Krishna Ashtami of Shravana (amanta) — Bhadrapada in the North: Krishna born at midnight.' },
  { id: 'ganesha', name: 'Ganesha Chaturthi', masa: 5, tithi: S(4), note: 'Bhadrapada Shukla 4: birth of Ganesha.' },
  { id: 'anant', name: 'Anant Chaturdashi', masa: 5, tithi: S(14), note: 'Bhadrapada Shukla 14: Ganesha images are immersed.' },
  { id: 'pitru', name: 'Mahalaya Amavasya', masa: 5, tithi: K(15), note: 'Last day of Pitru Paksha, the fortnight for the ancestors.' },
  { id: 'navaratri', name: 'Sharad Navaratri begins', masa: 6, tithi: S(1), note: 'Ashvina Shukla 1: nine nights of Devi.' },
  { id: 'dussehra', name: 'Vijayadashami · Dussehra', masa: 6, tithi: S(10), note: 'Ashvina Shukla 10: Durga’s victory over Mahisha; Rama’s over Ravana.' },
  { id: 'sharad', name: 'Sharad Purnima', masa: 6, tithi: S(15), note: 'Ashvina Purnima: the harvest full moon; the Rasa-lila night.' },
  { id: 'karva', name: 'Karva Chauth', masa: 6, tithi: K(4), at: 'evening', note: 'Krishna 4 after Sharad Purnima: married women fast until moonrise.' },
  { id: 'dhanteras', name: 'Dhanteras', masa: 6, tithi: K(13), at: 'evening', note: 'Dhanvantari appears from the ocean with the nectar of immortality.' },
  { id: 'naraka', name: 'Naraka Chaturdashi', masa: 6, tithi: K(14), note: 'Krishna slays Narakasura; the oil bath before dawn.' },
  { id: 'diwali', name: 'Diwali (Lakshmi Puja)', masa: 6, tithi: K(15), at: 'evening', note: 'The new moon of Ashvina (amanta): lamps and the worship of Lakshmi.' },
  { id: 'govardhan', name: 'Govardhan Puja · Bali Pratipada', masa: 7, tithi: S(1), note: 'Kartika Shukla 1: Krishna lifts Govardhana; King Bali returns.' },
  { id: 'bhaidooj', name: 'Bhai Dooj', masa: 7, tithi: S(2), note: 'Kartika Shukla 2: Yama visits his sister Yamuna.' },
  { id: 'kartika', name: 'Kartika Purnima · Dev Deepavali', masa: 7, tithi: S(15), note: 'Shiva’s victory over Tripura; lamps on the ghats of Kashi.' },
  { id: 'gita', name: 'Gita Jayanti', masa: 8, tithi: S(11), note: 'Margashirsha Shukla 11 (Mokshada Ekadashi): the day the Gita was spoken.' },
];

export const pakshas = {
  shukla: 'Shukla paksha, the “bright half”: new moon to full moon, the moon waxing.',
  krishna: 'Krishna paksha, the “dark half”: full moon to new moon, the moon waning.',
};

/** The tithis repeat in five groups of three (Nanda, Bhadra, Jaya, Rikta, Purna). */
export const tithiGroups = [
  { name: 'Nanda', meaning: 'joyful', tithis: '1, 6, 11' },
  { name: 'Bhadra', meaning: 'auspicious', tithis: '2, 7, 12' },
  { name: 'Jaya', meaning: 'victorious', tithis: '3, 8, 13' },
  { name: 'Rikta', meaning: 'empty — avoided for new beginnings', tithis: '4, 9, 14' },
  { name: 'Purna', meaning: 'full', tithis: '5, 10, 15' },
];

/** Each month is named after the nakshatra near which its full moon falls. */
export const monthNakshatra = [
  'Chitra', 'Vishakha', 'Jyeshtha', 'Purva Ashadha', 'Shravana', 'Purva Bhadrapada',
  'Ashvini', 'Krittika', 'Mrigashira', 'Pushya', 'Magha', 'Purva Phalguni',
];

/** Rough Gregorian span of each amanta month. */
export const monthSpan = ['Mar–Apr', 'Apr–May', 'May–Jun', 'Jun–Jul', 'Jul–Aug', 'Aug–Sep', 'Sep–Oct', 'Oct–Nov', 'Nov–Dec', 'Dec–Jan', 'Jan–Feb', 'Feb–Mar'];

export const limbs: { name: string; sanskrit: string; what: string; count: string }[] = [
  { name: 'Tithi', sanskrit: 'तिथि', what: 'Lunar day: the time for the moon to gain 12° on the sun', count: '30 in a lunar month' },
  { name: 'Vara', sanskrit: 'वार', what: 'Weekday, each ruled by a graha', count: '7' },
  { name: 'Nakshatra', sanskrit: 'नक्षत्र', what: 'Lunar mansion: which 13°20′ of the sky the moon is in', count: '27' },
  { name: 'Yoga', sanskrit: 'योग', what: 'The sum of the sun’s and moon’s longitudes, in 13°20′ steps', count: '27' },
  { name: 'Karana', sanskrit: 'करण', what: 'Half a tithi', count: '11 (7 repeating, 4 fixed)' },
];

export const calendarSources: Source[] = [
  src.defPancanga,
  src.defTithi,
  src.defNakshatra,
  src.defSamvatsara,
  src.agniSamvatsaras,
  src.naradaYear,
  src.brihatSamhitaJupiter,
  src.vpTime,
  defn('amavasya', 'Amavasya'),
  defn('purnima', 'Purnima'),
  defn('adhikamasa', 'Adhika masa'),
  defn('sankranti', 'Sankranti'),
];
