import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— Kashmir Shaivism (Trika) ——————————————————————— */

/** Short aphorisms that carry the whole system. */
export const trikaVerses: { deva: string; iast: string; meaning: string; cite: string; source: Source }[] = [
  { deva: 'चैतन्यमात्मा', iast: 'caitanyam ātmā', meaning: 'Consciousness is the Self.', cite: 'Shiva Sutras 1.1', source: defn('shivasutra', 'Shiva Sutra') },
  { deva: 'ज्ञानं बन्धः', iast: 'jñānaṃ bandhaḥ', meaning: 'Limited knowing is bondage.', cite: 'Shiva Sutras 1.2', source: defn('shivasutra', 'Shiva Sutra') },
  { deva: 'नर्तक आत्मा', iast: 'nartaka ātmā', meaning: 'The Self is a dancer: it plays every role on the stage of the world.', cite: 'Shiva Sutras 3.9', source: defn('shivasutra', 'Shiva Sutra') },
  {
    deva: 'चितिः स्वतन्त्रा विश्वसिद्धिहेतुः',
    iast: 'citiḥ svatantrā viśvasiddhi-hetuḥ',
    meaning: 'Consciousness, in her freedom, is the cause of the universe.',
    cite: 'Kshemaraja, Pratyabhijnahridayam 1',
    source: src.ksPinnacle,
  },
  {
    deva: 'स्वेच्छया स्वभित्तौ विश्वमुन्मीलयति',
    iast: 'svecchayā svabhittau viśvam unmīlayati',
    meaning: 'By her own will she unfolds the universe on her own screen.',
    cite: 'Kshemaraja, Pratyabhijnahridayam 2',
    source: src.ksPinnacle,
  },
];

/** The key ideas, in the order a newcomer needs them. */
export const trikaIdeas: { term: string; sanskrit: string; meaning: string; about: string }[] = [
  {
    term: 'Prakasha',
    sanskrit: 'प्रकाश',
    meaning: 'Light',
    about: 'Consciousness as the light by which everything appears. Nothing can exist without appearing, so everything is within this light.',
  },
  {
    term: 'Vimarsha',
    sanskrit: 'विमर्श',
    meaning: 'Self-awareness',
    about: 'The light knows itself as “I” (aham). A crystal reflects but does not know it; Shiva reflects and knows. Vimarsha is Shakti, and it is what makes consciousness alive rather than a blank witness.',
  },
  {
    term: 'Svatantrya',
    sanskrit: 'स्वातन्त्र्य',
    meaning: 'Absolute freedom',
    about: 'Shiva is free to do anything, even to hide from himself. The whole universe, bondage included, is an act of this freedom, not a mistake.',
  },
  {
    term: 'Spanda',
    sanskrit: 'स्पन्द',
    meaning: 'Vibration, pulse',
    about: 'Consciousness is never still like a stone: it throbs with a subtle movement that is not movement in space. Every thought and feeling rides on it, and catching it is a way in.',
  },
  {
    term: 'Abhasa',
    sanskrit: 'आभास',
    meaning: 'Shining forth, manifestation',
    about: 'Things are Shiva’s own appearances, like images in a mirror, where the mirror is Shiva himself. They are real as appearances of consciousness, not illusions to be dismissed.',
  },
  {
    term: 'Pratyabhijna',
    sanskrit: 'प्रत्यभिज्ञा',
    meaning: 'Recognition',
    about: 'Nothing new is gained in liberation: one recognises what was always so, “I am Shiva”, as one says “this is that Chaitra” on meeting someone known before. The classic image: a woman who meets the lover she has longed for, but feels nothing until she recognises him.',
  },
  {
    term: 'Shaktipata',
    sanskrit: 'शक्तिपात',
    meaning: 'Descent of power, grace',
    about: 'Grace falls from Shiva, often through the guru, and cannot be earned. Abhinavagupta ranks it in nine intensities, from the most intense (immediate liberation) to the mildest (a slow ripening).',
  },
];

