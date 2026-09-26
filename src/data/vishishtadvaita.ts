import type { Source } from './types';
import { defn, src } from './sources';

/* ——————————————————————— Vishishtadvaita ——————————————————————— */

/** Verses the school stands on, with how Ramanuja reads them. */
export const vaVerses: { deva: string; iast: string; meaning: string; reading: string; cite: string; source: Source }[] = [
  {
    deva: 'यस्यात्मा शरीरम्',
    iast: 'yasyātmā śarīram',
    meaning: '“He dwells in the self, is within the self; the self does not know him; the self is his body; he rules the self from within: he is your Self, the inner ruler, the immortal.”',
    reading: 'The key text: souls are the body of Brahman, and Brahman is their Self.',
    cite: 'Brihadaranyaka Upanishad 3.7 (the Antaryami Brahmana)',
    source: src.brihadaranyaka,
  },
  {
    deva: 'सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम्',
    iast: 'sad eva somyedam agra āsīd ekam evādvitīyam',
    meaning: '“In the beginning, my dear, this was Being alone, one only, without a second.”',
    reading: 'There is no second Brahman and nothing outside him; but “one” does not mean “without qualities”: before creation, souls and matter lay within him in subtle form.',
    cite: 'Chandogya Upanishad 6.2.1',
    source: src.ramanujaMahavakyas,
  },
  {
    deva: 'मत्तः परतरं नान्यत् किञ्चिदस्ति धनञ्जय',
    iast: 'mattaḥ parataraṃ nānyat kiñcid asti dhanañjaya',
    meaning: '“There is nothing higher than me, Arjuna; all this is strung on me like pearls on a thread.”',
    reading: 'All things are real and distinct, as pearls are; yet none stands apart from the Lord, the thread.',
    cite: 'Bhagavad Gita 7.7',
    source: src.ramanujaGita,
  },
];

/** The three reals (tattva-traya). */
export const tattvaTraya: { id: 'ishvara' | 'chit' | 'achit'; name: string; sanskrit: string; meaning: string; about: string; kinds: { name: string; note: string }[] }[] = [
  {
    id: 'ishvara',
    name: 'Ishvara',
    sanskrit: 'ईश्वर',
    meaning: 'The Lord: Narayana with Sri',
    about: 'The one Brahman, the Self of all. Free of every defect and full of countless auspicious qualities, never without Lakshmi.',
    kinds: [
      { name: 'Para', note: 'Transcendent, in Vaikuntha' },
      { name: 'Vyuha', note: 'The four emanations' },
      { name: 'Vibhava', note: 'The avataras' },
      { name: 'Antaryamin', note: 'Within every heart' },
      { name: 'Archa', note: 'The consecrated image' },
    ],
  },
  {
    id: 'chit',
    name: 'Chit',
    sanskrit: 'चित्',
    meaning: 'Conscious souls',
    about: 'Countless, eternal, atomic in size, each by nature knowing and blissful. Their knowledge expands and contracts with karma, but the soul itself never changes.',
    kinds: [
      { name: 'Baddha', note: 'Bound in samsara' },
      { name: 'Mukta', note: 'Once bound, now freed' },
      { name: 'Nitya', note: 'Never bound: Ananta, Garuda, Vishvaksena' },
    ],
  },
  {
    id: 'achit',
    name: 'Achit',
    sanskrit: 'अचित्',
    meaning: 'Non-conscious matter',
    about: 'Real, not illusion. It exists for souls, as the stage of their experience, and for the Lord, as his play.',
    kinds: [
      { name: 'Shuddha-sattva', note: 'Pure matter, the stuff of Vaikuntha' },
      { name: 'Mishra-sattva', note: 'Prakriti with the three gunas: our world' },
      { name: 'Sattva-shunya', note: 'Without gunas: time (kala)' },
    ],
  },
];

/** The three relations that make the world the Lord’s body. */
export const bodyRelations: { name: string; sanskrit: string; lord: string; world: string; about: string }[] = [
  { name: 'Support', sanskrit: 'आधार–आधेय', lord: 'Supporter (adhara)', world: 'Supported (adheya)', about: 'Nothing exists except as held in being by him.' },
  { name: 'Control', sanskrit: 'नियन्तृ–नियाम्य', lord: 'Controller (niyantri)', world: 'Controlled (niyamya)', about: 'He moves all from within, as the soul moves its body.' },
  { name: 'Ownership', sanskrit: 'शेषि–शेष', lord: 'Owner (sheshi)', world: 'Owned (shesha)', about: 'Everything exists for his sake. For the soul, this is its very nature: to serve.' },
];

