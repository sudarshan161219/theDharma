import type { Source } from './types';
import { defn, src, type Evidence } from './sources';
import { ev } from './smriti';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Place extends LatLng {
  id: string;
  kind: 'jyotirlinga' | 'shakti' | 'tirtha';
  /** Tirthas: the pilgrimage circuits this place belongs to. */
  circuits?: CircuitId[];
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
  { id: 'kamakshi', kind: 'shakti', n: 2, name: 'Kamakshi', sanskrit: 'कामाक्षी', scriptureSays: '“Kamakshi Kanchika pure” — in Kanchi', today: 'Kamakshi Amman temple, Kanchipuram', state: 'Tamil Nadu', lat: 12.8406, lng: 79.7036, bodyPart: 'Navel (some say back)', story: 'Devi “with eyes of love”, worshipped in the form of the Shri Chakra. Closely linked to Adi Shankara and the Shri Vidya tradition.', sources: [src.defShaktipitha, src.shaktaPithasEssay] },
  { id: 'shrinkhala', kind: 'shakti', n: 3, name: 'Shrinkhala', sanskrit: 'शृंखला', scriptureSays: '“Pradyumne Shrinkhala” — at Pradyumna', today: 'Identification uncertain; often placed at Pandua (Hooghly)', state: 'West Bengal', lat: 23.08, lng: 88.28, bodyPart: 'Stomach', story: 'The site of Pradyumna is not securely identified today. Several places in Bengal are proposed.', sources: [src.defShaktipitha] },
  { id: 'chamundeshvari', kind: 'shakti', n: 4, name: 'Chamundeshvari', sanskrit: 'चामुण्डेश्वरी', scriptureSays: '“Chamunda Krauncha pattane” — at Krauncha-pattana', today: 'Chamundi Hills, Mysuru', state: 'Karnataka', lat: 12.2724, lng: 76.6707, bodyPart: 'Hair', story: 'Here Devi slew Mahishasura, who gave his name to Mysuru (Mahishur). She is the tutelary devi of the Mysore royal family.', sources: [src.defShaktipitha, src.dmCanto83] },
  { id: 'jogulamba', kind: 'shakti', n: 5, name: 'Jogulamba', sanskrit: 'जोगुलाम्बा', scriptureSays: '“Alampure Jogulamba” — at Alampur', today: 'Alampur, at the meeting of the Tungabhadra and Krishna', state: 'Telangana', lat: 15.878, lng: 78.134, bodyPart: 'Upper teeth', story: 'Alampur is famous for its group of early Chalukyan Nava-Brahma temples. Jogulamba is a fierce form, “mother of yogis”.', sources: [src.defShaktipitha] },
  { id: 'bhramaramba', kind: 'shakti', n: 6, name: 'Bhramaramba', sanskrit: 'भ्रमराम्बा', scriptureSays: '“Shrishaile Bhramarambika” — at Shrishaila', today: 'Srisailam, beside Mallikarjuna', state: 'Andhra Pradesh', lat: 16.0746, lng: 78.8696, bodyPart: 'Neck', sameSiteAs: 'mallikarjuna', story: 'The “mother of bees”, Devi as Bhramari, who slew Aruna with a swarm of bees (a form foretold in the Devi Mahatmya). One of the few places that is both a Jyotirlinga and a Shakti Peetha.', sources: [src.defShaktipitha, src.bhramariEssay, src.dmCanto91] },
  { id: 'kolhapur', kind: 'shakti', n: 7, name: 'Mahalakshmi', sanskrit: 'महालक्ष्मी', scriptureSays: '“Kolhapure Mahalakshmi” — at Kolhapur', today: 'Mahalakshmi (Ambabai) temple, Kolhapur', state: 'Maharashtra', lat: 16.6949, lng: 74.224, bodyPart: 'Eyes', story: 'Karavira-kshetra of the Puranas. Ambabai faces west, and twice a year the setting sun falls on her image (kiranotsava).', sources: [src.defShaktipitha], evidence: [ev.mahalakshmiKolhapur] },
  { id: 'ekaveera', kind: 'shakti', n: 8, name: 'Ekaveerika (Renuka)', sanskrit: 'एकवीरा', scriptureSays: '“Mahurye Ekaveerika” — at Mahur', today: 'Renuka Devi temple, Mahur', state: 'Maharashtra', lat: 19.843, lng: 77.925, bodyPart: 'Right hand', story: 'Mahur is linked with Renuka, mother of Parashurama, and Dattatreya. It is one of the “three and a half” great seats of Devi in Maharashtra.', sources: [src.defShaktipitha] },
  { id: 'ujjain-mahakali', kind: 'shakti', n: 9, name: 'Mahakali', sanskrit: 'महाकाली', scriptureSays: '“Ujjayinyam Mahakali” — in Ujjain', today: 'Gadkalika / Harsiddhi, Ujjain', state: 'Madhya Pradesh', lat: 23.1854, lng: 75.7626, bodyPart: 'Upper lip (some say elbow)', sameSiteAs: 'mahakala', story: 'Ujjain holds both the Mahakala Jyotirlinga and Devi’s seat. The poet Kalidasa is said to have been a devotee of Gadkalika.', sources: [src.defShaktipitha] },
  { id: 'puruhutika', kind: 'shakti', n: 10, name: 'Puruhutika', sanskrit: 'पुरुहूतिका', scriptureSays: '“Pithikayam Puruhutika” — at Pithika', today: 'Kukkuteswara temple, Pithapuram', state: 'Andhra Pradesh', lat: 17.1136, lng: 82.2546, bodyPart: 'Back (some say hand)', story: 'Pithapuram (“town of the pitha”) takes its name from the seat. Indra (Puruhuta) is said to have worshipped Devi here.', sources: [src.defShaktipitha] },
  { id: 'girija', kind: 'shakti', n: 11, name: 'Girija (Viraja)', sanskrit: 'गिरिजा', scriptureSays: '“Odhyane Girija” — in Odra (Odisha)', today: 'Viraja (Biraja) temple, Jajpur', state: 'Odisha', lat: 20.856, lng: 86.338, bodyPart: 'Navel', story: 'Jajpur is Viraja-kshetra, the “navel-seat” (nabhi-gaya) of Odisha. The two-armed Devi Viraja stands on Mahisha’s body.', sources: [src.defShaktipitha] },
  { id: 'manikyamba', kind: 'shakti', n: 12, name: 'Manikyamba', sanskrit: 'माणिक्याम्बा', scriptureSays: '“Manikye Daksha-vatike” — at Daksha’s garden', today: 'Draksharamam (Bhimeshvara temple)', state: 'Andhra Pradesh', lat: 16.7929, lng: 82.0626, bodyPart: 'Left cheek', story: 'Draksharama is held to be “Daksha’s grove”, where Daksha’s sacrifice took place. It is also one of the five Pancharama Shiva shrines.', sources: [src.defShaktipitha], evidence: [ev.draksharama] },
  { id: 'kamakhya', kind: 'shakti', n: 13, name: 'Kamakhya (Kamarupa)', sanskrit: 'कामाख्या', scriptureSays: '“Harikshetre Kamarupa” — in Kamarupa; the Kalika Purana calls it the greatest pitha', today: 'Kamakhya temple, Nilachala hill, Guwahati', state: 'Assam', lat: 26.1664, lng: 91.7055, bodyPart: 'Yoni (the womb)', story: 'The foremost Tantric seat. There is no image, only a spring-moistened stone cleft. The Ambubachi festival marks Devi’s yearly menstruation. The Kalika Purana is her scripture.', sources: [src.upaKalika, src.mbhKamakhya, src.defShaktipitha], evidence: [ev.kamakhya] },
  { id: 'madhaveshvari', kind: 'shakti', n: 14, name: 'Madhaveshvari (Alopi)', sanskrit: 'माधवेश्वरी', scriptureSays: '“Prayage Madhaveshvari” — at Prayaga', today: 'Alopi Devi temple, Prayagraj', state: 'Uttar Pradesh', lat: 25.4509, lng: 81.8667, bodyPart: 'Fingers', story: 'At Alopi Devi there is no image, only a wooden cradle (doli). The name means “she who vanished”.', sources: [src.defShaktipitha] },
  { id: 'jvalamukhi', kind: 'shakti', n: 15, name: 'Vaishnavi (Jvalamukhi)', sanskrit: 'ज्वालामुखी', scriptureSays: '“Jvalayam Vaishnavi” — at Jvala', today: 'Jwalamukhi temple, Kangra', state: 'Himachal Pradesh', lat: 31.8756, lng: 76.3232, bodyPart: 'Tongue (some say head)', story: 'Worshipped as eternal flames that burn from the rock without fuel, “she of the flaming mouth”.', sources: [src.defShaktipitha], evidence: [ev.jvalamukhi] },
  { id: 'mangala-gauri', kind: 'shakti', n: 16, name: 'Mangala Gauri', sanskrit: 'मंगला गौरी', scriptureSays: '“Gayayam Mangalya Gaurika” — at Gaya', today: 'Mangla Gauri temple, Gaya', state: 'Bihar', lat: 24.7778, lng: 84.992, bodyPart: 'Breast', story: 'Worshipped as Devi who nourishes. Pilgrims coming to Gaya for ancestral rites (shraddha) also visit her.', sources: [src.defShaktipitha] },
  { id: 'vishalakshi', kind: 'shakti', n: 17, name: 'Vishalakshi', sanskrit: 'विशालाक्षी', scriptureSays: '“Varanasyam Vishalakshi” — in Varanasi', today: 'Vishalakshi temple, Mir Ghat, Varanasi', state: 'Uttar Pradesh', lat: 25.3095, lng: 83.0118, bodyPart: 'Earrings / face', sameSiteAs: 'vishveshvara', story: 'The “wide-eyed” Devi, beside Kashi Vishvanatha. Manikarnika (“jewelled earring”) ghat is said to take its name from the fall of her earring.', sources: [src.defShaktipitha] },
  { id: 'sharada', kind: 'shakti', n: 18, name: 'Sarasvati (Sharada)', sanskrit: 'शारदा', scriptureSays: '“Kashmire tu Sarasvati” — in Kashmir', today: 'Sharada Peeth, Neelum valley (now in Pakistan-administered Kashmir)', state: 'Kashmir', lat: 34.7928, lng: 74.1873, bodyPart: 'Right hand', story: 'Once a great university temple of learning, which gave its name to the Sharada script. Tradition says Adi Shankara ascended its “throne of omniscience” (sarvajna-pitha).', sources: [src.defShaktipitha], evidence: [ev.sharadaMahatmya] },
];