/** The five powers of Shiva and the pure tattva in which each predominates. */
export const fiveShaktis: { name: string; sanskrit: string; power: string; tattva: string }[] = [
  { name: 'Chit', sanskrit: 'चित्', power: 'Consciousness', tattva: 'Shiva' },
  { name: 'Ananda', sanskrit: 'आनन्द', power: 'Bliss', tattva: 'Shakti' },
  { name: 'Iccha', sanskrit: 'इच्छा', power: 'Will', tattva: 'Sadashiva' },
  { name: 'Jnana', sanskrit: 'ज्ञान', power: 'Knowing', tattva: 'Ishvara' },
  { name: 'Kriya', sanskrit: 'क्रिया', power: 'Action', tattva: 'Shuddhavidya' },
];

/** Shiva’s five acts (pancha-kritya). Kshemaraja (Pratyabhijnahridayam 10) says the individual performs the same five. */
export const fiveActs: { name: string; sanskrit: string; act: string; inUs: string }[] = [
  { name: 'Srishti', sanskrit: 'सृष्टि', act: 'Emission', inUs: 'A perception arises' },
  { name: 'Sthiti', sanskrit: 'स्थिति', act: 'Maintenance', inUs: 'It is held and enjoyed' },
  { name: 'Samhara', sanskrit: 'संहार', act: 'Withdrawal', inUs: 'It dissolves back into awareness' },
  { name: 'Tirodhana', sanskrit: 'तिरोधान', act: 'Concealment', inUs: 'Its root in consciousness is forgotten' },
  { name: 'Anugraha', sanskrit: 'अनुग्रह', act: 'Grace', inUs: 'All is recognised as one’s own Self' },
];

export interface TattvaBand {
  id: 'shuddha' | 'mishra' | 'ashuddha';
  name: string;
  sanskrit: string;
  about: string;
  tattvas: { n: string; name: string; note: string }[];
}

/** The 36 tattvas, from Shiva down to earth. The lowest 25 are Samkhya’s. */
export const tattvaBands: TattvaBand[] = [
  {
    id: 'shuddha',
    name: 'The pure order',
    sanskrit: 'शुद्ध अध्वा',
    about: 'Universal experience. The “I” and the “this” are not yet separate.',
    tattvas: [
      { n: '1', name: 'Shiva', note: 'Pure “I”, consciousness alone' },
      { n: '2', name: 'Shakti', note: 'Its power and bliss; the first stir' },
      { n: '3', name: 'Sadashiva', note: '“I am this”: the “I” predominates (will)' },
      { n: '4', name: 'Ishvara', note: '“This am I”: the “this” predominates (knowing)' },
      { n: '5', name: 'Shuddhavidya', note: '“I am I, this is this”, held in balance (action)' },
    ],
  },
  {
    id: 'mishra',
    name: 'Maya and her five sheaths',
    sanskrit: 'माया कञ्चुक',
    about: 'Shiva limits himself. Maya splits subject from object; the five kanchukas (“cloaks”) shrink each of his powers.',
    tattvas: [
      { n: '6', name: 'Maya', note: 'The power that makes difference' },
      { n: '7', name: 'Kala', note: 'All-doing shrinks to doing a little' },
      { n: '8', name: 'Vidya', note: 'All-knowing shrinks to knowing a little' },
      { n: '9', name: 'Raga', note: 'Fullness shrinks to wanting this or that' },
      { n: '10', name: 'Kala (time)', note: 'Eternity shrinks to past, present and future' },
      { n: '11', name: 'Niyati', note: 'Freedom shrinks to cause, place and order' },
    ],
  },
  {
    id: 'ashuddha',
    name: 'The impure order',
    sanskrit: 'अशुद्ध अध्वा',
    about: 'The bound soul and its world: the 25 tattvas of Samkhya, here seen as Shiva’s own contraction.',
    tattvas: [
      { n: '12', name: 'Purusha', note: 'The limited subject' },
      { n: '13', name: 'Prakriti', note: 'The three gunas in balance' },
      { n: '14–16', name: 'Buddhi · Ahamkara · Manas', note: 'Intellect, ego, mind' },
      { n: '17–21', name: 'Five senses', note: 'Hearing, touch, sight, taste, smell' },
      { n: '22–26', name: 'Five organs of action', note: 'Speech, hands, feet, excretion, generation' },
      { n: '27–31', name: 'Five tanmatras', note: 'Sound, touch, form, taste, smell as subtle elements' },
      { n: '32–36', name: 'Five mahabhutas', note: 'Space, air, fire, water, earth' },
    ],
  },
];

