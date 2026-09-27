import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— The tattvas ——————————————————————— */

export type TattvaGroup = 'shuddha' | 'maya' | 'root' | 'inner' | 'sense' | 'action' | 'subtle' | 'gross';

export const groupInfo: Record<TattvaGroup, { label: string; sanskrit: string; about: string; shaivaOnly?: boolean }> = {
  shuddha: { label: 'The pure tattvas', sanskrit: 'शुद्ध तत्त्व', about: 'Consciousness before any limitation. Counted only by the Shaiva and Shakta schools.', shaivaOnly: true },
  maya: { label: 'Maya and its five cloaks', sanskrit: 'माया कञ्चुक', about: 'How the unlimited becomes limited. Also counted only by the Shaiva and Shakta schools.', shaivaOnly: true },
  root: { label: 'Spirit and matter', sanskrit: 'पुरुष प्रकृति', about: 'The two roots of Samkhya: the conscious witness and the matter that unfolds before it.' },
  inner: { label: 'The inner instrument', sanskrit: 'अन्तःकरण', about: 'Intellect, ego-sense and mind: the mental organs, made of subtle matter.' },
  sense: { label: 'The five senses', sanskrit: 'ज्ञानेन्द्रिय', about: 'The powers of knowing, not the physical organs.' },
  action: { label: 'The five organs of action', sanskrit: 'कर्मेन्द्रिय', about: 'The powers of doing.' },
  subtle: { label: 'The five subtle elements', sanskrit: 'तन्मात्र', about: '“That only”: pure sound, touch, form, taste and smell, before they become things.' },
  gross: { label: 'The five great elements', sanskrit: 'महाभूत', about: 'The stuff of the visible world, each carrying the qualities of those before it.' },
};

export interface Tattva {
  id: string;
  name: string;
  sanskrit: string;
  meaning: string;
  group: TattvaGroup;
  /** Number in the Shaiva count of 36 (as in the Trika). */
  shaiva: number;
  /** Number in the Samkhya count of 25, where Purusha is the twenty-fifth. */
  samkhya?: number;
  about: string;
  /** Index into fiveElements, for tattvas tied to one element. */
  element?: number;
}

