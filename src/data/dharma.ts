import type { Source } from './types';
import { defn, src } from './sources';

export const purusharthas: { name: string; sanskrit: string; meaning: string; about: string }[] = [
  { name: 'Dharma', sanskrit: 'धर्म', meaning: 'Right living, duty, the order that upholds', about: 'The foundation: pursue the others within it.' },
  { name: 'Artha', sanskrit: 'अर्थ', meaning: 'Wealth, livelihood, security', about: 'Honest prosperity, for oneself, family and society.' },
  { name: 'Kama', sanskrit: 'काम', meaning: 'Desire, love, pleasure, beauty', about: 'Enjoyment of life and the arts, not against dharma.' },
  { name: 'Moksha', sanskrit: 'मोक्ष', meaning: 'Liberation from the cycle of birth and death', about: 'The highest goal, beyond the other three.' },
];

export const ashramas: { name: string; sanskrit: string; years: string; from: number; to: number; who: string; duty: string }[] = [
  { name: 'Brahmacharya', sanskrit: 'ब्रह्मचर्य', years: '0–25', from: 0, to: 25, who: 'The student', duty: 'Lives with the guru, studies, serves and keeps celibacy.' },
  { name: 'Grihastha', sanskrit: 'गृहस्थ', years: '25–50', from: 25, to: 50, who: 'The householder', duty: 'Marries, earns, raises a family and supports the other three stages. Manu calls it the greatest.' },
  { name: 'Vanaprastha', sanskrit: 'वानप्रस्थ', years: '50–75', from: 50, to: 75, who: 'The forest-dweller', duty: 'Hands over the household, withdraws, and turns to study and austerity.' },
  { name: 'Sannyasa', sanskrit: 'संन्यास', years: '75+', from: 75, to: 100, who: 'The renunciant', duty: 'Gives up all possessions and ties, seeking only liberation.' },
];

export type Phase = 'Before birth' | 'Childhood' | 'Learning' | 'Householder' | 'Death';

export const samskaras: { n: number; name: string; sanskrit: string; when: string; phase: Phase; what: string }[] = [
  { n: 1, name: 'Garbhadhana', sanskrit: 'गर्भाधान', when: 'Conception', phase: 'Before birth', what: 'Prayer for a child, performed by the couple.' },
  { n: 2, name: 'Pumsavana', sanskrit: 'पुंसवन', when: '3rd month of pregnancy', phase: 'Before birth', what: 'For the healthy growth of the child in the womb.' },
  { n: 3, name: 'Simantonnayana', sanskrit: 'सीमन्तोन्नयन', when: '4th–8th month', phase: 'Before birth', what: 'The husband parts the mother’s hair; for her protection and joy (the baby shower).' },
  { n: 4, name: 'Jatakarma', sanskrit: 'जातकर्म', when: 'At birth', phase: 'Childhood', what: 'The father touches honey and ghee to the baby’s lips and whispers blessings for wisdom.' },
  { n: 5, name: 'Namakarana', sanskrit: 'नामकरण', when: '10th–12th day', phase: 'Childhood', what: 'Naming the child.' },
  { n: 6, name: 'Nishkramana', sanskrit: 'निष्क्रमण', when: '4th month', phase: 'Childhood', what: 'The first outing, to see the sun (and the moon).' },
  { n: 7, name: 'Annaprashana', sanskrit: 'अन्नप्राशन', when: '6th month', phase: 'Childhood', what: 'The first taste of solid food, usually rice.' },
  { n: 8, name: 'Chudakarana', sanskrit: 'चूडाकरण', when: '1st or 3rd year', phase: 'Childhood', what: 'The first haircut (mundan), leaving a tuft (shikha).' },
  { n: 9, name: 'Karnavedha', sanskrit: 'कर्णवेध', when: '3rd–5th year', phase: 'Childhood', what: 'Piercing the ears.' },
  { n: 10, name: 'Vidyarambha', sanskrit: 'विद्यारम्भ', when: 'About 5th year', phase: 'Learning', what: 'Beginning the alphabet, often on Vijayadashami, writing in rice.' },
  { n: 11, name: 'Upanayana', sanskrit: 'उपनयन', when: '8th–12th year', phase: 'Learning', what: 'The sacred thread and the Gayatri mantra: “being led near” the teacher. The second birth.' },
  { n: 12, name: 'Vedarambha', sanskrit: 'वेदारम्भ', when: 'With upanayana', phase: 'Learning', what: 'Beginning study of the Veda.' },
  { n: 13, name: 'Keshanta', sanskrit: 'केशान्त', when: 'About 16th year', phase: 'Learning', what: 'The first shave: coming of age.' },
  { n: 14, name: 'Samavartana', sanskrit: 'समावर्तन', when: 'End of studies', phase: 'Learning', what: 'The ceremonial bath and return home from the guru: graduation.' },
  { n: 15, name: 'Vivaha', sanskrit: 'विवाह', when: 'Marriage', phase: 'Householder', what: 'Seven steps together around the sacred fire (saptapadi), which seal the marriage.' },
  { n: 16, name: 'Antyeshti', sanskrit: 'अन्त्येष्टि', when: 'Death', phase: 'Death', what: 'The last offering: cremation, with rites for the departed soul.' },
];

