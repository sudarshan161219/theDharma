import type { ReactNode } from 'react';
import type { Fact, Source } from '../data/types';
import { personById } from '../data/people';
import { evidenceUrl, type Evidence as EvidenceItem } from '../data/sources';
import { href } from '../lib/router';
import styles from './ui.module.css';

export function PageHeader({ eyebrow, title, sub, children }: { eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <header className={styles.pageHeader}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1>{title}</h1>
      {sub && <p className={styles.lede}>{sub}</p>}
      {children}
    </header>
  );
}

export function Sources({
  items,
  title = 'Read the source on wisdomlib',
  intro,
  tone = 'gold',
}: {
  items: Source[];
  title?: string;
  intro?: string;
  tone?: 'gold' | 'indigo';
}) {
  if (!items.length) return null;
  return (
    <aside className={`${styles.sources} ${tone === 'indigo' ? styles.sourcesIndigo : ''}`}>
      <h3>{title}</h3>
      {intro && <p className={styles.sourcesIntro}>{intro}</p>}
      <ul>
        {items.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Renders a person id as a link (if we know them) or plain text. */
export function PersonLink({ id }: { id: string }) {
  const p = personById.get(id);
  if (!p) return <span>{id}</span>;
  return (
    <a href={href('people', p.id)} className={styles.person} title={p.short}>
      {p.name}
    </a>
  );
}

export function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className={styles.facts}>
      {items.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Primary evidence (inscriptions, manuscripts) from MIDF's Smriti catalogue. */
export function Evidence({ items, title = 'In stone and on palm-leaf: primary evidence', compact = false }: { items: EvidenceItem[]; title?: string; compact?: boolean }) {
  if (!items.length) return null;
  return (
    <aside className={`${styles.evidence} ${compact ? styles.evidenceCompact : ''}`}>
      {!compact && (
        <h3>
          {title}{' '}
          <a href="https://smriti.midf.org.in/" target="_blank" rel="noreferrer" className={styles.evSite}>
            via Smriti · MIDF ↗
          </a>
        </h3>
      )}
      <ul>
        {items.map((e) => (
          <li key={`${e.kind}-${e.id}`}>
            <span className={`${styles.evKind} ${e.kind === 'Inscription' ? styles.evIns : styles.evMs}`}>{e.kind}</span>
            <span className={styles.evBody}>
              <a href={evidenceUrl(e)} target="_blank" rel="noreferrer" className={styles.evTitle}>
                {e.title} ↗
              </a>
              {e.meta && <small>{e.meta}</small>}
              {!compact && <span className={styles.evNote}>{e.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function Chip({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'accent' | 'gold' | 'indigo' }) {
  return <span className={`${styles.chip} ${styles[tone]}`}>{children}</span>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
