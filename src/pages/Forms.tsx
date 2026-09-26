import type { CSSProperties } from 'react';
import { art, consecration, descents, fiveModes, formSources, iconography, spectrum, terms, whyVerses, type Artwork } from '../data/forms';
import { PageHeader, Sources } from '../components/ui';
import styles from './Forms.module.css';

function Art({ a, big = false }: { a: Artwork; big?: boolean }) {
  return (
    <figure className={`${styles.art} ${big ? styles.big : ''}`}>
      <a href={a.url} target="_blank" rel="noreferrer" className={styles.frame} title={`${a.title} — view at ${a.museum}`}>
        <img src={a.img} alt={a.title} loading="lazy" decoding="async" />
      </a>
      <figcaption>
        <b>{a.title}</b>
        <span>
          {a.date} · {a.place}
        </span>
        <small>
          {a.medium} ·{' '}
          <a href={a.url} target="_blank" rel="noreferrer">
            {a.museum}, public domain ↗
          </a>
        </small>
      </figcaption>
    </figure>
  );
}

/** Drawn stand-ins for the forms that have no picture: the formless, and sound and diagram. */
function Drawn({ id }: { id: string }) {
  if (id === 'formless')
    return (
      <div className={styles.drawn} aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs>
            <radialGradient id="void">
              <stop offset="0" stopColor="var(--gold)" stopOpacity="0.35" />
              <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#void)" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="var(--gold)" strokeDasharray="2 6" opacity="0.6" />
        </svg>
        <span>neti neti — “not this, not this”</span>
      </div>
    );
  if (id === 'sound')
    return (
      <div className={styles.drawnPair} aria-hidden="true">
        <div className={styles.drawn}>
          <svg viewBox="0 0 200 200">
            <text x="100" y="140" textAnchor="middle" className={styles.om}>
              ॐ
            </text>
          </svg>
          <span>Om, the root sound</span>
        </div>
        <div className={styles.drawn}>
          <svg viewBox="-100 -100 200 200">
            <rect x="-92" y="-92" width="184" height="184" fill="none" stroke="var(--gold)" strokeWidth="2" />
            <circle r="80" fill="none" stroke="var(--gold)" opacity="0.7" />
            <circle r="70" fill="none" stroke="var(--gold)" opacity="0.5" />
            <g fill="none" stroke="var(--accent)" strokeWidth="1.6">
              <path d="M0 -62 L54 31 L-54 31 Z" />
              <path d="M0 62 L54 -31 L-54 -31 Z" />
              <path d="M0 -42 L36 21 L-36 21 Z" />
              <path d="M0 42 L36 -21 L-36 -21 Z" />
            </g>
            <circle r="4" fill="var(--accent)" />
          </svg>
          <span>A yantra (schematic)</span>
        </div>
      </div>
    );
  return null;
}

