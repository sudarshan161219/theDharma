import { useState } from 'react';
import { darshanaById } from '../data/acharyas';
import {
  causation,
  darshanaSources,
  darshanById,
  darshans,
  mathas,
  nastikas,
  pairs,
  pramanaMatrix,
  pramanas,
  samkhyaTree,
  syllogism,
  traditions,
  vedantaSpectrum,
  type Darshan,
  type PramanaId,
  type Sampradaya,
  type Tradition,
} from '../data/darshanas';
import { navigate, type Route } from '../lib/router';
import { Chip, Facts, PageHeader, PersonLink, Sources } from '../components/ui';
import styles from './Darshanas.module.css';
import { onTabListKeyDown } from '../lib/a11y';

/** Keep both selections (school and tradition) in the URL, so every view can be linked. */
function go(d: string, t: string, anchor?: string) {
  navigate(`/darshanas?d=${d}&t=${t}`);
  if (anchor) setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
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

/* ——————————————————————— Visuals for each school ——————————————————————— */

function Syllogism() {
  return (
    <figure className={styles.visual}>
      <figcaption>The five-membered argument (Nyaya Sutra 1.1.32)</figcaption>
      <ol className={styles.syllogism}>
        {syllogism.map((s, i) => (
          <li key={s.name}>
            <span className={styles.stepNo}>{i + 1}</span>
            <span>
              <b>{s.name}</b> <span className="deva">{s.sanskrit}</span>
              <small>{s.role}</small>
            </span>
            <q>{s.example}</q>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Atoms() {
  return (
    <figure className={styles.visual}>
      <figcaption>How Vaisheshika builds a world from atoms</figcaption>
      <div className={styles.atoms}>
        <div>
          <span className={styles.atomRow}>
            <i className={styles.atom} />
          </span>
          <b>Paramanu</b>
          <small>Atom: eternal, partless, invisible</small>
        </div>
        <span className={styles.arrow}>→</span>
        <div>
          <span className={styles.atomRow}>
            <i className={styles.atom} />
            <i className={styles.atom} />
          </span>
          <b>Dvyanuka</b>
          <small>Dyad: two atoms</small>
        </div>
        <span className={styles.arrow}>→</span>
        <div>
          <span className={styles.atomRow}>
            {[0, 1, 2].map((k) => (
              <span key={k} className={styles.dyad}>
                <i className={styles.atom} />
                <i className={styles.atom} />
              </span>
            ))}
          </span>
          <b>Tryanuka</b>
          <small>Triad: three dyads, the smallest visible speck, a mote in a sunbeam</small>
        </div>
      </div>
    </figure>
  );
}

function SamkhyaTree() {
  const t = samkhyaTree;
  return (
    <figure className={styles.visual}>
      <figcaption>How prakriti unfolds into the 25 tattvas</figcaption>
      <div className={styles.tree}>
        <div className={styles.treeTop}>
          <span className={`${styles.node} ${styles.nodePurusha}`}>
            {t.purusha}
            <small>consciousness · witness</small>
          </span>
          <span className={styles.near}>presence disturbs the balance ⇢</span>
          <span className={`${styles.node} ${styles.nodePrakriti}`}>
            {t.prakriti}
            <small>sattva · rajas · tamas</small>
          </span>
        </div>
        <span className={styles.down}>↓</span>
        <span className={styles.node}>{t.mahat}</span>
        <span className={styles.down}>↓</span>
        <span className={styles.node}>{t.ahamkara}</span>
        <div className={styles.branches}>
          <div className={styles.branch}>
            <span className={styles.down}>↙</span>
            <b>{t.sattvic.label}</b>
            <div className={styles.leafs}>
              {t.sattvic.items.map((x, i) => (
                <span key={x} className={i === 0 ? styles.leafMind : i < 6 ? styles.leafSense : styles.leafAction}>
                  {x}
                </span>
              ))}
            </div>
            <small className={styles.leafKey}>
              <i className={styles.leafMind} /> mind <i className={styles.leafSense} /> 5 senses <i className={styles.leafAction} /> 5 organs of action
            </small>
          </div>
          <div className={styles.branch}>
            <span className={styles.down}>↘</span>
            <b>{t.tamasic.label}</b>
            <div className={styles.pairsList}>
              {t.tamasic.pairs.map(([subtle, gross]) => (
                <span key={subtle}>
                  <em>{subtle}</em> → <strong>{gross}</strong>
                </span>
              ))}
            </div>
            <small className={styles.leafKey}>5 subtle elements (tanmatras) → 5 gross elements</small>
          </div>
        </div>
        <p className={styles.count}>1 + 1 + 1 + 1 + 11 + 5 + 5 = 25</p>
      </div>
    </figure>
  );
}

function Ladder({ items }: { items: string[] }) {
  return (
    <figure className={styles.visual}>
      <figcaption>The eight limbs, from outer discipline to inner absorption</figcaption>
      <ol className={styles.ladder}>
        {items.map((x, i) => {
          const [name, rest] = x.split(' — ');
          return (
            <li key={name} style={{ marginLeft: `${i * 3}%` }} className={i >= 5 ? styles.inner : i === 4 ? styles.bridge : undefined}>
              <span className={styles.stepNo}>{i + 1}</span>
              <b>{name}</b>
              <small>{rest}</small>
            </li>
          );
        })}
      </ol>
      <p className={styles.legendLine}>
        <span className={styles.keyOuter} /> Bahiranga, the outer limbs <span className={styles.keyInner} /> Antaranga, the inner limbs: together, samyama
      </p>
    </figure>
  );
}

function MimamsaRite() {
  const steps = [
    { b: 'Vidhi', s: 'The Veda commands: “One who desires heaven should sacrifice”' },
    { b: 'Karma', s: 'The rite is performed exactly' },
    { b: 'Apurva', s: 'An unseen potency is born and waits' },
    { b: 'Phala', s: 'At the right time, the fruit arrives' },
  ];
  return (
    <figure className={styles.visual}>
      <figcaption>How a rite bears fruit later: apurva</figcaption>
      <div className={styles.chain}>
        {steps.map((x, i) => (
          <span key={x.b} className={styles.chainItem}>
            {i > 0 && <span className={styles.arrow}>→</span>}
            <span className={`${styles.node} ${x.b === 'Apurva' ? styles.nodePrakriti : ''}`}>
              {x.b}
              <small>{x.s}</small>
            </span>
          </span>
        ))}
      </div>
    </figure>
  );
}

/** Vedanta schools placed between identity (left) and difference (right). */
function Spectrum() {
  return (
    <figure className={styles.visual}>
      <figcaption>Soul and Brahman: one, or two?</figcaption>
      <div className={styles.spectrum}>
        <div className={styles.bar} />
        <span className={styles.endL}>Identity</span>
        <span className={styles.endR}>Difference</span>
        {vedantaSpectrum.map((v, i) => {
          const d = darshanaById.get(v.id)!;
          return (
            <a
              key={v.id}
              href={`#/acharyas?d=${v.id}`}
              className={`${styles.pin} ${i % 2 ? styles.pinDown : ''}`}
              style={{ left: `${v.pos}%` }}
              title={d.inBrief}
            >
              <i />
              <span>{d.name.replace(/ \(.*\)/, '')}</span>
            </a>
          );
        })}
      </div>
      <ul className={styles.spectrumList}>
        {vedantaSpectrum.map((v) => {
          const d = darshanaById.get(v.id)!;
          return (
            <li key={v.id}>
              <a href={`#/acharyas?d=${v.id}`}>{d.name}</a>: {d.jivaBrahman}
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

function VisualFor({ d }: { d: Darshan }) {
  switch (d.id) {
    case 'nyaya':
      return <Syllogism />;
    case 'vaisheshika':
      return <Atoms />;
    case 'samkhya':
      return <SamkhyaTree />;
    case 'yoga':
      return <Ladder items={d.categories.items} />;
    case 'mimamsa':
      return <MimamsaRite />;
    case 'vedanta':
      return <Spectrum />;
    default:
      return null;
  }
}

/* ——————————————————————— The detail panel ——————————————————————— */

function DarshanDetail({ d }: { d: Darshan }) {
  return (
    <article className={styles.detail} aria-live="polite">
      <header className={styles.detailHead}>
        <h3>
          {d.name} <span className="deva">{d.sanskrit}</span>
        </h3>
        <p className={styles.meaning}>{d.meaning}</p>
        <div className={styles.chips}>
          <Chip tone="accent">{d.focus}</Chip>
          <Chip tone="gold">{d.rootText}</Chip>
        </div>
      </header>

      <p className={styles.brief}>{d.inBrief}</p>

      <dl className={styles.keyFacts}>
        <div>
          <dt>Founder</dt>
          <dd>{d.founderId ? <><PersonLink id={d.founderId} /> · {d.founder}</> : d.founder}</dd>
        </div>
        <div>
          <dt>Root text</dt>
          <dd>{d.rootText}</dd>
        </div>
        <div>
          <dt>Size</dt>
          <dd>{d.textSize}</dd>
        </div>
      </dl>

      {d.opening && (
        <blockquote className={styles.opening}>
          <p className="deva">{d.opening.sanskrit}</p>
          <p className={styles.iast}>{d.opening.iast}</p>
          <p className={styles.openMeaning}>
            “{d.opening.meaning}” <cite>— {d.opening.ref}</cite>
          </p>
        </blockquote>
      )}

      <p>{d.about}</p>

      <VisualFor d={d} />

      {d.id !== 'yoga' && (
        <div className={styles.cats}>
          <h4>{d.categories.title}</h4>
          <ol>
            {d.categories.items.map((x) => {
              const [name, rest] = x.split(' — ');
              return (
                <li key={x}>
                  <b>{name}</b>
                  {rest && <span>{rest}</span>}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className={styles.questions}>
        {[
          ['Ishvara', d.ishvara],
          ['What binds us', d.bondage],
          ['Liberation', d.liberation],
          ['Cause and effect', d.causation],
        ].map(([q, a]) => (
          <div key={q} className={styles.question}>
            <span>{q}</span>
            <p>{a}</p>
          </div>
        ))}
      </div>

      <h4 className={styles.h4}>Great commentators</h4>
      <Facts items={d.commentators} />
      <SourceLine items={d.sources} />
    </article>
  );
}

/* ——————————————————————— Sampradayas ——————————————————————— */

function Mark({ kind }: { kind: Tradition['mark'] }) {
  const ash = 'var(--text)';
  const red = '#d9412b';
  return (
    <svg viewBox="0 0 80 56" className={styles.mark} aria-hidden="true">
      <rect x="1" y="1" width="78" height="54" rx="14" fill="var(--surface-2)" stroke="var(--line)" />
      {kind === 'urdhva' && (
        <>
          <path d="M28 10 V36 Q28 46 40 46 Q52 46 52 36 V10" fill="none" stroke={ash} strokeWidth="5" strokeLinecap="round" />
          <line x1="40" y1="14" x2="40" y2="38" stroke={red} strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {(kind === 'tripundra' || kind === 'smarta') && (
        <>
          {[18, 28, 38].map((y) => (
            <line key={y} x1="14" y1={y} x2="66" y2={y} stroke={ash} strokeWidth="4" strokeLinecap="round" />
          ))}
          <circle cx="40" cy="28" r="4.5" fill={red} />
        </>
      )}
      {kind === 'bindu' && (
        <>
          <line x1="40" y1="12" x2="40" y2="30" stroke={red} strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="38" r="6" fill={red} />
        </>
      )}
      {kind === 'none' && <circle cx="40" cy="28" r="5" fill="none" stroke="var(--muted)" strokeWidth="2" strokeDasharray="3 3" />}
    </svg>
  );
}

function Parampara({ chain }: { chain: string[] }) {
  return (
    <ol className={styles.parampara} aria-label="Guru parampara, oldest first">
      {chain.map((p, i) => (
        <li key={`${p}-${i}`} className={i === chain.length - 1 ? styles.last : p === '…' ? styles.gap : undefined}>
          {p}
        </li>
      ))}
    </ol>
  );
}

function SampradayaCard({ s }: { s: Sampradaya }) {
  const facts = [
    { label: 'Deity', value: s.deity },
    { label: 'Darshana', value: s.darshana },
    { label: 'Period', value: s.period },
    { label: 'Key texts', value: s.texts },
    { label: 'Centres', value: s.centres },
    { label: 'Practice', value: s.practice },
  ];
  return (
    <article className={styles.samp} id={`s-${s.id}`}>
      <h4>
        {s.name} {s.sanskrit && <span className="deva">{s.sanskrit}</span>}
      </h4>
      <p className={styles.founder}>
        {s.acharyaId ? (
          <a href={`#/acharyas?a=${s.acharyaId}`}>{s.founder} →</a>
        ) : (
          s.founder
        )}
      </p>
      <p>{s.about}</p>
      <Facts items={facts} />
      {s.parampara && (
        <>
          <h5 className={styles.h5}>Guru parampara</h5>
          <Parampara chain={s.parampara} />
        </>
      )}
      {s.more && (
        <p className={styles.more}>
          <a href={s.more.to}>{s.more.label} →</a>
        </p>
      )}
      {s.darshanaId && (
        <p className={styles.more}>
          <a href={`#/acharyas?d=${s.darshanaId}`}>Compare {darshanaById.get(s.darshanaId)?.name} with the other schools →</a>
        </p>
      )}
      <SourceLine items={s.sources} />
    </article>
  );
}

/* ——————————————————————— Page ——————————————————————— */

export default function Darshanas({ route }: { route: Route }) {
  const dId = darshanById.has(route.query.get('d') ?? '') ? route.query.get('d')! : 'nyaya';
  const tId = traditions.some((t) => t.id === route.query.get('t')) ? route.query.get('t')! : 'vaishnava';
  const d = darshanById.get(dId)!;
  const tradition = traditions.find((t) => t.id === tId)!;
  const [pramana, setPramana] = useState<PramanaId>('anumana');
  const pr = pramanas.find((p) => p.id === pramana)!;

  return (
    <>
      <PageHeader
        eyebrow="Ways of seeing, lines of teaching"
        title="Darshanas & Sampradayas"
        sub="A darshana is a school of philosophy: a way of seeing reality. A sampradaya is a living lineage that carries a teaching from guru to disciple. Here are the six classical schools, the four that reject the Veda, how they know what they know, and the great traditions and lineages alive today."
      />

      {/* ——— Two words ——— */}
      <section className={styles.section}>
        <div className={styles.twoWords}>
          <div className={styles.word}>
            <span className="deva">दर्शन</span>
            <h2>Darshana</h2>
            <p className={styles.root}>from dṛś, “to see”</p>
            <p>
              A systematic view of reality, the self and liberation, founded on a sutra text and defended by argument. Each asks the same questions: what exists,
              how do we know it, what binds us, and how are we freed?
            </p>
          </div>
          <div className={styles.word}>
            <span className="deva">सम्प्रदाय</span>
            <h2>Sampradaya</h2>
            <p className={styles.root}>from sam-pra-dā, “to hand over completely”</p>
            <p>
              A tradition handed down through an unbroken line of teachers (guru-parampara). Knowledge is valid when received from such a line, with initiation,
              texts and practice.
            </p>
          </div>
        </div>
        <div className={styles.equation} aria-label="A sampradaya is a darshana plus deity, lineage, texts and practice">
          <span className={styles.eqResult}>Sampradaya</span>
          <span className={styles.eqOp}>=</span>
          {['Darshana', 'Ishta-devata', 'Guru-parampara', 'Scripture', 'Practice'].map((x, i) => (
            <span key={x} className={styles.eqPart}>
              {i > 0 && <span className={styles.eqOp}>+</span>}
              <span className={styles.eqTerm}>
                {x}
                <small>{['a way of seeing', 'a chosen deity', 'a line of gurus', 'root texts & commentary', 'initiation, worship, marks'][i]}</small>
              </span>
            </span>
          ))}
        </div>
        <p className={styles.help}>
          Example: the Sri Sampradaya = Vishishtadvaita + Lakshmi-Narayana + the line from Nathamuni to Ramanuja + the Sri Bhashya and Tamil Prabandham + surrender
          (prapatti) and temple worship.
        </p>
      </section>

      {/* ——— Family tree ——— */}
      <section className={styles.section}>
        <h2>The family of Indian philosophies</h2>
        <p className={styles.help}>
          The deciding question is the authority of the Veda. Schools that accept it are <b>astika</b>; those that reject it are <b>nastika</b>. Tap a school to
          open it.
        </p>
        <div className={styles.family}>
          <div className={styles.familyRoot}>Darshanas</div>
          <div className={styles.familyKids}>
            <div className={`${styles.familyBranch} ${styles.astika}`}>
              <h3>
                Astika <span className="deva">आस्तिक</span>
              </h3>
              <small>accept the Veda · the six (ṣaḍ-darśana)</small>
              <div className={styles.pairsGrid}>
                {pairs.map((p) => (
                  <div key={p.id} className={styles.pairBox}>
                    <div className={styles.pairBtns}>
                      {darshans
                        .filter((x) => x.pair === p.id)
                        .map((x) => (
                          <button key={x.id} onClick={() => go(x.id, tId, 'six')} className={dId === x.id ? styles.on : undefined}>
                            {x.name.replace(' (Vedanta)', '')}
                          </button>
                        ))}
                    </div>
                    <p>{p.why}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.familyBranch} ${styles.nastika}`}>
              <h3>
                Nastika <span className="deva">नास्तिक</span>
              </h3>
              <small>reject the Veda’s authority</small>
              <div className={styles.pairBtns}>
                {nastikas.map((n) => (
                  <a key={n.id} href={`#n-${n.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`n-${n.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                    {n.name.replace(/ \(.*\)/, '')}
                  </a>
                ))}
              </div>
              <p>
                The Sarva-darshana-sangraha of Madhava (14th century) surveys sixteen schools, starting from Charvaka and climbing to Advaita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The six at a glance ——— */}
      <section className={styles.section}>
        <h2>The six at a glance</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">School</th>
                <th scope="col">Focus</th>
                <th scope="col">Founder</th>
                <th scope="col">Root text</th>
                <th scope="col">Liberation</th>
              </tr>
            </thead>
            <tbody>
              {darshans.map((x) => (
                <tr key={x.id} className={dId === x.id ? styles.rowOn : undefined}>
                  <th scope="row">
                    <button onClick={() => go(x.id, tId, 'six')}>{x.name}</button>
                    <span className="deva">{x.sanskrit}</span>
                  </th>
                  <td>{x.focus}</td>
                  <td>{x.founder}</td>
                  <td>{x.rootText}</td>
                  <td>{x.liberation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ——— The six in depth ——— */}
      <section className={styles.section} id="six">
        <h2>The six darshanas in depth</h2>
        <div className={styles.tabs} role="tablist" onKeyDown={onTabListKeyDown}>
          {darshans.map((x) => (
            <button key={x.id} role="tab" aria-selected={dId === x.id} className={dId === x.id ? styles.tabOn : undefined} onClick={() => go(x.id, tId)}>
              {x.name.replace(' (Vedanta)', '')}
              <small>{x.focus}</small>
            </button>
          ))}
        </div>
        <DarshanDetail d={d} />
      </section>

      {/* ——— Pramanas ——— */}
      <section className={styles.section}>
        <h2>How do we know? The pramanas</h2>
        <p className={styles.help}>
          A pramana is a valid means of knowledge. Schools differ on how many there are, and that decides what they can prove: if testimony (shabda) is not a
          pramana, the Veda cannot teach anything beyond the senses. Tap a column heading for an example.
        </p>
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.matrix}`}>
            <thead>
              <tr>
                <th scope="col">School</th>
                {pramanas.map((p) => (
                  <th key={p.id} scope="col" className={pramana === p.id ? styles.colOn : undefined}>
                    <button onClick={() => setPramana(p.id)} aria-pressed={pramana === p.id}>
                      {p.name}
                      <small>{p.meaning.split(' (')[0]}</small>
                    </button>
                  </th>
                ))}
                <th scope="col">Count</th>
              </tr>
            </thead>
            <tbody>
              {pramanaMatrix.map((row) => (
                <tr key={row.school}>
                  <th scope="row">
                    {row.school}
                    {!row.astika && <span className={styles.tagN}>nastika</span>}
                    {row.note && <small>{row.note}</small>}
                  </th>
                  {pramanas.map((p) => (
                    <td key={p.id} className={pramana === p.id ? styles.colOn : undefined}>
                      {row.accepts.includes(p.id) ? <span className={styles.dot} aria-label="accepted" /> : <span className={styles.nodot} aria-label="not accepted" />}
                    </td>
                  ))}
                  <td className={styles.num}>{row.accepts.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.pramanaNow}>
          <span className="deva">{pr.sanskrit}</span>
          <div>
            <b>
              {pr.name}: {pr.meaning}
            </b>
            <p>“{pr.example}”</p>
          </div>
        </div>
      </section>

      {/* ——— Causation ——— */}
      <section className={styles.section}>
        <h2>Does the effect exist before its cause?</h2>
        <p className={styles.help}>
          The theory of causation (karya-karana-vada) quietly shapes each school’s view of creation. Is the world new, a real change in Brahman or nature, or only an
          appearance?
        </p>
        <div className={styles.causes}>
          {causation.map((c) => (
            <div key={c.id} className={`${styles.cause} ${styles['c_' + c.id]}`}>
              <CauseIcon id={c.id} />
              <h3>{c.name}</h3>
              <span className="deva">{c.sanskrit}</span>
              <p>{c.claim}</p>
              <p className={styles.image}>{c.image}</p>
              <small>{c.schools}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Nastika ——— */}
      <section className={styles.section}>
        <h2>The nastika schools</h2>
        <p className={styles.help}>
          They reject the Veda’s authority, yet Hindu philosophers debated them constantly, and the astika schools sharpened their ideas against them.
        </p>
        <div className={styles.nastikaGrid}>
          {nastikas.map((n) => (
            <article key={n.id} id={`n-${n.id}`} className={styles.nCard}>
              <h3>
                {n.name} <span className="deva">{n.sanskrit}</span>
              </h3>
              <p className={styles.founder}>{n.founder}</p>
              <p>{n.teaching}</p>
              <ul>
                {n.key.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <p className={styles.texts}>
                <b>Texts: </b>
                {n.texts}
              </p>
              <SourceLine items={n.sources} />
            </article>
          ))}
        </div>
      </section>

      {/* ——— Sampradayas ——— */}
      <section className={styles.section} id="sampradayas">
        <h2>The sampradayas: living traditions</h2>
        <p className={styles.help}>
          Hindu worship gathers around a supreme deity. Shankara is credited with the six-fold worship (shanmata) of Vishnu, Shiva, Devi, Surya, Ganesha and Skanda;
          in practice today the great families are Vaishnava, Shaiva, Shakta and Smarta. Each contains several lineages.
        </p>
        <div className={styles.tradTabs} role="tablist" onKeyDown={onTabListKeyDown}>
          {traditions.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tId === t.id}
              className={`${styles.tradTab} ${styles['tone_' + t.tone]} ${tId === t.id ? styles.tradOn : ''}`}
              onClick={() => go(dId, t.id)}
            >
              <Mark kind={t.mark} />
              <span>
                <b>{t.name}</b>
                <small>{t.sampradayas.length} {t.sampradayas.length === 1 ? 'lineage' : 'lineages'}</small>
              </span>
            </button>
          ))}
        </div>

        <div className={`${styles.tradHead} ${styles['tone_' + tradition.tone]}`}>
          <Mark kind={tradition.mark} />
          <div>
            <h3>
              {tradition.name} <span className="deva">{tradition.sanskrit}</span>
            </h3>
            <p>{tradition.inBrief}</p>
            <dl className={styles.keyFacts}>
              <div>
                <dt>Supreme deity</dt>
                <dd>{tradition.deity}</dd>
              </div>
              <div>
                <dt>Scriptures</dt>
                <dd>{tradition.scriptures}</dd>
              </div>
              <div>
                <dt>Mark</dt>
                <dd>{tradition.markLabel}</dd>
              </div>
            </dl>
          </div>
        </div>

        <nav className={styles.jump} aria-label={`${tradition.name} lineages`}>
          {tradition.sampradayas.map((s) => (
            <a
              key={s.id}
              href={`#s-${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`s-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {s.name.replace(/ \(.*\)/, '')}
            </a>
          ))}
        </nav>

        <div className={styles.sampList}>
          {tradition.sampradayas.map((s) => (
            <SampradayaCard key={s.id} s={s} />
          ))}
        </div>
        <SourceLine items={tradition.sources} />

        {tradition.id === 'smarta' && <Mathas />}
      </section>

      {tradition.id !== 'smarta' && (
        <section className={styles.section}>
          <Mathas />
        </section>
      )}

      <Sources items={darshanaSources} />
    </>
  );
}

function Mathas() {
  const at = (dir: string) => mathas.find((m) => m.dir === dir)!;
  const cell = (dir: string) => {
    const m = at(dir);
    return (
      <div className={`${styles.matha} ${styles['m' + dir]}`}>
        <span className={styles.dir}>{dir}</span>
        <h4>{m.name}</h4>
        <small>{m.place}</small>
        <p className="deva">{m.mahavakyaDeva}</p>
        <p className={styles.iast}>{m.mahavakya}</p>
        <p className={styles.mUp}>{m.upanishad}</p>
        <dl>
          <div>
            <dt>Veda</dt>
            <dd>{m.veda}</dd>
          </div>
          <div>
            <dt>First head</dt>
            <dd>{m.first}</dd>
          </div>
          <div>
            <dt>Monks named</dt>
            <dd>{m.names.join(', ')}</dd>
          </div>
        </dl>
      </div>
    );
  };
  return (
    <div className={styles.mathaWrap}>
      <h3>Shankara’s four mathas and the ten names</h3>
      <p className={styles.help}>
        By tradition, Shankara set a matha at each corner of India, gave each one Veda and one great saying (mahavakya) of the Upanishads, and placed a direct
        disciple at its head. Every Dashanami monk takes one of ten names, and each name belongs to a matha.
      </p>
      <div className={styles.compass}>
        {cell('North')}
        {cell('West')}
        <div className={styles.centre}>
          <b>Adi Shankara</b>
          <small>8th century</small>
          <span>10 names · 4 Vedas · 4 mahavakyas</span>
        </div>
        {cell('East')}
        {cell('South')}
      </div>
    </div>
  );
}

function CauseIcon({ id }: { id: string }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' as const };
  return (
    <svg viewBox="0 0 120 44" className={styles.causeIcon} aria-hidden="true">
      {id === 'asat' && (
        <>
          {[14, 22, 30].map((x) => (
            <line key={x} x1={x} y1="8" x2={x} y2="36" {...s} />
          ))}
          <path d="M44 22 H64 M58 16 L64 22 L58 28" {...s} />
          <rect x="74" y="8" width="34" height="28" rx="3" {...s} />
          <path d="M74 17 H108 M74 27 H108 M85 8 V36 M97 8 V36" {...s} strokeWidth={1.2} />
        </>
      )}
      {id === 'parinama' && (
        <>
          <path d="M8 12 H34 L30 36 H12 Z" {...s} />
          <path d="M12 22 H30" {...s} strokeWidth={1.2} />
          <path d="M44 22 H64 M58 16 L64 22 L58 28" {...s} />
          <path d="M76 18 Q92 8 108 18 L104 36 H80 Z" {...s} />
          <path d="M82 26 Q92 22 102 26" {...s} strokeWidth={1.2} />
        </>
      )}
      {id === 'vivarta' && (
        <>
          <path d="M6 30 C18 10 28 36 40 20 S58 28 60 22" {...s} strokeDasharray="1 5" />
          <path d="M64 22 C74 8 84 36 96 18 S110 22 114 16" {...s} />
          <circle cx="112" cy="15" r="2" fill="currentColor" />
        </>
      )}
      {id === 'kshanika' && (
        <>
          {[16, 46, 76, 106].map((x, i) => (
            <path key={x} d={`M${x} 36 C${x - 8} 26 ${x - 2} 18 ${x} 8 C${x + 2} 18 ${x + 8} 26 ${x} 36 Z`} {...s} opacity={0.4 + i * 0.2} />
          ))}
        </>
      )}
    </svg>
  );
}
