import { useState } from 'react';
import { devaSources, dikpalas, godsCountdown, navagrahas, statusLabel, thirtyThree, trimurti, trimurtiViews, vedicGods, type TriStatus } from '../data/devas';
import { src } from '../data/sources';
import { PageHeader, Sources } from '../components/ui';
import styles from './Devas.module.css';

/** Compass positions for a 3 × 3 grid. */
const AREA: Record<string, string> = { NW: 'nw', N: 'n', NE: 'ne', W: 'w', Centre: 'c', E: 'e', SW: 'sw', S: 's', SE: 'se' };

function Status({ s }: { s: TriStatus }) {
  return <span className={`${styles.status} ${styles['st_' + s]}`}>{statusLabel[s]}</span>;
}

function SourceLine({ items }: { items: { label: string; url: string }[] }) {
  return (
    <p className={styles.srcs}>
      Source:{' '}
      {items.map((s, i) => (
        <span key={s.label}>
          {i > 0 && ' · '}
          <a href={s.url} target="_blank" rel="noreferrer">
            {s.label} ↗
          </a>
        </span>
      ))}
    </p>
  );
}

export default function Devas() {
  const [group, setGroup] = useState<string | null>(null);
  const [graha, setGraha] = useState('Surya');
  const [dik, setDik] = useState('E');
  const maxHymns = Math.max(...vedicGods.map((g) => g.hymns));
  const g = navagrahas.find((x) => x.name === graha)!;
  const d = dikpalas.find((x) => x.short === dik)!;

  return (
    <>
      <PageHeader
        eyebrow="Devas — the shining ones"
        title="Devas"
        sub="The Trimurti, the thirty-three devas of the Veda, the devas the Rig Veda praises most, the nine grahas and the guardians of the eight directions."
      />

      {/* ——— Trimurti ——— */}
      <section className={styles.section}>
        <h2>The Trimurti and their Shaktis</h2>
        <p className={styles.help}>
          Three forms for the three works of the cosmos, each with his Shakti: creation, preservation and dissolution, matched to the three gunas. Who stands above them,
          and whether one of them is himself the Supreme, is answered differently by each sampradaya: see below. For the many shapes the deities take, from the linga
          to the lion-man, see <a href="#/forms">How the Divine Appears</a>.
        </p>
        <div className={styles.trimurti}>
          {trimurti.map((t, i) => (
            <article key={t.deva} className={`${styles.tm} ${styles['tm' + i]}`}>
              <span className={styles.role}>
                {t.role} · {t.guna}
              </span>
              <h3>{t.to ? <a href={t.to}>{t.deva}</a> : t.deva}</h3>
              <p className={styles.shakti}>with {t.shakti}</p>
              <dl>
                <div>
                  <dt>Vahana</dt>
                  <dd>{t.vahana}</dd>
                </div>
                <div>
                  <dt>Abode</dt>
                  <dd>{t.abode}</dd>
                </div>
                <div>
                  <dt>Emblems</dt>
                  <dd>{t.emblems}</dd>
                </div>
              </dl>
              <p>{t.note}</p>
            </article>
          ))}
        </div>

        <h3 className={styles.sub}>Who is supreme? The Trimurti in each sampradaya</h3>
        <p className={styles.help}>
          The same three names, seven readings. Some traditions place the Supreme above all three; others identify it with one of them. Tap a tradition’s name to read about
          it on the Darshanas page.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.triTable}>
            <thead>
              <tr>
                <th scope="col">Sampradaya</th>
                <th scope="col">The Supreme</th>
                <th scope="col">Brahma</th>
                <th scope="col">Vishnu</th>
                <th scope="col">Shiva (Rudra)</th>
              </tr>
            </thead>
            <tbody>
              {trimurtiViews.map((v) => (
                <tr key={v.id}>
                  <th scope="row">
                    <a href={`#tv-${v.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`tv-${v.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                      {v.tradition}
                    </a>
                    <small>{v.school}</small>
                  </th>
                  <td className={styles.supremeCell}>{v.supreme}</td>
                  {(['brahma', 'vishnu', 'shiva'] as const).map((k) => (
                    <td key={k}>
                      <Status s={v[k]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.views}>
          {trimurtiViews.map((v) => (
            <article key={v.id} id={`tv-${v.id}`} className={styles.view}>
              <header>
                <h4>
                  <a href={v.to}>{v.tradition}</a>
                </h4>
                <small>{v.school}</small>
              </header>
              <div className={styles.tree} aria-label={`${v.tradition}: the Supreme and the Trimurti`}>
                {v.above && (
                  <>
                    <span className={styles.top}>{v.supreme}</span>
                    <span className={styles.branch} />
                  </>
                )}
                <div className={styles.three}>
                  {(
                    [
                      ['Brahma', v.brahma],
                      ['Vishnu', v.vishnu],
                      ['Shiva', v.shiva],
                    ] as [string, TriStatus][]
                  ).map(([name, st]) => (
                    <span key={name} className={`${styles.node} ${styles['st_' + st]}`}>
                      <b>{name}</b>
                      <small>{st === 'supreme' || st === 'self' ? `= ${v.supreme}` : statusLabel[st]}</small>
                    </span>
                  ))}
                </div>
              </div>
              <p>{v.summary}</p>
              <blockquote className={styles.tvVerse}>
                {v.verse.iast && <i>{v.verse.iast}</i>}
                <span>{v.verse.paraphrase ? v.verse.meaning : `“${v.verse.meaning}”`}</span>
                <cite>{v.verse.ref}</cite>
              </blockquote>
              <p className={styles.srcs}>
                Source:{' '}
                {v.sources.map((s, i) => (
                  <span key={s.label}>
                    {i > 0 && ' · '}
                    <a href={s.url} target="_blank" rel="noreferrer">
                      {s.label} ↗
                    </a>
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ——— 33 ——— */}
      <section className={styles.section}>
        <h2>How many devas are there? The thirty-three</h2>
        <p className={styles.help}>
          At King Janaka’s court, Vidagdha Shakalya asks Yajnavalkya how many devas there are. Each time, Yajnavalkya gives a smaller number (Brihadaranyaka Upanishad 3.9).
        </p>
        <ol className={styles.countdown}>
          {godsCountdown.map((c, i) => (
            <li key={c.n} style={{ opacity: 0.55 + (i / godsCountdown.length) * 0.45 }}>
              <b>{c.n}</b>
              <span>{c.answer}</span>
            </li>
          ))}
        </ol>

        <h3 className={styles.sub}>The thirty-three</h3>
        <div className={styles.dots} role="group" aria-label="The 33 devas; tap a group">
          {thirtyThree.map((t) => (
            <button
              key={t.group}
              className={`${styles.dotGroup} ${styles['tone_' + t.tone]} ${group === t.group ? styles.dotOn : ''}`}
              onClick={() => setGroup(group === t.group ? null : t.group)}
              aria-pressed={group === t.group}
            >
              <span className={styles.dotRow}>
                {Array.from({ length: t.count }, (_, i) => (
                  <i key={i} />
                ))}
              </span>
              <b>
                {t.count} {t.group}
              </b>
            </button>
          ))}
        </div>
        <div className={styles.groups33}>
          {thirtyThree
            .filter((t) => !group || t.group === group)
            .map((t) => (
              <article key={t.group} className={`${styles.g33} ${styles['tone_' + t.tone]}`}>
                <h4>
                  {t.count} {t.group}
                </h4>
                <p>
                  <span className={styles.label}>Upanishad:</span> {t.upanishad}
                </p>
                <ul className={styles.names}>
                  {t.names.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <small>{t.namesFrom}</small>
              </article>
            ))}
        </div>
        <p className={styles.help}>
          “Thirty-three crore devatas” (tetis koti) is a later reading: <i>koṭi</i> means both “ten million” and “kind”, so the phrase first meant thirty-three kinds.
        </p>
        <SourceLine items={[src.brihadThirtyThree, src.conceptThirtyThree, src.vpAdityas, src.vpRudras]} />
      </section>

      {/* ——— Vedic devas ——— */}
      <section className={styles.section}>
        <h2>The devas of the Rig Veda</h2>
        <p className={styles.help}>
          How many of the Rig Veda’s 1,028 hymns address each deva, roughly (hymns shared by two devas are counted for both). Indra and Agni together have nearly half. Vishnu
          and Rudra, supreme in later Hinduism, have only a few.
        </p>
        <ul className={styles.hymns}>
          {vedicGods.map((v) => (
            <li key={v.name}>
              <b>
                {v.name} <span className="deva">{v.sanskrit}</span>
              </b>
              <span className={styles.hBar}>
                <i style={{ width: `${(v.hymns / maxHymns) * 100}%` }} />
                <small>about {v.hymns}</small>
              </span>
              <p>{v.role}</p>
            </li>
          ))}
        </ul>
        <SourceLine items={[src.rigVeda, src.rigVeda1_1_1]} />
      </section>

      {/* ——— Navagrahas ——— */}
      <section className={styles.section}>
        <h2>The Navagrahas: nine “seizers”</h2>
        <p className={styles.help}>
          A graha is not just a planet but a power that “grasps” and influences beings. The seven visible ones give their names to the weekdays. In temples they stand as a
          square of nine, Surya in the centre and none facing another. Tap one.
        </p>
        <div className={styles.compassRow}>
          <div className={styles.compass}>
            {navagrahas.map((x) => (
              <button
                key={x.name}
                className={`${styles.cell} ${graha === x.name ? styles.cellOn : ''}`}
                style={{ gridArea: AREA[x.dir] }}
                onClick={() => setGraha(x.name)}
                aria-pressed={graha === x.name}
              >
                <b>{x.name}</b>
                <small>{x.dir === 'Centre' ? 'centre' : x.dir}</small>
              </button>
            ))}
          </div>
          <article className={styles.pick}>
            <h3>
              {g.name} <span className="deva">{g.sanskrit}</span>
            </h3>
            <dl>
              <div>
                <dt>Body</dt>
                <dd>{g.body}</dd>
              </div>
              <div>
                <dt>Day</dt>
                <dd>{g.day}</dd>
              </div>
              <div>
                <dt>Birth</dt>
                <dd>{g.parents}</dd>
              </div>
            </dl>
            <p>{g.role}</p>
          </article>
        </div>
        <SourceLine items={[src.defNavagraha, src.vpMindBorn]} />
      </section>

      {/* ——— Dikpalas ——— */}
      <section className={styles.section}>
        <h2>The Ashta-dikpalas: guardians of the directions</h2>
        <p className={styles.help}>
          Eight devas guard the quarters of space. Temples and homes are laid out by them (vastu), and Brahma (zenith) and Vishnu or Ananta (nadir) make ten. Some lists
          place Soma in the north instead of Kubera.
        </p>
        <div className={styles.compassRow}>
          <div className={styles.compass}>
            {dikpalas.map((x) => (
              <button
                key={x.short}
                className={`${styles.cell} ${dik === x.short ? styles.cellOn : ''}`}
                style={{ gridArea: AREA[x.short] }}
                onClick={() => setDik(x.short)}
                aria-pressed={dik === x.short}
              >
                <b>{x.name}</b>
                <small>{x.short}</small>
              </button>
            ))}
            <div className={styles.centre} style={{ gridArea: 'c' }}>
              <small>zenith</small>
              <b>Brahma</b>
              <small>nadir</small>
              <b>Ananta</b>
            </div>
          </div>
          <article className={styles.pick}>
            <h3>
              {d.name} <span className="deva">{d.sanskrit}</span>
            </h3>
            <p className={styles.dirName}>Guardian of the {d.dir.toLowerCase()}</p>
            <dl>
              <div>
                <dt>Weapon</dt>
                <dd>{d.weapon}</dd>
              </div>
              <div>
                <dt>Vahana</dt>
                <dd>{d.vahana}</dd>
              </div>
              <div>
                <dt>Consort</dt>
                <dd>{d.consort}</dd>
              </div>
            </dl>
          </article>
        </div>
        <SourceLine items={[src.defDikpala, src.defAshtadikpala]} />
      </section>

      <Sources items={devaSources} />
    </>
  );
}
