import type { Source } from './types';
import type { LatLng } from './places';
import type { Artwork } from './forms';
import { defn, src } from './sources';

/* ——————————————————————— The Yoginis ——————————————————————— */

export type YoginiKind = 'animal' | 'fierce' | 'gentle';

export const kindLabel: Record<YoginiKind, { label: string; about: string }> = {
  animal: { label: 'Animal- and bird-faced', about: 'Named for the creature whose face she wears' },
  fierce: { label: 'Fierce', about: 'Named for a terrible look, a weapon or a grim appetite' },
  gentle: { label: 'Radiant and gentle', about: 'Named for beauty, light or grace' },
};

/** The sixty-four as the Skanda Purana names them (Kashi Khanda 45.34–41), with what each name means. */
export const sixtyFour: { name: string; iast: string; meaning: string; kind: YoginiKind }[] = [
  { name: 'Gajanana', iast: 'Gajānanā', meaning: 'Elephant-faced', kind: 'animal' },
  { name: 'Simhamukhi', iast: 'Siṃhamukhī', meaning: 'Lion-faced', kind: 'animal' },
  { name: 'Gridhrasya', iast: 'Gṛdhrāsyā', meaning: 'Vulture-faced', kind: 'animal' },
  { name: 'Kakatundika', iast: 'Kākatuṇḍikā', meaning: 'Crow-beaked', kind: 'animal' },
  { name: 'Ushtragriva', iast: 'Uṣṭragrīvā', meaning: 'Camel-necked', kind: 'animal' },
  { name: 'Hayagriva', iast: 'Hayagrīvā', meaning: 'Horse-necked', kind: 'animal' },
  { name: 'Varahi', iast: 'Vārāhī', meaning: 'The boar', kind: 'animal' },
  { name: 'Sharabhanana', iast: 'Śarabhānanā', meaning: 'Sharabha-faced (a fabulous beast)', kind: 'animal' },
  { name: 'Ulukika', iast: 'Ulūkikā', meaning: 'The owl', kind: 'animal' },
  { name: 'Shivarava', iast: 'Śivārāvā', meaning: 'Howling like a jackal', kind: 'animal' },
  { name: 'Mayuri', iast: 'Mayūrī', meaning: 'The peahen', kind: 'animal' },
  { name: 'Vikatanana', iast: 'Vikaṭānanā', meaning: 'Terrible-faced', kind: 'fierce' },
  { name: 'Ashtavakra', iast: 'Aṣṭavakrā', meaning: 'Bent in eight places', kind: 'fierce' },
  { name: 'Kotarakshi', iast: 'Koṭarākṣī', meaning: 'Hollow-eyed', kind: 'fierce' },
  { name: 'Kubja', iast: 'Kubjā', meaning: 'The hunchbacked', kind: 'fierce' },
  { name: 'Vikatalochana', iast: 'Vikaṭalocanā', meaning: 'Terrible-eyed', kind: 'fierce' },
  { name: 'Shushkodari', iast: 'Śuṣkodarī', meaning: 'Hollow-bellied', kind: 'fierce' },
  { name: 'Lalajjihva', iast: 'Lalajjihvā', meaning: 'With lolling tongue', kind: 'fierce' },
  { name: 'Shvadamshtra', iast: 'Śvadaṃṣṭrā', meaning: 'Dog-fanged', kind: 'animal' },
  { name: 'Vanaranana', iast: 'Vānarānanā', meaning: 'Monkey-faced', kind: 'animal' },
  { name: 'Rikshakshi', iast: 'Ṛkṣākṣī', meaning: 'Bear-eyed', kind: 'animal' },
  { name: 'Kekarakshi', iast: 'Kekarākṣī', meaning: 'Squint-eyed', kind: 'fierce' },
  { name: 'Brihattunda', iast: 'Bṛhattuṇḍā', meaning: 'Great-beaked', kind: 'animal' },
  { name: 'Surapriya', iast: 'Surāpriyā', meaning: 'Fond of wine', kind: 'fierce' },
  { name: 'Kapalahasta', iast: 'Kapālahastā', meaning: 'Skull in hand', kind: 'fierce' },
  { name: 'Raktakshi', iast: 'Raktākṣī', meaning: 'Red-eyed', kind: 'fierce' },
  { name: 'Shuki', iast: 'Śukī', meaning: 'The parrot', kind: 'animal' },
  { name: 'Shyeni', iast: 'Śyenī', meaning: 'The hawk', kind: 'animal' },
  { name: 'Kapotika', iast: 'Kapotikā', meaning: 'The dove', kind: 'animal' },
  { name: 'Pashahasta', iast: 'Pāśahastā', meaning: 'Noose in hand', kind: 'fierce' },
  { name: 'Dandahasta', iast: 'Daṇḍahastā', meaning: 'Staff in hand', kind: 'fierce' },
  { name: 'Prachanda Chandavikrama', iast: 'Pracaṇḍā Caṇḍavikramā', meaning: 'Fierce one of fierce valour', kind: 'fierce' },
  { name: 'Shishughni', iast: 'Śiśughnī', meaning: 'Slayer of children', kind: 'fierce' },
  { name: 'Papahantri', iast: 'Pāpahantrī', meaning: 'Destroyer of sin', kind: 'gentle' },
  { name: 'Kali', iast: 'Kālī', meaning: 'The dark one', kind: 'fierce' },
  { name: 'Rudhirapayini', iast: 'Rudhirapāyinī', meaning: 'Drinker of blood', kind: 'fierce' },
  { name: 'Vasadhaya', iast: 'Vasādhayā', meaning: 'Drinker of fat', kind: 'fierce' },
  { name: 'Garbhabhaksha', iast: 'Garbhabhakṣā', meaning: 'Devourer of embryos', kind: 'fierce' },
  { name: 'Shavahasta', iast: 'Śavahastā', meaning: 'Corpse in hand', kind: 'fierce' },
  { name: 'Antramalini', iast: 'Āntramālinī', meaning: 'Garlanded with entrails', kind: 'fierce' },
  { name: 'Sthulakeshi', iast: 'Sthūlakeśī', meaning: 'Thick-haired', kind: 'fierce' },
  { name: 'Brihatkukshi', iast: 'Bṛhatkukṣī', meaning: 'Big-bellied', kind: 'fierce' },
  { name: 'Sarpasya', iast: 'Sarpāsyā', meaning: 'Snake-faced', kind: 'animal' },
  { name: 'Pretavahana', iast: 'Pretavāhanā', meaning: 'Riding a ghost', kind: 'fierce' },
  { name: 'Dandashukakara', iast: 'Dandaśūkakarā', meaning: 'Serpent in hand', kind: 'fierce' },
  { name: 'Kraunchi', iast: 'Krauñcī', meaning: 'The curlew', kind: 'animal' },
  { name: 'Mrigashirsha', iast: 'Mṛgaśīrṣā', meaning: 'Deer-headed', kind: 'animal' },
  { name: 'Vrishanana', iast: 'Vṛṣānanā', meaning: 'Bull-faced', kind: 'animal' },
  { name: 'Vyattasya', iast: 'Vyāttāsyā', meaning: 'Gaping-mouthed', kind: 'fierce' },
  { name: 'Dhumanihshvasa', iast: 'Dhūmaniḥśvāsā', meaning: 'Breathing smoke', kind: 'fierce' },
  { name: 'Vyomaikacharana', iast: 'Vyomaikacaraṇā', meaning: 'One foot in the sky', kind: 'gentle' },
  { name: 'Urdhvadrik', iast: 'Ūrdhvadṛk', meaning: 'Gazing upward', kind: 'gentle' },
  { name: 'Tapanidrishti', iast: 'Tāpanīdṛṣṭi', meaning: 'Of burning gaze', kind: 'fierce' },
  { name: 'Shoshanidrishti', iast: 'Śoṣaṇīdṛṣṭi', meaning: 'Of withering gaze', kind: 'fierce' },
  { name: 'Kotari', iast: 'Koṭarī', meaning: 'The naked one', kind: 'fierce' },
  { name: 'Sthulanasika', iast: 'Sthūlanāsikā', meaning: 'Thick-nosed', kind: 'fierce' },
  { name: 'Vidyutprabha', iast: 'Vidyutprabhā', meaning: 'Bright as lightning', kind: 'gentle' },
  { name: 'Balakasya', iast: 'Balākāsyā', meaning: 'Crane-faced', kind: 'animal' },
  { name: 'Marjari', iast: 'Mārjārī', meaning: 'The cat', kind: 'animal' },
  { name: 'Katapootana', iast: 'Kaṭapūtanā', meaning: 'A goblin of the cremation ground', kind: 'fierce' },
  { name: 'Attattahasa', iast: 'Aṭṭāṭṭahāsā', meaning: 'Of roaring laughter', kind: 'fierce' },
  { name: 'Kamakshi', iast: 'Kāmākṣī', meaning: 'Eyes of desire', kind: 'gentle' },
  { name: 'Mrigakshi', iast: 'Mṛgākṣī', meaning: 'Doe-eyed', kind: 'gentle' },
  { name: 'Mrigalochana', iast: 'Mṛgalocanā', meaning: 'Deer-eyed', kind: 'gentle' },
];

