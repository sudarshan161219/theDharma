import type { Source } from './types';
import { defn, src, type Evidence } from './sources';
import { ev } from './smriti';

export interface DeviForm {
  id: string;
  name: string;
  sanskrit: string;
  /** What the name means. */
  meaning: string;
  /** Traditional iconography: colour, mount, what she holds. */
  form: string;
  story: string;
  /** Extra line, e.g. the Navaratri day or the Shri Vidya link. */
  aside?: string;
  sources: Source[];
  evidence?: Evidence[];
}

/** The three episodes (charitas) of the Devi Mahatmya and their presiding forms. */
export const charitas: { n: number; form: string; demon: string; cantos: string; text: string; sources: Source[] }[] = [
  {
    n: 1,
    form: 'Mahakali (Yoganidra)',
    demon: 'Madhu and Kaitabha',
    cantos: 'Markandeya Purana 81',
    text: 'At the end of a kalpa, Vishnu sleeps on the cosmic ocean. Two demons born from the wax of his ears try to kill Brahma. Brahma praises Devi as Yoganidra, the sleep of Vishnu. She withdraws from Vishnu’s eyes, he wakes, and he slays the demons.',
    sources: [src.dmCanto81],
  },
  {
    n: 2,
    form: 'Mahalakshmi (Chandika)',
    demon: 'Mahishasura',
    cantos: 'Markandeya Purana 82–84',
    text: 'The buffalo-demon Mahisha drives the devas from heaven. From their blazing anger a single light arises and takes the form of Devi. Each deva gives her his weapon, and she rides her lion into battle and slays Mahisha. This is Durga as Mahishasuramardini.',
    sources: [src.dmCanto82, src.dmCanto83],
  },
  {
    n: 3,
    form: 'Mahasarasvati (Ambika / Kaushiki)',
    demon: 'Shumbha and Nishumbha',
    cantos: 'Markandeya Purana 85–92',
    text: 'Devi emerges from Parvati’s body as Kaushiki. From her brow springs Kali, who slays Chanda and Munda and so is called Chamunda. The Matrikas join the battle against Raktabija, and Kali drinks his blood so that no new demons can rise from it. At last Ambika slays Nishumbha and Shumbha.',
    sources: [src.dmCanto87, src.dmCanto88, src.dmCanto90],
  },
];

/** The seven Mothers who fight Raktabija (Markandeya Purana 88): each the shakti of a deva. */
export const matrikas: { name: string; of: string; mount: string }[] = [
  { name: 'Brahmani', of: 'Brahma', mount: 'Swan' },
  { name: 'Maheshvari', of: 'Shiva', mount: 'Bull' },
  { name: 'Kaumari', of: 'Skanda', mount: 'Peacock' },
  { name: 'Vaishnavi', of: 'Vishnu', mount: 'Garuda' },
  { name: 'Varahi', of: 'Varaha', mount: 'Buffalo' },
  { name: 'Narasimhi', of: 'Narasimha', mount: 'Lion' },
  { name: 'Aindri', of: 'Indra', mount: 'Elephant' },
];

/** Incarnations Devi promises in the Devi Mahatmya's closing hymn (Markandeya Purana 91). */
export const promisedIncarnations: { name: string; when: string; text: string }[] = [
  { name: 'Nanda / Vindhyavasini', when: 'In the 28th yuga of the Vaivasvata manvantara', text: 'Born to the cowherd Nanda and Yashoda, she will slay a second Shumbha and Nishumbha and dwell on the Vindhya mountains. This is the child exchanged for Krishna.' },
  { name: 'Raktadantika', when: 'Later', text: 'Taking a terrible form on earth, she will devour the demon descendants of Vipracitti, and her teeth will turn red as pomegranate flowers.' },
  { name: 'Shatakshi', when: 'After a hundred-year drought', text: 'Born of no womb, she will look upon the sages with a hundred eyes, and her tears will end the drought.' },
  { name: 'Shakambhari', when: 'The same age', text: 'She will feed the world with life-sustaining vegetables grown from her own body until the rains return.' },
  { name: 'Durga', when: 'The same age', text: 'She will slay the great demon Durgama, and so be called Durga.' },
  { name: 'Bhima', when: 'On the Himalaya', text: 'In a terrible form, to protect the sages, she will devour the rakshasas.' },
  { name: 'Bhramari', when: 'When Aruna troubles the three worlds', text: 'Taking the form of countless bees, she will slay the demon Aruna.' },
];