/** The three impurities that bind. */
export const threeMalas: { name: string; sanskrit: string; level: string; about: string }[] = [
  { name: 'Anava mala', sanskrit: 'आणवमल', level: 'The subtlest', about: 'The feeling of being small and incomplete (apurnata), an atom (anu). The root of the other two, removed only by grace.' },
  { name: 'Mayiya mala', sanskrit: 'मायीयमल', level: 'Subtle', about: 'The sense of difference: “I am this, and that is other than me”.' },
  { name: 'Karma mala', sanskrit: 'कार्ममल', level: 'Gross', about: '“I am the doer”: acting for one’s own sake, which binds the soul to the fruits of its acts.' },
];

/** The seven perceivers (pramatri), from Shiva down to the fully bound soul. */
export const sevenPerceivers: { name: string; sanskrit: string; malas: string; level: string }[] = [
  { name: 'Shiva', sanskrit: 'शिव', malas: 'None', level: 'Shiva and Shakti' },
  { name: 'Mantramaheshvara', sanskrit: 'मन्त्रमहेश्वर', malas: 'None', level: 'Sadashiva' },
  { name: 'Mantreshvara', sanskrit: 'मन्त्रेश्वर', malas: 'None', level: 'Ishvara' },
  { name: 'Mantra', sanskrit: 'मन्त्र', malas: 'None', level: 'Shuddhavidya' },
  { name: 'Vijnanakala', sanskrit: 'विज्ञानाकल', malas: 'Anava', level: 'Between Shuddhavidya and Maya' },
  { name: 'Pralayakala', sanskrit: 'प्रलयाकल', malas: 'Anava, mayiya', level: 'Maya: the state of deep sleep and dissolution' },
  { name: 'Sakala', sanskrit: 'सकल', malas: 'Anava, mayiya, karma', level: 'Purusha to earth: embodied beings like us' },
];

/** The means (upaya). The Shiva Sutras’ three chapters teach the last three in turn. */
export const upayas: { name: string; sanskrit: string; power: string; how: string; example: string }[] = [
  {
    name: 'Anupaya',
    sanskrit: 'अनुपाय',
    power: 'Beyond means (grace)',
    how: 'No practice at all. A single word of the guru, or pure grace, and one simply is what one is.',
    example: 'Recognition on hearing “you are Shiva”, once, fully.',
  },
  {
    name: 'Shambhavopaya',
    sanskrit: 'शाम्भवोपाय',
    power: 'Iccha, will',
    how: 'Resting in the pure “I” before any thought arises; the world is seen as a reflection in it. Shiva Sutras, chapter 1.',
    example: 'Catching the gap between two thoughts, and staying.',
  },
  {
    name: 'Shaktopaya',
    sanskrit: 'शाक्तोपाय',
    power: 'Jnana, knowing',
    how: 'Purifying thought itself: dwelling on the pure thought “I am Shiva” (bhavana) until it replaces the thought “I am this body”. Shiva Sutras, chapter 2.',
    example: 'Contemplating mantra as consciousness, not as sound.',
  },
  {
    name: 'Anavopaya',
    sanskrit: 'आणवोपाय',
    power: 'Kriya, action',
    how: 'Working through the limited self: breath, the body’s centres, mantra repetition, visualisation, ritual. Shiva Sutras, chapter 3.',
    example: 'Watching the point where the breath turns, as in the Vijnana Bhairava.',
  },
];

