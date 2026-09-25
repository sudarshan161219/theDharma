import type { Source } from './types';
import { defn, src, type Evidence } from './sources';
import { ev } from './smriti';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Place extends LatLng {
  id: string;
  kind: 'jyotirlinga' | 'shakti';
  n: number;
  name: string;
  sanskrit: string;
  /** Where the scripture or stotra locates it, in its own words. */
  scriptureSays: string;
  /** The site identified today. */
  today: string;
  state: string;
  story: string;
  /** Shakti peethas: the part of Sati said to have fallen here (traditions differ). */
  bodyPart?: string;
  /** Other sites that also claim this identity. */
  alternates?: (LatLng & { place: string })[];
  /** Links to other entries, e.g. a Jyotirlinga and a Pitha in the same town. */
  sameSiteAs?: string;
  sources: Source[];
  evidence?: Evidence[];
}

/** Shiva Purana, Kotirudra-samhita chapter → wisdomlib doc (chapters 12–33 are numbered contiguously). */
const kotirudraCh = (ch: number, title: string): Source => ({
  label: `Shiva Purana, Kotirudra-samhita Ch. ${ch} — ${title}`,
  url: `https://www.wisdomlib.org/hinduism/book/shiva-purana-english/d/doc${226501 + ch}.html`,
});

