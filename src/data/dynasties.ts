import type { Source } from './types';
import { defn, src } from './sources';

/**
 * A king (or sage) in a dynastic line. A `Line` is read top to bottom as father → son;
 * `branches` hang side-lines (brothers, cadet houses) off a node.
 */
export interface DNode {
  id: string;
  name: string;
  /** Person id in people.ts, if profiled. */
  person?: string;
  spouse?: string;
  note?: string;
  /** True when several generations are skipped before this name. */
  gapBefore?: boolean;
  branches?: { label?: string; line: Line }[];
}
export type Line = DNode[];

const WL = 'https://www.wisdomlib.org';
const s = (label: string, url: string): Source => ({ label, url });

export const dynastySources = {
  vp4: s('Vishnu Purana, Book IV — the dynasties (Wilson)', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc115996.html`),
  vp4Ikshvaku: s('Vishnu Purana 4.2 — Birth of Ikshvaku; Kakutstha', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc115998.html`),
  vp4Moon: s('Vishnu Purana, Book IV — Dynasty of the Moon; Budha and Ila; Pururavas', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc116002.html`),
  vp4Puru: s('Vishnu Purana 4.19 — Dynasty of Puru', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc116016.html`),
  vp4Kali: s('Vishnu Purana 4.24 — Dynasties of the Kali age', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc116021.html`),
  wilsonBook4: s('Wilson — Introduction to the Fourth Book', `${WL}/hinduism/book/vishnu-purana-wilson/d/doc115928.html`),
  bhag9: s('Bhagavata Purana, Skandha 9 — the royal dynasties', `${WL}/hinduism/book/the-bhagavata-purana/d/doc1128839.html`),
  bhag9_12: s('Bhagavata Purana 9.12 — Ikshvaku’s race (concluded)', `${WL}/hinduism/book/the-bhagavata-purana/d/doc1128851.html`),
  bhag9_20: s('Bhagavata Purana 9.20 — Puru’s race; birth of Bharata', `${WL}/hinduism/book/the-bhagavata-purana/d/doc1128860.html`),
  bhag9_23: s('Bhagavata Purana 9.23 — Dynasties of Anu, Druhyu, Turvasu and Yadu', `${WL}/hinduism/book/the-bhagavata-purana/d/doc1128863.html`),
  ramayana70: s('Ramayana, Bala-kanda 70 — The descent of the dynasty recited', `${WL}/hinduism/book/the-ramayana-of-valmiki/d/doc423939.html`),
  mbhAdi94: s('Mahabharata, Adi Parva XCIV — the Puru line to Kuru and Shantanu', `${WL}/hinduism/book/the-mahabharata-mohan/d/doc4087.html`),
  agni274: s('Agni Purana 274 — Description of the Lunar race', `${WL}/hinduism/book/the-agni-purana/d/doc1083503.html`),
  ikshvaku: defn('ikshvaku', 'Ikshvaku'),
};

/** Surya-vamsha: the Solar (Ikshvaku) dynasty of Ayodhya, per the Vishnu Purana, Book IV. */
export const solar: Line = [
  { id: 'brahma', name: 'Brahma', person: 'brahma' },
  { id: 'marichi', name: 'Marichi', person: 'marichi', note: 'Mind-born son of Brahma' },
  { id: 'kashyapa', name: 'Kashyapa', person: 'kashyapa', spouse: 'Aditi' },
  { id: 'vivasvan', name: 'Vivasvan (Surya)', note: 'The Sun, who gives the line its name', spouse: 'Samjna' },
  {
    id: 'manu',
    name: 'Vaivasvata Manu',
    person: 'manu',
    note: 'The Manu of the present age',
    branches: [{ label: 'Manu’s child Ila marries Budha, son of the Moon: the Solar and Lunar lines join', line: [{ id: 'ila', name: 'Ila', note: 'See the Lunar dynasty' }] }],
  },
  { id: 'ikshvaku', name: 'Ikshvaku', note: 'First king of Ayodhya. Vasishtha becomes the family priest (kula-guru).' },
  { id: 'vikukshi', name: 'Vikukshi (Shashada)' },
  { id: 'kakutstha', name: 'Puranjaya (Kakutstha)', note: 'Rode Indra in the form of a bull to fight the asuras; the line is called Kakutstha after him' },
  { id: 'kuvalayashva', name: 'Kuvalayashva (Dhundhumara)', gapBefore: true, note: 'Slew the demon Dhundhu' },
  { id: 'mandhata', name: 'Mandhata', gapBefore: true, note: 'Son of Yuvanashva; a universal emperor' },
  { id: 'purukutsa', name: 'Purukutsa' },
  { id: 'trasadasyu', name: 'Trasadasyu' },
  { id: 'trishanku', name: 'Trishanku', gapBefore: true, note: 'Vishvamitra raised him bodily to a heaven of his own' },
  { id: 'harishchandra', name: 'Harishchandra', note: 'The king who would not break his word' },
  { id: 'rohita', name: 'Rohita' },
  { id: 'sagara', name: 'Sagara', gapBefore: true, note: 'Son of Bahu. His 60,000 sons were burnt by the sage Kapila.' },
  { id: 'asamanjas', name: 'Asamanjas' },
  { id: 'anshuman', name: 'Anshuman' },
  { id: 'dilipa1', name: 'Dilipa' },
  { id: 'bhagiratha', name: 'Bhagiratha', note: 'Brought the Ganga down from heaven to free his ancestors' },
  { id: 'rituparna', name: 'Rituparna', gapBefore: true, note: 'Master of dice, friend of Nala' },
  { id: 'saudasa', name: 'Saudasa (Kalmashapada)', gapBefore: true, note: 'Cursed to become a rakshasa; freed by Vasishtha' },
  { id: 'khatvanga', name: 'Khatvanga (Dilipa)', gapBefore: true },
  { id: 'dirghabahu', name: 'Dirghabahu' },
  { id: 'raghu', name: 'Raghu', note: 'The line is also called Raghu-vamsha after him' },
  { id: 'aja', name: 'Aja', spouse: 'Indumati' },
  { id: 'dasharatha', name: 'Dasharatha', spouse: 'Kausalya, Kaikeyi, Sumitra', branches: [
    { label: 'Rama’s brothers', line: [
      { id: 'lakshmana', name: 'Lakshmana', note: 'Son of Sumitra' },
      { id: 'bharata-r', name: 'Bharata', note: 'Son of Kaikeyi' },
      { id: 'shatrughna', name: 'Shatrughna', note: 'Son of Sumitra' },
    ] },
  ] },
  { id: 'rama', name: 'Rama', person: 'rama', spouse: 'Sita', note: 'Avatara of Vishnu, end of the Treta-yuga', branches: [{ line: [{ id: 'lava', name: 'Lava', note: 'Twin of Kusha' }] }] },
  { id: 'kusha', name: 'Kusha' },
  { id: 'atithi', name: 'Atithi' },
  { id: 'brihadbala', name: 'Brihadbala', gapBefore: true, note: 'Fought for the Kauravas; slain by Abhimanyu at Kurukshetra' },
  { id: 'sumitra', name: 'Sumitra', gapBefore: true, note: 'The last of the line, in the Kali age' },
];

/** Chandra-vamsha: the Lunar dynasty, per the Vishnu Purana, Book IV, with the Mahabharata for the Kurus. */
export const lunar: Line = [
  { id: 'brahma-l', name: 'Brahma', person: 'brahma' },
  { id: 'atri', name: 'Atri', person: 'atri', spouse: 'Anasuya' },
  { id: 'soma', name: 'Soma (Chandra)', note: 'The Moon, who gives the line its name' },
  { id: 'budha', name: 'Budha', spouse: 'Ila, child of Vaivasvata Manu', note: 'Here the Lunar line joins the Solar line' },
  { id: 'pururavas', name: 'Pururavas', spouse: 'Urvashi (the apsaras)' },
  { id: 'ayu', name: 'Ayu' },
  { id: 'nahusha', name: 'Nahusha', note: 'Ruled heaven as Indra for a time; cursed to become a serpent' },
  {
    id: 'yayati',
    name: 'Yayati',
    spouse: 'Devayani (daughter of Shukra) and Sharmishtha',
    note: 'Traded his old age for his youngest son’s youth; his five sons found five great peoples',
    branches: [
      {
        label: 'Yadu, son of Devayani: the Yadavas (Haihaya branch)',
        line: [
          { id: 'yadu', name: 'Yadu' },
          { id: 'kartavirya', name: 'Kartavirya Arjuna', gapBefore: true, note: 'The thousand-armed Haihaya king, slain by Parashurama' },
        ],
      },
      {
        label: 'Also from Yadu: the Vrishni line, the house of Krishna',
        line: [
          { id: 'shura', name: 'Shura', gapBefore: true, branches: [{ label: 'Daughter', line: [{ id: 'kunti', name: 'Pritha (Kunti)', note: 'Adopted by Kuntibhoja; mother of the Pandavas' }] }] },
          { id: 'vasudeva', name: 'Vasudeva', spouse: 'Devaki, Rohini', branches: [{ line: [{ id: 'balarama', name: 'Balarama', note: 'Son of Rohini' }] }] },
          { id: 'krishna', name: 'Krishna', person: 'krishna', spouse: 'Rukmini and others', note: 'Avatara of Vishnu, end of the Dvapara-yuga' },
          { id: 'pradyumna', name: 'Pradyumna' },
          { id: 'aniruddha', name: 'Aniruddha' },
          { id: 'vajra', name: 'Vajra', person: 'vajra', note: 'Made king at Indraprastha after the Yadavas destroyed one another' },
        ],
      },
      { label: 'Other sons', line: [{ id: 'turvasu', name: 'Turvasu', note: 'Son of Devayani' }, ] },
      { line: [{ id: 'druhyu', name: 'Druhyu', note: 'Son of Sharmishtha' }] },
      { line: [{ id: 'anu', name: 'Anu', note: 'Son of Sharmishtha' }] },
    ],
  },
  { id: 'puru', name: 'Puru', note: 'The youngest son, who gave his youth to his father and inherited the throne' },
  { id: 'dushyanta', name: 'Dushyanta', gapBefore: true, spouse: 'Shakuntala (foster-daughter of Kanva)' },
  { id: 'bharata', name: 'Bharata', note: 'Bharata-varsha, India, is named after him' },
  { id: 'hastin', name: 'Hastin', gapBefore: true, note: 'Founded Hastinapura' },
  { id: 'ajamidha', name: 'Ajamidha', gapBefore: true },
  { id: 'samvarana', name: 'Samvarana', gapBefore: true, spouse: 'Tapati, daughter of the Sun' },
  { id: 'kuru', name: 'Kuru', note: 'The field of Kuru (Kurukshetra) and the Kuru line are named after him' },
  { id: 'pratipa', name: 'Pratipa', gapBefore: true, branches: [{ label: 'Elder brothers of Shantanu', line: [{ id: 'devapi', name: 'Devapi', note: 'Became an ascetic' }] }, { line: [{ id: 'bahlika', name: 'Bahlika' }] }] },
  {
    id: 'shantanu',
    name: 'Shantanu',
    spouse: 'Ganga; Satyavati',
    branches: [
      { label: 'Son of Ganga', line: [{ id: 'bhishma', name: 'Bhishma', person: 'bhishma', note: 'Vowed never to marry or rule' }] },
      { label: 'Satyavati’s son before her marriage, by Parashara', line: [{ id: 'vyasa-l', name: 'Vyasa', person: 'vyasa' }] },
      { label: 'Elder son of Satyavati', line: [{ id: 'chitrangada', name: 'Chitrangada', note: 'Died young' }] },
    ],
  },
  { id: 'vichitravirya', name: 'Vichitravirya', spouse: 'Ambika, Ambalika', note: 'Died childless; Vyasa fathered his heirs by niyoga' },
  {
    id: 'pandu',
    name: 'Pandu',
    spouse: 'Kunti, Madri',
    branches: [
      { label: 'Brothers', line: [{ id: 'dhritarashtra', name: 'Dhritarashtra', person: 'dhritarashtra', spouse: 'Gandhari', note: 'Father of Duryodhana and the hundred Kauravas' }] },
      { line: [{ id: 'vidura', name: 'Vidura', person: 'vidura' }] },
      {
        label: 'Arjuna’s brothers (with Arjuna, the five Pandavas)',
        line: [
          { id: 'yudhishthira', name: 'Yudhishthira', person: 'yudhishthira', note: 'Son of Kunti, by Dharma' },
          { id: 'bhima', name: 'Bhima', note: 'Son of Kunti, by Vayu' },
          { id: 'nakula', name: 'Nakula & Sahadeva', note: 'Twin sons of Madri, by the Ashvins' },
        ],
      },
    ],
  },
  { id: 'arjuna', name: 'Arjuna', person: 'arjuna', spouse: 'Draupadi, Subhadra and others', note: 'Son of Kunti, by Indra' },
  { id: 'abhimanyu', name: 'Abhimanyu', spouse: 'Uttara' },
  { id: 'parikshit', name: 'Parikshit', person: 'parikshit', note: 'Heard the Bhagavata from Shuka' },
  { id: 'janamejaya', name: 'Janamejaya', person: 'janamejaya', note: 'Heard the Mahabharata at his snake sacrifice' },
  { id: 'shatanika', name: 'Shatanika', person: 'shatanika' },
  { id: 'kshemaka', name: 'Kshemaka', gapBefore: true, note: 'The last king of the Puru line in the Kali age' },
];

export const DYNASTIES = {
  solar: {
    title: 'Surya-vamsha: the Solar dynasty',
    capital: 'Ayodhya, on the Sarayu',
    blurb: 'From the Sun through Vaivasvata Manu and Ikshvaku to Rama and beyond. The kings of Ayodhya, with Vasishtha as their family priest.',
    line: solar,
    sources: [dynastySources.vp4, dynastySources.vp4Ikshvaku, dynastySources.bhag9, dynastySources.bhag9_12, dynastySources.ramayana70, dynastySources.ikshvaku, dynastySources.vp4Kali],
  },
  lunar: {
    title: 'Chandra-vamsha: the Lunar dynasty',
    capital: 'Pratishthana (Prayag), later Hastinapura',
    blurb: 'From the Moon through Pururavas and Yayati. His sons found the Yadavas, the house of Krishna, and the Pauravas, the house of the Kurus and Pandavas.',
    line: lunar,
    sources: [dynastySources.vp4, dynastySources.vp4Moon, dynastySources.vp4Puru, dynastySources.bhag9_20, dynastySources.bhag9_23, dynastySources.mbhAdi94, dynastySources.agni274, dynastySources.vp4Kali],
  },
} as const;

/** All nodes, flattened (for search and counting). */
export function flatten(line: Line, out: DNode[] = []): DNode[] {
  for (const n of line) {
    out.push(n);
    for (const b of n.branches ?? []) flatten(b.line, out);
  }
  return out;
}

export const dynastyExtraSources: Source[] = [src.vishnuPurana, dynastySources.wilsonBook4];
