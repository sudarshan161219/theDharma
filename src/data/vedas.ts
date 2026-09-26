import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— The four Vedas ——————————————————————— */

export interface Veda {
  id: string;
  name: string;
  sanskrit: string;
  meaning: string;
  what: string;
  /** Rough size of the surviving Samhita. */
  size: string;
  structure: string;
  priest: string;
  /** Vyasa's disciple who received it (Vishnu Purana 3.4). */
  receivedBy: string;
  receivedById?: string;
  shakhas: string;
  brahmanas: string;
  aranyakas: string;
  upanishads: string;
  upaveda: string;
  mahavakya: { iast: string; deva: string; meaning: string; source: string };
  firstVerse: { deva: string; iast: string; meaning: string; ref: string };
  note: string;
  sources: Source[];
}

export const vedas: Veda[] = [
  {
    id: 'rig',
    name: 'Rig Veda',
    sanskrit: 'ऋग्वेद',
    meaning: 'The Veda of praise (ṛc, a verse of praise)',
    what: 'Hymns to the devas — Agni, Indra, Soma, Varuna, the Ashvins, Ushas — and a few great hymns on creation and the One.',
    size: '10 mandalas · 1,028 hymns (suktas) · about 10,600 verses',
    structure: 'Mandalas 2–7 are the “family books”, each from one line of seers (Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vasishtha). Mandala 9 is entirely to Soma.',
    priest: 'Hotri — recites the hymns that invite the devas',
    receivedBy: 'Paila',
    shakhas: 'Shakala (the one that survives in full); Bashkala in part',
    brahmanas: 'Aitareya, Kaushitaki (Shankhayana)',
    aranyakas: 'Aitareya, Kaushitaki',
    upanishads: 'Aitareya, Kaushitaki',
    upaveda: 'Ayurveda (some link it to the Atharva)',
    mahavakya: { iast: 'prajñānaṃ brahma', deva: 'प्रज्ञानं ब्रह्म', meaning: 'Consciousness is Brahman', source: 'Aitareya Upanishad 3.3' },
    firstVerse: {
      deva: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।',
      iast: 'agnim īḷe purohitaṃ yajñasya devam ṛtvijam |',
      meaning: 'I praise Agni, the household priest, the divine minister of the sacrifice.',
      ref: 'Rig Veda 1.1.1',
    },
    note: 'The Nasadiya hymn (10.129) asks how creation began and ends: “perhaps even he does not know.” The Purusha Sukta (10.90) and the Gayatri (3.62.10) are also here.',
    sources: [src.rigVeda, src.rigVeda1_1_1, src.nasadiya, defn('rigveda', 'Rigveda')],
  },
  {
    id: 'yajur',
    name: 'Yajur Veda',
    sanskrit: 'यजुर्वेद',
    meaning: 'The Veda of sacrificial formulas (yajus)',
    what: 'Prose formulas and verses spoken while performing the rite: building the altar, pouring offerings, the great soma and horse sacrifices. Shri Rudram is here.',
    size: 'Shukla: 40 chapters, about 2,000 verses; Krishna: 7 kandas of mixed prose and verse',
    structure:
      'Two branches. The Krishna (“black”) Yajur mixes mantra and explanation in one text. The Shukla (“white”) Yajur keeps the mantras clean and puts explanation in a separate Brahmana.',
    priest: 'Adhvaryu — performs the physical rite',
    receivedBy: 'Vaishampayana',
    receivedById: 'vaishampayana',
    shakhas: 'Krishna: Taittiriya, Maitrayani, Katha, Kapishthala. Shukla (Vajasaneyi): Madhyandina, Kanva',
    brahmanas: 'Taittiriya (Krishna); Shatapatha, the largest Brahmana (Shukla)',
    aranyakas: 'Taittiriya; Brihadaranyaka',
    upanishads: 'Taittiriya, Katha, Shvetashvatara, Maitri (Krishna); Isha, Brihadaranyaka (Shukla)',
    upaveda: 'Dhanurveda, the science of archery and war',
    mahavakya: { iast: 'ahaṃ brahmāsmi', deva: 'अहं ब्रह्मास्मि', meaning: 'I am Brahman', source: 'Brihadaranyaka Upanishad 1.4.10' },
    firstVerse: {
      deva: 'इषे त्वोर्जे त्वा ।',
      iast: 'iṣe tvorje tvā |',
      meaning: 'For food thee, for strength thee (cutting the branch for the rite).',
      ref: 'Shukla Yajur Veda 1.1',
    },
    note: 'The Vishnu Purana (3.5) tells why it split: Yajnavalkya quarrelled with his guru Vaishampayana and gave back what he had learned. The other disciples, as partridges (tittiri), picked it up — the Taittiriya. Yajnavalkya then worshipped the Sun, who taught him the fresh “white” Yajus.',
    sources: [src.vpVedaDivision, src.brihadaranyaka, defn('yajurveda', 'Yajurveda')],
  },
  {
    id: 'sama',
    name: 'Sama Veda',
    sanskrit: 'सामवेद',
    meaning: 'The Veda of melodies (sāman)',
    what: 'Verses, almost all taken from the Rig Veda, set to melodies for singing at the soma sacrifice. The root of Indian music.',
    size: 'About 1,875 verses, of which only about 75 are not in the Rig Veda',
    structure: 'The Archika (verse collection) and the Gana books, which give the melodies with their added syllables and pauses.',
    priest: 'Udgatri — sings the samans',
    receivedBy: 'Jaimini',
    receivedById: 'jaimini',
    shakhas: 'Kauthuma, Ranayaniya, Jaiminiya',
    brahmanas: 'Tandya (Panchavimsha), Shadvimsha, Jaiminiya, Chandogya',
    aranyakas: 'Jaiminiya Upanishad Brahmana (serves as its Aranyaka)',
    upanishads: 'Chandogya, Kena',
    upaveda: 'Gandharvaveda, music and dance',
    mahavakya: { iast: 'tat tvam asi', deva: 'तत्त्वमसि', meaning: 'You are That', source: 'Chandogya Upanishad 6.8.7' },
    firstVerse: {
      deva: 'अग्न आ याहि वीतये गृणानो हव्यदातये ।',
      iast: 'agna ā yāhi vītaye gṛṇāno havyadātaye |',
      meaning: 'Come, Agni, praised, to the feast; come to the giving of offerings.',
      ref: 'Sama Veda 1.1',
    },
    note: 'In the Gita (10.22) Krishna says: “Among the Vedas I am the Sama Veda.”',
    sources: [src.chandogyaMadhva, src.gitaVaishnava, defn('samaveda', 'Samaveda')],
  },
  {
    id: 'atharva',
    name: 'Atharva Veda',
    sanskrit: 'अथर्ववेद',
    meaning: 'The Veda of Atharvan and Angiras, the fire-priests',
    what: 'Hymns for daily life: healing, long life, protection, marriage, house-building, kingship — and deep hymns on the cosmos, time and Brahman.',
    size: '20 kandas · about 730 hymns · about 6,000 verses',
    structure: 'Ordered largely by length of hymn. Book 20 is mostly drawn from the Rig Veda.',
    priest: 'Brahman — the silent overseer who corrects errors in the rite',
    receivedBy: 'Sumantu',
    receivedById: 'sumantu',
    shakhas: 'Shaunaka, Paippalada',
    brahmanas: 'Gopatha',
    aranyakas: '—',
    upanishads: 'Mundaka, Mandukya, Prashna',
    upaveda: 'Arthashastra or Sthapatya (architecture); lists differ',
    mahavakya: { iast: 'ayam ātmā brahma', deva: 'अयमात्मा ब्रह्म', meaning: 'This Self is Brahman', source: 'Mandukya Upanishad 2' },
    firstVerse: {
      deva: 'शं नो देवीरभिष्टय आपो भवन्तु पीतये ।',
      iast: 'śaṃ no devīr abhiṣṭaya āpo bhavantu pītaye |',
      meaning: 'May the divine waters be a blessing to us, for help and for drinking.',
      ref: 'Atharva Veda (Paippalada) 1.1',
    },
    note: 'The Prithvi Sukta (12.1) is a great hymn to the Earth: “the Earth is my mother, I am her son.”',
    sources: [src.vpVedaDivision, defn('atharvaveda', 'Atharvaveda')],
  },
];

