import type { CSSProperties } from 'react';
import {
  fiveActs,
  fiveShaktis,
  ksSchools,
  ksTeachers,
  ksTexts,
  sevenPerceivers,
  tattvaBands,
  threeMalas,
  triads,
  trikaIdeas,
  trikaSources,
  trikaVerses,
  upayas,
  vsAdvaita,
} from '../data/trika';
import { PageHeader, Sources } from '../components/ui';
import styles from './Theology.module.css';

const TEXT_KINDS = ['Revealed', 'Philosophy', 'Manual', 'Hymn'] as const;
const TEXT_KIND_LABEL: Record<(typeof TEXT_KINDS)[number], string> = {
  Revealed: 'Revealed scripture (Agama, Tantra)',
  Philosophy: 'Philosophy',
  Manual: 'Manuals and syntheses',
  Hymn: 'Hymns',
};

export default function Trika() {
  return (
    <>
      <PageHeader
        eyebrow="Pratyabhijna · Spanda · Krama · Kula"
        title="Kashmir Shaivism: the Trika"
        sub="A non-dual Shaiva tradition that flowered in Kashmir between the 9th and 11th centuries. Everything is Shiva: consciousness that is free, alive and self-aware, which becomes the world and the bound soul by its own will, and returns by recognising itself."
      />

      <section className={styles.section}>
        <h2>The teaching in five sentences</h2>
        <div className={styles.verses}>
          {trikaVerses.map((v) => (
            <blockquote key={v.cite} className={styles.verse}>
              <p className="deva">{v.deva}</p>
              <p className={styles.iast}>{v.iast}</p>
              <p className={styles.meaning}>{v.meaning}</p>
              <cite>
                <a href={v.source.url} target="_blank" rel="noreferrer">
                  {v.cite} ↗
                </a>
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Why “Trika”, the triad?</h2>
        <p className={styles.help}>
          The name means “the threefold”. The tradition sees reality in triads, each a unity that shows itself as three. Other names for the system: Pratyabhijna (after its
          philosophy), Shaivadvaita or Ishvaradvaya-vada (Shaiva non-dualism) and, simply, Kashmir Shaivism.
        </p>
        <div className={styles.triads}>
          {triads.map((t) => (
            <div key={t.name} className={styles.triad}>
              <svg viewBox="0 0 120 104" aria-hidden="true">
                <polygon points="60,6 114,98 6,98" />
                <circle cx="60" cy="6" r="5" />
                <circle cx="114" cy="98" r="5" />
                <circle cx="6" cy="98" r="5" />
              </svg>
              <ol>
                {t.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
              <p>{t.about}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Five streams, one synthesis</h2>
        <p className={styles.help}>
          “Kashmir Shaivism” gathers several lineages. Krama leans to Shakti, Pratyabhijna to Shiva, and Spanda stands between them. Abhinavagupta studied under masters of
          each and joined them in the Tantraloka.
        </p>
        <div className={styles.schools}>
          {ksSchools.map((s) => (
            <article key={s.id} className={`${styles.school} ${s.id === 'trika' ? styles.schoolAll : ''}`}>
              <h3>
                {s.name} <span className="deva">{s.sanskrit}</span>
              </h3>
              <p className={styles.gloss}>{s.meaning}</p>
              <p>{s.about}</p>
              <dl>
                <dt>Teachers</dt>
                <dd>{s.founder}</dd>
                <dt>Texts</dt>
                <dd>{s.texts}</dd>
              </dl>
              <p className={styles.srcs}>
                {s.sources.map((x, i) => (
                  <span key={x.url}>
                    {i > 0 && ' · '}
                    <a href={x.url} target="_blank" rel="noreferrer">
                      {x.label} ↗
                    </a>
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The key ideas</h2>
        <dl className={styles.ideas}>
          {trikaIdeas.map((x) => (
            <div key={x.term}>
              <dt>
                <b>{x.term}</b> <span className="deva">{x.sanskrit}</span> <small>{x.meaning}</small>
              </dt>
              <dd>{x.about}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section}>
        <h2>Shiva’s five powers and five acts</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>The five powers (shakti)</h3>
            <p className={styles.help}>Each power comes to the fore in one of the five pure tattvas.</p>
            <ol className={styles.powers}>
              {fiveShaktis.map((p) => (
                <li key={p.name}>
                  <b>
                    {p.name} <span className="deva">{p.sanskrit}</span>
                  </b>
                  <span>{p.power}</span>
                  <small>→ {p.tattva}</small>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.panel}>
            <h3>The five acts (pancha-kritya)</h3>
            <p className={styles.help}>Shiva creates, keeps, withdraws, conceals and reveals. Kshemaraja: we do the same in every moment of experience.</p>
            <ol className={styles.acts}>
              {fiveActs.map((a) => (
                <li key={a.name}>
                  <b>
                    {a.name} <span className="deva">{a.sanskrit}</span>
                  </b>
                  <span>{a.act}</span>
                  <small>In us: {a.inUs}</small>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The 36 tattvas: how Shiva becomes the world</h2>
        <p className={styles.help}>
          Samkhya counts 25 principles, from purusha down to earth. The Trika keeps all 25 and places 11 above them: how the one consciousness narrows itself into a
          limited subject facing a separate world.{' '}
          <a href="#/darshanas?d=samkhya">Compare Samkhya’s 25 →</a>
        </p>
        <div className={styles.tattvas}>
          {tattvaBands.map((b) => (
            <div key={b.id} className={`${styles.band} ${styles['band_' + b.id]}`}>
              <header>
                <h3>
                  {b.name} <span className="deva">{b.sanskrit}</span>
                </h3>
                <p>{b.about}</p>
              </header>
              <ol>
                {b.tattvas.map((t) => (
                  <li key={t.n}>
                    <span className={styles.tn}>{t.n}</span>
                    <b>{t.name}</b>
                    <small>{t.note}</small>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <p className={styles.count}>5 pure + 6 of Maya + 25 of Samkhya = 36</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Bondage: three impurities, seven perceivers</h2>
        <div className={styles.malas}>
          {threeMalas.map((m) => (
            <div key={m.name}>
              <span className={styles.level}>{m.level}</span>
              <b>
                {m.name} <span className="deva">{m.sanskrit}</span>
              </b>
              <p>{m.about}</p>
            </div>
          ))}
        </div>
        <h3 className={styles.h3}>The seven perceivers (pramatri)</h3>
        <p className={styles.help}>
          The one Self appears as seven kinds of knower, according to how many impurities cover it. The top four are free; below them the sense of difference grows.
        </p>
        <ol className={styles.perceivers}>
          {sevenPerceivers.map((p, i) => (
            <li key={p.name} style={{ '--i': i } as CSSProperties}>
              <b>
                {p.name} <span className="deva">{p.sanskrit}</span>
              </b>
              <span>{p.level}</span>
              <small>Malas: {p.malas}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The four ways back (upaya)</h2>
        <p className={styles.help}>
          The ways differ by how much of the limited self they use. The higher the way, the less there is to do, and the fewer can take it. Which one fits a person depends on
          the intensity of grace.
        </p>
        <ol className={styles.upayas}>
          {upayas.map((u, i) => (
            <li key={u.name} style={{ '--i': i } as CSSProperties}>
              <div className={styles.uHead}>
                <b>
                  {u.name} <span className="deva">{u.sanskrit}</span>
                </b>
                <span className={styles.level}>{u.power}</span>
              </div>
              <p>{u.how}</p>
              <p className={styles.example}>e.g. {u.example}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Kashmir Shaivism and Shankara’s Advaita</h2>
        <p className={styles.help}>
          Both say there is only one reality, and it is consciousness. They differ on whether that consciousness acts, and so on whether the world is real.
        </p>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.compare}`}>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Kashmir Shaivism</th>
                <th scope="col">Advaita Vedanta</th>
              </tr>
            </thead>
            <tbody>
              {vsAdvaita.map((r) => (
                <tr key={r.topic}>
                  <th scope="row">{r.topic}</th>
                  <td>{r.trika}</td>
                  <td>{r.advaita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.help}>
          <a href="#/acharyas?d=kashmir-shaivism">See it beside the Vedanta schools →</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The teachers</h2>
        <ol className={styles.timeline}>
          {ksTeachers.map((t) => (
            <li key={t.name}>
              <span className={styles.dates}>{t.dates}</span>
              <div>
                <b>
                  {t.acharyaId ? <a href={`#/acharyas?a=${t.acharyaId}`}>{t.name}</a> : t.name} <span className="deva">{t.sanskrit}</span>
                </b>
                <p>{t.role}</p>
                {t.works !== '—' && <small>{t.works}</small>}
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.help}>
          After Jayaratha the written tradition thinned, carried by Kashmiri Pandit families. The Kashmir Series of Texts and Studies, printed at Srinagar from the early 20th
          century, brought the texts back to scholars.
        </p>
      </section>

      <section className={styles.section}>
        <h2>The texts</h2>
        <div className={styles.texts}>
          {TEXT_KINDS.map((k) => (
            <div key={k}>
              <h3>{TEXT_KIND_LABEL[k]}</h3>
              <ul>
                {ksTexts
                  .filter((t) => t.kind === k)
                  .map((t) => (
                    <li key={t.name}>
                      <b>{t.name}</b> <small>{t.by}</small>
                      <p>{t.about}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Sources items={trikaSources} />
    </>
  );
}
