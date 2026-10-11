import { vyasas as vishnuVyasas } from './cosmos';
import { src } from './sources';
import type { Source, Vyasa } from './types';

export type ListId = 'vishnu' | 'devi' | 'linga';

/** Linga Purana 1.24: in each Dvapara Shiva also comes down as a teacher of yoga, with four disciples. */
export interface LingaVyasa extends Vyasa {
  shiva: string;
  shivaNote?: string;
  disciples: string[];
}

/** Devi Bhagavata Purana 1.3.25–35: the list Suta gives the sages in the Naimisha forest. */
export const deviVyasas: Vyasa[] = [
  { n: 1, name: 'Brahma', note: 'Brahma himself divided the Vedas in the first Dvapara.' },
  { n: 2, name: 'Prajapati' },
  { n: 3, name: 'Shakra', note: 'Shakra is a name of Indra. Here the Vishnu Purana has Ushanas (Shukra).' },
  { n: 4, name: 'Brihaspati' },
  { n: 5, name: 'Surya' },
  { n: 6, name: 'Yama' },
  { n: 7, name: 'Indra' },
  { n: 8, name: 'Vasishtha' },
  { n: 9, name: 'Sarasvata' },
  { n: 10, name: 'Tridhama' },
  { n: 11, name: 'Trivrisha' },
  { n: 12, name: 'Bharadvaja' },
  { n: 13, name: 'Antariksha' },
  { n: 14, name: 'Dharma' },
  { n: 15, name: 'Trayyaruni', note: 'Printed as Evaruni or Eyaruni in the English translation.' },
  { n: 16, name: 'Dhananjaya' },
  { n: 17, name: 'Medhatithi' },
  { n: 18, name: 'Vrati' },
  { n: 19, name: 'Atri' },
  { n: 20, name: 'Gautama' },
  { n: 21, name: 'Uttama', note: 'Whose soul was fixed on Hari.' },
  { n: 22, name: 'Vajashrava Vena' },
  { n: 23, name: 'Soma', note: 'Of the same family as Vena.' },
  { n: 24, name: 'Trinabindu', note: 'Garbled as Prinavinlu in some printings.' },
  { n: 25, name: 'Bhargava' },
  { n: 26, name: 'Shakti' },
  { n: 27, name: 'Jatukarnya' },
  { n: 28, name: 'Krishna Dvaipayana', note: 'Suta’s own guru, from whom he heard this Purana alongside Shuka.' },
];