/** The nine Durgas of Navaratri, in the order named in the Devi Kavacha. */
export const navadurga: DeviForm[] = [
  {
    id: 'shailaputri',
    name: 'Shailaputri',
    sanskrit: 'शैलपुत्री',
    meaning: 'Daughter of the mountain',
    form: 'Rides the bull Nandi; holds a trident and a lotus; crescent moon on her brow.',
    story: 'Sati, reborn as Parvati, daughter of Himavan, after giving up her body at Daksha’s sacrifice. She is Devi’s first step back towards Shiva.',
    aside: 'Day 1 of Navaratri',
    sources: [defn('shailaputri', 'Shailaputri'), src.defNavadurga],
  },
  {
    id: 'brahmacharini',
    name: 'Brahmacharini',
    sanskrit: 'ब्रह्मचारिणी',
    meaning: 'She who practises austerity',
    form: 'Walks barefoot in white; holds a rosary and a water-pot (kamandalu).',
    story: 'Parvati’s long penance to win Shiva, living for years on leaves and then on nothing at all (hence Aparna, “leafless”).',
    aside: 'Day 2 of Navaratri',
    sources: [src.defNavadurga, src.shivaPurana],
  },
  {
    id: 'chandraghanta',
    name: 'Chandraghanta',
    sanskrit: 'चन्द्रघण्टा',
    meaning: 'She with a bell-shaped half-moon',
    form: 'A half-moon shaped like a bell on her forehead; ten arms bearing weapons; rides a tiger or lion.',
    story: 'Devi as a warrior bride, ready for battle. The sound of her bell is said to drive away demons.',
    aside: 'Day 3 of Navaratri',
    sources: [src.defNavadurga],
    evidence: [ev.chandraghanta],
  },
  {
    id: 'kushmanda',
    name: 'Kushmanda',
    sanskrit: 'कूष्माण्डा',
    meaning: 'She of the cosmic egg (“little warm egg”)',
    form: 'Eight arms (Ashtabhuja); rides a lion; holds a pot of nectar, a rosary, a discus and other weapons.',
    story: 'Before creation, when all was darkness, she smiled and the cosmic egg (brahmanda) came into being. She is said to dwell in the core of the sun.',
    aside: 'Day 4 of Navaratri',
    sources: [src.defNavadurga],
  },
  {
    id: 'skandamata',
    name: 'Skandamata',
    sanskrit: 'स्कन्दमाता',
    meaning: 'Mother of Skanda',
    form: 'Holds the infant Skanda (Kartikeya) on her lap; lotuses in two hands; seated on a lion or a lotus.',
    story: 'Mother of Skanda, commander of the devas’ army, born to destroy the demon Taraka (Shiva Purana, Kumara-khanda).',
    aside: 'Day 5 of Navaratri',
    sources: [src.defNavadurga, src.shivaPurana],
  },
  {
    id: 'katyayani',
    name: 'Katyayani',
    sanskrit: 'कात्यायनी',
    meaning: 'Daughter of the sage Katyayana',
    form: 'Four arms, sword and lotus; rides a lion; radiant, fierce.',
    story: 'Born in Katyayana’s hermitage to slay Mahishasura. In the Bhagavata (10.22) the gopis of Vraja keep a month-long vow to Katyayani to win Krishna as their husband.',
    aside: 'Day 6 of Navaratri',
    sources: [src.defNavadurga, src.bhagavata],
    evidence: [ev.katyayani, ev.kinsariya],
  },
  {
    id: 'kalaratri',
    name: 'Kalaratri',
    sanskrit: 'कालरात्रि',
    meaning: 'Night of time: the dark night that ends all things',
    form: 'Dark as night, dishevelled hair, a necklace flashing like lightning; rides a donkey; holds a cleaver and an iron hook, while granting fearlessness.',
    story: 'The most terrifying of the nine, who destroys ignorance and demons. She is linked to the Kali who drank Raktabija’s blood. In the Devi Mahatmya’s hymns Devi is praised as Kalaratri.',
    aside: 'Day 7 of Navaratri',
    sources: [defn('kalaratri', 'Kalaratri'), src.dmCanto88],
  },
  {
    id: 'mahagauri',
    name: 'Mahagauri',
    sanskrit: 'महागौरी',
    meaning: 'The greatly radiant / very fair one',
    form: 'Brilliant white, in white garments; rides a white bull; holds a trident and a damaru.',
    story: 'After her austerities had darkened her body, Shiva bathed her in the Ganga and she shone white as the moon.',
    aside: 'Day 8 of Navaratri (Durga Ashtami)',
    sources: [src.defNavadurga],
    evidence: [ev.mahagauri],
  },
  {
    id: 'siddhidatri',
    name: 'Siddhidatri',
    sanskrit: 'सिद्धिदात्री',
    meaning: 'Giver of perfections (siddhis)',
    form: 'Seated on a lotus (or lion); holds discus, conch, mace and lotus; worshipped by devas, siddhas and sages.',
    story: 'She grants all eight siddhis. Tradition says Shiva received them through her grace, and half his body became hers as Ardhanarishvara.',
    aside: 'Day 9 of Navaratri (Maha Navami)',
    sources: [src.defNavadurga],
  },
];