/** The twelve Jyotirlingas in the order of the Shiva Purana (Kotirudra 1) and the Dvadasha-jyotirlinga stotra. */
export const jyotirlingas: Place[] = [
  {
    id: 'somanatha',
    kind: 'jyotirlinga',
    n: 1,
    name: 'Somanatha',
    sanskrit: 'सोमनाथ',
    scriptureSays: 'In Saurashtra, at Prabhasa',
    today: 'Somnath, Prabhas Patan (Veraval)',
    state: 'Gujarat',
    lat: 20.888,
    lng: 70.4012,
    story: 'Daksha cursed the Moon (Soma) to waste away for loving only Rohini among his 27 wives. At Prabhasa the Moon worshipped Shiva, who gave him the waxing and waning fortnights. Shiva stayed there as “Lord of Soma”.',
    sources: [kotirudraCh(14, 'The origin of the Jyotirlinga Somanatha')],
    evidence: [ev.somanathaPrashasti, ev.somanathaDevapattana],
  },
  {
    id: 'mallikarjuna',
    kind: 'jyotirlinga',
    n: 2,
    name: 'Mallikarjuna',
    sanskrit: 'मल्लिकार्जुन',
    scriptureSays: 'On Shrishaila (Shriparvata)',
    today: 'Srisailam, on the Krishna river',
    state: 'Andhra Pradesh',
    lat: 16.0733,
    lng: 78.8681,
    sameSiteAs: 'bhramaramba',
    story: 'Kartikeya, hurt that Ganesha was married first, went away to the Krauncha mountain. Shiva and Parvati followed and stayed near him, Parvati as Mallika (jasmine) and Shiva as Arjuna.',
    sources: [kotirudraCh(15, 'The origin of the second, Mallikarjuna'), src.lingaSrishaila],
    evidence: [ev.srisailam],
  },
  {
    id: 'mahakala',
    kind: 'jyotirlinga',
    n: 3,
    name: 'Mahakaleshvara',
    sanskrit: 'महाकालेश्वर',
    scriptureSays: 'In Ujjayini (Avanti)',
    today: 'Mahakaleshwar, Ujjain',
    state: 'Madhya Pradesh',
    lat: 23.1828,
    lng: 75.7682,
    sameSiteAs: 'ujjain-mahakali',
    story: 'Shiva burst from the earth as Mahakala, Great Time, to destroy the demon Dushana who was attacking the devout brahmins of Avanti. The cowherd boy Shrikara’s devotion under King Chandrasena is also told here. It is the only south-facing Jyotirlinga.',
    sources: [kotirudraCh(16, 'The origin of Mahakala'), kotirudraCh(17, 'The greatness of Mahakala')],
  },
  {
    id: 'omkareshvara',
    kind: 'jyotirlinga',
    n: 4,
    name: 'Omkareshvara',
    sanskrit: 'ओंकारेश्वर',
    scriptureSays: '“Parameshvara in Omkara”, on the Narmada',
    today: 'Omkareshwar, Mandhata island in the Narmada',
    state: 'Madhya Pradesh',
    lat: 22.2459,
    lng: 76.151,
    story: 'The Vindhya mountain worshipped Shiva to become great. Shiva appeared and the linga became two, Omkareshvara and Parameshvara (Amareshvara), on either side of the island, which is itself shaped like “Om”.',
    sources: [kotirudraCh(18, 'Omkareshvara'), src.skandaOmkara],
    evidence: [ev.mandhata],
  },
  {
    id: 'kedara',
    kind: 'jyotirlinga',
    n: 5,
    name: 'Kedareshvara',
    sanskrit: 'केदारेश्वर',
    scriptureSays: 'On the Himalaya (Himavat), at Kedara',
    today: 'Kedarnath, near the source of the Mandakini',
    state: 'Uttarakhand',
    lat: 30.7352,
    lng: 79.0669,
    story: 'Nara and Narayana, the twin avataras, did penance at Badarika and worshipped a Parthiva linga. Shiva agreed to their request to remain forever on the Kedara peak. Later tradition adds the Pandavas searching for Shiva, who hid as a bull.',
    sources: [kotirudraCh(19, 'Kedareshvara')],
    evidence: [ev.kedaraKalpa, ev.baijnath],
  },
  {
    id: 'bhimashankara',
    kind: 'jyotirlinga',
    n: 6,
    name: 'Bhimashankara',
    sanskrit: 'भीमशंकर',
    scriptureSays: '“In Dakini”; the story is set in Kamarupa',
    today: 'Bhimashankar, in the Sahyadri hills near Pune',
    state: 'Maharashtra',
    lat: 19.0719,
    lng: 73.5357,
    alternates: [
      { place: 'Pamohi, near Guwahati (Assam), matching the Purana’s Kamarupa setting', lat: 26.1275, lng: 91.6772 },
      { place: 'Kashipur (Uttarakhand)', lat: 29.2104, lng: 78.9619 },
    ],
    story: 'Bhima, son of Kumbhakarna, imprisoned the pious King Sudakshina of Kamarupa. When the demon raised his sword against the king’s clay linga, Shiva sprang out and burned him to ashes.',
    sources: [kotirudraCh(20, 'Bhimashankara'), kotirudraCh(21, 'The origin of the Jyotirlinga Bhimeshvara')],
  },
  {
    id: 'vishveshvara',
    kind: 'jyotirlinga',
    n: 7,
    name: 'Vishveshvara (Kashi Vishvanatha)',
    sanskrit: 'विश्वेश्वर',
    scriptureSays: 'In Varanasi (Kashi)',
    today: 'Kashi Vishwanath, Varanasi',
    state: 'Uttar Pradesh',
    lat: 25.3109,
    lng: 83.0107,
    sameSiteAs: 'vishalakshi',
    story: 'Kashi rests on Shiva’s trident and is never destroyed, even at the dissolution. Shiva, the Lord of the Universe, dwells here permanently and whispers the saving mantra to all who die in the city.',
    sources: [kotirudraCh(22, 'The greatness of Vishveshvara'), kotirudraCh(23, 'The greatness of Kashi-Vishveshvara')],
  },
  {
    id: 'tryambaka',
    kind: 'jyotirlinga',
    n: 8,
    name: 'Tryambakeshvara',
    sanskrit: 'त्र्यम्बकेश्वर',
    scriptureSays: 'On the bank of the Gautami (Godavari)',
    today: 'Trimbakeshwar, at the source of the Godavari near Nashik',
    state: 'Maharashtra',
    lat: 19.9322,
    lng: 73.5307,
    story: 'The sage Gautama, falsely accused of killing a cow, worshipped Shiva on the Brahmagiri hill. Shiva brought down the Ganga as the Godavari (Gautami) to purify him, and remained there as the three-eyed Lord.',
    sources: [kotirudraCh(24, 'Tryambakeshvara'), kotirudraCh(27, 'The greatness of Tryambakeshvara')],
  },
  {
    id: 'vaidyanatha',
    kind: 'jyotirlinga',
    n: 9,
    name: 'Vaidyanatha',
    sanskrit: 'वैद्यनाथ',
    scriptureSays: '“In the cremation ground” (chitabhumi)',
    today: 'Baba Baidyanath Dham, Deoghar',
    state: 'Jharkhand',
    lat: 24.4924,
    lng: 86.7,
    alternates: [
      { place: 'Parli Vaijnath (Maharashtra)', lat: 18.8469, lng: 76.5334 },
      { place: 'Baijnath, Kangra (Himachal Pradesh)', lat: 32.0521, lng: 76.6487 },
    ],
    story: 'Ravana cut off his heads one by one in worship. Shiva, as the divine physician (vaidya), restored them and gave him a linga for Lanka, but it was set down on the way and stayed where it touched the ground.',
    sources: [kotirudraCh(28, 'Vaidyanatha')],
    evidence: [ev.baijnath],
  },
  {
    id: 'nageshvara',
    kind: 'jyotirlinga',
    n: 10,
    name: 'Nageshvara',
    sanskrit: 'नागेश्वर',
    scriptureSays: 'In the Daruka forest (Darukavana)',
    today: 'Nageshwar, near Dwarka',
    state: 'Gujarat',
    lat: 22.3353,
    lng: 69.087,
    alternates: [
      { place: 'Aundha Nagnath (Maharashtra)', lat: 19.5367, lng: 77.0413 },
      { place: 'Jageshwar (Uttarakhand)', lat: 29.6375, lng: 79.8533 },
    ],
    story: 'The demon Daruka and his wife Daruki imprisoned the merchant Supriya. He went on chanting Shiva’s name, and Shiva appeared as Lord of the Serpents to destroy the demons.',
    sources: [kotirudraCh(29, 'Nageshvara'), kotirudraCh(30, 'The greatness of the Jyotirlinga Nageshvara')],
  },
  {
    id: 'rameshvara',
    kind: 'jyotirlinga',
    n: 11,
    name: 'Rameshvara',
    sanskrit: 'रामेश्वर',
    scriptureSays: 'At Setubandha, the bridge to Lanka',
    today: 'Ramanathaswamy temple, Rameswaram island',
    state: 'Tamil Nadu',
    lat: 9.2881,
    lng: 79.3174,
    story: 'Before crossing to Lanka, Rama made a linga of sand on the seashore and worshipped Shiva for victory. Shiva stayed there as “Lord of Rama”.',
    sources: [kotirudraCh(31, 'Rameshvara')],
  },
  {
    id: 'ghushmeshvara',
    kind: 'jyotirlinga',
    n: 12,
    name: 'Ghushmeshvara (Grishneshvara)',
    sanskrit: 'घुश्मेश्वर',
    scriptureSays: 'At Shivalaya, near Devagiri',
    today: 'Grishneshwar, Verul, beside the Ellora caves',
    state: 'Maharashtra',
    lat: 20.0247,
    lng: 75.1697,
    story: 'The devotee Ghushma made and worshipped a hundred clay lingas each day. Her jealous sister Sudeha killed her son. Ghushma went on worshipping without anger, Shiva brought the boy back to life, and he stayed there bearing her name.',
    sources: [kotirudraCh(32, 'The narrative of Sudeha and Sudharma'), kotirudraCh(33, 'Origin and glory of Ghushmeshvara')],
  },
];

