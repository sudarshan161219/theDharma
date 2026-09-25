import { useEffect } from 'react';
import { GROUPS, glossary } from '../data/glossary';
import type { Route } from '../lib/router';
import { PageHeader } from '../components/ui';
import styles from './Glossary.module.css';

export default function Glossary({ route }: { route: Route }) {
  const focus = route.query.get('t');

  useEffect(() => {
    if (focus) document.getElementById(`term-${focus}`)?.scrollIntoView({ block: 'start' });
  }, [focus]);

  return (
    <>
      <PageHeader
        eyebrow="Definitions"
        title="Words to know"
        sub="What Purana, Upapurana, Itihasa, manvantara, rishi and other terms mean. Each definition links to its source on wisdomlib."
      />

      <nav className={styles.toc} aria-label="Terms">
        {GROUPS.map((g) => (
          <div key={g}>
            <strong>{g}</strong>
            <span>
              {glossary
                .filter((t) => t.group === g)
                .map((t) => (
                  <a key={t.id} href={`#/glossary?t=${t.id}`}>
                    {t.term.split(' (')[0]}
                  </a>
                ))}
            </span>
          </div>
        ))}
      </nav>

      {GROUPS.map((g) => (
        <section key={g} className={styles.group}>
          <h2>{g}</h2>
          <div className={styles.terms}>
            {glossary
              .filter((t) => t.group === g)
              .map((t) => (
                <article key={t.id} id={`term-${t.id}`} className={`${styles.term} ${focus === t.id ? styles.focus : ''}`}>
                  <h3>
                    {t.term} {t.sanskrit && <span className="deva">{t.sanskrit}</span>}
                  </h3>
                  <p className={styles.meaning}>{t.meaning}</p>
                  <p>{t.body}</p>
                  {t.list && (
                    <ol className={styles.list}>
                      {t.list.map((x) => (
                        <li key={x.name}>
                          <strong>{x.name}</strong> — {x.text}
                        </li>
                      ))}
                    </ol>
                  )}
                  <div className={styles.foot}>
                    {t.see && (
                      <a href={t.see.to} className={styles.see}>
                        {t.see.label} →
                      </a>
                    )}
                    <span className={styles.srcs}>
                      Source:{' '}
                      {t.sources.map((s, i) => (
                        <span key={s.label}>
                          {i > 0 && ' · '}
                          <a href={s.url} target="_blank" rel="noreferrer">
                            {s.label} ↗
                          </a>
                        </span>
                      ))}
                    </span>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
