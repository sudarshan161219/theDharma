import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— Dvaita (Tattvavada) ——————————————————————— */

/** Verses the school leans on. */
export const dvVerses: { deva: string; iast: string; meaning: string; reading: string; cite: string; source: Source }[] = [
  {
    deva: 'द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते',
    iast: 'dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte',
    meaning: '“Two birds, companions, cling to the same tree. One eats the sweet fruit; the other, not eating, looks on.”',
    reading: 'The soul tastes the fruits of its deeds; the Lord only watches. Two, and never one.',
    cite: 'Mundaka Upanishad 3.1.1 (also Rig Veda 1.164.20)',
    source: src.mundakaMadhva,
  },
  {
    deva: 'स आत्मा अतत्त्वमसि',
    iast: 'sa ātmā atat tvam asi',
    meaning: 'Madhva divides the words of Chandogya 6.8.7 differently: “That is the Self; you are not That.”',
    reading: 'Elsewhere he reads “you are That” as likeness and dependence: the soul is “of” the Lord, as a servant is the king’s.',
    cite: 'Chandogya Upanishad 6.8.7, as Madhva reads it',
    source: src.chandogyaMadhva,
  },
  {
    deva: 'उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः',
    iast: 'uttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ',
    meaning: '“There are two persons in the world, the perishable and the imperishable … but the highest person is another, called the supreme Self.”',
    reading: 'The Lord is other than both matter and souls: the Gita itself counts three.',
    cite: 'Bhagavad Gita 15.16–17',
    source: src.gitaVaishnava,
  },
];

/** Vyasatirtha’s verse summing up the school in nine points. */
export const nineTenets: { deva: string; iast: string; meaning: string }[] = [
  { deva: 'हरिः परतरः', iast: 'hariḥ parataraḥ', meaning: 'Hari (Vishnu) is supreme' },
  { deva: 'सत्यं जगत्', iast: 'satyaṃ jagat', meaning: 'The world is real' },
  { deva: 'तत्त्वतो भेदः', iast: 'tattvato bhedaḥ', meaning: 'Difference is real' },
  { deva: 'जीवगणा हरेरनुचराः', iast: 'jīvagaṇā harer anucarāḥ', meaning: 'Souls are Hari’s servants' },
  { deva: 'नीचोच्चभावं गताः', iast: 'nīcocca-bhāvaṃ gatāḥ', meaning: 'Souls are graded, higher and lower' },
  { deva: 'मुक्तिर्नैजसुखानुभूतिः', iast: 'muktir naija-sukhānubhūtiḥ', meaning: 'Liberation is the soul enjoying its own innate bliss' },
  { deva: 'अमला भक्तिश्च तत्साधनम्', iast: 'amalā bhaktiś ca tat-sādhanam', meaning: 'Pure devotion is the means to it' },
  { deva: 'अक्षत्रितयं प्रमाणम्', iast: 'akṣa-tritayaṃ pramāṇam', meaning: 'There are three means of knowledge: perception, inference and scripture' },
  { deva: 'अखिलाम्नायैकवेद्यो हरिः', iast: 'akhilāmnāyaika-vedyo hariḥ', meaning: 'Hari is the one thing all the Vedas make known' },
];

/** The five differences (pancha-bheda). */
export const panchaBheda: { between: string; about: string }[] = [
  { between: 'The Lord and souls', about: 'No soul, even freed, becomes Vishnu.' },
  { between: 'The Lord and matter', about: 'He is not the stuff of the world, only its maker and ruler.' },
  { between: 'Soul and soul', about: 'Each soul is unique, in bondage and in liberation.' },
  { between: 'Soul and matter', about: 'The conscious self is never its body.' },
  { between: 'Matter and matter', about: 'Every thing is different from every other.' },
];

/** Two kinds of reality. */
export const twoRealities: { name: string; sanskrit: string; who: string; about: string }[] = [
  { name: 'Independent', sanskrit: 'स्वतन्त्र', who: 'Vishnu alone', about: 'He depends on nothing for his being, knowing or acting. Perfect, full of every good quality, free of every fault.' },
  { name: 'Dependent', sanskrit: 'परतन्त्र', who: 'Everything else', about: 'Lakshmi, souls and matter are real and eternal, but exist, know and act only by his will. Lakshmi is highest among them: eternally free, yet dependent.' },
];