export const tattvas: Tattva[] = [
  { id: 'shiva', name: 'Shiva', sanskrit: 'शिव', meaning: 'Pure consciousness', group: 'shuddha', shaiva: 1, about: 'Consciousness alone, aware of itself as “I”, with nothing yet over against it. Its power is chit, awareness.' },
  { id: 'shakti', name: 'Shakti', sanskrit: 'शक्ति', meaning: 'Its power', group: 'shuddha', shaiva: 2, about: 'The same consciousness as power and bliss (ananda): the first stir towards manifestation. Shiva and Shakti are never apart.' },
  { id: 'sadashiva', name: 'Sadashiva', sanskrit: 'सदाशिव', meaning: '“I am this”', group: 'shuddha', shaiva: 3, about: 'The first faint “this” appears, but the “I” is stronger. The power of will (iccha) comes to the fore.' },
  { id: 'ishvara', name: 'Ishvara', sanskrit: 'ईश्वर', meaning: '“This am I”', group: 'shuddha', shaiva: 4, about: 'Now the “this”, the universe-to-be, is stronger, still held as oneself. The power of knowing (jnana) comes to the fore.' },
  { id: 'shuddhavidya', name: 'Shuddhavidya', sanskrit: 'शुद्धविद्या', meaning: 'Pure knowledge', group: 'shuddha', shaiva: 5, about: '“I am I and this is this”: subject and object in perfect balance, still known as one. The power of action (kriya) comes to the fore.' },
  { id: 'maya', name: 'Maya', sanskrit: 'माया', meaning: 'The power that divides', group: 'maya', shaiva: 6, about: 'Here the sense of difference begins: I am here, that is there. In the Trika it is Shiva’s own self-limitation; in the Siddhanta a real, subtle material substance.' },
  { id: 'kala', name: 'Kala', sanskrit: 'कला', meaning: 'Limited doing', group: 'maya', shaiva: 7, about: 'The first cloak (kanchuka): all-doing shrinks to the power to do a little.' },
  { id: 'vidya', name: 'Vidya', sanskrit: 'विद्या', meaning: 'Limited knowing', group: 'maya', shaiva: 8, about: 'All-knowing shrinks to knowing a little.' },
  { id: 'raga', name: 'Raga', sanskrit: 'राग', meaning: 'Limited desire', group: 'maya', shaiva: 9, about: 'Fullness, wanting nothing, shrinks to wanting this or that.' },
  { id: 'kaala', name: 'Kala (time)', sanskrit: 'काल', meaning: 'Time', group: 'maya', shaiva: 10, about: 'The eternal now shrinks to past, present and future.' },
  { id: 'niyati', name: 'Niyati', sanskrit: 'नियति', meaning: 'Necessity, order', group: 'maya', shaiva: 11, about: 'Freedom shrinks to being bound by cause and effect, place and form.' },
  { id: 'purusha', name: 'Purusha', sanskrit: 'पुरुष', meaning: 'Spirit, the conscious self', group: 'root', shaiva: 12, samkhya: 25, about: 'In Samkhya, the pure witness: countless, eternal, never acting, only watching. It is the “twenty-fifth”, outside the twenty-four that come from matter. For the Shaivas, it is consciousness wrapped in the five cloaks.' },
  { id: 'prakriti', name: 'Prakriti', sanskrit: 'प्रकृति', meaning: 'Primal matter', group: 'root', shaiva: 13, samkhya: 1, about: 'Unmanifest nature (pradhana, avyakta): the three gunas in perfect balance. When the balance is disturbed, the world unfolds from it.' },
  { id: 'buddhi', name: 'Buddhi (Mahat)', sanskrit: 'बुद्धि', meaning: 'Intellect, “the great”', group: 'inner', shaiva: 14, samkhya: 2, about: 'The first product of matter: the faculty that decides and discerns. Cosmically it is called Mahat, “the great one”.' },
  { id: 'ahamkara', name: 'Ahamkara', sanskrit: 'अहंकार', meaning: 'The I-maker', group: 'inner', shaiva: 15, samkhya: 3, about: 'The sense of “I” and “mine”. From its sattvic side come mind and the ten organs; from its tamasic side the subtle elements.' },
  { id: 'manas', name: 'Manas', sanskrit: 'मनस्', meaning: 'Mind', group: 'inner', shaiva: 16, samkhya: 4, about: 'The mind that gathers what the senses bring, sorts it and passes it on: an organ of both knowing and action.' },
  { id: 'shrotra', name: 'Shrotra', sanskrit: 'श्रोत्र', meaning: 'Hearing', group: 'sense', shaiva: 17, samkhya: 5, element: 0, about: 'The power of the ear, which grasps sound.' },
  { id: 'tvak', name: 'Tvak', sanskrit: 'त्वक्', meaning: 'Touch', group: 'sense', shaiva: 18, samkhya: 6, element: 1, about: 'The power of the skin, which grasps touch.' },
  { id: 'chakshus', name: 'Chakshus', sanskrit: 'चक्षुस्', meaning: 'Sight', group: 'sense', shaiva: 19, samkhya: 7, element: 2, about: 'The power of the eye, which grasps form and colour.' },
  { id: 'rasana', name: 'Rasana', sanskrit: 'रसना', meaning: 'Taste', group: 'sense', shaiva: 20, samkhya: 8, element: 3, about: 'The power of the tongue, which grasps taste.' },
  { id: 'ghrana', name: 'Ghrana', sanskrit: 'घ्राण', meaning: 'Smell', group: 'sense', shaiva: 21, samkhya: 9, element: 4, about: 'The power of the nose, which grasps smell.' },
  { id: 'vak', name: 'Vak', sanskrit: 'वाक्', meaning: 'Speech', group: 'action', shaiva: 22, samkhya: 10, element: 0, about: 'The power of speaking.' },
  { id: 'pani', name: 'Pani', sanskrit: 'पाणि', meaning: 'Grasping (hands)', group: 'action', shaiva: 23, samkhya: 11, element: 1, about: 'The power of taking hold.' },
  { id: 'pada', name: 'Pada', sanskrit: 'पाद', meaning: 'Moving (feet)', group: 'action', shaiva: 24, samkhya: 12, element: 2, about: 'The power of going.' },
  { id: 'payu', name: 'Payu', sanskrit: 'पायु', meaning: 'Excretion', group: 'action', shaiva: 25, samkhya: 13, element: 4, about: 'The power of letting go.' },
  { id: 'upastha', name: 'Upastha', sanskrit: 'उपस्थ', meaning: 'Generation', group: 'action', shaiva: 26, samkhya: 14, element: 3, about: 'The power of procreation and pleasure.' },
  { id: 'shabda', name: 'Shabda', sanskrit: 'शब्द', meaning: 'Sound', group: 'subtle', shaiva: 27, samkhya: 15, element: 0, about: 'Sound as pure quality, the subtle root of space.' },
  { id: 'sparsha', name: 'Sparsha', sanskrit: 'स्पर्श', meaning: 'Touch', group: 'subtle', shaiva: 28, samkhya: 16, element: 1, about: 'Touch as pure quality, the subtle root of air.' },
  { id: 'rupa', name: 'Rupa', sanskrit: 'रूप', meaning: 'Form, colour', group: 'subtle', shaiva: 29, samkhya: 17, element: 2, about: 'Form as pure quality, the subtle root of fire.' },
  { id: 'rasa', name: 'Rasa', sanskrit: 'रस', meaning: 'Taste', group: 'subtle', shaiva: 30, samkhya: 18, element: 3, about: 'Taste as pure quality, the subtle root of water.' },
  { id: 'gandha', name: 'Gandha', sanskrit: 'गन्ध', meaning: 'Smell', group: 'subtle', shaiva: 31, samkhya: 19, element: 4, about: 'Smell as pure quality, the subtle root of earth.' },
  { id: 'akasha', name: 'Akasha', sanskrit: 'आकाश', meaning: 'Space, ether', group: 'gross', shaiva: 32, samkhya: 20, element: 0, about: 'The first great element: the room in which everything is, carrying sound.' },
  { id: 'vayu', name: 'Vayu', sanskrit: 'वायु', meaning: 'Air', group: 'gross', shaiva: 33, samkhya: 21, element: 1, about: 'Motion and touch, with the sound of space.' },
  { id: 'agni', name: 'Agni (Tejas)', sanskrit: 'अग्नि', meaning: 'Fire, light', group: 'gross', shaiva: 34, samkhya: 22, element: 2, about: 'Heat and visible form, with sound and touch.' },
  { id: 'apas', name: 'Apas (Jala)', sanskrit: 'आपः', meaning: 'Water', group: 'gross', shaiva: 35, samkhya: 23, element: 3, about: 'Fluidity and taste, with sound, touch and form.' },
  { id: 'prithvi', name: 'Prithvi', sanskrit: 'पृथिवी', meaning: 'Earth', group: 'gross', shaiva: 36, samkhya: 24, element: 4, about: 'Solidity and smell, carrying all five qualities: the densest element.' },
];

