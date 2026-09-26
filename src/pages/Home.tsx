import type { CSSProperties } from 'react';
import { NEXT_VYASA } from '../data/cosmos';
import { href } from '../lib/router';
import { fmt, kaliElapsed, kalpaElapsed } from '../lib/time';
import styles from './Home.module.css';

const QUICK: { q: string; a: string; to: string }[] = [
  { q: 'Who composed the Shiva Purana?', a: 'Krishna Dvaipayana Vyasa, abridging a 1,00,000-verse original to 24,000 verses in 7 samhitas.', to: href('scriptures', 'shiva-purana') },
  { q: 'Who tells the Shiva Purana, and to whom?', a: 'Suta Romaharshana, to Shaunaka and the sages of Naimisharanya. Inside it, Brahma tells Narada, Vayu tells the sages…', to: href('scriptures', 'shiva-purana') },
  { q: 'Which manvantara are we in?', a: 'The 7th — Vaivasvata, ruled by Manu the son of Vivasvan (the Sun). Indra is Purandara.', to: href('manvantaras') + '?n=7' },
  { q: 'Who will be the next Veda-Vyasa?', a: `${NEXT_VYASA.name}, in the 29th Dvapara.`, to: href('vyasas') },
  { q: 'Who are the present Saptarishis?', a: 'Vasishtha, Kashyapa, Atri, Jamadagni, Gautama, Vishvamitra, Bharadvaja.', to: href('people') },
  { q: 'How long is Kali-yuga?', a: `4,32,000 years, of which about ${fmt(kaliElapsed())} have passed.`, to: href('time') + '?yuga=kali' },
  { q: 'Who narrates the Vishnu Purana?', a: 'Parashara (Vyasa’s father) to his disciple Maitreya.', to: href('scriptures', 'vishnu-purana') },
  { q: 'Who tells the Devi Bhagavata?', a: 'Vyasa, to King Janamejaya after the snake sacrifice, retold by Suta at Naimisharanya.', to: href('scriptures', 'devi-bhagavata') },
  { q: 'What is the difference between a Purana and an Upapurana?', a: 'The 18 Mahapuranas are the “great” Puranas. Upapuranas are secondary ones, often the chief text of a single tradition.', to: '#/glossary?t=upapurana' },
  { q: 'What is the difference between Advaita and Dvaita?', a: 'Advaita (Shankara): the Self is Brahman. Dvaita (Madhva): the soul is eternally distinct from and dependent on Vishnu.', to: '#/acharyas' },
  { q: 'What are the six darshanas?', a: 'Nyaya, Vaisheshika, Samkhya, Yoga, Purva Mimamsa and Vedanta: the six orthodox schools, in three pairs.', to: '#/darshanas' },
  { q: 'Who are the nine Durgas of Navaratri?', a: 'Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, Siddhidatri.', to: '#/avatars?g=devi&a=devi-navadurga' },
  { q: 'Where are the 12 Jyotirlingas?', a: 'From Somnath in Gujarat to Rameswaram in Tamil Nadu. See them on a map, with the Shiva Purana’s story of each.', to: '#/places?show=jyotirlinga' },
  { q: 'What is a kuladevata, and how do I find mine?', a: 'The guardian deity of your family line. Ask elders and the family priest, check pilgrimage-priest registers, and look to your ancestral village.', to: '#/kuladevata' },
  { q: 'When did Rama live, in cosmic time?', a: 'At the close of the Treta of the 24th mahayuga by tradition: about 1.8 crore years ago. Try any date in the calculator.', to: '#/time' },
  { q: 'Which rishi does my gotra come from?', a: 'Every gotra traces to one of eight founders: the seven sages plus Agastya. Look up yours and its pravara.', to: '#/gotra' },
  { q: 'Who was Lopamudra?', a: 'Wife of Agastya and a Vedic seer herself. Rig Veda 1.179 is her dialogue with him.', to: '#/people/lopamudra' },
  { q: 'What is today’s tithi?', a: 'See the live panchanga: tithi, nakshatra, month and the sixty-year samvatsara, with the next festivals.', to: '#/calendar' },
  { q: 'Who teaches whom in the Upanishads?', a: 'Yama teaches Nachiketa (Katha), Uddalaka teaches Shvetaketu “you are That” (Chandogya), Yajnavalkya teaches Maitreyi (Brihadaranyaka)…', to: '#/vedas' },
  { q: 'Who heard the Bhagavata first?', a: 'King Parikshit, from Shuka, over seven days by the Ganga.', to: href('scriptures', 'bhagavata-purana') },
];