/** The four layers of each Veda, and the stage of life each suits. */
export const layers: { name: string; sanskrit: string; what: string; ashrama: string; kanda: 'karma' | 'jnana' }[] = [
  { name: 'Samhita', sanskrit: 'संहिता', what: 'The mantras themselves: hymns, formulas, melodies', ashrama: 'Brahmacharya: learnt by heart', kanda: 'karma' },
  { name: 'Brahmana', sanskrit: 'ब्राह्मण', what: 'Prose explaining the rites and the meaning of the mantras', ashrama: 'Grihastha: the householder’s rites', kanda: 'karma' },
  { name: 'Aranyaka', sanskrit: 'आरण्यक', what: '“Forest texts”: inner meaning of the rite, meditation', ashrama: 'Vanaprastha: in the forest', kanda: 'jnana' },
  { name: 'Upanishad', sanskrit: 'उपनिषद्', what: 'The Self and Brahman: knowledge that frees', ashrama: 'Sannyasa: renunciation', kanda: 'jnana' },
];

/* ——————————————————————— Upanishads ——————————————————————— */

export interface Upanishad {
  id: string;
  name: string;
  sanskrit: string;
  veda: string;
  size: string;
  teacher: string;
  teacherId?: string;
  student: string;
  studentId?: string;
  setting: string;
  teaching: string;
  famous: { iast: string; meaning: string; ref: string };
  sources: Source[];
}

