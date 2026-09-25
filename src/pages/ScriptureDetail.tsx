import { scriptureById } from '../data/scriptures';
import { href } from '../lib/router';
import { Chip, Evidence, Facts, PageHeader, Sources } from '../components/ui';
import { Lineage, NarrationChain } from '../components/NarrationChain';
import NotFound from './NotFound';
import styles from './ScriptureDetail.module.css';

export default function ScriptureDetail({ id }: { id: string }) {
  const s = scriptureById.get(id);
  if (!s) return <NotFound />;

  return (
    <article>
      <a href={href('scriptures')} className={styles.back}>
        ← All scriptures
      </a>
      <PageHeader
        eyebrow={<a href={`#/glossary?t=${s.category.toLowerCase()}`} className={styles.cat}>{s.category} ⓘ</a>}
        title={s.name}
        sub={s.summary}
      >
        <p className={`deva ${styles.deva}`}>{s.sanskrit}</p>
        <div className={styles.chips}>
          {s.guna && <Chip tone="indigo">{s.guna}</Chip>}
          {!!s.verses && <Chip tone="gold">{s.verses.toLocaleString('en-IN')} verses</Chip>}
        </div>
      </PageHeader>

      {s.note && <p className={styles.note}>{s.note}</p>}

      <section className={styles.section}>
        <h2>At a glance</h2>
        <Facts
          items={[
            { label: 'Composed by', value: s.composer },
            { label: 'Glorifies', value: s.deity },
            { label: 'Manvantara', value: s.manvantara },
            { label: 'Yuga', value: s.yuga },
          ]}
        />
      </section>

      <section className={styles.section}>
        <h2>Who is telling, who is listening?</h2>
        <p className={styles.help}>
          Puranas are stories within stories. The first box is the outer frame; the others are dialogues nested inside it.
        </p>
        {s.narration.length ? (
          <NarrationChain layers={s.narration} />
        ) : (
          <p className={styles.empty}>
            The narration frame of this text is not recorded here yet. The sources below describe its contents.
          </p>
        )}
      </section>

      {s.lineage && (
        <section className={styles.section}>
          <h2>How the text was handed down</h2>
          <p className={styles.help}>As the text itself describes its own transmission.</p>
          <Lineage ids={s.lineage} />
        </section>
      )}

      <div className={styles.cols}>
        {s.structure && (
          <section className={styles.section}>
            <h2>Structure</h2>
            <ol className={styles.structure}>
              {s.structure.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
          </section>
        )}
        <section className={styles.section}>
          <h2>Well-known parts</h2>
          <ul className={styles.highlights}>
            {s.highlights.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      </div>

      <Sources items={s.sources} />
      {s.evidence && <Evidence items={s.evidence} />}
      {s.furtherReading && (
        <Sources
          title="Further reading (print translations)"
          tone="indigo"
          intro="Complete, unabridged translations. These are not on wisdomlib."
          items={s.furtherReading}
        />
      )}
    </article>
  );
}
