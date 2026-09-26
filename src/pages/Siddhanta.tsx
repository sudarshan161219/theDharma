import type { CSSProperties } from 'react';
import {
  agamaPadas,
  agamasByFace,
  avasthas,
  bodhamSutras,
  fourPaths,
  graceSteps,
  natarajaActs,
  pashas,
  shaivaCompare,
  siddhantaSources,
  siddhantaTattvas,
  siddhantaTeachers,
  soulClasses,
  threeCauses,
  tirumurai,
  tripadartha,
} from '../data/siddhanta';
import { src } from '../data/sources';
import { art } from '../data/forms';
import { PageHeader, Sources } from '../components/ui';
import styles from './Theology.module.css';

/** Pati above, the soul below, tied by the rope of pasha. */
function TripadarthaFigure() {
  return (
    <svg className={styles.triFig} viewBox="-10 0 240 212" role="img" aria-label="Pati above; the soul (pashu) below, tied by the rope of pasha">
      <circle className={styles.figPati} cx="110" cy="42" r="30" />
      <text x="110" y="47">
        Pati
      </text>
      <path className={styles.figGrace} d="M110 76 L110 118" />
      <text className={styles.figSmall} x="118" y="100" textAnchor="start">
        grace
      </text>
      <circle className={styles.figPashu} cx="110" cy="150" r="24" />
      <text x="110" y="155">
        Pashu
      </text>
      <path className={styles.figRope} d="M86 150 C 50 150, 40 185, 20 188 M134 150 C 170 150, 180 185, 200 188" />
      <text className={styles.figSmall} x="30" y="206" textAnchor="middle">
        pasha
      </text>
      <text className={styles.figSmall} x="190" y="206" textAnchor="middle">
        pasha
      </text>
    </svg>
  );
}

