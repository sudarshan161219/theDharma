import type { Source } from './types';
import { src } from './sources';

export interface Avatar {
  id: string;
  name: string;
  sanskrit: string;
  form: string;
  yuga: string;
  /** Whom or what the avatara came to overcome / accomplish. */
  purpose: string;
  story: string;
  /** Scripture ids in this app that tell the story at length. */
  texts: string[];
  /** Person ids connected to the story. */
  people?: string[];
}

/** The ten principal avataras of Vishnu. */
export const dashavatara: Avatar[] = [
  {
    id: 'matsya',
    name: 'Matsya',
    sanskrit: 'मत्स्य',
    form: 'Fish',
    yuga: 'Satya',
    purpose: 'Saved Manu, the seeds of life and the Vedas from the great flood.',
    story:
      'A tiny fish asked King Satyavrata (the future Vaivasvata Manu) for protection and kept growing until only the ocean could hold it. It warned him of the deluge. Manu tied his boat, carrying the seven sages and the seeds of all beings, to the fish’s horn with the serpent Vasuki, and Matsya taught him through the flood. He also recovered the Vedas stolen by the demon Hayagriva.',
    texts: ['matsya-purana', 'bhagavata-purana'],
    people: ['manu', 'matsya'],
  },
  {
    id: 'kurma',
    name: 'Kurma',
    sanskrit: 'कूर्म',
    form: 'Tortoise',
    yuga: 'Satya',
    purpose: 'Supported Mount Mandara during the churning of the ocean of milk.',
    story:
      'After Durvasa’s curse had drained the devas’ fortune, they and the asuras churned the ocean for amrita, using Mount Mandara as the churning rod and Vasuki as the rope. When the mountain sank, Vishnu became a vast tortoise and held it on his back. From the churning came poison (drunk by Shiva), Lakshmi, Dhanvantari with the amrita, and many treasures.',
    texts: ['kurma-purana', 'bhagavata-purana'],
    people: ['kurma', 'durvasa'],
  },
  {
    id: 'varaha',
    name: 'Varaha',
    sanskrit: 'वराह',
    form: 'Boar',
    yuga: 'Satya',
    purpose: 'Lifted the Earth from the cosmic waters and slew Hiranyaksha.',
    story:
      'The demon Hiranyaksha dragged the Earth (Bhudevi) to the bottom of the cosmic ocean. Vishnu appeared from Brahma’s nostril as a tiny boar, grew to a mountain’s size, dived into the waters, killed the demon and raised the Earth on his tusks. The present kalpa, the Shveta-Varaha, is named after this avatara.',
    texts: ['varaha-purana', 'bhagavata-purana'],
    people: ['varaha', 'bhudevi'],
  },
  {
    id: 'narasimha',
    name: 'Narasimha',
    sanskrit: 'नरसिंह',
    form: 'Man-lion',
    yuga: 'Satya',
    purpose: 'Protected the child-devotee Prahlada and destroyed Hiranyakashipu.',
    story:
      'Hiranyakashipu had a boon that he could be killed by neither man nor beast, by day nor night, indoors nor outdoors, on earth nor in the sky, and by no weapon. When he struck a pillar to mock his son’s faith, Vishnu burst out of it as half-man, half-lion. At twilight, on the threshold, on his lap, with his claws, he tore the demon apart and fulfilled every condition of the boon.',
    texts: ['narasimha-purana', 'bhagavata-purana', 'vishnu-purana'],
  },
  {
    id: 'vamana',
    name: 'Vamana',
    sanskrit: 'वामन',
    form: 'Dwarf brahmin',
    yuga: 'Treta',
    purpose: 'Won back the three worlds from King Bali for Indra.',
    story:
      'Born to Kashyapa and Aditi, the boy Vamana came to the generous asura king Bali and asked for three steps of land. Growing into the cosmic Trivikrama, he covered earth and heaven in two strides. Bali offered his own head for the third. Vishnu sent him to rule Sutala and promised he will be the Indra of the next (8th) manvantara. Vamana is the avatara of our Vaivasvata manvantara.',
    texts: ['vamana-purana', 'bhagavata-purana'],
    people: ['kashyapa'],
  },
  {
    id: 'parashurama',
    name: 'Parashurama',
    sanskrit: 'परशुराम',
    form: 'Brahmin warrior with an axe',
    yuga: 'Treta',
    purpose: 'Humbled the arrogant kshatriya kings.',
    story:
      'Son of Jamadagni and Renuka, he received the axe (parashu) from Shiva. When King Kartavirya Arjuna’s sons killed his father, he cleared the earth of oppressive kshatriyas twenty-one times. A Chiranjivi, he later taught Bhishma, Drona and Karna, and will be one of the Saptarishis of the 8th manvantara.',
    texts: ['bhagavata-purana', 'mahabharata'],
    people: ['jamadagni'],
  },
  {
    id: 'rama',
    name: 'Rama',
    sanskrit: 'राम',
    form: 'Prince of Ayodhya',
    yuga: 'Treta',
    purpose: 'Destroyed Ravana and established the ideal reign of dharma (Rama-rajya).',
    story:
      'Eldest son of Dasharatha of the Solar dynasty, born from the sacrifice led by Rishyashringa. Exiled for fourteen years, he lost Sita to Ravana, allied with Hanuman and Sugriva, and bridged the sea to Lanka. He is maryada-purushottama, the model of the righteous man.',
    texts: ['ramayana', 'bhagavata-purana', 'padma-purana'],
    people: ['rama', 'valmiki', 'vishvamitra', 'vasishtha', 'agastya', 'rishyashringa'],
  },
  {
    id: 'krishna',
    name: 'Krishna',
    sanskrit: 'कृष्ण',
    form: 'Cowherd, king and charioteer',
    yuga: 'Dvapara (end)',
    purpose: 'Destroyed Kamsa and other tyrants, guided the Pandavas and taught the Gita.',
    story:
      'Born in Kamsa’s prison to Devaki and Vasudeva and raised in Vraja by Yashoda and Nanda, he killed Kamsa, founded Dvaraka and taught the Bhagavad Gita at Kurukshetra. Kali-yuga began when he left the world. Some lists count Balarama here and place Krishna as the source of all avataras.',
    texts: ['bhagavata-purana', 'harivamsha', 'mahabharata', 'brahmavaivarta-purana'],
    people: ['krishna', 'garga', 'sandipani'],
  },
  {
    id: 'buddha',
    name: 'Buddha',
    sanskrit: 'बुद्ध',
    form: 'Sage',
    yuga: 'Kali',
    purpose: 'In the Puranas: turned beings away from cruel sacrifice.',
    story:
      'The Bhagavata (1.3) foretells that at the start of Kali, Vishnu will be born as Buddha, son of Anjana, in the land of Kikata, to bewilder the enemies of the devas. Jayadeva’s Gita Govinda praises him for his compassion in ending animal sacrifice. Some regional lists put Balarama in this place instead.',
    texts: ['bhagavata-purana'],
  },
  {
    id: 'kalki',
    name: 'Kalki',
    sanskrit: 'कल्कि',
    form: 'Warrior on a white horse',
    yuga: 'End of Kali (future)',
    purpose: 'Will end the age of Kali and restore Satya-yuga.',
    story:
      'The Vishnu and Bhagavata Puranas foretell that when dharma has all but vanished, Vishnu will be born as Kalki, son of Vishnuyasha, in the village of Shambhala. Riding the white horse Devadatta with a blazing sword, he will destroy the wicked, and a new Satya-yuga will dawn.',
    texts: ['vishnu-purana', 'bhagavata-purana'],
  },
];

