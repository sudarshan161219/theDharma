import type { Source } from './types';
import type { LatLng } from './places';
import { defn, src } from './sources';

/* ——————————————————————— The Nath yogis ——————————————————————— */

/** What the order is called, and why. */
export const nathNames: { name: string; meaning: string }[] = [
  { name: 'Nath', meaning: '“Lord” or “master”: every initiate’s name ends in -nath, after Adinatha, Shiva himself' },
  { name: 'Siddha', meaning: '“Perfected one”: the masters who won mastery of body and mind' },
  { name: 'Kanphata', meaning: '“Split-ear”: from the great earrings worn through the cartilage of the ear' },
  { name: 'Jogi', meaning: 'The everyday word for a Nath yogi, and for the householder Jogi castes descended from them' },
  { name: 'Gorakhnathi', meaning: 'Followers of Gorakhnath, who organised the order' },
];

/** The first teachers, as the tradition tells it. */
export const nathLineage: { name: string; sanskrit: string; note: string }[] = [
  { name: 'Adinatha', sanskrit: 'आदिनाथ', note: 'Shiva, the first lord, source of the teaching' },
  { name: 'Matsyendranatha', sanskrit: 'मत्स्येन्द्रनाथ', note: 'The first human teacher; also linked with the Kaula Tantra' },
  { name: 'Gorakshanatha (Gorakhnath)', sanskrit: 'गोरक्षनाथ', note: 'His disciple, who organised the order; dates proposed range from the 10th to the 13th century' },
  { name: 'Gahininatha', sanskrit: 'गहिनीनाथ', note: 'Gorakhnath’s disciple in the Marathi tradition' },
  { name: 'Nivrittinatha', sanskrit: 'निवृत्तिनाथ', note: 'Initiated by Gahininatha, by tradition on Brahmagiri above Trimbak' },
  { name: 'Jnaneshvar', sanskrit: 'ज्ञानेश्वर', note: 'Nivrittinatha’s younger brother and disciple, who wrote the Jnaneshvari' },
];

/** The stories every Nath knows. */
export const nathStories: { title: string; text: string }[] = [
  {
    title: 'The fish who overheard Shiva',
    text: 'On a lonely shore Shiva taught Parvati the secret of yoga. A fish in the water listened to every word, and became Matsyendra, “lord of the fish”, the first human to hold the teaching.',
  },
  {
    title: 'Gorakh born from ash',
    text: 'Matsyendra gave a childless woman sacred ash as a blessing. Doubting it, she threw it on a dung heap. Twelve years later he returned and called: a boy of twelve rose from the heap. This was Gorakh.',
  },
  {
    title: '“Wake up, Machhindra, Gorakh has come”',
    text: 'Matsyendra forgot himself as king in the land of women (Kadali), lost in pleasure. His disciple Gorakh came disguised as a drummer or a dancer, and his song of awakening brought his guru back to himself. In the order’s own telling the pupil saves the master.',
  },
  {
    title: 'Bhartrihari and Gopichand',
    text: 'Two kings who gave up their thrones to become Nath yogis. Their ballads, sung by wandering Jogis with the sarangi, are still loved across north India.',
  },
];

/** The nine Naths (Navnath) of the Marathi tradition, each held to be one of the nine sages of the Bhagavata (11.2) come again. */
export const navnath: { name: string; also: string; narayana: string; note: string }[] = [
  { name: 'Matsyendranath', also: 'Machhindranath', narayana: 'Kavi', note: 'The first guru' },
  { name: 'Gorakshanath', also: 'Gorakhnath', narayana: 'Hari', note: 'Organiser of the order' },
  { name: 'Jalandharnath', also: 'Jalandharipa, Jvalendra', narayana: 'Antariksha', note: 'Guru of King Gopichand' },
  { name: 'Kanifnath', also: 'Kanhapa, Karinapa', narayana: 'Prabuddha', note: 'Samadhi at Madhi, Maharashtra' },
  { name: 'Charpatinath', also: 'Charpata', narayana: 'Pippalayana', note: 'Tradition makes him an alchemist' },
  { name: 'Naganath', also: 'Nageshnath', narayana: 'Avirhotra', note: 'Some lists put Gopichand here instead' },
  { name: 'Bhartrinath', also: 'Bhartrihari', narayana: 'Drumila', note: 'The king who renounced his throne' },
  { name: 'Revananath', also: 'Revana', narayana: 'Chamasa', note: 'Also honoured in Karnataka' },
  { name: 'Gahininath', also: 'Gaininath', narayana: 'Karabhajana', note: 'Guru of Nivrittinath' },
];