const SECTIONS = [
  { key: 'scriptures', title: 'Scriptures', text: '18 Mahapuranas, the Itihasas and key Upapuranas like the Devi Bhagavata: author, size, and who tells whom.' },
  { key: 'vedas', title: 'Vedas & Shastras', text: 'The four Vedas and their layers, the principal Upanishads and who teaches whom, the six Vedangas, the law books and the Gita chapter by chapter.' },
  { key: 'time', title: 'Cosmic Time', text: 'From a blink of the eye to the life of Brahma. The four yugas side by side.' },
  { key: 'calendar', title: 'Hindu Calendar', text: 'Today’s tithi, nakshatra, month and samvatsara, worked out live, with the coming festivals.' },
  { key: 'dynasties', title: 'Dynasties', text: 'The Solar and Lunar royal lines as a family tree: from the Sun and Moon to Rama, Krishna and the Pandavas.' },
  { key: 'manvantaras', title: 'Manvantaras', text: 'The 14 Manus of this kalpa, with their Indras, Saptarishis and avataras.' },
  { key: 'vyasas', title: 'Vyasas', text: 'The 28 Vyasas who arranged the Veda, one in each Dvapara — and the next one.' },
  { key: 'people', title: 'Rishis & narrators', text: 'Sages, and every text in which each one speaks or listens.' },
  { key: 'devas', title: 'Devas', text: 'The Trimurti, the 33 devas of the Veda, the Navagrahas and the guardians of the eight directions.' },
  { key: 'forms', title: 'How the Divine Appears', text: 'Formless, aniconic, animal, part-animal, human, many-armed and cosmic forms, with museum sculptures and paintings.' },
  { key: 'epithets', title: 'Epithets', text: 'Madhusudana, Nilakantha, Aparna, Ekadanta… the names of the devas and devis, what they mean and why they were given.' },
  { key: 'avatars', title: 'Avatars', text: 'Vishnu’s Dashavatara, Shiva’s incarnations, and Devi: Navadurga, Mahavidyas and the Devi Mahatmya.' },
  { key: 'acharyas', title: 'Acharyas', text: 'Shankara, Ramanuja, Madhva, Nimbarka, Vallabha, Chaitanya… and how their schools differ.' },
  { key: 'darshanas', title: 'Darshanas & Sampradayas', text: 'The six schools of philosophy and the four that reject the Veda, the pramanas, and the living lineages: Vaishnava, Shaiva, Shakta, Smarta and more.' },
  { key: 'trika', title: 'Kashmir Shaivism', text: 'The Trika: Shiva as free, self-aware consciousness, the 36 tattvas, the four ways of recognition, its teachers from Vasugupta to Abhinavagupta, and how it differs from Advaita.' },
  { key: 'siddhanta', title: 'Shaiva Siddhanta', text: 'Pati, pashu and pasha: Shiva, souls and bonds, the dance of the five acts, the four paths, the 28 Agamas, the Tamil Tirumurai and Meykandar’s twelve sutras.' },
  { key: 'vishishtadvaita', title: 'Vishishtadvaita', text: 'Ramanuja’s qualified non-dualism: the world as the Lord’s body, the five forms of Narayana, bhakti and surrender, the Alvars, and the Vadakalai and Tenkalai schools.' },
  { key: 'dvaita', title: 'Dvaita', text: 'Madhva’s Tattvavada: Vishnu alone independent, the five real differences, the gradation of souls, devotion and grace, Udupi and the Haridasas.' },
  { key: 'dharma', title: 'Life & Dharma', text: 'The four aims and four stages of life, the sixteen samskaras from conception to cremation, and the five daily offerings.' },
  { key: 'places', title: 'Sacred Places', text: 'Jyotirlingas, Shakti Peethas, Char Dham, the seven liberating cities, the Kumbh sites and more, on a map.' },
  { key: 'regions', title: 'Regions of Dharma', text: 'Kashmir to Kerala: what each region gave in philosophy, saints, scriptures, deities, festivals, languages and scripts, with its sacred sites on a map.' },
  { key: 'gotra', title: 'Gotras', text: 'The rishi behind your gotra, its pravara, the eight founders, and a same-family check.' },
  { key: 'kuladevata', title: 'Kuladevata', text: 'Your family deity: what it is, how it is honoured, how to find it, and 30 great family shrines on a map.' },
  { key: 'chandas', title: 'Chandas', text: 'The Anushtubh (shloka) metre made visual: its 32 syllables, laghu and guru, the rules, and a scanner for any verse.' },
  { key: 'glossary', title: 'Definitions', text: 'Purana, Upapurana, Itihasa, pancha-lakshana, manvantara, rishi… explained with sources.' },
];

export default function Home() {
  const kalpaYears = kalpaElapsed();
  const steps = [
    { label: 'Life of Brahma', value: '51st year, 1st day', note: '50 years have passed — the first half (Parardha)' },
    { label: 'Kalpa', value: 'Shveta-Varaha', note: `${fmt(kalpaYears)} years into this day of Brahma` },
    { label: 'Manvantara', value: '7th · Vaivasvata', note: '6 Manus have passed, 7 are to come' },
    { label: 'Mahayuga', value: '28th', note: 'of 71 in this manvantara' },
    { label: 'Yuga', value: 'Kali', note: `Year ${fmt(kaliElapsed() + 1)}, since 3102 BCE` },
  ];

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Hindu scriptures, made easy to grasp</p>
        <h1>
          Who wrote it, who is <em>telling</em>, who is <em>listening</em> — and when are we?
        </h1>
        <p className={styles.lede}>
          A friendly map of the Puranas and Itihasas, the ages of time, the Manus, the Vyasas and the rishis. Each fact links back to its chapter on wisdomlib.org.
        </p>
      </section>

      <section aria-labelledby="now" className={styles.now}>
        <h2 id="now">Where are we in time right now?</h2>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.label} style={{ '--i': i } as CSSProperties}>
              <span className={styles.stepLabel}>{s.label}</span>
              <strong>{s.value}</strong>
              <span className={styles.stepNote}>{s.note}</span>
            </li>
          ))}
        </ol>
        <a href={href('time')} className={styles.more}>
          See the full scale of time →
        </a>
        <span className={styles.sep}> · </span>
        <a
          href={href('time')}
          className={styles.more}
          onClick={() => setTimeout(() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }), 60)}
        >
          Calculate any date →
        </a>
      </section>

      <section aria-labelledby="quick">
        <h2 id="quick">Quick answers</h2>
        <div className={styles.quick}>
          {QUICK.map((x) => (
            <a key={x.q} href={x.to} className={styles.qa}>
              <span className={styles.q}>{x.q}</span>
              <span className={styles.a}>{x.a}</span>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="explore" className={styles.explore}>
        <h2 id="explore">Explore</h2>
        <div className={styles.tiles}>
          {SECTIONS.map((s) => (
            <a key={s.key} href={href(s.key)} className={styles.tile}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
