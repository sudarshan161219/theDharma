import type { Source } from './types';
import { defn, src } from './sources';

/** A public-domain (CC0) museum image, shown straight from the museum's own server. */
export interface Artwork {
  title: string;
  date: string;
  place: string;
  medium: string;
  img: string;
  museum: 'The Met' | 'Cleveland Museum of Art';
  url: string;
}

const met = (id: number, file: string, title: string, date: string, place: string, medium: string): Artwork => ({
  title,
  date,
  place,
  medium,
  img: `https://images.metmuseum.org/CRDImages/${file}`,
  museum: 'The Met',
  url: `https://www.metmuseum.org/art/collection/search/${id}`,
});

const cma = (acc: string, title: string, date: string, place: string, medium: string): Artwork => ({
  title,
  date,
  place,
  medium,
  img: `https://openaccess-cdn.clevelandart.org/${acc}/${acc}_web.jpg`,
  museum: 'Cleveland Museum of Art',
  url: `https://clevelandart.org/art/${acc}`,
});

export const art = {
  linga: met(37446, 'as/web-large/1987_142_331.jpg', 'Linga', '11th–12th century', 'Nepal, Kathmandu Valley', 'Bronze'),
  ekamukha: met(38250, 'as/web-large/DT6118.jpg', 'Linga with Face of Shiva (Ekamukhalinga)', '7th century', 'Kashmir', 'Stone'),
  ganga: cma('1966.119', 'River Goddess Ganga', 'c. 700', 'Mathura, Uttar Pradesh', 'Sandstone'),
  surya: met(38943, 'as/web-large/1987_142_334_F_sf.jpg', 'Surya with Attendants', 'c. 9th century', 'Bangladesh', 'Bronze'),
  govardhan: met(448183, 'is/web-large/DP231327.jpg', 'Krishna Holds Up Mount Govardhan, folio from a Harivamsha', 'c. 1590–95', 'Mughal court (present-day Pakistan)', 'Ink, opaque watercolour and gold on paper'),
  churning: met(37989, 'as/web-large/DP152318.jpg', 'The Churning of the Ocean of Milk', 'c. 1780–90', 'Mandi, Punjab Hills', 'Ink and opaque watercolour on paper'),
  narasimha: met(38470, 'as/web-large/1987_142_90.jpg', 'Narasimha Slaying Hiranyakashipu', '6th–7th century', 'Kashmir or Pakistan', 'Stone'),
  ganesha: met(37397, 'as/web-large/DP148767.jpg', 'Ganesha', '12th century', 'Tamil Nadu', 'Copper alloy'),
  varaha: met(74648, 'as/web-large/DP166070.jpg', 'Varaha Triumphant', 'late 18th century', 'Sawar, Rajasthan', 'Ink and ink wash on paper'),
  hanuman: met(38945, 'as/web-large/DT5250.jpg', 'Hanuman Conversing', '11th century', 'Tamil Nadu', 'Copper alloy'),
  matsya: cma('2003.102', 'Matsya, Fish Avatara of Vishnu (Kalighat painting)', 'c. 1890', 'Kalighat, Kolkata', 'Gum tempera, ink and tin on paper'),
  garuda: met(38134, 'as/web-large/DT7595.jpg', 'Garuda Seated in Royal Ease', '8th–9th century', 'Tamil Nadu', 'Granite'),
  vishnu: met(38517, 'as/web-large/DT5252.jpg', 'Standing Vishnu as Keshava', 'early 12th century', 'Karnataka, probably Belur', 'Stone'),
  krishna: met(39331, 'as/web-large/DT7387.jpg', 'Yashoda with the Infant Krishna', 'early 12th century', 'Tamil Nadu', 'Copper alloy'),
  rama: met(688472, 'as/web-large/DP702156.jpg', 'Rama’s Assembly (Rama-panchayatana)', '1878–80', 'Pune, Maharashtra', 'Chromolithograph'),
  vaikuntha: met(38515, 'as/web-large/DT5253.jpg', 'Vaikuntha Vishnu', 'late 8th century', 'Kashmir', 'Stone'),
  durga: met(38583, 'as/web-large/DT238.jpg', 'Durga Slaying the Buffalo Demon Mahisha', '12th century', 'Bengal', 'Argillite'),
  nataraja: met(39329, 'as/web-large/DP221497.jpg', 'Shiva as Lord of Dance (Nataraja)', 'late 12th–early 13th century', 'Tamil Nadu', 'Copper alloy'),
  ardhanari: met(39153, 'as/web-large/DT8683.jpg', 'Shiva Ardhanarishvara, half male and half female', 'c. 13th century', 'Kerala', 'Bronze'),
  harihara: met(38162, 'as/web-large/LK.1977.241_DP310109R2_25W.jpg', 'Harihara: Vishnu and Shiva in one body', 'late 7th–early 8th century', 'Cambodia or Vietnam', 'Sandstone'),
  vishvarupa: met(38251, 'as/web-large/DP-14892-001.jpg', 'Vishvarupa Vishnu, the cosmic form', '6th century', 'Kashmir', 'Stone'),
  dashavatara: cma('2003.114.b', 'Das Avataras: the Ten Incarnations of Vishnu (Kalighat woodcut)', 'c. 1890', 'Kalighat, Kolkata', 'Hand-coloured woodcut'),
} satisfies Record<string, Artwork>;