export const upanishads: Upanishad[] = [
  {
    id: 'isha',
    name: 'Isha',
    sanskrit: 'ईश',
    veda: 'Shukla Yajur',
    size: '18 verses; the last chapter of the Vajasaneyi Samhita',
    teacher: 'The seer, unnamed',
    student: 'The reader',
    setting: 'No story: a single, dense poem',
    teaching: 'All this is pervaded by the Lord. Enjoy by renouncing, covet nothing. Act, and knowledge and action together lead beyond death.',
    famous: { iast: 'īśā vāsyam idaṃ sarvam', meaning: 'All this is to be dwelt in by the Lord.', ref: 'Isha 1' },
    sources: [src.ishaMadhva, src.ishaShankara],
  },
  {
    id: 'kena',
    name: 'Kena',
    sanskrit: 'केन',
    veda: 'Sama',
    size: '4 parts, 35 verses',
    teacher: 'Uma Haimavati (Devi)',
    student: 'Indra and the devas',
    setting: 'The devas grow proud after a victory. A mysterious spirit (yaksha) appears; Agni cannot burn a blade of grass before it, Vayu cannot move it. Uma reveals it was Brahman.',
    teaching: 'Brahman is that by which the mind thinks and the eye sees, yet the mind and eye cannot grasp it.',
    famous: { iast: 'keneṣitaṃ patati preṣitaṃ manaḥ', meaning: 'By whom impelled does the mind fly to its object?', ref: 'Kena 1.1' },
    sources: [defn('kenopanishad', 'Kena Upanishad')],
  },
  {
    id: 'katha',
    name: 'Katha',
    sanskrit: 'कठ',
    veda: 'Krishna Yajur',
    size: '2 chapters, 6 vallis, 119 verses',
    teacher: 'Yama, lord of death',
    student: 'Nachiketa, a boy',
    setting: 'Given to Death by his angry father, Nachiketa waits three days at Yama’s door. Offered three boons, he refuses wealth and long life and asks what lies beyond death.',
    teaching: 'The Self is never born and never dies. The body is a chariot, the senses horses, the mind the reins, the intellect the charioteer.',
    famous: { iast: 'uttiṣṭhata jāgrata prāpya varān nibodhata', meaning: 'Arise, awake, and learn by approaching the great.', ref: 'Katha 1.3.14' },
    sources: [src.kathaShankara, src.katha1_1_1],
  },
  {
    id: 'prashna',
    name: 'Prashna',
    sanskrit: 'प्रश्न',
    veda: 'Atharva',
    size: '6 questions, 67 verses',
    teacher: 'Pippalada',
    student: 'Six seekers: Sukesha, Satyakama, Gargya, Kausalya, Bhargava, Kabandhi',
    setting: 'Pippalada asks them to live with him a year in austerity first; then each asks one question.',
    teaching: 'The six questions: where creatures come from, which powers sustain the body, how prana arises, what sleeps and wakes, the meaning of Om, and the Person with sixteen parts.',
    famous: { iast: 'bhagavan kuto ha vā imāḥ prajāḥ prajāyanta iti', meaning: 'Lord, from where are these creatures born?', ref: 'Prashna 1.3' },
    sources: [defn('prashnopanishad', 'Prashna Upanishad')],
  },
  {
    id: 'mundaka',
    name: 'Mundaka',
    sanskrit: 'मुण्डक',
    veda: 'Atharva',
    size: '3 chapters, 64 verses',
    teacher: 'Angiras',
    teacherId: 'angiras',
    student: 'Shaunaka, the great householder',
    studentId: 'shaunaka',
    setting: 'Shaunaka asks: “What is that by knowing which all this is known?”',
    teaching: 'Two kinds of knowledge: the lower (the Vedas and their sciences) and the higher, by which the Imperishable is known. Two birds on one tree: one eats, one watches.',
    famous: { iast: 'satyam eva jayate nānṛtam', meaning: 'Truth alone triumphs, not falsehood — India’s national motto.', ref: 'Mundaka 3.1.6' },
    sources: [defn('mundaka', 'Mundaka')],
  },
  {
    id: 'mandukya',
    name: 'Mandukya',
    sanskrit: 'माण्डूक्य',
    veda: 'Atharva',
    size: '12 verses, the shortest',
    teacher: 'The seer, unnamed',
    student: 'The reader',
    setting: 'A meditation on Om',
    teaching: 'Om is all. Its sounds A, U, M are waking, dreaming and deep sleep; the silence after it is the fourth (turiya), the Self. Gaudapada’s Karika on it founds Advaita.',
    famous: { iast: 'ayam ātmā brahma', meaning: 'This Self is Brahman.', ref: 'Mandukya 2' },
    sources: [src.dgGaudapada, defn('mandukya', 'Mandukya')],
  },
  {
    id: 'taittiriya',
    name: 'Taittiriya',
    sanskrit: 'तैत्तिरीय',
    veda: 'Krishna Yajur',
    size: '3 vallis',
    teacher: 'Varuna',
    student: 'His son Bhrigu',
    studentId: 'bhrigu',
    setting: 'Bhrigu asks his father to teach him Brahman. Varuna tells him to find out by austerity. Five times he returns with a deeper answer.',
    teaching: 'The five sheaths (koshas): food, breath, mind, understanding and bliss. Also the graduate’s charge: “speak the truth, practise dharma”, “treat mother, father, teacher and guest as devas.”',
    famous: { iast: 'satyaṃ vada dharmaṃ cara', meaning: 'Speak the truth, practise dharma.', ref: 'Taittiriya 1.11.1' },
    sources: [defn('taittiriya', 'Taittiriya')],
  },
  {
    id: 'aitareya',
    name: 'Aitareya',
    sanskrit: 'ऐतरेय',
    veda: 'Rig',
    size: '3 chapters, 33 verses',
    teacher: 'Mahidasa Aitareya (by tradition)',
    student: 'The reader',
    setting: 'A creation account: the Self alone was, and it created the worlds and the cosmic person',
    teaching: 'The Self entered the body through the crown of the head. All that knows is consciousness, and consciousness is Brahman.',
    famous: { iast: 'prajñānaṃ brahma', meaning: 'Consciousness is Brahman.', ref: 'Aitareya 3.3' },
    sources: [defn('aitareya', 'Aitareya')],
  },
  {
    id: 'chandogya',
    name: 'Chandogya',
    sanskrit: 'छान्दोग्य',
    veda: 'Sama',
    size: '8 chapters, the second largest',
    teacher: 'Uddalaka Aruni (and others: Sanatkumara, Raikva)',
    teacherId: 'uddalaka',
    student: 'His son Shvetaketu (and Narada, Satyakama…)',
    studentId: 'shvetaketu',
    setting: 'Shvetaketu comes home proud after twelve years of study. His father asks whether he learned that by which the unheard becomes heard. Salt dissolved in water, the seed of a banyan: nine times he ends “you are That.”',
    teaching: 'The one Being (sat) became many. Also: Sanatkumara teaches Narada (ch. 7), and the boy Satyakama is accepted as a student for telling the truth about his birth.',
    famous: { iast: 'tat tvam asi śvetaketo', meaning: 'You are That, Shvetaketu.', ref: 'Chandogya 6.8.7' },
    sources: [src.chandogyaMadhva],
  },
  {
    id: 'brihadaranyaka',
    name: 'Brihadaranyaka',
    sanskrit: 'बृहदारण्यक',
    veda: 'Shukla Yajur',
    size: '6 chapters, the largest',
    teacher: 'Yajnavalkya',
    teacherId: 'yajnavalkya',
    student: 'His wife Maitreyi; King Janaka; the sages at Janaka’s court, including Gargi',
    studentId: 'maitreyi',
    setting: 'Before leaving home, Yajnavalkya offers to divide his wealth. Maitreyi asks: “Will it make me immortal?” At Janaka’s court he wins a debate against all comers, Gargi among them.',
    teaching: 'The Self is known only as “not this, not this” (neti neti). It is the seer of seeing, the knower of knowing. Also: the 33 devas, and the prayer from the unreal to the real.',
    famous: { iast: 'asato mā sad gamaya', meaning: 'Lead me from the unreal to the real, from darkness to light, from death to immortality.', ref: 'Brihadaranyaka 1.3.28' },
    sources: [src.brihadaranyaka, src.brihadThirtyThree],
  },
  {
    id: 'shvetashvatara',
    name: 'Shvetashvatara',
    sanskrit: 'श्वेताश्वतर',
    veda: 'Krishna Yajur',
    size: '6 chapters, 113 verses',
    teacher: 'The sage Shvetashvatara',
    student: 'Ascetics in the highest stage',
    setting: 'Seekers ask: is the cause of the world time, nature, chance, or something else?',
    teaching: 'The one Lord (Ishvara), Rudra-Shiva, rules nature (prakriti) and souls. The first text to join Samkhya, Yoga and devotion to a personal Ishvara; the word “bhakti” appears in its last verse.',
    famous: { iast: 'eko devaḥ sarvabhūteṣu gūḍhaḥ', meaning: 'The one Deva hidden in all beings.', ref: 'Shvetashvatara 6.11' },
    sources: [defn('shvetashvatara', 'Shvetashvatara')],
  },
];

