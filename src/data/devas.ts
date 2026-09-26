import type { Source } from './types';
import { defn, src } from './sources';

export const trimurti: { role: string; god: string; goddess: string; vahana: string; abode: string; emblems: string; note: string; to?: string }[] = [
  {
    role: 'Creation',
    god: 'Brahma',
    goddess: 'Sarasvati: knowledge, speech, music',
    vahana: 'Hamsa (swan)',
    abode: 'Satyaloka',
    emblems: 'Four heads (the four Vedas), water-pot, rosary, book',
    note: 'Born from the lotus of Vishnu’s navel. Rarely worshipped in temples; Pushkar is the famous exception.',
    to: '#/people/brahma',
  },
  {
    role: 'Preservation',
    god: 'Vishnu',
    goddess: 'Lakshmi: fortune, prosperity, grace',
    vahana: 'Garuda (eagle)',
    abode: 'Vaikuntha; sleeps on Ananta in the milk ocean',
    emblems: 'Conch, discus (Sudarshana), mace, lotus',
    note: 'Descends as avataras whenever dharma declines.',
    to: '#/avatars',
  },
  {
    role: 'Dissolution',
    god: 'Shiva',
    goddess: 'Parvati: power, devotion; also Durga and Kali',
    vahana: 'Nandi (bull)',
    abode: 'Kailasa',
    emblems: 'Trident, drum (damaru), crescent moon, the Ganga in his hair, third eye',
    note: 'Dissolves the world at the end of time so it can be made anew. Worshipped as the linga.',
    to: '#/places?show=jyotirlinga',
  },
];

/** Brihadaranyaka 3.9: Yajnavalkya's answer to Vidagdha Shakalya. */
export const godsCountdown: { n: string; answer: string }[] = [
  { n: '3,306', answer: 'The glories (mahiman) of the gods' },
  { n: '33', answer: 'The real gods: 8 Vasus, 11 Rudras, 12 Adityas, Indra and Prajapati' },
  { n: '6', answer: 'Fire, earth, air, sky, sun and heaven' },
  { n: '3', answer: 'The three worlds' },
  { n: '2', answer: 'Food and breath' },
  { n: '1½', answer: 'The wind, which blows and makes all things grow (adhyardha)' },
  { n: '1', answer: 'Prana, the breath: it is Brahman, called “that” (tyat)' },
];

export const thirtyThree: { group: string; count: number; upanishad: string; names: string[]; namesFrom: string; tone: 'gold' | 'accent' | 'indigo' | 'muted' }[] = [
  {
    group: 'Vasus',
    count: 8,
    upanishad: 'Fire, earth, air, sky, sun, heaven, moon and stars: “in them all this is placed (vasu)”',
    names: ['Dhara', 'Dhruva', 'Soma', 'Aha', 'Anila', 'Anala', 'Pratyusha', 'Prabhasa'],
    namesFrom: 'Mahabharata (Adi Parva). Prabhasa was born on earth as Bhishma.',
    tone: 'gold',
  },
  {
    group: 'Rudras',
    count: 11,
    upanishad: 'The ten breaths in a person, with the self as the eleventh: when they leave the body, they make people weep (rud)',
    names: ['Hara', 'Bahurupa', 'Tryambaka', 'Aparajita', 'Vrishakapi', 'Shambhu', 'Kapardi', 'Raivata', 'Mrigavyadha', 'Sharva', 'Kapali'],
    namesFrom: 'Vishnu Purana 1.15; lists vary between texts.',
    tone: 'accent',
  },
  {
    group: 'Adityas',
    count: 12,
    upanishad: 'The twelve months of the year, which carry off (ādā) all things as they pass',
    names: ['Vishnu', 'Shakra', 'Aryaman', 'Dhatri', 'Tvashtri', 'Pushan', 'Vivasvat', 'Savitri', 'Mitra', 'Varuna', 'Amsha', 'Bhaga'],
    namesFrom: 'Vishnu Purana; sons of Aditi and Kashyapa. Each rides the sun’s chariot for one month.',
    tone: 'indigo',
  },
  {
    group: 'Indra and Prajapati',
    count: 2,
    upanishad: 'Indra is the thunder; Prajapati is the sacrifice',
    names: ['Indra', 'Prajapati'],
    namesFrom: 'Some lists put the two Ashvins in their place.',
    tone: 'muted',
  },
];

export const vedicGods: { name: string; sanskrit: string; hymns: number; role: string }[] = [
  { name: 'Indra', sanskrit: 'इन्द्र', hymns: 250, role: 'King of the gods, wielder of the thunderbolt; slays Vritra and frees the waters' },
  { name: 'Agni', sanskrit: 'अग्नि', hymns: 200, role: 'Fire: the priest and messenger who carries offerings to the gods; opens the Rig Veda' },
  { name: 'Soma', sanskrit: 'सोम', hymns: 120, role: 'The sacred drink and its god; all of Mandala 9 is his' },
  { name: 'Ashvins', sanskrit: 'अश्विनौ', hymns: 55, role: 'Twin horsemen of dawn, physicians of the gods' },
  { name: 'Ushas', sanskrit: 'उषस्', hymns: 20, role: 'Dawn, a radiant young woman who wakes all beings' },
  { name: 'Varuna', sanskrit: 'वरुण', hymns: 12, role: 'Guardian of cosmic order (rita); sees every falsehood (often paired with Mitra)' },
  { name: 'Surya', sanskrit: 'सूर्य', hymns: 10, role: 'The sun, eye of the gods; as Savitri, the impeller praised in the Gayatri' },
  { name: 'Vishnu', sanskrit: 'विष्णु', hymns: 6, role: 'Measures the three worlds in three strides' },
  { name: 'Rudra', sanskrit: 'रुद्र', hymns: 4, role: 'The fierce archer and healer: later Shiva' },
];