/** Terms the page uses. */
export const terms: { term: string; from: string; meaning: string; examples: string }[] = [
  { term: 'Aniconic', from: 'Greek an- “without” + eikon “image”', meaning: 'Worship through a sign, not a likeness', examples: 'Linga, shaligrama stone, a lamp, a water-pot (kalasha)' },
  { term: 'Anthropomorphic', from: 'anthropos “human” + morphe “form”', meaning: 'The divine in human form', examples: 'Rama, Krishna, Vishnu as Keshava' },
  { term: 'Zoomorphic', from: 'zoon “animal” + morphe “form”', meaning: 'The divine as an animal', examples: 'Kurma the tortoise, Matsya the fish, Nandi, the cow Kamadhenu' },
  { term: 'Therianthropic', from: 'therion “beast” + anthropos “human”', meaning: 'Part animal, part human', examples: 'Narasimha, Ganesha, Varaha, Hayagriva, Hanuman, Garuda' },
  { term: 'Androgynous / composite', from: '', meaning: 'Two deities or two sexes in one body', examples: 'Ardhanarishvara, Harihara' },
  { term: 'Theophany', from: 'theos “god” + phainein “to show”', meaning: 'A deity revealing itself', examples: 'The pillar of fire between Brahma and Vishnu; Krishna’s cosmic form' },
];

export type FormId = 'formless' | 'aniconic' | 'sound' | 'nature' | 'animal' | 'hybrid' | 'human' | 'superhuman' | 'composite' | 'cosmic';