export const upanishadNote =
  'Shankara commented on the first ten, so they are called the principal (mukhya) Upanishads; the Shvetashvatara is usually added. The Muktika Upanishad lists 108, taught by Rama to Hanuman.';

/* ——————————————————————— Vedangas & Upavedas ——————————————————————— */

export const bodyVerse = {
  deva: 'छन्दः पादौ तु वेदस्य हस्तौ कल्पोऽथ पठ्यते ।\nज्योतिषामयनं चक्षुर्निरुक्तं श्रोत्रमुच्यते ॥\nशिक्षा घ्राणं तु वेदस्य मुखं व्याकरणं स्मृतम् ।',
  iast: 'chandaḥ pādau tu vedasya hastau kalpo ’tha paṭhyate |\njyotiṣām ayanaṃ cakṣur niruktaṃ śrotram ucyate ||\nśikṣā ghrāṇaṃ tu vedasya mukhaṃ vyākaraṇaṃ smṛtam |',
  meaning: 'Metre is the feet of the Veda, ritual its hands, astronomy its eyes, etymology its ears, phonetics its nose, and grammar its mouth.',
  ref: 'Paniniya Shiksha 41–42',
};

export const vedangas: { id: string; name: string; sanskrit: string; part: string; what: string; texts: string; link?: string }[] = [
  { id: 'shiksha', name: 'Shiksha', sanskrit: 'शिक्षा', part: 'Nose', what: 'Phonetics: exact pronunciation, pitch accent, length and recitation', texts: 'Paniniya Shiksha; the Pratishakhyas of each Veda' },
  { id: 'kalpa', name: 'Kalpa', sanskrit: 'कल्प', part: 'Hands', what: 'Ritual: how to perform public and household rites, and rules of conduct', texts: 'Shrauta, Grihya, Dharma and Shulba sutras (the Shulba sutras hold early geometry)' },
  { id: 'vyakarana', name: 'Vyakarana', sanskrit: 'व्याकरण', part: 'Mouth', what: 'Grammar: the exact form of words', texts: 'Panini’s Ashtadhyayi (about 4,000 sutras); Katyayana’s Varttikas; Patanjali’s Mahabhashya' },
  { id: 'nirukta', name: 'Nirukta', sanskrit: 'निरुक्त', part: 'Ears', what: 'Etymology: the meaning of rare Vedic words', texts: 'Yaska’s Nirukta, on the word-list called Nighantu' },
  { id: 'chandas', name: 'Chandas', sanskrit: 'छन्दस्', part: 'Feet', what: 'Metre: the rhythm and syllable-count of verses', texts: 'Pingala’s Chandah-sutra', link: '#/chandas' },
  { id: 'jyotisha', name: 'Jyotisha', sanskrit: 'ज्योतिष', part: 'Eyes', what: 'Astronomy and calendar: the right time for rites', texts: 'Vedanga Jyotisha of Lagadha', link: '#/calendar' },
];

