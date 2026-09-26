import {
  ashtaMathas,
  bhaktiVerse,
  debate,
  dvIdeas,
  dvMukti,
  dvSources,
  dvSteps,
  dvTeachers,
  dvVerses,
  dvVsVa,
  haridasas,
  madhvaWorks,
  nineTenets,
  panchaBheda,
  twoRealities,
} from '../data/dvaita';
import { src } from '../data/sources';
import { PageHeader, Sources } from '../components/ui';
import styles from './Theology.module.css';

/** The three reals and the five differences between them: three edges and two loops. */
function BhedaFigure() {
  return (
    <svg className={styles.bhedaFig} viewBox="0 0 280 230" role="img" aria-label="Five differences: Lord and souls, Lord and matter, soul and soul, soul and matter, matter and matter">
      <line className={styles.bEdge} x1="140" y1="44" x2="62" y2="170" />
      <line className={styles.bEdge} x1="140" y1="44" x2="218" y2="170" />
      <line className={styles.bEdge} x1="62" y1="170" x2="218" y2="170" />
      <path className={styles.bEdge} d="M40 186 C 0 214, 0 150, 36 158" />
      <path className={styles.bEdge} d="M240 186 C 280 214, 280 150, 244 158" />
      <circle className={styles.bLord} cx="140" cy="40" r="28" />
      <circle className={styles.bSoul} cx="62" cy="172" r="26" />
      <circle className={styles.bMatter} cx="218" cy="172" r="26" />
      <text x="140" y="45">
        Vishnu
      </text>
      <text x="62" y="177">
        Souls
      </text>
      <text x="218" y="177">
        Matter
      </text>
      {[
        ['1', 92, 104],
        ['2', 188, 104],
        ['4', 140, 162],
        ['3', 8, 182],
        ['5', 272, 182],
      ].map(([n, x, y]) => (
        <g key={n}>
          <circle className={styles.bNum} cx={x} cy={y} r="10" />
          <text className={styles.bNumText} x={x} y={Number(y) + 4}>
            {n}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Dvaita() {
  return (
    <>
      <PageHeader
        eyebrow="Madhva · Tattvavada"
        title="Dvaita"
        sub="Madhva called his teaching Tattvavada, “the doctrine of what is real”; others called it Dvaita, dualism. Vishnu alone is independent. The world, the countless souls and their differences are all real, and all depend on him. By devotion grounded in knowledge, and by his grace, a fit soul is freed to enjoy its own bliss in his presence, for ever itself."
      />

      <section className={styles.section}>
        <h2>Three verses, read Madhva’s way</h2>
        <div className={styles.verses}>
          {dvVerses.map((v) => (
            <blockquote key={v.cite} className={styles.verse}>
              <p className="deva">{v.deva}</p>
              <p className={styles.iast}>{v.iast}</p>
              <p className={styles.meaning}>{v.meaning}</p>
              <p className={styles.reading}>{v.reading}</p>
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
        <h2>The school in nine words</h2>
        <p className={styles.help}>
          Vyasatirtha summed up Madhva’s teaching in a single verse of nine phrases (prameya-nava-malika, “a garland of nine truths”), still recited by Madhvas today.
        </p>
        <ol className={styles.tenets}>
          {nineTenets.map((t) => (
            <li key={t.iast}>
              <span className="deva">{t.deva}</span>
              <i>{t.iast}</i>
              <b>{t.meaning}</b>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Independent and dependent</h2>
        <div className={styles.twoCol}>
          {twoRealities.map((r, i) => (
            <div key={r.name} className={`${styles.triCard} ${styles[i === 0 ? 'tri_ishvara' : 'tri_chit']}`}>
              <b>
                {r.name} <span className="deva">{r.sanskrit}</span>
              </b>
              <span className={styles.level}>{r.who}</span>
              <p>{r.about}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The five differences</h2>
        <p className={styles.help}>
          Where Advaita finds one reality and calls difference an illusion, Madhva finds difference everywhere and calls it the very nature of things. The pancha-bheda are
          real, eternal and never removed, not even in liberation.
        </p>
        <div className={`${styles.triWrap} ${styles.bhedaWrap}`}>
          <BhedaFigure />
          <ol className={styles.bhedaList}>
            {panchaBheda.map((b) => (
              <li key={b.between}>
                <b>{b.between}</b>
                <span>{b.about}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The key ideas</h2>
        <dl className={styles.ideas}>
          {dvIdeas.map((x) => (
            <div key={x.term}>
              <dt>
                <b>{x.term}</b> <span className="deva">{x.sanskrit}</span> <small>{x.meaning}</small>
              </dt>
              <dd>{x.about}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.srcs}>
          <a href={src.dgMadhvaOntology.url} target="_blank" rel="noreferrer">
            {src.dgMadhvaOntology.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The road to liberation</h2>
        <blockquote className={`${styles.verse} ${styles.wideVerse}`}>
          <p className="deva">{bhaktiVerse.deva}</p>
          <p className={styles.iast}>{bhaktiVerse.iast}</p>
          <p className={styles.meaning}>{bhaktiVerse.meaning}</p>
          <cite>
            <a href={src.dgMadhvaBhakti.url} target="_blank" rel="noreferrer">
              Madhva, {bhaktiVerse.cite} ↗
            </a>
          </cite>
        </blockquote>
        <ol className={styles.steps}>
          {dvSteps.map((s) => (
            <li key={s.name}>
              <b>{s.name}</b>
              <span className="deva">{s.sanskrit}</span>
              <p>{s.about}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Liberation: each soul its own bliss</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>Different even in Vaikuntha</h3>
            <p>
              The freed soul keeps its identity and its place. It enjoys its own innate bliss (svarupananda), no longer hidden by ignorance, and souls differ in that
              bliss as vessels of different sizes are all full, yet hold different amounts. There is no envy among them.
            </p>
          </div>
          <div className={styles.panel}>
            <h3>Four kinds of release</h3>
            <ol className={styles.acts}>
              {dvMukti.map((m) => (
                <li key={m.name}>
                  <b>{m.name}</b>
                  <span>{m.about}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The great debate</h2>
        <p className={styles.help}>
          Madhva’s followers wrote against Advaita for three centuries, and Advaitins answered. The most famous exchange runs text by text, each one refuting the one
          before.
        </p>
        <ol className={styles.debate}>
          {debate.map((d) => (
            <li key={d.text} className={d.side === 'Dvaita' ? styles.dvSide : styles.adSide}>
              <span className={styles.level}>{d.side}</span>
              <b>{d.text}</b>
              <small>{d.by}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The acharyas</h2>
        <ol className={styles.timeline}>
          {dvTeachers.map((t) => (
            <li key={t.name}>
              <span className={styles.dates}>{t.dates}</span>
              <div>
                <b>{t.acharyaId ? <a href={`#/acharyas?a=${t.acharyaId}`}>{t.name}</a> : t.name}</b>
                <p>{t.role}</p>
                <small>{t.works}</small>
              </div>
            </li>
          ))}
        </ol>

        <h3 className={styles.h3}>Madhva’s works</h3>
        <ol className={styles.padas}>
          {madhvaWorks.map((w) => (
            <li key={w.name}>
              <b>{w.name}</b>
              <span>{w.about}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Udupi and the Haridasas</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>Krishna of Udupi</h3>
            <p>
              Madhva installed the image of the child Krishna at Udupi and founded eight mathas to serve it. Their heads take turns to conduct the worship, each for two
              years, in the Paryaya: a handover that is the town’s great festival.
            </p>
            <ul className={styles.chips}>
              {ashtaMathas.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className={styles.help}>
              <a href="#/epithets?d=krishna-forms">Udupi Krishna among the forms of Krishna →</a>
            </p>
          </div>
          <div className={styles.panel}>
            <h3>The Haridasas, “servants of Hari”</h3>
            <p className={styles.help}>They took the philosophy out of Sanskrit and into Kannada song.</p>
            <ol className={styles.acts}>
              {haridasas.map((h) => (
                <li key={h.name}>
                  <b>{h.name}</b>
                  <span>{h.dates}</span>
                  <small>{h.note}</small>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Dvaita and Vishishtadvaita</h2>
        <p className={styles.help}>
          The two great Vaishnava Vedantas agree on much: Vishnu is supreme, the world and souls are real, and devotion and grace free the soul. They part on how the Lord
          and the world are related.
        </p>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.compare}`}>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Dvaita (Madhva)</th>
                <th scope="col">Vishishtadvaita (Ramanuja)</th>
              </tr>
            </thead>
            <tbody>
              {dvVsVa.map((r) => (
                <tr key={r.topic}>
                  <th scope="row">{r.topic}</th>
                  <td>{r.dvaita}</td>
                  <td>{r.vishishtadvaita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.help}>
          <a href="#/vishishtadvaita">Vishishtadvaita in depth →</a> · <a href="#/acharyas?d=dvaita">Dvaita beside all the Vedanta schools →</a> ·{' '}
          <a href="#/darshanas?t=vaishnava">The Brahma (Madhva) Sampradaya →</a>
        </p>
      </section>

      <Sources items={dvSources} />
    </>
  );
}
