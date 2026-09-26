import type { Source } from './types';
import { defn, src } from './sources';

export const trimurti: { role: string; guna: string; deva: string; shakti: string; vahana: string; abode: string; emblems: string; note: string; to?: string }[] = [
  {
    role: 'Creation',
    guna: 'Rajas (activity)',
    deva: 'Brahma',
    shakti: 'Sarasvati: knowledge, speech, music',
    vahana: 'Hamsa (swan)',
    abode: 'Satyaloka',
    emblems: 'Four heads (the four Vedas), water-pot, rosary, book',
    note: 'Born from the lotus of Vishnu’s navel. Rarely worshipped in temples; Pushkar is the famous exception.',
    to: '#/people/brahma',
  },
  {
    role: 'Preservation',
    guna: 'Sattva (clarity)',
    deva: 'Vishnu',
    shakti: 'Lakshmi: fortune, prosperity, grace',
    vahana: 'Garuda (eagle)',
    abode: 'Vaikuntha; sleeps on Ananta in the milk ocean',
    emblems: 'Conch, discus (Sudarshana), mace, lotus',
    note: 'Descends as avataras whenever dharma declines.',
    to: '#/avatars',
  },
  {
    role: 'Dissolution',
    guna: 'Tamas (inertia)',
    deva: 'Shiva',
    shakti: 'Parvati: power, devotion; also Durga and Kali',
    vahana: 'Nandi (bull)',
    abode: 'Kailasa',
    emblems: 'Trident, drum (damaru), crescent moon, the Ganga in his hair, third eye',
    note: 'Dissolves the world at the end of time so it can be made anew. Worshipped as the linga.',
    to: '#/places?show=jyotirlinga',
  },
];

/* ——————————————————————— The Trimurti in each sampradaya ——————————————————————— */

export type TriStatus = 'equal' | 'supreme' | 'self' | 'expansion' | 'jiva' | 'agent' | 'special' | 'form';

export const statusLabel: Record<TriStatus, string> = {
  equal: 'an equal form of Brahman',
  supreme: 'the Supreme itself',
  self: 'the Supreme’s own form',
  expansion: 'an expansion of the Supreme',
  jiva: 'an exalted soul (jiva) holding an office',
  agent: 'an agent of the Supreme',
  special: 'a unique category (shiva-tattva)',
  form: 'a form of the Supreme',
};

export interface TrimurtiView {
  id: string;
  tradition: string;
  school: string;
  /** Link to the tradition on the Darshanas page. */
  to: string;
  supreme: string;
  /** The Supreme stands above the three (false: one of the three is itself the Supreme, or all are equal). */
  above: boolean;
  brahma: TriStatus;
  vishnu: TriStatus;
  shiva: TriStatus;
  summary: string;
  /** `paraphrase`: a summary in our words, not a quotation. */
  verse: { iast?: string; meaning: string; ref: string; paraphrase?: boolean };
  sources: Source[];
}