export const spectrum: { id: FormId; name: string; sanskrit: string; label: string; about: string; examples: string[]; art: Artwork[]; link?: { to: string; label: string } }[] = [
  {
    id: 'formless',
    name: 'Formless',
    sanskrit: 'निर्गुण · निराकार',
    label: 'Nirguna, nirakara',
    about:
      'Brahman without qualities or shape, beyond the senses and the mind. The Upanishads describe it only by negation: “not this, not this” (neti neti). All the forms below are, in the end, ways of approaching this.',
    examples: ['Brahman of the Upanishads', 'Worship as silent meditation', 'Advaita’s final truth'],
    art: [],
    link: { to: '#/vedas', label: 'The Upanishads' },
  },
  {
    id: 'aniconic',
    name: 'Sign, not likeness',
    sanskrit: 'अव्यक्त · लिङ्ग',
    label: 'Aniconic',
    about:
      'A symbol through which the deity is present without being pictured. The linga is Shiva as the boundless pillar of light; the black shaligrama stone from the Gandaki river is Vishnu; a filled water-pot (purna-kalasha) or a lamp holds the Goddess. The linga with a face bridges sign and likeness.',
    examples: ['Shiva linga and bana-linga', 'Shaligrama', 'Kalasha, lamp, pillar of light'],
    art: [art.linga, art.ekamukha],
    link: { to: '#/places?show=jyotirlinga', label: 'The 12 Jyotirlingas' },
  },
  {
    id: 'sound',
    name: 'Sound and diagram',
    sanskrit: 'नाद · यन्त्र',
    label: 'Mantra and yantra',
    about:
      'The deity is present as sound (mantra, the “body” of the deity, with Om as the root of all sound: nada-brahman) and as sacred geometry (yantra, mandala). In Sri Vidya the Sri Chakra is the Goddess herself, and her fifteen-syllable mantra is her subtle form.',
    examples: ['Om (pranava)', 'The Gayatri and other mantras', 'Sri Chakra and other yantras'],
    art: [],
    link: { to: '#/darshanas?t=shakta', label: 'Sri Vidya' },
  },
  {
    id: 'nature',
    name: 'Nature',
    sanskrit: 'प्रकृति',
    label: 'Rivers, sun, mountains, trees',
    about:
      'The divine shows itself in nature. The Ganga is a goddess who descended from heaven; Surya is seen every morning; Krishna tells the cowherds to worship Mount Govardhana itself; the Arunachala hill is Shiva; tulasi and the peepal tree are worshipped daily.',
    examples: ['Ganga, Yamuna, Narmada', 'Surya, Agni, Vayu', 'Govardhana, Arunachala, Kailasa', 'Tulasi, peepal, banyan'],
    art: [art.ganga, art.surya, art.govardhan],
  },
  {
    id: 'animal',
    name: 'Animal',
    sanskrit: 'पशु',
    label: 'Zoomorphic',
    about:
      'The divine takes an animal body. In the Puranas Vishnu becomes a great fish to save Manu and the Vedas from the flood, and a tortoise to bear Mount Mandara as the ocean is churned. Animals also carry the devas (vahanas) and are honoured in their own right: Nandi, the cow, the serpent Ananta.',
    examples: ['Matsya (fish), Kurma (tortoise)', 'Nandi, Kamadhenu, Ananta', 'The vahanas of each deity'],
    art: [art.churning],
    link: { to: '#/avatars', label: 'The Dashavatara' },
  },
  {
    id: 'hybrid',
    name: 'Part animal, part human',
    sanskrit: 'नर-पशु',
    label: 'Therianthropic',
    about:
      'Some forms join an animal head or body to a human one, each part with meaning. Narasimha is neither man nor beast, to slay a demon who could be killed by neither. Ganesha’s elephant head is wisdom that removes obstacles. Artists often show Matsya and Kurma this way too, the deity rising from the fish or tortoise.',
    examples: ['Narasimha, Varaha, Hayagriva', 'Ganesha', 'Hanuman, Garuda'],
    art: [art.narasimha, art.ganesha, art.varaha, art.hanuman, art.matsya, art.garuda],
  },
  {
    id: 'human',
    name: 'Human',
    sanskrit: 'मनुष्य',
    label: 'Anthropomorphic',
    about:
      'The divine lives a human life: born, growing up, loving, suffering and dying. Rama is the ideal king and son; Krishna a mischievous child, a friend, a teacher on the battlefield. Human form lets devotees relate to Bhagavan as child, friend, master or beloved.',
    examples: ['Rama, Krishna, Parashurama', 'Vishnu, Shiva, Devi in human likeness', 'The guru as a living form'],
    art: [art.vishnu, art.krishna, art.rama],
  },
  {
    id: 'superhuman',
    name: 'More than human',
    sanskrit: 'दिव्य',
    label: 'Many arms, many heads',
    about:
      'Extra arms show many powers at once, each hand holding an emblem or making a gesture; extra heads show facets of one nature. Vaikuntha Vishnu has the faces of a man, a lion and a boar. Durga’s ten arms carry the weapons of all the devas; Nataraja’s four arms create, protect, destroy and bless.',
    examples: ['Four-armed Vishnu and Shiva', 'Ten-armed Durga', 'Five-faced Sadashiva, four-faced Brahma'],
    art: [art.vaikuntha, art.durga, art.nataraja],
  },
  {
    id: 'composite',
    name: 'Two in one',
    sanskrit: 'अर्धनारीश्वर · हरिहर',
    label: 'Composite and androgynous',
    about:
      'Ardhanarishvara is Shiva and Parvati in one body, right half male and left half female: spirit and power are inseparable. Harihara joins Vishnu (Hari) and Shiva (Hara), teaching that the two are one.',
    examples: ['Ardhanarishvara', 'Harihara', 'Lakshmi-Narayana'],
    art: [art.ardhanari, art.harihara],
  },
  {
    id: 'cosmic',
    name: 'The whole universe',
    sanskrit: 'विश्वरूप',
    label: 'Cosmic form',
    about:
      'In the Gita’s eleventh chapter Krishna shows Arjuna his universal form, holding all worlds, beings and times, blazing like a thousand suns. Sculptors show it as a figure from whom other devas and beings pour out.',
    examples: ['Vishvarupa (Gita 11)', 'Virat Purusha (Rig Veda 10.90)', 'Vishnu sleeping on the cosmic ocean'],
    art: [art.vishvarupa],
    link: { to: '#/vedas', label: 'The Gita, chapter 11' },
  },
];

/** Pancharatra: the five modes in which Vishnu is present. */
export const fiveModes: { name: string; sanskrit: string; what: string; water: string }[] = [
  { name: 'Para', sanskrit: 'पर', what: 'The Supreme in his own abode, Vaikuntha, beyond the universe', water: 'Water beyond the universe, out of reach' },
  { name: 'Vyuha', sanskrit: 'व्यूह', what: 'Four emanations for creating and ruling the world: Vasudeva, Sankarshana, Pradyumna, Aniruddha', water: 'The ocean of milk, reached only by the devas' },
  { name: 'Vibhava', sanskrit: 'विभव', what: 'The avataras who descend into the world: Rama, Krishna and the others', water: 'A flood that came in the past and is gone' },
  { name: 'Antaryamin', sanskrit: 'अन्तर्यामी', what: 'The inner controller, dwelling in the heart of every being', water: 'Water under the ground: present, but you must dig for it' },
  { name: 'Archa', sanskrit: 'अर्चा', what: 'The consecrated image in temple and home, which anyone can see and serve', water: 'Pools and tanks that anyone can reach and drink from' },
];