/** The two meanings of the word. */
export const twoMeanings: { title: string; about: string }[] = [
  {
    title: 'A woman yogi',
    about: 'Plainly, yogini is the feminine of yogi: a woman who practises yoga or has mastered it. Lalleshvari of Kashmir and Akka Mahadevi of Karnataka are called yoginis in this sense.',
  },
  {
    title: 'A goddess of the circle',
    about: 'In the Tantras, the yoginis are powerful female deities who move in a circle (chakra) around Shiva as Bhairava or around the Great Goddess. They fly, grant powers (siddhis) to the worthy and devour the unworthy. Most often they are sixty-four.',
  },
];

/** The nine classes of yogini who guard the nine enclosures of the Sri Chakra, outermost first (as in the Khadgamala). */
export const sriChakraYoginis: { name: string; enclosure: string }[] = [
  { name: 'Prakata yoginis', enclosure: 'The square outer walls' },
  { name: 'Gupta yoginis', enclosure: 'The sixteen-petalled lotus' },
  { name: 'Guptatara yoginis', enclosure: 'The eight-petalled lotus' },
  { name: 'Sampradaya yoginis', enclosure: 'The fourteen triangles' },
  { name: 'Kulottirna yoginis', enclosure: 'The outer ten triangles' },
  { name: 'Nigarbha yoginis', enclosure: 'The inner ten triangles' },
  { name: 'Rahasya yoginis', enclosure: 'The eight triangles' },
  { name: 'Atirahasya yoginis', enclosure: 'The central triangle' },
  { name: 'Parapararahasya yogini', enclosure: 'The bindu: Lalita Tripurasundari herself' },
];

