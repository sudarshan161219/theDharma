import { counts, fiveElements, groupInfo, gunas, tattvas, tattvaSources, tattvaVerses, type TattvaGroup } from '../data/tattvas';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { PageHeader, Sources } from '../components/ui';
import styles from './Tattvas.module.css';

const GROUPS = Object.keys(groupInfo) as TattvaGroup[];

export default function Tattvas({ route }: { route: Route }) {
  const selected = tattvas.find((t) => t.id === route.query.get('t')) ?? null;
  const el = selected?.element !== undefined ? fiveElements[selected.element] : null;
  const choose = (id: string) => {
    navigate(selected?.id === id ? '/tattvas' : `/tattvas?t=${id}`);
    // On narrow screens the explanation sits above the list: bring it into view.
    if (window.matchMedia('(max-width: 900px)').matches) {
      setTimeout(() => document.getElementById('tattva-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Tattva: “that-ness”, a principle of reality"
        title="The Tattvas"
        sub="How does one reality become a world of minds, senses and things? The schools answer by counting tattvas, the principles of existence, from pure consciousness down to earth. Samkhya counts twenty-five; the Shaiva and Shakta traditions thirty-six. Here they are, one by one, with the gunas and the five elements."
      />

      <section className={styles.section}>
        <div className={styles.verses}>
          {tattvaVerses.map((v) => (
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
        <h2>How many realities?</h2>
        <p className={styles.help}>
          Every school counts differently, and what it counts says what it thinks is real. Even Samkhya’s own teachers disagreed: the Mahabharata records counts of twenty-four,
          twenty-five, twenty-six and more (
          <a href={src.samkhyaThirtyEight.url} target="_blank" rel="noreferrer">
            study ↗
          </a>
          ).
        </p>
        <ol className={styles.counts}>
          {counts.map((c) => (
            <li key={c.school}>
              <span className={styles.big}>{c.count}</span>
              <div>
                <b>{c.to ? <a href={c.to}>{c.school}</a> : c.school}</b>
                <p>{c.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} id="thirty-six">
        <h2>The thirty-six, from consciousness to earth</h2>
        <p className={styles.help}>
          Tap any tattva to read about it. The large number is its place among the Shaiva thirty-six; the small “S” number its place in Samkhya’s twenty-five, where Purusha
          stands apart as the twenty-fifth.
        </p>
        <div className={styles.explorer}>
          <div className={styles.ladder}>
            {GROUPS.map((g) => (
              <div key={g} className={`${styles.band} ${styles['g_' + g]}`}>
                <div className={styles.bandHead}>
                  <b>{groupInfo[g].label}</b> <span className="deva">{groupInfo[g].sanskrit}</span>
                  {groupInfo[g].shaivaOnly && <span className={styles.only}>Shaiva only</span>}
                </div>
                <div className={styles.tiles}>
                  {tattvas
                    .filter((t) => t.group === g)
                    .map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`${styles.tile} ${selected?.id === t.id ? styles.on : ''}`}
                        aria-pressed={selected?.id === t.id}
                        onClick={() => choose(t.id)}
                      >
                        <span className={styles.n}>{t.shaiva}</span>
                        <span className={styles.tName}>
                          <b>{t.name}</b>
                          <small>{t.meaning}</small>
                        </span>
                        {t.samkhya && <span className={styles.s}>S{t.samkhya}</span>}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <aside className={styles.detail} id="tattva-detail" aria-live="polite">
            {selected ? (
              <>
                <span className={styles.groupTag}>{groupInfo[selected.group].label}</span>
                <h3>
                  {selected.name} <span className="deva">{selected.sanskrit}</span>
                </h3>
                <p className={styles.gloss}>{selected.meaning}</p>
                <p>{selected.about}</p>
                <dl>
                  <dt>Shaiva count</dt>
                  <dd>{selected.shaiva} of 36</dd>
                  <dt>Samkhya count</dt>
                  <dd>{selected.samkhya ? `${selected.samkhya} of 25` : 'Not counted: above Samkhya’s twenty-five'}</dd>
                  {el && (
                    <>
                      <dt>Goes with</dt>
                      <dd>
                        {el.english} ({el.name}) · {el.quality} · the {el.sense.toLowerCase()} · {el.action}
                      </dd>
                    </>
                  )}
                </dl>
                <p className={styles.groupAbout}>{groupInfo[selected.group].about}</p>
              </>
            ) : (
              <div className={styles.hint}>
                <strong>Choose a tattva</strong> to see what it is, where each school counts it, and, for the senses and elements, what goes with it.
              </div>
            )}
          </aside>
        </div>
        <p className={styles.links}>
          <a href="#/darshanas?d=samkhya">Samkhya’s tree of 25 →</a> · <a href="#/trika">The 36 in Kashmir Shaivism →</a> · <a href="#/siddhanta">The 36 in Shaiva Siddhanta →</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The three gunas</h2>
        <p className={styles.help}>
          Prakriti is woven of three strands (guna means “strand” or “rope”). Everything made of matter, mind included, is some mix of the three. Samkhya likens them to a
          lamp: wick, oil and flame are unlike each other, yet together they give light.
        </p>
        <div className={styles.gunas}>
          {gunas.map((g) => (
            <div key={g.name} className={`${styles.guna} ${styles['guna_' + g.name.toLowerCase()]}`}>
              <b>
                {g.name} <span className="deva">{g.sanskrit}</span>
              </b>
              <span className={styles.gNature}>{g.nature}</span>
              <dl>
                <dt>Colour</dt>
                <dd>{g.colour}</dd>
                <dt>In us</dt>
                <dd>{g.inUs}</dd>
              </dl>
            </div>
          ))}
        </div>
        <p className={styles.help}>
          The Gita (chapters 14, 17 and 18) sorts food, faith, gifts, knowledge and even happiness by the three gunas. Liberation, for Samkhya and the Gita alike, lies beyond all
          three.
        </p>
      </section>

      <section className={styles.section}>
        <h2>The five elements and what goes with them</h2>
        <p className={styles.help}>
          Each element is born of its subtle element and adds one new quality to those before it, so earth carries all five. Many texts go on to pair each with a sense, an
          organ of action, a chakra of the subtle body and a dosha of Ayurveda, and South India has a great Shiva temple for each.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Element</th>
                <th scope="col">Its quality</th>
                <th scope="col">Qualities it carries</th>
                <th scope="col">Sense</th>
                <th scope="col">Action</th>
                <th scope="col">Chakra</th>
                <th scope="col">Dosha</th>
                <th scope="col">Temple</th>
              </tr>
            </thead>
            <tbody>
              {fiveElements.map((e) => (
                <tr key={e.name}>
                  <th scope="row">
                    {e.english} <span className="deva">{e.sanskrit}</span>
                  </th>
                  <td>{e.quality}</td>
                  <td>
                    <span className={styles.dots} aria-label={`${e.carries} of 5`}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <i key={i} className={i < e.carries ? styles.dotOn : undefined} />
                      ))}
                    </span>
                  </td>
                  <td>{e.sense}</td>
                  <td>{e.action}</td>
                  <td>{e.chakra}</td>
                  <td>{e.dosha}</td>
                  <td>
                    <a href={e.temple.to}>{e.temple.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Out and back</h2>
        <div className={styles.flows}>
          <div className={styles.flow}>
            <h3>Emanation (srishti)</h3>
            <p className={styles.help}>The Taittiriya’s order: each element arises from the one before, the subtle giving rise to the gross.</p>
            <ol>
              {fiveElements.map((e) => (
                <li key={e.name}>{e.english}</li>
              ))}
            </ol>
          </div>
          <div className={`${styles.flow} ${styles.back}`}>
            <h3>Dissolution (laya)</h3>
            <p className={styles.help}>
              At the great dissolution the Puranas run the same chain backwards, each element absorbed into the one before it. Tantric worship rehearses this within the body
              (bhuta-shuddhi), before rebuilding it as divine.
            </p>
            <ol>
              {[...fiveElements].reverse().map((e) => (
                <li key={e.name}>{e.english}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Sources items={tattvaSources} />
    </>
  );
}
