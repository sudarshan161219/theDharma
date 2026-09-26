import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— Shaiva Siddhanta ——————————————————————— */

/** The three eternal realities (tripadartha). */
export const tripadartha: { id: 'pati' | 'pashu' | 'pasha'; name: string; sanskrit: string; meaning: string; about: string }[] = [
  {
    id: 'pati',
    name: 'Pati',
    sanskrit: 'पति',
    meaning: 'The Lord',
    about: 'Shiva: one, all-knowing, all-doing, eternally free of every impurity. He is pure consciousness and grace, and acts only for the good of souls. He is never born and never takes a body of flesh.',
  },
  {
    id: 'pashu',
    name: 'Pashu',
    sanskrit: 'पशु',
    meaning: 'The soul, “the tethered one”',
    about: 'Countless individual souls, each eternal and by nature conscious, able to know and act like Shiva. But since beginningless time that power has been covered, as a cow is tethered by a rope.',
  },
  {
    id: 'pasha',
    name: 'Pasha',
    sanskrit: 'पाश',
    meaning: 'The bond, the rope',
    about: 'What binds the soul: anava, karma and maya. The bonds are real and eternal, but they can be loosened from a soul, which is the whole purpose of Shiva’s activity.',
  },
];

/** Three causes of the world, with the classic image of the potter. */
export const threeCauses: { cause: string; sanskrit: string; who: string; image: string }[] = [
  { cause: 'Efficient cause', sanskrit: 'निमित्त', who: 'Shiva', image: 'The potter' },
  { cause: 'Instrumental cause', sanskrit: 'सहकारि', who: 'His Shakti', image: 'The wheel and staff' },
  { cause: 'Material cause', sanskrit: 'उपादान', who: 'Maya', image: 'The clay' },
];

/** The bonds. Usually counted as three; some texts add two more to make five. */
export const pashas: { name: string; sanskrit: string; about: string; extra?: boolean }[] = [
  { name: 'Anava', sanskrit: 'आणव', about: 'The root impurity, beginningless and one with each soul like verdigris on copper: it darkens the soul’s knowing and acting. It is never destroyed, only made powerless.' },
  { name: 'Karma', sanskrit: 'कर्म', about: 'The deeds, good and bad, whose fruits must be lived out. They bind the soul to birth after birth.' },
  { name: 'Maya', sanskrit: 'माया', about: 'A real, eternal, unconscious substance: the stuff of bodies, senses and worlds. Paradoxically it is also a help, a lamp in the dark, since through embodied experience the soul ripens.' },
  { name: 'Mayeya', sanskrit: 'मायेय', about: 'The products of maya: the actual bodies and worlds.', extra: true },
  { name: 'Tirodhana', sanskrit: 'तिरोधान', about: 'Shiva’s own concealing power, which keeps the bonds at work until the soul is ripe. Called a bond only by courtesy: it is his mercy.', extra: true },
];

/** Three classes of soul, by how many bonds they carry. */
export const soulClasses: { name: string; sanskrit: string; bonds: string; about: string }[] = [
  { name: 'Vijnanakala', sanskrit: 'विज्ञानाकल', bonds: 'Anava', about: 'Free of maya and karma, with only the root impurity left. Shiva frees them from within.' },
  { name: 'Pralayakala', sanskrit: 'प्रलयाकल', bonds: 'Anava, karma', about: 'Souls resting in the dissolution of the worlds, when maya has withdrawn. Shiva frees them appearing in his own form.' },
  { name: 'Sakala', sanskrit: 'सकल', bonds: 'Anava, karma, maya', about: 'Embodied souls like us. Shiva frees them by coming as a human guru.' },
];

/** The three states (avastha) of every soul’s long journey. */
export const avasthas: { name: string; sanskrit: string; about: string }[] = [
  { name: 'Kevala', sanskrit: 'केवल', about: 'Alone with anava: no body, no senses, no experience. The soul lies inert, like an eye in total darkness.' },
  { name: 'Sakala', sanskrit: 'सकल', about: 'Out of compassion, Shiva gives the soul a body and world from maya. Through births and deeds it learns and its impurity slowly ripens.' },
  { name: 'Shuddha', sanskrit: 'शुद्ध', about: 'Purified by grace and knowledge, the soul rests at Shiva’s feet in bliss.' },
];