export const upavedas: { name: string; sanskrit: string; veda: string; what: string; texts: string }[] = [
  { name: 'Ayurveda', sanskrit: 'आयुर्वेद', veda: 'Rig (or Atharva)', what: 'The science of life: medicine and health', texts: 'Charaka Samhita, Sushruta Samhita' },
  { name: 'Dhanurveda', sanskrit: 'धनुर्वेद', veda: 'Yajur', what: 'Archery and the art of war', texts: 'Chapters in the Agni Purana; Vasishtha’s Dhanurveda' },
  { name: 'Gandharvaveda', sanskrit: 'गन्धर्ववेद', veda: 'Sama', what: 'Music, dance and drama', texts: 'Bharata’s Natya Shastra; Sangita Ratnakara' },
  { name: 'Arthashastra / Sthapatya', sanskrit: 'अर्थशास्त्र', veda: 'Atharva', what: 'Statecraft, economics, or architecture: lists differ', texts: 'Kautilya’s Arthashastra; Mayamata, Manasara' },
];

/* ——————————————————————— The canon ——————————————————————— */

export const canon: { tier: string; sanskrit: string; meaning: string; authority: string; items: { name: string; to?: string }[] }[] = [
  {
    tier: 'Shruti',
    sanskrit: 'श्रुति',
    meaning: '“What was heard”: revealed to the rishis, authorless (apaurusheya)',
    authority: 'Highest authority. Where smriti conflicts with it, shruti prevails.',
    items: [{ name: 'Rig Veda' }, { name: 'Yajur Veda' }, { name: 'Sama Veda' }, { name: 'Atharva Veda' }, { name: 'each with Samhita, Brahmana, Aranyaka, Upanishad' }],
  },
  {
    tier: 'Smriti',
    sanskrit: 'स्मृति',
    meaning: '“What is remembered”: composed by sages, based on the Veda',
    authority: 'Authoritative where it agrees with shruti.',
    items: [
      { name: 'Itihasa: Ramayana, Mahabharata (with the Gita)', to: '#/scriptures' },
      { name: '18 Mahapuranas and the Upapuranas', to: '#/scriptures' },
      { name: 'Dharmashastras: Manu, Yajnavalkya, Parashara…' },
      { name: 'Vedangas and Upavedas' },
      { name: 'Sutras of the six darshanas', to: '#/darshanas' },
    ],
  },
  {
    tier: 'Agama & Tantra',
    sanskrit: 'आगम',
    meaning: '“What has come down”: revealed by Shiva, Vishnu or the Devi',
    authority: 'Held equal to the Veda by their own traditions; rule temple worship.',
    items: [{ name: '28 Shaiva Agamas' }, { name: 'Pancharatra & Vaikhanasa (Vaishnava)' }, { name: 'Shakta Tantras' }],
  },
];

