import type { Source } from './types';
import { src } from './sources';

/** The four "original" gotras named in the Mahabharata (Shanti Parva CCXCVII). */
export const originalFour = ['angiras', 'kashyapa', 'vasishtha', 'bhrigu'];

/**
 * The eight gotra-founders (gotrakarin) of the Shrauta/pravara tradition: the seven sages of the
 * present manvantara plus Agastya. Every brahmin gotra is traced to one of them.
 */
export const gotrakarins: { id: string; note: string }[] = [
  { id: 'vishvamitra', note: 'The Kaushika gotras' },
  { id: 'jamadagni', note: 'Of the Bhrigu line (the Bhargavas, e.g. Vatsa / Shrivatsa)' },
  { id: 'bharadvaja', note: 'Of the Angiras line' },
  { id: 'gautama', note: 'Of the Angiras line' },
  { id: 'atri', note: 'The Atreya gotras' },
  { id: 'vasishtha', note: 'Includes the Kaundinya, Parashara and Upamanyu gotras' },
  { id: 'kashyapa', note: 'Includes Shandilya. Custom treats Kashyapa as the gotra of anyone who has lost theirs.' },
  { id: 'agastya', note: 'The eighth, added to the seven' },
];

/** The great families (ganas) under which gotras are grouped. */
export type Gana = 'Bhrigu' | 'Angiras' | 'Atri' | 'Vishvamitra' | 'Kashyapa' | 'Vasishtha' | 'Agastya';

export interface Gotra {
  id: string;
  name: string;
  /** Other common spellings/names, used by search. */
  aka?: string[];
  gana: Gana;
  /** Person id of the founding rishi (if profiled) — links to the Rishis page. */
  rishi?: string;
  /** The pravara as commonly recited (3 or 5 rishi-names). */
  pravara: string[];
  note?: string;
}

export const gotras: Gotra[] = [
  // Bhrigu
  { id: 'shrivatsa', name: 'Shrivatsa / Vatsa', aka: ['Srivatsa', 'Vatsa', 'Jamadagni'], gana: 'Bhrigu', rishi: 'jamadagni', pravara: ['Bhargava', 'Chyavana', 'Apnavana', 'Aurva', 'Jamadagnya'], note: 'The Bhargava gotra of Jamadagni and Parashurama. It has a five-rishi pravara.' },
  // Angiras
  { id: 'bharadvaja', name: 'Bharadvaja', aka: ['Bharadwaj', 'Bharadwaja'], gana: 'Angiras', rishi: 'bharadvaja', pravara: ['Angirasa', 'Barhaspatya', 'Bharadvaja'], note: 'Descends from Angiras through Brihaspati, Bharadvaja’s father.' },
  { id: 'gargya', name: 'Garga / Gargya', aka: ['Garg'], gana: 'Angiras', rishi: 'garga', pravara: ['Angirasa', 'Barhaspatya', 'Bharadvaja', 'Shainya', 'Gargya'], note: 'A branch of the Bharadvajas, and so sapravara with them.' },
  { id: 'gautama', name: 'Gautama', aka: ['Gotam', 'Gautam'], gana: 'Angiras', rishi: 'gautama', pravara: ['Angirasa', 'Ayasya', 'Gautama'] },
  { id: 'harita', name: 'Harita', aka: ['Harit', 'Haritasa'], gana: 'Angiras', pravara: ['Angirasa', 'Ambarisha', 'Yauvanashva'], note: 'A kshatriya-born line (from Mandhata’s house) that became brahmin.' },
  { id: 'kutsa', name: 'Kutsa / Kautsa', aka: ['Kautsa'], gana: 'Angiras', pravara: ['Angirasa', 'Mandhatra', 'Kautsa'] },
  { id: 'kanva', name: 'Kanva', aka: ['Kanvayana'], gana: 'Angiras', rishi: 'kanva', pravara: ['Angirasa', 'Ajamidha', 'Kanva'] },
  { id: 'maudgalya', name: 'Mudgala / Maudgalya', aka: ['Mudgal', 'Maudgalya'], gana: 'Angiras', pravara: ['Angirasa', 'Bharmyashva', 'Maudgalya'] },
  // Atri
  { id: 'atreya', name: 'Atreya / Atri', aka: ['Atri', 'Atrey'], gana: 'Atri', rishi: 'atri', pravara: ['Atreya', 'Archananasa', 'Shyavashva'] },
  // Vishvamitra
  { id: 'kaushika', name: 'Kaushika / Vishvamitra', aka: ['Kaushik', 'Koushik', 'Vishwamitra'], gana: 'Vishvamitra', rishi: 'vishvamitra', pravara: ['Vaishvamitra', 'Aghamarshana', 'Kaushika'], note: 'Some lines recite Vaishvamitra, Devarata, Audala instead.' },
  // Kashyapa
  { id: 'kashyapa', name: 'Kashyapa', aka: ['Kashyap', 'Kasyapa'], gana: 'Kashyapa', rishi: 'kashyapa', pravara: ['Kashyapa', 'Avatsara', 'Naidhruva'], note: 'The most widespread gotra. It is also assigned by custom when a family’s gotra is unknown.' },
  { id: 'shandilya', name: 'Shandilya', aka: ['Sandilya', 'Shandilya'], gana: 'Kashyapa', rishi: 'shandilya', pravara: ['Kashyapa', 'Avatsara', 'Shandilya'], note: 'Some lines recite Kashyapa, Avatsara, Daivala.' },
  // Vasishtha
  { id: 'vasishtha', name: 'Vasishtha', aka: ['Vashishtha', 'Vasishta', 'Vasisth'], gana: 'Vasishtha', rishi: 'vasishtha', pravara: ['Vasishtha', 'Aindrapramada', 'Abharadvasavya'], note: 'Also recited with a single rishi, Vasishtha.' },
  { id: 'kaundinya', name: 'Kaundinya', aka: ['Koundinya', 'Kaundinyasa'], gana: 'Vasishtha', pravara: ['Vasishtha', 'Maitravaruna', 'Kaundinya'] },
  { id: 'parashara', name: 'Parashara', aka: ['Parasar', 'Parashar'], gana: 'Vasishtha', rishi: 'parashara', pravara: ['Vasishtha', 'Shaktya', 'Parasharya'], note: 'The line of Vasishtha → Shakti → Parashara, and so of Vyasa.' },
  { id: 'upamanyu', name: 'Upamanyu', aka: ['Upmanyu'], gana: 'Vasishtha', rishi: 'upamanyu', pravara: ['Vasishtha', 'Aindrapramada', 'Abharadvasavya'] },
  // Agastya
  { id: 'agastya', name: 'Agastya', aka: ['Agasti', 'Agasthya'], gana: 'Agastya', rishi: 'agastya', pravara: ['Agastya', 'Dardhachyuta', 'Idhmavaha'], note: 'Idhmavaha is Agastya’s son (also called Dridhasyu).' },
];