/** Shiva’s five acts, as shown in the dance of Nataraja at Chidambaram. */
export const natarajaActs: { act: string; sanskrit: string; meaning: string; sign: string }[] = [
  { act: 'Srishti', sanskrit: 'सृष्टि', meaning: 'Creation', sign: 'The drum (damaru) in the upper right hand: the first sound' },
  { act: 'Sthiti', sanskrit: 'स्थिति', meaning: 'Preservation', sign: 'The lower right hand raised in “fear not” (abhaya)' },
  { act: 'Samhara', sanskrit: 'संहार', meaning: 'Dissolution', sign: 'The flame in the upper left hand' },
  { act: 'Tirodhana', sanskrit: 'तिरोधान', meaning: 'Concealment', sign: 'The right foot planted on the dwarf Apasmara (Muyalakan), ignorance' },
  { act: 'Anugraha', sanskrit: 'अनुग्रह', meaning: 'Grace', sign: 'The raised left foot, to which the lower left hand points: refuge for souls' },
];

/** The four paths (pada), their Tamil names, exemplary saints and the fruit of each. */
export const fourPaths: { pada: string; sanskrit: string; tamil: string; relation: string; saint: string; practice: string; fruit: string; fruitMeaning: string }[] = [
  {
    pada: 'Charya',
    sanskrit: 'चर्या',
    tamil: 'Dasa marga',
    relation: 'The path of the servant',
    saint: 'Appar',
    practice: 'Serving in the temple: sweeping, making garlands, lighting lamps, singing',
    fruit: 'Salokya',
    fruitMeaning: 'Living in Shiva’s world',
  },
  {
    pada: 'Kriya',
    sanskrit: 'क्रिया',
    tamil: 'Satputra marga',
    relation: 'The path of the good son',
    saint: 'Sambandar',
    practice: 'Worship (puja) of Shiva, outwardly and inwardly, after initiation',
    fruit: 'Samipya',
    fruitMeaning: 'Nearness to Shiva',
  },
  {
    pada: 'Yoga',
    sanskrit: 'योग',
    tamil: 'Saha marga (sakha marga)',
    relation: 'The path of the friend',
    saint: 'Sundarar',
    practice: 'Inner worship: breath, meditation, mantra, the eight limbs of yoga',
    fruit: 'Sarupya',
    fruitMeaning: 'A form like Shiva’s',
  },
  {
    pada: 'Jnana',
    sanskrit: 'ज्ञान',
    tamil: 'San marga',
    relation: 'The true path',
    saint: 'Manikkavasagar',
    practice: 'Knowledge of Pati, pashu and pasha, from the guru and the Agama',
    fruit: 'Sayujya',
    fruitMeaning: 'Union with Shiva',
  },
];

/** How grace comes: the steps named in the Tamil texts. */
export const graceSteps: { name: string; sanskrit: string; about: string }[] = [
  { name: 'Iruvinai-oppu', sanskrit: 'இருவினையொப்பு', about: '“Balance of the two deeds”: the soul meets pleasure and pain, merit and demerit, with an even mind.' },
  { name: 'Malaparipaka', sanskrit: 'मलपरिपाक', about: '“Ripening of impurity”: anava, like a fruit, loosens its hold.' },
  { name: 'Shaktinipata', sanskrit: 'शक्तिनिपात', about: '“Descent of grace”: inwardly a great longing for Shiva; outwardly, the meeting with a true guru.' },
  { name: 'Diksha', sanskrit: 'दीक्षा', about: 'Initiation in three grades: samaya (entry), vishesha (right to worship Shiva) and nirvana, which burns up the soul’s store of karma.' },
  { name: 'Shivajnana', sanskrit: 'शिवज्ञान', about: 'Knowledge from the guru and the Agama, meditation on the five syllables (na-maḥ-śi-vā-ya), and at last rest at Shiva’s feet.' },
];

/** The 36 tattvas as the Siddhanta groups them. */
export const siddhantaTattvas: { name: string; sanskrit: string; count: number; from: string; items: string }[] = [
  { name: 'Shiva tattvas', sanskrit: 'शिवतत्त्व', count: 5, from: 'From pure maya (bindu), set in motion by Shakti', items: 'Nada (Shiva), Bindu (Shakti), Sadashiva, Ishvara, Shuddhavidya' },
  { name: 'Vidya tattvas', sanskrit: 'विद्यातत्त्व', count: 7, from: 'From impure maya', items: 'Maya, Kala (time), Niyati, Kala (agency), Vidya, Raga, Purusha' },
  { name: 'Atma tattvas', sanskrit: 'आत्मतत्त्व', count: 24, from: 'From prakriti', items: 'Prakriti; buddhi, ahamkara, manas; 5 senses; 5 organs of action; 5 tanmatras; 5 elements' },
];

