import { epithetSources, kindInfo, namedDeities, type NameKind } from '../data/epithets';
import { navigate, type Route } from '../lib/router';
import { onTabListKeyDown } from '../lib/a11y';
import { PageHeader, Sources } from '../components/ui';
import styles from './Epithets.module.css';

const KINDS = Object.keys(kindInfo) as NameKind[];

export default function Epithets({ route }: { route: Route }) {
  const d = route.query.get('d') ?? 'vishnu';
  const k = KINDS.includes(route.query.get('k') as NameKind) ? (route.query.get('k') as NameKind) : null;
  const deity = namedDeities.find((x) => x.id === d);
  const go = (dd: string, kk: NameKind | null) => navigate(`/epithets?d=${dd}${kk ? `&k=${kk}` : ''}`);

  const shown = (deity ? [deity] : namedDeities).flatMap((x) => x.epithets.filter((e) => !k || e.kind === k).map((e) => ({ ...e, deity: x })));
  const total = namedDeities.reduce((n, x) => n + x.epithets.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Nama — the names of the divine"
        title="Epithets of the Devas and Devis"
        sub={`Every deity is known by many names, and each name tells a story: a deed, a form, a family tie, a quality or a cosmic task. Here are ${total} of the best known, for ${namedDeities.length} deities, with what each means and why it was given.`}
      />

      <section className={styles.section}>
        <h2>Thousand names and a hundred and eight</h2>
        <div className={styles.intro}>
          <div>
            <b>Sahasranama</b> <span className="deva">सहस्रनाम</span>
            <p>
              “A thousand names”: a hymn listing a deity’s names in verse, recited as worship. The best known are the Vishnu Sahasranama, taught by Bhishma on his bed of
              arrows, the Lalita Sahasranama of the Brahmanda Purana, and the Shiva Sahasranamas of the Linga and Shiva Puranas.
            </p>
          </div>
          <div>
            <b>Ashtottara-shatanama</b> <span className="deva">अष्टोत्तरशतनाम</span>
            <p>
              “A hundred and eight names”, chanted with the 108 beads of a mala in daily puja. Each name is offered with “namaḥ”: <i>oṃ keśavāya namaḥ</i>, “Om, salutation to
              Keshava”.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>How a name is made</h2>
        <p className={styles.help}>Tap a kind to show only those names.</p>
        <div className={styles.kinds} role="group" aria-label="Filter by kind of name">
          {KINDS.map((kk) => (
            <button key={kk} className={`${styles.kind} ${styles['k_' + kk]} ${k === kk ? styles.kindOn : ''}`} onClick={() => go(d, k === kk ? null : kk)} aria-pressed={k === kk}>
              <b>{kindInfo[kk].label}</b>
              <span>{kindInfo[kk].about}</span>
              <small>e.g. {kindInfo[kk].example}</small>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The names</h2>
        <div className={styles.deities} role="tablist" aria-label="Deity" onKeyDown={onTabListKeyDown}>
          <button role="tab" aria-selected={!deity} className={!deity ? styles.on : undefined} onClick={() => go('all', k)}>
            All
          </button>
          {namedDeities.map((x) => (
            <button key={x.id} role="tab" aria-selected={deity?.id === x.id} className={deity?.id === x.id ? styles.on : undefined} onClick={() => go(x.id, k)}>
              {x.name.replace(/ \(.*\)/, '')}
              <span className="deva">{x.sanskrit}</span>
            </button>
          ))}
        </div>

        {deity && (
          <p className={styles.collection}>
            <b>{deity.name}</b> <span className={styles.kindTag}>{deity.kind}</span> · Names gathered in: {deity.collection}
          </p>
        )}
        {k && (
          <p className={styles.filterNote}>
            Showing names {kindInfo[k].label.toLowerCase()} only ·{' '}
            <button onClick={() => go(d, null)} className={styles.clear}>
              show all kinds ×
            </button>
          </p>
        )}

        {shown.length ? (
          <ul className={styles.names}>
            {shown.map((e) => (
              <li key={`${e.deity.id}-${e.name}`} className={styles['k_' + e.kind]}>
                <div className={styles.nameHead}>
                  <b>{e.name}</b>
                  <span className="deva">{e.sanskrit}</span>
                </div>
                <p className={styles.meaning}>{e.meaning}</p>
                {e.why && <p className={styles.why}>{e.why}</p>}
                <div className={styles.tags}>
                  <span className={styles.tag}>{kindInfo[e.kind].label}</span>
                  {!deity && <span className={styles.of}>{e.deity.name.replace(/ \(.*\)/, '')}</span>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.help}>No names of this kind for {deity?.name}.</p>
        )}

        {deity && (
          <p className={styles.srcs}>
            Source:{' '}
            {deity.sources.map((s, i) => (
              <span key={s.label}>
                {i > 0 && ' · '}
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              </span>
            ))}
          </p>
        )}
      </section>

      <Sources items={epithetSources} />
    </>
  );
}
