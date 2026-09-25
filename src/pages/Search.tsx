import { search } from '../lib/search';
import type { Route } from '../lib/router';
import { Chip, PageHeader } from '../components/ui';
import styles from './Search.module.css';

export default function Search({ route }: { route: Route }) {
  const q = route.query.get('q') ?? '';
  const hits = search(q);

  return (
    <>
      <PageHeader eyebrow="Search" title={`“${q}”`} sub={`${hits.length} result${hits.length === 1 ? '' : 's'}`} />
      {hits.length === 0 ? (
        <p className={styles.empty}>Nothing found. Try a simpler spelling — e.g. “Vasishta”, “Shiv”, “Kali”.</p>
      ) : (
        <ul className={styles.list}>
          {hits.map((h) => (
            <li key={h.to + h.title}>
              <a href={h.to}>
                <span className={styles.row}>
                  <strong>{h.title}</strong>
                  <Chip>{h.kind}</Chip>
                </span>
                <span className={styles.sub}>{h.subtitle}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
