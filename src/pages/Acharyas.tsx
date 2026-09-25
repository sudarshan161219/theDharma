import { useEffect } from 'react';
import { acharyaById, acharyas, darshanaById, darshanas, vaishnavaSampradayas } from '../data/acharyas';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { Chip, Facts, PageHeader, Sources } from '../components/ui';
import styles from './Acharyas.module.css';

export default function Acharyas({ route }: { route: Route }) {
  const focus = route.query.get('a');
  const school = route.query.get('d');
  const list = school ? acharyas.filter((a) => a.darshana === school) : acharyas;

  useEffect(() => {
    if (focus) document.getElementById(`ac-${focus}`)?.scrollIntoView({ block: 'start' });
  }, [focus]);

  const setSchool = (d: string | null) => navigate(d ? `/acharyas?d=${d}` : '/acharyas');

  return (
    <>
      <PageHeader
        eyebrow="Teachers of Vedanta and beyond"
        title="Acharyas"
        sub="The great teachers who read the Upanishads, the Brahma Sutras and the Gita, and founded the living schools (sampradayas) of Hinduism. Start with the comparison: each school answers the same questions differently."
      />

      <section className={styles.section}>
        <h2>The schools at a glance</h2>
        <p className={styles.help}>How does each school see the soul, the world and liberation? Tap a school to see its acharyas.</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">School</th>
                <th scope="col">In brief</th>
                <th scope="col">Soul &amp; God</th>
                <th scope="col">The world</th>
                <th scope="col">Liberation</th>
              </tr>
            </thead>
            <tbody>
              {darshanas.map((d) => (
                <tr key={d.id} className={school === d.id ? styles.rowOn : undefined}>
                  <th scope="row">
                    <button onClick={() => setSchool(school === d.id ? null : d.id)} aria-pressed={school === d.id}>
                      {d.name}
                    </button>
                    <span className="deva">{d.sanskrit}</span>
                  </th>
                  <td>{d.inBrief}</td>
                  <td>{d.jivaBrahman}</td>
                  <td>{d.world}</td>
                  <td>{d.liberation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The four Vaishnava sampradayas</h2>
        <p className={styles.help}>Tradition holds that in Kali-yuga, four lineages would carry Vaishnava teaching. Each traces itself to a divine source.</p>
        <div className={styles.samp}>
          {vaishnavaSampradayas.map((s) => {
            const a = acharyaById.get(s.acharya)!;
            return (
              <a key={s.name} href={`#/acharyas?a=${a.id}`} className={styles.sampCard}>
                <span className={styles.sampName}>{s.name}</span>
                <span className={styles.sampFrom}>from {s.source}</span>
                <strong>{a.name}</strong>
                <small>{darshanaById.get(s.darshana)?.name}</small>
              </a>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.listHead}>
          <h2>{school ? `Acharyas of ${darshanaById.get(school)?.name}` : 'The acharyas, in order of time'}</h2>
          {school && (
            <button className={styles.clear} onClick={() => setSchool(null)}>
              Show all ×
            </button>
          )}
        </div>
        <ol className={styles.timeline}>
          {list.map((a) => {
            const d = darshanaById.get(a.darshana);
            return (
              <li key={a.id} id={`ac-${a.id}`} className={focus === a.id ? styles.focus : undefined}>
                <div className={styles.when}>{a.dates}</div>
                <article className={styles.card}>
                  <h3>
                    {a.name} <span className="deva">{a.sanskrit}</span>
                  </h3>
                  <div className={styles.chips}>
                    {d && <Chip tone="accent">{d.name}</Chip>}
                    {a.sampradaya && <Chip tone="indigo">{a.sampradaya}</Chip>}
                    <Chip>{a.born}</Chip>
                  </div>
                  <p>{a.summary}</p>
                  <Facts items={a.facts} />
                  <p className={styles.works}>
                    <strong>Key works: </strong>
                    {a.works.join(' · ')}
                  </p>
                  <p className={styles.srcs}>
                    Source:{' '}
                    {a.sources.map((s, i) => (
                      <span key={s.label}>
                        {i > 0 && ' · '}
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.label} ↗
                        </a>
                      </span>
                    ))}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      <p className={styles.help}>
        Dates are approximate. Traditional accounts within each sampradaya often give different, sometimes much earlier, dates than modern scholarship.
      </p>
      <Sources items={[src.hinduPhilosophy, src.dasgupta3, src.dasgupta4, src.dasgupta5, src.brahmaSutraShankara, src.brahmaSutraRamanuja]} />
    </>
  );
}
