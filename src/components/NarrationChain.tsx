import type { NarrationLayer } from '../data/types';
import { PersonLink } from './ui';
import styles from './NarrationChain.module.css';

/** "Who tells whom": each layer as speaker → listener. */
export function NarrationChain({ layers }: { layers: NarrationLayer[] }) {
  return (
    <ol className={styles.list}>
      {layers.map((l, i) => (
        <li key={i} className={styles.layer}>
          <div className={styles.pair}>
            <div className={styles.speaker}>
              <span className={styles.role}>Tells</span>
              <PersonLink id={l.speaker} />
            </div>
            <div className={styles.arrow} aria-hidden>
              →
            </div>
            <div className={styles.listener}>
              <span className={styles.role}>Listens</span>
              <PersonLink id={l.listener} />
            </div>
          </div>
          <p className={styles.context}>
            {l.where && <strong>{l.where}. </strong>}
            {l.context}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Transmission lineage: a horizontal chain of who handed the text to whom. */
export function Lineage({ ids }: { ids: string[] }) {
  return (
    <ol className={styles.lineage}>
      {ids.map((id, i) => (
        <li key={i}>
          <PersonLink id={id} />
        </li>
      ))}
    </ol>
  );
}