/** Other widely venerated seats from the 51-pitha lists (outside the eighteen). */
export const otherPeethas: Place[] = [
  { id: 'kalighat', kind: 'shakti', n: 19, name: 'Kalighat (Kali)', sanskrit: 'कालीघाट', scriptureSays: 'Among the 51 pithas', today: 'Kalighat, Kolkata', state: 'West Bengal', lat: 22.5205, lng: 88.3426, bodyPart: 'Toes of the right foot', story: 'The city of Kolkata is often said to take its name from Kalikshetra. Kali is shown with a long golden tongue.', sources: [src.defShaktipitha] },
  { id: 'hinglaj', kind: 'shakti', n: 20, name: 'Hinglaj Mata', sanskrit: 'हिंगलाज', scriptureSays: 'Among the 51 pithas (Hingula)', today: 'Hinglaj, Hingol National Park', state: 'Balochistan, Pakistan', lat: 25.5155, lng: 65.5183, bodyPart: 'Crown of the head (brahmarandhra)', story: 'A cave shrine in a desert valley, still a major pilgrimage for Hindus of Sindh and Balochistan.', sources: [src.defShaktipitha] },
  { id: 'guhyeshvari', kind: 'shakti', n: 21, name: 'Guhyeshvari', sanskrit: 'गुह्येश्वरी', scriptureSays: 'Among the 51 pithas', today: 'Guhyeshwari, beside Pashupatinath, Kathmandu', state: 'Nepal', lat: 27.7105, lng: 85.3545, bodyPart: 'Knees / hips (traditions differ)', story: 'Worshipped as a water-filled vessel in the ground, the “secret” Devi.', sources: [src.defShaktipitha] },
  { id: 'tripurasundari', kind: 'shakti', n: 22, name: 'Tripura Sundari', sanskrit: 'त्रिपुरसुन्दरी', scriptureSays: 'Among the 51 pithas', today: 'Matabari, Udaipur', state: 'Tripura', lat: 23.4978, lng: 91.4997, bodyPart: 'Right foot', story: 'The temple on a tortoise-shaped hill (kurma-pitha) gave the state of Tripura its name, by some accounts.', sources: [src.defShaktipitha] },
  { id: 'ambaji', kind: 'shakti', n: 23, name: 'Ambaji (Arasuri Amba)', sanskrit: 'अम्बाजी', scriptureSays: 'Among the 51 pithas', today: 'Ambaji, near Mount Abu', state: 'Gujarat', lat: 24.3372, lng: 72.8497, bodyPart: 'Heart', story: 'There is no image, only the Visa Shri Yantra, veiled and worshipped. Gabbar hill above is also holy.', sources: [src.defShaktipitha] },
  { id: 'naina-devi', kind: 'shakti', n: 24, name: 'Naina Devi', sanskrit: 'नैना देवी', scriptureSays: 'Among the 51 pithas', today: 'Naina Devi, Bilaspur', state: 'Himachal Pradesh', lat: 31.3058, lng: 76.5364, bodyPart: 'Eyes', story: 'A hilltop shrine above the Gobind Sagar lake, worshipped as Devi’s eyes (naina).', sources: [src.defShaktipitha] },
];