/** Ramanuja’s key terms. */
export const vaIdeas: { term: string; sanskrit: string; meaning: string; about: string }[] = [
  {
    term: 'Sharira–shariri',
    sanskrit: 'शरीर–शरीरी',
    meaning: 'Body and embodied',
    about: 'Ramanuja’s definition (Sri Bhashya 2.1.9): a body is any substance a conscious being wholly supports and controls for its own purposes, and whose whole nature is to serve it. In this sense souls and matter are the body of Brahman.',
  },
  {
    term: 'Aprithak-siddhi',
    sanskrit: 'अपृथक्सिद्धि',
    meaning: 'Inseparability',
    about: 'Some things are distinct yet can never exist apart: a quality and its substance, like the blueness of a lotus. So are the Lord and his body. This is the “non-duality” in Vishishtadvaita.',
  },
  {
    term: 'Samanadhikaranya',
    sanskrit: 'सामानाधिकरण्य',
    meaning: 'Co-reference',
    about: 'Two words with different meanings can point to one thing: “the blue lotus”. So “You are That” is true without erasing anything: “That” is Brahman as cause of the world, “you” is Brahman with your soul as his body.',
  },
  {
    term: 'Karana–karya',
    sanskrit: 'कारण–कार्य',
    meaning: 'Cause and effect',
    about: 'At dissolution, souls and matter rest in Brahman in subtle form: Brahman as cause. At creation they unfold into names and forms: Brahman as effect. Only the body changes; the Self does not, as a man’s body ages while he remains himself.',
  },
  {
    term: 'Ubhaya-linga',
    sanskrit: 'उभयलिङ्ग',
    meaning: 'The two marks',
    about: 'Brahman is marked both by the absence of all defects (akhila-heya-pratyanika) and by an ocean of good qualities (kalyana-gunakara). Texts that say “without qualities” deny bad qualities, not good ones.',
  },
  {
    term: 'Sri',
    sanskrit: 'श्री',
    meaning: 'Lakshmi, the Lord’s inseparable consort',
    about: 'She is the purushakara, the one who intercedes: the soul approaches Narayana through her, and she turns his justice into mercy. Hence the name Sri Vaishnava.',
  },
];

/** The five forms of the Lord (Pancharatra), with the traditional image of water. */
export const fiveForms: { name: string; sanskrit: string; what: string; water: string }[] = [
  { name: 'Para', sanskrit: 'पर', what: 'Narayana with Sri in Vaikuntha, served by the eternally free', water: 'Water beyond the universe: real, but out of reach' },
  { name: 'Vyuha', sanskrit: 'व्यूह', what: 'Vasudeva, Sankarshana, Pradyumna and Aniruddha, for creation and the care of the world', water: 'The ocean of milk: far away' },
  { name: 'Vibhava', sanskrit: 'विभव', what: 'The avataras, Rama and Krishna and the rest', water: 'A river in flood: here once, then gone' },
  { name: 'Antaryamin', sanskrit: 'अन्तर्यामिन्', what: 'The inner ruler, in the heart of every being', water: 'Water under the ground: close, but hard to reach' },
  { name: 'Archa', sanskrit: 'अर्चा', what: 'The consecrated image in temple and home, such as Ranganatha at Srirangam', water: 'Still pools: anyone may drink' },
];

/** The seven objections to the Advaita doctrine of avidya (Sri Bhashya 1.1.1). */
export const saptaAnupapatti: { name: string; sanskrit: string; objection: string }[] = [
  { name: 'Locus', sanskrit: 'आश्रयानुपपत्ति', objection: 'Where does ignorance reside? Not in Brahman, which is pure knowledge; not in the soul, which ignorance is supposed to create.' },
  { name: 'Concealment', sanskrit: 'तिरोधानानुपपत्ति', objection: 'How can anything veil Brahman, whose very nature is to shine?' },
  { name: 'Nature', sanskrit: 'स्वरूपानुपपत्ति', objection: 'Is ignorance real? Then there are two realities. Unreal? Then it cannot bind.' },
  { name: 'Indescribability', sanskrit: 'अनिर्वचनीयत्वानुपपत्ति', objection: 'Everything we know is either real or unreal; “neither” is not a third option.' },
  { name: 'Proof', sanskrit: 'प्रमाणानुपपत्ति', objection: 'No perception, inference or scripture shows such a positive ignorance.' },
  { name: 'Remover', sanskrit: 'निवर्तकानुपपत्ति', objection: 'Only a knowledge of a Brahman without qualities could remove it, and scripture teaches no such Brahman.' },
  { name: 'Removal', sanskrit: 'निवृत्त्यनुपपत्ति', objection: 'A positive thing cannot be destroyed by mere knowledge.' },
];

