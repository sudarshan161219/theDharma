import { CURRENT_MANVANTARA, manvantaras } from '../data/cosmos';
import { people } from '../data/people';
import { src } from '../data/sources';
import { href, navigate, type Route } from '../lib/router';
import { Chip, PageHeader, Sources } from '../components/ui';
import styles from './Manvantaras.module.css';

const byName = new Map(people.filter((p) => p.about).map((p) => [p.name.toLowerCase(), p.id]));

function Rishi({ name }: { name: string }) {
  const id = byName.get(name.toLowerCase());
  return id ? <a href={href('people', id)}>{name}</a> : <span>{name}</span>;
}

const status = (n: number) => (n < CURRENT_MANVANTARA ? 'Past' : n === CURRENT_MANVANTARA ? 'Now' : 'Future');

export default function Manvantaras({ route }: { route: Route }) {
  const n = Number(route.query.get('n')) || CURRENT_MANVANTARA;
  const m = manvantaras.find((x) => x.n === n) ?? manvantaras[CURRENT_MANVANTARA - 1];

  return (
    <>
      <PageHeader
        eyebrow="Fourteen Manus in a day of Brahma"
        title="Manvantaras"
        sub="Each manvantara has its own Manu (progenitor of mankind), its own Indra (king of the devas), its own seven sages (Saptarishis) and a form of Vishnu who protects it. Each lasts 71 mahayugas — about 30.7 crore years."
      />

      <ol className={styles.timeline} aria-label="Manvantaras">
        {manvantaras.map((x) => (
          <li key={x.n}>
            <button
              className={`${styles.tile} ${styles[status(x.n).toLowerCase()]} ${x.n === m.n ? styles.on : ''}`}
              onClick={() => navigate(`/manvantaras?n=${x.n}`)}
              aria-pressed={x.n === m.n}
            >
              <span className={styles.num}>{x.n}</span>
              <span className={styles.manu}>{x.manu.split(' ')[0]}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className={styles.legend}>
        <span className={styles.kPast}>Past</span>
        <span className={styles.kNow}>We are here</span>
        <span className={styles.kFuture}>To come</span>
      </div>

      <section className={styles.detail} aria-live="polite">
        <div className={styles.detailHead}>
          <h2>
            {m.n}. {m.manu} Manu
          </h2>
          <Chip tone={m.n === CURRENT_MANVANTARA ? 'accent' : m.n < CURRENT_MANVANTARA ? 'neutral' : 'indigo'}>{status(m.n)}</Chip>
        </div>
        {m.note && <p className={styles.note}>{m.note}</p>}

        <div className={styles.grid}>
          <div>
            <h3>Indra</h3>
            <p className={styles.big}>{m.indra}</p>
          </div>
          {m.avatara && (
            <div>
              <h3>Protecting form of Vishnu</h3>
              <p className={styles.big}>{m.avatara}</p>
            </div>
          )}
        </div>

        <h3>Saptarishis — the seven sages</h3>
        <ul className={styles.rishis}>
          {m.saptarishi.map((r) => (
            <li key={r}>
              <Rishi name={r} />
            </li>
          ))}
        </ul>
      </section>

      <p className={styles.fine}>
        Names follow the Vishnu Purana (Book 3, chapters 1–2). Other Puranas such as the Markandeya and Bhagavata give variant names for some Indras and rishis of the future manvantaras.
      </p>
      <Sources items={[src.vpManvantaras]} />
    </>
  );
}