/** A painting from the Wellcome Collection’s illustrated Hindi manuscript of Nath and other saints (CC BY 4.0). */
export interface NathArt {
  /** The Wellcome image number. */
  image: string;
  /** The Wellcome catalogue record. */
  work: string;
  /** The caption as catalogued. */
  title: string;
  /** Which Naths it shows, and how they relate to the list above. */
  shows: string;
}

const WELLCOME_IIIF = 'https://iiif.wellcomecollection.org/image';
export const artImage = (a: NathArt, width = 600) => `${WELLCOME_IIIF}/${a.image}/full/${width},/0/default.jpg`;
export const artRecord = (a: NathArt) => `https://wellcomecollection.org/works/${a.work}`;
export const WELLCOME_LICENSE = 'https://creativecommons.org/licenses/by/4.0/';

/** Paintings of Naths from Wellcome Hindi Manuscript 884, a composite manuscript with 29 ink and gouache illustrations, catalogued as c. 1715. */
export const nathArt: NathArt[] = [
  { image: 'L0024565', work: 'd64ad6kc', title: 'Machandranatha and Gorakhanatha', shows: 'Matsyendranath and Gorakhnath, guru and disciple' },
  { image: 'L0024562', work: 'xx9qwpfd', title: 'Gorakhanatha and Ganesha', shows: 'Gorakhnath before Ganesha' },
  { image: 'L0024553', work: 'h4zcuqqa', title: 'Jalandhari and Siddhasara', shows: 'Jalandharnath, with a tiger at his side' },
  { image: 'L0024558', work: 'xwb4ckvm', title: 'Bharathari', shows: 'Bhartrinath, the king who renounced his throne' },
  { image: 'L0024559', work: 'x7z8rbq8', title: 'Gopi (canda)', shows: 'Gopichand, one of the nine in some lists' },
  { image: 'L0024551', work: 'urjs7h4r', title: 'Caurangi and Siddha Kesari', shows: 'Chauranginath, one of the nine in some lists' },
];

/** The ideas behind the practice. */
export const nathIdeas: { term: string; sanskrit: string; meaning: string; about: string }[] = [
  {
    term: 'Pinda–brahmanda',
    sanskrit: 'पिण्ड–ब्रह्माण्ड',
    meaning: 'The body is the cosmos',
    about: '“What is in the body is in the universe.” Mountains, rivers, sun and moon, even Shiva and Shakti, are found within. So the body is not an obstacle to be escaped but the place where freedom is won.',
  },
  {
    term: 'Kundalini',
    sanskrit: 'कुण्डलिनी',
    meaning: 'The coiled power',
    about: 'Shakti sleeps coiled at the base of the spine. Yoga wakes her and draws her up the central channel (sushumna) through the chakras, to unite with Shiva at the crown.',
  },
  {
    term: 'Samarasya',
    sanskrit: 'सामरस्य',
    meaning: 'One taste',
    about: 'The union of Shiva and Shakti, of sun and moon breath, of the two currents in the body: the state in which all opposites have one flavour.',
  },
  {
    term: 'Beyond dual and non-dual',
    sanskrit: 'द्वैताद्वैतविलक्षण',
    meaning: 'Neither “two” nor “one”',
    about: 'The Siddha-siddhanta-paddhati, ascribed to Gorakhnath, calls the highest state beyond both dualism and non-dualism: it cannot be argued, only realised in the body.',
  },
  {
    term: 'Kaya-siddhi',
    sanskrit: 'कायसिद्धि',
    meaning: 'The perfected body',
    about: 'The aim is a body made strong, pure and, in the old stories, immortal (the divine body): liberation while living, not only after death.',
  },
  {
    term: 'Nada',
    sanskrit: 'नाद',
    meaning: 'The inner sound',
    about: 'In deep meditation the yogi hears subtle sounds within, like bells, flutes and thunder, and follows them into stillness (nadanusandhana).',
  },
];