/** The seven aids to bhakti Ramanuja quotes from the Vakyakara (Sri Bhashya 1.1.1). */
export const sadhanaSaptaka: { name: string; meaning: string }[] = [
  { name: 'Viveka', meaning: 'Purity of body through pure food' },
  { name: 'Vimoka', meaning: 'Freedom from craving' },
  { name: 'Abhyasa', meaning: 'Constant practice of meditation' },
  { name: 'Kriya', meaning: 'Doing one’s duties and the daily offerings' },
  { name: 'Kalyana', meaning: 'Virtue: truth, kindness, non-violence, generosity' },
  { name: 'Anavasada', meaning: 'Not sinking into dejection' },
  { name: 'Anuddharsha', meaning: 'Not being carried away by elation' },
];

/** The ways to liberation. */
export const vaPaths: { name: string; sanskrit: string; about: string }[] = [
  { name: 'Karma yoga', sanskrit: 'कर्मयोग', about: 'Duty without desire for its fruit, offered to the Lord. It purifies the mind.' },
  { name: 'Jnana yoga', sanskrit: 'ज्ञानयोग', about: 'Knowing the soul as distinct from the body, and as belonging to the Lord.' },
  {
    name: 'Bhakti yoga',
    sanskrit: 'भक्तियोग',
    about: 'Loving meditation on the Lord, unbroken like a stream of oil (dhruva-smriti), as vivid as seeing. For Ramanuja, this is the knowledge that liberates.',
  },
  {
    name: 'Prapatti',
    sanskrit: 'प्रपत्ति',
    about: 'Total surrender (sharanagati) for those who cannot follow the long road of bhakti: open to all, done once, and complete in itself. Ramanuja’s Sharanagati Gadya is his own act of surrender.',
  },
];

/** The six parts of surrender, from the Pancharatra (Ahirbudhnya Samhita). */
export const sixLimbs: { name: string; sanskrit: string; meaning: string }[] = [
  { name: 'Anukulya-sankalpa', sanskrit: 'आनुकूल्यसङ्कल्प', meaning: 'Resolving to do what pleases the Lord' },
  { name: 'Pratikulya-varjana', sanskrit: 'प्रातिकूल्यवर्जन', meaning: 'Giving up what displeases him' },
  { name: 'Mahavishvasa', sanskrit: 'महाविश्वास', meaning: 'Great faith that he will protect' },
  { name: 'Goptritva-varana', sanskrit: 'गोप्तृत्ववरण', meaning: 'Asking him to be one’s protector' },
  { name: 'Karpanya', sanskrit: 'कार्पण्य', meaning: 'Knowing one’s own helplessness' },
  { name: 'Atma-nikshepa', sanskrit: 'आत्मनिक्षेप', meaning: 'Placing oneself in his hands: surrender itself' },
];

/** The three secrets (rahasya-traya) taught at initiation. */
export const rahasyaTraya: { name: string; deva: string; iast: string; meaning: string }[] = [
  { name: 'Tirumantra', deva: 'ॐ नमो नारायणाय', iast: 'oṃ namo nārāyaṇāya', meaning: 'The eight-syllable mantra: the soul belongs to Narayana alone.' },
  {
    name: 'Dvaya',
    deva: 'श्रीमन्नारायणचरणौ शरणं प्रपद्ये । श्रीमते नारायणाय नमः ॥',
    iast: 'śrīman-nārāyaṇa-caraṇau śaraṇaṃ prapadye; śrīmate nārāyaṇāya namaḥ',
    meaning: 'The “pair”: I take refuge at the feet of Narayana with Sri; salutation to Narayana with Sri. The act of surrender, and the service that follows.',
  },
  {
    name: 'Charama shloka',
    deva: 'सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज',
    iast: 'sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja',
    meaning: '“Giving up all other means, take refuge in me alone; I will free you from all sins; do not grieve.” The “last verse”, Gita 18.66.',
  },
];