/** Which person id stands at the head of each gana (for the tree). */
export const ganaHead: Record<Gana, string> = {
  Bhrigu: 'bhrigu',
  Angiras: 'angiras',
  Atri: 'atri',
  Vishvamitra: 'vishvamitra',
  Kashyapa: 'kashyapa',
  Vasishtha: 'vasishtha',
  Agastya: 'agastya',
};

export const gotraRules: { title: string; text: string; sources: Source[] }[] = [
  {
    title: 'What a gotra is',
    text: 'An unbroken line of descent in the male line from a rishi. It is recorded by name and recited at every Vedic rite (“… gotrotpanno …”). A gotra is not a caste and not a surname.',
    sources: [src.defGotra, src.defGotrakarin],
  },
  {
    title: 'What a pravara is',
    text: 'The one, two, three or five most illustrious rishis of the line, invoked when kindling the sacred fire and when greeting elders (abhivadana). Gotras whose pravaras coincide are treated as one family (see the checker below for the exact rule).',
    sources: [src.defPravara, src.defGotrapravara, src.conceptGotraPravara],
  },
  {
    title: 'Marriage',
    text: 'Dharmashastra forbids marriage between the same gotra (sagotra) or a shared pravara-rishi (sapravara). Manusmriti 3.5 calls a bride suitable who is “not of the same gotra”.',
    sources: [src.manu35, src.conceptGotraPravara],
  },
  {
    title: 'Where the lists come from',
    text: 'The Mahabharata says four gotras came first (Angiras, Kashyapa, Vasishtha, Bhrigu) and the rest arose from these. The Matsya Purana (chs. 195–202) gives the full lineages and pravaras of Bhrigu, Angiras, Atri, Vishvamitra, Kashyapa, Vasishtha, Agastya and others. The pravara-sutras of the Shrauta tradition systematise them.',
    sources: [src.mbhFourGotras, src.matsyaContents, src.skandaDharmaranyaGotras],
  },
  {
    title: 'Customs',
    text: 'A bride traditionally takes her husband’s gotra at marriage. Families who do not know their gotra are commonly assigned Kashyapa, “father of all beings”. Non-brahmin families often carry the gotra of their ancestral family priest. Practice differs across regions and communities.',
    sources: [src.defGotra, src.conceptGotraPravara],
  },
];

export const gotraSources: Source[] = [
  src.mbhFourGotras,
  src.matsyaContents,
  src.matsyaBhrigu,
  src.matsyaAngiras,
  src.matsyaVishvamitra,
  src.matsyaVasishtha,
  src.matsyaKashyapa,
  src.skandaDharmaranyaGotras,
  src.manu35,
  src.defGotra,
  src.defPravara,
  src.defGotrakarin,
  src.defGotrapravara,
  src.conceptGotraPravara,
];

/**
 * Classical pravara rule of thumb (as summarised in the pravara literature):
 * - the same gotra may not marry;
 * - in the Atri, Vishvamitra, Kashyapa, Vasishtha and Agastya ganas the whole gana counts as one family;
 * - in the Bhrigu and Angiras ganas, marriage is barred when most pravara-rishis coincide
 *   (two of three, three of five).
 * Real practice varies by sutra, region and community, so the UI presents this as guidance only.
 */
export function compareGotras(a: Gotra, b: Gotra) {
  const shared = a.pravara.filter((r) => b.pravara.includes(r));
  const sameGotra = a.id === b.id;
  const sameGana = a.gana === b.gana;
  const wholeGanaIsOne = sameGana && a.gana !== 'Bhrigu' && a.gana !== 'Angiras';
  const majority = shared.length * 2 > Math.min(a.pravara.length, b.pravara.length);
  const barred = sameGotra || wholeGanaIsOne || majority;
  let reason: string;
  if (sameGotra) reason = 'Same gotra (sagotra).';
  else if (wholeGanaIsOne) reason = `Both belong to the ${a.gana} gana, which counts as a single family.`;
  else if (majority) reason = `They share most of their pravara (sapravara): ${shared.join(', ')}.`;
  else if (shared.length) reason = `They share only ${shared.join(', ')}, a minority of the pravara, which the Bhrigu/Angiras rule allows.`;
  else reason = 'Different gotras with no common pravara-rishi.';
  return { barred, reason, shared, sameGana };
}