/** The five elements and what the tradition pairs with each. */
export const fiveElements: {
  name: string;
  sanskrit: string;
  english: string;
  quality: string;
  sense: string;
  action: string;
  carries: number;
  chakra: string;
  dosha: string;
  temple: { name: string; to: string };
}[] = [
  { name: 'Akasha', sanskrit: 'आकाश', english: 'Space', quality: 'Sound', sense: 'Ear', action: 'Speech', carries: 1, chakra: 'Vishuddha (throat)', dosha: 'Vata', temple: { name: 'Chidambaram', to: '#/places?p=chidambaram' } },
  { name: 'Vayu', sanskrit: 'वायु', english: 'Air', quality: 'Touch', sense: 'Skin', action: 'Hands', carries: 2, chakra: 'Anahata (heart)', dosha: 'Vata', temple: { name: 'Srikalahasti', to: '#/places?p=srikalahasti' } },
  { name: 'Agni', sanskrit: 'अग्नि', english: 'Fire', quality: 'Form', sense: 'Eye', action: 'Feet', carries: 3, chakra: 'Manipura (navel)', dosha: 'Pitta', temple: { name: 'Tiruvannamalai', to: '#/places?p=arunachaleswarar' } },
  { name: 'Apas', sanskrit: 'आपः', english: 'Water', quality: 'Taste', sense: 'Tongue', action: 'Generation', carries: 4, chakra: 'Svadhishthana (sacrum)', dosha: 'Pitta and Kapha', temple: { name: 'Tiruvanaikaval', to: '#/places?p=jambukeswarar' } },
  { name: 'Prithvi', sanskrit: 'पृथिवी', english: 'Earth', quality: 'Smell', sense: 'Nose', action: 'Excretion', carries: 5, chakra: 'Muladhara (root)', dosha: 'Kapha', temple: { name: 'Kanchipuram', to: '#/places?p=ekambareswarar' } },
];

