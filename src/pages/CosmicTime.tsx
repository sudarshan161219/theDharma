import { BRAHMA_LIFE_YEARS, KALPA_YEARS, MAHAYUGA_YEARS, MANVANTARA_YEARS, TIME_UNITS, yugas } from '../data/cosmos';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { fmt, human, kaliElapsed, kaliRemaining } from '../lib/time';
import { PageHeader, Sources } from '../components/ui';
import TimeCalculator from '../components/TimeCalculator';
import styles from './CosmicTime.module.css';

const SCALE = [
  { name: 'Life of Brahma', years: BRAHMA_LIFE_YEARS, fits: '100 Brahma-years of 360 days and nights', where: 'Now in his 51st year' },
  { name: 'Kalpa (a day of Brahma)', years: KALPA_YEARS, fits: '1,000 mahayugas · 14 manvantaras; a night of equal length follows', where: 'Now: Shveta-Varaha Kalpa' },
  { name: 'Manvantara (reign of a Manu)', years: MANVANTARA_YEARS, fits: '71 mahayugas, plus a twilight of 17,28,000 years', where: 'Now: 7th, Vaivasvata' },
  { name: 'Mahayuga (Chaturyuga)', years: MAHAYUGA_YEARS, fits: '12,000 divine years: Satya + Treta + Dvapara + Kali', where: 'Now: 28th' },
  { name: 'Kali Yuga', years: yugas[3].humanYears, fits: '1,000 divine years + 200 of twilight', where: 'Now: this one' },
];

export default function CosmicTime({ route }: { route: Route }) {
  const selected = yugas.find((y) => y.id === route.query.get('yuga')) ?? yugas[3];
  const elapsed = kaliElapsed();
  const pct = (elapsed / yugas[3].humanYears) * 100;

  return (
    <>
      <PageHeader
        eyebrow="Kala — time"
        title="Cosmic Time"
        sub="The Puranas measure time in nested cycles. Start from the largest and zoom in to where we stand today."
      />

      <section className={styles.section} id="calculator">
        <h2>Time calculator</h2>
        <p className={styles.help}>
          Enter any year, BCE or CE, or any number of years into the past or future, and see where it falls in the life of Brahma: which kalpa, manvantara, mahayuga and yuga,
          and whether in its dawn, main period or dusk. It follows the Vishnu Purana’s scheme (1.3), which the sections below explain.
        </p>
        <TimeCalculator />
      </section>

      <section className={styles.section}>
        <h2>The scale, from largest to our moment</h2>
        <ol className={styles.scale}>
          {SCALE.map((s, i) => (
            <li key={s.name} style={{ marginLeft: `min(${i * 24}px, ${i * 4}vw)` }}>
              <div className={styles.scaleHead}>
                <strong>{s.name}</strong>
                <span className={styles.years}>{human(s.years)} years</span>
              </div>
              <p>{s.fits}</p>
              <span className={styles.where}>{s.where}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The four yugas</h2>
        <p className={styles.help}>
          Their lengths stand in the ratio 4 : 3 : 2 : 1, and dharma stands on 4, 3, 2 and then 1 leg. Tap a yuga.
        </p>
        <div className={styles.yugaBar} role="tablist" aria-label="Yugas">
          {yugas.map((y) => (
            <button
              key={y.id}
              role="tab"
              aria-selected={y.id === selected.id}
              className={`${styles.seg} ${styles[y.id]} ${y.id === selected.id ? styles.segOn : ''}`}
              style={{ flexGrow: y.divineYears }}
              onClick={() => navigate(`/time?yuga=${y.id}`)}
            >
              <span>{y.name.split(' ')[0]}</span>
              <small>{human(y.humanYears)}</small>
            </button>
          ))}
        </div>

        <div className={styles.yugaCard} role="tabpanel">
          <div>
            <h3>
              {selected.name} <span className="deva">{selected.sanskrit}</span>
            </h3>
            <div className={styles.legs} aria-label={`Dharma stands on ${selected.dharmaLegs} of 4 legs`}>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={i < selected.dharmaLegs ? styles.legOn : styles.leg} />
              ))}
              <small>Dharma: {selected.dharmaLegs} of 4 legs</small>
            </div>
          </div>
          <dl className={styles.yugaFacts}>
            <div>
              <dt>Length</dt>
              <dd>
                {fmt(selected.humanYears)} human years
                <br />
                <small>
                  {fmt(selected.divineYears)} divine years + {fmt(selected.sandhya)} of dawn & dusk
                </small>
              </dd>
            </div>
            <div>
              <dt>Human lifespan</dt>
              <dd>{selected.lifespan}</dd>
            </div>
            <div>
              <dt>Path to liberation</dt>
              <dd>{selected.practice}</dd>
            </div>
            <div>
              <dt>Colour of the Lord</dt>
              <dd>{selected.vishnuColour}</dd>
            </div>
          </dl>
          <ul className={styles.notable}>
            {selected.notable.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>How far into Kali are we?</h2>
        <div className={styles.progress} aria-hidden>
          <span style={{ width: `${Math.max(pct, 0.6)}%` }} />
        </div>
        <p className={styles.help}>
          <strong>{fmt(elapsed)}</strong> years have passed of <strong>{fmt(yugas[3].humanYears)}</strong> ({pct.toFixed(2)}%). About{' '}
          <strong>{fmt(kaliRemaining())}</strong> years remain before Kalki and a new Satya-yuga.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Small units of time</h2>
        <table className={styles.units}>
          <tbody>
            {TIME_UNITS.map((u) => (
              <tr key={u.name}>
                <th scope="row">{u.name}</th>
                <td>{u.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Sources items={[src.vpTime, src.defKalpa, src.defVarahaKalpa]} />
    </>
  );
}