export const trimurtiViews: TrimurtiView[] = [
  {
    id: 'smarta',
    tradition: 'Smarta',
    school: 'Advaita (Shankara)',
    to: '#/darshanas?t=smarta',
    supreme: 'Nirguna Brahman',
    above: true,
    brahma: 'equal',
    vishnu: 'equal',
    shiva: 'equal',
    summary:
      'The three are equal: saguna Brahman (Ishvara) acting through the three gunas, rajas as Brahma, sattva as Vishnu, tamas as Shiva. None is higher. Above them is Brahman without qualities, which is one’s own Self. Hence the Smarta worships five deities side by side (panchayatana) and sees Shiva and Vishnu as one (Harihara).',
    verse: { meaning: 'Its part that is rajas is Brahma, its part that is sattva is Vishnu, its part that is tamas is Rudra.', ref: 'Maitri Upanishad 5.2, in summary', paraphrase: true },
    sources: [src.conceptShanmata, src.brahmaSutraShankara, defn('trimurti', 'Trimurti')],
  },
  {
    id: 'sri',
    tradition: 'Sri Vaishnava',
    school: 'Vishishtadvaita (Ramanuja)',
    to: '#/darshanas?t=vaishnava',
    supreme: 'Narayana with Sri',
    above: false,
    brahma: 'jiva',
    vishnu: 'self',
    shiva: 'jiva',
    summary:
      'Narayana is Para Brahman. Vishnu of the Trimurti is Narayana himself, come to preserve the world. Brahma is the highest of souls, born from the lotus of Narayana’s navel; Rudra is born from Brahma. Both are jivas who hold their offices for a kalpa, empowered by Narayana, and are themselves his devotees. The Vishnu Purana (1.2) says the one Janardana takes the names Brahma, Vishnu and Shiva.',
    verse: { iast: 'eko ha vai nārāyaṇa āsīn na brahmā neśānaḥ', meaning: 'In the beginning Narayana alone was; there was neither Brahma nor Ishana (Shiva).', ref: 'Maha Upanishad 1.1, cited by Ramanuja' },
    sources: [src.brahmaSutraRamanuja, src.dasgupta3, src.vishnuPurana],
  },
  {
    id: 'madhva',
    tradition: 'Madhva',
    school: 'Dvaita (Madhva)',
    to: '#/darshanas?t=vaishnava',
    supreme: 'Vishnu (Narayana)',
    above: false,
    brahma: 'jiva',
    vishnu: 'supreme',
    shiva: 'jiva',
    summary:
      'Vishnu alone is independent (svatantra); everything else depends on him. Madhva ranks all beings in a gradation (taratamya): Vishnu, then Lakshmi, then Brahma and Vayu, the highest souls, then Sarasvati, then Garuda, Shesha and Rudra. Brahma and Shiva are great souls who serve Vishnu and will attain liberation by his grace.',
    verse: { meaning: 'Vishnu is the highest (sarvottama); the jivas are graded, and differ even in liberation.', ref: 'Madhva’s doctrine of taratamya, in summary', paraphrase: true },
    sources: [src.dasguptaMadhva, src.dasgupta4, defn('taratamya', 'Taratamya')],
  },
  {
    id: 'gaudiya',
    tradition: 'Gaudiya Vaishnava',
    school: 'Achintya Bhedabheda (Chaitanya)',
    to: '#/darshanas?t=vaishnava',
    supreme: 'Krishna (svayam Bhagavan)',
    above: true,
    brahma: 'jiva',
    vishnu: 'expansion',
    shiva: 'special',
    summary:
      'Krishna is the source of all. Vishnu of the Trimurti is his expansion (Kshirodakashayi Vishnu), fully divine. Brahma is usually an empowered jiva. Shiva is in a class of his own: not an ordinary soul, yet not Vishnu; the Brahma Samhita (5.45) compares him to milk turned to curd, the same substance transformed for the work of dissolution.',
    verse: { iast: 'kṛṣṇas tu bhagavān svayam', meaning: 'But Krishna is Bhagavan himself.', ref: 'Bhagavata Purana 1.3.28' },
    sources: [src.historicalVaishnavism, src.chaitanyaBhagavata, defn('brahmasamhita', 'Brahma Samhita')],
  },
  {
    id: 'shaiva',
    tradition: 'Shaiva Siddhanta',
    school: 'Shaiva (Agamic)',
    to: '#/darshanas?t=shaiva',
    supreme: 'Parashiva (Parameshvara)',
    above: true,
    brahma: 'agent',
    vishnu: 'agent',
    shiva: 'form',
    summary:
      'The Supreme Shiva is beyond the Trimurti and performs five acts (pancha-kritya): creation, preservation, dissolution, concealment and grace. Brahma, Vishnu and Rudra carry out the first three as his agents; Maheshvara conceals and Sadashiva grants grace. Rudra of the Trimurti is a lower form of Shiva, not Parashiva himself. Kashmir Shaivism likewise sees all as Shiva’s own self-expression.',
    verse: { iast: 'eko hi rudro na dvitīyāya tasthuḥ', meaning: 'Rudra is one; they did not admit a second.', ref: 'Shvetashvatara Upanishad 3.2' },
    sources: [src.dgShaivaSiddhanta, src.dgShivaPurana, defn('pancakritya', 'Pancha-kritya')],
  },
  {
    id: 'shakta',
    tradition: 'Shakta',
    school: 'Shakta Advaita',
    to: '#/darshanas?t=shakta',
    supreme: 'Devi (Adi Parashakti)',
    above: true,
    brahma: 'agent',
    vishnu: 'agent',
    shiva: 'agent',
    summary:
      'Devi is the Supreme; the three act only through the Shaktis she gives them. In the Devi Bhagavata (Book 3) Brahma, Vishnu and Shiva are carried to her island of Manidvipa and, seeing her, praise her as their mother. Lalita is “seated on the five Brahmas” (pancha-brahmasana-sthita): Brahma, Vishnu, Rudra and Ishvara are the legs of her throne and Sadashiva its seat.',
    verse: { iast: 'śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṃ na ced evaṃ devo na khalu kuśalaḥ spanditum api', meaning: 'Only united with Shakti is Shiva able to create; otherwise the deva cannot even stir.', ref: 'Saundarya Lahari 1' },
    sources: [src.deviBhagavata, src.upaDeviBhagavata, src.shaktiAndShakta, defn('saundaryalahari', 'Saundarya Lahari')],
  },
  {
    id: 'ganapatya',
    tradition: 'Ganapatya',
    school: 'Ganesha as Brahman',
    to: '#/darshanas?t=others',
    supreme: 'Ganesha (Ganapati)',
    above: true,
    brahma: 'form',
    vishnu: 'form',
    shiva: 'form',
    summary: 'Ganesha is Brahman itself, and the Trimurti are his forms. The Ganesha and Mudgala Puranas tell how he appeared before each of the three to grant them their powers.',
    verse: { iast: 'tvaṃ brahmā tvaṃ viṣṇus tvaṃ rudraḥ', meaning: 'You are Brahma, you are Vishnu, you are Rudra.', ref: 'Ganapati Atharvashirsha' },
    sources: [defn('ganapatya', 'Ganapatya'), src.defGaneshaPurana],
  },
];

