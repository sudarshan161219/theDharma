import { useMemo, useState } from 'react';
import { compareGotras, ganaHead, gotraRules, gotraSources, gotrakarins, gotras, originalFour, type Gana } from '../data/gotra';
import { src } from '../data/sources';
import { PageHeader, PersonLink, Sources } from '../components/ui';
import styles from './Gotra.module.css';

const GANAS: Gana[] = ['Bhrigu', 'Angiras', 'Atri', 'Vishvamitra', 'Kashyapa', 'Vasishtha', 'Agastya'];

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/sh/g, 's').replace(/w/g, 'v');

function Checker() {
  const [a, setA] = useState('kashyapa');
  const [b, setB] = useState('shandilya');
  const ga = gotras.find((g) => g.id === a)!;
  const gb = gotras.find((g) => g.id === b)!;
  const r = compareGotras(ga, gb);
  return (
    <div className={styles.checker}>
      <div className={styles.pick}>
        <label>
          First gotra
          <select value={a} onChange={(e) => setA(e.target.value)}>
            {gotras.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Second gotra
          <select value={b} onChange={(e) => setB(e.target.value)}>
            {gotras.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={`${styles.verdict} ${r.barred ? styles.no : styles.yes}`} role="status">
        <strong>{r.barred ? 'Traditionally treated as one family' : 'Traditionally treated as separate families'}</strong>
        <span>{r.reason}</span>
      </div>
      <p className={styles.fine}>
        A guide to the classical rule, not a ruling. The Bhrigu and Angiras families are barred only when most pravara-rishis coincide; in the other five the whole family
        counts as one. Sutras, regions and communities differ, and maternal-line (sapinda) rules also apply. Ask your family priest.
      </p>
    </div>
  );
}

export default function Gotra() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const t = norm(q.trim());
    if (!t) return gotras;
    return gotras.filter((g) => norm([g.name, ...(g.aka ?? []), g.gana, ...g.pravara].join(' ')).includes(t));
  }, [q]);

  return (
    <>
      <PageHeader
        eyebrow="Gotra & Pravara — lineage from the rishis"
        title="Gotras and their Rishis"
        sub="A gotra is the rishi from whom a family descends in the male line. Its pravara is the short list of that line’s most illustrious sages, recited at every rite. Find your gotra, see its rishis, and learn where the lists come from."
      />

      <section className={styles.section}>
        <h2>Where gotras begin</h2>
        <div className={styles.origin}>
          <div className={styles.four}>
            <h3>The four original gotras</h3>
            <p className={styles.quote}>
              “Originally only four Gotras arose, O monarch, viz., Angiras, Kasyapa, Vasishtha, and Bhrigu. In consequence of acts, many other Gotras came into existence in
              time.”
            </p>
            <a href={src.mbhFourGotras.url} target="_blank" rel="noreferrer" className={styles.cite}>
              Mahabharata, Shanti Parva CCXCVII ↗
            </a>
            <ul className={styles.chips}>
              {originalFour.map((id) => (
                <li key={id}>
                  <PersonLink id={id} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.eight}>
            <h3>The eight gotra-founders (gotrakarin)</h3>
            <p className={styles.help}>The seven sages of our manvantara plus Agastya. Every brahmin gotra traces to one of them.</p>
            <ul className={styles.founders}>
              {gotrakarins.map((g) => (
                <li key={g.id}>
                  <PersonLink id={g.id} />
                  <small>{g.note}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The seven great families (ganas)</h2>
        <p className={styles.help}>Gotras are grouped under the seven ganas described in the Matsya Purana (chs. 195–202). Tap a rishi to open their profile.</p>
        <div className={styles.ganas}>
          {GANAS.map((gana) => (
            <div key={gana} className={styles.gana}>
              <div className={styles.head}>
                <PersonLink id={ganaHead[gana]} />
                <small>{gana} gana</small>
              </div>
              <ul>
                {gotras
                  .filter((g) => g.gana === gana)
                  .map((g) => (
                    <li key={g.id}>
                      <a href={`#/gotra?g=${g.id}`} onClick={() => document.getElementById(`gotra-${g.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                        {g.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Find your gotra and its pravara</h2>
        <label className={styles.search}>
          <span className="visually-hidden">Search gotras</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a gotra: Kashyap, Bharadwaj, Kaushik, Vatsa…" />
        </label>
        {list.length === 0 && <p className={styles.help}>Not in this list yet. There are many more gotras; ask your family priest for your pravara.</p>}
        <div className={styles.table}>
          {list.map((g) => (
            <article key={g.id} id={`gotra-${g.id}`} className={styles.row}>
              <div className={styles.rowHead}>
                <h3>{g.name}</h3>
                <span className={styles.gana2}>{g.gana} gana</span>
                {g.rishi && (
                  <span className={styles.founder}>
                    Rishi: <PersonLink id={g.rishi} />
                  </span>
                )}
              </div>
              <ol className={styles.pravara} aria-label={`${g.pravara.length}-rishi pravara`}>
                {g.pravara.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <p className={styles.abhi}>
                <em>
                  “{g.pravara.join(', ')} — {g.pravara.length === 1 ? 'ekarsheya' : g.pravara.length === 3 ? 'tryarsheya' : 'pancharsheya'} pravaranvita {g.name.split(' /')[0]}-gotrah…”
                </em>
              </p>
              {g.note && <p className={styles.note}>{g.note}</p>}
            </article>
          ))}
        </div>
        <p className={styles.fine}>
          Pravaras are given as commonly recited. The pravara-sutras (Baudhayana, Apastamba, Katyayana and others) and regional traditions differ in places.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Same family? A gotra–pravara check</h2>
        <Checker />
      </section>

      <section className={styles.section}>
        <h2>The rules in brief</h2>
        <div className={styles.rules}>
          {gotraRules.map((r) => (
            <article key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <small>
                {r.sources.map((s, i) => (
                  <span key={s.label}>
                    {i > 0 && ' · '}
                    <a href={s.url} target="_blank" rel="noreferrer">
                      {s.label} ↗
                    </a>
                  </span>
                ))}
              </small>
            </article>
          ))}
        </div>
        <p className={styles.help}>
          Gotra and kuladevata are separate inheritances: one traces your descent from a rishi, the other names the deity who guards your family. See{' '}
          <a href="#/kuladevata">Kuladevata</a>.
        </p>
      </section>

      <Sources items={gotraSources} />
    </>
  );
}