/** The schools that the Trika gathered together. */
export const ksSchools: { id: string; name: string; sanskrit: string; meaning: string; founder: string; texts: string; about: string; sources: Source[] }[] = [
  {
    id: 'kula',
    name: 'Kula',
    sanskrit: 'कुल',
    meaning: '“Family”, the totality',
    founder: 'Traditionally Macchanda (Matsyendranatha)',
    texts: 'Kula tantras; Tantraloka ch. 29',
    about: 'The oldest strand. Kula is the whole, the family of Shakti’s powers, and the body is its seat. Its rituals, once secret and transgressive, were read by Abhinavagupta as ways to the bliss of Shiva–Shakti in union.',
    sources: [src.ksSchools],
  },
  {
    id: 'krama',
    name: 'Krama',
    sanskrit: 'क्रम',
    meaning: '“Sequence”',
    founder: 'Jnananetra (Shivananda), c. 9th century',
    texts: 'Kramastotra; Tantraloka ch. 4',
    about: 'Shakti-centred. Every act of knowing passes through a sequence: arising, lasting, withdrawal and the nameless state beyond. These phases are worshipped as a cycle of Kalis, the goddess as the devourer of time.',
    sources: [src.ksKrama, src.ksShaktiKrama],
  },
  {
    id: 'spanda',
    name: 'Spanda',
    sanskrit: 'स्पन्द',
    meaning: '“Vibration”',
    founder: 'Vasugupta and his pupil Kallata, 9th century',
    texts: 'Shiva Sutras; Spanda Karika; Kshemaraja’s Spanda-nirnaya',
    about: 'Reality is the pulse of Shiva’s awareness. The Spanda Karika (1.22) points to where it shows plainly: in great anger or joy, in the bewildered “what shall I do?”, or in running for one’s life, when the ordinary mind stops.',
    sources: [src.ksSpanda, src.ksShaktiSpanda],
  },
  {
    id: 'pratyabhijna',
    name: 'Pratyabhijna',
    sanskrit: 'प्रत्यभिज्ञा',
    meaning: '“Recognition”',
    founder: 'Somananda, systematised by Utpaladeva, c. 900–975',
    texts: 'Shivadrishti; Ishvara-pratyabhijna-karika; Abhinavagupta’s Vimarshini',
    about: 'The philosophy: argued with Buddhist and Nyaya opponents in their own terms. The Self cannot be proved, since it does all proving; it can only be recognised.',
    sources: [src.ksPinnacle, src.ksOrigin],
  },
  {
    id: 'trika',
    name: 'Trika',
    sanskrit: 'त्रिक',
    meaning: '“The triad”',
    founder: 'Rooted in the Malinivijayottara Tantra; synthesised by Abhinavagupta',
    texts: 'Malinivijayottara, Siddhayogeshvarimata; Tantraloka, Tantrasara, Paratrishika-vivarana',
    about: 'In the narrow sense, the Tantric cult of three goddesses, Para, Parapara and Apara. In the broad sense, the name for the whole synthesis, in which Abhinavagupta set Kula, Krama, Spanda and Pratyabhijna in one frame.',
    sources: [src.ksSchools, src.tantralokaSanskrit],
  },
];

/** Why “Trika”: the triads the tradition names. */
export const triads: { name: string; items: [string, string, string]; about: string }[] = [
  { name: 'Shiva · Shakti · Nara', items: ['Shiva', 'Shakti', 'Nara (the soul)'], about: 'The Lord, his power, and the bound individual: three that are one.' },
  { name: 'Para · Parapara · Apara', items: ['Para', 'Parapara', 'Apara'], about: 'The three goddesses of the Trika cult: supreme, supreme-and-lower, and lower; unity, unity-in-difference, and difference.' },
  { name: 'Iccha · Jnana · Kriya', items: ['Will', 'Knowing', 'Action'], about: 'Shiva’s three chief powers, and the three means (shambhava, shakta, anava).' },
  { name: 'The three root Tantras', items: ['Siddhayogeshvarimata', 'Namaka', 'Malinivijayottara'], about: 'According to Abhinavagupta, the Trika rests on these three, and the Malini is its essence.' },
];

