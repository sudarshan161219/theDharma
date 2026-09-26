import type { Source } from './types';
import { src } from './sources';
import type { Weight } from '../lib/prosody';

/** What decides the weight of a syllable, with an example of each. */
export const weightRules: { weight: Weight; rule: string; example: string; exampleNote: string }[] = [
  { weight: 'L', rule: 'A short vowel (a, i, u, ṛ, ḷ) followed by at most one consonant', example: 'ka · ni · ru', exampleNote: 'one mātrā: a single beat' },
  { weight: 'G', rule: 'A long vowel or diphthong (ā, ī, ū, ṝ, e, ai, o, au)', example: 'kā · nī · ke · kau', exampleNote: 'two mātrās: a held beat' },
  { weight: 'G', rule: 'A short vowel followed by anusvāra (ṃ) or visarga (ḥ)', example: 'saṃ · duḥ', exampleNote: 'the nasal or breath lengthens it' },
  { weight: 'G', rule: 'A short vowel followed by two or more consonants, even across a word boundary', example: 'dhar·ma · ma·kṣe', exampleNote: 'the cluster makes the vowel “heavy by position”' },
];

/** The classical rule-verse for the shloka (as taught in the Shrutabodha and prosody manuals). */
export const ruleVerse = {
  sanskrit: 'श्लोके षष्ठं गुरु ज्ञेयं सर्वत्र लघु पञ्चमम् ।\nद्विचतुष्पादयोर्ह्रस्वं सप्तमं दीर्घमन्ययोः ॥',
  iast: 'śloke ṣaṣṭhaṃ guru jñeyaṃ sarvatra laghu pañcamam |\ndvicatuṣpādayor hrasvaṃ saptamaṃ dīrgham anyayoḥ ||',
  meaning:
    'In a shloka, know the sixth syllable to be heavy and the fifth light everywhere. The seventh is light in the second and fourth padas, and long in the other two.',
};

export type Slot = 'free' | 'L' | 'G' | 'anceps';

/** The 4 × 8 template of the classical shloka (pathyā form). */
export const template: Slot[][] = [1, 2, 3, 4].map((pada) => {
  const odd = pada % 2 === 1;
  return ['free', 'free', 'free', 'free', 'L', 'G', odd ? 'G' : 'L', 'anceps'];
});

/** The mnemonic “yamātārājabhānasalagā”: each 3-syllable window names a gaṇa. */
export const mnemonic: { syl: string; weight: Weight }[] = [
  { syl: 'ya', weight: 'L' },
  { syl: 'mā', weight: 'G' },
  { syl: 'tā', weight: 'G' },
  { syl: 'rā', weight: 'G' },
  { syl: 'ja', weight: 'L' },
  { syl: 'bhā', weight: 'G' },
  { syl: 'na', weight: 'L' },
  { syl: 'sa', weight: 'L' },
  { syl: 'la', weight: 'L' },
  { syl: 'gā', weight: 'G' },
];

export const ganas: { name: string; start: number; example: string }[] = [
  { name: 'ya-gaṇa', start: 0, example: 'ya-mā-tā' },
  { name: 'ma-gaṇa', start: 1, example: 'mā-tā-rā' },
  { name: 'ta-gaṇa', start: 2, example: 'tā-rā-ja' },
  { name: 'ra-gaṇa', start: 3, example: 'rā-ja-bhā' },
  { name: 'ja-gaṇa', start: 4, example: 'ja-bhā-na' },
  { name: 'bha-gaṇa', start: 5, example: 'bhā-na-sa' },
  { name: 'na-gaṇa', start: 6, example: 'na-sa-la' },
  { name: 'sa-gaṇa', start: 7, example: 'sa-la-gā' },
];

/** Vedic metres by syllable count, for context. */
export const vedicMetres: { name: string; padas: number; syllables: number; example: string }[] = [
  { name: 'Gāyatrī', padas: 3, syllables: 8, example: 'The Gayatri mantra (Rig Veda 3.62.10)' },
  { name: 'Anuṣṭubh', padas: 4, syllables: 8, example: 'The Purusha Sukta (Rig Veda 10.90); later the epics and Puranas' },
  { name: 'Triṣṭubh', padas: 4, syllables: 11, example: 'The most common metre of the Rig Veda; some Gita verses' },
  { name: 'Jagatī', padas: 4, syllables: 12, example: 'Common in the Rig Veda' },
];

export const examples: { id: string; title: string; ref: string; text: string; note: string; link?: string }[] = [
  {
    id: 'ma-nishada',
    title: 'The first shloka',
    ref: 'Ramayana 1.2.15',
    text: 'mā niṣāda pratiṣṭhāṃ tvam agamaḥ śāśvatīḥ samāḥ |\nyat krauñcamithunād ekam avadhīḥ kāmamohitam ||',
    note: 'Valmiki’s curse on the hunter who killed a krauncha bird. Born of grief (śoka), it became the first shloka, and Brahma asked him to tell the whole Ramayana in this metre.',
    link: '#/scriptures/ramayana',
  },
  {
    id: 'gita-1-1',
    title: 'The first verse of the Gita',
    ref: 'Bhagavad Gita 1.1',
    text: 'dharmakṣetre kurukṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||',
    note: 'Dhritarashtra asks Sanjaya what happened at Kurukshetra. Most of the Gita’s 700 verses are in this metre.',
    link: '#/scriptures/mahabharata',
  },
];

export const chandasSources: Source[] = [
  src.defAnushtubh,
  src.defAnushtup,
  src.conceptAnushtubhMetre,
  src.defSloka,
  src.defPada,
  src.anushtubhRigveda,
  src.defChandahsutra,
  src.defPingalaSutra,
  src.defChandasshastra,
  src.chandasIntro,
  src.chandasRhythm,
  src.ramayanaFirstShloka,
  src.conceptFirstSloka,
];