/** Linga Purana 1.24: the Vyasa of each Dvapara and the form Shiva takes in the Kali that follows. */
export const lingaVyasas: LingaVyasa[] = [
  { n: 1, name: 'Shiva himself', note: 'Linga Purana 1.7 names Kratu here.', shiva: 'Shveta', disciples: ['Shveta', 'Shvetashikha', 'Shvetasya', 'Shvetalohita'] },
  { n: 2, name: 'Prajapati (Satya)', shiva: 'Sutara', disciples: ['Dundubhi', 'Shatarupa', 'Richika', 'Ketuman'] },
  { n: 3, name: 'Bhargava', shiva: 'Damana', disciples: ['Vikesha', 'Vikosha', 'Vipasha', 'Shapanashana'] },
  { n: 4, name: 'Angiras', shiva: 'Suhotra', disciples: ['Sumukha', 'Durmukha', 'Dardura', 'Dhritikrama'] },
  { n: 5, name: 'Savitri', shiva: 'Kanka', disciples: ['Sanaka', 'Sanandana', 'Sanatana', 'Sanatkumara'] },
  { n: 6, name: 'Mrityu', shiva: 'Laugakshi', disciples: ['Sudhama', 'Virajas', 'Shankhapada', 'Rajas'] },
  { n: 7, name: 'Shatakratu', shiva: 'Jaigishavya', disciples: ['Sarasvata', 'Megha', 'Meghavahana', 'Suvahana'] },
  { n: 8, name: 'Vasishtha', shiva: 'Dadhivahana', disciples: ['Kapila', 'Asuri', 'Panchashikha', 'Bashkala'] },
  { n: 9, name: 'Sarasvata', shiva: 'Rishabha', disciples: ['Parashara', 'Garga', 'Bhargava', 'Angiras'] },
  { n: 10, name: 'Tripada', note: 'Linga Purana 1.7 has Tridhaman, as do the other lists.', shiva: 'A sage on Bhrigutunga', disciples: ['Balabandhu', 'Niramitra', 'Ketubhringa', 'Tapodhana'] },
  { n: 11, name: 'Trivrata', shiva: 'Ugra', disciples: ['Lambodara', 'Lambaksha', 'Lambakesha', 'Pralambaka'] },
  { n: 12, name: 'Shatatejas', shiva: 'Atri', disciples: ['Sarvajna', 'Samabuddhi', 'Sadhya', 'Sarva'] },
  { n: 13, name: 'Dharma (Narayana)', shiva: 'Bali', disciples: ['Sudhama', 'Kashyapa', 'Vasishtha', 'Virajas'] },
  { n: 14, name: 'Tarakshu', shiva: 'Gautama', disciples: ['Atri', 'Devasada', 'Shravana', 'Shravishthaka'] },
  { n: 15, name: 'Trayyaruni', shiva: 'Vedashiras', disciples: ['Kuni', 'Kunibahu', 'Kusharira', 'Kunetra'] },
  { n: 16, name: 'Deva', shiva: 'Gokarna', disciples: ['Kashyapa', 'Ushanas', 'Chyavana', 'Brihaspati'] },
  { n: 17, name: 'Kritanjaya', shiva: 'Guhavasin', disciples: ['Utathya', 'Vamadeva', 'Mahayoga', 'Mahabala'] },
  { n: 18, name: 'Ritanjaya', shiva: 'Shikhandin', disciples: ['Vachashravas', 'Richika', 'Shyavashva', 'Yatishvara'] },
  { n: 19, name: 'Bharadvaja', shiva: 'Jatamalin', disciples: ['Hiranyanabha', 'Kaushalya', 'Laugakshi', 'Kuthumi'] },
  { n: 20, name: 'Gautama', shiva: 'Attahasa', disciples: ['Sumantu', 'Barbari', 'Kabandha', 'Kushikandhara'] },
  { n: 21, name: 'Vachashravas', shiva: 'Daruka', disciples: ['Plaksha', 'Darbhayani', 'Ketuman', 'Gautama'] },
  { n: 22, name: 'Shushmayana', shiva: 'Langalin', disciples: ['Bhallavi', 'Madhupinga', 'Shvetaketu', 'Kusha'] },
  { n: 23, name: 'Trinabindu', shiva: 'Shveta', disciples: ['Ushika', 'Brihadashva', 'Devala', 'Kavi'] },
  { n: 24, name: 'Riksha', shiva: 'Shulin', disciples: ['Shalihotra', 'Agnivesha', 'Yuvanashva', 'Sharadvasu'] },
  { n: 25, name: 'Shakti', shiva: 'Dandi Mundishvara', disciples: ['Chhagala', 'Kundakarna', 'Kumbhanda', 'Pravahaka'] },
  { n: 26, name: 'Parashara', shiva: 'Sahishnu', disciples: ['Uluka', 'Vidyut', 'Shambuka', 'Ashvalayana'] },
  { n: 27, name: 'Jatukarnya', shiva: 'Somasharman', disciples: ['Akshapada', 'Kumara', 'Uluka', 'Vatsa'] },
  {
    n: 28,
    name: 'Krishna Dvaipayana',
    note: 'Son of Parashara.',
    shiva: 'Lakulin (Lakulisha)',
    shivaNote: 'Shiva appears as a brahmacharin who enters a lifeless body, and is known as Lakulin, “bearer of the club”.',
    disciples: ['Kushika', 'Garga', 'Mitra', 'Kaurushya'],
  },
];

export const vyasaLists: { id: ListId; title: string; ref: string; about: string; source: Source; list: Vyasa[] }[] = [
  {
    id: 'vishnu',
    title: 'Vishnu Purana',
    ref: '3.3',
    about: 'Parashara tells Maitreya the names of the 28 who arranged the Veda in this manvantara. He counts himself among them, as the 26th, and his son Krishna Dvaipayana as the 28th.',
    source: src.vpVyasas,
    list: vishnuVyasas,
  },
  {
    id: 'devi',
    title: 'Devi Bhagavata',
    ref: '1.3',
    about: 'Suta answers the sages of the Naimisha forest. His list follows the Vishnu Purana for the first thirteen and the last few, but differs in between, and it leaves Parashara out.',
    source: src.dbVyasas,
    list: deviVyasas,
  },
  {
    id: 'linga',
    title: 'Linga Purana',
    ref: '1.24',
    about: 'The Shaiva account. In each Dvapara, as a Vyasa arranges the Veda, Shiva comes down as a teacher of yoga (Yogacharya) with four disciples, to guide people through the Kali age that follows.',
    source: src.lingaIncarnations,
    list: lingaVyasas,
  },
];

/** Every name a list gives for one Vyasa (the main name and any in brackets), in a plain form for comparing spellings. */
function aliases(name: string): string[] {
  return name
    .split(/[()]/)
    .map((part) =>
      part
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/(an|ya|a|n)$/, ''),
    )
    .filter(Boolean);
}

/** Whether two lists name the same Vyasa, allowing for small differences of spelling. */
export function sameVyasa(a: string, b: string): boolean {
  const ka = aliases(a);
  return aliases(b).some((k) => ka.includes(k));
}