/** The ladder of hatha yoga, as the Hatha Yoga Pradipika lays it out. */
export const hathaLadder: { name: string; sanskrit: string; about: string; items?: string[] }[] = [
  { name: 'Shatkarma', sanskrit: 'षट्कर्म', about: 'Six cleansings, for those with excess phlegm or fat.', items: ['Dhauti', 'Basti', 'Neti', 'Trataka', 'Nauli', 'Kapalabhati'] },
  { name: 'Asana', sanskrit: 'आसन', about: 'Postures that steady the body. The text teaches fifteen, and names Siddhasana as the best.', items: ['Siddhasana', 'Padmasana', 'Matsyendrasana', 'Mayurasana', 'Shavasana'] },
  { name: 'Pranayama', sanskrit: 'प्राणायाम', about: 'Mastery of breath, above all the holding of breath (kumbhaka), which steadies the mind.', items: ['Suryabhedana', 'Ujjayi', 'Bhastrika', 'Bhramari', 'Kevala kumbhaka'] },
  { name: 'Mudra and bandha', sanskrit: 'मुद्रा–बन्ध', about: 'Seals and locks that turn the flow of breath and energy upward and wake Kundalini.', items: ['Mula bandha', 'Uddiyana bandha', 'Jalandhara bandha', 'Khechari mudra', 'Mahamudra'] },
  { name: 'Nada and samadhi', sanskrit: 'नाद–समाधि', about: 'Absorption in the inner sound, leading to samadhi. Hatha is, in the text’s own words, a stairway to Raja yoga.' },
];

/** How a Nath is recognised. */
export const nathMarks: { name: string; about: string }[] = [
  { name: 'Kundal (darshan)', about: 'Large earrings of horn, stone or wood worn through the split cartilage of both ears: the mark of full initiation. An initiate who has not yet had his ears split is an aughar.' },
  { name: 'Singi and seli', about: 'A small horn whistle on a thread of black wool, sounded before worship and meals.' },
  { name: 'Dhuni', about: 'The sacred fire kept burning in every Nath monastery; its ash (bhasma) is smeared on the body and given as blessing.' },
  { name: '“Adesh!”', about: 'The Naths’ greeting: “the command”, meaning the command of the guru and of the Self.' },
  { name: 'Samadhi', about: 'Naths are not cremated: a yogi is buried sitting in meditation, and his tomb becomes a shrine.' },
  { name: 'Twelve panths', about: 'The order is divided into twelve branches, traditionally said to have been set up by Gorakhnath.' },
];

/** The main texts of and about the tradition. */
export const nathTexts: { name: string; about: string }[] = [
  { name: 'Kaulajnana-nirnaya', about: 'A Kaula Tantra ascribed to Matsyendranatha, known from an old Nepalese manuscript' },
  { name: 'Goraksha-shataka', about: '“A hundred verses of Goraksha” on yoga' },
  { name: 'Siddha-siddhanta-paddhati', about: 'The philosophy of the body and cosmos, ascribed to Gorakhnath' },
  { name: 'Amaraugha-prabodha', about: 'A short early work on hatha yoga' },
  { name: 'Gorakh Bani', about: 'Sayings and songs in old Hindi, attributed to Gorakhnath' },
  { name: 'Hatha Yoga Pradipika', about: 'Svatmarama’s 15th-century manual, which opens with the list of Nath siddhas' },
  { name: 'Navnath Bhaktisar', about: 'The Marathi lives of the nine Naths, 19th century' },
];

/** How far the tradition reached. */
export const nathInfluence: { name: string; about: string; to?: string }[] = [
  { name: 'Hatha yoga worldwide', about: 'The postures, breath and cleansings practised in yoga classes everywhere come, through the Pradipika and its successors, from this tradition.' },
  { name: 'The Varkari saints', about: 'Jnaneshvar received the teaching from his brother Nivrittinath, a Nath initiate, so the Jnaneshvari stands in the Nath line.', to: '#/regions?r=maharashtra' },
  { name: 'The Sants and the Sikh Gurus', about: 'Kabir used the Naths’ language of the body and the inner sound. In the Sidh Gosht of the Guru Granth Sahib, Guru Nanak debates with Nath siddhas.' },
  { name: 'Nepal', about: 'The Gorkha kingdom, and so the Gurkhas, took their name from Gorakhnath. In Patan, Matsyendranath is Rato Machhindranath, honoured by Hindus and Buddhists alike with a great chariot festival.' },
  { name: 'Tantric Buddhism', about: 'Matsyendra, Gorakh and others also appear among the eighty-four mahasiddhas of Vajrayana lists: the two traditions grew up side by side.' },
  { name: 'Folk religion', about: 'Wandering Jogis sang the ballads of Gopichand and Bhartrihari, and Nath shrines dot villages from Punjab to Karnataka.' },
];