/** Degrees of divine descent. */
export const descents: { name: string; sanskrit: string; meaning: string; example: string }[] = [
  { name: 'Purna', sanskrit: 'पूर्ण', meaning: 'A full descent of Bhagavan himself', example: 'Krishna: “Krishna is Bhagavan himself” (Bhagavata 1.3.28)' },
  { name: 'Amsha', sanskrit: 'अंश', meaning: 'A partial descent, a portion of the divine', example: 'Many avataras of the Bhagavata’s list of 22' },
  { name: 'Avesha', sanskrit: 'आवेश', meaning: 'A being empowered by the divine for a task', example: 'Parashurama; the power leaves him after he meets Rama' },
  { name: 'Vibhuti', sanskrit: 'विभूति', meaning: 'A glory: whatever is excellent reflects Bhagavan', example: 'Gita 10: “among mountains I am the Himalaya, among rivers the Ganga”' },
];

/** How a statue becomes a living presence. */
export const consecration: { step: string; what: string }[] = [
  { step: 'Shilpa', what: 'The image is made to the proportions and emblems laid down in the Agamas and Shilpa-shastras.' },
  { step: 'Adhivasa', what: 'It is purified and rested in water, grain and flowers.' },
  { step: 'Nyasa', what: 'Mantras are placed on each part of the image.' },
  { step: 'Prana-pratishtha', what: '“Establishing the breath”: the deity is invited to dwell in the image.' },
  { step: 'Netronmilana', what: 'The eyes are opened, often with a golden needle; the first gaze falls on a mirror or auspicious objects.' },
  { step: 'Darshan', what: 'Now the deity sees the devotee and is seen: worship can begin.' },
];

export const whyVerses: { deva: string; iast: string; meaning: string; ref: string; src?: Source }[] = [
  {
    deva: 'एकं सद्विप्रा बहुधा वदन्ति',
    iast: 'ekaṃ sad viprā bahudhā vadanti',
    meaning: 'Truth is one; the wise call it by many names.',
    ref: 'Rig Veda 1.164.46',
    src: src.rv1_164_46,
  },
  {
    deva: 'ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्',
    iast: 'ye yathā māṃ prapadyante tāṃs tathaiva bhajāmy aham',
    meaning: 'In whatever way people approach me, in that way I receive them.',
    ref: 'Bhagavad Gita 4.11',
    src: src.gitaVaishnava,
  },
  {
    deva: 'क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्',
    iast: 'kleśo ’dhikataras teṣām avyaktāsakta-cetasām',
    meaning: 'The path is harder for those whose minds are set on the unmanifest: for the embodied, the formless is hard to reach.',
    ref: 'Bhagavad Gita 12.5',
    src: src.gitaVaishnava,
  },
];

export const iconography: { name: string; what: string }[] = [
  { name: 'Abhaya mudra', what: 'Right palm raised and facing out: “fear not”.' },
  { name: 'Varada mudra', what: 'Palm lowered and open: granting boons.' },
  { name: 'Ayudhas', what: 'Emblems in the hands: Vishnu’s conch, discus, mace and lotus; Shiva’s trident and drum.' },
  { name: 'Third eye', what: 'Shiva’s eye of wisdom, which burned Kama to ashes.' },
  { name: 'Prabha-mandala', what: 'The halo or ring of flames around the figure: divine radiance, or the cosmos (as around Nataraja).' },
  { name: 'Vahana', what: 'The mount beside or beneath the deity, which shares its nature: Garuda for Vishnu, Nandi for Shiva, the lion for Durga.' },
];

export const formSources: Source[] = [
  src.rv1_164_46,
  src.gitaVaishnava,
  src.vyuhaEssay,
  src.bhagavataPancaratra,
  src.conceptFiveManifestations,
  src.agniConsecration,
  src.defMurti,
  src.defPratima,
  src.defArca,
  src.defVyuha,
  src.defAntaryamin,
  src.defPranapratishtha,
  defn('avatara', 'Avatara'),
  defn('saligrama', 'Shaligrama'),
  defn('nirguna', 'Nirguna'),
  defn('saguna', 'Saguna'),
];