/** How many realities? Each school’s count. */
export const counts: { school: string; count: string; what: string; to?: string }[] = [
  { school: 'Advaita Vedanta', count: '1', what: 'Brahman alone is real. The tattvas describe the world as it appears, not as it ultimately is.', to: '#/acharyas?d=advaita' },
  { school: 'Dvaita', count: '2', what: 'Two kinds of reality, independent (Vishnu) and dependent (all else), sorted into ten categories.', to: '#/dvaita' },
  { school: 'Vishishtadvaita', count: '3', what: 'The Lord, souls and matter (tattva-traya), the last two his body.', to: '#/vishishtadvaita' },
  { school: 'Jainism', count: '7', what: 'Soul, non-soul, the inflow of karma, bondage, stopping the inflow, shedding karma, liberation (nine with merit and demerit).', to: '#/darshanas' },
  { school: 'Nyaya-Vaisheshika', count: '9', what: 'Nine substances: earth, water, fire, air, space, time, direction, self and mind, within six (later seven) categories.', to: '#/darshanas?d=vaisheshika' },
  { school: 'Samkhya and Yoga', count: '25', what: 'Spirit and primal matter, with the twenty-three that unfold from matter. Yoga adds Ishvara as a special spirit; some count him as a twenty-sixth.', to: '#/darshanas?d=samkhya' },
  { school: 'Shaiva and Shakta', count: '36', what: 'Samkhya’s twenty-five, with eleven above them: how Shiva’s consciousness limits itself.', to: '#/trika' },
];

/** The three gunas. */
export const gunas: { name: string; sanskrit: string; nature: string; colour: string; inUs: string }[] = [
  { name: 'Sattva', sanskrit: 'सत्त्व', nature: 'Light, clarity, balance', colour: 'White', inUs: 'Calm, understanding, contentment' },
  { name: 'Rajas', sanskrit: 'रजस्', nature: 'Energy, motion, passion', colour: 'Red', inUs: 'Desire, effort, restlessness, pain' },
  { name: 'Tamas', sanskrit: 'तमस्', nature: 'Weight, inertia, darkness', colour: 'Dark', inUs: 'Dullness, sleep, confusion' },
];

export const tattvaVerses: { deva: string; iast: string; meaning: string; cite: string; source: Source }[] = [
  {
    deva: 'तस्माद्वा एतस्मादात्मन आकाशः सम्भूतः । आकाशाद्वायुः । वायोरग्निः । अग्नेरापः । अद्भ्यः पृथिवी ।',
    iast: 'tasmād vā etasmād ātmana ākāśaḥ sambhūtaḥ, ākāśād vāyuḥ, vāyor agniḥ, agner āpaḥ, adbhyaḥ pṛthivī',
    meaning: '“From this Self space arose; from space, air; from air, fire; from fire, water; from water, earth.”',
    cite: 'Taittiriya Upanishad 2.1',
    source: src.taittiriyaVartika2_1,
  },
  {
    deva: 'सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः',
    iast: 'sattvaṃ rajas tama iti guṇāḥ prakṛti-sambhavāḥ',
    meaning: '“Sattva, rajas and tamas: these gunas, born of prakriti, bind the undying embodied self to the body.”',
    cite: 'Bhagavad Gita 14.5',
    source: src.gitaVaishnava,
  },
];

export const tattvaSources: Source[] = [
  src.defTattva,
  src.conceptTwentyFive,
  src.samkhyaTwentyFive,
  src.samkhyaTwentyFour,
  src.samkhyaThirtyEight,
  src.samkhyaKarikaIntro,
  src.dgSamkhyaTexts,
  src.thirtySixCidvilasa,
  src.ksThirtySix,
  src.ksTattvas,
  src.taittiriya,
  src.taittiriyaVartika2_1,
  src.charakaCategories,
  defn('tanmatra', 'Tanmatra'),
  defn('mahabhuta', 'Mahabhuta'),
  defn('guna', 'Guna'),
  defn('pancabhuta', 'Panchabhuta'),
];
