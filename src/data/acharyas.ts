import type { Fact, Source } from './types';
import { defn, src } from './sources';

export interface Darshana {
  id: string;
  name: string;
  sanskrit: string;
  /** One sentence a beginner can hold on to. */
  inBrief: string;
  /** How it answers: what is the relation of the soul (jiva) to God/Brahman? */
  jivaBrahman: string;
  world: string;
  liberation: string;
}

export const darshanas: Darshana[] = [
  {
    id: 'advaita',
    name: 'Advaita',
    sanskrit: 'अद्वैत',
    inBrief: 'Non-dualism: Brahman alone is real, and the Self (Atman) is Brahman.',
    jivaBrahman: 'Identical. The seeming difference is due to ignorance (avidya).',
    world: 'An appearance (mithya) on Brahman, like a snake seen in a rope.',
    liberation: 'Knowledge (jnana) that removes ignorance; possible even in this life (jivanmukti).',
  },
  {
    id: 'vishishtadvaita',
    name: 'Vishishtadvaita',
    sanskrit: 'विशिष्टाद्वैत',
    inBrief: 'Qualified non-dualism: one Brahman (Narayana) with souls and matter as his body.',
    jivaBrahman: 'Souls are real, eternal parts (modes) of Brahman: one with him as body with soul, yet distinct.',
    world: 'Real, the body of God.',
    liberation: 'Devotion (bhakti) and surrender (prapatti) by God’s grace; eternal service in Vaikuntha.',
  },
  {
    id: 'dvaita',
    name: 'Dvaita (Tattvavada)',
    sanskrit: 'द्वैत',
    inBrief: 'Dualism: Vishnu alone is independent, and everything else depends on him and is eternally different from him.',
    jivaBrahman: 'Eternally distinct; the soul is a reflection (pratibimba) dependent on Vishnu.',
    world: 'Real. There are five eternal differences (pancha-bheda) between God, souls and matter.',
    liberation: 'Knowledge and devotion, by Vishnu’s grace; souls differ even in liberation.',
  },
  {
    id: 'dvaitadvaita',
    name: 'Dvaitadvaita (Svabhavika Bhedabheda)',
    sanskrit: 'द्वैताद्वैत',
    inBrief: 'Dual-non-dualism: souls and the world are both different and not different from Krishna, naturally.',
    jivaBrahman: 'At once different and non-different, like the sun and its rays.',
    world: 'Real, a transformation of God’s power.',
    liberation: 'Surrender and devotion to Radha-Krishna.',
  },
  {
    id: 'shuddhadvaita',
    name: 'Shuddhadvaita',
    sanskrit: 'शुद्धाद्वैत',
    inBrief: 'Pure non-dualism: Brahman (Krishna) is one, with no maya to taint it, and the world is his real, pure self-expression.',
    jivaBrahman: 'Souls are sparks of Krishna, one with him in essence.',
    world: 'Real; a joyful manifestation (not an illusion).',
    liberation: 'Pushti-marga, the “path of grace”, by loving devotion to Krishna.',
  },
  {
    id: 'achintya',
    name: 'Achintya Bhedabheda',
    sanskrit: 'अचिन्त्य भेदाभेद',
    inBrief: 'Inconceivable oneness-and-difference: souls are one with and different from Krishna in a way beyond logic.',
    jivaBrahman: 'Souls are Krishna’s energy (shakti), inconceivably one with and different from him.',
    world: 'Real, an energy of Krishna.',
    liberation: 'Prema (pure love) for Krishna through chanting the holy name (harinama-sankirtana).',
  },
  {
    id: 'kashmir-shaivism',
    name: 'Kashmir Shaivism (Pratyabhijna)',
    sanskrit: 'प्रत्यभिज्ञा',
    inBrief: 'Recognition: the Self is Shiva, pure consciousness, which freely manifests as the world.',
    jivaBrahman: 'The individual is Shiva who has veiled himself; liberation is recognising this.',
    world: 'Real, the free self-expression (spanda) of Shiva’s consciousness.',
    liberation: 'Recognition (pratyabhijna) of one’s identity with Shiva, by grace and practice.',
  },
];

export interface Acharya {
  id: string;
  name: string;
  sanskrit: string;
  /** Approximate; traditional dates often differ. */
  dates: string;
  /** Approximate year CE, used only for ordering. */
  year: number;
  darshana: string; // darshana id
  sampradaya?: string;
  born: string;
  summary: string;
  facts: Fact[];
  works: string[];
  sources: Source[];
}