/** The four primary pithas of the Kalika Purana / Kaula tradition. */
export const kaulaPithas: { name: string; where: string; part: string; sources: Source[] }[] = [
  { name: 'Kamarupa', where: 'Kamakhya, Assam', part: 'Yoni', sources: [src.upaKalika] },
  { name: 'Jalandhara', where: 'Punjab / Kangra region', part: 'Breasts', sources: [src.defJalandhara] },
  { name: 'Purnagiri', where: 'Disputed (Uttarakhand or the Deccan)', part: 'Shoulders and neck (Kalika Purana)', sources: [src.defPurnagiri] },
  { name: 'Uddiyana (Oddiyana)', where: 'Disputed (Swat valley or Odisha)', part: 'Thighs (Kalika Purana)', sources: [src.upaKalika] },
];

/* ——————————————————————— Pilgrimage circuits ——————————————————————— */

export type CircuitId = 'char-dham' | 'chota-char-dham' | 'sapta-puri' | 'kumbh' | 'arupadai' | 'pancha-bhuta';

export const circuits: { id: CircuitId; name: string; sanskrit: string; about: string; verse?: { iast: string; meaning: string }; sources: Source[] }[] = [
  {
    id: 'char-dham',
    name: 'Char Dham',
    sanskrit: 'चार धाम',
    about: 'The four “abodes” at the four corners of India, linked by tradition with Adi Shankaracharya. Three are Vaishnava (Badrinath, Dvaraka, Puri) and one Shaiva (Rameswaram). Each is near one of the four Shankara mathas.',
    sources: [defn('dham', 'Dham'), src.conceptShanmata],
  },
  {
    id: 'chota-char-dham',
    name: 'Chota Char Dham',
    sanskrit: 'छोटा चार धाम',
    about: 'The Himalayan circuit in Garhwal (Uttarakhand), made west to east: the sources of the Yamuna and the Ganga, then Kedarnath and Badrinath. Open only from about May to November.',
    sources: [defn('gangotri', 'Gangotri'), defn('yamunotri', 'Yamunotri')],
  },
  {
    id: 'sapta-puri',
    name: 'Sapta Puri',
    sanskrit: 'सप्त पुरी',
    about: 'The seven cities that grant liberation (moksha) to those who die in them.',
    verse: {
      iast: 'ayodhyā mathurā māyā kāśī kāñcī avantikā | purī dvāravatī caiva saptaitā mokṣadāyikāḥ ||',
      meaning: 'Ayodhya, Mathura, Maya (Haridwar), Kashi, Kanchi, Avantika (Ujjain) and Dvaravati (Dvaraka): these seven give liberation.',
    },
    sources: [src.defSaptapuri, src.conceptSaptapuri, src.skandaSevenCities],
  },
  {
    id: 'kumbh',
    name: 'Kumbh Mela',
    sanskrit: 'कुम्भ मेला',
    about: 'When the ocean was churned, drops of the nectar of immortality fell from the pot (kumbha) at four places. Each hosts the Kumbh every twelve years, by the positions of Jupiter and the sun; Prayagraj’s Maha Kumbh is the largest gathering on earth.',
    sources: [defn('kumbhamela', 'Kumbha Mela')],
  },
  {
    id: 'arupadai',
    name: 'Arupadai Veedu',
    sanskrit: 'ஆறுபடை வீடு',
    about: 'The six battle-camps (abodes) of Murugan (Skanda) in Tamil Nadu, sung in Nakkirar’s Tirumurugarruppadai. See the Kaumara tradition on the Darshanas page.',
    sources: [defn('skanda', 'Skanda'), defn('murugan', 'Murugan')],
  },
  {
    id: 'pancha-bhuta',
    name: 'Pancha Bhuta Sthalas',
    sanskrit: 'पञ्चभूत स्थल',
    about: 'Five Shiva temples in South India, each for one of the five elements: earth, water, fire, air and space (ether).',
    sources: [defn('pancabhuta', 'Pancha-bhuta')],
  },
];