/**
 * The eighteen Maha Shakti Peethas of the Ashtadasha-shaktipitha-stotra (attributed to Adi Shankara).
 * Body-part attributions follow popular tradition; the texts that list the pithas (Kalika, Devi Bhagavata,
 * Pithanirnaya/Tantrachudamani) disagree on names, counts (4, 18, 51, 52, 108) and places.
 */
export const shaktiPeethas: Place[] = [
  { id: 'shankari', kind: 'shakti', n: 1, name: 'Shankari', sanskrit: 'शांकरी', scriptureSays: '“Lanke Shankari” — in Lanka', today: 'Trincomalee (Koneswaram)', state: 'Sri Lanka', lat: 8.5832, lng: 81.2445, bodyPart: 'Groin', story: 'The stotra begins in Lanka. The original temple on Swami Rock was destroyed in the 17th century; a shrine to Shankari stands again at Koneswaram.', sources: [src.defShaktipitha] },
  { id: 'kamakshi', kind: 'shakti', n: 2, name: 'Kamakshi', sanskrit: 'कामाक्षी', scriptureSays: '“Kamakshi Kanchika pure” — in Kanchi', today: 'Kamakshi Amman temple, Kanchipuram', state: 'Tamil Nadu', lat: 12.8406, lng: 79.7036, bodyPart: 'Navel (some say back)', story: 'The Goddess “with eyes of love”, worshipped in the form of the Shri Chakra. Closely linked to Adi Shankara and the Shri Vidya tradition.', sources: [src.defShaktipitha, src.shaktaPithasEssay] },
  { id: 'shrinkhala', kind: 'shakti', n: 3, name: 'Shrinkhala', sanskrit: 'शृंखला', scriptureSays: '“Pradyumne Shrinkhala” — at Pradyumna', today: 'Identification uncertain; often placed at Pandua (Hooghly)', state: 'West Bengal', lat: 23.08, lng: 88.28, bodyPart: 'Stomach', story: 'The site of Pradyumna is not securely identified today. Several places in Bengal are proposed.', sources: [src.defShaktipitha] },
  { id: 'chamundeshvari', kind: 'shakti', n: 4, name: 'Chamundeshvari', sanskrit: 'चामुण्डेश्वरी', scriptureSays: '“Chamunda Krauncha pattane” — at Krauncha-pattana', today: 'Chamundi Hills, Mysuru', state: 'Karnataka', lat: 12.2724, lng: 76.6707, bodyPart: 'Hair', story: 'Here the Goddess slew Mahishasura, who gave his name to Mysuru (Mahishur). She is the tutelary goddess of the Mysore royal family.', sources: [src.defShaktipitha, src.dmCanto83] },
  { id: 'jogulamba', kind: 'shakti', n: 5, name: 'Jogulamba', sanskrit: 'जोगुलाम्बा', scriptureSays: '“Alampure Jogulamba” — at Alampur', today: 'Alampur, at the meeting of the Tungabhadra and Krishna', state: 'Telangana', lat: 15.878, lng: 78.134, bodyPart: 'Upper teeth', story: 'Alampur is famous for its group of early Chalukyan Nava-Brahma temples. Jogulamba is a fierce form, “mother of yogis”.', sources: [src.defShaktipitha] },
  { id: 'bhramaramba', kind: 'shakti', n: 6, name: 'Bhramaramba', sanskrit: 'भ्रमराम्बा', scriptureSays: '“Shrishaile Bhramarambika” — at Shrishaila', today: 'Srisailam, beside Mallikarjuna', state: 'Andhra Pradesh', lat: 16.0746, lng: 78.8696, bodyPart: 'Neck', sameSiteAs: 'mallikarjuna', story: 'The “mother of bees”, the Goddess as Bhramari, who slew Aruna with a swarm of bees (a form foretold in the Devi Mahatmya). One of the few places that is both a Jyotirlinga and a Shakti Peetha.', sources: [src.defShaktipitha, src.bhramariEssay, src.dmCanto91] },
  { id: 'kolhapur', kind: 'shakti', n: 7, name: 'Mahalakshmi', sanskrit: 'महालक्ष्मी', scriptureSays: '“Kolhapure Mahalakshmi” — at Kolhapur', today: 'Mahalakshmi (Ambabai) temple, Kolhapur', state: 'Maharashtra', lat: 16.6949, lng: 74.224, bodyPart: 'Eyes', story: 'Karavira-kshetra of the Puranas. Ambabai faces west, and twice a year the setting sun falls on her image (kiranotsava).', sources: [src.defShaktipitha], evidence: [ev.mahalakshmiKolhapur] },
  { id: 'ekaveera', kind: 'shakti', n: 8, name: 'Ekaveerika (Renuka)', sanskrit: 'एकवीरा', scriptureSays: '“Mahurye Ekaveerika” — at Mahur', today: 'Renuka Devi temple, Mahur', state: 'Maharashtra', lat: 19.843, lng: 77.925, bodyPart: 'Right hand', story: 'Mahur is linked with Renuka, mother of Parashurama, and Dattatreya. It is one of the “three and a half” great seats of the Goddess in Maharashtra.', sources: [src.defShaktipitha] },
  { id: 'ujjain-mahakali', kind: 'shakti', n: 9, name: 'Mahakali', sanskrit: 'महाकाली', scriptureSays: '“Ujjayinyam Mahakali” — in Ujjain', today: 'Gadkalika / Harsiddhi, Ujjain', state: 'Madhya Pradesh', lat: 23.1854, lng: 75.7626, bodyPart: 'Upper lip (some say elbow)', sameSiteAs: 'mahakala', story: 'Ujjain holds both the Mahakala Jyotirlinga and the Goddess’s seat. The poet Kalidasa is said to have been a devotee of Gadkalika.', sources: [src.defShaktipitha] },
  { id: 'puruhutika', kind: 'shakti', n: 10, name: 'Puruhutika', sanskrit: 'पुरुहूतिका', scriptureSays: '“Pithikayam Puruhutika” — at Pithika', today: 'Kukkuteswara temple, Pithapuram', state: 'Andhra Pradesh', lat: 17.1136, lng: 82.2546, bodyPart: 'Back (some say hand)', story: 'Pithapuram (“town of the pitha”) takes its name from the seat. Indra (Puruhuta) is said to have worshipped the Goddess here.', sources: [src.defShaktipitha] },
  { id: 'girija', kind: 'shakti', n: 11, name: 'Girija (Viraja)', sanskrit: 'गिरिजा', scriptureSays: '“Odhyane Girija” — in Odra (Odisha)', today: 'Viraja (Biraja) temple, Jajpur', state: 'Odisha', lat: 20.856, lng: 86.338, bodyPart: 'Navel', story: 'Jajpur is Viraja-kshetra, the “navel-seat” (nabhi-gaya) of Odisha. The two-armed Goddess Viraja stands on Mahisha’s body.', sources: [src.defShaktipitha] },
  { id: 'manikyamba', kind: 'shakti', n: 12, name: 'Manikyamba', sanskrit: 'माणिक्याम्बा', scriptureSays: '“Manikye Daksha-vatike” — at Daksha’s garden', today: 'Draksharamam (Bhimeshvara temple)', state: 'Andhra Pradesh', lat: 16.7929, lng: 82.0626, bodyPart: 'Left cheek', story: 'Draksharama is held to be “Daksha’s grove”, where Daksha’s sacrifice took place. It is also one of the five Pancharama Shiva shrines.', sources: [src.defShaktipitha], evidence: [ev.draksharama] },
  { id: 'kamakhya', kind: 'shakti', n: 13, name: 'Kamakhya (Kamarupa)', sanskrit: 'कामाख्या', scriptureSays: '“Harikshetre Kamarupa” — in Kamarupa; the Kalika Purana calls it the greatest pitha', today: 'Kamakhya temple, Nilachala hill, Guwahati', state: 'Assam', lat: 26.1664, lng: 91.7055, bodyPart: 'Yoni (the womb)', story: 'The foremost Tantric seat. There is no image, only a spring-moistened stone cleft. The Ambubachi festival marks the Goddess’s yearly menstruation. The Kalika Purana is her scripture.', sources: [src.upaKalika, src.mbhKamakhya, src.defShaktipitha], evidence: [ev.kamakhya] },
  { id: 'madhaveshvari', kind: 'shakti', n: 14, name: 'Madhaveshvari (Alopi)', sanskrit: 'माधवेश्वरी', scriptureSays: '“Prayage Madhaveshvari” — at Prayaga', today: 'Alopi Devi temple, Prayagraj', state: 'Uttar Pradesh', lat: 25.4509, lng: 81.8667, bodyPart: 'Fingers', story: 'At Alopi Devi there is no image, only a wooden cradle (doli). The name means “she who vanished”.', sources: [src.defShaktipitha] },
  { id: 'jvalamukhi', kind: 'shakti', n: 15, name: 'Vaishnavi (Jvalamukhi)', sanskrit: 'ज्वालामुखी', scriptureSays: '“Jvalayam Vaishnavi” — at Jvala', today: 'Jwalamukhi temple, Kangra', state: 'Himachal Pradesh', lat: 31.8756, lng: 76.3232, bodyPart: 'Tongue (some say head)', story: 'Worshipped as eternal flames that burn from the rock without fuel, “she of the flaming mouth”.', sources: [src.defShaktipitha], evidence: [ev.jvalamukhi] },
  { id: 'mangala-gauri', kind: 'shakti', n: 16, name: 'Mangala Gauri', sanskrit: 'मंगला गौरी', scriptureSays: '“Gayayam Mangalya Gaurika” — at Gaya', today: 'Mangla Gauri temple, Gaya', state: 'Bihar', lat: 24.7778, lng: 84.992, bodyPart: 'Breast', story: 'Worshipped as the Goddess who nourishes. Pilgrims coming to Gaya for ancestral rites (shraddha) also visit her.', sources: [src.defShaktipitha] },
  { id: 'vishalakshi', kind: 'shakti', n: 17, name: 'Vishalakshi', sanskrit: 'विशालाक्षी', scriptureSays: '“Varanasyam Vishalakshi” — in Varanasi', today: 'Vishalakshi temple, Mir Ghat, Varanasi', state: 'Uttar Pradesh', lat: 25.3095, lng: 83.0118, bodyPart: 'Earrings / face', sameSiteAs: 'vishveshvara', story: 'The “wide-eyed” Goddess, beside Kashi Vishvanatha. Manikarnika (“jewelled earring”) ghat is said to take its name from the fall of her earring.', sources: [src.defShaktipitha] },
  { id: 'sharada', kind: 'shakti', n: 18, name: 'Sarasvati (Sharada)', sanskrit: 'शारदा', scriptureSays: '“Kashmire tu Sarasvati” — in Kashmir', today: 'Sharada Peeth, Neelum valley (now in Pakistan-administered Kashmir)', state: 'Kashmir', lat: 34.7928, lng: 74.1873, bodyPart: 'Right hand', story: 'Once a great university temple of learning, which gave its name to the Sharada script. Tradition says Adi Shankara ascended its “throne of omniscience” (sarvajna-pitha).', sources: [src.defShaktipitha], evidence: [ev.sharadaMahatmya] },
];