export const acharyas: Acharya[] = [
  {
    id: 'gaudapada',
    year: 600,
    name: 'Gaudapada',
    sanskrit: 'गौडपाद',
    dates: 'c. 6th–7th century CE',
    darshana: 'advaita',
    born: 'Tradition places him in Gauda (Bengal) or by the Narmada',
    summary: 'The earliest systematic teacher of Advaita. His verse commentary (karika) on the Mandukya Upanishad teaches that the world never truly came into being (ajati-vada). He was the teacher of Shankara’s teacher.',
    facts: [
      { label: 'Disciple', value: 'Govinda Bhagavatpada' },
      { label: 'Grand-disciple', value: 'Adi Shankara' },
    ],
    works: ['Mandukya Karika'],
    sources: [defn('gaudapada', 'Gaudapada'), src.hinduPhilosophy],
  },
  {
    id: 'shankara',
    year: 788,
    name: 'Adi Shankaracharya',
    sanskrit: 'आदि शङ्कराचार्य',
    dates: '8th century CE (scholarly c. 788–820; some mathas give far earlier dates)',
    darshana: 'advaita',
    sampradaya: 'Dashanami sannyasa order',
    born: 'Kalady, Kerala',
    summary:
      'He renounced the world as a boy, studied under Govinda Bhagavatpada on the Narmada, wrote commentaries on the Brahma Sutras, the Gita and the principal Upanishads, and travelled all of India in debate. Tradition says he founded four mathas at the four corners of India and organised the ten orders of monks. He died young, traditionally at thirty-two.',
    facts: [
      { label: 'Guru', value: 'Govinda Bhagavatpada' },
      { label: 'Disciples', value: 'Padmapada, Sureshvara, Hastamalaka, Totaka' },
      { label: 'Mathas', value: 'Sringeri (S), Dvaraka (W), Puri (E), Jyotirmath (N)' },
    ],
    works: ['Brahma Sutra Bhashya', 'Bhagavad Gita Bhashya', 'Upanishad Bhashyas', 'Upadesha Sahasri', 'Hymns such as Bhaja Govindam (attributed)'],
    sources: [src.brahmaSutraShankara, src.brahmaSutraShankaraIntro, src.ishaShankara, defn('shankara', 'Shankara')],
  },
  {
    id: 'vidyaranya',
    year: 1330,
    name: 'Vidyaranya',
    sanskrit: 'विद्यारण्य',
    dates: '14th century CE',
    darshana: 'advaita',
    born: 'Karnataka region',
    summary: 'Pontiff of the Sringeri matha and guide of the founders of the Vijayanagara empire. His Panchadashi is a classic handbook of Advaita. The great Vedic commentator Sayana is traditionally called his brother.',
    facts: [
      { label: 'Seat', value: 'Sringeri Sharada Peetham' },
      { label: 'Linked to', value: 'Founding of Vijayanagara' },
    ],
    works: ['Panchadashi', 'Jivanmukti-viveka'],
    sources: [defn('vidyaranya', 'Vidyaranya')],
  },
  {
    id: 'nathamuni',
    year: 900,
    name: 'Nathamuni',
    sanskrit: 'नाथमुनि',
    dates: 'c. 9th–10th century CE',
    darshana: 'vishishtadvaita',
    sampradaya: 'Sri Vaishnava',
    born: 'Viranarayanapuram, Tamil Nadu',
    summary: 'First acharya of the Sri Vaishnava line. He recovered and compiled the 4,000 Tamil hymns of the Alvars (the Nalayira Divya Prabandham) and set them to music for temple worship.',
    facts: [{ label: 'Grandson', value: 'Yamunacharya' }],
    works: ['Compilation of the Nalayira Divya Prabandham', 'Nyaya-tattva'],
    sources: [defn('nathamuni', 'Nathamuni'), src.dasgupta3],
  },
  {
    id: 'yamuna',
    year: 1000,
    name: 'Yamunacharya (Alavandar)',
    sanskrit: 'यामुनाचार्य',
    dates: 'c. 10th–11th century CE',
    darshana: 'vishishtadvaita',
    sampradaya: 'Sri Vaishnava',
    born: 'Tamil Nadu',
    summary: 'Grandson of Nathamuni and head of the Srirangam community. Tradition says he saw the young Ramanuja from afar and hoped he would be his successor. He died before they met, with three fingers left folded, for three wishes that Ramanuja later fulfilled.',
    facts: [{ label: 'Successor', value: 'Ramanuja (through his disciples)' }],
    works: ['Siddhi-traya', 'Gitartha-sangraha', 'Stotra-ratna', 'Agama-pramanya'],
    sources: [defn('yamuna', 'Yamuna'), src.dasgupta3],
  },
  {
    id: 'ramanuja',
    year: 1017,
    name: 'Ramanujacharya',
    sanskrit: 'रामानुजाचार्य',
    dates: 'Traditionally 1017–1137 CE',
    darshana: 'vishishtadvaita',
    sampradaya: 'Sri Sampradaya (from Lakshmi)',
    born: 'Sriperumbudur, Tamil Nadu',
    summary:
      'He first studied Advaita under Yadavaprakasha, then became the great systematiser of Vishishtadvaita. From Srirangam he reorganised temple worship. Tradition says he shared the secret Narayana mantra from the temple tower at Tirukkottiyur for all to hear, choosing even his own damnation if that would save others. He spent years at Melkote in Karnataka.',
    facts: [
      { label: 'Gurus', value: 'Yadavaprakasha (early), Periya Nambi (Mahapurna)' },
      { label: 'Centres', value: 'Srirangam, Melkote' },
      { label: 'Emphasis', value: 'Bhakti and prapatti (surrender)' },
    ],
    works: ['Sri Bhashya (on the Brahma Sutras)', 'Gita Bhashya', 'Vedartha-sangraha', 'Vedanta-sara', 'Gadya-traya'],
    sources: [src.brahmaSutraRamanuja, src.ramanujaGita, src.gitaVaishnava, src.dasgupta3],
  },
  {
    id: 'vedanta-desika',
    year: 1268,
    name: 'Vedanta Desika',
    sanskrit: 'वेदान्त देशिक',
    dates: '1268–1369 CE',
    darshana: 'vishishtadvaita',
    sampradaya: 'Sri Vaishnava (Vadakalai)',
    born: 'Thoopul, near Kanchipuram',
    summary: 'Poet, philosopher and logician who defended Ramanuja’s system. He wrote over a hundred works in Sanskrit, Tamil and Manipravalam, and the northern (Vadakalai) branch of Sri Vaishnavism looks to him.',
    facts: [{ label: 'Title', value: 'Kavitarkika-simha (lion among poets and logicians)' }],
    works: ['Tattva-mukta-kalapa', 'Rahasya-traya-sara', 'Paduka-sahasra', 'Shata-dushani'],
    sources: [defn('vedantadeshika', 'Vedanta Desika'), src.dasgupta3],
  },
  {
    id: 'nimbarka',
    year: 1200,
    name: 'Nimbarkacharya',
    sanskrit: 'निम्बार्काचार्य',
    dates: 'Disputed: tradition very early; scholars c. 12th–13th century CE',
    darshana: 'dvaitadvaita',
    sampradaya: 'Kumara (Sanaka) Sampradaya',
    born: 'Tradition: near Paithan or in the Telugu country',
    summary: 'Tradition traces his line to the Kumaras through Narada. He is among the first to make Radha and Krishna together the object of worship. His brief commentary on the Brahma Sutras teaches the natural difference-and-non-difference of souls and God.',
    facts: [
      { label: 'Lineage', value: 'Hamsa → Kumaras → Narada → Nimbarka' },
      { label: 'Deity', value: 'Radha-Krishna' },
    ],
    works: ['Vedanta-parijata-saurabha', 'Dasha-shloki', 'Siddhanta-ratna'],
    sources: [src.dasguptaNimbarka, src.dasgupta3],
  },
  {
    id: 'madhva',
    year: 1238,
    name: 'Madhvacharya (Anandatirtha)',
    sanskrit: 'मध्वाचार्य',
    dates: '1238–1317 CE',
    darshana: 'dvaita',
    sampradaya: 'Brahma Sampradaya',
    born: 'Pajaka, near Udupi, Karnataka',
    summary:
      'He broke with the Advaita of his teacher and founded Tattvavada (Dvaita). He installed the image of Krishna at Udupi, which is still worshipped by the eight mathas he founded. His followers regard him as the third avatara of Vayu, after Hanuman and Bhima. Tradition says he twice visited Vyasa at Badarikashrama.',
    facts: [
      { label: 'Guru', value: 'Achyutapreksha' },
      { label: 'Centre', value: 'Udupi Sri Krishna Matha (Ashta Mathas)' },
      { label: 'Regarded as', value: 'Avatara of Vayu' },
    ],
    works: ['Brahma Sutra Bhashya', 'Anuvyakhyana', 'Gita Bhashya', 'Mahabharata-tatparya-nirnaya', 'Upanishad Bhashyas'],
    sources: [src.dasguptaMadhva, src.chandogyaMadhva, src.ishaMadhva, src.dasgupta4],
  },
  {
    id: 'vallabha',
    year: 1479,
    name: 'Vallabhacharya',
    sanskrit: 'वल्लभाचार्य',
    dates: '1479–1531 CE',
    darshana: 'shuddhadvaita',
    sampradaya: 'Rudra Sampradaya (Pushti Marga)',
    born: 'Champaran (Chhattisgarh), of a Telugu family',
    summary: 'Founder of the Pushti Marga, the path of grace. After winning a great debate at the Vijayanagara court, he travelled India three times. His followers worship Krishna as Shrinathji, now at Nathdwara. His commentary on the Bhagavata, the Subodhini, is central to his school.',
    facts: [
      { label: 'Deity', value: 'Shrinathji (Krishna lifting Govardhana)' },
      { label: 'Successor', value: 'His son Vitthalanatha' },
    ],
    works: ['Anubhashya (on the Brahma Sutras)', 'Subodhini (on the Bhagavata)', 'Shodasha-grantha'],
    sources: [src.dasguptaVallabha, src.dasgupta4],
  },
  {
    id: 'chaitanya',
    year: 1486,
    name: 'Chaitanya Mahaprabhu',
    sanskrit: 'चैतन्य महाप्रभु',
    dates: '1486–1534 CE',
    darshana: 'achintya',
    sampradaya: 'Gaudiya Vaishnava (linked to the Brahma-Madhva line)',
    born: 'Navadvipa, Bengal',
    summary:
      'A brilliant young scholar (Nimai Pandita) who was transformed after initiation at Gaya. He spread congregational chanting of the names of Krishna (harinama-sankirtana) across Bengal and Odisha, and spent his last years at Puri absorbed in love for Jagannatha. His followers regard him as Radha and Krishna combined. His six Gosvami disciples systematised the theology at Vrindavan.',
    facts: [
      { label: 'Guru', value: 'Ishvara Puri' },
      { label: 'Disciples', value: 'The six Gosvamis of Vrindavan (Rupa, Sanatana, Jiva …)' },
      { label: 'Practice', value: 'Chanting the Hare Krishna maha-mantra' },
    ],
    works: ['Shikshashtakam (eight verses; his only writing)'],
    sources: [src.chaitanyaBhagavata, defn('caitanya', 'Chaitanya'), src.dasgupta4],
  },
  {
    id: 'abhinavagupta',
    year: 950,
    name: 'Abhinavagupta',
    sanskrit: 'अभिनवगुप्त',
    dates: 'c. 950–1016 CE',
    darshana: 'kashmir-shaivism',
    sampradaya: 'Trika Shaivism',
    born: 'Kashmir',
    summary: 'The great synthesiser of Kashmir Shaivism and one of India’s greatest aestheticians. His Tantraloka is an encyclopaedia of Shaiva tantra, and his theory of rasa, the savouring of emotion in art, remains classic.',
    facts: [{ label: 'Tradition', value: 'Pratyabhijna / Trika' }],
    works: ['Tantraloka', 'Ishvara-pratyabhijna-vimarshini', 'Abhinavabharati (on the Natya Shastra)'],
    sources: [defn('abhinavagupta', 'Abhinavagupta'), src.dasgupta5],
  },
  {
    id: 'shrikantha',
    year: 1150,
    name: 'Shrikantha',
    sanskrit: 'श्रीकण्ठ',
    dates: 'c. 12th–13th century CE',
    darshana: 'vishishtadvaita',
    sampradaya: 'Shaiva Vishishtadvaita (Shiva-advaita)',
    born: 'South India',
    summary: 'Wrote a commentary on the Brahma Sutras that reads them as teaching Shiva as the qualified Brahman, closely parallel to Ramanuja’s Vaishnava reading. Appayya Dikshita later wrote a famous sub-commentary on it.',
    facts: [{ label: 'Commentator on him', value: 'Appayya Dikshita (Shivarka-mani-dipika)' }],
    works: ['Brahma Sutra Bhashya (Shaiva)'],
    sources: [src.dasguptaShrikantha, src.dasgupta5],
  },
];

/** The four Vaishnava sampradayas and their founders. */
export const vaishnavaSampradayas = [
  { name: 'Sri Sampradaya', source: 'Lakshmi', acharya: 'ramanuja', darshana: 'vishishtadvaita' },
  { name: 'Brahma Sampradaya', source: 'Brahma', acharya: 'madhva', darshana: 'dvaita' },
  { name: 'Rudra Sampradaya', source: 'Rudra (Shiva)', acharya: 'vallabha', darshana: 'shuddhadvaita' },
  { name: 'Kumara Sampradaya', source: 'The four Kumaras', acharya: 'nimbarka', darshana: 'dvaitadvaita' },
];

acharyas.sort((a, b) => a.year - b.year);

export const acharyaById = new Map(acharyas.map((a) => [a.id, a]));
export const darshanaById = new Map(darshanas.map((d) => [d.id, d]));