/** The twelve Alvars, in the traditional order. */
export const alvars: { name: string; work: string }[] = [
  { name: 'Poygai Alvar', work: 'Mudal Tiruvandadi' },
  { name: 'Bhutattalvar', work: 'Irandam Tiruvandadi' },
  { name: 'Peyalvar', work: 'Munram Tiruvandadi' },
  { name: 'Tirumalisai Alvar', work: 'Nanmugan Tiruvandadi, Tiruchanda Viruttam' },
  { name: 'Nammalvar', work: 'Tiruvaymoli and three shorter works' },
  { name: 'Madhurakavi Alvar', work: 'Kanninun Siruttambu, in praise of Nammalvar' },
  { name: 'Kulasekhara Alvar', work: 'Perumal Tirumoli' },
  { name: 'Periyalvar', work: 'Periyalvar Tirumoli, Tiruppallandu' },
  { name: 'Andal', work: 'Tiruppavai, Nachiyar Tirumoli' },
  { name: 'Tondaradippodi Alvar', work: 'Tirumalai, Tiruppalliyelucci' },
  { name: 'Tiruppan Alvar', work: 'Amalanadipiran' },
  { name: 'Tirumangai Alvar', work: 'Periya Tirumoli and five shorter works' },
];

/** The acharyas, oldest first. Traditional dates. */
export const vaTeachers: { name: string; dates: string; role: string; works: string; acharyaId?: string }[] = [
  { name: 'Nathamuni', dates: 'c. 10th century', role: 'Recovered the Alvars’ hymns and set them to music; first of the acharyas', works: 'Compiled the Nalayira Divya Prabandham; Nyaya-tattva (lost)', acharyaId: 'nathamuni' },
  { name: 'Yamunacharya (Alavandar)', dates: 'c. 10th–11th century', role: 'Nathamuni’s grandson, who laid the philosophical ground', works: 'Siddhi-traya, Agama-pramanya, Gitartha-sangraha, Stotra-ratna', acharyaId: 'yamuna' },
  { name: 'Periya Nambi', dates: '11th century', role: 'Yamuna’s disciple, who initiated Ramanuja', works: '—' },
  { name: 'Ramanuja', dates: 'Traditionally 1017–1137', role: 'Systematised the school and organised temple life at Srirangam and Melkote', works: 'Sri Bhashya, Vedartha-sangraha, Gita Bhashya, the three Gadyas and five more: nine works in all', acharyaId: 'ramanuja' },
  { name: 'Kurattalvar (Kuresha)', dates: '11th–12th century', role: 'Ramanuja’s closest disciple and scribe', works: 'Panchastavi' },
  { name: 'Parashara Bhattar', dates: '12th century', role: 'Kuresha’s son, famed for his wit and his hymns', works: 'Bhagavad-guna-darpana (on the Vishnu Sahasranama)' },
  { name: 'Nampillai', dates: '13th century', role: 'Great expounder of the Tiruvaymoli, whose lectures were written down as the Idu', works: 'Idu commentary (recorded by his disciple)' },
  { name: 'Pillai Lokacharya', dates: '13th–14th century', role: 'Teacher of the southern (Tenkalai) school', works: 'Sri Vachana Bhushanam and the eighteen Rahasyas' },
  { name: 'Vedanta Desika', dates: 'Traditionally 1268–1369', role: 'Poet-philosopher, teacher of the northern (Vadakalai) school', works: 'Rahasya-traya-sara, Tattva-mukta-kalapa, Shatadushani, Paduka Sahasram', acharyaId: 'vedanta-desika' },
  { name: 'Manavala Mamunigal', dates: 'Traditionally 1370–1443', role: 'Revived and shaped the Tenkalai tradition', works: 'Commentaries on the Rahasyas and the Prabandham' },
];

