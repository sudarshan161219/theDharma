import { NEXT_VYASA, vyasas } from '../data/cosmos';
import { src } from '../data/sources';
import { href } from '../lib/router';
import { PageHeader, Sources } from '../components/ui';
import styles from './Vyasas.module.css';

const DISCIPLES = [
  { veda: 'Rig Veda', who: 'Paila' },
  { veda: 'Yajur Veda', who: 'Vaishampayana' },
  { veda: 'Sama Veda', who: 'Jaimini' },
  { veda: 'Atharva Veda', who: 'Sumantu' },
  { veda: 'Itihasa & Purana', who: 'Romaharshana (Suta)' },
];

export default function Vyasas() {
  return (
    <>
      <PageHeader
        eyebrow="Arrangers of the Veda"
        title="The Vyasas"
        sub="“Vyasa” is an office, not one person. In every Dvapara-yuga, as people’s capacity declines, a great sage divides the one Veda so it can be preserved. In this (7th) manvantara, 28 Dvaparas have come — so 28 Vyasas have served."
      />

      <ol className={styles.grid}>
        {vyasas.map((v) => (
          <li key={v.n} className={v.n === 28 ? styles.current : undefined}>
            <span className={styles.n}>{v.n}</span>
            <span className={styles.name}>{v.name}</span>
            {v.note && <span className={styles.note}>{v.note}</span>}
          </li>
        ))}
        <li className={styles.next}>
          <span className={styles.n}>29</span>
          <span className={styles.name}>{NEXT_VYASA.name}</span>
          <span className={styles.note}>The next Vyasa</span>
        </li>
      </ol>

      <section className={styles.callout}>
        <h2>Who is the upcoming Vyasa?</h2>
        <p>{NEXT_VYASA.note}</p>
        <p>
          <a href={href('people', 'ashvatthama')}>About Ashvatthama →</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>How Krishna Dvaipayana divided the Veda</h2>
        <p className={styles.help}>
          The 28th Vyasa taught one branch to each of his disciples (Vishnu Purana 3.4). <a href={href('people', 'vyasa')}>More on Vyasa →</a>
        </p>
        <div className={styles.tree}>
          <div className={styles.root}>Krishna Dvaipayana Vyasa</div>
          <ul>
            {DISCIPLES.map((d) => (
              <li key={d.veda}>
                <span className={styles.veda}>{d.veda}</span>
                <span>{d.who}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The Shaiva view: Vyasa and Yogacharya</h2>
        <p className={styles.help}>
          The Shiva and Linga Puranas pair every Vyasa with an incarnation of Shiva as a Yogacharya (teacher of yoga) who appears at the start of the following Kali-yuga with four disciples. In the 28th, alongside Krishna Dvaipayana, Shiva appears as Lakulisha.
        </p>
      </section>

      <Sources items={[src.vpVyasas, src.vpVedaDivision, src.lingaIncarnations, src.defYogacarya]} />
    </>
  );
}