/** Madhva’s key ideas. */
export const dvIdeas: { term: string; sanskrit: string; meaning: string; about: string }[] = [
  {
    term: 'Bheda',
    sanskrit: 'भेद',
    meaning: 'Difference',
    about: 'Difference is not a relation added to things; it is their very nature (dharmi-svarupa). To know a thing is to know it as different from all else.',
  },
  {
    term: 'Bimba–pratibimba',
    sanskrit: 'बिम्ब–प्रतिबिम्ब',
    meaning: 'Original and reflection',
    about: 'The soul is a reflection of the Lord: like him in being conscious and blissful, and wholly dependent on him, as a reflection is on the face. A reflection is never the face.',
  },
  {
    term: 'Taratamya',
    sanskrit: 'तारतम्य',
    meaning: 'Gradation',
    about: 'Souls differ by nature, eternally. The devas are ranked below Vishnu: Lakshmi, then Brahma and Vayu, then Sarasvati and Bharati, then Garuda, Shesha and Rudra, and so on down.',
  },
  {
    term: 'Svarupa-yogyata',
    sanskrit: 'स्वरूपयोग्यता',
    meaning: 'Innate fitness',
    about: 'Each soul has a fixed nature that decides its end. Madhva names three classes: fit for liberation (mukti-yogya), for endless rebirth (nitya-samsarin), and for darkness (tamo-yogya). No other Vedanta teaches eternal damnation.',
  },
  {
    term: 'Sakshi',
    sanskrit: 'साक्षी',
    meaning: 'The witness',
    about: 'The soul’s own inner faculty of awareness, which cannot err. It is the final test of all knowledge, and it knows directly that “I am” and that “I am different”.',
  },
  {
    term: 'Vishesha',
    sanskrit: 'विशेष',
    meaning: 'Distinguishing particular',
    about: 'How one simple substance can have many aspects that are not different things: Vishnu and his qualities are one, yet we can speak of each. It lets Madhva keep God’s simplicity and his many attributes.',
  },
];

/** Madhva’s definition of bhakti. */
export const bhaktiVerse = {
  deva: 'माहात्म्यज्ञानपूर्वस्तु सुदृढः सर्वतोऽधिकः । स्नेहो भक्तिरिति प्रोक्तस्तया मुक्तिर्न चान्यथा ॥',
  iast: 'māhātmya-jñāna-pūrvas tu sudṛḍhaḥ sarvato ’dhikaḥ / sneho bhaktir iti proktas tayā muktir na cānyathā',
  meaning: '“Love that rests on knowing his greatness, firm and greater than every other love: that is called bhakti. By it comes liberation, and in no other way.”',
  cite: 'Mahabharata-tatparya-nirnaya 1.86',
};

/** The road to liberation, step by step. */
export const dvSteps: { name: string; sanskrit: string; about: string }[] = [
  { name: 'Detachment', sanskrit: 'वैराग्य', about: 'Seeing the limits of every worldly good.' },
  { name: 'Study', sanskrit: 'श्रवण–मनन', about: 'Hearing and reflecting on scripture under a guru: learning the Lord’s greatness and one’s own dependence.' },
  { name: 'Devotion', sanskrit: 'भक्ति', about: 'Love for Vishnu, rooted in that knowledge, growing all the time.' },
  { name: 'Meditation', sanskrit: 'ध्यान', about: 'Constant contemplation of the Lord as he is present in one’s heart.' },
  { name: 'Direct vision', sanskrit: 'अपरोक्षज्ञान', about: 'Seeing the Lord (as the soul’s own original, bimba), which burns up past karma.' },
  { name: 'Grace', sanskrit: 'प्रसाद', about: 'Liberation is Vishnu’s gift alone: effort prepares, grace frees.' },
];

/** What liberation is like for Madhva. */
export const dvMukti: { name: string; about: string }[] = [
  { name: 'Salokya', about: 'Dwelling in the Lord’s world' },
  { name: 'Samipya', about: 'Dwelling near him' },
  { name: 'Sarupya', about: 'Taking a form like his' },
  { name: 'Sayujya', about: 'Entering him and sharing his enjoyments, never his being' },
];

/** The acharyas, oldest first. Traditional dates. */
export const dvTeachers: { name: string; dates: string; role: string; works: string; acharyaId?: string }[] = [
  { name: 'Madhvacharya (Anandatirtha, Purnaprajna)', dates: '1238–1317', role: 'Founded Tattvavada; installed Krishna at Udupi and founded eight mathas to serve him. His followers hold him the third avatara of Vayu, after Hanuman and Bhima', works: 'Thirty-seven works, the Sarvamula', acharyaId: 'madhva' },
  { name: 'Padmanabha Tirtha', dates: '13th–14th century', role: 'Madhva’s first successor', works: 'Sannyaya-ratnavali' },
  { name: 'Jayatirtha (Tikacharya)', dates: 'c. 1340–1388', role: '“The commentator”, whose glosses made Madhva’s terse works the basis of a school', works: 'Nyaya-sudha (on the Anuvyakhyana), Pramana-paddhati, Vadavali' },
  { name: 'Vyasatirtha (Vyasaraja)', dates: '1460–1539', role: 'Guru to the kings of Vijayanagara; the school’s sharpest logician; teacher of Purandara Dasa and Kanaka Dasa', works: 'Nyayamrita, Tarka-tandava, Tatparya-chandrika' },
  { name: 'Vadiraja Tirtha', dates: 'Traditionally 1480–1600', role: 'Head of the Sode matha; set the two-year Paryaya at Udupi', works: 'Yukti-mallika, Tirtha-prabandha' },
  { name: 'Raghavendra Tirtha', dates: '1595–1671', role: 'Commentator and saint; his shrine at Mantralaya draws pilgrims of every background', works: 'Glosses on Jayatirtha and Vyasatirtha; Bhatta-sangraha' },
];