/** Other widely venerated seats from the 51-pitha lists (outside the eighteen). */
export const otherPeethas: Place[] = [
  { id: 'kalighat', kind: 'shakti', n: 19, name: 'Kalighat (Kali)', sanskrit: 'कालीघाट', scriptureSays: 'Among the 51 pithas', today: 'Kalighat, Kolkata', state: 'West Bengal', lat: 22.5205, lng: 88.3426, bodyPart: 'Toes of the right foot', story: 'The city of Kolkata is often said to take its name from Kalikshetra. Kali is shown with a long golden tongue.', sources: [src.defShaktipitha] },
  { id: 'hinglaj', kind: 'shakti', n: 20, name: 'Hinglaj Mata', sanskrit: 'हिंगलाज', scriptureSays: 'Among the 51 pithas (Hingula)', today: 'Hinglaj, Hingol National Park', state: 'Balochistan, Pakistan', lat: 25.5155, lng: 65.5183, bodyPart: 'Crown of the head (brahmarandhra)', story: 'A cave shrine in a desert valley, still a major pilgrimage for Hindus of Sindh and Balochistan.', sources: [src.defShaktipitha] },
  { id: 'guhyeshvari', kind: 'shakti', n: 21, name: 'Guhyeshvari', sanskrit: 'गुह्येश्वरी', scriptureSays: 'Among the 51 pithas', today: 'Guhyeshwari, beside Pashupatinath, Kathmandu', state: 'Nepal', lat: 27.7105, lng: 85.3545, bodyPart: 'Knees / hips (traditions differ)', story: 'Worshipped as a water-filled vessel in the ground, the “secret” Goddess.', sources: [src.defShaktipitha] },
  { id: 'tripurasundari', kind: 'shakti', n: 22, name: 'Tripura Sundari', sanskrit: 'त्रिपुरसुन्दरी', scriptureSays: 'Among the 51 pithas', today: 'Matabari, Udaipur', state: 'Tripura', lat: 23.4978, lng: 91.4997, bodyPart: 'Right foot', story: 'The temple on a tortoise-shaped hill (kurma-pitha) gave the state of Tripura its name, by some accounts.', sources: [src.defShaktipitha] },
  { id: 'ambaji', kind: 'shakti', n: 23, name: 'Ambaji (Arasuri Amba)', sanskrit: 'अम्बाजी', scriptureSays: 'Among the 51 pithas', today: 'Ambaji, near Mount Abu', state: 'Gujarat', lat: 24.3372, lng: 72.8497, bodyPart: 'Heart', story: 'There is no image, only the Visa Shri Yantra, veiled and worshipped. Gabbar hill above is also holy.', sources: [src.defShaktipitha] },
  { id: 'naina-devi', kind: 'shakti', n: 24, name: 'Naina Devi', sanskrit: 'नैना देवी', scriptureSays: 'Among the 51 pithas', today: 'Naina Devi, Bilaspur', state: 'Himachal Pradesh', lat: 31.3058, lng: 76.5364, bodyPart: 'Eyes', story: 'A hilltop shrine above the Gobind Sagar lake, worshipped as the Goddess’s eyes (naina).', sources: [src.defShaktipitha] },
];