export default function Forms() {
  return (
    <>
      <PageHeader
        eyebrow="Murti, avatara, archa"
        title="How the Divine Appears"
        sub="One reality, many forms: formless Brahman, a stone or a sound, a river, an animal, a lion-man, a human child, a four-armed god, the whole cosmos. Here is the range of forms, with sculptures and paintings from museum collections, and how tradition explains each."
      />

      {/* ——— Why ——— */}
      <section className={styles.section}>
        <h2>Why so many forms?</h2>
        <div className={styles.verses}>
          {whyVerses.map((v) => (
            <blockquote key={v.ref} className={styles.verse}>
              <p className="deva">{v.deva}</p>
              <p className={styles.iast}>{v.iast}</p>
              <p className={styles.meaning}>“{v.meaning}”</p>
              <cite>{v.src ? <a href={v.src.url} target="_blank" rel="noreferrer">{v.ref} ↗</a> : v.ref}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ——— Spectrum ——— */}
      <section className={styles.section}>
        <h2>From formless to cosmic: the range of forms</h2>
        <p className={styles.help}>Tap a step to jump to it. The same deity may appear at several steps: Shiva as the formless, as the linga, as Nataraja and as Ardhanarishvara.</p>
        <ol className={styles.spectrum}>
          {spectrum.map((s, i) => (
            <li key={s.id} style={{ '--i': i } as CSSProperties}>
              <a
                href={`#f-${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`f-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className={styles.stepNo}>{i + 1}</span>
                <b>{s.name}</b>
                <small>{s.label}</small>
              </a>
            </li>
          ))}
        </ol>

        <div className={styles.terms}>
          <h3>The words for it</h3>
          <dl>
            {terms.map((t) => (
              <div key={t.term}>
                <dt>
                  {t.term} {t.from && <small>{t.from}</small>}
                </dt>
                <dd>
                  {t.meaning}. <span>e.g. {t.examples}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {spectrum.map((s, i) => (
          <article key={s.id} id={`f-${s.id}`} className={styles.form}>
            <header>
              <span className={styles.formNo}>{i + 1}</span>
              <div>
                <h3>
                  {s.name} <span className="deva">{s.sanskrit}</span>
                </h3>
                <span className={styles.label}>{s.label}</span>
              </div>
            </header>
            <p>{s.about}</p>
            <ul className={styles.examples}>
              {s.examples.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            {s.art.length > 0 ? (
              <div className={styles.gallery}>
                {s.art.map((a) => (
                  <Art key={a.url} a={a} />
                ))}
              </div>
            ) : (
              <Drawn id={s.id} />
            )}
            {s.link && (
              <a href={s.link.to} className={styles.more}>
                {s.link.label} →
              </a>
            )}
          </article>
        ))}
      </section>

      {/* ——— Dashavatara ——— */}
      <section className={styles.section}>
        <h2>The ten avatars in one picture</h2>
        <p className={styles.help}>
          A Kalighat woodcut of the Dashavatara. Across the rows the forms move from fish and tortoise, through boar and lion-man, to the dwarf and the human heroes, and
          end with Kalki on horseback. The ninth panel shows Jagannatha with Balabhadra and Subhadra, who in eastern India often takes the Buddha’s place. Some modern readers see an evolutionary order here; the Puranas themselves do not
          present it that way.
        </p>
        <Art a={art.dashavatara} big />
      </section>

      {/* ——— Five modes ——— */}
      <section className={styles.section}>
        <h2>Five ways God is present: the Pancharatra view</h2>
        <p className={styles.help}>
          The Pancharatra Agamas, followed by the Sri Vaishnavas, say Vishnu is present in five modes, from the most distant to the most near. A traditional analogy (Pillai
          Lokacharya) compares them to water.
        </p>
        <ol className={styles.modes}>
          {fiveModes.map((m, i) => (
            <li key={m.name} style={{ '--i': i } as CSSProperties}>
              <div className={styles.modeHead}>
                <b>
                  {m.name} <span className="deva">{m.sanskrit}</span>
                </b>
                <span className={styles.reach}>{['farthest', 'far', 'once, in time', 'within', 'nearest'][i]}</span>
              </div>
              <p>{m.what}</p>
              <p className={styles.water}>
                <span>Like water:</span> {m.water}
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.help}>
          The last, the archa, is the most generous: God agrees to live in a form of stone or metal, to be bathed, dressed and fed, so that everyone can reach him.
        </p>
      </section>

      {/* ——— Descents ——— */}
      <section className={styles.section}>
        <h2>How fully does God descend?</h2>
        <div className={styles.descents}>
          {descents.map((d) => (
            <div key={d.name}>
              <b>
                {d.name} <span className="deva">{d.sanskrit}</span>
              </b>
              <p>{d.meaning}</p>
              <small>{d.example}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Consecration ——— */}
      <section className={styles.section}>
        <h2>From stone to living presence</h2>
        <p className={styles.help}>
          A carved image is not yet a deity. The Agamas lay down the rite that brings the god into it (Agni Purana 66 gives one). Some images are held to be svayambhu,
          self-manifested, found rather than made: many lingas, the shaligrama, and hills like Arunachala.
        </p>
        <ol className={styles.steps}>
          {consecration.map((c, i) => (
            <li key={c.step}>
              <span className={styles.stepNo}>{i + 1}</span>
              <b>{c.step}</b>
              <p>{c.what}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Iconography ——— */}
      <section className={styles.section}>
        <h2>Reading an image</h2>
        <p className={styles.help}>Every detail of a murti means something. Look for these in the pictures above.</p>
        <div className={styles.icons}>
          {iconography.map((x) => (
            <div key={x.name}>
              <b>{x.name}</b>
              <p>{x.what}</p>
            </div>
          ))}
        </div>
      </section>

      <p className={styles.credit}>
        Images: open-access (CC0, public domain) works from <a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access">The Metropolitan Museum of Art</a>{' '}
        and the <a href="https://www.clevelandart.org/open-access">Cleveland Museum of Art</a>, loaded from the museums’ own servers. Click any image for its full record.
      </p>
      <Sources items={formSources} />
    </>
  );
}