export const dharmashastras: { name: string; sanskrit: string; when: string; size: string; about: string; commentaries: string; sources: Source[] }[] = [
  {
    name: 'Dharmasutras',
    sanskrit: 'धर्मसूत्र',
    when: 'The oldest law texts, in terse prose',
    size: 'Apastamba, Gautama, Baudhayana, Vasishtha',
    about: 'Part of the Kalpa sutras of particular Vedic schools: duties of each stage of life, purity, kingship, penance.',
    commentaries: 'Haradatta on Apastamba and Gautama',
    sources: [defn('dharmasutra', 'Dharmasutra')],
  },
  {
    name: 'Manusmriti',
    sanskrit: 'मनुस्मृति',
    when: 'Attributed to Svayambhuva Manu, told by Bhrigu',
    size: '12 chapters, about 2,690 verses',
    about: 'Begins with creation and covers the stages of life, the householder’s duties, kingship, law, mixed classes, penance and karma. The most cited smriti.',
    commentaries: 'Medhatithi (9th c.), Kulluka Bhatta',
    sources: [src.manusmriti],
  },
  {
    name: 'Yajnavalkya Smriti',
    sanskrit: 'याज्ञवल्क्यस्मृति',
    when: 'Attributed to Yajnavalkya',
    size: '3 books, about 1,010 verses',
    about: 'Conduct (achara), law and procedure (vyavahara), and penance (prayashchitta). Better organised than Manu.',
    commentaries: 'Vijnaneshvara’s Mitakshara (11th c.) became the basis of Hindu family law in most of India; Bengal followed Jimutavahana’s Dayabhaga',
    sources: [defn('yajnavalkyasmriti', 'Yajnavalkya Smriti')],
  },
  {
    name: 'Parashara Smriti',
    sanskrit: 'पराशरस्मृति',
    when: 'Attributed to Parashara, Vyasa’s father',
    size: '12 chapters',
    about: 'Declares itself the smriti for the Kali age: “in Kali, Parashara’s rules.” Gentler penances suited to the age.',
    commentaries: 'Madhava (Vidyaranya)’s Parashara-Madhaviya',
    sources: [defn('parasharasmriti', 'Parashara Smriti')],
  },
  {
    name: 'Narada Smriti',
    sanskrit: 'नारदस्मृति',
    when: 'Attributed to Narada',
    size: 'About 1,000 verses',
    about: 'A purely legal text: courts, evidence, contracts, debts and the 18 titles of law.',
    commentaries: 'Asahaya',
    sources: [defn('naradasmriti', 'Narada Smriti')],
  },
];

