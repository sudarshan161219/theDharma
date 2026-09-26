import type { Fact, Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— Pramanas ——————————————————————— */

export type PramanaId = 'pratyaksha' | 'anumana' | 'upamana' | 'shabda' | 'arthapatti' | 'anupalabdhi';

/** The six means of valid knowledge, in the order schools add them. */
export const pramanas: { id: PramanaId; name: string; sanskrit: string; meaning: string; example: string }[] = [
  { id: 'pratyaksha', name: 'Pratyaksha', sanskrit: 'प्रत्यक्ष', meaning: 'Perception', example: 'I see the pot in front of me.' },
  { id: 'anumana', name: 'Anumana', sanskrit: 'अनुमान', meaning: 'Inference', example: 'There is smoke on the hill, so there is fire.' },
  { id: 'upamana', name: 'Upamana', sanskrit: 'उपमान', meaning: 'Comparison', example: 'Told “a gavaya is like a cow”, I recognise one in the forest.' },
  { id: 'shabda', name: 'Shabda', sanskrit: 'शब्द', meaning: 'Testimony (of the Veda or a reliable person)', example: 'The Veda says heaven is gained by sacrifice.' },
  { id: 'arthapatti', name: 'Arthapatti', sanskrit: 'अर्थापत्ति', meaning: 'Postulation', example: 'Fat Devadatta never eats by day, so he must eat at night.' },
  { id: 'anupalabdhi', name: 'Anupalabdhi', sanskrit: 'अनुपलब्धि', meaning: 'Non-perception', example: 'I do not see a pot on the floor, so I know it is absent.' },
];

/** Which pramanas each school accepts. Rows ordered from fewest to most. */
export const pramanaMatrix: { school: string; accepts: PramanaId[]; note?: string; astika: boolean }[] = [
  { school: 'Charvaka', accepts: ['pratyaksha'], astika: false, note: 'Only what the senses show is real.' },
  { school: 'Vaisheshika', accepts: ['pratyaksha', 'anumana'], astika: true, note: 'Testimony is a kind of inference.' },
  { school: 'Bauddha', accepts: ['pratyaksha', 'anumana'], astika: false, note: 'Dignaga and Dharmakirti.' },
  { school: 'Jaina', accepts: ['pratyaksha', 'anumana', 'shabda'], astika: false, note: 'Classed as direct and indirect knowledge.' },
  { school: 'Samkhya', accepts: ['pratyaksha', 'anumana', 'shabda'], astika: true },
  { school: 'Yoga', accepts: ['pratyaksha', 'anumana', 'shabda'], astika: true },
  { school: 'Vishishtadvaita / Dvaita', accepts: ['pratyaksha', 'anumana', 'shabda'], astika: true, note: 'Others are folded into these three.' },
  { school: 'Nyaya', accepts: ['pratyaksha', 'anumana', 'upamana', 'shabda'], astika: true },
  { school: 'Prabhakara Mimamsa', accepts: ['pratyaksha', 'anumana', 'upamana', 'shabda', 'arthapatti'], astika: true },
  { school: 'Bhatta Mimamsa', accepts: ['pratyaksha', 'anumana', 'upamana', 'shabda', 'arthapatti', 'anupalabdhi'], astika: true },
  { school: 'Advaita Vedanta', accepts: ['pratyaksha', 'anumana', 'upamana', 'shabda', 'arthapatti', 'anupalabdhi'], astika: true, note: 'Borrowed from Kumarila’s Bhatta school.' },
];

/* ——————————————————————— The six astika darshanas ——————————————————————— */

export interface Darshan {
  id: string;
  name: string;
  sanskrit: string;
  /** Paired school (the six come in three pairs). */
  pair: 'nyaya-vaisheshika' | 'samkhya-yoga' | 'mimamsa-vedanta';
  meaning: string;
  focus: string;
  founder: string;
  /** Person id in people.ts, if profiled. */
  founderId?: string;
  rootText: string;
  textSize: string;
  opening?: { sanskrit: string; iast: string; meaning: string; ref: string };
  inBrief: string;
  about: string;
  /** Headline categories of the system (padarthas, tattvas, limbs…). */
  categories: { title: string; items: string[] };
  ishvara: string;
  bondage: string;
  liberation: string;
  causation: string;
  commentators: Fact[];
  sources: Source[];
}

export const pairs: { id: Darshan['pair']; title: string; why: string }[] = [
  {
    id: 'nyaya-vaisheshika',
    title: 'Nyaya + Vaisheshika',
    why: 'Nyaya supplies the logic, Vaisheshika the catalogue of what exists. They merged into one school by the 10th century.',
  },
  {
    id: 'samkhya-yoga',
    title: 'Samkhya + Yoga',
    why: 'Samkhya gives the map of spirit and matter. Yoga gives the practice for separating them, and adds Ishvara.',
  },
  {
    id: 'mimamsa-vedanta',
    title: 'Purva Mimamsa + Uttara Mimamsa (Vedanta)',
    why: 'Both are “enquiry” into the Veda: the earlier (purva) part on ritual and action, the later (uttara) part, the Upanishads, on Brahman.',
  },
];

export const darshans: Darshan[] = [
  {
    id: 'nyaya',
    name: 'Nyaya',
    sanskrit: 'न्याय',
    pair: 'nyaya-vaisheshika',
    meaning: '“Method, rule”: the science of reasoning',
    focus: 'Logic and how we know',
    founder: 'Akshapada Gautama',
    rootText: 'Nyaya Sutra',
    textSize: '5 books, each in two parts (ahnikas); about 530 sutras',
    opening: {
      sanskrit: 'प्रमाणप्रमेयसंशयप्रयोजन… तत्त्वज्ञानान्निःश्रेयसाधिगमः',
      iast: 'pramāṇa-prameya-saṃśaya-prayojana… tattvajñānān niḥśreyasādhigamaḥ',
      meaning: 'From true knowledge of the sixteen categories — the means of knowing, the objects of knowing, doubt, purpose… — comes the highest good.',
      ref: 'Nyaya Sutra 1.1.1',
    },
    inBrief: 'Liberation comes from right knowledge, and right knowledge needs a sound method of reasoning.',
    about:
      'Nyaya is India’s classical school of logic and debate. It asks how we know anything at all, lists the valid means of knowledge, and gives the rules of a sound argument and the fallacies that ruin one. Every later school, even its opponents, argued in its terms. From the 14th century Gangesha’s “New Nyaya” (Navya-Nyaya) built a precise technical language used across Sanskrit learning.',
    categories: {
      title: 'The 16 categories (padarthas) of Nyaya Sutra 1.1.1',
      items: [
        'Pramana — means of knowledge',
        'Prameya — objects of knowledge',
        'Samshaya — doubt',
        'Prayojana — purpose',
        'Drishtanta — example',
        'Siddhanta — established tenet',
        'Avayava — members of an argument',
        'Tarka — hypothetical reasoning',
        'Nirnaya — ascertainment',
        'Vada — honest discussion',
        'Jalpa — wrangling to win',
        'Vitanda — destructive cavil',
        'Hetvabhasa — fallacious reasons',
        'Chala — quibble',
        'Jati — futile rejoinder',
        'Nigrahasthana — point of defeat',
      ],
    },
    ishvara: 'Ishvara is the efficient cause who shapes the world from eternal atoms. Udayana’s Nyaya-kusumanjali gives classic proofs of Ishvara.',
    bondage: 'False knowledge (mithya-jnana) breeds attachment and aversion, action, birth and pain.',
    liberation: 'Apavarga: the soul’s complete release from pain, gained through true knowledge of the categories.',
    causation: 'Asatkarya-vada: the effect is new; the pot did not exist in the clay before it was made.',
    commentators: [
      { label: 'Vatsyayana', value: 'Nyaya Bhashya, the first commentary (c. 5th century)' },
      { label: 'Uddyotakara', value: 'Nyaya Varttika, against the Buddhists' },
      { label: 'Vachaspati Mishra', value: 'Tatparya-tika (9th–10th century)' },
      { label: 'Udayana', value: 'Nyaya-kusumanjali, proofs of Ishvara (10th–11th century)' },
      { label: 'Gangesha', value: 'Tattva-chintamani: founds Navya-Nyaya (14th century)' },
    ],
    sources: [src.dgNyayaVaisheshika, src.dgNyayaSutras, src.dgNyayaPramanas, src.nyayaSutraPrameyas, defn('nyaya', 'Nyaya')],
  },
  {
    id: 'vaisheshika',
    name: 'Vaisheshika',
    sanskrit: 'वैशेषिक',
    pair: 'nyaya-vaisheshika',
    meaning: 'From vishesha, “particularity”: what makes each thing distinct',
    focus: 'What exists: categories and atoms',
    founder: 'Kanada (also called Uluka or Kashyapa)',
    rootText: 'Vaisheshika Sutra',
    textSize: '10 books; about 370 sutras',
    opening: {
      sanskrit: 'अथातो धर्मं व्याख्यास्यामः । यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः ॥',
      iast: 'athāto dharmaṃ vyākhyāsyāmaḥ | yato ’bhyudaya-niḥśreyasa-siddhiḥ sa dharmaḥ ||',
      meaning: 'Now we shall explain dharma: that from which come prosperity and the highest good.',
      ref: 'Vaisheshika Sutra 1.1.1–2',
    },
    inBrief: 'Everything we meet can be sorted into a few categories, and matter is made of eternal, indivisible atoms.',
    about:
      'Vaisheshika is the physics and metaphysics of the orthodox schools. Kanada held that the world is built from eternal atoms (paramanu) of earth, water, fire and air. Two atoms form a dyad, three dyads a triad, the smallest visible speck. Nine substances carry qualities and motions, and a special relation, inherence (samavaya), binds them. Prashastapada’s Padartha-dharma-sangraha made it a system; later it fused with Nyaya.',
    categories: {
      title: 'The 7 categories (padarthas)',
      items: [
        'Dravya — substance (9: earth, water, fire, air, ether, time, space, self, mind)',
        'Guna — quality (24, such as colour, taste, number, pleasure)',
        'Karma — motion (5: up, down, contraction, expansion, going)',
        'Samanya — universal (“cow-ness” shared by all cows)',
        'Vishesha — particularity (what makes each atom unique)',
        'Samavaya — inherence (how a quality is in its substance)',
        'Abhava — absence (added by later writers)',
      ],
    },
    ishvara: 'Silent in the sutras; later authors (Prashastapada onward) accept Ishvara as the one who sets atoms in motion.',
    bondage: 'Action driven by desire, which binds the soul to bodies.',
    liberation: 'Knowledge of the categories, ending action and the soul’s qualities; a state beyond pain.',
    causation: 'Asatkarya-vada, as in Nyaya: atoms combine into genuinely new wholes.',
    commentators: [
      { label: 'Prashastapada', value: 'Padartha-dharma-sangraha (c. 6th century)' },
      { label: 'Shridhara', value: 'Nyaya-kandali (10th century)' },
      { label: 'Udayana', value: 'Kiranavali' },
      { label: 'Shankara Mishra', value: 'Upaskara on the sutras (15th century)' },
    ],
    sources: [src.vaisheshikaSutra, src.dgNyayaVaisheshika, src.dgCausation, defn('vaisheshika', 'Vaisheshika'), defn('paramanu', 'Paramanu')],
  },
  {
    id: 'samkhya',
    name: 'Samkhya',
    sanskrit: 'सांख्य',
    pair: 'samkhya-yoga',
    meaning: '“Enumeration”: counting the principles of reality',
    focus: 'Spirit and matter: the 25 tattvas',
    founder: 'Kapila (then Asuri and Panchashikha)',
    founderId: 'kapila',
    rootText: 'Samkhya Karika of Ishvarakrishna',
    textSize: '72 verses (c. 4th–5th century CE); the older Shashti-tantra is lost',
    opening: {
      sanskrit: 'दुःखत्रयाभिघाताज्जिज्ञासा तदभिघातके हेतौ ।',
      iast: 'duḥkha-trayābhighātāj jijñāsā tad-abhighātake hetau |',
      meaning: 'Because we are struck by three kinds of suffering, we enquire into the means of ending them.',
      ref: 'Samkhya Karika 1',
    },
    inBrief: 'There are two realities: countless conscious selves (purusha) and one unconscious nature (prakriti). Suffering comes from confusing them.',
    about:
      'Samkhya is probably the oldest system; its ideas run through the Upanishads, the Mahabharata, the Gita and the Puranas. Prakriti is made of three strands (gunas): sattva (clarity), rajas (activity) and tamas (inertia). When purusha’s presence disturbs their balance, prakriti unfolds step by step into mind, senses and elements. The classic image: prakriti is a blind man who can walk, purusha a lame man who can see; together they move. The Bhagavata tells of an older, theistic Samkhya taught by Kapila, Vishnu’s avatara, to his mother Devahuti.',
    categories: {
      title: 'The 25 tattvas (principles)',
      items: [
        'Purusha — pure consciousness, the witness',
        'Prakriti — unmanifest nature, the three gunas in balance',
        'Mahat / Buddhi — the great principle, intellect',
        'Ahamkara — the I-maker, ego',
        'Manas — mind',
        '5 jnanendriyas — hearing, touch, sight, taste, smell',
        '5 karmendriyas — speech, hands, feet, excretion, generation',
        '5 tanmatras — subtle sound, touch, form, taste, smell',
        '5 mahabhutas — ether, air, fire, water, earth',
      ],
    },
    ishvara: 'Classical Samkhya needs no creator (nirishvara): prakriti evolves by itself. Epic and Puranic Samkhya is theistic.',
    bondage: 'Non-discrimination (aviveka): purusha seems to own the pains and pleasures of the mind.',
    liberation: 'Kaivalya, “aloneness”: discriminating knowledge (viveka) that purusha is not prakriti. Like a dancer who stops when seen, prakriti withdraws.',
    causation: 'Sat-karya-vada: the effect already exists in its cause. Oil is in the sesame seed, not in sand.',
    commentators: [
      { label: 'Gaudapada', value: 'Bhashya on the Karika' },
      { label: 'Vachaspati Mishra', value: 'Samkhya-tattva-kaumudi (9th–10th century)' },
      { label: 'Yuktidipika', value: 'The longest old commentary (c. 7th–8th century)' },
      { label: 'Vijnanabhikshu', value: 'On the Samkhya Sutra; reconciles it with Vedanta (16th century)' },
    ],
    sources: [src.dgSamkhyaTexts, src.dgEarlySamkhya, src.dgPurusha, src.samkhyaKarikaIntro, src.kapilaBhagavata, src.samkhyaGita, defn('samkhya', 'Samkhya')],
  },
  {
    id: 'yoga',
    name: 'Yoga',
    sanskrit: 'योग',
    pair: 'samkhya-yoga',
    meaning: '“Yoking, union”: disciplined practice',
    focus: 'Stilling the mind: the eight limbs',
    founder: 'Patanjali (tradition traces Yoga to Hiranyagarbha)',
    rootText: 'Yoga Sutra',
    textSize: '4 padas (Samadhi, Sadhana, Vibhuti, Kaivalya); 195–196 sutras',
    opening: {
      sanskrit: 'योगश्चित्तवृत्तिनिरोधः ॥',
      iast: 'yogaś citta-vṛtti-nirodhaḥ ||',
      meaning: 'Yoga is the stilling of the fluctuations of the mind.',
      ref: 'Yoga Sutra 1.2',
    },
    inBrief: 'Samkhya in practice: when the mind is completely still, the seer rests in its own nature.',
    about:
      'Patanjali gathered existing practices of meditation and discipline and set them on Samkhya’s metaphysics. The mind (citta) has five kinds of fluctuation: right knowledge, error, imagination, sleep and memory. They are calmed by practice (abhyasa) and detachment (vairagya). Yoga adds a 26th principle, Ishvara: a special purusha untouched by affliction, whose word is Om. Devotion to him (ishvara-pranidhana) is a direct path to samadhi.',
    categories: {
      title: 'The eight limbs (ashtanga), Yoga Sutra 2.29',
      items: [
        'Yama — restraints: non-violence, truth, non-stealing, continence, non-grasping',
        'Niyama — observances: purity, contentment, austerity, self-study, devotion to Ishvara',
        'Asana — a steady, comfortable posture',
        'Pranayama — regulation of breath',
        'Pratyahara — withdrawing the senses',
        'Dharana — concentration on one point',
        'Dhyana — unbroken flow of attention: meditation',
        'Samadhi — absorption, where only the object shines',
      ],
    },
    ishvara: 'Ishvara is a special purusha, the first teacher, untouched by karma and affliction (Yoga Sutra 1.24–26).',
    bondage: 'The five kleshas: ignorance, ego-sense, attachment, aversion and clinging to life.',
    liberation: 'Kaivalya: the seer abides in itself once the mind’s fluctuations are fully stilled.',
    causation: 'Sat-karya-vada, as in Samkhya.',
    commentators: [
      { label: 'Vyasa', value: 'Yoga Bhashya, the root commentary' },
      { label: 'Vachaspati Mishra', value: 'Tattva-vaisharadi' },
      { label: 'Bhoja', value: 'Raja-martanda (11th century)' },
      { label: 'Vijnanabhikshu', value: 'Yoga-varttika (16th century)' },
    ],
    sources: [src.yogaSutras, src.yogaSutrasStudy, src.dgYoga, src.dgPurusha, defn('ashtanga-yoga', 'Ashtanga yoga')],
  },
  {
    id: 'mimamsa',
    name: 'Purva Mimamsa',
    sanskrit: 'पूर्वमीमांसा',
    pair: 'mimamsa-vedanta',
    meaning: '“Prior enquiry”: into the ritual portion of the Veda',
    focus: 'Dharma as Vedic duty; how to read the Veda',
    founder: 'Jaimini, a disciple of Vyasa',
    founderId: 'jaimini',
    rootText: 'Mimamsa Sutra',
    textSize: '12 books; about 2,700 sutras, the longest of the six',
    opening: {
      sanskrit: 'अथातो धर्मजिज्ञासा ॥ चोदनालक्षणोऽर्थो धर्मः ॥',
      iast: 'athāto dharma-jijñāsā || codanā-lakṣaṇo ’rtho dharmaḥ ||',
      meaning: 'Now, therefore, the enquiry into dharma. Dharma is that good which is known by Vedic injunction.',
      ref: 'Mimamsa Sutra 1.1.1–2',
    },
    inBrief: 'The Veda is eternal and authorless, and dharma is what it commands. Do your duty and its unseen fruit will follow.',
    about:
      'Mimamsa is the science of interpreting the Veda: how to tell a command from a description, how rites fit together, how to resolve apparent contradictions. Its rules of interpretation became the foundation of Hindu law (dharmashastra) and were used by every Vedanta school. It holds that the Veda is apaurusheya (authorless and eternal), and that all knowledge is valid by itself until proven false (svatah-pramanya). A rite produces an unseen potency, apurva, that later bears fruit.',
    categories: {
      title: 'Key ideas',
      items: [
        'Vidhi — injunction, the heart of the Veda',
        'Arthavada — praise or explanation that supports an injunction',
        'Mantra — formula recited in the rite',
        'Apurva — the unseen potency a rite creates',
        'Apaurusheya — the Veda has no author, human or divine',
        'Svatah-pramanya — knowledge is valid by itself',
        'Two schools: Kumarila Bhatta (6 pramanas) and Prabhakara (5)',
      ],
    },
    ishvara: 'Early Mimamsa has no need of a creator: the Veda is eternal and rites work by apurva. Devas are named in mantras. Later Mimamsakas soften this.',
    bondage: 'Neglect of duty and actions done with desire.',
    liberation: 'Originally heaven (svarga) through rites; later Mimamsakas accept moksha as ending bondage by doing only nitya duties.',
    causation: 'Accepts real causation and a real, eternal world.',
    commentators: [
      { label: 'Shabara', value: 'Shabara Bhashya, the classic commentary' },
      { label: 'Kumarila Bhatta', value: 'Shloka-varttika, Tantra-varttika (7th century)' },
      { label: 'Prabhakara', value: 'Brihati (7th century)' },
      { label: 'Mandana Mishra', value: 'Vidhi-viveka; by tradition debated Shankara' },
      { label: 'Parthasarathi Mishra', value: 'Shastra-dipika' },
    ],
    sources: [src.dgMimamsa, src.dgMimamsaLit, src.dgSvatahPramanya, src.dgAnupalabdhi, src.dgMimamsaGod, defn('mimamsa', 'Mimamsa'), defn('apurva', 'Apurva')],
  },
  {
    id: 'vedanta',
    name: 'Uttara Mimamsa (Vedanta)',
    sanskrit: 'वेदान्त',
    pair: 'mimamsa-vedanta',
    meaning: '“The end of the Veda”: the Upanishads and their meaning',
    focus: 'Brahman, the self and liberation',
    founder: 'Badarayana, identified by tradition with Vyasa',
    founderId: 'vyasa',
    rootText: 'Brahma Sutra (Vedanta Sutra)',
    textSize: '4 books, 16 parts; about 555 sutras',
    opening: {
      sanskrit: 'अथातो ब्रह्मजिज्ञासा ॥ जन्माद्यस्य यतः ॥',
      iast: 'athāto brahma-jijñāsā || janmādy asya yataḥ ||',
      meaning: 'Now, therefore, the enquiry into Brahman: that from which this world is born, sustained and dissolved.',
      ref: 'Brahma Sutra 1.1.1–2',
    },
    inBrief: 'Brahman, known from the Upanishads, is the source of all. How the soul relates to Brahman divides Vedanta into its schools.',
    about:
      'The Brahma Sutras string the teachings of the Upanishads into a system, so terse that they cannot be read without a commentary. Every great acharya proved himself by commenting on the three foundations (prasthana-traya): the Upanishads, the Brahma Sutras and the Bhagavad Gita. Their readings differ at one point above all: is the soul identical to Brahman, different from it, or both? That answer founds the living sampradayas below.',
    categories: {
      title: 'The four books of the Brahma Sutra',
      items: [
        'Samanvaya — all Upanishads point to Brahman',
        'Avirodha — no contradiction with reason or other schools',
        'Sadhana — the means: renunciation, meditation, knowledge',
        'Phala — the fruit: liberation',
        'Prasthana-traya — Upanishads, Brahma Sutras, Gita',
      ],
    },
    ishvara: 'Brahman is the material and efficient cause of the world. Most schools identify it with Vishnu/Narayana or Krishna; Shaiva Vedanta with Shiva; Advaita calls the personal Lord, Ishvara, Brahman as seen through maya.',
    bondage: 'Ignorance (avidya) of one’s true nature and relation to Brahman.',
    liberation: 'Knowledge and/or devotion, by the school: realising identity (Advaita) or eternal loving service (Vaishnava schools).',
    causation: 'Sat-karya-vada in two forms: real transformation (parinama) in theistic schools, apparent transformation (vivarta) in Advaita.',
    commentators: [
      { label: 'Gaudapada', value: 'Mandukya Karika, earliest Advaita' },
      { label: 'Shankara', value: 'Advaita (8th century)' },
      { label: 'Ramanuja', value: 'Vishishtadvaita (11th–12th century)' },
      { label: 'Madhva', value: 'Dvaita (13th century)' },
      { label: 'Nimbarka, Vallabha, Baladeva', value: 'Dvaitadvaita, Shuddhadvaita, Achintya-bhedabheda' },
    ],
    sources: [src.dgVedantaLit, src.dgGaudapada, src.dgShankara, src.brahmaSutraShankara, src.brahmaSutraRamanuja, defn('vedanta', 'Vedanta')],
  },
];

/* ——————————————————————— Nastika schools ——————————————————————— */

export const nastikas: { id: string; name: string; sanskrit: string; founder: string; texts: string; teaching: string; key: string[]; sources: Source[] }[] = [
  {
    id: 'charvaka',
    name: 'Charvaka (Lokayata)',
    sanskrit: 'चार्वाक',
    founder: 'Attributed to Brihaspati',
    texts: 'The Barhaspatya Sutra is lost; known mostly from opponents, e.g. the first chapter of Madhava’s Sarva-darshana-sangraha',
    teaching: 'Materialism: only perception is valid. The world is four elements; consciousness arises from the body like intoxication from fermented grain, and ends with it.',
    key: ['No soul beyond the body', 'No rebirth, heaven or karma', 'Pleasure is the goal of life', 'Rejects the Veda'],
    sources: [src.dgCarvaka, defn('carvaka', 'Charvaka')],
  },
  {
    id: 'bauddha',
    name: 'Bauddha (Buddhism)',
    sanskrit: 'बौद्ध',
    founder: 'Gautama Buddha (c. 5th century BCE)',
    texts: 'The Tripitaka; later Nagarjuna, Asanga, Vasubandhu, Dignaga, Dharmakirti',
    teaching: 'Suffering, its cause (craving), its end (nirvana) and the eightfold path to it. No permanent self (anatman); everything arises in dependence.',
    key: ['Four noble truths', 'Anatman: no abiding self', 'Pratitya-samutpada: dependent origination', 'Hindu texts discuss four schools: Vaibhashika, Sautrantika, Yogachara, Madhyamaka'],
    sources: [src.dasgupta1, defn('bauddha', 'Bauddha')],
  },
  {
    id: 'jaina',
    name: 'Jaina (Jainism)',
    sanskrit: 'जैन',
    founder: 'Mahavira, the 24th Tirthankara (Rishabhadeva was the first)',
    texts: 'The Agamas; Umasvati’s Tattvartha Sutra, accepted by all Jains',
    teaching: 'Countless souls (jiva) are bound by karmic matter. Strict non-violence and discipline free the soul to its natural omniscience (kevala-jnana).',
    key: ['Anekanta-vada: reality has many sides', 'Syad-vada: seven-fold predication, “in some respect…”', 'Three jewels: right faith, knowledge, conduct', 'Ahimsa as the highest principle'],
    sources: [src.dasgupta1, defn('anekantavada', 'Anekantavada'), defn('syadvada', 'Syadvada')],
  },
  {
    id: 'ajivika',
    name: 'Ajivika',
    sanskrit: 'आजीविक',
    founder: 'Makkhali Gosala, a contemporary of Mahavira and the Buddha',
    texts: 'None survive; known from Buddhist and Jain accounts and Ashokan-era cave dedications',
    teaching: 'Strict fatalism (niyati): every soul passes through a fixed round of births and is freed when its time comes; effort changes nothing.',
    key: ['Niyati: destiny rules all', 'Extreme asceticism', 'Died out by about the 14th century'],
    sources: [src.dgBeforeBuddha, defn('ajivika', 'Ajivika')],
  },
];

/* ——————————————————————— Causation ——————————————————————— */

export const causation: { id: string; name: string; sanskrit: string; claim: string; image: string; schools: string }[] = [
  {
    id: 'asat',
    name: 'Asatkarya-vada',
    sanskrit: 'असत्कार्यवाद',
    claim: 'The effect did not exist before; it is a new creation.',
    image: 'Threads are arranged and a new thing, the cloth, begins.',
    schools: 'Nyaya, Vaisheshika',
  },
  {
    id: 'parinama',
    name: 'Satkarya-vada: parinama',
    sanskrit: 'परिणामवाद',
    claim: 'The effect already exists in the cause and is a real transformation of it.',
    image: 'Milk truly becomes curd.',
    schools: 'Samkhya, Yoga, Vishishtadvaita, Dvaita and most theistic Vedanta',
  },
  {
    id: 'vivarta',
    name: 'Satkarya-vada: vivarta',
    sanskrit: 'विवर्तवाद',
    claim: 'The effect is only an appearance of the cause, which does not change at all.',
    image: 'A rope in dim light appears as a snake.',
    schools: 'Advaita Vedanta',
  },
  {
    id: 'kshanika',
    name: 'Pratitya-samutpada',
    sanskrit: 'प्रतीत्यसमुत्पाद',
    claim: 'There are no lasting causes, only momentary events arising in dependence on one another.',
    image: 'A flame is a new flame each moment.',
    schools: 'Buddhism',
  },
];

/** Samkhya’s 25 tattvas as a tree, for the evolution diagram. */
export const samkhyaTree = {
  purusha: 'Purusha',
  prakriti: 'Prakriti',
  mahat: 'Mahat · Buddhi',
  ahamkara: 'Ahamkara',
  sattvic: { label: 'From sattva', items: ['Manas', 'Hearing', 'Touch', 'Sight', 'Taste', 'Smell', 'Speech', 'Hands', 'Feet', 'Excretion', 'Generation'] },
  tamasic: {
    label: 'From tamas',
    pairs: [
      ['Sound', 'Ether'],
      ['Touch', 'Air'],
      ['Form', 'Fire'],
      ['Taste', 'Water'],
      ['Smell', 'Earth'],
    ] as [string, string][],
  },
};

/** The five-membered Nyaya argument, with the classic example. */
export const syllogism: { name: string; sanskrit: string; role: string; example: string }[] = [
  { name: 'Pratijna', sanskrit: 'प्रतिज्ञा', role: 'Thesis', example: 'The hill has fire.' },
  { name: 'Hetu', sanskrit: 'हेतु', role: 'Reason', example: 'Because it has smoke.' },
  { name: 'Udaharana', sanskrit: 'उदाहरण', role: 'Example with rule', example: 'Wherever there is smoke there is fire, as in a kitchen.' },
  { name: 'Upanaya', sanskrit: 'उपनय', role: 'Application', example: 'This hill has smoke that goes with fire.' },
  { name: 'Nigamana', sanskrit: 'निगमन', role: 'Conclusion', example: 'Therefore the hill has fire.' },
];

/* ——————————————————————— Sampradayas ——————————————————————— */

export interface Sampradaya {
  id: string;
  name: string;
  sanskrit?: string;
  founder: string;
  /** Acharya id in acharyas.ts, to link. */
  acharyaId?: string;
  period: string;
  deity: string;
  darshana: string;
  /** Darshana id in acharyas.ts (Vedanta schools), to link. */
  darshanaId?: string;
  texts: string;
  centres: string;
  practice: string;
  about: string;
  /** Guru parampara, oldest first. */
  parampara?: string[];
  /** A page of its own, for a lineage treated in depth. */
  more?: { label: string; to: string };
  sources: Source[];
}

export interface Tradition {
  id: string;
  name: string;
  sanskrit: string;
  deity: string;
  tone: 'accent' | 'gold' | 'indigo';
  /** Characteristic forehead mark. */
  mark: 'urdhva' | 'tripundra' | 'bindu' | 'smarta' | 'none';
  markLabel: string;
  inBrief: string;
  scriptures: string;
  sampradayas: Sampradaya[];
  sources: Source[];
}

export const traditions: Tradition[] = [
  {
    id: 'vaishnava',
    name: 'Vaishnava',
    sanskrit: 'वैष्णव',
    deity: 'Vishnu, Narayana, and his avataras Rama and Krishna',
    tone: 'indigo',
    mark: 'urdhva',
    markLabel: 'Urdhva-pundra: upright lines of white clay, the feet of Vishnu, often with a red or yellow centre line for Lakshmi',
    inBrief: 'Devotion to Vishnu as the Supreme. The Padma Purana says four sampradayas will purify the Kali age, each from a divine source.',
    scriptures: 'Vishnu and Bhagavata Puranas, the Gita, Ramayana, Pancharatra and Vaikhanasa Agamas, the Alvars’ Divya Prabandham',
    sources: [src.historicalVaishnavism, src.vaikhanasaPancaratra, src.dasgupta3, src.dasgupta4],
    sampradayas: [
      {
        id: 'sri',
        name: 'Sri Sampradaya (Sri Vaishnava)',
        sanskrit: 'श्री सम्प्रदाय',
        founder: 'From Lakshmi; systematised by Ramanuja',
        acharyaId: 'ramanuja',
        period: 'Alvars (6th–9th c.) → Nathamuni (10th c.) → Ramanuja (11th–12th c.)',
        deity: 'Lakshmi-Narayana (Sri Ranganatha, Venkateshvara)',
        darshana: 'Vishishtadvaita',
        darshanaId: 'vishishtadvaita',
        texts: 'Sri Bhashya, Nalayira Divya Prabandham, Pancharatra Agamas',
        centres: 'Srirangam, Tirupati, Kanchipuram, Melkote',
        practice: 'Temple worship and total surrender (prapatti); “ubhaya Vedanta”, Sanskrit and Tamil scripture as equal',
        about:
          'Worship in both Sanskrit and Tamil, with Lakshmi as the merciful mediator. After Vedanta Desika and Pillai Lokacharya it divided into the northern (Vadakalai) and southern (Tenkalai) schools, which differ on how grace and effort work together.',
        parampara: ['Narayana', 'Lakshmi', 'Vishvaksena', 'Nammalvar', 'Nathamuni', 'Pundarikaksha', 'Rama Mishra', 'Yamunacharya', 'Periya Nambi', 'Ramanuja'],
        more: { label: 'Vishishtadvaita in depth: the Lord’s body, the five forms, surrender, the Alvars and the two schools', to: '#/vishishtadvaita' },
        sources: [src.brahmaSutraRamanuja, src.dasgupta3, defn('shrivaishnava', 'Sri Vaishnava')],
      },
      {
        id: 'brahma',
        name: 'Brahma Sampradaya (Madhva)',
        sanskrit: 'ब्रह्म सम्प्रदाय',
        founder: 'From Brahma; Madhvacharya',
        acharyaId: 'madhva',
        period: '13th century onward',
        deity: 'Vishnu as Krishna (Udupi Krishna)',
        darshana: 'Dvaita (Tattvavada)',
        darshanaId: 'dvaita',
        texts: 'Madhva’s Sarva-mula granthas; Jayatirtha’s Nyaya-sudha; Vyasatirtha’s works',
        centres: 'Udupi and its eight mathas; Mantralayam (Raghavendra Swami)',
        practice: 'Worship of Krishna at Udupi; the Haridasa singers (Purandara Dasa, Kanaka Dasa) spread it in Kannada song',
        about:
          'Madhva taught five real differences: Ishvara–soul, Ishvara–matter, soul–soul, soul–matter and matter–matter. The eight Udupi mathas take turns, every two years, to worship Krishna (the Paryaya festival).',
        parampara: ['Narayana', 'Brahma', 'Narada', 'Vyasa', 'Madhva', 'Padmanabha Tirtha', 'Jayatirtha', 'Vyasatirtha', 'Raghavendra Tirtha'],
        sources: [src.dasguptaMadhva, src.dasgupta4],
      },
      {
        id: 'rudra',
        name: 'Rudra Sampradaya (Pushti Marga)',
        sanskrit: 'रुद्र सम्प्रदाय',
        founder: 'From Rudra; Vishnusvami, then Vallabhacharya',
        acharyaId: 'vallabha',
        period: 'Vishnusvami (uncertain date); Vallabha 15th–16th century',
        deity: 'Krishna as Shrinathji, the child Krishna',
        darshana: 'Shuddhadvaita',
        darshanaId: 'shuddhadvaita',
        texts: 'Subodhini, Anubhashya, the Shodasha-granthas',
        centres: 'Nathdwara (Rajasthan), Gokul, Braj',
        practice: 'Seva: loving service of Krishna through the day, in eight darshans; the poets of the Ashtachhap, like Surdas',
        about:
          'Pushti means “nourishment” by grace. The devotee lives in the world as a householder and offers everything to Krishna. Vallabha’s son Vitthalanatha organised the seven houses of the sect.',
        parampara: ['Vishnu', 'Rudra', 'Vishnusvami', '…', 'Vallabhacharya', 'Vitthalanatha'],
        sources: [src.dasguptaVallabha, src.dasgupta4],
      },
      {
        id: 'kumara',
        name: 'Kumara Sampradaya (Nimbarka)',
        sanskrit: 'कुमार सम्प्रदाय',
        founder: 'From the four Kumaras; Nimbarkacharya',
        acharyaId: 'nimbarka',
        period: 'Tradition: very ancient; scholars: 12th–13th century',
        deity: 'Radha-Krishna together',
        darshana: 'Dvaitadvaita (Svabhavika Bhedabheda)',
        darshanaId: 'dvaitadvaita',
        texts: 'Vedanta-parijata-saurabha, Dasha-shloki',
        centres: 'Vrindavan, Salemabad (Rajasthan)',
        practice: 'Worship of the divine couple; the “Gopala mantra”',
        about: 'Among the earliest to worship Radha with Krishna. The soul and world are naturally both different and not different from Bhagavan, like the sun and its rays.',
        parampara: ['Hamsa (Vishnu)', 'Sanaka and the Kumaras', 'Narada', 'Nimbarka', 'Shrinivasa'],
        sources: [src.dasguptaNimbarka, src.dasgupta3],
      },
      {
        id: 'gaudiya',
        name: 'Gaudiya Vaishnava',
        sanskrit: 'गौडीय वैष्णव',
        founder: 'Chaitanya Mahaprabhu (linked to the Madhva line through Madhavendra Puri)',
        acharyaId: 'chaitanya',
        period: '16th century onward',
        deity: 'Radha-Krishna; Chaitanya as both combined',
        darshana: 'Achintya Bhedabheda',
        darshanaId: 'achintya',
        texts: 'Bhagavata Purana; works of the six Gosvamis; Chaitanya-charitamrita; Baladeva’s Govinda Bhashya',
        centres: 'Navadvipa, Vrindavan, Puri; worldwide through ISKCON (1966)',
        practice: 'Congregational chanting of Krishna’s names (sankirtana), japa of the Hare Krishna maha-mantra',
        about:
          'Rupa and Sanatana Gosvami built a theology of devotional emotion (rasa). Baladeva Vidyabhushana wrote its Brahma Sutra commentary in the 18th century to give it standing as a Vedanta school.',
        parampara: ['Krishna', 'Brahma', 'Narada', 'Vyasa', 'Madhva', '…', 'Madhavendra Puri', 'Ishvara Puri', 'Chaitanya'],
        sources: [src.chaitanyaBhagavata, src.historicalVaishnavism, src.dasgupta4],
      },
      {
        id: 'ramanandi',
        name: 'Ramanandi',
        sanskrit: 'रामानन्दी',
        founder: 'Ramananda (c. 14th–15th century), from the Sri Vaishnava line',
        period: '14th–15th century onward',
        deity: 'Sita-Rama',
        darshana: 'Vishishtadvaita',
        darshanaId: 'vishishtadvaita',
        texts: 'Ramayana; the Ramcharitmanas of Tulsidas (by tradition in this line)',
        centres: 'Ayodhya, Varanasi, Galta (Jaipur)',
        practice: 'Chanting Rama’s name; opened devotion to all castes; today the largest order of Vaishnava ascetics',
        about: 'Ramananda taught in Hindi and took disciples of every background. Kabir and Ravidas are traditionally counted among them.',
        sources: [src.conceptRamanandi, defn('ramananda', 'Ramananda')],
      },
      {
        id: 'warkari',
        name: 'Warkari',
        sanskrit: 'वारकरी',
        founder: 'Jnaneshwar (13th century), Namdev and later Eknath and Tukaram',
        period: '13th century onward',
        deity: 'Vitthala (Vithoba), Krishna at Pandharpur',
        darshana: 'Bhakti, close to Advaita in Jnaneshwar',
        texts: 'Jnaneshwari (Marathi Gita commentary), abhangas of Tukaram and Namdev',
        centres: 'Pandharpur, Alandi, Dehu',
        practice: 'The wari: an annual walking pilgrimage to Pandharpur for Ashadhi Ekadashi, singing abhangas',
        about: 'A householders’ movement across all castes in Maharashtra. Pilgrims wear a tulasi-bead garland and carry the saints’ sandals (padukas) in procession.',
        sources: [src.conceptWarkari, defn('vitthala', 'Vitthala')],
      },
      {
        id: 'vaikhanasa',
        name: 'Vaikhanasa and Pancharatra (temple traditions)',
        founder: 'Sage Vikhanasa; the Pancharatra from Narayana (Narada)',
        period: 'Ancient; Agamas compiled over the first millennium CE',
        deity: 'Vishnu in the temple image',
        darshana: 'Ritual traditions, used by Vishnu temples',
        texts: 'Vaikhanasa Agamas; Pancharatra Samhitas (Ahirbudhnya, Jayakhya, Parama…)',
        centres: 'Tirupati follows Vaikhanasa; Srirangam follows Pancharatra',
        practice: 'The two rulebooks for Vishnu temple worship, installation and festivals',
        about: 'Not rival sects but two systems of temple ritual. They differ mainly in details of worship.',
        sources: [src.vaikhanasaPancaratra, defn('vaikhanasa', 'Vaikhanasa'), defn('pancaratra', 'Pancharatra')],
      },
    ],
  },
  {
    id: 'shaiva',
    name: 'Shaiva',
    sanskrit: 'शैव',
    deity: 'Shiva as Pati, Lord of all souls',
    tone: 'accent',
    mark: 'tripundra',
    markLabel: 'Tripundra: three horizontal lines of sacred ash (vibhuti), often with a red dot',
    inBrief: 'Shiva as the Supreme. Shaiva schools range from strict dualism to pure non-dualism, and share three terms: Pati (Lord), pashu (soul) and pasha (bond).',
    scriptures: 'Vedas (Shri Rudram), Shiva and Linga Puranas, 28 Shaiva Agamas, Tamil Tirumurai',
    sources: [src.dgShivaPurana, src.dasgupta5],
    sampradayas: [
      {
        id: 'pashupata',
        name: 'Pashupata',
        sanskrit: 'पाशुपत',
        founder: 'Lakulisha (c. 2nd century CE), held to be an avatara of Shiva',
        period: 'The oldest named Shaiva sect',
        deity: 'Shiva as Pashupati, Lord of creatures',
        darshana: 'Dualist (bhedabheda)',
        texts: 'Pashupata Sutra with Kaundinya’s Panchartha Bhashya',
        centres: 'Karvan (Kayavarohana), Gujarat; once spread across India and Nepal',
        practice: 'Ascetic vows: bathing in ash, laughing, singing and dancing as worship, courting public scorn',
        about: 'The Linga Purana lists Lakulisha as the 28th and last yogacharya incarnation of Shiva. Later offshoots were the Kalamukhas and Kapalikas, now extinct.',
        sources: [src.dgPashupata, src.lingaIncarnations, defn('pashupata', 'Pashupata')],
      },
      {
        id: 'siddhanta',
        name: 'Shaiva Siddhanta',
        sanskrit: 'शैव सिद्धान्त',
        founder: 'The Agamas; in Tamil, Meykandar (13th century)',
        period: 'Kashmir and Central India (9th–11th c.), then Tamil Nadu',
        deity: 'Shiva as Nataraja and the Linga',
        darshana: 'Dualism (Shiva, souls and bonds are eternal)',
        texts: '28 Shaiva Agamas; Meykandar’s Shivajnana-bodham; the Tirumurai (Tevaram, Tiruvasagam)',
        centres: 'Chidambaram, Tiruvannamalai, Madurai; the Tamil adheenams (Dharmapuram, Tiruvavaduthurai)',
        practice: 'Initiation (diksha), daily Shiva puja, temple worship, singing the Tevaram hymns',
        about:
          'Souls are bound by three impurities (malas): anava (innate limitation), karma, and maya. Shiva’s grace, given through the guru’s initiation, removes them; the freed soul becomes like Shiva but is not identical with him. The 63 Nayanar saints, such as Appar, Sambandar and Sundarar, are its heroes.',
        parampara: ['Shiva (Srikantha)', 'Nandi', 'Sanatkumara', 'Satyajnana Darshini', 'Paranjoti', 'Meykandar', 'Arulnandi', 'Umapati Shivacharya'],
        more: { label: 'Shaiva Siddhanta in depth: Pati, pashu and pasha, the four paths, the Agamas and the Tirumurai', to: '#/siddhanta' },
        sources: [src.dgShaivaSiddhanta, src.conceptShaivaSiddhanta, src.dasgupta5],
      },
      {
        id: 'trika',
        name: 'Kashmir Shaivism (Trika / Pratyabhijna)',
        sanskrit: 'त्रिक',
        founder: 'Vasugupta (9th century), who received the Shiva Sutras',
        acharyaId: 'abhinavagupta',
        period: '9th–11th century, Kashmir',
        deity: 'Shiva with Shakti, as pure consciousness',
        darshana: 'Non-dualism (Pratyabhijna)',
        darshanaId: 'kashmir-shaivism',
        texts: 'Shiva Sutras, Spanda Karika, Somananda’s Shiva-drishti, Utpaladeva’s Ishvara-pratyabhijna, Abhinavagupta’s Tantraloka',
        centres: 'Kashmir',
        practice: 'Recognising one’s own self as Shiva, by grace and by the four means (upayas)',
        about: 'Reality is Shiva’s own free, vibrant consciousness (spanda), which manifests as 36 tattvas. Unlike Advaita, the world is real, Shiva’s self-expression.',
        parampara: ['Shiva', 'Vasugupta', 'Kallata · Somananda', 'Utpaladeva', 'Lakshmanagupta', 'Abhinavagupta', 'Kshemaraja'],
        more: { label: 'Kashmir Shaivism in depth: the 36 tattvas, the upayas, the schools and the texts', to: '#/trika' },
        sources: [defn('abhinavagupta', 'Abhinavagupta'), defn('pratyabhijna', 'Pratyabhijna'), src.dasgupta5],
      },
      {
        id: 'virashaiva',
        name: 'Virashaiva / Lingayat',
        sanskrit: 'वीरशैव',
        founder: 'Basavanna (12th century); tradition also names five ancient acharyas (Panchacharya)',
        period: '12th century onward, Karnataka',
        deity: 'Shiva as the Ishtalinga, worn on the body',
        darshana: 'Shakti-vishishtadvaita',
        texts: 'The Vachanas of Basavanna, Allama Prabhu and Akka Mahadevi; Siddhanta Shikhamani',
        centres: 'Kalyana, Kudalasangama, Srisailam; many mathas in Karnataka',
        practice: 'Each devotee wears a small linga and worships it daily; “work is worship” (kayaka); rejects caste distinction',
        about: 'The Vachana poets wrote short, direct poems in Kannada. The soul rises through six stages (shat-sthala) to union with Shiva.',
        sources: [src.dgVirashaiva, defn('virashaiva', 'Virashaiva')],
      },
      {
        id: 'nath',
        name: 'Natha',
        sanskrit: 'नाथ',
        founder: 'Matsyendranath and his disciple Gorakhnath (c. 10th–12th century)',
        period: '10th century onward',
        deity: 'Shiva as Adinatha, the first lord',
        darshana: 'Non-dual, yogic',
        texts: 'Goraksha-shataka; Hatha-yoga-pradipika (by Svatmarama, in this lineage)',
        centres: 'Gorakhpur, Nepal, Rajasthan',
        practice: 'Hatha yoga; yogis wear large earrings through split ears (Kanphata)',
        about: 'The nine Naths and 84 Siddhas are the founders of hatha yoga as a system.',
        sources: [defn('gorakhnath', 'Gorakhnath'), defn('natha', 'Natha')],
      },
      {
        id: 'shiva-advaita',
        name: 'Shiva-advaita (Shaiva Vishishtadvaita)',
        founder: 'Shrikantha; revived by Appayya Dikshita',
        acharyaId: 'shrikantha',
        period: '12th–16th century',
        deity: 'Shiva as the qualified Brahman',
        darshana: 'Vishishtadvaita read for Shiva',
        texts: 'Shrikantha’s Brahma Sutra Bhashya; Shivarka-mani-dipika',
        centres: 'South India',
        practice: 'Vedic Shiva worship, meditation on Shiva with his Shakti',
        about: 'Reads the Brahma Sutras as teaching Shiva, with souls and world as his body.',
        sources: [src.dasguptaShrikantha, src.dasgupta5],
      },
    ],
  },
  {
    id: 'shakta',
    name: 'Shakta',
    sanskrit: 'शाक्त',
    deity: 'The Devi, Shakti, as the supreme power',
    tone: 'gold',
    mark: 'bindu',
    markLabel: 'A red dot or vertical line of kumkum, Devi’s mark',
    inBrief: 'Devi is the Supreme: Shiva without Shakti is inert, “shava”, a corpse. Worship through mantra, yantra and the Tantras.',
    scriptures: 'Devi Mahatmya (Markandeya Purana), Devi Bhagavata, Devi Upanishad, Lalita Sahasranama, the Shakta Tantras',
    sources: [src.shaktiAndShakta, src.dmCanto81, src.markandeya],
    sampradayas: [
      {
        id: 'srikula',
        name: 'Srikula (Sri Vidya)',
        sanskrit: 'श्रीविद्या',
        founder: 'Tradition: Dattatreya, Parashurama, Agastya and Lopamudra; Shankara’s line',
        period: 'Texts from c. 9th century; strong in the South',
        deity: 'Lalita Tripurasundari',
        darshana: 'Shakta non-dualism',
        texts: 'Lalita Sahasranama (Brahmanda Purana), Saundarya Lahari, Tripura Upanishad, Bhaskararaya’s Saubhagya-bhaskara',
        centres: 'Kanchipuram (Kamakshi), Sringeri, Kollur, Devipuram',
        practice: 'Worship of the Sri Chakra and the fifteen-syllable panchadashi mantra',
        about: 'The Sri Chakra is nine interlocking triangles around a central point (bindu), where Devi sits. Worship is inward (samaya) or with outer ritual (kaula).',
        sources: [defn('shrividya', 'Sri Vidya'), defn('shri-chakra', 'Sri Chakra'), defn('tripurasundari', 'Tripurasundari')],
      },
      {
        id: 'kalikula',
        name: 'Kalikula',
        sanskrit: 'कालीकुल',
        founder: 'Tantric lineages of the east and north',
        period: 'Medieval onward; Bengal, Assam, Kashmir, Nepal',
        deity: 'Kali, Tara and the fierce Mahavidyas',
        darshana: 'Shakta non-dualism',
        texts: 'Devi Mahatmya, Kali Tantra, Kalika Purana, Mahanirvana Tantra',
        centres: 'Kalighat, Dakshineswar, Kamakhya, Tarapith',
        practice: 'Worship of Devi as Mother; devotional song (Shyama-sangit) of Ramprasad Sen',
        about: 'Ramakrishna Paramahamsa, the priest of Kali at Dakshineswar, made this Mother-devotion widely known.',
        sources: [src.shaktiAndShakta, defn('kalikula', 'Kalikula')],
      },
      {
        id: 'kaula',
        name: 'Kaula',
        sanskrit: 'कौल',
        founder: 'Matsyendranath (Kaulajnana-nirnaya)',
        period: 'c. 9th–11th century',
        deity: 'Shakti with Shiva (kula and akula)',
        darshana: 'Non-dual tantra',
        texts: 'Kaulajnana-nirnaya, Kularnava Tantra',
        centres: 'Kamarupa and the great pithas',
        practice: 'Tantric worship in the family (kula) of initiates; right-hand (dakshina) and left-hand (vama) paths',
        about: 'Kaula ideas deeply shaped both Sri Vidya and Kashmir Shaivism.',
        sources: [defn('kaula', 'Kaula'), src.shaktiAndShakta],
      },
    ],
  },
  {
    id: 'smarta',
    name: 'Smarta',
    sanskrit: 'स्मार्त',
    deity: 'Five (or six) forms of one Brahman, worshipped together',
    tone: 'gold',
    mark: 'smarta',
    markLabel: 'Tripundra of ash with a red dot, or a simple dot: Smartas freely use both',
    inBrief: 'Followers of the smriti (dharmashastra) who worship five deities as equal forms of Brahman. Philosophically, Advaita.',
    scriptures: 'Vedas, Smritis, Puranas; Shankara’s works',
    sources: [src.conceptShanmata, defn('pancayatana', 'Panchayatana')],
    sampradayas: [
      {
        id: 'dashanami',
        name: 'Dashanami Sannyasa and the Advaita mathas',
        sanskrit: 'दशनामी',
        founder: 'Adi Shankaracharya',
        acharyaId: 'shankara',
        period: '8th century onward',
        deity: 'Brahman; the Panchayatana deities in worship',
        darshana: 'Advaita',
        darshanaId: 'advaita',
        texts: 'Shankara’s bhashyas on the prasthana-traya; Vivekachudamani (attributed)',
        centres: 'Sringeri, Dvaraka, Puri, Jyotirmath; Kanchi Kamakoti',
        practice: 'Panchayatana puja: Shiva, Vishnu, Devi, Surya and Ganesha (Skanda makes six, the shanmata)',
        about:
          'Tradition credits Shankara with uniting the six forms of worship (shanmata) under Advaita and founding four mathas at the corners of India, each over one Veda and one great saying (mahavakya). His monks take one of ten names.',
        parampara: ['Narayana', 'Brahma', 'Vasishtha', 'Shakti', 'Parashara', 'Vyasa', 'Shuka', 'Gaudapada', 'Govinda Bhagavatpada', 'Shankara'],
        sources: [src.brahmaSutraShankara, src.conceptShanmata, defn('shankaracarya', 'Shankaracharya')],
      },
    ],
  },
  {
    id: 'others',
    name: 'Ganapatya, Saura, Kaumara',
    sanskrit: 'गाणपत्य · सौर · कौमार',
    deity: 'Ganesha, Surya or Skanda as the Supreme',
    tone: 'accent',
    mark: 'none',
    markLabel: 'No single distinct mark',
    inBrief: 'The other three of the six classical cults (shanmata). Once separate sects; today mostly worshipped within Smarta and Shaiva practice.',
    scriptures: 'Ganesha and Mudgala Puranas; Samba Purana and Bhavishya Purana; Skanda Purana and Tamil Kanda Puranam',
    sources: [defn('ganapatya', 'Ganapatya'), src.conceptShanmata, src.wilsonUpapuranas],
    sampradayas: [
      {
        id: 'ganapatya',
        name: 'Ganapatya',
        sanskrit: 'गाणपत्य',
        founder: 'Morya Gosavi (Chinchwad) is the best-known saint',
        period: 'c. 6th–9th century onward',
        deity: 'Ganesha as the Supreme Brahman',
        darshana: 'Vedantic, Ganesha as Brahman',
        texts: 'Ganesha Purana, Mudgala Purana, Ganapati Atharvashirsha, Ganesha Gita',
        centres: 'The Ashtavinayaka temples of Maharashtra; Morgaon, Chinchwad',
        practice: 'Worship of Ganesha as Brahman; Ganesha Chaturthi',
        about: 'The Mudgala Purana describes eight avataras of Ganesha, each conquering a demon that stands for a vice.',
        sources: [defn('ganapatya', 'Ganapatya'), src.defGaneshaPurana],
      },
      {
        id: 'saura',
        name: 'Saura',
        sanskrit: 'सौर',
        founder: 'Tradition links it to Samba, Krishna’s son, and the Maga priests',
        period: 'Flourished c. 5th–13th century',
        deity: 'Surya as the Supreme',
        darshana: 'Theistic, Surya as Brahman',
        texts: 'Samba Purana, parts of the Bhavishya Purana, Aditya Hridayam (Ramayana)',
        centres: 'Konark, Modhera, Multan (historic)',
        practice: 'Sun worship at dawn: arghya offerings, Chhath, Ratha Saptami',
        about: 'The Samba Purana tells how Samba was cured of leprosy by worshipping the Sun and brought priests from Shakadvipa.',
        sources: [src.upaSamba, src.upaSaura, defn('saura', 'Saura')],
      },
      {
        id: 'kaumara',
        name: 'Kaumara',
        sanskrit: 'कौमार',
        founder: 'Tamil devotion; Nakkirar, Arunagirinathar (15th century)',
        period: 'Sangam age onward in Tamil Nadu',
        deity: 'Skanda: Murugan, Kartikeya, Subrahmanya',
        darshana: 'Shaiva Siddhanta',
        texts: 'Skanda Purana, Tirumurugarruppadai, Kanda Puranam, Tiruppugazh',
        centres: 'The six abodes (Arupadai Veedu): Palani, Tiruchendur, Swamimalai, Tiruttani, Pazhamudircholai, Tirupparankundram',
        practice: 'Kavadi, Thaipusam, Skanda Shashti; the vel (spear)',
        about: 'Today mostly part of Tamil Shaivism, where Murugan is the beloved son of Shiva and Parvati.',
        sources: [defn('kaumara', 'Kaumara'), defn('skanda', 'Skanda')],
      },
    ],
  },
];

/** Shankara’s four amnaya mathas. */
export const mathas: { name: string; place: string; dir: string; veda: string; mahavakya: string; mahavakyaDeva: string; upanishad: string; first: string; names: string[] }[] = [
  {
    name: 'Jyotirmath',
    place: 'Joshimath, Uttarakhand',
    dir: 'North',
    veda: 'Atharva Veda',
    mahavakya: 'ayam ātmā brahma',
    mahavakyaDeva: 'अयमात्मा ब्रह्म',
    upanishad: 'Mandukya: “This Self is Brahman”',
    first: 'Totakacharya',
    names: ['Giri', 'Parvata', 'Sagara'],
  },
  {
    name: 'Govardhana Matha',
    place: 'Puri, Odisha',
    dir: 'East',
    veda: 'Rig Veda',
    mahavakya: 'prajñānaṃ brahma',
    mahavakyaDeva: 'प्रज्ञानं ब्रह्म',
    upanishad: 'Aitareya: “Consciousness is Brahman”',
    first: 'Padmapada',
    names: ['Vana', 'Aranya'],
  },
  {
    name: 'Sringeri Sharada Peetham',
    place: 'Sringeri, Karnataka',
    dir: 'South',
    veda: 'Yajur Veda',
    mahavakya: 'ahaṃ brahmāsmi',
    mahavakyaDeva: 'अहं ब्रह्मास्मि',
    upanishad: 'Brihadaranyaka: “I am Brahman”',
    first: 'Sureshvara',
    names: ['Sarasvati', 'Bharati', 'Puri'],
  },
  {
    name: 'Dvaraka Sharada Peetham',
    place: 'Dvaraka, Gujarat',
    dir: 'West',
    veda: 'Sama Veda',
    mahavakya: 'tat tvam asi',
    mahavakyaDeva: 'तत्त्वमसि',
    upanishad: 'Chandogya: “You are That”',
    first: 'Hastamalaka',
    names: ['Tirtha', 'Ashrama'],
  },
];

/** Where each Vedanta school sits between identity and difference. 0 = pure identity, 100 = pure difference. */
export const vedantaSpectrum: { id: string; pos: number }[] = [
  { id: 'advaita', pos: 4 },
  { id: 'kashmir-shaivism', pos: 12 },
  { id: 'shuddhadvaita', pos: 24 },
  { id: 'vishishtadvaita', pos: 45 },
  { id: 'achintya', pos: 55 },
  { id: 'dvaitadvaita', pos: 65 },
  { id: 'dvaita', pos: 96 },
];

export const darshanaSources: Source[] = [
  src.dasgupta1,
  src.dasgupta2,
  src.dgGeneral,
  src.dasgupta3,
  src.dasgupta4,
  src.dasgupta5,
  src.hinduPhilosophy,
  defn('darshana', 'Darshana'),
  defn('astika', 'Astika'),
  defn('nastika', 'Nastika'),
  defn('pramana', 'Pramana'),
  defn('sampradaya', 'Sampradaya'),
  defn('parampara', 'Parampara'),
];

export const darshanById = new Map(darshans.map((d) => [d.id, d]));