/** The two schools after Desika and Pillai Lokacharya. Tradition counts eighteen points of difference. */
export const kalais: { topic: string; vadakalai: string; tenkalai: string }[] = [
  { topic: 'Grace and effort', vadakalai: 'The monkey’s hold (markata-nyaya): the baby clings to its mother. The soul must do its part, and grace carries it', tenkalai: 'The cat’s hold (marjara-nyaya): the mother carries the kitten. Grace alone saves; the soul only stops resisting' },
  { topic: 'Prapatti', vadakalai: 'A means (upaya) that the soul performs, once and properly', tenkalai: 'Not a means at all: the Lord himself is the only means (siddhopaya); surrender is accepting that' },
  { topic: 'Lakshmi', vadakalai: 'Infinite like Narayana, and with him a giver of liberation', tenkalai: 'The mediator who intercedes (purushakara); liberation is Narayana’s to give' },
  { topic: 'The devotee’s faults', vadakalai: 'The Lord overlooks them', tenkalai: 'The Lord even delights in them, as a mother does in her child (dosha-bhogya)' },
  { topic: 'Emphasis', vadakalai: 'Sanskrit and Tamil scripture together', tenkalai: 'Above all the Tamil Prabandham' },
  { topic: 'Main teachers', vadakalai: 'Vedanta Desika', tenkalai: 'Pillai Lokacharya, Manavala Mamunigal' },
  { topic: 'Forehead mark', vadakalai: 'A U-shaped namam that stops at the brow', tenkalai: 'A Y-shaped namam with a stem down onto the nose' },
];

/** Ramanuja’s nine works (the navaratna). */
export const ramanujaWorks: { name: string; about: string }[] = [
  { name: 'Sri Bhashya', about: 'His commentary on the Brahma Sutras, the school’s central text' },
  { name: 'Vedartha-sangraha', about: 'A summary of the meaning of the Upanishads' },
  { name: 'Vedanta-dipa', about: 'A short commentary on the Brahma Sutras' },
  { name: 'Vedanta-sara', about: 'A still shorter one' },
  { name: 'Gita Bhashya', about: 'His commentary on the Bhagavad Gita' },
  { name: 'Sharanagati Gadya', about: 'A prose prayer of surrender to Sri and Narayana' },
  { name: 'Sriranga Gadya', about: 'Surrender to Ranganatha of Srirangam' },
  { name: 'Vaikuntha Gadya', about: 'A meditation on the Lord in Vaikuntha' },
  { name: 'Nitya Grantha', about: 'A manual of daily worship' },
];

/** Three Vedantas, three answers. */
export const vedantaCompare: { topic: string; advaita: string; vishishtadvaita: string; dvaita: string }[] = [
  { topic: 'Brahman', advaita: 'Without qualities (nirguna)', vishishtadvaita: 'Full of auspicious qualities: Narayana', dvaita: 'Full of qualities: Vishnu, wholly independent' },
  { topic: 'Souls', advaita: 'Not really many: each is Brahman', vishishtadvaita: 'Many and eternal, the body of Brahman', dvaita: 'Many, eternal, and forever distinct from him and from each other' },
  { topic: 'The world', advaita: 'An appearance (mithya)', vishishtadvaita: 'Real, the body of Brahman', dvaita: 'Real, wholly dependent on him' },
  { topic: '“You are That”', advaita: 'Identity: the soul is Brahman', vishishtadvaita: 'Co-reference: the Brahman within you is the Brahman of the world', dvaita: 'Likeness, or read as “you are not That”' },
  { topic: 'Means', advaita: 'Knowledge', vishishtadvaita: 'Bhakti or surrender, by grace', dvaita: 'Bhakti, by grace' },
  { topic: 'Liberation', advaita: 'Merging, possible in this life', vishishtadvaita: 'After death, eternal service in Vaikuntha; equal to the Lord in bliss, not in ruling the world', dvaita: 'After death; each soul enjoys bliss by its own nature, in grades' },
];

export const vaSources: Source[] = [
  src.defVishishtadvaita,
  src.vaIntro,
  src.dgVaPrecursors,
  src.dgRamanujaLit,
  src.dgVaSoul,
  src.dasgupta3,
  src.brahmaSutraRamanuja,
  src.ramanujaGita,
  src.ramanujaMahavakyas,
  src.vaFundamentalTexts,
  src.vaSurrender,
  src.vaManuals,
  src.conceptTattvatraya,
  src.tiruvaymoli,
  defn('rahasyatraya', 'Rahasyatraya'),
  defn('sharanagati', 'Sharanagati'),
  defn('markatanyaya', 'Markata-nyaya'),
  defn('marjaranyaya', 'Marjara-nyaya'),
  defn('alvar', 'Alvar'),
  defn('nalayira-divya-prabandham', 'Nalayira Divya Prabandham'),
  defn('antaryamin', 'Antaryamin'),
];