/** Brihadaranyaka 3.9: Yajnavalkya's answer to Vidagdha Shakalya. */
export const godsCountdown: { n: string; answer: string }[] = [
  { n: '3,306', answer: 'The glories (mahiman) of the devas' },
  { n: '33', answer: 'The real devas: 8 Vasus, 11 Rudras, 12 Adityas, Indra and Prajapati' },
  { n: '6', answer: 'Fire, earth, air, sky, sun and heaven' },
  { n: '3', answer: 'The three worlds' },
  { n: '2', answer: 'Food and breath' },
  { n: '1½', answer: 'The wind, which blows and makes all things grow (adhyardha)' },
  { n: '1', answer: 'Prana, the breath: it is Brahman, called “that” (tyat)' },
];

export const thirtyThree: { group: string; count: number; upanishad: string; names: string[]; namesFrom: string; tone: 'gold' | 'accent' | 'indigo' | 'muted' }[] = [
  {
    group: 'Vasus',
    count: 8,
    upanishad: 'Fire, earth, air, sky, sun, heaven, moon and stars: “in them all this is placed (vasu)”',
    names: ['Dhara', 'Dhruva', 'Soma', 'Aha', 'Anila', 'Anala', 'Pratyusha', 'Prabhasa'],
    namesFrom: 'Mahabharata (Adi Parva). Prabhasa was born on earth as Bhishma.',
    tone: 'gold',
  },
  {
    group: 'Rudras',
    count: 11,
    upanishad: 'The ten breaths in a person, with the self as the eleventh: when they leave the body, they make people weep (rud)',
    names: ['Hara', 'Bahurupa', 'Tryambaka', 'Aparajita', 'Vrishakapi', 'Shambhu', 'Kapardi', 'Raivata', 'Mrigavyadha', 'Sharva', 'Kapali'],
    namesFrom: 'Vishnu Purana 1.15; lists vary between texts.',
    tone: 'accent',
  },
  {
    group: 'Adityas',
    count: 12,
    upanishad: 'The twelve months of the year, which carry off (ādā) all things as they pass',
    names: ['Vishnu', 'Shakra', 'Aryaman', 'Dhatri', 'Tvashtri', 'Pushan', 'Vivasvat', 'Savitri', 'Mitra', 'Varuna', 'Amsha', 'Bhaga'],
    namesFrom: 'Vishnu Purana; sons of Aditi and Kashyapa. Each rides the sun’s chariot for one month.',
    tone: 'indigo',
  },
  {
    group: 'Indra and Prajapati',
    count: 2,
    upanishad: 'Indra is the thunder; Prajapati is the sacrifice',
    names: ['Indra', 'Prajapati'],
    namesFrom: 'Some lists put the two Ashvins in their place.',
    tone: 'muted',
  },
];

export const vedicGods: { name: string; sanskrit: string; hymns: number; role: string }[] = [
  { name: 'Indra', sanskrit: 'इन्द्र', hymns: 250, role: 'King of the devas, wielder of the thunderbolt; slays Vritra and frees the waters' },
  { name: 'Agni', sanskrit: 'अग्नि', hymns: 200, role: 'Fire: the priest and messenger who carries offerings to the devas; opens the Rig Veda' },
  { name: 'Soma', sanskrit: 'सोम', hymns: 120, role: 'The sacred drink and its deva; all of Mandala 9 is his' },
  { name: 'Ashvins', sanskrit: 'अश्विनौ', hymns: 55, role: 'Twin horsemen of dawn, physicians of the devas' },
  { name: 'Ushas', sanskrit: 'उषस्', hymns: 20, role: 'Dawn, a radiant young woman who wakes all beings' },
  { name: 'Varuna', sanskrit: 'वरुण', hymns: 12, role: 'Guardian of cosmic order (rita); sees every falsehood (often paired with Mitra)' },
  { name: 'Surya', sanskrit: 'सूर्य', hymns: 10, role: 'The sun, eye of the devas; as Savitri, the impeller praised in the Gayatri' },
  { name: 'Vishnu', sanskrit: 'विष्णु', hymns: 6, role: 'Measures the three worlds in three strides' },
  { name: 'Rudra', sanskrit: 'रुद्र', hymns: 4, role: 'The fierce archer and healer: later Shiva' },
];

