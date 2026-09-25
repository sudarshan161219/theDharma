import type { Manvantara, Vyasa, Yuga } from './types';

/** One divine year (divya varsha) = 360 human years. */
export const DIVINE_YEAR = 360;
export const MAHAYUGA_YEARS = 4_320_000;
export const MAHAYUGAS_PER_MANVANTARA = 71;
export const MANVANTARA_YEARS = MAHAYUGA_YEARS * MAHAYUGAS_PER_MANVANTARA; // 306,720,000
/** Each manvantara is followed by a sandhi as long as a Satya-yuga. */
export const MANVANTARA_SANDHI = 1_728_000;
export const KALPA_YEARS = 1000 * MAHAYUGA_YEARS; // 4.32 billion
export const BRAHMA_LIFE_YEARS = 100 * 360 * 2 * KALPA_YEARS; // day + night, 360 days, 100 years
/** Traditional start of Kali-yuga: 18 Feb 3102 BCE (Krishna's departure). */
export const KALI_START_BCE = 3102;

export const yugas: Yuga[] = [
  {
    id: 'satya',
    name: 'Satya (Krita) Yuga',
    sanskrit: 'सत्य / कृत युग',
    divineYears: 4000,
    sandhya: 800, // dawn + dusk combined
    humanYears: 1_728_000,
    dharmaLegs: 4,
    lifespan: '100,000 years',
    practice: 'Meditation (dhyana)',
    vishnuColour: 'White',
    notable: ['Matsya, Kurma, Varaha, Narasimha avataras', 'Dharma stands on four legs: truth, austerity, purity, compassion'],
  },
  {
    id: 'treta',
    name: 'Treta Yuga',
    sanskrit: 'त्रेता युग',
    divineYears: 3000,
    sandhya: 600,
    humanYears: 1_296_000,
    dharmaLegs: 3,
    lifespan: '10,000 years',
    practice: 'Sacrifice (yajna)',
    vishnuColour: 'Red',
    notable: ['Vamana, Parashurama and Rama avataras', 'Ramayana', 'Vedic sacrifice at its height'],
  },
  {
    id: 'dvapara',
    name: 'Dvapara Yuga',
    sanskrit: 'द्वापर युग',
    divineYears: 2000,
    sandhya: 400,
    humanYears: 864_000,
    dharmaLegs: 2,
    lifespan: '1,000 years',
    practice: 'Worship (archana)',
    vishnuColour: 'Yellow / dark (Krishna)',
    notable: ['A Vyasa appears in every Dvapara to divide the Veda', 'Krishna avatara, Mahabharata (28th Dvapara)'],
  },
  {
    id: 'kali',
    name: 'Kali Yuga',
    sanskrit: 'कलि युग',
    divineYears: 1000,
    sandhya: 200,
    humanYears: 432_000,
    dharmaLegs: 1,
    lifespan: '100 years',
    practice: 'Chanting the Name (nama-sankirtana)',
    vishnuColour: 'Dark',
    notable: ['Began 3102 BCE when Krishna left the world', 'Kalki will appear at its end', 'Shiva appears as a Yogacharya at the start of each Kali (Shiva/Linga Purana)'],
  },
];