/** The Haridasas: saints who sang Dvaita in Kannada. */
export const haridasas: { name: string; dates: string; note: string }[] = [
  { name: 'Sripadaraja', dates: '15th century', note: 'Began the movement of Kannada devotional song' },
  { name: 'Purandara Dasa', dates: '1484–1564', note: 'A rich merchant turned mendicant singer; called the father of Carnatic music for his graded lessons' },
  { name: 'Kanaka Dasa', dates: '16th century', note: 'A shepherd-warrior; at Udupi, legend says, Krishna turned to face him through a window' },
  { name: 'Vijaya Dasa', dates: '18th century', note: 'Revived the movement' },
  { name: 'Jagannatha Dasa', dates: '18th century', note: 'Put the whole philosophy into Kannada verse' },
];

/** The great debate with Advaita, text answering text. */
export const debate: { text: string; by: string; side: 'Dvaita' | 'Advaita' }[] = [
  { text: 'Nyayamrita', by: 'Vyasatirtha', side: 'Dvaita' },
  { text: 'Advaita-siddhi', by: 'Madhusudana Sarasvati', side: 'Advaita' },
  { text: 'Nyayamrita-tarangini', by: 'Ramacharya', side: 'Dvaita' },
  { text: 'Guru-chandrika (Laghu-chandrika)', by: 'Brahmananda Sarasvati', side: 'Advaita' },
];

/** Madhva’s key works. */
export const madhvaWorks: { name: string; about: string }[] = [
  { name: 'Brahma Sutra Bhashya', about: 'His commentary on the Brahma Sutras' },
  { name: 'Anuvyakhyana', about: 'A verse exposition of the Sutras, defending his reading' },
  { name: 'Gita Bhashya and Gita Tatparya-nirnaya', about: 'Two works on the Gita' },
  { name: 'Ten Upanishad Bhashyas', about: 'On the principal Upanishads' },
  { name: 'Mahabharata Tatparya-nirnaya', about: 'The meaning of the epic and the Puranas, and the story of the avataras, in verse' },
  { name: 'Bhagavata Tatparya-nirnaya', about: 'Notes on the Bhagavata Purana' },
  { name: 'Vishnu-tattva-vinirnaya', about: 'Proof that the Vedas teach Vishnu’s supremacy' },
  { name: 'Tattva-sankhyana', about: 'The categories of reality, in eleven verses' },
  { name: 'Dvadasha Stotra', about: 'Twelve hymns to Vishnu, still sung at Udupi' },
];

/** Udupi’s eight mathas, which take turns to worship Krishna. */
export const ashtaMathas = ['Pejavara', 'Palimaru', 'Admaru', 'Puttige', 'Sode', 'Kaniyooru', 'Shiroor', 'Krishnapura'];

/** Two Vaishnava Vedantas side by side. */
export const dvVsVa: { topic: string; dvaita: string; vishishtadvaita: string }[] = [
  { topic: 'The world and souls', dvaita: 'Real, and wholly different from the Lord', vishishtadvaita: 'Real, and the Lord’s body, inseparable from him' },
  { topic: 'Key relation', dvaita: 'Independent and dependent (svatantra–paratantra)', vishishtadvaita: 'Soul and body (sharira–shariri)' },
  { topic: '“You are That”', dvaita: '“You are not That”, or likeness', vishishtadvaita: 'The Lord within you is the Lord of all' },
  { topic: 'Souls', dvaita: 'Graded by nature, for ever', vishishtadvaita: 'Equal in essence' },
  { topic: 'Freed souls', dvaita: 'Enjoy bliss in grades, each by its own capacity', vishishtadvaita: 'All enjoy the same bliss as the Lord' },
  { topic: 'Eternal damnation', dvaita: 'Yes, for souls fit for darkness', vishishtadvaita: 'No' },
  { topic: 'Lakshmi', dvaita: 'Eternally free, highest of dependents', vishishtadvaita: 'Inseparable from Narayana; the mediator' },
  { topic: 'Material cause', dvaita: 'Prakriti; the Lord is only the efficient cause', vishishtadvaita: 'The Lord himself, through his body' },
];

export const dvSources: Source[] = [
  src.dasgupta4,
  src.dasguptaMadhva,
  src.dgMadhvaWorks,
  src.dgMadhvaOntology,
  src.dgMadhvaBhakti,
  src.dgRamanujaMadhva,
  src.chandogyaMadhva,
  src.mundakaMadhva,
  src.ishaMadhva,
  src.haridasas,
  defn('madhvacarya', 'Madhvacharya'),
  defn('jayatirtha', 'Jayatirtha'),
  defn('vyasatirtha', 'Vyasatirtha'),
  defn('nyayamrita', 'Nyayamrita'),
  defn('nyayasudha', 'Nyayasudha'),
];
