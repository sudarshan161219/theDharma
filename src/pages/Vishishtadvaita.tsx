import type { CSSProperties } from 'react';
import {
  alvars,
  bodyRelations,
  fiveForms,
  kalais,
  rahasyaTraya,
  ramanujaWorks,
  sadhanaSaptaka,
  saptaAnupapatti,
  sixLimbs,
  tattvaTraya,
  vaIdeas,
  vaPaths,
  vaSources,
  vaTeachers,
  vaVerses,
  vedantaCompare,
} from '../data/vishishtadvaita';
import { src } from '../data/sources';
import { PageHeader, Sources } from '../components/ui';
import styles from './Theology.module.css';

/** The Lord as the Self at the centre; souls and matter around him as his body. */
function BodyFigure() {
  return (
    <svg className={styles.bodyFig} viewBox="0 0 240 240" role="img" aria-label="Narayana at the centre as the Self of all; souls and matter around him as his body">
      <circle className={styles.figBody} cx="120" cy="120" r="110" />
      <circle className={styles.figSouls} cx="120" cy="120" r="76" />
      <circle className={styles.figLord} cx="120" cy="120" r="40" />
      <text x="120" y="117">
        Narayana
      </text>
      <text className={styles.figSmall} x="120" y="132">
        the Self
      </text>
      <text className={styles.figSmall} x="120" y="68">
        chit · souls
      </text>
      <text className={styles.figSmall} x="120" y="30">
        achit · matter
      </text>
      <text className={styles.figSmall} x="120" y="222">
        together, his body
      </text>
    </svg>
  );
}

/** The two forehead marks (namam), drawn simply. */
function Namam({ kind }: { kind: 'vadakalai' | 'tenkalai' }) {
  return (
    <svg className={styles.namam} viewBox="0 0 60 90" role="img" aria-label={kind === 'vadakalai' ? 'U-shaped namam ending at the brow' : 'Y-shaped namam with a stem down the nose'}>
      <path className={styles.namWhite} d="M14 6 L14 50 Q14 64 30 64 Q46 64 46 50 L46 6" />
      {kind === 'tenkalai' && <path className={styles.namWhite} d="M30 64 L30 86" />}
      <path className={styles.namRed} d="M30 12 L30 56" />
    </svg>
  );
}