/** The four primary pithas of the Kalika Purana / Kaula tradition. */
export const kaulaPithas: { name: string; where: string; part: string; sources: Source[] }[] = [
  { name: 'Kamarupa', where: 'Kamakhya, Assam', part: 'Yoni', sources: [src.upaKalika] },
  { name: 'Jalandhara', where: 'Punjab / Kangra region', part: 'Breasts', sources: [src.defJalandhara] },
  { name: 'Purnagiri', where: 'Disputed (Uttarakhand or the Deccan)', part: 'Shoulders and neck (Kalika Purana)', sources: [src.defPurnagiri] },
  { name: 'Uddiyana (Oddiyana)', where: 'Disputed (Swat valley or Odisha)', part: 'Thighs (Kalika Purana)', sources: [src.upaKalika] },
];

export const placesSources: Source[] = [
  src.jyotirlingaList,
  src.jyotirlingaIncarnations,
  src.kotirudra,
  src.defJyotirlinga,
  src.jyotirlingaEssay,
  src.defShaktipitha,
  src.defShaktapitha,
  src.conceptShaktipitha,
  src.shaktaPithasEssay,
  src.pithaYatra,
  src.mbhSati,
  src.mbhKamakhya,
  src.upaKalika,
  src.deviBhagavata,
  defn('pitha', 'Pitha'),
  src.smriti,
];

export const allPlaces = [...jyotirlingas, ...shaktiPeethas, ...otherPeethas];
export const placeById = new Map(allPlaces.map((p) => [p.id, p]));
