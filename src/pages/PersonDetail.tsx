import { personById } from '../data/people';
import { scriptures } from '../data/scriptures';
import { ganaHead, gotras } from '../data/gotra';
import { href } from '../lib/router';
import { Chip, Facts, PageHeader, PersonLink, Sources } from '../components/ui';
import NotFound from './NotFound';
import styles from './PersonDetail.module.css';

interface Appearance {
  scriptureId: string;
  scriptureName: string;
  role: 'Tells' | 'Listens' | 'Hands down';
  other?: string;
  context: string;
}

function appearancesOf(id: string): Appearance[] {
  const out: Appearance[] = [];
  for (const s of scriptures) {
    for (const l of s.narration) {
      if (l.speaker === id) out.push({ scriptureId: s.id, scriptureName: s.name, role: 'Tells', other: l.listener, context: l.context });
      if (l.listener === id) out.push({ scriptureId: s.id, scriptureName: s.name, role: 'Listens', other: l.speaker, context: l.context });
    }
    const i = s.lineage?.indexOf(id) ?? -1;
    if (i >= 0 && !s.narration.some((l) => l.speaker === id || l.listener === id)) {
      out.push({ scriptureId: s.id, scriptureName: s.name, role: 'Hands down', context: 'Part of the chain through which the text was transmitted.' });
    }
  }
  return out;
}

export default function PersonDetail({ id }: { id: string }) {
  const p = personById.get(id);
  if (!p) return <NotFound />;
  const apps = appearancesOf(id);

  return (
    <article>
      <a href={href('people')} className={styles.back}>
        ← All rishis
      </a>
      <PageHeader eyebrow={p.kind} title={p.name} sub={p.about ?? p.short}>
        {p.sanskrit && <p className={`deva ${styles.deva}`}>{p.sanskrit}</p>}
      </PageHeader>

      {p.facts && (
        <section className={styles.section}>
          <Facts items={p.facts} />
        </section>
      )}

      <section className={styles.section}>
        <h2>Appears in</h2>
        {apps.length === 0 ? (
          <p className={styles.muted}>Not a narrator or listener in the texts covered here yet.</p>
        ) : (
          <ul className={styles.apps}>
            {apps.map((a, i) => (
              <li key={i}>
                <div className={styles.appHead}>
                  <Chip tone={a.role === 'Tells' ? 'accent' : a.role === 'Listens' ? 'indigo' : 'gold'}>{a.role}</Chip>
                  <a href={href('scriptures', a.scriptureId)} className={styles.title}>
                    {a.scriptureName}
                  </a>
                  {a.other && (
                    <span className={styles.muted}>
                      {a.role === 'Tells' ? 'to' : 'from'} <PersonLink id={a.other} />
                    </span>
                  )}
                </div>
                <p>{a.context}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {(() => {
        const own = gotras.filter((g) => g.rishi === id || ganaHead[g.gana] === id);
        return own.length ? (
          <section className={styles.section}>
            <h2>Gotras of this rishi’s line</h2>
            <ul className={styles.gotras}>
              {own.map((g) => (
                <li key={g.id}>
                  <a href={`#/gotra?g=${g.id}`}>{g.name}</a>
                  <small>pravara: {g.pravara.join(', ')}</small>
                </li>
              ))}
            </ul>
          </section>
        ) : null;
      })()}

      {p.sources && <Sources items={p.sources} />}
    </article>
  );
}