export const navagrahas: { name: string; sanskrit: string; body: string; day: string; parents: string; role: string; dir: string }[] = [
  { name: 'Surya', sanskrit: 'सूर्य', body: 'Sun', day: 'Sunday', parents: 'Son of Kashyapa and Aditi', role: 'King of the grahas; the soul and father', dir: 'Centre' },
  { name: 'Chandra', sanskrit: 'चन्द्र', body: 'Moon', day: 'Monday', parents: 'Born of Atri (or from the churned ocean)', role: 'The mind and mother; husband of the 27 nakshatras', dir: 'SE' },
  { name: 'Mangala', sanskrit: 'मङ्गल', body: 'Mars', day: 'Tuesday', parents: 'Son of Bhumi, the Earth', role: 'Courage, the commander of the grahas', dir: 'S' },
  { name: 'Budha', sanskrit: 'बुध', body: 'Mercury', day: 'Wednesday', parents: 'Son of Chandra and Tara', role: 'Intellect and speech; father of Pururavas, founder of the Lunar line', dir: 'NE' },
  { name: 'Brihaspati', sanskrit: 'बृहस्पति', body: 'Jupiter', day: 'Thursday', parents: 'Son of Angiras', role: 'Guru of the devas; wisdom and dharma', dir: 'N' },
  { name: 'Shukra', sanskrit: 'शुक्र', body: 'Venus', day: 'Friday', parents: 'Son of Bhrigu', role: 'Guru of the asuras; knows the secret of reviving the dead', dir: 'E' },
  { name: 'Shani', sanskrit: 'शनि', body: 'Saturn', day: 'Saturday', parents: 'Son of Surya and Chhaya', role: 'The slow one; karma, discipline, delay', dir: 'W' },
  { name: 'Rahu', sanskrit: 'राहु', body: 'Ascending lunar node', day: '—', parents: 'Head of the asura Svarbhanu', role: 'Svarbhanu drank the nectar in disguise; Vishnu’s discus cut off his head. He swallows the sun and moon at eclipses', dir: 'SW' },
  { name: 'Ketu', sanskrit: 'केतु', body: 'Descending lunar node', day: '—', parents: 'Body of Svarbhanu', role: 'Detachment and liberation; the headless half', dir: 'NW' },
];

export const dikpalas: { dir: string; short: string; name: string; sanskrit: string; weapon: string; vahana: string; consort: string }[] = [
  { dir: 'East', short: 'E', name: 'Indra', sanskrit: 'इन्द्र', weapon: 'Vajra (thunderbolt)', vahana: 'Airavata, the white elephant', consort: 'Shachi' },
  { dir: 'South-east', short: 'SE', name: 'Agni', sanskrit: 'अग्नि', weapon: 'Shakti (spear)', vahana: 'Ram', consort: 'Svaha' },
  { dir: 'South', short: 'S', name: 'Yama', sanskrit: 'यम', weapon: 'Danda (staff)', vahana: 'Buffalo', consort: 'Dhumorna' },
  { dir: 'South-west', short: 'SW', name: 'Nirriti', sanskrit: 'निरृति', weapon: 'Sword', vahana: 'A man (nara)', consort: '—' },
  { dir: 'West', short: 'W', name: 'Varuna', sanskrit: 'वरुण', weapon: 'Pasha (noose)', vahana: 'Makara', consort: 'Varuni' },
  { dir: 'North-west', short: 'NW', name: 'Vayu', sanskrit: 'वायु', weapon: 'Ankusha (goad) or banner', vahana: 'Antelope', consort: '—' },
  { dir: 'North', short: 'N', name: 'Kubera', sanskrit: 'कुबेर', weapon: 'Gada (mace)', vahana: 'A man, or the Pushpaka chariot', consort: 'Riddhi' },
  { dir: 'North-east', short: 'NE', name: 'Ishana', sanskrit: 'ईशान', weapon: 'Trishula', vahana: 'Nandi, the bull', consort: 'Parvati' },
];

export const devaSources: Source[] = [
  src.brihadThirtyThree,
  src.conceptThirtyThree,
  src.vpAdityas,
  src.vpRudras,
  src.vpMindBorn,
  src.rigVeda,
  src.defDikpala,
  src.defAshtadikpala,
  src.defNavagraha,
  defn('trimurti', 'Trimurti'),
  defn('vasu', 'Vasu'),
  defn('aditya', 'Aditya'),
  defn('rudra', 'Rudra'),
];
