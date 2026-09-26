import { useState } from 'react';
import { devaSources, dikpalas, godsCountdown, navagrahas, thirtyThree, trimurti, vedicGods } from '../data/devas';
import { src } from '../data/sources';
import { PageHeader, Sources } from '../components/ui';
import styles from './Devas.module.css';

/** Compass positions for a 3 × 3 grid. */
const AREA: Record<string, string> = { NW: 'nw', N: 'n', NE: 'ne', W: 'w', Centre: 'c', E: 'e', SW: 'sw', S: 's', SE: 'se' };

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
        sub="The Trimurti, the thirty-three gods of the Veda, the gods the Rig Veda praises most, the nine grahas and the guardians of the eight directions."
      />

      {/* ——— Trimurti ——— */}
      <section className={styles.section}>
        <h2>The Trimurti and their Shaktis</h2>
        <p className={styles.help}>
          Three forms of the one Supreme for the three works of the cosmos. Each sampradaya sees its own deity as the Supreme above all three: see{' '}
          <a href="#/darshanas?t=vaishnava">the sampradayas</a>.
        </p>
        <div className={styles.trimurti}>
          {trimurti.map((t, i) => (
            <article key={t.god} className={`${styles.tm} ${styles['tm' + i]}`}>
              <span className={styles.role}>{t.role}</span>
              <h3>{t.to ? <a href={t.to}>{t.god}</a> : t.god}</h3>
              <p className={styles.shakti}>with {t.goddess}</p>
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
      </section>

      {/* ——— 33 ——— */}
      <section className={styles.section}>
        <h2>How many gods are there? The thirty-three</h2>
        <p className={styles.help}>
          At King Janaka’s court, Vidagdha Shakalya asks Yajnavalkya how many gods there are. Each time, Yajnavalkya gives a smaller number (Brihadaranyaka Upanishad 3.9).
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
        <div className={styles.dots} role="group" aria-label="The 33 gods; tap a group">
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
          “Thirty-three crore gods” is a later reading: <i>koṭi</i> means both “ten million” and “kind”, so the phrase first meant thirty-three kinds.
        </p>
        <SourceLine items={[src.brihadThirtyThree, src.conceptThirtyThree, src.vpAdityas, src.vpRudras]} />
      </section>

      {/* ——— Vedic gods ——— */}
      <section className={styles.section}>
        <h2>The gods of the Rig Veda</h2>
        <p className={styles.help}>
          How many of the Rig Veda’s 1,028 hymns address each god, roughly (hymns shared by two gods are counted for both). Indra and Agni together have nearly half. Vishnu
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
          Eight gods guard the quarters of space. Temples and homes are laid out by them (vastu), and Brahma (zenith) and Vishnu or Ananta (nadir) make ten. Some lists
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
