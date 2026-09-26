import type { Source } from './types';
import { defn, src, type Evidence } from './sources';
import { ev } from './smriti';

/** The kinds of "personal" deity a Hindu household relates to. */
export const deityKinds: { name: string; sanskrit: string; whose: string; text: string; sources: Source[] }[] = [
  {
    name: 'Kuladevata / Kuladevi',
    sanskrit: 'कुलदेवता · कुलदेवी',
    whose: 'Your family line (kula)',
    text: 'The guardian deity of a lineage, handed down through generations. It is often a devi (kuladevi), sometimes a male deity (kuladeva). The family honours it at every threshold of life.',
    sources: [src.defKuladevata, src.defKuladevi, src.defKuladeva, src.defKuladaivata],
  },
  {
    name: 'Ishta-devata',
    sanskrit: 'इष्टदेवता',
    whose: 'You, personally',
    text: 'The “cherished” deity an individual chooses, or is given by a guru, for personal devotion and meditation. It may differ from the family deity. A person with Khandoba as kuladevata may have Krishna as ishta-devata.',
    sources: [src.defIshtadevata],
  },
  {
    name: 'Grama-devata',
    sanskrit: 'ग्रामदेवता',
    whose: 'Your village or town',
    text: 'The guardian of a place: fields, boundaries, rain and health. Often a local devi (Mariamman, Ellamma, Maramma) or a guardian deity (Ayyanar, Bhairava). Honoured by everyone who lives there, whatever their family deity.',
    sources: [src.defGramadevata, src.gramadevataStory],
  },
  {
    name: 'Griha-devata',
    sanskrit: 'गृहदेवता',
    whose: 'Your house',
    text: 'The deities of the household shrine and of the house itself (including Vastu-purusha), worshipped daily and propitiated on set days.',
    sources: [src.defGrihadevata],
  },
];

/** Customs attached to the kuladevata. These vary widely by region and community. */
export const customs: { title: string; text: string }[] = [
  { title: 'After a wedding', text: 'The newly married couple visit the family deity’s shrine to seek blessings. The bride traditionally joins her husband’s kuladevata.' },
  { title: 'A child’s first haircut', text: 'The chaula or mundan (first tonsure) is often done at the kuladevata’s temple, and the hair is offered there.' },
  { title: 'Before new beginnings', text: 'The family deity is remembered first, before a new house, a business, a journey or a major ceremony, often with a coconut or a lamp.' },
  { title: 'Yearly visit & festivals', text: 'Many families visit once a year, often at the deity’s jatra (temple festival) or during Navaratri, and offer the first fruits of a harvest or income.' },
  { title: 'Regional rites', text: 'Examples include the gondhal night-songs for Tulja Bhavani, Renuka and Khandoba in Maharashtra, the jagarata (all-night vigil) in the north, and the kula-deivam pongal in Tamil Nadu.' },
];

/** Practical steps to find a forgotten family deity. */
export const findSteps: { title: string; text: string }[] = [
  { title: 'Ask the eldest relatives', text: 'Especially from your father’s side and from the family’s ancestral village. Ask where the family went for mundan and after weddings.' },
  { title: 'Ask the family priest', text: 'The kula-purohita who performs your family’s rites often knows the deity and its shrine.' },
  { title: 'Check pilgrimage-priest registers', text: 'The tirtha-purohitas (pandas) of Haridwar, Prayagraj, Kurukshetra, Gaya and other tirthas keep genealogy registers (vahis) by family and place, often recording the kuladevata.' },
  { title: 'Look to the ancestral village', text: 'Families from the same village and community often share a kuladevata, and the village deity may be linked to it.' },
  { title: 'Gotra is a clue, not the answer', text: 'Gotra traces descent from a rishi. Kuladevata is a separate inheritance, so families of one gotra may have different family deities.' },
];