/** The lineage, oldest first. Dates are approximate. */
export const ksTeachers: { name: string; sanskrit: string; dates: string; role: string; works: string; acharyaId?: string }[] = [
  { name: 'Vasugupta', sanskrit: 'वसुगुप्त', dates: 'c. 875–925', role: 'Found the Shiva Sutras, tradition says inscribed on a rock on Mahadeva mountain, revealed to him in a dream', works: 'Shiva Sutras; the Spanda Karika is his or Kallata’s' },
  { name: 'Kallata', sanskrit: 'कल्लट', dates: 'c. 900', role: 'Vasugupta’s disciple; spread the Spanda teaching', works: 'Spanda-vritti' },
  { name: 'Somananda', sanskrit: 'सोमानन्द', dates: 'c. 900–950', role: 'First philosopher of recognition', works: 'Shivadrishti' },
  { name: 'Utpaladeva', sanskrit: 'उत्पलदेव', dates: 'c. 925–975', role: 'Somananda’s disciple (son of Udayakara); systematised the Pratyabhijna', works: 'Ishvara-pratyabhijna-karika with his own commentaries; Shivastotravali, hymns to Shiva' },
  { name: 'Lakshmanagupta', sanskrit: 'लक्ष्मणगुप्त', dates: 'c. 950', role: 'Utpaladeva’s disciple; taught Abhinavagupta the Pratyabhijna', works: '—' },
  { name: 'Abhinavagupta', sanskrit: 'अभिनवगुप्त', dates: 'c. 950–1016', role: 'The great synthesiser, who studied under many masters of every school; also the classic theorist of rasa in art', works: 'Tantraloka (37 chapters), Tantrasara, Ishvara-pratyabhijna-vimarshini, Paratrishika-vivarana, Abhinavabharati, Gitartha-samgraha', acharyaId: 'abhinavagupta' },
  { name: 'Kshemaraja', sanskrit: 'क्षेमराज', dates: 'c. 975–1050', role: 'Abhinavagupta’s leading disciple; made the teaching accessible', works: 'Pratyabhijnahridayam (20 sutras), Shiva-sutra-vimarshini, Spanda-nirnaya, commentary on the Svacchanda Tantra' },
  { name: 'Jayaratha', sanskrit: 'जयरथ', dates: 'c. 12th–13th century', role: 'Commentator whose gloss is the key to the Tantraloka', works: 'Tantraloka-viveka' },
  { name: 'Swami Lakshmanjoo', sanskrit: 'लक्ष्मणजू', dates: '1907–1991', role: 'Kashmiri master who kept the oral lineage alive in the 20th century', works: 'Talks and translations, taught near Srinagar' },
];