export const mahayajnas: { name: string; sanskrit: string; to: string; how: string }[] = [
  { name: 'Brahma-yajna', sanskrit: 'ब्रह्मयज्ञ', to: 'The rishis', how: 'Study and teaching of the Veda' },
  { name: 'Deva-yajna', sanskrit: 'देवयज्ञ', to: 'The devas', how: 'Offering into the fire (homa)' },
  { name: 'Pitri-yajna', sanskrit: 'पितृयज्ञ', to: 'The ancestors', how: 'Water and food offered to them (tarpana, shraddha)' },
  { name: 'Bhuta-yajna', sanskrit: 'भूतयज्ञ', to: 'All creatures', how: 'Setting aside food for animals, birds and beings (bali)' },
  { name: 'Manushya-yajna', sanskrit: 'मनुष्ययज्ञ', to: 'Fellow humans', how: 'Honouring and feeding guests' },
];

export const rinas: { debt: string; to: string; repaid: string }[] = [
  { debt: 'Rishi-rina', to: 'The seers', repaid: 'by study and passing on knowledge' },
  { debt: 'Deva-rina', to: 'The gods', repaid: 'by worship and sacrifice' },
  { debt: 'Pitri-rina', to: 'The ancestors', repaid: 'by raising children and keeping the line' },
];

export const tenMarks = {
  deva: 'धृतिः क्षमा दमोऽस्तेयं शौचमिन्द्रियनिग्रहः ।\nधीर्विद्या सत्यमक्रोधो दशकं धर्मलक्षणम् ॥',
  iast: 'dhṛtiḥ kṣamā damo ’steyaṃ śaucam indriya-nigrahaḥ |\ndhīr vidyā satyam akrodho daśakaṃ dharma-lakṣaṇam ||',
  ref: 'Manusmriti 6.92',
  marks: [
    ['Dhriti', 'steadiness'],
    ['Kshama', 'forgiveness'],
    ['Dama', 'self-control'],
    ['Asteya', 'not stealing'],
    ['Shaucha', 'purity'],
    ['Indriya-nigraha', 'mastery of the senses'],
    ['Dhi', 'wisdom'],
    ['Vidya', 'knowledge'],
    ['Satya', 'truth'],
    ['Akrodha', 'freedom from anger'],
  ] as [string, string][],
};

export const dharmaSources: Source[] = [
  src.manusmriti,
  src.manu6_92,
  src.defShodashaSamskara,
  src.conceptSixteenSamskaras,
  src.defSamskara,
  defn('purushartha', 'Purushartha'),
  defn('ashrama', 'Ashrama'),
  defn('pancamahayajna', 'Pancha-mahayajna'),
  defn('upanayana', 'Upanayana'),
  defn('rina', 'Rina'),
];