export interface KulaDeity {
  id: string;
  n: number;
  name: string;
  /** e.g. "Form of Durga", "Form of Shiva". */
  form: string;
  place: string;
  state: string;
  region: 'West' | 'North' | 'East' | 'South';
  lat: number;
  lng: number;
  /** Which families traditionally hold this deity. Described generally; not exhaustive. */
  heldBy: string;
  text: string;
  /** Link to the Sacred Places entry at the same shrine. */
  place_id?: string;
  sources: Source[];
  evidence?: Evidence[];
}

let i = 0;
const k = (d: Omit<KulaDeity, 'n'>): KulaDeity => ({ ...d, n: ++i });

export const kuladevatas: KulaDeity[] = [
  // ——— West: Maharashtra, Goa, Gujarat, Rajasthan ———
  k({ id: 'khandoba', name: 'Khandoba (Mhalsakant, Martanda Bhairava)', form: 'Form of Shiva', place: 'Jejuri', state: 'Maharashtra', region: 'West', lat: 18.2756, lng: 74.1597, heldBy: 'The most widespread kuladevata of Maharashtra, held by families of many communities: Maratha, Dhangar, Deshastha and others.', text: 'A warrior form of Shiva on horseback with his consorts Mhalsa and Banai, who slew the demons Mani and Malla. At Jejuri devotees shower turmeric (bhandara) until the hill turns gold.', sources: [src.defKhandoba, src.conceptKhandoba, src.defKuladevata] }),
  k({ id: 'tulja-bhavani', name: 'Tulja Bhavani', form: 'Form of Durga', place: 'Tuljapur', state: 'Maharashtra', region: 'West', lat: 18.011, lng: 76.0707, heldBy: 'Kuladevi of many Maratha families, including the Bhonsles. Tradition says she gave Shivaji his sword.', text: 'Bhavani, a form of Durga, whose image is said to be self-manifest. She is one of the “three and a half” great seats of Devi in Maharashtra and a centre of the gondhal tradition.', sources: [src.cityTuljapur, defn('bhavani', 'Bhavani')] }),
  k({ id: 'renuka-mahur', name: 'Renuka (Ekaveera)', form: 'Mother of Parashurama', place: 'Mahur', state: 'Maharashtra', region: 'West', lat: 19.843, lng: 77.925, heldBy: 'Kuladevi to many Deccan families; her cult continues as Yellamma in Karnataka.', text: 'Wife of the sage Jamadagni and mother of Parashurama, worshipped as the head (tandla) of Devi.', place_id: 'ekaveera', sources: [defn('renuka', 'Renuka')], evidence: [ev.renukaChandor] }),
  k({ id: 'jogeshvari-ambejogai', name: 'Yogeshvari (Jogai)', form: 'Form of Durga', place: 'Ambejogai', state: 'Maharashtra', region: 'West', lat: 18.7315, lng: 76.3877, heldBy: 'Kuladevi of many Deshastha and Konkanastha brahmin families.', text: 'Devi as supreme yogini, whose town takes her name (Ambe-jogai). The poet-saint Mukundaraja is associated with the town.', sources: [defn('yogeshvari', 'Yogeshvari')] }),
  k({ id: 'saptashrungi', name: 'Saptashrungi', form: 'Eighteen-armed Mahishasuramardini', place: 'Vani, near Nashik', state: 'Maharashtra', region: 'West', lat: 20.3896, lng: 73.9095, heldBy: 'Kuladevi of many families of north Maharashtra; counted as the “half” seat.', text: 'Devi of the seven peaks, carved in the rock face with eighteen arms.', sources: [src.conceptKuladevi] }),
  k({ id: 'ekvira-karla', name: 'Ekvira Aai', form: 'Form of Renuka / Durga', place: 'Karla, near Lonavala', state: 'Maharashtra', region: 'West', lat: 18.7836, lng: 73.4731, heldBy: 'Kuladevi of the Koli and Agri communities and many CKP families of the Konkan.', text: 'Her shrine stands beside the ancient Buddhist caves of Karla. Koli fisherfolk come in great numbers at her festivals.', sources: [defn('ekavira', 'Ekavira')] }),
  k({ id: 'mahalakshmi-kolhapur', name: 'Mahalakshmi (Ambabai)', form: 'Form of Lakshmi / Durga', place: 'Kolhapur', state: 'Maharashtra', region: 'West', lat: 16.6949, lng: 74.224, heldBy: 'Kuladevi of very many Marathi and Kannada families.', text: 'The great seat of Karavira. See Sacred Places.', place_id: 'kolhapur', sources: [src.defShaktipitha], evidence: [ev.mahalakshmiKolhapur] }),
  k({ id: 'shantadurga', name: 'Shantadurga', form: 'Durga as peacemaker', place: 'Kavlem, Ponda', state: 'Goa', region: 'West', lat: 15.4099, lng: 73.9869, heldBy: 'Kuladevi of many Gaud Saraswat and other Konkani families.', text: 'She made peace between Shiva and Vishnu, standing between them. Her image was moved inland from Salcete in the 16th century to escape temple destruction.', sources: [src.conceptKuladevi] }),
  k({ id: 'mangesh', name: 'Mangesh (Manguirish)', form: 'Form of Shiva', place: 'Mangueshi, Ponda', state: 'Goa', region: 'West', lat: 15.4383, lng: 73.9679, heldBy: 'Kuladevata of many Gaud Saraswat families.', text: 'Shiva, who hid from Parvati in the form of a tiger and was called back by her cry. Like Shantadurga, he was moved inland to Ponda in the 16th century.', sources: [src.conceptKuladevi] }),
  k({ id: 'mahalasa', name: 'Mahalasa Narayani', form: 'Mohini (Vishnu) as Devi', place: 'Mardol, Ponda', state: 'Goa', region: 'West', lat: 15.4222, lng: 73.9776, heldBy: 'Kuladevi of many Gaud Saraswat families. She is related to Khandoba’s consort Mhalsa.', text: 'Vishnu’s enchanting Mohini form, worshipped as Devi.', sources: [defn('mahalasa', 'Mahalasa')] }),
  k({ id: 'ambaji', name: 'Ambaji (Arasuri Amba)', form: 'Form of Durga', place: 'Ambaji', state: 'Gujarat', region: 'West', lat: 24.3372, lng: 72.8497, heldBy: 'Kuladevi to very many Gujarati and Rajasthani families.', text: 'Worshipped through a veiled Shri Yantra rather than an image. See Sacred Places.', place_id: 'ambaji', sources: [src.defShaktipitha] }),
  k({ id: 'bahuchara', name: 'Bahuchara Mata', form: 'Form of Durga, riding a rooster', place: 'Becharaji', state: 'Gujarat', region: 'West', lat: 23.4983, lng: 72.0428, heldBy: 'Kuladevi of many Gujarati communities; patron devi of the hijra community.', text: 'One of Gujarat’s great Devi seats, near Modhera.', sources: [src.conceptKuladevi] }),
  k({ id: 'ashapura', name: 'Ashapura Mata', form: 'Devi who fulfils hopes', place: 'Mata no Madh, Kutch', state: 'Gujarat', region: 'West', lat: 23.5361, lng: 68.9364, heldBy: 'Kuladevi of the Jadejas of Kutch, many Chauhan lineages and others.', text: 'Worshipped as a seven-eyed form in red. Her name means “she who fulfils hopes” (asha).', sources: [src.conceptKuladevi] }),
  k({ id: 'karni', name: 'Karni Mata', form: 'Saint worshipped as an incarnation of Durga', place: 'Deshnoke', state: 'Rajasthan', region: 'West', lat: 27.7928, lng: 73.3406, heldBy: 'Kuladevi of the Rathores of Bikaner and Jodhpur, and of the Charan community.', text: 'A 14th–15th-century woman sage of the Charan community, believed to have blessed the founding of the Bikaner and Jodhpur forts. Her temple is famous for its sacred rats (kabbas).', sources: [src.conceptKuladevi] }),
  k({ id: 'shakambhari', name: 'Shakambhari', form: 'Devi who feeds with vegetables', place: 'Sambhar', state: 'Rajasthan', region: 'West', lat: 26.8862, lng: 75.1861, heldBy: 'Kuladevi of the Chauhans (Chahamanas), whose early capital was named after her.', text: 'The incarnation foretold in the Devi Mahatmya, who fed the world from her own body during a drought.', sources: [src.defShakambhari, src.dmCanto91] }),
  k({ id: 'sachiya', name: 'Sachiya Mata', form: 'Form of Durga', place: 'Osian', state: 'Rajasthan', region: 'West', lat: 26.7229, lng: 72.9107, heldBy: 'Kuladevi of the Oswal community and others of Marwar.', text: 'Her hilltop temple stands among Osian’s famous group of 8th–12th-century temples.', sources: [src.conceptKuladevi] }),

  // ——— North ———
  k({ id: 'vaishno', name: 'Vaishno Devi', form: 'Mahakali, Mahalakshmi and Mahasarasvati as three stone forms', place: 'Trikuta hills, Katra', state: 'Jammu & Kashmir', region: 'North', lat: 33.0308, lng: 74.949, heldBy: 'Kuladevi to very many families of north India.', text: 'Reached by a long mountain path. Devi is worshipped as three natural rock forms (pindis) in a cave.', sources: [src.conceptKuladevi] }),
  k({ id: 'jvalamukhi-k', name: 'Jvalamukhi', form: 'Devi as eternal flame', place: 'Kangra', state: 'Himachal Pradesh', region: 'North', lat: 31.8756, lng: 76.3232, heldBy: 'Kuladevi of many Himachali and Punjabi families.', text: 'Worshipped as flames that burn from the rock without fuel. See Sacred Places.', place_id: 'jvalamukhi', sources: [src.defShaktipitha], evidence: [ev.jvalamukhi] }),
  k({ id: 'vindhyavasini', name: 'Vindhyavasini', form: 'Devi of the Vindhyas', place: 'Vindhyachal, Mirzapur', state: 'Uttar Pradesh', region: 'North', lat: 25.1627, lng: 82.5096, heldBy: 'Kuladevi of many families of Uttar Pradesh and Bihar.', text: 'The child born to Yashoda and exchanged for Krishna, who escaped Kamsa and came to dwell on the Vindhya mountains (Devi Mahatmya, Harivamsha).', sources: [src.dmCanto91, src.harivamsha] }),

  // ——— East ———
  k({ id: 'kamakhya-k', name: 'Kamakhya', form: 'Devi as creative power', place: 'Nilachala, Guwahati', state: 'Assam', region: 'East', lat: 26.1664, lng: 91.7055, heldBy: 'Kuladevi of many Assamese and Bengali families; the Koch and Ahom kings were her patrons.', text: 'The foremost Tantric seat. See Sacred Places.', place_id: 'kamakhya', sources: [src.upaKalika], evidence: [ev.kamakhya] }),
  k({ id: 'tarapith', name: 'Tara (Tarapith)', form: 'The Mahavidya Tara', place: 'Tarapith, Birbhum', state: 'West Bengal', region: 'East', lat: 24.1117, lng: 87.798, heldBy: 'Kuladevi of many Bengali families; linked to the saint Bamakhepa.', text: 'Devi who carries devotees across, shown nursing Shiva, at a cremation-ground seat.', sources: [src.defMahavidya], evidence: [ev.taraRahasya] }),
  k({ id: 'samaleswari', name: 'Samaleswari', form: 'Form of Durga', place: 'Sambalpur', state: 'Odisha', region: 'East', lat: 21.4669, lng: 83.9719, heldBy: 'Kuladevi of the Chauhan rulers of Sambalpur and of many families of western Odisha.', text: 'The presiding deity of western Odisha, worshipped on the bank of the Mahanadi.', sources: [src.conceptKuladevi] }),

  // ——— South ———
  k({ id: 'venkateshvara', name: 'Venkateshvara (Balaji)', form: 'Form of Vishnu', place: 'Tirumala', state: 'Andhra Pradesh', region: 'South', lat: 13.6833, lng: 79.3474, heldBy: 'Kula-daivam of very many Telugu, Tamil and Kannada families.', text: 'Vishnu on the seven hills. Families traditionally go there for a child’s first tonsure, offering the hair.', sources: [src.conceptKuladevi] }),
  k({ id: 'murugan-palani', name: 'Murugan (Dandayudhapani)', form: 'Skanda / Kartikeya', place: 'Palani', state: 'Tamil Nadu', region: 'South', lat: 10.4389, lng: 77.5207, heldBy: 'Kula-deivam of many Tamil families.', text: 'Skanda as a renunciant with a staff, one of his six great abodes (Arupadai Veedu).', sources: [src.conceptKuladevi] }),
  k({ id: 'meenakshi', name: 'Meenakshi', form: 'Form of Parvati', place: 'Madurai', state: 'Tamil Nadu', region: 'South', lat: 9.9195, lng: 78.1193, heldBy: 'Kula-deivam of many Tamil families.', text: 'The fish-eyed warrior princess of the Pandyas who married Shiva as Sundareshvara.', sources: [src.conceptKuladevi] }),
  k({ id: 'kamakshi-k', name: 'Kamakshi', form: 'Lalita Tripurasundari', place: 'Kanchipuram', state: 'Tamil Nadu', region: 'South', lat: 12.8406, lng: 79.7036, heldBy: 'Kuladevi of many Tamil and Telugu families.', text: 'See Sacred Places.', place_id: 'kamakshi', sources: [src.defShaktipitha] }),
  k({ id: 'chamundeshvari-k', name: 'Chamundeshvari', form: 'Slayer of Mahishasura', place: 'Chamundi Hills, Mysuru', state: 'Karnataka', region: 'South', lat: 12.2724, lng: 76.6707, heldBy: 'Kuladevi of the Wadiyars of Mysore and many Kannada families.', text: 'See Sacred Places.', place_id: 'chamundeshvari', sources: [src.defShaktipitha] }),
  k({ id: 'yellamma', name: 'Yellamma (Renuka)', form: 'Mother of Parashurama', place: 'Saundatti', state: 'Karnataka', region: 'South', lat: 15.758, lng: 75.119, heldBy: 'Kuladevi of many families across north Karnataka and Maharashtra.', text: 'Renuka worshipped as “mother of all” on the Yellamma hill.', sources: [defn('renuka', 'Renuka')] }),
  k({ id: 'mookambika', name: 'Mookambika', form: 'Durga, Lakshmi and Sarasvati in one', place: 'Kollur', state: 'Karnataka', region: 'South', lat: 13.8642, lng: 74.8144, heldBy: 'Kuladevi of many families of coastal Karnataka and Kerala.', text: 'Devi who struck the demon Kaumasura dumb (muka). A jyotirlinga-shaped stone holds both Shiva and Shakti.', sources: [src.conceptKuladevi] }),
  k({ id: 'kodungallur', name: 'Kodungallur Bhagavathy', form: 'Bhadrakali', place: 'Kodungallur', state: 'Kerala', region: 'South', lat: 10.225, lng: 76.1951, heldBy: 'Kuladevi of many Kerala families.', text: 'One of Kerala’s oldest Bhagavathy temples, famous for its Bharani festival.', sources: [defn('bhagavati', 'Bhagavati')] }),
];