/** Bhagavata Purana 1.3 — avataras in the order given there (22 named; tradition counts 24 with Hamsa and Hayagriva). */
export const bhagavataAvatars: { n: number; name: string; note: string; person?: string }[] = [
  { n: 1, name: 'The four Kumaras', note: 'Lifelong celibate sages', person: 'kumaras' },
  { n: 2, name: 'Varaha', note: 'Raised the Earth' },
  { n: 3, name: 'Narada', note: 'Taught the Pancharatra (Satvata-tantra)', person: 'narada' },
  { n: 4, name: 'Nara-Narayana', note: 'Twin sages of Badarika' },
  { n: 5, name: 'Kapila', note: 'Taught Samkhya', person: 'kapila' },
  { n: 6, name: 'Dattatreya', note: 'Taught Anvikshiki to Alarka and Prahlada', person: 'dattatreya' },
  { n: 7, name: 'Yajna', note: 'Son of Ruchi and Akuti; Indra of the 1st manvantara' },
  { n: 8, name: 'Rishabha', note: 'Son of Nabhi; showed the path of the paramahamsa' },
  { n: 9, name: 'Prithu', note: 'The first consecrated king; milked the Earth' },
  { n: 10, name: 'Matsya', note: 'Fish' },
  { n: 11, name: 'Kurma', note: 'Tortoise' },
  { n: 12, name: 'Dhanvantari', note: 'Rose from the ocean with amrita; god of Ayurveda' },
  { n: 13, name: 'Mohini', note: 'Enchantress who distributed the amrita to the devas' },
  { n: 14, name: 'Narasimha', note: 'Man-lion' },
  { n: 15, name: 'Vamana', note: 'Dwarf' },
  { n: 16, name: 'Parashurama', note: 'Axe-wielding brahmin' },
  { n: 17, name: 'Vyasa', note: 'Divided the Veda', person: 'vyasa' },
  { n: 18, name: 'Rama', note: 'Prince of Ayodhya', person: 'rama' },
  { n: 19, name: 'Balarama', note: 'Elder brother of Krishna' },
  { n: 20, name: 'Krishna', note: 'The Lord himself', person: 'krishna' },
  { n: 21, name: 'Buddha', note: 'At the dawn of Kali' },
  { n: 22, name: 'Kalki', note: 'At the end of Kali' },
];