/** Vishnu Purana 3.1–3.2 (Wilson). Names follow Wilson’s spelling, simplified. */
export const manvantaras: Manvantara[] = [
  { n: 1, manu: 'Svayambhuva', indra: 'Yajna', saptarishi: ['Marichi', 'Atri', 'Angiras', 'Pulastya', 'Pulaha', 'Kratu', 'Vasishtha'], avatara: 'Yajna (son of Akuti)', note: 'Son of Brahma; his daughters Akuti, Devahuti and Prasuti populate the world.' },
  { n: 2, manu: 'Svarochisha', indra: 'Vipaschit', saptarishi: ['Urja', 'Stambha', 'Prana', 'Dattoli', 'Rishabha', 'Nischara', 'Arvarivat'], avatara: 'Ajita' },
  { n: 3, manu: 'Auttami (Uttama)', indra: 'Sushanti', saptarishi: ['The seven sons of Vasishtha'], avatara: 'Satya' },
  { n: 4, manu: 'Tamasa', indra: 'Shibi', saptarishi: ['Jyotirdhama', 'Prithu', 'Kavya', 'Chaitra', 'Agni', 'Vanaka', 'Pivara'], avatara: 'Hari' },
  { n: 5, manu: 'Raivata', indra: 'Vibhu', saptarishi: ['Hiranyaroma', 'Vedashri', 'Urdhvabahu', 'Vedabahu', 'Sudhaman', 'Parjanya', 'Mahamuni'], avatara: 'Manasa' },
  { n: 6, manu: 'Chakshusha', indra: 'Manojava', saptarishi: ['Sumedhas', 'Virajas', 'Havishmat', 'Uttama', 'Madhu', 'Abhinaman', 'Sahishnu'], avatara: 'Vaikuntha' },
  { n: 7, manu: 'Vaivasvata (Shraddhadeva)', indra: 'Purandara', saptarishi: ['Vasishtha', 'Kashyapa', 'Atri', 'Jamadagni', 'Gautama', 'Vishvamitra', 'Bharadvaja'], avatara: 'Vamana (son of Kashyapa and Aditi)', note: 'The present age. Son of Vivasvan, the Sun. Ikshvaku, founder of the Solar dynasty, is his son.' },
  { n: 8, manu: 'Savarni (Surya-savarni)', indra: 'Bali', saptarishi: ['Diptimat', 'Galava', 'Rama (Parashurama)', 'Kripa', 'Drauni (Ashvatthama)', 'Vyasa', 'Rishyashringa'], note: 'Next manvantara. Bali, humbled by Vamana, becomes Indra.' },
  { n: 9, manu: 'Daksha-savarni', indra: 'Adbhuta', saptarishi: ['Savana', 'Dyutimat', 'Bhavya', 'Vasu', 'Medhatithi', 'Jyotishman', 'Satya'] },
  { n: 10, manu: 'Brahma-savarni', indra: 'Shanti', saptarishi: ['Havishman', 'Sukriti', 'Satya', 'Apammurti', 'Nabhaga', 'Apratimaujas', 'Satyaketu'] },
  { n: 11, manu: 'Dharma-savarni', indra: 'Vrisha', saptarishi: ['Nishchara', 'Agnitejas', 'Vapushman', 'Vishnu', 'Aruni', 'Havishman', 'Anagha'] },
  { n: 12, manu: 'Rudra-savarni', indra: 'Ritadhama', saptarishi: ['Tapasvi', 'Sutapas', 'Tapomurti', 'Taporati', 'Tapodhriti', 'Tapodyuti', 'Tapodhana'] },
  { n: 13, manu: 'Rauchya', indra: 'Divaspati', saptarishi: ['Nirmoha', 'Tattvadarshin', 'Nishprakampya', 'Nirutsuka', 'Dhritimat', 'Avyaya', 'Sutapas'] },
  { n: 14, manu: 'Bhautya', indra: 'Shuchi', saptarishi: ['Agnibahu', 'Shuchi', 'Shukra', 'Magadha', 'Gridhra', 'Yukta', 'Ajita'], note: 'Last manvantara of this day of Brahma.' },
];

export const CURRENT_MANVANTARA = 7;
export const CURRENT_MAHAYUGA = 28;

/** Vishnu Purana 3.3 — Vyasas of the Vaivasvata manvantara, one per Dvapara. */
export const vyasas: Vyasa[] = [
  { n: 1, name: 'Svayambhu (Brahma)', note: 'Brahma himself arranged the Veda in the first Dvapara.' },
  { n: 2, name: 'Prajapati (Manu)' },
  { n: 3, name: 'Ushanas (Shukra)' },
  { n: 4, name: 'Brihaspati' },
  { n: 5, name: 'Savitri (Surya)' },
  { n: 6, name: 'Mrityu (Yama)' },
  { n: 7, name: 'Indra (Maghavan)' },
  { n: 8, name: 'Vasishtha' },
  { n: 9, name: 'Sarasvata' },
  { n: 10, name: 'Tridhaman' },
  { n: 11, name: 'Trishikha (Trivrishan)' },
  { n: 12, name: 'Bharadvaja' },
  { n: 13, name: 'Antariksha' },
  { n: 14, name: 'Vapra (Varni)' },
  { n: 15, name: 'Trayyaruna' },
  { n: 16, name: 'Dhananjaya' },
  { n: 17, name: 'Kritanjaya' },
  { n: 18, name: 'Rinajyeshtha (Rina)' },
  { n: 19, name: 'Bharadvaja' },
  { n: 20, name: 'Gautama' },
  { n: 21, name: 'Uttama (Haryatma)' },
  { n: 22, name: 'Vena (Rajashravas)' },
  { n: 23, name: 'Somashushmayana (Trinabindu)' },
  { n: 24, name: 'Riksha (Valmiki)', note: 'Identified with Valmiki, the poet of the Ramayana.' },
  { n: 25, name: 'Shakti', note: 'Son of Vasishtha.' },
  { n: 26, name: 'Parashara', note: 'Son of Shakti; narrator of the Vishnu Purana.' },
  { n: 27, name: 'Jatukarna' },
  { n: 28, name: 'Krishna Dvaipayana', note: 'Son of Parashara — the Vyasa of our age.' },
];

export const NEXT_VYASA = {
  name: 'Drauni (Ashvatthama)',
  note: 'Son of Drona. The Vishnu Purana (3.3) states that in the next Dvapara, Drauni will be the Vyasa. He is also listed among the Saptarishis of the 8th (Savarni) manvantara.',
};

export const TIME_UNITS: { name: string; value: string }[] = [
  { name: 'Nimesha', value: 'A twinkling of the eye' },
  { name: 'Kashtha', value: '15 nimeshas' },
  { name: 'Kala', value: '30 kashthas' },
  { name: 'Muhurta', value: '30 kalas (≈ 48 minutes)' },
  { name: 'Ahoratra (day + night)', value: '30 muhurtas' },
  { name: 'Masa (month)', value: '30 days; two pakshas (fortnights)' },
  { name: 'Ayana', value: '6 months' },
  { name: 'Human year', value: '2 ayanas = one day and night of the devas' },
  { name: 'Divine year', value: '360 human years' },
];