export const kulaEvidence: Evidence[] = [ev.ittagiBhairava, ev.agastyaTutelary, ev.shaliyaFamilyGod, ev.renukaChandor];

export const kulaSources: Source[] = [
  src.defKuladevata,
  src.conceptKuladevata,
  src.defKuladeva,
  src.defKuladevi,
  src.conceptKuladevi,
  src.defKuladaivata,
  src.defIshtadevata,
  src.defGramadevata,
  src.gramadevataStory,
  src.defGrihadevata,
  src.smriti,
];

/** The supreme deity (in the Puranic view) of whom a family deity is a form. */
export type Supreme = 'Shiva' | 'Vishnu' | 'Devi' | 'Skanda';

export interface Root {
  supreme: Supreme;
  /** From the supreme to the local form, e.g. ["Adi Shakti", "Durga", "Tulja Bhavani"]. */
  chain: string[];
  /** Scriptural basis for the identification. */
  scripture: Source[];
  /** In-app link to the form on the Avatars page, where one exists. */
  link?: string;
}

const DEVI = 'Adi Shakti (Devi)';

/** Kuladevata id → its supreme deity, the chain of manifestation, and the scripture behind it. */
export const roots: Record<string, Root> = {
  khandoba: { supreme: 'Shiva', chain: ['Shiva', 'Bhairava', 'Martanda Bhairava (Malhari)', 'Khandoba'], scripture: [src.skandaBhairava, src.defMartanda, src.defMallari, src.defKhandoba] },
  'tulja-bhavani': { supreme: 'Devi', chain: [DEVI, 'Durga, slayer of Mahisha', 'Tulja Bhavani'], scripture: [src.dmCanto82, src.dmCanto83, src.cityTuljapur], link: '#/avatars?g=devi&a=devi-mahatmya' },
  'renuka-mahur': { supreme: 'Devi', chain: [DEVI, 'Renuka, mother of Parashurama (Vishnu’s avatara)'], scripture: [src.vpParashurama, src.storyJamadagni, defn('renuka', 'Renuka')] },
  'jogeshvari-ambejogai': { supreme: 'Devi', chain: [DEVI, 'Parvati as Yogeshvari', 'Jogai of Ambejogai'], scripture: [defn('yogeshvari', 'Yogeshvari')] },
  saptashrungi: { supreme: 'Devi', chain: [DEVI, 'Mahalakshmi, the 18-armed Mahishasuramardini', 'Saptashrungi'], scripture: [src.dmCanto82, src.dmCanto83], link: '#/avatars?g=devi&a=devi-mahatmya' },
  'ekvira-karla': { supreme: 'Devi', chain: [DEVI, 'Mahakali, called Ekavira', 'Ekvira Aai'], scripture: [defn('ekavira', 'Ekavira')] },
  'mahalakshmi-kolhapur': { supreme: 'Devi', chain: [DEVI, 'Mahalakshmi', 'Ambabai of Karavira'], scripture: [src.defMahalakshmi, src.dmCanto82] },
  shantadurga: { supreme: 'Devi', chain: [DEVI, 'Parvati as Durga', 'Shantadurga, peacemaker of Shiva and Vishnu'], scripture: [src.defDurga] },
  mangesh: { supreme: 'Shiva', chain: ['Shiva', 'Mangirisha (Mangesh)'], scripture: [src.shivaPurana] },
  mahalasa: { supreme: 'Vishnu', chain: ['Vishnu', 'Mohini', 'Mahalasa Narayani'], scripture: [src.bhagavataMohini, src.defMohini, defn('mahalasa', 'Mahalasa')] },
  ambaji: { supreme: 'Devi', chain: [DEVI, 'Sati', 'Amba, where Sati’s heart fell'], scripture: [src.mbhSati, src.defShaktipitha] },
  bahuchara: { supreme: 'Devi', chain: [DEVI, 'Durga', 'Bahuchara'], scripture: [src.defDurga] },
  ashapura: { supreme: 'Devi', chain: [DEVI, 'Durga', 'Ashapura'], scripture: [src.defDurga] },
  karni: { supreme: 'Devi', chain: [DEVI, 'Durga', 'Karni Mata, a saint revered as her incarnation'], scripture: [src.defDurga, src.conceptKuladevi] },
  shakambhari: { supreme: 'Devi', chain: [DEVI, 'Shakambhari, a promised incarnation'], scripture: [src.dmCanto91, src.shivaShatakshi, src.defShakambhari], link: '#/avatars?g=devi&a=devi-promised' },
  sachiya: { supreme: 'Devi', chain: [DEVI, 'Durga (Mahishasuramardini)', 'Sachiya Mata'], scripture: [src.defDurga, src.dmCanto83] },
  vaishno: { supreme: 'Devi', chain: [DEVI, 'Mahakali + Mahalakshmi + Mahasarasvati', 'Vaishnavi of Trikuta'], scripture: [src.dmCanto81, src.dmCanto82, src.dmCanto90, src.defVaishnavi], link: '#/avatars?g=devi&a=devi-mahatmya' },
  'jvalamukhi-k': { supreme: 'Devi', chain: [DEVI, 'Sati', 'Jvalamukhi, where Sati’s tongue fell'], scripture: [src.mbhSati, src.defShaktipitha] },
  vindhyavasini: { supreme: 'Devi', chain: [DEVI, 'Yoganidra / Mahamaya', 'Vindhyavasini, born to Yashoda'], scripture: [src.dmCanto91, src.harivamsha], link: '#/avatars?g=devi&a=devi-promised' },
  'kamakhya-k': { supreme: 'Devi', chain: [DEVI, 'Sati', 'Kamakhya'], scripture: [src.upaKalika, src.mbhKamakhya] },
  tarapith: { supreme: 'Devi', chain: [DEVI, 'Sati’s ten Mahavidya forms', 'Tara'], scripture: [src.upaMahabhagavata, src.defMahavidya], link: '#/avatars?g=devi&a=devi-tara' },
  samaleswari: { supreme: 'Devi', chain: [DEVI, 'Durga', 'Samaleswari'], scripture: [src.defDurga] },
  venkateshvara: { supreme: 'Vishnu', chain: ['Vishnu', 'Shrinivasa', 'Venkateshvara of Venkatachala'], scripture: [src.skandaVenkatachala, src.skandaVenkateshvara, src.skandaSrinivasaMarriage] },
  'murugan-palani': { supreme: 'Skanda', chain: ['Shiva + Parvati', 'Skanda / Kartikeya', 'Dandayudhapani of Palani'], scripture: [src.skandaKarttikeyaBirth, src.defKarttikeya] },
  meenakshi: { supreme: 'Devi', chain: [DEVI, 'Parvati', 'Meenakshi, bride of Sundareshvara'], scripture: [src.defHalasya] },
  'kamakshi-k': { supreme: 'Devi', chain: [DEVI, 'Lalita Tripurasundari', 'Kamakshi of Kanchi'], scripture: [src.lalitaKamakshi, src.brahmanda], link: '#/avatars?g=devi&a=devi-shodashi' },
  'chamundeshvari-k': { supreme: 'Devi', chain: [DEVI, 'Kali as Chamunda (slayer of Chanda & Munda)', 'Chamundeshvari'], scripture: [src.dmCanto87, src.dmCanto83], link: '#/avatars?g=devi&a=devi-mahatmya' },
  yellamma: { supreme: 'Devi', chain: [DEVI, 'Renuka', 'Yellamma'], scripture: [src.vpParashurama, defn('renuka', 'Renuka')] },
  mookambika: { supreme: 'Devi', chain: [DEVI, 'Mahakali + Mahalakshmi + Mahasarasvati in one', 'Mookambika'], scripture: [src.conceptDeviMahatmya] },
  kodungallur: { supreme: 'Devi', chain: ['Shiva’s power', 'Bhadrakali, slayer of Daruka', 'Kodungallur Bhagavathy'], scripture: [src.lingaDaruka, src.defBhadrakali, defn('bhagavati', 'Bhagavati')] },
};

export const SUPREME_INFO: Record<Supreme, { title: string; text: string }> = {
  Shiva: { title: 'Forms of Shiva', text: 'Shiva as a local guardian lord, often in his fierce Bhairava aspect.' },
  Vishnu: { title: 'Forms of Vishnu', text: 'Vishnu as a local lord or through one of his avataras.' },
  Skanda: { title: 'Skanda, son of Shiva & Parvati', text: 'Murugan / Kartikeya, especially beloved in Tamil lands.' },
  Devi: {
    title: 'Forms of Devi (Shakti)',
    text: 'Most kuladevis are forms of the one Devi. Shakta scripture sees her as supreme; Shaiva and Vaishnava scripture see her as the power (shakti) of Shiva or of Vishnu.',
  },
};
