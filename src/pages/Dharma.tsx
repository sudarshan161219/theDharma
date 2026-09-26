import { ashramas, dharmaSources, mahayajnas, purusharthas, rinas, samskaras, tenMarks, type Phase } from '../data/dharma';
import { src } from '../data/sources';
import { PageHeader, Sources } from '../components/ui';
import styles from './Dharma.module.css';

const PHASES: Phase[] = ['Before birth', 'Childhood', 'Learning', 'Householder', 'Death'];

export default function Dharma() {
  return (
    <>
      <PageHeader
        eyebrow="Dharma in a human life"
        title="Life & Dharma"
        sub="The four aims of life, the four stages, the sixteen rites of passage from conception to cremation, and the five daily offerings, as the Dharmashastras describe them."
      />

      {/* ——— Ten marks ——— */}
      <section className={styles.section}>
        <h2>What is dharma? Manu’s ten marks</h2>
        <blockquote className={styles.verse}>
          <p className="deva">{tenMarks.deva}</p>
          <p className={styles.iast}>{tenMarks.iast}</p>
          <cite>— {tenMarks.ref}</cite>
        </blockquote>
        <ol className={styles.marks}>
          {tenMarks.marks.map(([s, e]) => (
            <li key={s}>
              <b>{s}</b>
              <span>{e}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Purusharthas ——— */}
      <section className={styles.section}>
        <h2>The four aims of life (purusharthas)</h2>
        <p className={styles.help}>
          Three aims belong to life in the world (the trivarga), with dharma guiding wealth and desire. The fourth, moksha, goes beyond them all.
        </p>
        <div className={styles.aims}>
          <div className={styles.trivarga}>
            <span className={styles.tvLabel}>Trivarga: the three worldly aims</span>
            {purusharthas.slice(0, 3).map((p) => (
              <div key={p.name} className={styles.aim}>
                <b>
                  {p.name} <span className="deva">{p.sanskrit}</span>
                </b>
                <i>{p.meaning}</i>
                <small>{p.about}</small>
              </div>
            ))}
          </div>
          <div className={`${styles.aim} ${styles.moksha}`}>
            <b>
              {purusharthas[3].name} <span className="deva">{purusharthas[3].sanskrit}</span>
            </b>
            <i>{purusharthas[3].meaning}</i>
            <small>{purusharthas[3].about}</small>
          </div>
        </div>
      </section>

      {/* ——— Ashramas ——— */}
      <section className={styles.section}>
        <h2>The four stages of life (ashramas)</h2>
        <p className={styles.help}>An ideal life of a hundred years, in four quarters. In practice most people remain householders, and some go straight to sannyasa.</p>
        <div className={styles.lifebar} aria-label="A hundred-year life in four stages">
          {ashramas.map((a, i) => (
            <div key={a.name} className={styles['a' + i]} style={{ flexGrow: a.to - a.from }}>
              <b>{a.name}</b>
              <small>{a.years}</small>
            </div>
          ))}
        </div>
        <div className={styles.ashramas}>
          {ashramas.map((a, i) => (
            <article key={a.name} className={`${styles.ashrama} ${styles['b' + i]}`}>
              <h3>
                {a.name} <span className="deva">{a.sanskrit}</span>
              </h3>
              <span className={styles.who}>
                {a.who} · {a.years}
              </span>
              <p>{a.duty}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Samskaras ——— */}
      <section className={styles.section}>
        <h2>The sixteen samskaras</h2>
        <p className={styles.help}>
          Samskara means “refining”: rites that shape a person at each turning point of life. Lists differ a little between texts; this is the most common one.
        </p>
        <div className={styles.phases}>
          {PHASES.map((ph, pi) => (
            <div key={ph} className={`${styles.phase} ${styles['p' + pi]}`}>
              <h3>{ph}</h3>
              <ol>
                {samskaras
                  .filter((s) => s.phase === ph)
                  .map((s) => (
                    <li key={s.n}>
                      <span className={styles.sNum}>{s.n}</span>
                      <div>
                        <b>
                          {s.name} <span className="deva">{s.sanskrit}</span>
                        </b>
                        <small className={styles.when}>{s.when}</small>
                        <p>{s.what}</p>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </div>
        <p className={styles.srcs}>
          Source:{' '}
          {[src.defShodashaSamskara, src.conceptSixteenSamskaras, src.defSamskara].map((s, i) => (
            <span key={s.label}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            </span>
          ))}
        </p>
      </section>

      {/* ——— Daily ——— */}
      <section className={styles.section}>
        <h2>Every day: the five great offerings</h2>
        <p className={styles.help}>
          Manu (3.70) asks every householder to make five offerings (pancha-mahayajna) each day, repaying what he receives from the world. They rest on the three debts
          everyone is born with.
        </p>
        <div className={styles.yajnas}>
          {mahayajnas.map((y) => (
            <div key={y.name}>
              <b>
                {y.name} <span className="deva">{y.sanskrit}</span>
              </b>
              <span>to {y.to}</span>
              <small>{y.how}</small>
            </div>
          ))}
        </div>
        <h3 className={styles.sub}>The three debts (rinas)</h3>
        <ul className={styles.rinas}>
          {rinas.map((r) => (
            <li key={r.debt}>
              <b>{r.debt}</b> to {r.to.toLowerCase()}, repaid {r.repaid}
            </li>
          ))}
        </ul>
      </section>

      <Sources items={dharmaSources} />
    </>
  );
}