export default function Vishishtadvaita() {
  return (
    <>
      <PageHeader
        eyebrow="Ramanuja · Sri Vaishnavism"
        title="Vishishtadvaita"
        sub="“The non-duality of the qualified.” There is one Brahman, Narayana with Sri, but he is never alone: souls and matter are real and eternal, and form his body, as he is their Self. Freed by his grace, the soul serves him for ever in love."
      />

      <section className={styles.section}>
        <h2>Three verses, read Ramanuja’s way</h2>
        <div className={styles.verses}>
          {vaVerses.map((v) => (
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
        <h2>Three reals: Ishvara, chit, achit</h2>
        <p className={styles.help}>
          Advaita holds that Brahman alone is real. Ramanuja counts three realities (tattva-traya), all eternal. But only one of them is independent: souls and matter
          exist only as the Lord’s.
        </p>
        <div className={styles.triCards}>
          {tattvaTraya.map((t) => (
            <div key={t.id} className={`${styles.triCard} ${styles['tri_' + t.id]}`}>
              <b>
                {t.name} <span className="deva">{t.sanskrit}</span>
              </b>
              <span className={styles.level}>{t.meaning}</span>
              <p>{t.about}</p>
              <ul className={styles.kinds}>
                {t.kinds.map((k) => (
                  <li key={k.name}>
                    <b>{k.name}</b> <small>{k.note}</small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The world as the Lord’s body</h2>
        <div className={styles.triWrap}>
          <BodyFigure />
          <div>
            <p className={styles.help}>
              The heart of the system. As a soul supports, moves and uses its body, so Narayana supports, moves and owns everything that is. The body is real and
              different from the soul, yet never exists apart from it. So there is one reality, the Lord with his body, and it is truly many.
            </p>
            <ol className={styles.causes}>
              {bodyRelations.map((r) => (
                <li key={r.name}>
                  <span className={styles.level}>{r.name}</span>
                  <b>
                    {r.lord} <span className="deva">{r.sanskrit}</span>
                  </b>
                  <small>
                    {r.world}. {r.about}
                  </small>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <dl className={styles.ideas}>
          {vaIdeas.map((x) => (
            <div key={x.term}>
              <dt>
                <b>{x.term}</b> <span className="deva">{x.sanskrit}</span> <small>{x.meaning}</small>
              </dt>
              <dd>{x.about}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.srcs}>
          <a href={src.ramanujaMahavakyas.url} target="_blank" rel="noreferrer">
            {src.ramanujaMahavakyas.label} ↗
          </a>{' '}
          ·{' '}
          <a href={src.dgVaSoul.url} target="_blank" rel="noreferrer">
            {src.dgVaSoul.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>Five forms of the Lord</h2>
        <p className={styles.help}>
          From the Pancharatra: the one Narayana is present in five ways, each nearer to us than the last. A traditional image compares them to water: all of it is water,
          but only some can be drunk.
        </p>
        <ol className={styles.perceivers}>
          {fiveForms.map((f, i) => (
            <li key={f.name} style={{ '--i': i } as CSSProperties}>
              <b>
                {f.name} <span className="deva">{f.sanskrit}</span>
              </b>
              <span>{f.what}</span>
              <small>{f.water}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Seven objections to “ignorance”</h2>
        <p className={styles.help}>
          In the opening of the Sri Bhashya, Ramanuja attacks the Advaita claim that the world is projected by a beginningless ignorance (avidya). Tradition sums up his case
          as seven untenables (sapta-anupapatti).
        </p>
        <div className={styles.malas}>
          {saptaAnupapatti.map((o, i) => (
            <div key={o.name}>
              <span className={styles.level}>
                {i + 1} · {o.sanskrit}
              </span>
              <b>{o.name}</b>
              <p>{o.objection}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The ways to the Lord</h2>
        <ol className={styles.upayas}>
          {vaPaths.map((p, i) => (
            <li key={p.name} style={{ '--i': i } as CSSProperties}>
              <div className={styles.uHead}>
                <b>
                  {p.name} <span className="deva">{p.sanskrit}</span>
                </b>
              </div>
              <p>{p.about}</p>
            </li>
          ))}
        </ol>

        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>Seven aids to bhakti</h3>
            <p className={styles.help}>Ramanuja quotes them from an older teacher, the Vakyakara.</p>
            <ol className={styles.acts}>
              {sadhanaSaptaka.map((s) => (
                <li key={s.name}>
                  <b>{s.name}</b>
                  <span>{s.meaning}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.panel}>
            <h3>The six parts of surrender</h3>
            <p className={styles.help}>From the Ahirbudhnya Samhita of the Pancharatra: five limbs, and the surrender they serve.</p>
            <ol className={styles.acts}>
              {sixLimbs.map((s) => (
                <li key={s.name}>
                  <b>
                    {s.name} <span className="deva">{s.sanskrit}</span>
                  </b>
                  <span>{s.meaning}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className={styles.srcs}>
          <a href={src.vaSurrender.url} target="_blank" rel="noreferrer">
            {src.vaSurrender.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The three secrets</h2>
        <p className={styles.help}>At initiation (pancha-samskara) a Sri Vaishnava receives three mantras, the rahasya-traya, and spends a life unfolding them.</p>
        <div className={styles.verses}>
          {rahasyaTraya.map((r) => (
            <blockquote key={r.name} className={styles.verse}>
              <cite className={styles.verseName}>{r.name}</cite>
              <p className="deva">{r.deva}</p>
              <p className={styles.iast}>{r.iast}</p>
              <p className={styles.meaning}>{r.meaning}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Liberation: service for ever</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>What happens</h3>
            <p>
              At death the freed soul leaves by the path of light (archiradi), crosses the river Viraja and reaches Vaikuntha. Its knowledge, contracted by karma, opens out
              in full; it sees the Lord and serves him (kainkarya) with the eternally free, in joy that never ends.
            </p>
          </div>
          <div className={styles.panel}>
            <h3>What it is not</h3>
            <p>
              The soul does not dissolve into Brahman: it stays a distinct self, which is what lets it love. It is equal to the Lord in bliss, but has no part in creating
              or ruling the world (Brahma Sutra 4.4.17). And there is no liberation while still in the body (jivanmukti): release comes when this body falls.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The Alvars</h2>
        <p className={styles.help}>
          Twelve Tamil poet-saints, from about the 6th to the 9th century, whose 4,000 verses, the Nalayira Divya Prabandham, are the “Tamil Veda”. Their hymns sing of the
          108 shrines of Vishnu, the Divya Desams. Nathamuni gathered them, and Ramanuja’s school gave them equal place with Sanskrit scripture (ubhaya Vedanta).
        </p>
        <ol className={styles.alvars}>
          {alvars.map((a) => (
            <li key={a.name}>
              <b>{a.name}</b>
              <small>{a.work}</small>
            </li>
          ))}
        </ol>
        <p className={styles.srcs}>
          <a href={src.tiruvaymoli.url} target="_blank" rel="noreferrer">
            {src.tiruvaymoli.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The acharyas</h2>
        <ol className={styles.timeline}>
          {vaTeachers.map((t) => (
            <li key={t.name}>
              <span className={styles.dates}>{t.dates}</span>
              <div>
                <b>{t.acharyaId ? <a href={`#/acharyas?a=${t.acharyaId}`}>{t.name}</a> : t.name}</b>
                <p>{t.role}</p>
                {t.works !== '—' && <small>{t.works}</small>}
              </div>
            </li>
          ))}
        </ol>

        <h3 className={styles.h3}>Ramanuja’s nine works</h3>
        <ol className={styles.padas}>
          {ramanujaWorks.map((w) => (
            <li key={w.name}>
              <b>{w.name}</b>
              <span>{w.about}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Vadakalai and Tenkalai</h2>
        <p className={styles.help}>
          After the 14th century the tradition divided into a northern school (Vadakalai), following Vedanta Desika, and a southern one (Tenkalai), following Pillai
          Lokacharya. Both accept Ramanuja entirely; they differ on how grace and the soul’s part fit together.
        </p>
        <div className={styles.namams}>
          <figure>
            <Namam kind="vadakalai" />
            <figcaption>Vadakalai</figcaption>
          </figure>
          <figure>
            <Namam kind="tenkalai" />
            <figcaption>Tenkalai</figcaption>
          </figure>
        </div>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.compare}`}>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Vadakalai (northern)</th>
                <th scope="col">Tenkalai (southern)</th>
              </tr>
            </thead>
            <tbody>
              {kalais.map((r) => (
                <tr key={r.topic}>
                  <th scope="row">{r.topic}</th>
                  <td>{r.vadakalai}</td>
                  <td>{r.tenkalai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Three Vedantas, three answers</h2>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.table3} ${styles.compare}`}>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Advaita (Shankara)</th>
                <th scope="col">Vishishtadvaita (Ramanuja)</th>
                <th scope="col">Dvaita (Madhva)</th>
              </tr>
            </thead>
            <tbody>
              {vedantaCompare.map((r) => (
                <tr key={r.topic}>
                  <th scope="row">{r.topic}</th>
                  <td>{r.advaita}</td>
                  <td>{r.vishishtadvaita}</td>
                  <td>{r.dvaita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.help}>
          <a href="#/acharyas?d=vishishtadvaita">See it beside all the Vedanta schools →</a> · <a href="#/darshanas?t=vaishnava">The Sri Sampradaya and other Vaishnava lineages →</a>
        </p>
      </section>

      <Sources items={vaSources} />
    </>
  );
}