export default function Siddhanta() {
  return (
    <>
      <PageHeader
        eyebrow="Pati · pashu · pasha"
        title="Shaiva Siddhanta"
        sub="The Shaiva tradition of the Agamas, and the living faith of Tamil Shaivism. Shiva, souls and the bonds that tie them are three eternal realities. Out of pure compassion Shiva works to free each soul, and the freed soul rests at his feet: one with him in experience, yet never the same as him."
      />

      <section className={styles.section}>
        <h2>Three eternal realities</h2>
        <p className={styles.help}>
          The Siddhanta’s first word is its three categories (tripadartha). The Tirumantiram puts it plainly: as Pati is beginningless, so are pashu and pasha (
          <a href={src.tirumantiram115.url} target="_blank" rel="noreferrer">
            verse 115 ↗
          </a>
          ).
        </p>
        <div className={styles.triWrap}>
          <TripadarthaFigure />
          <div className={styles.triCards}>
            {tripadartha.map((t) => (
              <div key={t.id} className={`${styles.triCard} ${styles['tri_' + t.id]}`}>
                <b>
                  {t.name} <span className="deva">{t.sanskrit}</span>
                </b>
                <span className={styles.level}>{t.meaning}</span>
                <p>{t.about}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className={styles.h3}>Who makes the world, and out of what?</h3>
        <p className={styles.help}>
          Shiva does not turn into the world, as the non-dual schools hold. He shapes it out of maya, as a potter shapes a pot from clay: not for himself, but so that souls
          may have bodies, act and ripen.
        </p>
        <ol className={styles.causes}>
          {threeCauses.map((c) => (
            <li key={c.cause}>
              <span className={styles.level}>{c.cause}</span>
              <b>
                {c.who} <span className="deva">{c.sanskrit}</span>
              </b>
              <small>like {c.image.toLowerCase()}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The bonds and the bound</h2>
        <div className={styles.malas}>
          {pashas.map((p) => (
            <div key={p.name} className={p.extra ? styles.extra : undefined}>
              <span className={styles.level}>{p.extra ? 'Sometimes added' : 'Bond'}</span>
              <b>
                {p.name} <span className="deva">{p.sanskrit}</span>
              </b>
              <p>{p.about}</p>
            </div>
          ))}
        </div>

        <h3 className={styles.h3}>Three classes of soul</h3>
        <p className={styles.help}>Souls differ by how many bonds still hold them, and Shiva comes to each in a different way.</p>
        <div className={styles.malas}>
          {soulClasses.map((c) => (
            <div key={c.name}>
              <span className={styles.level}>Bonds: {c.bonds}</span>
              <b>
                {c.name} <span className="deva">{c.sanskrit}</span>
              </b>
              <p>{c.about}</p>
            </div>
          ))}
        </div>

        <h3 className={styles.h3}>The soul’s long journey</h3>
        <ol className={styles.journey}>
          {avasthas.map((a) => (
            <li key={a.name}>
              <b>
                {a.name} <span className="deva">{a.sanskrit}</span>
              </b>
              <p>{a.about}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The dance of the five acts</h2>
        <p className={styles.help}>
          Everything Shiva does is for souls: he creates, keeps and dissolves the worlds, conceals himself until they are ripe, and then reveals himself in grace. The Tamil
          texts see all five in Nataraja, dancing in the golden hall at Chidambaram.
        </p>
        <div className={styles.nataWrap}>
          <figure className={styles.nataFig}>
            <a href={art.nataraja.url} target="_blank" rel="noreferrer" title={`${art.nataraja.title} — view at ${art.nataraja.museum}`}>
              <img src={art.nataraja.img} alt={art.nataraja.title} loading="lazy" decoding="async" />
            </a>
            <figcaption>
              {art.nataraja.title}, {art.nataraja.place}, {art.nataraja.date}.{' '}
              <a href={art.nataraja.url} target="_blank" rel="noreferrer">
                {art.nataraja.museum}, public domain ↗
              </a>
            </figcaption>
          </figure>
          <div className={styles.panel}>
            <ol className={styles.acts}>
              {natarajaActs.map((a) => (
                <li key={a.act}>
                  <b>
                    {a.act} <span className="deva">{a.sanskrit}</span>
                  </b>
                  <span>{a.meaning}</span>
                  <small>{a.sign}</small>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className={styles.help}>
          <a href="#/forms">More on how the divine takes form in sculpture →</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>How grace comes</h2>
        <ol className={styles.steps}>
          {graceSteps.map((g) => (
            <li key={g.name}>
              <b>{g.name}</b>
              <span className="deva">{g.sanskrit}</span>
              <p>{g.about}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>The four paths</h2>
        <p className={styles.help}>
          Every Agama has four sections, and the soul climbs them as four stages, not rival choices. The Tamil tradition names each by a relationship with Shiva and
          by one of the four great saints (Nalvar) who lived it.
        </p>
        <ol className={styles.upayas}>
          {fourPaths.map((p, i) => (
            <li key={p.pada} style={{ '--i': i } as CSSProperties}>
              <div className={styles.uHead}>
                <b>
                  {p.pada} <span className="deva">{p.sanskrit}</span>
                </b>
                <span className={styles.level}>
                  {p.tamil} · {p.relation}
                </span>
              </div>
              <p>{p.practice}</p>
              <p className={styles.example}>
                Lived by {p.saint}. Fruit: <b>{p.fruit}</b>, {p.fruitMeaning.charAt(0).toLowerCase() + p.fruitMeaning.slice(1)}.
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Liberation: not one, not two</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>Meykandar’s “advaita”</h3>
            <p>
              The Tamil Siddhanta also calls itself advaita, “not two”, but reads the word as <i>inseparable</i> (ananya), not <i>identical</i>. Shiva is in the soul as
              the sound <i>a</i> is in every letter, and as the soul is in the body: never apart, never the same. The freed soul enjoys Shiva’s bliss; it does not become
              the Lord who creates and rules.
            </p>
          </div>
          <div className={styles.panel}>
            <h3>The Sanskrit teachers</h3>
            <p>
              For Sadyojyoti, Ramakantha and Aghorashiva the freed soul becomes <i>equal</i> to Shiva (shiva-samya): all-knowing and all-powerful like him, yet a
              separate soul, which does not share in the five acts. Hence the school is often called dualist (dvaita).
            </p>
          </div>
        </div>
        <p className={styles.srcs}>
          <a href={src.sivaprakasamLiberation.url} target="_blank" rel="noreferrer">
            {src.sivaprakasamLiberation.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The 36 tattvas, from maya</h2>
        <p className={styles.help}>
          The Siddhanta counts the same 36 tattvas as the Trika, but reads them differently: they are not Shiva unfolding, but products of maya, which Shiva sets in motion.{' '}
          <a href="#/trika">Compare the Trika’s reading →</a>
        </p>
        <div className={styles.tattvas}>
          {siddhantaTattvas.map((t, i) => (
            <div key={t.name} className={`${styles.band} ${styles[['band_shuddha', 'band_mishra', 'band_ashuddha'][i]]}`}>
              <header>
                <h3>
                  {t.name} <span className="deva">{t.sanskrit}</span>
                </h3>
                <p>{t.from}</p>
              </header>
              <div className={styles.bandBody}>
                <span className={styles.bigN}>{t.count}</span>
                <p>{t.items}</p>
              </div>
            </div>
          ))}
          <p className={styles.count}>5 + 7 + 24 = 36</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The 28 Agamas</h2>
        <p className={styles.help}>
          The Siddhanta’s scripture. Tradition says Shiva spoke them from his five faces. The first ten are called Shaiva, the other eighteen Raudra, and the Kamika
          comes first. Together they have some two hundred subsidiary texts (upagamas).
        </p>
        <div className={styles.faces}>
          {agamasByFace.map((f) => (
            <div key={f.face}>
              <b>
                {f.face} <span className="deva">{f.sanskrit}</span>
              </b>
              <ul>
                {f.agamas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className={styles.h3}>The four sections of an Agama</h3>
        <ol className={styles.padas}>
          {agamaPadas.map((p) => (
            <li key={p.name}>
              <b>{p.name}</b>
              <span>{p.subject}</span>
            </li>
          ))}
        </ol>
        <p className={styles.srcs}>
          <a href={src.agamaMeaning.url} target="_blank" rel="noreferrer">
            {src.agamaMeaning.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The Shivajnanabodham in twelve sutras</h2>
        <p className={styles.help}>
          Meykandar’s twelve short sutras are to the Tamil Siddhanta what the Brahma Sutras are to Vedanta. Tradition holds them to be a Tamil rendering of verses from the
          Raurava Agama. They fall into four groups of three. Paraphrased:
        </p>
        <div className={styles.sutras}>
          {bodhamSutras.map((g, gi) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <span className={styles.level}>{g.about}</span>
              <ol start={gi * 3 + 1}>
                {g.sutras.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The Tirumurai: twelve books of Tamil Shaiva scripture</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Book</th>
                <th scope="col">Work</th>
                <th scope="col">By</th>
                <th scope="col">About</th>
              </tr>
            </thead>
            <tbody>
              {tirumurai.map((t) => (
                <tr key={t.books}>
                  <th scope="row">{t.books}</th>
                  <td>{t.name}</td>
                  <td>{t.by}</td>
                  <td>{t.about}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.help}>
          Nambiyandar Nambi gathered the first eleven; the Periya Puranam was added as the twelfth. Its 63 Nayanars come from every walk of life: kings and potters, a
          hunter, a woman poet (Karaikkal Ammaiyar) and Nandanar, born to a caste kept outside the temple. Beside them stand the fourteen Meykanda Shastras, the philosophical canon.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Two streams, one school</h2>
        <p className={styles.help}>
          The Siddhanta first took shape in Sanskrit, in Kashmir and central India, before the 10th century. As it waned in the north it took root in the Tamil country, where
          the hymns of the saints and Meykandar’s philosophy made it the Shaivism of the south.
        </p>
        <ol className={styles.timeline}>
          {siddhantaTeachers.map((t) => (
            <li key={t.name}>
              <span className={styles.dates}>{t.dates}</span>
              <div>
                <b>
                  {t.name} <span className={`${styles.stream} ${t.stream === 'Tamil' ? styles.streamTamil : ''}`}>{t.stream}</span>
                </b>
                <p>{t.role}</p>
                <small>{t.works}</small>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Worship and institutions</h2>
        <dl className={styles.ideas}>
          <div>
            <dt>
              <b>Temple</b> <small>Parartha puja</small>
            </dt>
            <dd>
              Public worship in the temple follows the Agamas and is led by hereditary priests, the Adishaivas or Shivacharyas. Aghorashiva’s manual still sets its order.
            </dd>
          </div>
          <div>
            <dt>
              <b>Home</b> <small>Atmartha puja</small>
            </dt>
            <dd>After initiation a devotee worships Shiva for their own sake, daily, at home, often with a small linga.</dd>
          </div>
          <div>
            <dt>
              <b>Monasteries</b> <small>Adheenam</small>
            </dt>
            <dd>
              Non-brahmin Shaiva monasteries such as Dharmapuram, Tiruvavaduthurai and Tiruppanandal keep the texts, train teachers and run temples in Tamil Nadu.
            </dd>
          </div>
          <div>
            <dt>
              <b>Marks</b> <small>Vibhuti · rudraksha · panchakshara</small>
            </dt>
            <dd>Sacred ash on the brow, rudraksha beads, and the five-syllable mantra “namaḥ śivāya”, the heart of Siddhanta practice.</dd>
          </div>
        </dl>
      </section>

      <section className={styles.section}>
        <h2>Three Shaiva and Vedantic answers</h2>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.table3} ${styles.compare}`}>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Shaiva Siddhanta</th>
                <th scope="col">Kashmir Shaivism</th>
                <th scope="col">Advaita Vedanta</th>
              </tr>
            </thead>
            <tbody>
              {shaivaCompare.map((r) => (
                <tr key={r.topic}>
                  <th scope="row">{r.topic}</th>
                  <td>{r.siddhanta}</td>
                  <td>{r.trika}</td>
                  <td>{r.advaita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Sources items={siddhantaSources} />
    </>
  );
}