export interface ShivaForm {
  name: string;
  note: string;
  person?: string;
}

/** A selection of Shiva's incarnations described in the Shatarudra-samhita of the Shiva Purana. */
export const shivaAvatars: ShivaForm[] = [
  { name: 'Five faces: Sadyojata, Vamadeva, Tatpurusha, Aghora, Ishana', note: 'The five primal forms of Shiva, facing the directions and the zenith.' },
  { name: 'Ardhanarishvara', note: 'Half Shiva, half Shakti. Appeared so that Brahma could create through male and female.' },
  { name: 'Nandishvara', note: 'Born to the sage Shilada; became Shiva’s chief attendant and gatekeeper.', person: 'nandi' },
  { name: 'Bhairava', note: 'The terrifying form who cut off Brahma’s fifth head; guardian of Kashi.' },
  { name: 'Sharabha', note: 'Part-bird, part-lion form that calmed the fury of Narasimha.' },
  { name: 'Virabhadra', note: 'Born from Shiva’s matted hair in grief for Sati; destroyed Daksha’s sacrifice.', person: 'daksha' },
  { name: 'Pippalada', note: 'Son of Dadhichi, born after his father gave his bones for the vajra.', person: 'dadhichi' },
  { name: 'Grihapati', note: 'Born to the sage Vishvanara; worshipped at Kashi.' },
  { name: 'Hanuman', note: 'Shiva’s portion born as the vanara who served Rama.' },
  { name: 'Durvasa', note: 'Shiva’s portion born to Atri and Anasuya.', person: 'durvasa' },
  { name: 'Kirata', note: 'Hunter who fought Arjuna and gave him the Pashupata weapon.' },
  { name: 'Ashvatthama', note: 'Shiva’s portion born as the son of Drona; the next Vyasa.', person: 'ashvatthama' },
  { name: 'The Yogacharyas', note: 'In each Kali-yuga Shiva appears as a teacher of yoga, alongside that age’s Vyasa. In our 28th, as Lakulisha.' },
];

export const avatarSources: Source[] = [
  src.defDashavatara,
  src.conceptTenAvataras,
  src.bhagavataAvatars,
  src.conceptManvantaravatara,
  src.vpManvantaras,
  src.shivaNineteen,
  src.lingaIncarnations,
  src.defYogacarya,
];
