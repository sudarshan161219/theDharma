import { useEffect, useMemo, useState } from 'react';
import { DYNASTIES, dynastyExtraSources, flatten, type DNode, type Line } from '../data/dynasties';
import { navigate, type Route } from '../lib/router';
import { PageHeader, PersonLink, Sources } from '../components/ui';
import styles from './Dynasties.module.css';

type Key = keyof typeof DYNASTIES;

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/sh/g, 's');

function Node({ n, match, main }: { n: DNode; match: (n: DNode) => boolean; main: boolean }) {
  const hit = match(n);
  return (
    <li className={`${styles.item} ${main ? styles.main : ''}`}>
      {n.gapBefore && (
        <div className={styles.gap} aria-label="Generations omitted">
          ⋮ <span>generations omitted</span>
        </div>
      )}
      <div id={`dyn-${n.id}`} className={`${styles.node} ${hit ? styles.hit : ''}`}>
        <strong>{n.person ? <PersonLink id={n.person} /> : n.name}</strong>
        {n.spouse && <span className={styles.spouse}>⚭ {n.spouse}</span>}
        {n.note && <small>{n.note}</small>}
      </div>
      {n.branches && (
        <div className={styles.branches}>
          {n.branches.map((b, i) => (
            <div key={i} className={styles.branch}>
              {b.label && <span className={styles.branchLabel}>{b.label}</span>}
              <LineView line={b.line} match={match} main={false} />
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

function LineView({ line, match, main }: { line: Line; match: (n: DNode) => boolean; main: boolean }) {
  return (
    <ol className={styles.line}>
      {line.map((n) => (
        <Node key={n.id} n={n} match={match} main={main} />
      ))}
    </ol>
  );
}

export default function Dynasties({ route }: { route: Route }) {
  const key = (route.query.get('d') as Key) in DYNASTIES ? (route.query.get('d') as Key) : 'solar';
  const d = DYNASTIES[key];
  const [q, setQ] = useState('');
  const t = norm(q.trim());
  const match = useMemo(() => (n: DNode) => t.length > 1 && norm(n.name + ' ' + (n.spouse ?? '')).includes(t), [t]);
  const hits = useMemo(() => flatten(d.line).filter(match), [d, match]);
  const count = useMemo(() => flatten(d.line).length, [d]);

  useEffect(() => {
    if (hits[0]) document.getElementById(`dyn-${hits[0].id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [hits]);

  return (
    <>
      <PageHeader
        eyebrow="Vamsha — the royal genealogies"
        title="The Solar and Lunar dynasties"
        sub="Genealogy (vamsha and vamshanucharita) is one of the five marks of a Purana. Follow the two great royal houses from the Sun and the Moon down to Rama, Krishna and the Pandavas. The two lines are joined at the start: Manu’s child Ila married Budha, son of the Moon."
      />

      <div className={styles.controls}>
        <div className={styles.tabs} role="tablist">
          {(Object.keys(DYNASTIES) as Key[]).map((k) => (
            <button key={k} role="tab" aria-selected={k === key} className={k === key ? styles.on : undefined} onClick={() => navigate(`/dynasties?d=${k}`)}>
              {k === 'solar' ? '☀ Solar (Surya-vamsha)' : '☾ Lunar (Chandra-vamsha)'}
            </button>
          ))}
        </div>
        <label className={styles.find}>
          <span className="visually-hidden">Find a name</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find a name: Raghu, Yayati, Kuru…" />
          {t.length > 1 && <small>{hits.length ? `${hits.length} found` : 'Not in this line; try the other dynasty'}</small>}
        </label>
      </div>

      <section className={styles.intro}>
        <h2>{d.title}</h2>
        <p>
          {d.blurb} <span className={styles.capital}>Capital: {d.capital}.</span>
        </p>
        <p className={styles.help}>
          Read the <strong>bold line</strong> from top to bottom, father to son. Side branches show brothers and cadet houses. “⋮” marks places where the Purana lists more kings than
          shown. {count} names are shown here.
        </p>
      </section>

      <div className={styles.tree}>
        <LineView line={d.line} match={match} main />
      </div>

      <p className={styles.help}>
        The lists follow the Vishnu Purana (Book IV), which the Bhagavata (Skandha 9) and other Puranas broadly share. Names, order and the number of kings between famous
        rulers differ between Puranas and the Ramayana’s own recital (Bala-kanda 70). Treat the omitted stretches as “and many kings”.
      </p>
      <Sources items={[...d.sources, ...dynastyExtraSources]} />
    </>
  );
}