export interface NathSite extends LatLng {
  id: string;
  n: number;
  name: string;
  state: string;
  note: string;
}

/** Monasteries and shrines of the order. Locations are approximate. */
export const nathSites: NathSite[] = [
  { id: 'gorakhpur', n: 1, name: 'Gorakhnath Math, Gorakhpur', state: 'Uttar Pradesh', lat: 26.776, lng: 83.357, note: 'The best-known seat of the order; the town is named after Gorakhnath.' },
  { id: 'tilla', n: 2, name: 'Tilla Jogian', state: 'Punjab, Pakistan', lat: 32.84, lng: 73.37, note: 'For centuries the chief seat of the Naths, on a hilltop in the Salt Range; now deserted.' },
  { id: 'asthal-bohar', n: 3, name: 'Asthal Bohar (Baba Mastnath Math)', state: 'Haryana', lat: 28.87, lng: 76.64, note: 'A large Nath monastery near Rohtak.' },
  { id: 'jwalamukhi', n: 4, name: 'Jwalamukhi', state: 'Himachal Pradesh', lat: 31.8757, lng: 76.3232, note: 'Beside Devi’s flames is the “Gorakh dibbi”, a pool said to bubble for Gorakhnath.' },
  { id: 'jodhpur', n: 5, name: 'Mahamandir, Jodhpur', state: 'Rajasthan', lat: 26.3073, lng: 73.035, note: 'Built in 1805 by Maharaja Man Singh, a devotee of the Naths.' },
  { id: 'girnar', n: 6, name: 'Gorakhnath peak, Girnar', state: 'Gujarat', lat: 21.5283, lng: 70.5343, note: 'The highest summit of Girnar is named after Gorakhnath.' },
  { id: 'trimbak', n: 7, name: 'Brahmagiri, Trimbak', state: 'Maharashtra', lat: 19.9322, lng: 73.531, note: 'Nivrittinath’s samadhi; tradition says Gahininath initiated him in a cave on the hill.' },
  { id: 'alandi', n: 8, name: 'Alandi', state: 'Maharashtra', lat: 18.6776, lng: 73.8963, note: 'Jnaneshvar’s samadhi.' },
  { id: 'madhi', n: 9, name: 'Madhi', state: 'Maharashtra', lat: 19.2, lng: 75.02, note: 'Kanifnath’s samadhi, one of the Navnath shrines.' },
  { id: 'kadri', n: 10, name: 'Kadri, Mangaluru', state: 'Karnataka', lat: 12.8886, lng: 74.8559, note: 'The Jogi Math beside the Kadri Manjunatha temple, a Nath centre of the south.' },
  { id: 'patan', n: 11, name: 'Rato Machhindranath, Patan', state: 'Nepal', lat: 27.6725, lng: 85.3215, note: 'Matsyendranath as rain-giver, honoured by Hindus and Buddhists.' },
  { id: 'gorkha', n: 12, name: 'Gorkha', state: 'Nepal', lat: 28.0001, lng: 84.6285, note: 'Gorakhnath’s cave below the old palace of the Gorkha kings.' },
];

export const nathSources: Source[] = [
  { label: 'Wellcome Collection — Hindi Manuscript 884, illustrations of Nath saints (CC BY 4.0)', url: 'https://wellcomecollection.org/works/d64ad6kc' },
  src.conceptNath,
  src.defNathaSampradaya,
  src.defGorakshanatha,
  src.defMatsyendranatha,
  src.defNavanatha,
  src.defKaulajnana,
  src.gorakshaNathaEssay,
  src.hypEnglish,
  src.hypAsanas,
  src.hypPranayama,
  src.hypMudras,
  src.hathaNature,
  defn('gahininath', 'Gahininath'),
  defn('adinatha', 'Adinatha'),
];