/** The ten Mahavidyas (“great wisdoms”), in the commonly used order. */
export const mahavidyas: DeviForm[] = [
  {
    id: 'kali',
    name: 'Kali',
    sanskrit: 'काली',
    meaning: 'The black one; she who is Time (kala)',
    form: 'Dark, naked or clad in space, garland of heads, skirt of arms, tongue out; stands on the supine Shiva; holds a sword and a severed head, while blessing and granting fearlessness.',
    story: 'The first and foremost Mahavidya, Time itself, which devours all. In the Devi Mahatmya she springs from Ambika’s brow to slay Chanda, Munda and Raktabija.',
    sources: [src.defMahavidya, src.dmCanto87, src.dmCanto88],
    evidence: [ev.kaliKavacha, ev.kaliKarpura, ev.mahakali, ev.kinsariya],
  },
  {
    id: 'tara',
    name: 'Tara',
    sanskrit: 'तारा',
    meaning: 'She who carries across (the ocean of existence); the star',
    form: 'Blue, short, pot-bellied, standing on a corpse; holds a sword, scissors, a skull-cup and a blue lotus.',
    story: 'The saviour Devi, closely related to Kali but more motherly. Legend says she nursed Shiva after he drank the poison from the churning of the ocean. Her great seat is Tarapith in Bengal.',
    sources: [src.defMahavidya],
    evidence: [ev.taraRahasya, ev.taraSahasra, ev.ugratara],
  },
  {
    id: 'shodashi',
    name: 'Tripurasundari (Shodashi, Lalita)',
    sanskrit: 'त्रिपुरसुन्दरी',
    meaning: 'Most beautiful in the three worlds; the sixteen-year-old',
    form: 'Rosy-red, seated on Shiva on a throne whose legs are Brahma, Vishnu, Rudra and Ishvara; holds noose, goad, sugar-cane bow and five flower-arrows.',
    story: 'The supreme deity of Shri Vidya, worshipped in the Shri Chakra. The Lalita Sahasranama, her thousand names taught by Hayagriva to Agastya, is in the Brahmanda Purana.',
    aside: 'Linked to the Brahmanda Purana’s Lalitopakhyana',
    sources: [src.defMahavidya, src.brahmanda, src.mbhLalita],
    evidence: [ev.tripurasundari, ev.rajarajeshvari, ev.lalitaSahasranama, ev.balaTripura, ev.yoginihridaya],
  },
  {
    id: 'bhuvaneshvari',
    name: 'Bhuvaneshvari',
    sanskrit: 'भुवनेश्वरी',
    meaning: 'Queen of the worlds',
    form: 'Radiant as the rising sun, three-eyed, crowned with the crescent moon; holds a noose and goad, while blessing and granting fearlessness.',
    story: 'Devi as space itself, the field in which all worlds exist. The Devi Bhagavata’s Manidvipa, the island of jewels, is her abode.',
    sources: [src.defMahavidya, src.deviBhagavata],
    evidence: [ev.bhuvaneshvari, ev.bhuvaneshvariPanchanga],
  },
  {
    id: 'bhairavi',
    name: 'Bhairavi (Tripura Bhairavi)',
    sanskrit: 'भैरवी',
    meaning: 'The fearsome one',
    form: 'Red as a thousand rising suns, garland of heads, breasts smeared with blood; holds a rosary and a book, while blessing and granting fearlessness.',
    story: 'The fierce heat (tapas) of transformation, the fire that destroys and purifies. Consort of Bhairava.',
    sources: [src.defMahavidya],
    evidence: [ev.tripuraBhairavi],
  },
  {
    id: 'chhinnamasta',
    name: 'Chhinnamasta',
    sanskrit: 'छिन्नमस्ता',
    meaning: 'She whose head is severed',
    form: 'Holds her own severed head. Three streams of blood flow from her neck, one into her own mouth and two into the mouths of her attendants Dakini and Varnini. She stands on Kama, deva of love, and Rati.',
    story: 'The most startling image of the ten. It teaches self-sacrifice and the conquest of desire, and that life feeds on life. Her temple at Rajrappa, Jharkhand, is famous.',
    sources: [src.defMahavidya],
  },
  {
    id: 'dhumavati',
    name: 'Dhumavati',
    sanskrit: 'धूमावती',
    meaning: 'She who is made of smoke',
    form: 'An old widow, pale and ugly, in soiled white; sits in a horseless chariot bearing a crow banner; holds a winnowing basket.',
    story: 'Devi of the void that remains after dissolution, of poverty, loss and disappointment, and so a teacher of detachment. In one legend she is Sati who swallowed Shiva out of hunger.',
    sources: [src.defMahavidya, src.dhumavatiEssay],
  },
  {
    id: 'bagalamukhi',
    name: 'Bagalamukhi',
    sanskrit: 'बगलामुखी',
    meaning: 'She who paralyses (bridles) the enemy’s speech',
    form: 'Golden-yellow in yellow garments (hence Pitambara); pulls the tongue of a demon with one hand and raises a club with the other.',
    story: 'The power of stambhana, stopping. She stills the enemy and the mind’s chatter alike. The Pitambara Peeth at Datia is her famous shrine.',
    sources: [src.defMahavidya],
  },
  {
    id: 'matangi',
    name: 'Matangi',
    sanskrit: 'मातङ्गी',
    meaning: 'Daughter of the sage Matanga; the outcaste',
    form: 'Emerald-green, playing a vina, with a parrot; accepts leftover food (ucchishta) as offering.',
    story: 'A Tantric form of Sarasvati, devi of speech, music and learning, who embraces what orthodox purity rejects.',
    sources: [src.defMahavidya],
  },
  {
    id: 'kamala',
    name: 'Kamala',
    sanskrit: 'कमला',
    meaning: 'She of the lotus',
    form: 'Golden, seated on a lotus, bathed by four elephants pouring nectar (Gaja-Lakshmi).',
    story: 'Lakshmi as a Mahavidya: the fullness of prosperity, beauty and grace. She rose from the churning of the ocean.',
    sources: [src.defMahavidya],
    evidence: [ev.mahalakshmiKolhapur],
  },
];

/** Devi in inscriptions, oldest first. */
export const goddessInStone: Evidence[] = [
  ev.mothers,
  ev.pandurajja,
  ev.dadhimati,
  ev.navadurgaTemple,
  ev.kinsariya,
  ev.mahalakshmiKolhapur,
  ev.bhavaniBahal,
  ev.jvalamukhi,
  ev.kamakhya,
  ev.danteshwari,
];

export const deviSources: Source[] = [
  src.conceptDeviMahatmya,
  src.dmCanto91,
  src.dmCanto93,
  src.defNavadurga,
  src.conceptNavadurga,
  src.navadurgaStotra,
  src.defNavaratri,
  src.defMahavidya,
  src.mahabhagavata,
  src.upaMahabhagavata,
  src.mbhIconography,
  src.mbhKamakhya,
  src.shivaShatakshi,
  src.defShakambhari,
  src.bhramariEssay,
  src.upaShaktaIntro,
  src.defDurga,
  src.smriti,
];