const t = (p: Omit<Place, 'kind' | 'n'> & { n?: number }): Place => ({ kind: 'tirtha', n: 0, ...p });

export const tirthas: Place[] = [
  t({ id: 'badrinath', circuits: ['char-dham', 'chota-char-dham'], name: 'Badrinath', sanskrit: 'बद्रीनाथ', scriptureSays: 'Badarikashrama, where Nara and Narayana perform austerity', today: 'Badrinath temple, on the Alaknanda', state: 'Uttarakhand', lat: 30.7443, lng: 79.4938, story: 'Vishnu as Badri-Narayana in meditation. Vyasa’s cave, where he is said to have dictated the Mahabharata, is nearby at Mana. The northern Char Dham.', sources: [defn('badarikashrama', 'Badarikashrama')] }),
  t({ id: 'dvaraka', circuits: ['char-dham', 'sapta-puri'], name: 'Dvaraka', sanskrit: 'द्वारका', scriptureSays: 'Dvaravati, Krishna’s city by the western sea', today: 'Dwarkadhish temple, Dwarka', state: 'Gujarat', lat: 22.2378, lng: 68.9674, sameSiteAs: 'nageshvara', story: 'Krishna’s capital after he left Mathura, swallowed by the sea after his departure. The western Char Dham and one of the Sapta Puri; Shankara’s western matha is here.', sources: [defn('dvaraka', 'Dvaraka'), src.skandaSevenCities] }),
  t({ id: 'puri', circuits: ['char-dham'], name: 'Puri (Jagannatha)', sanskrit: 'पुरी', scriptureSays: 'Purushottama-kshetra', today: 'Jagannath temple, Puri', state: 'Odisha', lat: 19.8048, lng: 85.8179, story: 'Jagannatha with Balabhadra and Subhadra, in wooden images renewed every 12–19 years. The Ratha Yatra draws the three on great chariots. Chaitanya spent his last years here. The eastern Char Dham.', sources: [defn('purushottama', 'Purushottama')] }),
  t({ id: 'rameswaram', circuits: ['char-dham'], name: 'Rameswaram', sanskrit: 'रामेश्वरम्', scriptureSays: 'Where Rama worshipped Shiva before crossing to Lanka', today: 'Ramanathaswamy temple, Rameswaram island', state: 'Tamil Nadu', lat: 9.2881, lng: 79.3174, sameSiteAs: 'rameshvara', story: 'Both a Jyotirlinga and the southern Char Dham. Pilgrims bathe in its 22 wells, then carry Ganga water from the north to pour on the linga.', sources: [defn('rameshvara', 'Rameshvara')] }),
  t({ id: 'yamunotri', circuits: ['chota-char-dham'], name: 'Yamunotri', sanskrit: 'यमुनोत्री', scriptureSays: 'Source of the Yamuna, daughter of Surya and sister of Yama', today: 'Yamunotri temple', state: 'Uttarakhand', lat: 31.0142, lng: 78.46, story: 'The first stop of the Himalayan circuit. Rice is cooked in the hot spring of Surya Kund and offered to Yamuna Devi.', sources: [defn('yamuna', 'Yamuna')] }),
  t({ id: 'gangotri', circuits: ['chota-char-dham'], name: 'Gangotri', sanskrit: 'गङ्गोत्री', scriptureSays: 'Where Ganga descended, caught in Shiva’s hair, at Bhagiratha’s prayer', today: 'Gangotri temple; the glacier source is at Gaumukh', state: 'Uttarakhand', lat: 30.9947, lng: 78.9398, story: 'King Bhagiratha’s austerities brought the Ganga down to earth to free the souls of his ancestors, the sons of Sagara.', sources: [defn('bhagiratha', 'Bhagiratha')] }),
  t({ id: 'kedarnath', circuits: ['chota-char-dham'], name: 'Kedarnath', sanskrit: 'केदारनाथ', scriptureSays: 'Kedara in the Himalaya', today: 'Kedarnath temple', state: 'Uttarakhand', lat: 30.7352, lng: 79.0669, sameSiteAs: 'kedara', story: 'A Jyotirlinga and the third stop of the Himalayan circuit. The Pandavas sought Shiva here to be forgiven for the war.', sources: [defn('kedara', 'Kedara')] }),
  t({ id: 'ayodhya', circuits: ['sapta-puri'], name: 'Ayodhya', sanskrit: 'अयोध्या', scriptureSays: 'Capital of the Solar dynasty on the Sarayu', today: 'Ayodhya', state: 'Uttar Pradesh', lat: 26.7956, lng: 82.1943, story: 'City of the Ikshvaku kings and birthplace of Rama.', sources: [defn('ayodhya', 'Ayodhya'), src.skandaSevenCities] }),
  t({ id: 'mathura', circuits: ['sapta-puri'], name: 'Mathura', sanskrit: 'मथुरा', scriptureSays: 'Krishna’s birthplace on the Yamuna', today: 'Mathura', state: 'Uttar Pradesh', lat: 27.4924, lng: 77.6737, story: 'Krishna was born here in Kamsa’s prison, and returned to slay him. With Vrindavan and Govardhana it forms the land of Braj.', sources: [defn('mathura', 'Mathura')] }),
  t({ id: 'haridwar', circuits: ['sapta-puri', 'kumbh'], name: 'Haridwar (Maya)', sanskrit: 'हरिद्वार', scriptureSays: 'Mayapuri, the “gate” where the Ganga leaves the mountains', today: 'Har ki Pauri, Haridwar', state: 'Uttarakhand', lat: 29.9557, lng: 78.1714, story: 'The Ganga enters the plains here. Evening arati at Har ki Pauri; one of the four Kumbh sites.', sources: [defn('haridvara', 'Haridvara')] }),
  t({ id: 'kashi', circuits: ['sapta-puri'], name: 'Kashi (Varanasi)', sanskrit: 'काशी', scriptureSays: 'Kashi, never abandoned by Shiva, even at dissolution', today: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lng: 83.0131, sameSiteAs: 'vishveshvara', story: 'Said to rest on Shiva’s trident. Those who die here receive the liberating mantra from Shiva himself.', sources: [defn('kashi', 'Kashi')] }),
  t({ id: 'kanchi', circuits: ['sapta-puri'], name: 'Kanchi', sanskrit: 'काञ्ची', scriptureSays: 'Kanchipuram, city of a thousand temples', today: 'Kanchipuram', state: 'Tamil Nadu', lat: 12.8342, lng: 79.7036, sameSiteAs: 'kamakshi', story: 'The only southern city among the seven: Shiva Kanchi and Vishnu Kanchi, with Kamakshi’s Shakti Peetha between them.', sources: [defn('kanci', 'Kanchi')] }),
  t({ id: 'ujjain', circuits: ['sapta-puri', 'kumbh'], name: 'Ujjain (Avantika)', sanskrit: 'उज्जयिनी', scriptureSays: 'Avantika on the Shipra', today: 'Ujjain', state: 'Madhya Pradesh', lat: 23.1765, lng: 75.7885, sameSiteAs: 'mahakala', story: 'Home of the Mahakala Jyotirlinga, and the prime meridian of Indian astronomy. The Kumbh here is called Simhastha.', sources: [defn('avanti', 'Avanti')] }),
  t({ id: 'prayagraj', circuits: ['kumbh'], name: 'Prayagraj', sanskrit: 'प्रयाग', scriptureSays: 'Prayaga, “king of tirthas”, at the meeting of three rivers', today: 'Triveni Sangam, Prayagraj', state: 'Uttar Pradesh', lat: 25.4246, lng: 81.8852, story: 'Where the Ganga, the Yamuna and the unseen Sarasvati meet. Brahma is said to have performed the first sacrifice here. Host of the Maha Kumbh.', sources: [defn('prayaga', 'Prayaga')] }),
  t({ id: 'nashik', circuits: ['kumbh'], name: 'Nashik–Trimbak', sanskrit: 'नाशिक', scriptureSays: 'Panchavati on the Godavari', today: 'Ramkund, Nashik (and Trimbakeshwar)', state: 'Maharashtra', lat: 20.0072, lng: 73.7926, sameSiteAs: 'tryambaka', story: 'Rama, Sita and Lakshmana lived at Panchavati in exile. The Kumbh is held here and at Trimbakeshwar, source of the Godavari.', sources: [defn('pancavati', 'Panchavati')] }),
  t({ id: 'tirupparankundram', circuits: ['arupadai'], name: 'Tirupparankundram', sanskrit: 'திருப்பரங்குன்றம்', scriptureSays: 'First of the six abodes', today: 'Subramaniya Swamy temple, near Madurai', state: 'Tamil Nadu', lat: 9.8794, lng: 78.0717, story: 'Where Murugan married Devasena, Indra’s daughter, after his victory over Surapadman.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'tiruchendur', circuits: ['arupadai'], name: 'Tiruchendur', sanskrit: 'திருச்செந்தூர்', scriptureSays: 'Second abode, on the seashore', today: 'Subramaniya Swamy temple, Tiruchendur', state: 'Tamil Nadu', lat: 8.4962, lng: 78.1253, story: 'The battlefield where Murugan defeated the asura Surapadman, celebrated at Skanda Shashti.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'palani', circuits: ['arupadai'], name: 'Palani', sanskrit: 'பழனி', scriptureSays: 'Third abode, on a hill', today: 'Dhandayuthapani temple, Palani hill', state: 'Tamil Nadu', lat: 10.4488, lng: 77.5202, story: 'Murugan as an ascetic boy with a staff, after losing the contest for the fruit of wisdom to Ganesha. Famous for the kavadi pilgrimage at Thaipusam.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'swamimalai', circuits: ['arupadai'], name: 'Swamimalai', sanskrit: 'சுவாமிமலை', scriptureSays: 'Fourth abode', today: 'Swaminatha Swamy temple, near Kumbakonam', state: 'Tamil Nadu', lat: 10.9573, lng: 79.3257, story: 'Where the boy Murugan explained the meaning of Om to his father Shiva: hence Swaminatha, “teacher of the Lord”.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'tiruttani', circuits: ['arupadai'], name: 'Tiruttani', sanskrit: 'திருத்தணி', scriptureSays: 'Fifth abode', today: 'Subramaniya Swamy temple, Tiruttani hill', state: 'Tamil Nadu', lat: 13.1757, lng: 79.6069, story: 'Where Murugan’s anger cooled after the war, and where he married Valli, the tribal girl.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'pazhamudircholai', circuits: ['arupadai'], name: 'Pazhamudircholai', sanskrit: 'பழமுதிர்சோலை', scriptureSays: 'Sixth abode, in a forest grove', today: 'Solaimalai Murugan temple, above Alagar Koil, near Madurai', state: 'Tamil Nadu', lat: 10.0885, lng: 78.2233, story: 'Where the young Murugan tested the poet Avvaiyar with the riddle of “hot fruit or cold fruit”.', sources: [defn('skanda', 'Skanda')] }),
  t({ id: 'ekambareswarar', circuits: ['pancha-bhuta'], name: 'Ekambareswarar (Earth)', sanskrit: 'एकाम्रेश्वर', scriptureSays: 'Prithvi linga', today: 'Ekambareswarar temple, Kanchipuram', state: 'Tamil Nadu', lat: 12.8475, lng: 79.6995, story: 'Parvati made a linga of sand under a mango tree and embraced it to save it from a flood. The ancient mango tree still stands.', sources: [defn('pancabhuta', 'Pancha-bhuta')] }),
  t({ id: 'jambukeswarar', circuits: ['pancha-bhuta'], name: 'Jambukeswarar (Water)', sanskrit: 'जम्बुकेश्वर', scriptureSays: 'Appu (jala) linga', today: 'Jambukeswarar temple, Thiruvanaikaval, Tiruchirappalli', state: 'Tamil Nadu', lat: 10.8533, lng: 78.7055, story: 'An underground spring keeps the sanctum floor always wet around the linga.', sources: [defn('pancabhuta', 'Pancha-bhuta')] }),
  t({ id: 'arunachaleswarar', circuits: ['pancha-bhuta'], name: 'Arunachaleswarar (Fire)', sanskrit: 'अरुणाचलेश्वर', scriptureSays: 'Agni linga', today: 'Annamalaiyar temple, Tiruvannamalai', state: 'Tamil Nadu', lat: 12.2319, lng: 79.0677, story: 'The hill itself is Shiva as the column of fire. At Karthigai Deepam a great flame is lit on its summit. Ramana Maharshi lived here.', sources: [defn('arunacala', 'Arunachala')] }),
  t({ id: 'srikalahasti', circuits: ['pancha-bhuta'], name: 'Srikalahasti (Air)', sanskrit: 'श्रीकालहस्ती', scriptureSays: 'Vayu linga', today: 'Srikalahasteeswara temple, Srikalahasti', state: 'Andhra Pradesh', lat: 13.7497, lng: 79.6984, story: 'A lamp in the windless sanctum flickers, said to be Shiva’s breath. Named after a spider, a snake and an elephant (shri-kala-hasti) that worshipped here. The hunter Kannappa offered his eyes here.', sources: [defn('kalahasti', 'Kalahasti')] }),
  t({ id: 'chidambaram', circuits: ['pancha-bhuta'], name: 'Chidambaram (Space)', sanskrit: 'चिदम्बरम्', scriptureSays: 'Akasha linga', today: 'Thillai Nataraja temple, Chidambaram', state: 'Tamil Nadu', lat: 11.3993, lng: 79.6936, story: 'Shiva as Nataraja, the cosmic dancer. The “Chidambara rahasya” is an empty space behind a curtain: Shiva as formless ether.', sources: [defn('cidambara', 'Chidambaram'), src.dgShaivaSiddhanta] }),
].map((p, i) => ({ ...p, n: i + 1 }));

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
  src.defSaptapuri,
  src.skandaSevenCities,
  src.smriti,
];

export const allPlaces = [...jyotirlingas, ...shaktiPeethas, ...otherPeethas, ...tirthas];
export const placeById = new Map(allPlaces.map((p) => [p.id, p]));
