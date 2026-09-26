import type { CSSProperties } from 'react';
import { mathas } from '../data/darshanas';
import {
  bodyVerse,
  canon,
  dharmashastras,
  gitaChapters,
  gitaSpeakers,
  layers,
  upanishadNote,
  upanishads,
  upavedas,
  vedaSources,
  vedangas,
  vedas,
} from '../data/vedas';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { Chip, PageHeader, PersonLink, Sources } from '../components/ui';
import styles from './Vedas.module.css';
import { onTabListKeyDown } from '../lib/a11y';

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

const Who = ({ id, name }: { id?: string; name: string }) => (id ? <PersonLink id={id} /> : <span>{name}</span>);

/** Vyasa dividing the one Veda among his disciples (Vishnu Purana 3.4). */
function Division() {
  const kids = [
    ...vedas.map((v) => ({ who: v.receivedBy, id: v.receivedById, what: v.name })),
    { who: 'Romaharshana', id: 'suta', what: 'Itihasa & Purana' },
  ];
  return (
    <figure className={styles.division}>
      <div className={styles.divRoot}>
        <span className={styles.oneVeda}>The one Veda</span>
        <span className={styles.divArrow}>↓</span>
        <span className={styles.vyasa}>
          <PersonLink id="vyasa" /> divides it, in the Dvapara age
        </span>
      </div>
      <ol className={styles.divKids}>
        {kids.map((k) => (
          <li key={k.what}>
            <b>{k.what}</b>
            <span>
              to <Who id={k.id} name={k.who} />
            </span>
          </li>
        ))}
      </ol>
      <figcaption>
        Vishnu Purana 3.4. Hence his name Veda-Vyasa, “arranger of the Veda”. <a href="#/vyasas">The 28 Vyasas →</a>
      </figcaption>
    </figure>
  );
}

/** A human figure with the six Vedangas marked on it. */
function VedaBody() {
  const dot = (n: number, x: number, y: number) => (
    <g key={n}>
      <circle cx={x} cy={y} r="8" className={styles.bodyDot} />
      <text x={x} y={y + 4} textAnchor="middle" className={styles.bodyNum}>
        {n}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 160 250" className={styles.body} role="img" aria-label="The Veda as a body: the six Vedangas as its limbs">
      <g className={styles.bodyLine}>
        <circle cx="80" cy="42" r="32" />
        <path d="M80 74 V156 M80 92 L34 132 M80 92 L126 132 M80 156 L50 234 M80 156 L110 234" />
      </g>
      {dot(1, 92, 44)}
      {dot(2, 34, 132)}
      {dot(3, 80, 62)}
      {dot(4, 48, 42)}
      {dot(5, 50, 234)}
      {dot(6, 68, 28)}
    </svg>
  );
}

