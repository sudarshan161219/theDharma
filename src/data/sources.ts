import type { Source } from './types';

const WL = 'https://www.wisdomlib.org';
/** MIDF's Smriti: a catalogue of Indian inscriptions and manuscript scans. */
const SMRITI = 'https://smriti.midf.org.in';

/** A primary record (inscription or manuscript) in the Smriti catalogue. */
export interface Evidence {
  kind: 'Inscription' | 'Manuscript';
  /** Smriti record id: a number for inscriptions, "MS_1234" for manuscripts. */
  id: number | string;
  title: string;
  /** Date, dynasty, place — whatever the record gives. */
  meta?: string;
  /** Why it matters here, in plain words. */
  note: string;
}

export const evidenceUrl = (e: Evidence) =>
  e.kind === 'Inscription' ? `${SMRITI}/inscription/${e.id}` : `${SMRITI}/manuscript/${e.id}`;
const VPW = `${WL}/hinduism/book/vishnu-purana-wilson`;

/** Wilson's preface reviews each Mahapurana as its own chapter (doc115905–doc115922). */
const wilsonReview = (n: number, name: string): Source => ({
  label: `Wilson's review: ${name} (Vishnu Purana preface)`,
  url: `${VPW}/d/doc${115904 + n}.html`,
});

export const src = {
  vishnuPurana: { label: 'Vishnu Purana (H. H. Wilson)', url: VPW },
  vpTime: { label: 'Vishnu Purana 1.3 — Measure of time', url: `${VPW}/d/doc115938.html` },
  vpManvantaras: {
    label: 'Vishnu Purana 3.1 — The Manus and Manvantaras',
    url: `${VPW}/d/doc115978.html`,
  },
  vpVyasas: {
    label: 'Vishnu Purana 3.3 — The twenty-eight Vyasas',
    url: `${VPW}/d/doc115980.html`,
  },
  vpVedaDivision: {
    label: 'Vishnu Purana 3.4 — Division of the Veda by Krishna Dvaipayana',
    url: `${VPW}/d/doc115981.html`,
  },
  vpClassification: {
    label: 'Wilson — Classification of the Puranas',
    url: `${VPW}/d/doc115904.html`,
  },
  shivaPurana: { label: 'Shiva Purana (J. L. Shastri)', url: `${WL}/hinduism/book/shiva-purana-english` },
  shivaIntro: {
    label: 'Introduction to the Shiva Purana',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc225532.html`,
  },
  shivaGreatness: {
    label: 'Shiva Purana — Greatness of Shivapurana (Ch. 1)',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc225535.html`,
  },
  shivaVidyeshvara: {
    label: 'Shiva Purana — Vidyeshvara-samhita',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc225543.html`,
  },
  shivaVayaviya: {
    label: 'Shiva Purana — Vayaviya-samhita: Origin of the sacred lore',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc226637.html`,
  },
  lingaIncarnations: {
    label: 'Linga Purana 1.24 — Incarnations of Shiva (Yogacharyas & Vyasas)',
    url: `${WL}/hinduism/book/the-linga-purana/d/doc1195237.html`,
  },
  lingaPurana: { label: 'Linga Purana', url: `${WL}/hinduism/book/the-linga-purana` },
  bhagavata: { label: 'Bhagavata Purana', url: `${WL}/hinduism/book/the-bhagavata-purana` },
  bhagavataAvatars: {
    label: 'Bhagavata Purana 1.3 — Twenty-four incarnations of Vishnu',
    url: `${WL}/hinduism/book/the-bhagavata-purana/d/doc1113140.html`,
  },
  mahabharata: { label: 'Mahabharata (K. M. Ganguli)', url: `${WL}/hinduism/book/the-mahabharata-mohan` },
  mbhAdi: {
    label: 'Mahabharata — Adi Parva',
    url: `${WL}/hinduism/book/the-mahabharata-mohan/d/doc374926.html`,
  },
  ramayana: { label: 'Ramayana of Valmiki (H. P. Shastri)', url: `${WL}/hinduism/book/the-ramayana-of-valmiki` },
  ramayanaNarada: {
    label: 'Ramayana 1.1 — Narada relates the story of Rama to Valmiki',
    url: `${WL}/hinduism/book/the-ramayana-of-valmiki/d/doc423851.html`,
  },
  markandeya: { label: 'Markandeya Purana (F. E. Pargiter)', url: `${WL}/hinduism/book/the-markandeya-purana` },
  padma: { label: 'Padma Purana', url: `${WL}/hinduism/book/the-padma-purana` },
  brahmanda: { label: 'Brahmanda Purana (G. V. Tagare)', url: `${WL}/hinduism/book/the-brahmanda-purana` },
  defKalpa: { label: 'Kalpa — definitions', url: `${WL}/definition/kalpa` },
  defVarahaKalpa: { label: 'Varaha-kalpa — definitions', url: `${WL}/definition/varahakalpa` },
  defYogacarya: { label: 'Yogacharya — definitions', url: `${WL}/definition/yogacarya` },
  brahmaPurana: { label: 'Brahma Purana (English)', url: `${WL}/hinduism/book/brahma-purana-english` },
  harivamsha: { label: 'Harivamsha Purana (M. N. Dutt)', url: `${WL}/hinduism/book/harivamsha-purana-dutt` },
  deviBhagavata: { label: 'Devi Bhagavata Purana (Swami Vijnanananda)', url: `${WL}/hinduism/book/devi-bhagavata-purana` },
  deviBhagavataBook7: {
    label: 'Devi Bhagavata — Book 7 (contains the Devi Gita)',
    url: `${WL}/hinduism/book/devi-bhagavata-purana/d/doc57257.html`,
  },
  deviBhagavataReal: {
    label: 'Purana Bulletin — The Devi-Bhagavata as the real Bhagavata',
    url: `${WL}/hinduism/journal/purana-bulletin/d/doc1456799.html`,
  },
  upaStudies: { label: 'R. C. Hazra — Studies in the Upapuranas', url: `${WL}/hinduism/essay/studies-in-the-upapuranas` },
  upaIntro: {
    label: 'Studies in the Upapuranas, Ch. 1 — extent, antiquity and origin',
    url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471554.html`,
  },
  upaDeviBhagavata: {
    label: 'Studies in the Upapuranas 6.5 — The Devi-bhagavata',
    url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471591.html`,
  },
  upaKalika: {
    label: 'Studies in the Upapuranas 6.3 — The Kalika-purana',
    url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471589.html`,
  },
  kalikaStudy: { label: 'The Kalika Purana (literary study)', url: `${WL}/hinduism/essay/the-kalika-purana-literary-study` },
  upaNarasimha: {
    label: 'Studies in the Upapuranas 3.4 — The Narasimha-purana',
    url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471561.html`,
  },
  upaVishnudharmottara: {
    label: 'Studies in the Upapuranas 3.3 — The Vishnudharmottara',
    url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471560.html`,
  },
  upaSaura: {
    label: 'Studies in the Upapuranas 2.1 — The Saura Upapuranas',
    url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471555.html`,
  },
  upaSamba: { label: 'Studies in the Upapuranas — The Samba-purana', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471556.html` },
  upaVishnudharma: { label: 'Studies in the Upapuranas 3.2 — The Vishnudharma', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471558.html` },
  upaKriyayogasara: { label: 'Studies in the Upapuranas 4.2 — The Kriyayogasara', url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471563.html` },
  upaAdi: { label: 'Studies in the Upapuranas 4.3 — The Adi-purana', url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471564.html` },
  upaBrihannaradiya: { label: 'Studies in the Upapuranas 4.6 — The Brihannaradiya', url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471567.html` },
  upaSurya: { label: 'Studies in the Upapuranas 5.4 — The Surya-purana', url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471571.html` },
  upaDeviPurana: { label: 'Studies in the Upapuranas 6.2 — The Devi-purana', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471588.html` },
  upaMahabhagavata: { label: 'Studies in the Upapuranas 6.4 — The Mahabhagavata', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471590.html` },
  upaBrihaddharma: { label: 'Studies in the Upapuranas 7.3 — The Brihaddharma', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471594.html` },
  upaAditya: { label: 'Studies in the Upapuranas 9.2 — The Aditya-purana', url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471604.html` },
  upaSauraPurana: { label: 'Studies in the Upapuranas 9.19 — The Saura-purana', url: `${WL}/hinduism/essay/studies-in-the-upapuranas/d/doc1471623.html` },
  mahabhagavata: { label: 'Mahabhagavata Purana (translation and study)', url: `${WL}/hinduism/book/mahabhagavata-purana-translation` },
  mahabhagavataIntro: { label: 'Mahabhagavata Purana — Introduction', url: `${WL}/hinduism/book/mahabhagavata-purana-translation/d/doc1474207.html` },
  mahabhagavataShiva: {
    label: 'Mahabhagavata Purana Ch. 67 — Thousand names of Shiva',
    url: `${WL}/hinduism/book/mahabhagavata-purana-translation/d/doc1474288.html`,
  },
  brihaddharma: { label: 'Brihaddharma Purana (abridged)', url: `${WL}/hinduism/book/brihaddharma-purana-abridged` },
  brihaddharmaCh1: {
    label: 'Brihaddharma Purana Ch. 1 — Arrival of Suta at Naimisharanya',
    url: `${WL}/hinduism/book/brihaddharma-purana-abridged/d/doc376070.html`,
  },
  brihaddharmaPuranas: {
    label: 'Brihaddharma Purana Ch. 21 — On the Puranas',
    url: `${WL}/hinduism/book/brihaddharma-purana-abridged/d/doc376090.html`,
  },
  wilsonUpapuranas: { label: 'Wilson — The Upa-puranas (Vishnu Purana preface)', url: `${VPW}/d/doc115923.html` },
  kalikaUpaIntro: {
    label: 'Kalika Purana study — Introduction to the Upapuranas (Kurma list)',
    url: `${WL}/hinduism/essay/the-kalika-purana-literary-study/d/doc1474322.html`,
  },
  naradaPanchaLakshana: {
    label: 'Narada Purana (English) 1.3 — Purana pancha-lakshana',
    url: `${WL}/hinduism/book/narada-purana-english/d/doc1460966.html`,
  },
  matsyaPanchaLakshana: {
    label: 'Matsya Purana study — Pancha-lakshana',
    url: `${WL}/hinduism/essay/matsya-purana-critical-study/d/doc628398.html`,
  },
  conceptPanchaLakshana: { label: 'Pancha-lakshana Purana — concept', url: `${WL}/concept/panca-lakshana-purana` },
  conceptShrutiSmriti: { label: 'Shruti and Smriti — concept', url: `${WL}/concept/shruti-and-smriti` },
  conceptItihasaPurana: { label: 'Itihasa and Purana — concept', url: `${WL}/concept/itihasa-and-purana` },
  conceptFourVedas: { label: 'Four Vedas — concept', url: `${WL}/concept/four-vedas` },
  puranicEncyclopaedia: { label: 'Puranic Encyclopaedia (Vettam Mani)', url: `${WL}/hinduism/compilation/puranic-encyclopaedia` },
  // Avataras
  defDashavatara: { label: 'Dashavatara — definitions', url: `${WL}/definition/dashavatara` },
  conceptTenAvataras: { label: 'Ten avataras of Vishnu — concept', url: `${WL}/concept/ten-avataras-of-vishnu` },
  conceptManvantaravatara: { label: 'Manvantara-avatara — concept', url: `${WL}/concept/manvantaravatara` },
  shivaNineteen: {
    label: 'Shiva Purana, Shatarudra-samhita Ch. 5 — The nineteen incarnations of Shiva',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc226401.html`,
  },
  // Acharyas
  brahmaSutraShankara: { label: 'Brahma Sutras with Shankara’s commentary (Thibaut)', url: `${WL}/hinduism/book/brahma-sutras-thibaut` },
  brahmaSutraShankaraIntro: {
    label: 'Brahma Sutra — Shankara Bhashya: Introduction',
    url: `${WL}/hinduism/book/brahma-sutras-thibaut/d/doc63671.html`,
  },
  ishaShankara: { label: 'Ishavasya Upanishad with Shankara’s commentary', url: `${WL}/hinduism/book/ishavasya-upanishad-shankara-bhashya` },
  brahmaSutraRamanuja: { label: 'Brahma Sutras with Ramanuja’s Sri Bhashya (Thibaut)', url: `${WL}/hinduism/book/brahma-sutras-ramanuja` },
  ramanujaGita: {
    label: 'Ramanuja’s interpretation of the Bhagavad Gita (study)',
    url: `${WL}/hinduism/essay/ramanujas-interpretation-of-the-bhagavad-gita/d/doc1121329.html`,
  },
  gitaVaishnava: { label: 'Bhagavad Gita with Vaishnava commentaries', url: `${WL}/hinduism/book/shrimad-bhagavad-gita` },
  chandogyaMadhva: { label: 'Chandogya Upanishad with Madhva’s commentary', url: `${WL}/hinduism/book/chandogya-upanishad-madhva-commentary` },
  ishaMadhva: { label: 'Isha Upanishad with Madhva’s commentary', url: `${WL}/hinduism/book/isopanisad-madhva-commentary` },
  dasgupta3: { label: 'Dasgupta — A History of Indian Philosophy, Vol. 3', url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-3` },
  dasgupta4: { label: 'Dasgupta — A History of Indian Philosophy, Vol. 4', url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-4` },
  dasgupta5: { label: 'Dasgupta — A History of Indian Philosophy, Vol. 5', url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5` },
  dasguptaMadhva: {
    label: 'Dasgupta Vol. 4 — Madhva’s Life',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-4/d/doc209999.html`,
  },
  dasguptaVallabha: {
    label: 'Dasgupta Vol. 4, Ch. XXXI — The Philosophy of Vallabha',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-4/d/doc73874.html`,
  },
  dasguptaNimbarka: {
    label: 'Dasgupta Vol. 3 — Teachers and pupils of the Nimbarka school',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-3/d/doc209978.html`,
  },
  dasguptaShrikantha: {
    label: 'Dasgupta Vol. 5 — Introduction to the philosophy of Shrikantha',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5/d/doc210065.html`,
  },
  chaitanyaBhagavata: { label: 'Chaitanya Bhagavata (Vrindavan Das Thakura)', url: `${WL}/hinduism/book/chaitanya-bhagavata` },
  hinduPhilosophy: { label: 'wisdomlib — Hindu Philosophy portal', url: `${WL}/hindu-philosophy` },
  // Devi
  dmCanto81: { label: 'Markandeya Purana 81 — Commencement of the Devi Mahatmya (Madhu & Kaitabha)', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117155.html` },
  dmCanto82: { label: 'Markandeya Purana 82 — Devi Mahatmya: slaughter of Mahisha’s army', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117157.html` },
  dmCanto83: { label: 'Markandeya Purana 83 — Devi Mahatmya: slaying of Mahisha', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117158.html` },
  dmCanto87: { label: 'Markandeya Purana 87 — Devi Mahatmya: slaying of Chanda and Munda', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117166.html` },
  dmCanto88: { label: 'Markandeya Purana 88 — Devi Mahatmya: slaying of Raktabija', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117167.html` },
  dmCanto90: { label: 'Markandeya Purana 90 — Devi Mahatmya: slaying of Shumbha', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117170.html` },
  dmCanto91: { label: 'Markandeya Purana 91 — Devi Mahatmya: eulogy of the Goddess & her future incarnations', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117171.html` },
  dmCanto93: { label: 'Markandeya Purana 93 — Devi Mahatmya concluded (Suratha & Samadhi)', url: `${WL}/hinduism/book/the-markandeya-purana/d/doc117175.html` },
  conceptDeviMahatmya: { label: 'Devi Mahatmya — concept', url: `${WL}/concept/devi-mahatmya-section` },
  defMahavidya: { label: 'Mahavidya — definitions', url: `${WL}/definition/mahavidya` },
  defNavadurga: { label: 'Navadurga — definitions', url: `${WL}/definition/navadurga` },
  conceptNavadurga: { label: 'Navadurga — concept', url: `${WL}/concept/navadurga` },
  navadurgaStotra: { label: 'Nava-Durga Stotra (hymn)', url: `${WL}/hinduism/hymn/nava-durg%C4%81-stotra/d/doc115547.html` },
  defNavaratri: { label: 'Navaratri — definitions', url: `${WL}/definition/navaratri` },
  defDurga: { label: 'Durga — definitions', url: `${WL}/definition/durga` },
  mbhKamakhya: {
    label: 'Mahabhagavata Purana — Incarnation of the Goddess as Kamakhya',
    url: `${WL}/hinduism/book/mahabhagavata-purana-translation/d/doc1474220.html`,
  },
  mbhLalita: {
    label: 'Mahabhagavata Purana Ch. 23 — Thousand names of Lalita',
    url: `${WL}/hinduism/book/mahabhagavata-purana-translation/d/doc1474244.html`,
  },
  mbhIconography: {
    label: 'Mahabhagavata study, Ch. VII — Iconography of the Mother Goddess (PDF)',
    url: `${WL}/uploads/ocr/essays/mahabhagavata-purana/12-chapter-7.pdf`,
  },
  shivaShatakshi: {
    label: 'Shiva Purana, Uma-samhita Ch. 50 — The incarnation of Shatakshi etc.',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc226610.html`,
  },
  upaShaktaIntro: {
    label: 'Studies in the Upapuranas 6.1 — The Shakta Upapuranas',
    url: `${WL}/hinduism/book/studies-in-the-upapuranas/d/doc1471587.html`,
  },
  dhumavatiEssay: {
    label: 'Essay — Dhumavati, Das Mahavidya and form of Adi Parashakti',
    url: `${WL}/history/essay/bhuta-daiva-worshipping-cult/d/doc1238891.html`,
  },
  bhramariEssay: { label: 'Devi tantra study — Description of Bhramari Devi', url: `${WL}/hinduism/essay/devi-tantra-mantra-yantra-study/d/doc1474144.html` },
  defShakambhari: { label: 'Shakambhari — definitions', url: `${WL}/definition/shakambhari` },
  smriti: { label: 'Smriti — India’s Civilizational Memory (MIDF)', url: SMRITI },
  // Kuladevata
  defKuladevata: { label: 'Kuladevata — definitions', url: `${WL}/definition/kuladevata` },
  conceptKuladevata: { label: 'Kuladevata — concept', url: `${WL}/concept/kuladevata` },
  defKuladeva: { label: 'Kuladeva — definitions', url: `${WL}/definition/kuladeva` },
  defKuladevi: { label: 'Kuladevi — definitions', url: `${WL}/definition/kuladevi` },
  conceptKuladevi: { label: 'Kuladevi — concept', url: `${WL}/concept/kuladevi` },
  defKuladaivata: { label: 'Kuladaivata — definitions', url: `${WL}/definition/kuladaivata` },
  defIshtadevata: { label: 'Ishtadevata — definitions', url: `${WL}/definition/ishtadevata` },
  defGramadevata: { label: 'Gramadevata — definitions', url: `${WL}/definition/gramadevata` },
  gramadevataStory: {
    label: 'Puranic Encyclopaedia — Story of Gramadevata',
    url: `${WL}/hinduism/compilation/puranic-encyclopaedia/d/doc241607.html`,
  },
  defGrihadevata: { label: 'Grihadevata — definitions', url: `${WL}/definition/grihadevata` },
  defKhandoba: { label: 'Khandoba — definitions', url: `${WL}/definition/khandoba` },
  conceptKhandoba: { label: 'Khandoba — concept', url: `${WL}/concept/khandoba` },
  cityTuljapur: { label: 'Tuljapur — definition and history', url: `${WL}/cities/tuljapur-16476` },
  // Gotra
  mbhFourGotras: {
    label: 'Mahabharata, Shanti Parva CCXCVII — “Originally only four Gotras arose”',
    url: `${WL}/hinduism/book/the-mahabharata-mohan/d/doc826255.html`,
  },
  matsyaContents: {
    label: 'Matsya Purana (summary) — chs. 195–202 on the gotras and pravaras of the sages',
    url: `${WL}/hinduism/essay/matsya-purana-critical-study/d/doc628397.html`,
  },
  matsyaBhrigu: { label: 'Matsya Purana study — Lineages of Bhrigu', url: `${WL}/hinduism/essay/historical-elements-in-the-matsya-purana/d/doc1240113.html` },
  matsyaAngiras: { label: 'Matsya Purana study — Lineages of Angiras', url: `${WL}/hinduism/essay/historical-elements-in-the-matsya-purana/d/doc1240114.html` },
  matsyaVishvamitra: { label: 'Matsya Purana study — Lineages of Vishvamitra', url: `${WL}/hinduism/essay/historical-elements-in-the-matsya-purana/d/doc1240116.html` },
  matsyaVasishtha: { label: 'Matsya Purana study — Lineages of Vasishtha', url: `${WL}/hinduism/essay/historical-elements-in-the-matsya-purana/d/doc1240118.html` },
  matsyaKashyapa: { label: 'Matsya Purana study — Lineages of Kashyapa', url: `${WL}/hinduism/essay/historical-elements-in-the-matsya-purana/d/doc1240099.html` },
  skandaDharmaranyaGotras: {
    label: 'Skanda Purana, Dharmaranya Ch. 21 — Gotras and pravaras of the residents',
    url: `${WL}/hinduism/book/the-skanda-purana/d/doc423642.html`,
  },
  manu35: { label: 'Manusmriti 3.5 (with Medhatithi) — which girls are marriageable', url: `${WL}/hinduism/book/manusmriti-with-the-commentary-of-medhatithi/d/doc199777.html` },
  defGotra: { label: 'Gotra — definitions', url: `${WL}/definition/gotra` },
  defPravara: { label: 'Pravara — definitions', url: `${WL}/definition/pravara` },
  defGotrakarin: { label: 'Gotrakarin — definitions', url: `${WL}/definition/gotrakarin` },
  defGotrapravara: { label: 'Gotra-pravara — definitions', url: `${WL}/definition/gotrapravara` },
  conceptGotraPravara: { label: 'Gotras and pravara — concept', url: `${WL}/concept/gotras-and-pravara` },
  // Scriptural roots of family deities
  skandaVenkatachala: { label: 'Skanda Purana, Vaishnava-khanda — Venkatachala-mahatmya', url: `${WL}/hinduism/book/the-skanda-purana/d/doc370679.html` },
  skandaVenkateshvara: { label: 'Skanda Purana, Venkatachala-mahatmya Ch. 18 — The glory of Shri Venkateshvara', url: `${WL}/hinduism/book/the-skanda-purana/d/doc370697.html` },
  skandaSrinivasaMarriage: { label: 'Skanda Purana, Venkatachala-mahatmya Ch. 8 — Marriage of Shrinivasa and Padmavati', url: `${WL}/hinduism/book/the-skanda-purana/d/doc370687.html` },
  skandaKarttikeyaBirth: { label: 'Skanda Purana — Birth of Karttikeya (Skanda)', url: `${WL}/hinduism/book/the-skanda-purana/d/doc493434.html` },
  defKarttikeya: { label: 'Karttikeya — definitions', url: `${WL}/definition/karttikeya` },
  skandaBhairava: { label: 'Skanda Purana — The manifestation of Bhairava', url: `${WL}/hinduism/book/the-skanda-purana/d/doc423769.html` },
  defMartanda: { label: 'Martanda — definitions', url: `${WL}/definition/martanda` },
  defMallari: { label: 'Mallari (Malhari) — definitions', url: `${WL}/definition/mallari` },
  lalitaKamakshi: { label: 'Lalitopakhyana (Brahmanda Purana) Ch. 40 — Greatness of Kamakshi', url: `${WL}/hinduism/book/lalitopakhyana-lalita-mahatmya/d/doc362982.html` },
  defHalasya: { label: 'Halasya-mahatmya (Skanda Purana; Meenakshi of Madurai) — definitions', url: `${WL}/definition/halasyamahatmya` },
  bhagavataMohini: { label: 'Bhagavata Purana 8.12 — Lord Shiva fascinated by Mohini', url: `${WL}/hinduism/book/the-bhagavata-purana/d/doc1128826.html` },
  defMohini: { label: 'Mohini — definitions', url: `${WL}/definition/mohini` },
  lingaDaruka: { label: 'Linga Purana 1.106 — Kali slays Daruka; Shiva’s Tandava', url: `${WL}/hinduism/book/the-linga-purana/d/doc1196086.html` },
  defBhadrakali: { label: 'Bhadrakali — definitions', url: `${WL}/definition/bhadrakali` },
  vpParashurama: { label: 'Vishnu Purana — Legend of Parashurama (Jamadagni & Renuka)', url: `${VPW}/d/doc116004.html` },
  storyJamadagni: { label: 'Puranic Encyclopaedia — Story of Jamadagni', url: `${WL}/hinduism/compilation/puranic-encyclopaedia/d/doc241636.html` },
  defMahalakshmi: { label: 'Mahalakshmi — definitions', url: `${WL}/definition/mahalakshmi` },
  defVaishnavi: { label: 'Vaishnavi — definitions', url: `${WL}/definition/vaishnavi` },
  // Chandas (metre)
  defAnushtubh: { label: 'Anushtubh — definitions', url: `${WL}/definition/anushtubh` },
  defAnushtup: { label: 'Anushtup — definitions', url: `${WL}/definition/anushtup` },
  conceptAnushtubhMetre: { label: 'Anushtubh metre — concept', url: `${WL}/concept/anushtubh-metre` },
  defSloka: { label: 'Shloka — definitions', url: `${WL}/definition/sloka` },
  defPada: { label: 'Pada — definitions', url: `${WL}/definition/pada` },
  anushtubhRigveda: {
    label: 'Poetic spirit of the Rigvedic seers 2.3 — Description of the Anushtubh metre',
    url: `${WL}/hinduism/essay/poetic-spirit-of-the-rigvedic-seers/d/doc1887610.html`,
  },
  defChandahsutra: { label: 'Chandahsutra (Pingala) — definitions', url: `${WL}/definition/chandahsutra` },
  defPingalaSutra: { label: 'Pingala-sutra — definitions', url: `${WL}/definition/pingalasutra` },
  defChandasshastra: { label: 'Chandas-shastra — definitions', url: `${WL}/definition/chandasshastra` },
  chandasIntro: {
    label: 'Glimpses of the History of Sanskrit Literature, Ch. 27 — Introduction to Chandah-shastra',
    url: `${WL}/history/book/glimpses-of-history-of-sanskrit-literature/d/doc1546783.html`,
  },
  chandasRhythm: { label: 'Mudrarakshasa study — Chandas, the science of rhythm', url: `${WL}/hinduism/essay/mudrarakshasa-literary-study/d/doc1196509.html` },
  ramayanaFirstShloka: {
    label: 'Ramayana, Bala-kanda 2 — Valmiki creates the metrical form (the first shloka)',
    url: `${WL}/hinduism/book/the-ramayana-of-valmiki/d/doc423852.html`,
  },
  conceptFirstSloka: { label: 'First shloka (mā niṣāda) — concept', url: `${WL}/concept/first-sloka` },
  // Sacred places
  jyotirlingaList: {
    label: 'Shiva Purana, Kotirudra-samhita Ch. 1 — The Jyotirlingas and their Upalingas',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc226440.html`,
  },
  jyotirlingaIncarnations: {
    label: 'Shiva Purana, Shatarudra-samhita Ch. 42 — The twelve Jyotirlinga incarnations',
    url: `${WL}/hinduism/book/shiva-purana-english/d/doc226438.html`,
  },
  kotirudra: { label: 'Shiva Purana — Kotirudra-samhita', url: `${WL}/hinduism/book/shiva-purana-english/d/doc226439.html` },
  defJyotirlinga: { label: 'Jyotirlinga — definitions', url: `${WL}/definition/jyotirlinga` },
  jyotirlingaEssay: {
    label: 'Rudra-Shiva concept study — Twelve Jyotirlinga incarnations',
    url: `${WL}/hinduism/essay/rudra-shiva-concept-study/d/doc1146675.html`,
  },
  skandaOmkara: { label: 'Skanda Purana — The greatness of Omkara', url: `${WL}/hinduism/book/the-skanda-purana/d/doc423812.html` },
  lingaSrishaila: { label: 'Linga Purana Ch. 92 — Glory of Shrishaila', url: `${WL}/hinduism/book/the-linga-purana/d/doc1196072.html` },
  defShaktipitha: { label: 'Shaktipitha — definitions', url: `${WL}/definition/shaktipitha` },
  defShaktapitha: { label: 'Shaktapitha — definitions', url: `${WL}/definition/shaktapitha` },
  conceptShaktipitha: { label: 'Shakti Pithas — concept', url: `${WL}/concept/shaktipitha` },
  shaktaPithasEssay: {
    label: 'Soundarya Lahari study — The Shakta Pithas',
    url: `${WL}/hinduism/essay/soundarya-lahari-of-shri-shankara-study/d/doc1527307.html`,
  },
  pithaYatra: {
    label: 'Shaiva Tantra study Ch. 15 — Pitha-yatra (pilgrimage to sacred places)',
    url: `${WL}/hinduism/essay/shaiva-tantra-a-way-of-self-awareness/d/doc1460199.html`,
  },
  mbhSati: {
    label: 'Mahabhagavata Purana — Incarnation of the Goddess as Sati',
    url: `${WL}/hinduism/book/mahabhagavata-purana-translation/d/doc1474217.html`,
  },
  defPurnagiri: { label: 'Purnagiri — definitions', url: `${WL}/definition/purnagiri` },
  defJalandhara: { label: 'Jalandhara — definitions', url: `${WL}/definition/jalandhara` },
  defUpapurana: { label: 'Upapurana — definitions', url: `${WL}/definition/upapurana` },
  defGaneshaPurana: { label: 'Ganesha Purana — definitions', url: `${WL}/definition/ganesha-purana` },
  defVishnudharmottara: { label: 'Vishnudharmottara Purana — definitions', url: `${WL}/definition/vishnudharmottarapurana` },
  // ——— Darshanas & sampradayas ———
  dasgupta1: { label: 'Dasgupta — A History of Indian Philosophy, Vol. 1', url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1` },
  dasgupta2: { label: 'Dasgupta — A History of Indian Philosophy, Vol. 2', url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-2` },
  dgGeneral: {
    label: 'Dasgupta Vol. 1, Ch. IV — General observations on the systems of Indian philosophy',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc6979.html`,
  },
  dgBeforeBuddha: {
    label: 'Dasgupta Vol. 1 — The state of philosophy in India before the Buddha',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209742.html`,
  },
  dgNyayaVaisheshika: {
    label: 'Dasgupta Vol. 1, Ch. VIII — The Nyaya-Vaisheshika philosophy',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc6985.html`,
  },
  dgNyayaSutras: {
    label: 'Dasgupta Vol. 1 — Nyaya and Vaisheshika sutras',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209809.html`,
  },
  dgNyayaPramanas: {
    label: 'Dasgupta Vol. 1 — The four pramanas of Nyaya',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209822.html`,
  },
  dgCausation: {
    label: 'Dasgupta Vol. 1 — The Nyaya-Vaisheshika theory of causation',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209817.html`,
  },
  dgSamkhyaTexts: {
    label: 'Dasgupta Vol. 1 — Samkhya-karika, Samkhya-sutra, Vachaspati and Vijnanabhikshu',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209788.html`,
  },
  dgEarlySamkhya: {
    label: 'Dasgupta Vol. 1 — An early school of Samkhya',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209787.html`,
  },
  dgPurusha: {
    label: 'Dasgupta Vol. 1 — The Samkhya and Yoga doctrine of soul (Purusha)',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209790.html`,
  },
  dgYoga: {
    label: 'Dasgupta Vol. 1 — Yoga and Patanjali',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209789.html`,
  },
  dgMimamsa: {
    label: 'Dasgupta Vol. 1, Ch. IX — Mimamsa philosophy',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc6986.html`,
  },
  dgMimamsaLit: {
    label: 'Dasgupta Vol. 1 — The Mimamsa literature',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209831.html`,
  },
  dgSvatahPramanya: {
    label: 'Dasgupta Vol. 1 — Svatah-pramanya and paratah-pramanya',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209832.html`,
  },
  dgAnupalabdhi: {
    label: 'Dasgupta Vol. 1 — The pramana of non-perception (anupalabdhi)',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209841.html`,
  },
  dgMimamsaGod: {
    label: 'Dasgupta Vol. 1 — Mimamsa on self, salvation and God',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209842.html`,
  },
  dgVedantaLit: {
    label: 'Dasgupta Vol. 1 — Vedanta literature',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209846.html`,
  },
  dgGaudapada: {
    label: 'Dasgupta Vol. 1 — Vedanta in Gaudapada',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209847.html`,
  },
  dgShankara: {
    label: 'Dasgupta Vol. 1 — Vedanta and Shankara',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-1/d/doc209848.html`,
  },
  dgCarvaka: {
    label: 'Dasgupta Vol. 3, Appendix I — The Lokayata, Nastika and Carvaka',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-3/d/doc7637.html`,
  },
  dgShivaPurana: {
    label: 'Dasgupta Vol. 5 — The Shaiva philosophy in the Shiva Purana',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5/d/doc210068.html`,
  },
  dgPashupata: {
    label: 'Dasgupta Vol. 5 — The doctrine of the Pashupata sutras',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5/d/doc210070.html`,
  },
  dgShaivaSiddhanta: {
    label: 'Dasgupta Vol. 5 — Manikkavachakar and Shaiva Siddhanta',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5/d/doc210072.html`,
  },
  dgVirashaiva: {
    label: 'Dasgupta Vol. 5 — History and literature of Virashaivism',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-5/d/doc210063.html`,
  },
  kapilaBhagavata: {
    label: 'Dasgupta Vol. 4 — Kapila’s philosophy in the Bhagavata Purana',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-4/d/doc209997.html`,
  },
  samkhyaGita: {
    label: 'Dasgupta Vol. 2 — Samkhya and Yoga in the Gita',
    url: `${WL}/hinduism/book/a-history-of-indian-philosophy-volume-2/d/doc209923.html`,
  },
  yogaSutras: { label: 'Yoga Sutras with Vyasa’s bhashya and Vachaspati Mishra', url: `${WL}/hinduism/book/yoga-sutras-with-commentaries` },
  yogaSutrasStudy: { label: 'Yoga Sutras: ancient and modern interpretations', url: `${WL}/hinduism/book/yoga-sutras-study` },
  vaisheshikaSutra: { label: 'Vaisheshika Sutra with commentary (Kanada)', url: `${WL}/hinduism/book/vaisheshika-sutra-commentary` },
  nyayaSutraPrameyas: { label: 'Prameyas in the Nyaya Sutra of Gautama', url: `${WL}/hinduism/essay/prameyas-in-the-nyaya-sutra` },
  samkhyaKarikaIntro: {
    label: 'Introduction to the Samkhya-karika of Ishvarakrishna',
    url: `${WL}/hinduism/essay/samkhya-thoughts-in-the-mahabharata/d/doc1210263.html`,
  },
  conceptShanmata: { label: 'Shanmata — concept', url: `${WL}/concept/shanmata` },
  conceptShaivaSiddhanta: { label: 'Shaiva Siddhanta — concept', url: `${WL}/concept/shaiva-siddhanta` },
  conceptRamanandi: { label: 'Ramanandi sampradaya — concept', url: `${WL}/concept/ramanandi-sampradaya` },
  conceptWarkari: { label: 'Warkari pilgrim — concept', url: `${WL}/concept/warkari-pilgrim` },
  vaikhanasaPancaratra: { label: 'Vaikhanasa and Pancharatra (Diksha in Pancharatra)', url: `${WL}/hinduism/essay/diksha-initiation-in-pancharatra/d/doc1458637.html` },
  historicalVaishnavism: { label: 'Sri Krishna Chaitanya, Ch. 9 — Historical Vaishnavism', url: `${WL}/hinduism/book/sri-krishna-chaitanya/d/doc1112793.html` },
  shaktiAndShakta: { label: 'Woodroffe — Shakti and Shakta, Ch. VI', url: `${WL}/hinduism/book/shakti-and-shakta/d/doc210193.html` },
  wilsonReview,
} satisfies Record<string, Source | ((n: number, name: string) => Source)>;

/**
 * Bibek Debroy's unabridged translations (Penguin). Not hosted on wisdomlib, so they are
 * listed as further reading. Links go to Penguin India's own pages.
 */
const PENGUIN = 'https://www.penguin.co.in';
const DEBROY_AUTHOR = `${PENGUIN}/book_author/bibek-debroy-3/`;
const debroy = (title: string, url = DEBROY_AUTHOR): Source => ({
  label: `${title} — tr. Bibek Debroy (Penguin)`,
  url,
});

export const debroyBooks = {
  mahabharata: debroy('The Mahabharata, 10 vols', `${PENGUIN}/book/the-mahabharata-11/`),
  ramayana: debroy('The Valmiki Ramayana, 3 vols'),
  harivamsha: debroy('Harivamsha'),
  gita: debroy('The Bhagavad Gita', `${PENGUIN}/book/the-bhagavadgita-2/`),
  bhagavata: debroy('The Bhagavata Purana, 3 vols', `${PENGUIN}/book/bhagavata-purana-boxset/`),
  markandeya: debroy('The Markandeya Purana'),
  brahma: debroy('The Brahma Purana, 2 vols'),
  vishnu: debroy('Vishnu Purana', `${PENGUIN}/book/vishnu-purana/`),
  shiva: debroy('Shiva Purana, 3 vols', `${PENGUIN}/book/shiva-purana-boxset/`),
  brahmanda: debroy('Brahmanda Purana, 2 vols', `${PENGUIN}/book/brahmanda-purana/`),
  kurma: debroy('Kurma Purana', `${PENGUIN}/book/kurma-purana/`),
};

/** Link to wisdomlib's definition page for a term (for people/terms without a dedicated chapter). */
export const defn = (slug: string, label: string): Source => ({
  label: `${label} — wisdomlib definitions`,
  url: `${WL}/definition/${slug}`,
});