export const navagrahas: { name: string; sanskrit: string; body: string; day: string; parents: string; role: string; dir: string }[] = [
  { name: 'Surya', sanskrit: 'सूर्य', body: 'Sun', day: 'Sunday', parents: 'Son of Kashyapa and Aditi', role: 'King of the grahas; the soul and father', dir: 'Centre' },
  { name: 'Chandra', sanskrit: 'चन्द्र', body: 'Moon', day: 'Monday', parents: 'Born of Atri (or from the churned ocean)', role: 'The mind and mother; husband of the 27 nakshatras', dir: 'SE' },
  { name: 'Mangala', sanskrit: 'मङ्गल', body: 'Mars', day: 'Tuesday', parents: 'Son of Bhumi, the Earth', role: 'Courage, the commander of the grahas', dir: 'S' },
  { name: 'Budha', sanskrit: 'बुध', body: 'Mercury', day: 'Wednesday', parents: 'Son of Chandra and Tara', role: 'Intellect and speech; father of Pururavas, founder of the Lunar line', dir: 'NE' },
  { name: 'Brihaspati', sanskrit: 'बृहस्पति', body: 'Jupiter', day: 'Thursday', parents: 'Son of Angiras', role: 'Guru of the devas; wisdom and dharma', dir: 'N' },
  { name: 'Shukra', sanskrit: 'शुक्र', body: 'Venus', day: 'Friday', parents: 'Son of Bhrigu', role: 'Guru of the asuras; knows the secret of reviving the dead', dir: 'E' },
  { name: 'Shani', sanskrit: 'शनि', body: 'Saturn', day: 'Saturday', parents: 'Son of Surya and Chhaya', role: 'The slow one; karma, discipline, delay', dir: 'W' },
  { name: 'Rahu', sanskrit: 'राहु', body: 'Ascending lunar node', day: '—', parents: 'Head of the asura Svarbhanu', role: 'Svarbhanu drank the nectar in disguise; Vishnu’s discus cut off his head. He swallows the sun and moon at eclipses', dir: 'SW' },
  { name: 'Ketu', sanskrit: 'केतु', body: 'Descending lunar node', day: '—', parents: 'Body of Svarbhanu', role: 'Detachment and liberation; the headless half', dir: 'NW' },
];

export const dikpalas: { dir: string; short: string; name: string; sanskrit: string; weapon: string; vahana: string; consort: string }[] = [
  { dir: 'East', short: 'E', name: 'Indra', sanskrit: 'इन्द्र', weapon: 'Vajra (thunderbolt)', vahana: 'Airavata, the white elephant', consort: 'Shachi' },
  { dir: 'South-east', short: 'SE', name: 'Agni', sanskrit: 'अग्नि', weapon: 'Shakti (spear)', vahana: 'Ram', consort: 'Svaha' },
  { dir: 'South', short: 'S', name: 'Yama', sanskrit: 'यम', weapon: 'Danda (staff)', vahana: 'Buffalo', consort: 'Dhumorna' },
  { dir: 'South-west', short: 'SW', name: 'Nirriti', sanskrit: 'निरृति', weapon: 'Sword', vahana: 'A man (nara)', consort: '—' },
  { dir: 'West', short: 'W', name: 'Varuna', sanskrit: 'वरुण', weapon: 'Pasha (noose)', vahana: 'Makara', consort: 'Varuni' },
  { dir: 'North-west', short: 'NW', name: 'Vayu', sanskrit: 'वायु', weapon: 'Ankusha (goad) or banner', vahana: 'Antelope', consort: '—' },
  { dir: 'North', short: 'N', name: 'Kubera', sanskrit: 'कुबेर', weapon: 'Gada (mace)', vahana: 'A man, or the Pushpaka chariot', consort: 'Riddhi' },
  { dir: 'North-east', short: 'NE', name: 'Ishana', sanskrit: 'ईशान', weapon: 'Trishula', vahana: 'Nandi, the bull', consort: 'Parvati' },
];

export const devaSources: Source[] = [
  src.brihadThirtyThree,
  src.conceptThirtyThree,
  src.vpAdityas,
  src.vpRudras,
  src.vpMindBorn,
  src.rigVeda,
  src.defDikpala,
  src.defAshtadikpala,
  src.defNavagraha,
  defn('trimurti', 'Trimurti'),
  defn('vasu', 'Vasu'),
  defn('aditya', 'Aditya'),
  defn('rudra', 'Rudra'),
];