export default function Vedas({ route }: { route: Route }) {
  const vId = vedas.some((v) => v.id === route.query.get('v')) ? route.query.get('v')! : 'rig';
  const veda = vedas.find((v) => v.id === vId)!;
  const maxVerses = Math.max(...gitaChapters.map((c) => c.verses));
  const total = gitaSpeakers.reduce((s, x) => s + x.verses, 0);
  // Map the six numbered dots on the body figure to the Vedanga cards.
  const bodyOrder = ['shiksha', 'kalpa', 'vyakarana', 'nirukta', 'chandas', 'jyotisha'];

  return (
    <>
      <PageHeader
        eyebrow="Shruti, smriti and the limbs of the Veda"
        title="Vedas & Shastras"
        sub="The four Vedas and their layers, the principal Upanishads and who teaches whom, the six limbs of the Veda, the law books, and the Bhagavad Gita chapter by chapter."
      />

      <nav className={styles.toc} aria-label="On this page">
        {[
          ['canon', 'The canon'],
          ['vedas', 'Four Vedas'],
          ['upanishads', 'Upanishads'],
          ['vedangas', 'Vedangas'],
          ['dharmashastra', 'Dharmashastras'],
          ['gita', 'Bhagavad Gita'],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ——— Canon ——— */}
      <section className={styles.section} id="canon">
        <h2>The canon: what was heard, what is remembered</h2>
        <p className={styles.help}>Hindu scripture has tiers of authority. The Veda is the root, and everything else claims to explain or apply it.</p>
        <div className={styles.canon}>
          {canon.map((c, i) => (
            <div key={c.tier} className={`${styles.tier} ${styles['tier' + i]}`}>
              <div className={styles.tierHead}>
                <h3>
                  {c.tier} <span className="deva">{c.sanskrit}</span>
                </h3>
                <p>{c.meaning}</p>
              </div>
              <ul>
                {c.items.map((x) => (
                  <li key={x.name}>{x.to ? <a href={x.to}>{x.name}</a> : x.name}</li>
                ))}
              </ul>
              <small>{c.authority}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Vedas ——— */}
      <section className={styles.section} id="vedas">
        <h2>The four Vedas</h2>
        <Division />

        <h3 className={styles.sub}>Every Veda has four layers</h3>
        <div className={styles.layers}>
          {layers.map((l, i) => (
            <div key={l.name} className={`${styles.layer} ${l.kanda === 'jnana' ? styles.jnana : ''}`} style={{ '--i': i } as CSSProperties}>
              <b>
                {l.name} <span className="deva">{l.sanskrit}</span>
              </b>
              <span>{l.what}</span>
              <small>{l.ashrama}</small>
            </div>
          ))}
        </div>
        <p className={styles.kandas}>
          <span className={styles.kKarma}>Karma-kanda: the part on action, studied by Purva Mimamsa</span>
          <span className={styles.kJnana}>Jnana-kanda: the part on knowledge, studied by Vedanta</span>
        </p>

        <div className={styles.tabs} role="tablist" onKeyDown={onTabListKeyDown}>
          {vedas.map((v) => (
            <button key={v.id} role="tab" aria-selected={vId === v.id} className={vId === v.id ? styles.tabOn : undefined} onClick={() => navigate(`/vedas?v=${v.id}`)}>
              {v.name}
              <span className="deva">{v.sanskrit}</span>
            </button>
          ))}
        </div>

        <article className={styles.veda}>
          <h3>
            {veda.name} <span className="deva">{veda.sanskrit}</span>
          </h3>
          <p className={styles.meaning}>{veda.meaning}</p>
          <p className={styles.brief}>{veda.what}</p>

          <blockquote className={styles.verse}>
            <p className="deva">{veda.firstVerse.deva}</p>
            <p className={styles.iast}>{veda.firstVerse.iast}</p>
            <p className={styles.vMeaning}>
              “{veda.firstVerse.meaning}” <cite>— {veda.firstVerse.ref}, the opening verse</cite>
            </p>
          </blockquote>

          <dl className={styles.grid}>
            {(
              [
                ['Size', veda.size],
                ['Structure', veda.structure],
                ['Priest in the rite', veda.priest],
                ['Received from Vyasa by', veda.receivedBy],
                ['Surviving shakhas (recensions)', veda.shakhas],
                ['Brahmanas', veda.brahmanas],
                ['Aranyakas', veda.aranyakas],
                ['Upanishads', veda.upanishads],
                ['Upaveda', veda.upaveda],
              ] as [string, string][]
            ).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.mv}>
            <span>Great saying (mahavakya)</span>
            <b className="deva">{veda.mahavakya.deva}</b>
            <i>{veda.mahavakya.iast}</i>
            <small>
              “{veda.mahavakya.meaning}” — {veda.mahavakya.source}
            </small>
          </div>
          <p>{veda.note}</p>
          <SourceLine items={veda.sources} />
        </article>

        <h3 className={styles.sub}>The four great sayings (mahavakyas)</h3>
        <p className={styles.help}>One from each Veda, each the charge of one of Shankara’s four mathas.</p>
        <div className={styles.mahavakyas}>
          {vedas.map((v) => {
            const m = mathas.find((x) => x.mahavakya === v.mahavakya.iast);
            return (
              <div key={v.id} className={styles.mvCard}>
                <b className="deva">{v.mahavakya.deva}</b>
                <i>{v.mahavakya.iast}</i>
                <span>“{v.mahavakya.meaning}”</span>
                <small>
                  {v.mahavakya.source} · {v.name}
                  {m && (
                    <>
                      {' '}
                      · <a href="#/darshanas?t=smarta">{m.name}</a>
                    </>
                  )}
                </small>
              </div>
            );
          })}
        </div>
      </section>

      {/* ——— Upanishads ——— */}
      <section className={styles.section} id="upanishads">
        <h2>The principal Upanishads: who teaches whom</h2>
        <p className={styles.help}>{upanishadNote}</p>
        <div className={styles.upas}>
          {upanishads.map((u) => (
            <article key={u.id} className={styles.upa}>
              <header>
                <h3>
                  {u.name} <span className="deva">{u.sanskrit}</span>
                </h3>
                <Chip tone="gold">{u.veda}</Chip>
              </header>
              <p className={styles.size}>{u.size}</p>
              <div className={styles.dialogue}>
                <span className={styles.teacher}>
                  <small>teaches</small>
                  <Who id={u.teacherId} name={u.teacher} />
                </span>
                <span className={styles.dArrow}>→</span>
                <span className={styles.student}>
                  <small>listens</small>
                  <Who id={u.studentId} name={u.student} />
                </span>
              </div>
              <p className={styles.setting}>{u.setting}</p>
              <p>{u.teaching}</p>
              <blockquote className={styles.famous}>
                <i>{u.famous.iast}</i>
                <span>
                  “{u.famous.meaning}” <cite>{u.famous.ref}</cite>
                </span>
              </blockquote>
              <SourceLine items={u.sources} />
            </article>
          ))}
        </div>
      </section>

      {/* ——— Vedangas ——— */}
      <section className={styles.section} id="vedangas">
        <h2>The six Vedangas: limbs of the Veda</h2>
        <p className={styles.help}>
          To recite, understand and use the Veda correctly, six sciences grew around it. Tradition pictures the Veda as a body with these as its limbs.
        </p>
        <div className={styles.bodyWrap}>
          <div className={styles.bodyFig}>
            <VedaBody />
            <blockquote className={styles.bodyVerse}>
              <p className="deva">{bodyVerse.deva}</p>
              <p className={styles.iast}>{bodyVerse.iast}</p>
              <p className={styles.vMeaning}>
                “{bodyVerse.meaning}” <cite>— {bodyVerse.ref}</cite>
              </p>
            </blockquote>
          </div>
          <ol className={styles.angas}>
            {bodyOrder.map((id, i) => {
              const a = vedangas.find((x) => x.id === id)!;
              return (
                <li key={a.id}>
                  <span className={styles.angaNum}>{i + 1}</span>
                  <div>
                    <b>
                      {a.name} <span className="deva">{a.sanskrit}</span> <small>· the {a.part.toLowerCase()}</small>
                    </b>
                    <p>{a.what}</p>
                    <small>{a.texts}</small>
                    {a.link && (
                      <a href={a.link} className={styles.angaLink}>
                        Explore {a.name} on this site →
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <h3 className={styles.sub}>The four Upavedas</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Upaveda</th>
                <th scope="col">Linked Veda</th>
                <th scope="col">Subject</th>
                <th scope="col">Key texts</th>
              </tr>
            </thead>
            <tbody>
              {upavedas.map((u) => (
                <tr key={u.name}>
                  <th scope="row">
                    {u.name} <span className="deva">{u.sanskrit}</span>
                  </th>
                  <td>{u.veda}</td>
                  <td>{u.what}</td>
                  <td>{u.texts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SourceLine items={[src.vedangaIntro, src.vedangaStudy, src.conceptSixVedangas]} />
      </section>

      {/* ——— Dharmashastras ——— */}
      <section className={styles.section} id="dharmashastra">
        <h2>The Dharmashastras: books of law and conduct</h2>
        <p className={styles.help}>
          Smriti texts on how to live: duties of each stage of life, rites, kingship, law and penance. They grew from the Kalpa limb of the Veda. See also{' '}
          <a href="#/dharma">the stages of life and the sixteen samskaras</a>.
        </p>
        <div className={styles.shastras}>
          {dharmashastras.map((d) => (
            <article key={d.name} className={styles.shastra}>
              <h3>
                {d.name} <span className="deva">{d.sanskrit}</span>
              </h3>
              <small className={styles.when}>{d.when}</small>
              <p className={styles.size}>{d.size}</p>
              <p>{d.about}</p>
              <p className={styles.comm}>
                <b>Commentaries: </b>
                {d.commentaries}
              </p>
              <SourceLine items={d.sources} />
            </article>
          ))}
        </div>
      </section>

      {/* ——— Gita ——— */}
      <section className={styles.section} id="gita">
        <h2>The Bhagavad Gita, chapter by chapter</h2>
        <p className={styles.help}>
          700 verses in Bhishma Parva of the <a href="#/scriptures/mahabharata">Mahabharata</a> (chapters 25–42). Sanjaya tells the blind king Dhritarashtra what Krishna says
          to Arjuna on the field of Kurukshetra. A common reading sees three groups of six: action (1–6), devotion (7–12) and knowledge (13–18).
        </p>

        <div className={styles.speakers} aria-label="Who speaks the 700 verses">
          {gitaSpeakers.map((s) => (
            <span key={s.who} className={styles['sp_' + s.id]} style={{ flexGrow: s.verses }} title={`${s.who}: ${s.verses} verses`}>
              {s.verses >= 40 && (
                <>
                  <b>{s.who}</b> {s.verses}
                </>
              )}
            </span>
          ))}
        </div>
        <p className={styles.spLegend}>
          {gitaSpeakers.map((s) => (
            <span key={s.who}>
              <i className={styles['sp_' + s.id]} /> <PersonLink id={s.id} /> {s.verses}
            </span>
          ))}
          <span>= {total} verses (traditional count)</span>
        </p>

        <ol className={styles.chapters}>
          {gitaChapters.map((c) => (
            <li key={c.n} className={styles['hex' + Math.ceil(c.n / 6)]}>
              <span className={styles.chNum}>{c.n}</span>
              <div className={styles.chBody}>
                <b>
                  {c.name} <span className="deva">{c.sanskrit}</span>
                </b>
                <span className={styles.bar}>
                  <i style={{ width: `${(c.verses / maxVerses) * 100}%` }} />
                  <small>{c.verses} verses</small>
                </span>
                <p>{c.theme}</p>
                <blockquote>
                  <i>{c.key.iast}</i> — “{c.key.meaning}” <cite>{c.key.ref}</cite>
                </blockquote>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.spLegend}>
          <span>
            <i className={styles.k1} /> 1–6 · Karma
          </span>
          <span>
            <i className={styles.k2} /> 7–12 · Bhakti
          </span>
          <span>
            <i className={styles.k3} /> 13–18 · Jnana
          </span>
        </p>
        <SourceLine items={[src.gitaVaishnava, src.gitaTelang, src.gitaMbh, src.ramanujaGita]} />
      </section>

      <Sources items={vedaSources} />
    </>
  );
}
