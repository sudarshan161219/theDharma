import { NEXT_VYASA, vyasas } from '../data/cosmos';
import { deviVyasas, lingaVyasas, sameVyasa, vyasaLists, type LingaVyasa } from '../data/vyasas';
import { src } from '../data/sources';
import { href, navigate, type Route } from '../lib/router';
import { onTabListKeyDown } from '../lib/a11y';
import { PageHeader, Sources } from '../components/ui';
import styles from './Vyasas.module.css';

const DISCIPLES = [
  { veda: 'Rig Veda', who: 'Paila' },
  { veda: 'Yajur Veda', who: 'Vaishampayana' },
  { veda: 'Sama Veda', who: 'Jaimini' },
  { veda: 'Atharva Veda', who: 'Sumantu' },
  { veda: 'Itihasa & Purana', who: 'Romaharshana (Suta)' },
];

const ROWS = vyasas.map((v, i) => ({ v, d: deviVyasas[i], l: lingaVyasas[i] }));
const AGREE = ROWS.filter(({ v, d, l }) => sameVyasa(v.name, d.name) && sameVyasa(v.name, l.name)).map(({ v }) => v);

export default function Vyasas({ route }: { route: Route }) {
  const list = vyasaLists.find((x) => x.id === route.query.get('t')) ?? vyasaLists[0];
  const linga = list.id === 'linga';

  return (
    <>
      <PageHeader
        eyebrow="Arrangers of the Veda · one in every Dvapara"
        title="The Vyasas"
        sub="“Vyasa” is an office, not one person. In every Dvapara-yuga, as people’s capacity declines, a great sage divides the one Veda so it can be preserved. In this (7th) manvantara, 28 Dvaparas have come, so 28 Vyasas have served. The Puranas name them, though not always alike."
      />

      <section className={styles.section} id="lists">
        <h2>The twenty-eight, as each Purana tells it</h2>
        <div className={styles.tabs} role="tablist" aria-label="Choose a Purana" onKeyDown={onTabListKeyDown}>
          {vyasaLists.map((x) => (
            <button key={x.id} type="button" role="tab" aria-selected={x.id === list.id} className={x.id === list.id ? styles.tabOn : undefined} onClick={() => navigate(`/vyasas?t=${x.id}`)}>
              {x.title}
              <small>{x.ref}</small>
            </button>
          ))}
        </div>
        <p className={styles.about}>
          {list.about}{' '}
          <a href={list.source.url} target="_blank" rel="noreferrer">
            Read {list.title} {list.ref} ↗
          </a>
        </p>

        <ol className={`${styles.grid} ${linga ? styles.wide : ''}`} role="tabpanel">
          {list.list.map((v) => (
            <li key={v.n} className={v.n === 28 ? styles.current : undefined}>
              <span className={styles.n}>{v.n}</span>
              <span className={styles.name}>{v.name}</span>
              {v.note && <span className={styles.note}>{v.note}</span>}
              {linga && <ShivaForm v={v as LingaVyasa} />}
            </li>
          ))}
          {!linga && (
            <li className={styles.next}>
              <span className={styles.n}>29</span>
              <span className={styles.name}>{NEXT_VYASA.name}</span>
              <span className={styles.note}>The next Vyasa</span>
            </li>
          )}
        </ol>
      </section>

      <section className={styles.callout}>
        <h2>Who is the upcoming Vyasa?</h2>
        <p>{NEXT_VYASA.note} The Devi Bhagavata (1.3) says the same: in the next Dvapara, Ashvatthama, the son of Drona, will be the Veda Vyasa.</p>
        <p>
          <a href={href('people', 'ashvatthama')}>About Ashvatthama →</a>
        </p>
      </section>

      <section className={styles.section} id="compare">
        <h2>The three lists side by side</h2>
        <p className={styles.help}>
          All three agree on {AGREE.length} of the 28, allowing for spelling: {AGREE.map((v) => `${v.name.replace(/ \(.*\)/, '')} (${v.n})`).join(', ')}. Names that differ from
          the Vishnu Purana are shaded.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Dvapara</th>
                <th scope="col">Vishnu Purana 3.3</th>
                <th scope="col">Devi Bhagavata 1.3</th>
                <th scope="col">Linga Purana 1.24</th>
                <th scope="col">Shiva as Yogacharya</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ v, d, l }) => (
                <tr key={v.n} className={v.n === 28 ? styles.rowNow : undefined}>
                  <th scope="row">{v.n}</th>
                  <td>{v.name}</td>
                  <td className={sameVyasa(v.name, d.name) ? undefined : styles.differs}>{d.name}</td>
                  <td className={sameVyasa(v.name, l.name) ? undefined : styles.differs}>{l.name}</td>
                  <td className={styles.shivaCell}>{l.shiva}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.help}>
          The Vishnu Purana adds that a similar list is given in the Kurma and Vayu Puranas. The Linga Purana itself gives a second, slightly different list in its
          seventh chapter.
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
          The Shiva and Linga Puranas pair every Vyasa with an incarnation of Shiva as a Yogacharya (teacher of yoga), who appears at the start of the following Kali-yuga
          with four disciples. In the 28th, alongside Krishna Dvaipayana, Shiva appears as Lakulisha, remembered as the founder of the Pashupata order.{' '}
          <a href="#/vyasas?t=linga">See all twenty-eight with their disciples →</a>
        </p>
      </section>

      <Sources items={[src.vpVyasas, src.dbVyasas, src.lingaIncarnations, src.lingaVyasas, src.vpVedaDivision, src.defYogacarya]} />
    </>
  );
}

function ShivaForm({ v }: { v: LingaVyasa }) {
  return (
    <span className={styles.shiva}>
      <span className={styles.shivaLabel}>Shiva as</span> <b>{v.shiva}</b>
      {v.shivaNote && <span className={styles.note}>{v.shivaNote}</span>}
      <span className={styles.disciples}>{v.disciples.join(' · ')}</span>
    </span>
  );
}