/* ——————————————————————— Bhagavad Gita ——————————————————————— */

export const gitaChapters: { n: number; name: string; sanskrit: string; verses: number; theme: string; key: { ref: string; iast: string; meaning: string } }[] = [
  { n: 1, name: 'Arjuna Vishada Yoga', sanskrit: 'अर्जुनविषादयोग', verses: 47, theme: 'Arjuna’s despair: seeing his kin in both armies, he drops his bow.', key: { ref: '1.47', iast: 'visṛjya saśaraṃ cāpaṃ śoka-saṃvigna-mānasaḥ', meaning: 'Casting aside bow and arrows, his mind overwhelmed by grief.' } },
  { n: 2, name: 'Sankhya Yoga', sanskrit: 'साङ्ख्ययोग', verses: 72, theme: 'The Self is eternal; act without attachment to results; the person of steady wisdom.', key: { ref: '2.47', iast: 'karmaṇy evādhikāras te mā phaleṣu kadācana', meaning: 'Your right is to the action alone, never to its fruits.' } },
  { n: 3, name: 'Karma Yoga', sanskrit: 'कर्मयोग', verses: 43, theme: 'No one can avoid action; act as an offering (yajna) for the good of the world.', key: { ref: '3.35', iast: 'śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt', meaning: 'Better one’s own duty done imperfectly than another’s done well.' } },
  { n: 4, name: 'Jnana Karma Sannyasa Yoga', sanskrit: 'ज्ञानकर्मसंन्यासयोग', verses: 42, theme: 'The ancient lineage of this yoga; why the Lord descends; action burnt in the fire of knowledge.', key: { ref: '4.7', iast: 'yadā yadā hi dharmasya glānir bhavati bhārata', meaning: 'Whenever dharma declines, I manifest myself.' } },
  { n: 5, name: 'Karma Sannyasa Yoga', sanskrit: 'कर्मसंन्यासयोग', verses: 29, theme: 'Renouncing action versus acting without attachment: both lead to the goal.', key: { ref: '5.18', iast: 'vidyā-vinaya-sampanne brāhmaṇe gavi hastini', meaning: 'The wise see the same in a learned sage, a cow, an elephant and a dog.' } },
  { n: 6, name: 'Dhyana Yoga', sanskrit: 'ध्यानयोग', verses: 47, theme: 'Meditation: the seat, the posture, the steady mind; no effort is ever lost.', key: { ref: '6.5', iast: 'uddhared ātmanātmānaṃ nātmānam avasādayet', meaning: 'Lift yourself by yourself; do not let yourself sink.' } },
  { n: 7, name: 'Jnana Vijnana Yoga', sanskrit: 'ज्ञानविज्ञानयोग', verses: 30, theme: 'Krishna’s lower and higher nature; all is strung on him like pearls on a thread.', key: { ref: '7.19', iast: 'vāsudevaḥ sarvam iti sa mahātmā sudurlabhaḥ', meaning: '“Vasudeva is all”: such a great soul is very rare.' } },
  { n: 8, name: 'Akshara Brahma Yoga', sanskrit: 'अक्षरब्रह्मयोग', verses: 28, theme: 'The Imperishable; what one remembers at death; the day and night of Brahma.', key: { ref: '8.5', iast: 'anta-kāle ca mām eva smaran muktvā kalevaram', meaning: 'Whoever leaves the body remembering me at the end comes to me.' } },
  { n: 9, name: 'Raja Vidya Raja Guhya Yoga', sanskrit: 'राजविद्याराजगुह्ययोग', verses: 34, theme: 'The royal secret: all beings rest in him; he accepts the simplest offering given with love.', key: { ref: '9.26', iast: 'patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati', meaning: 'A leaf, a flower, a fruit, water — offered with love, I accept.' } },
  { n: 10, name: 'Vibhuti Yoga', sanskrit: 'विभूतियोग', verses: 42, theme: 'His glories: among mountains the Himalaya, among Vedas the Sama, among rivers the Ganga.', key: { ref: '10.20', iast: 'aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ', meaning: 'I am the Self seated in the heart of all beings.' } },
  { n: 11, name: 'Vishvarupa Darshana Yoga', sanskrit: 'विश्वरूपदर्शनयोग', verses: 55, theme: 'Arjuna sees the cosmic form: all worlds, all time, devouring and creating.', key: { ref: '11.32', iast: 'kālo ’smi loka-kṣaya-kṛt pravṛddhaḥ', meaning: 'I am Time, the mighty destroyer of worlds.' } },
  { n: 12, name: 'Bhakti Yoga', sanskrit: 'भक्तियोग', verses: 20, theme: 'Devotion: the qualities of the devotee dear to Bhagavan.', key: { ref: '12.13', iast: 'adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca', meaning: 'Without hatred for any being, friendly and compassionate.' } },
  { n: 13, name: 'Kshetra Kshetrajna Vibhaga Yoga', sanskrit: 'क्षेत्रक्षेत्रज्ञविभागयोग', verses: 34, theme: 'The field (body and nature) and the knower of the field (the Self).', key: { ref: '13.2', iast: 'kṣetra-jñaṃ cāpi māṃ viddhi sarva-kṣetreṣu bhārata', meaning: 'Know me as the knower in all fields.' } },
  { n: 14, name: 'Gunatraya Vibhaga Yoga', sanskrit: 'गुणत्रयविभागयोग', verses: 27, theme: 'The three gunas — sattva, rajas, tamas — and going beyond them.', key: { ref: '14.5', iast: 'sattvaṃ rajas tama iti guṇāḥ prakṛti-sambhavāḥ', meaning: 'Sattva, rajas and tamas, the strands born of nature, bind the soul.' } },
  { n: 15, name: 'Purushottama Yoga', sanskrit: 'पुरुषोत्तमयोग', verses: 20, theme: 'The upside-down ashvattha tree of samsara; the Supreme Person beyond the perishable and imperishable.', key: { ref: '15.15', iast: 'sarvasya cāhaṃ hṛdi sanniviṣṭaḥ', meaning: 'I am seated in the heart of all.' } },
  { n: 16, name: 'Daivasura Sampad Vibhaga Yoga', sanskrit: 'दैवासुरसम्पद्विभागयोग', verses: 24, theme: 'Divine and demonic natures.', key: { ref: '16.21', iast: 'tri-vidhaṃ narakasyedaṃ dvāraṃ nāśanam ātmanaḥ', meaning: 'Three gates to hell destroy the self: lust, anger and greed.' } },
  { n: 17, name: 'Shraddhatraya Vibhaga Yoga', sanskrit: 'श्रद्धात्रयविभागयोग', verses: 28, theme: 'Three kinds of faith, food, sacrifice, austerity and giving; “Om tat sat”.', key: { ref: '17.20', iast: 'dātavyam iti yad dānaṃ dīyate ’nupakāriṇe', meaning: 'A gift given because it ought to be given, expecting nothing back, is sattvic.' } },
  { n: 18, name: 'Moksha Sannyasa Yoga', sanskrit: 'मोक्षसंन्यासयोग', verses: 78, theme: 'Summary of the whole: true renunciation, one’s own duty, and final surrender. Arjuna rises to fight.', key: { ref: '18.66', iast: 'sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja', meaning: 'Leaving all dharmas, take refuge in me alone.' } },
];

/** Traditional count of verses by speaker: 574 + 84 + 41 + 1 = 700. */
export const gitaSpeakers: { who: string; id: string; verses: number }[] = [
  { who: 'Krishna', id: 'krishna', verses: 574 },
  { who: 'Arjuna', id: 'arjuna', verses: 84 },
  { who: 'Sanjaya', id: 'sanjaya', verses: 41 },
  { who: 'Dhritarashtra', id: 'dhritarashtra', verses: 1 },
];

export const vedaSources: Source[] = [
  src.rigVeda,
  src.vpVedaDivision,
  src.brihadaranyaka,
  src.kathaShankara,
  src.chandogyaMadhva,
  src.ishaMadhva,
  src.gitaVaishnava,
  src.gitaTelang,
  src.gitaMbh,
  src.manusmriti,
  src.vedangaIntro,
  src.vedangaStudy,
  src.conceptSixVedangas,
  defn('vedanga', 'Vedanga'),
  defn('upaveda', 'Upaveda'),
  defn('shruti', 'Shruti'),
  defn('smriti', 'Smriti'),
  defn('agama', 'Agama'),
  defn('upanishad', 'Upanishad'),
];