/** The eight yoginis of Yogini dasha, a cycle of 36 years used in Indian astrology. */
export const yoginiDasha: { name: string; years: number; lord: string }[] = [
  { name: 'Mangala', years: 1, lord: 'Moon' },
  { name: 'Pingala', years: 2, lord: 'Sun' },
  { name: 'Dhanya', years: 3, lord: 'Jupiter' },
  { name: 'Bhramari', years: 4, lord: 'Mars' },
  { name: 'Bhadrika', years: 5, lord: 'Mercury' },
  { name: 'Ulka', years: 6, lord: 'Saturn' },
  { name: 'Siddha', years: 7, lord: 'Venus' },
  { name: 'Sankata', years: 8, lord: 'Rahu' },
];

export interface YoginiTemple extends LatLng {
  id: string;
  n: number;
  name: string;
  state: string;
  date: string;
  plan: 'Circular' | 'Rectangular' | 'Shrine';
  note: string;
}

/** The great yogini temples. Locations are approximate. */
export const yoginiTemples: YoginiTemple[] = [
  { id: 'hirapur', n: 1, name: 'Hirapur', state: 'Odisha', date: 'c. 9th century', plan: 'Circular', lat: 20.2227, lng: 85.8736, note: 'A small roofless circle near Bhubaneswar, the best preserved of all: sixty-four yoginis carved in black stone, standing on animals, around a central shrine for Bhairava. Tradition credits Queen Hiradevi of the Bhauma-Kara dynasty.' },
  { id: 'ranipur', n: 2, name: 'Ranipur-Jharial', state: 'Odisha', date: 'c. 9th–10th century', plan: 'Circular', lat: 20.07, lng: 83.02, note: 'A wide roofless circle whose sixty-four yoginis are shown dancing.' },
  { id: 'bhedaghat', n: 3, name: 'Bhedaghat', state: 'Madhya Pradesh', date: '10th century', plan: 'Circular', lat: 23.1283, lng: 79.8007, note: 'A large circle above the Narmada near Jabalpur, built under the Kalachuris, with not sixty-four but eighty-one niches. A later temple of Shiva and Parvati stands in the middle.' },
  { id: 'mitaoli', n: 4, name: 'Mitaoli', state: 'Madhya Pradesh', date: 'c. 11th century', plan: 'Circular', lat: 26.486, lng: 78.211, note: 'A hilltop circle of sixty-four chambers around a round central shrine of Shiva, near Morena.' },
  { id: 'khajuraho', n: 5, name: 'Khajuraho', state: 'Madhya Pradesh', date: 'c. 9th century', plan: 'Rectangular', lat: 24.8453, lng: 79.9197, note: 'The oldest surviving temple at Khajuraho: a rectangle of rough granite cells, now empty of their images.' },
  { id: 'varanasi', n: 6, name: 'Chausatti Ghat, Varanasi', state: 'Uttar Pradesh', date: 'Still in worship', plan: 'Shrine', lat: 25.3015, lng: 83.0098, note: 'The shrine of the sixty-four at Kashi, where the Skanda Purana says the yoginis chose to stay.' },
];