/** The main texts, grouped: revelation, then the teachers. */
export const ksTexts: { name: string; by: string; kind: 'Revealed' | 'Philosophy' | 'Manual' | 'Hymn'; about: string }[] = [
  { name: 'Shiva Sutras', by: 'Revealed to Vasugupta', kind: 'Revealed', about: '77 aphorisms in three chapters (22, 10 and 45), one for each means: shambhava, shakta, anava.' },
  { name: 'Vijnana Bhairava Tantra', by: 'Held to be part of the Rudrayamala', kind: 'Revealed', about: 'Bhairava answers Bhairavi with 112 methods (dharanas): breath, the senses, emptiness, sound, love, even the moment a sneeze, a fright or hunger ends.' },
  { name: 'Malinivijayottara Tantra', by: 'A Bhairava tantra', kind: 'Revealed', about: 'The root scripture of Trika, taken by Abhinavagupta as the essence of all the Tantras.' },
  { name: 'Svacchanda Tantra', by: 'A Bhairava tantra', kind: 'Revealed', about: 'A vast ritual tantra, read in a non-dual light in Kshemaraja’s commentary.' },
  { name: 'Spanda Karika', by: 'Vasugupta or Kallata', kind: 'Philosophy', about: 'About fifty verses on the pulse of consciousness.' },
  { name: 'Shivadrishti', by: 'Somananda', kind: 'Philosophy', about: '“The vision of Shiva”: the first philosophy of Shaiva non-dualism, and a critique of rival schools.' },
  { name: 'Ishvara-pratyabhijna-karika', by: 'Utpaladeva', kind: 'Philosophy', about: '“Verses on the recognition of the Lord”, the system’s central treatise.' },
  { name: 'Tantraloka', by: 'Abhinavagupta', kind: 'Manual', about: '“Light on the Tantras”: 37 chapters covering the whole of Trika theory and ritual.' },
  { name: 'Tantrasara', by: 'Abhinavagupta', kind: 'Manual', about: 'His own prose summary of the Tantraloka.' },
  { name: 'Pratyabhijnahridayam', by: 'Kshemaraja', kind: 'Manual', about: '“The heart of recognition”: 20 sutras, the usual first book.' },
  { name: 'Shivastotravali', by: 'Utpaladeva', kind: 'Hymn', about: 'Songs of longing and union, the devotional face of the system.' },
];

/** Side by side with Shankara’s Advaita, the other great non-dualism. */
export const vsAdvaita: { topic: string; trika: string; advaita: string }[] = [
  { topic: 'The Absolute', trika: 'Shiva: consciousness that is light and self-awareness (prakasha–vimarsha), full of power', advaita: 'Brahman: pure consciousness, without qualities or activity (nirguna)' },
  { topic: 'The world', trika: 'Real: Shiva’s own manifestation (abhasa)', advaita: 'Neither real nor unreal (mithya): an appearance on Brahman (vivarta)' },
  { topic: 'Maya', trika: 'A power of Shiva, his free self-limitation; the sixth tattva', advaita: 'Beginningless ignorance, indescribable as real or unreal' },
  { topic: 'Consciousness', trika: 'Active, dynamic, pulsing (spanda)', advaita: 'A silent, actionless witness (sakshi)' },
  { topic: 'Categories', trika: '36 tattvas', advaita: 'Brahman alone is real; the rest is superimposed' },
  { topic: 'Liberation', trika: 'Recognition: the world is embraced as one’s own Self', advaita: 'Knowledge: the world is seen through as appearance' },
  { topic: 'Path', trika: 'Grace and the four means; open to householders, and not bound by caste', advaita: 'Renunciation and study of the Upanishads, for the qualified (adhikari)' },
  { topic: 'Scripture', trika: 'The Shaiva Agamas and Bhairava Tantras', advaita: 'The Upanishads, the Gita and the Brahma Sutras' },
];

export const trikaSources: Source[] = [
  src.defKashmirShaivism,
  src.pratyabhijnaAdvaita,
  src.ksOrigin,
  src.ksSchools,
  src.ksPinnacle,
  src.ksOntology,
  src.ksMayaAssociates,
  src.ksTattvas,
  src.ksThirtySix,
  src.ksMalas,
  src.ksUpayas,
  src.ksPerceivers,
  src.ksKrama,
  src.ksSpanda,
  src.ksPrakashaVimarsha,
  src.tantralokaSanskrit,
  defn('shivasutra', 'Shiva Sutra'),
  defn('vasugupta', 'Vasugupta'),
  defn('vijnanabhairava', 'Vijnana Bhairava'),
  defn('pratyabhijna', 'Pratyabhijna'),
  defn('abhinavagupta', 'Abhinavagupta'),
  defn('anava-mala', 'Anava mala'),
  src.dasgupta5,
];
