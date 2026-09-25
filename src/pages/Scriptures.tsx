import { useMemo, useState } from 'react';
import { scriptures } from '../data/scriptures';
import type { Guna } from '../data/types';
import { href } from '../lib/router';
import { PageHeader, Chip, Sources } from '../components/ui';
import { personById } from '../data/people';
import { src } from '../data/sources';
import { kurmaUpapuranas } from '../data/upapuranaList';
import styles from './Scriptures.module.css';

type Filter = 'All' | 'Itihasa' | 'Upapurana' | Guna;
const FILTERS: Filter[] = ['All', 'Itihasa', 'Sattvic', 'Rajasic', 'Tamasic', 'Upapurana'];
const FILTER_HINT: Record<Filter, string> = {
  All: '',
  Itihasa: 'The two epics — "thus it happened" — and the Harivamsha, the Mahabharata’s appendix.',
  Upapurana: 'Secondary Puranas, often the main scripture of a tradition — Shakta, Ganapatya, Saura, Vaishnava.',
  Sattvic: 'Glorify Vishnu (per the Padma Purana’s grouping).',
  Rajasic: 'Glorify Brahma (per the Padma Purana’s grouping).',
  Tamasic: 'Glorify Shiva (per the Padma Purana’s grouping).',
};

const maxVerses = Math.max(...scriptures.filter((s) => s.category === 'Mahapurana').map((s) => s.verses ?? 0));
const nameOf = (id: string) => personById.get(id)?.name ?? id;

export default function Scriptures() {
  const [filter, setFilter] = useState<Filter>('All');
  const list = useMemo(
    () => scriptures.filter((s) => filter === 'All' || s.category === filter || s.guna === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Itihasa & Purana"
        title="Scriptures"
        sub={
          <>
            Each card shows the composer, the size, and the outermost storyteller → listener. Open a card to see every layer of narration. New to the terms? Read the{' '}
            <a href="#/glossary">definitions</a>.
          </>
        }
      />

      <div className={styles.filters} role="group" aria-label="Filter">
        {FILTERS.map((f) => (
          <button key={f} className={filter === f ? styles.on : undefined} onClick={() => setFilter(f)} aria-pressed={filter === f}>
            {f}
          </button>
        ))}
        {FILTER_HINT[filter] && <span className={styles.hint}>{FILTER_HINT[filter]}</span>}
      </div>

      <div className={styles.grid}>
        {list.map((s) => {
          const outer = s.narration[0];
          return (
            <a key={s.id} href={href('scriptures', s.id)} className={styles.card}>
              <div className={styles.top}>
                <Chip tone={s.category === 'Itihasa' ? 'accent' : s.category === 'Upapurana' ? 'gold' : 'indigo'}>{s.category}</Chip>
                {s.guna && <Chip>{s.guna}</Chip>}
              </div>
              <h3>{s.name}</h3>
              <p className={`deva ${styles.deva}`}>{s.sanskrit}</p>
              <dl className={styles.meta}>
                <div>
                  <dt>Composer</dt>
                  <dd>{s.composer}</dd>
                </div>
                <div>
                  <dt>Told by → to</dt>
                  <dd>{outer ? `${nameOf(outer.speaker)} → ${nameOf(outer.listener)}` : '—'}</dd>
                </div>
                <div>
                  <dt>Deity</dt>
                  <dd>{s.deity}</dd>
                </div>
              </dl>
              <div className={styles.size}>
                <span>{s.verses ? `${s.verses.toLocaleString('en-IN')} verses` : 'Verse count varies'}</span>
                {s.category === 'Mahapurana' && !!s.verses && (
                  <span className={styles.bar} aria-hidden>
                    <span style={{ width: `${(s.verses / maxVerses) * 100}%` }} />
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {(filter === 'Upapurana' || filter === 'All') && (
        <section className={styles.kurma}>
          <h2>The eighteen Upapuranas (Kurma Purana’s list)</h2>
          <p className={styles.hint}>
            Other Puranas give different lists, and texts such as the Devi Bhagavata, Ganesha and Brihaddharma do not appear in this one. Linked names have a page here. Some others survive only in quotations or manuscripts. See also{' '}
            <a href="#/glossary?t=upapurana">what is an Upapurana?</a>
          </p>
          <ol>
            {kurmaUpapuranas.map((u) => (
              <li key={u.n}>
                <span className={styles.kn}>{u.n}</span>
                {u.id ? <a href={href('scriptures', u.id)}>{u.name}</a> : <span>{u.name}</span>}
                {u.note && <small>{u.note}</small>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <p className={styles.note}>
        Verse counts are the traditional figures listed in Bhagavata Purana 12.13 (Mahabharata: 1,00,000; Ramayana: 24,000). Together the eighteen Mahapuranas are said to hold 4,00,000 verses. Surviving manuscripts often differ. The Upapuranas are traditionally also said to number eighteen, but the lists disagree on which texts belong.
      </p>
      <Sources items={[src.vpClassification, src.upaIntro, src.kalikaUpaIntro, src.wilsonUpapuranas, src.upaStudies, src.defUpapurana]} />
    </>
  );
}