/** Public-domain works at The Met: the Mothers, from whom the yoginis grew. */
export const yoginiArt: (Artwork & { why: string })[] = [
  {
    title: 'Matrika',
    date: '3rd–4th century',
    place: 'India',
    medium: 'Sandstone',
    img: 'https://images.metmuseum.org/CRDImages/as/web-large/33_50_9.JPG',
    museum: 'The Met',
    url: 'https://www.metmuseum.org/art/collection/search/38747',
    why: 'One of the earliest images of a Mother goddess: the Matrikas are the yoginis’ oldest kin.',
  },
  {
    title: 'Chamunda, the Horrific Destroyer of Evil',
    date: '10th–11th century',
    place: 'India',
    medium: 'Sandstone',
    img: 'https://images.metmuseum.org/CRDImages/as/web-large/DT5234.jpg',
    museum: 'The Met',
    url: 'https://www.metmuseum.org/art/collection/search/38152',
    why: 'Emaciated and fierce, like many of the yoginis; some Tantras set her at their head.',
  },
  {
    title: 'Durga, Kali, and the Matrikas Battle the Demon Raktabija',
    date: 'c. 1780',
    place: 'Guler, Himachal Pradesh',
    medium: 'Ink, ochre and underdrawing',
    img: 'https://images.metmuseum.org/CRDImages/as/web-large/DP166089.jpg',
    museum: 'The Met',
    url: 'https://www.metmuseum.org/art/collection/search/74674',
    why: 'The Devi Mahatmya’s war band of goddesses, the pattern for the yoginis’ circle.',
  },
];

export const yoginiSources: Source[] = [
  src.skandaYoginis,
  src.yoginisAppendix,
  src.yoginisWorship,
  src.defYogini,
  src.defYoginidasha,
  src.defCatuhshashti,
  src.conceptHypaethral,
  src.defKaulajnana,
  src.dmCanto88,
  defn('matrika', 'Matrika'),
  defn('khadgamala', 'Khadgamala'),
];