/** The 28 Agamas, as revealed by the five faces of Shiva. The first ten are Shaiva, the other eighteen Raudra. */
export const agamasByFace: { face: string; sanskrit: string; agamas: string[] }[] = [
  { face: 'Sadyojata', sanskrit: 'सद्योजात', agamas: ['Kamika', 'Yogaja', 'Chintya', 'Karana', 'Ajita'] },
  { face: 'Vamadeva', sanskrit: 'वामदेव', agamas: ['Dipta', 'Sukshma', 'Sahasra', 'Amshumat', 'Suprabheda'] },
  { face: 'Aghora', sanskrit: 'अघोर', agamas: ['Vijaya', 'Nihshvasa', 'Svayambhuva', 'Agneya', 'Vira'] },
  { face: 'Tatpurusha', sanskrit: 'तत्पुरुष', agamas: ['Raurava', 'Makuta', 'Vimala', 'Chandrajnana', 'Mukhabimba'] },
  { face: 'Ishana', sanskrit: 'ईशान', agamas: ['Prodgita', 'Lalita', 'Siddha', 'Santana', 'Sarvokta', 'Parameshvara', 'Kirana', 'Vatula'] },
];

/** The four sections (pada) of every Agama. */
export const agamaPadas: { name: string; subject: string }[] = [
  { name: 'Vidya (jnana) pada', subject: 'Doctrine: Pati, pashu and pasha' },
  { name: 'Yoga pada', subject: 'Meditation and inner discipline' },
  { name: 'Kriya pada', subject: 'Ritual: initiation, daily worship, temple building, festivals' },
  { name: 'Charya pada', subject: 'Conduct and observances' },
];

/** The first eleven books were gathered by Nambiyandar Nambi; Sekkizhar’s Periya Puranam was added as the twelfth. */
export const tirumurai: { books: string; name: string; by: string; about: string }[] = [
  { books: '1–3', name: 'Tevaram', by: 'Tirujnana Sambandar', about: 'The child-saint’s hymns, sung from shrine to shrine' },
  { books: '4–6', name: 'Tevaram', by: 'Appar (Tirunavukkarasar)', about: 'Hymns of the elder saint, won back from Jainism' },
  { books: '7', name: 'Tevaram', by: 'Sundarar', about: 'Hymns of Shiva’s friend; includes the Tiruttondattogai, the first list of the devotees' },
  { books: '8', name: 'Tiruvasagam and Tirukkovaiyar', by: 'Manikkavasagar', about: 'The most loved songs of longing for Shiva' },
  { books: '9', name: 'Tiruvisaippa and Tiruppallandu', by: 'Nine poets', about: 'Hymns, many to Nataraja of Chidambaram' },
  { books: '10', name: 'Tirumantiram', by: 'Tirumular', about: 'Over three thousand verses on doctrine, yoga and worship: the bridge from hymn to philosophy' },
  { books: '11', name: 'Various works', by: 'Karaikkal Ammaiyar, Nakkirar and others', about: 'Forty works, among them the earliest Tamil Shaiva poems' },
  { books: '12', name: 'Periya Puranam', by: 'Sekkizhar (12th century)', about: 'The lives of the 63 Nayanars' },
];

/** The Shivajnanabodham’s twelve sutras, in its own four groups. Paraphrased. */
export const bodhamSutras: { group: string; about: string; sutras: string[] }[] = [
  {
    group: 'Proof (pramana)',
    about: 'That the three exist',
    sutras: [
      'The world, which appears and dissolves, must have a maker who dissolves it: that is Hara.',
      'The Lord is one with souls and yet other than them; by his Shakti he makes them live out their deeds.',
      'The soul exists, distinct from body, senses and mind: it is what says “my body”.',
    ],
  },
  {
    group: 'Nature (lakshana)',
    about: 'What each is like',
    sutras: [
      'The soul is not the inner organ, but knows through it, as a king through his ministers.',
      'Senses know through the soul, and the soul knows only through Shiva, as a magnet moves iron.',
      'Shiva is neither a thing that can be known (that would be unreal) nor unknowable (that would be nothing): he is the Real.',
    ],
  },
  {
    group: 'Means (sadhana)',
    about: 'How the soul is freed',
    sutras: [
      'Only the soul, which is neither the Real nor the unreal but can cling to either, can know both.',
      'To the ripened soul the Lord, who was within all along, appears as the guru and wakes it.',
      'Seeing the Lord with the eye of grace, the soul turns from the world and meditates on the five syllables.',
    ],
  },
  {
    group: 'Fruit (payan)',
    about: 'What liberation is',
    sutras: [
      'The soul, one with the Lord in all it does, is no longer touched by the bonds.',
      'As the eye sees by the soul’s help, the soul knows by the Lord’s; so it reaches his feet.',
      'The freed soul loves Shiva’s devotees and his temple forms as Shiva himself.',
    ],
  },
];

/** Teachers of the two streams, oldest first. Dates are approximate. */
export const siddhantaTeachers: { name: string; stream: 'Sanskrit' | 'Tamil'; dates: string; role: string; works: string }[] = [
  { name: 'Tirumular', stream: 'Tamil', dates: 'Date uncertain', role: 'Yogi and poet counted among the 63 Nayanars; tradition places him very early', works: 'Tirumantiram' },
  { name: 'Appar and Sambandar', stream: 'Tamil', dates: '7th century', role: 'Two of the four great saints (Nalvar), who sang the Tevaram', works: 'Tevaram, books 1–6' },
  { name: 'Sadyojyoti', stream: 'Sanskrit', dates: 'c. 675–725', role: 'Earliest known philosopher of the Siddhanta, probably in Kashmir', works: 'Tattvasangraha, Nareshvarapariksha, Mokshakarika' },
  { name: 'Sundarar', stream: 'Tamil', dates: '8th century', role: 'The third of the Nalvar; listed the devotees whom Sekkizhar later told of', works: 'Tevaram, book 7' },
  { name: 'Manikkavasagar', stream: 'Tamil', dates: 'c. 9th century', role: 'The fourth of the Nalvar, minister to a Pandya king', works: 'Tiruvasagam' },
  { name: 'Ramakantha', stream: 'Sanskrit', dates: 'c. 950–1000', role: 'Kashmiri commentator who defended dualism against the non-dual Shaivas', works: 'Commentaries on the Matanga and Kirana Agamas' },
  { name: 'Bhoja', stream: 'Sanskrit', dates: '11th century', role: 'King of Dhara who wrote a short summa of the system', works: 'Tattvaprakasha' },
  { name: 'Aghorashiva', stream: 'Sanskrit', dates: '12th century', role: 'Chidambaram teacher whose ritual manual still guides South Indian temple priests', works: 'Kriyakramadyotika; commentary on the Tattvaprakasha' },
  { name: 'Sekkizhar', stream: 'Tamil', dates: '12th century', role: 'Chola minister, who told the lives of the saints', works: 'Periya Puranam' },
  { name: 'Meykandar', stream: 'Tamil', dates: '13th century', role: 'Founder of the Tamil philosophical Siddhanta; first of the four teachers (santana acharyas)', works: 'Shivajnanabodham' },
  { name: 'Arulnandi', stream: 'Tamil', dates: '13th century', role: 'Meykandar’s disciple, who expanded his teaching', works: 'Shivajnana Siddhiyar' },
  { name: 'Umapati Shivacharya', stream: 'Tamil', dates: '14th century', role: 'Chidambaram priest; author of eight of the fourteen Meykanda Shastras', works: 'Shivaprakasham, Tiruvarutpayan' },
];

/** Three answers to the same questions. */
export const shaivaCompare: { topic: string; siddhanta: string; trika: string; advaita: string }[] = [
  { topic: 'What is real?', siddhanta: 'Three eternal realities: Shiva, souls, bonds', trika: 'Shiva alone, as free consciousness', advaita: 'Brahman alone' },
  { topic: 'The soul', siddhanta: 'Eternal and many, never becomes the Lord', trika: 'Shiva himself, self-limited', advaita: 'Brahman itself, mistaken as limited' },
  { topic: 'Maya', siddhanta: 'A real, unconscious substance: the clay of the world', trika: 'Shiva’s power of self-limitation', advaita: 'Beginningless ignorance, neither real nor unreal' },
  { topic: 'The world', siddhanta: 'Real, made by Shiva from maya', trika: 'Real, as Shiva’s manifestation', advaita: 'An appearance (mithya)' },
  { topic: 'Liberation', siddhanta: 'The soul rests at Shiva’s feet, inseparable yet distinct', trika: 'Recognising oneself as Shiva', advaita: 'Knowing oneself as Brahman' },
  { topic: 'The means', siddhanta: 'Grace through initiation, worship and knowledge', trika: 'Grace and the four upayas', advaita: 'Knowledge from the Upanishads' },
];

export const siddhantaSources: Source[] = [
  src.defShaivaSiddhanta,
  src.conceptShaivaSiddhanta,
  src.conceptPatiPashuPasha,
  src.dgShaivaSiddhanta,
  src.dgBhoja,
  src.cosmogonySiddhanta,
  src.agamaTempleSiddhanta,
  src.agamaMeaning,
  src.agamaPractices,
  src.sivaprakasamGuru,
  src.sivaprakasamLiberation,
  src.tirumantiram,
  src.tirumantiram115,
  src.tevaramStudy,
  defn('shivajnanabodha', 'Shivajnanabodha'),
  defn('shivaprakasha', 'Shivaprakasha'),
  defn('shaivagama', 'Shaivagama'),
  defn('shaktinipata', 'Shaktinipata'),
  defn('tirumurai', 'Tirumurai'),
  defn('periyapuranam', 'Periya Puranam'),
  defn('sadyojyotis', 'Sadyojyoti'),
  defn('tattvaprakasa', 'Tattvaprakasha'),
];
