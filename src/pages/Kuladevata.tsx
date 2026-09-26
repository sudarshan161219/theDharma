import { useMemo } from 'react';
import { customs, deityKinds, findSteps, kulaEvidence, kulaSources, kuladevatas, roots, SUPREME_INFO, type KulaDeity, type Supreme } from '../data/kuladevata';
import { navigate, type Route } from '../lib/router';
import { Chip, Evidence, PageHeader, Sources } from '../components/ui';
import PlacesMap, { type MapPoint } from '../components/PlacesMap';
import styles from './Kuladevata.module.css';

const REGIONS: KulaDeity['region'][] = ['West', 'North', 'East', 'South'];
const REGION_LABEL: Record<KulaDeity['region'], string> = {
  West: 'West: Maharashtra, Goa, Gujarat, Rajasthan',
  North: 'North',
  East: 'East',
  South: 'South',
};

const osm = (d: { lat: number; lng: number }) => `https://www.openstreetmap.org/?mlat=${d.lat}&mlon=${d.lng}#map=14/${d.lat}/${d.lng}`;

const SUPREMES: Supreme[] = ['Shiva', 'Vishnu', 'Skanda', 'Devi'];

/** Supreme deity → … → local form, as a chain of chips. */
function Chain({ id }: { id: string }) {
  const r = roots[id];
  return (
    <ol className={styles.chain} aria-label="Manifestation">
      {r.chain.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ol>
  );
}

function Detail({ d }: { d: KulaDeity }) {
  const r = roots[d.id];
  return (
    <article className={styles.detail}>
      <Chip tone="gold">{d.form}</Chip>
      <h2>{d.name}</h2>
      <p className={styles.where}>
        {d.place}, {d.state}{' '}
        <a href={osm(d)} target="_blank" rel="noreferrer">
          map ↗
        </a>
      </p>
      <p className={styles.held}>
        <strong>Family deity of: </strong>
        {d.heldBy}
      </p>
      <p>{d.text}</p>
      <div className={styles.rootBox}>
        <strong>Manifestation of {r.supreme === 'Devi' ? 'Devi' : r.supreme}</strong>
        <Chain id={d.id} />
        <small>
          Scriptural basis:{' '}
          {r.scripture.map((s, i) => (
            <span key={s.label}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            </span>
          ))}
        </small>
        {r.link && (
          <a href={r.link} className={styles.rootLink}>
            See this form on the Avatars page →
          </a>
        )}
      </div>
      {d.place_id && (
        <p className={styles.link}>
          <a href={`#/places?p=${d.place_id}`}>Also a seat in Sacred Places →</a>
        </p>
      )}
      {d.evidence && <Evidence items={d.evidence} compact />}
      <p className={styles.srcs}>
        Source:{' '}
        {d.sources.map((s, i) => (
          <span key={s.label}>
            {i > 0 && ' · '}
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          </span>
        ))}
      </p>
    </article>
  );
}

export default function Kuladevata({ route }: { route: Route }) {
  const selected = route.query.get('k');
  const sel = kuladevatas.find((d) => d.id === selected);
  const points = useMemo<MapPoint[]>(() => kuladevatas.map((d) => ({ ...d, kind: 'kula' as const })), []);

  return (
    <>
      <PageHeader
        eyebrow="Kula-devata — the family deity"
        title="Kuladevi & Kuladevata"
        sub="Every Hindu family traditionally has a guardian deity of its lineage, often a form of Devi, sometimes of Shiva, Vishnu or Skanda. It is honoured at weddings, at a child’s first haircut and before every new beginning. Here is what it is, how it differs from other personal deities, and how to find yours."
      />

      <section className={styles.section}>
        <h2>Four kinds of “my deity”</h2>
        <div className={styles.kinds}>
          {deityKinds.map((kd) => (
            <article key={kd.name} className={styles.kind}>
              <span className={styles.whose}>{kd.whose}</span>
              <h3>{kd.name}</h3>
              <span className="deva">{kd.sanskrit}</span>
              <p>{kd.text}</p>
              <small>
                {kd.sources.map((s, i) => (
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
      </section>

      <div className={styles.cols}>
        <section className={styles.section}>
          <h2>How the family deity is honoured</h2>
          <p className={styles.help}>Customs differ between regions and communities. These are the most common.</p>
          <ul className={styles.steps}>
            {customs.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Don’t know yours? How to find it</h2>
          <ol className={`${styles.steps} ${styles.numbered}`}>
            {findSteps.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className={styles.section}>
        <h2>Well-known family deities across India</h2>
        <p className={styles.help}>
          A selection of shrines that serve as kuladevata for large numbers of families. The communities named are examples, not a complete list: families of the same
          surname or caste can hold different deities. Wisdomlib has no entry for several of these regional deities, so their family associations here are summarised from
          living tradition.
        </p>
        <div className={styles.mapRow} id="kula-map">
          <PlacesMap places={points} selected={selected} onSelect={(id) => navigate(`/kuladevata?k=${id}`)} />
          <div className={styles.side}>
            {sel ? (
              <Detail d={sel} />
            ) : (
              <div className={styles.hint}>
                <strong>Select a shrine</strong> on the map or below to see whose family deity it is.
              </div>
            )}
          </div>
        </div>

        {REGIONS.map((r) => (
          <div key={r}>
            <h3 className={styles.region}>{REGION_LABEL[r]}</h3>
            <ul className={styles.list}>
              {kuladevatas
                .filter((d) => d.region === r)
                .map((d) => (
                  <li key={d.id}>
                    <a href={`#/kuladevata?k=${d.id}`} className={selected === d.id ? styles.on : undefined} onClick={() => document.getElementById('kula-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                      <strong>{d.name}</strong>
                      <small>
                        {d.place} · {d.state}
                      </small>
                      <small className={styles.form}>{d.form}</small>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Whose form is your kuladevata?</h2>
        <p className={styles.help}>
          Every family deity is understood as a local manifestation of one of the great deities of the Puranas. Tap a name to see the chain and its scriptural source.
        </p>
        <div className={styles.tree}>
          {SUPREMES.map((sup) => {
            const items = kuladevatas.filter((d) => roots[d.id].supreme === sup);
            return (
              <div key={sup} className={`${styles.branch} ${styles['b' + sup]}`}>
                <h3>{SUPREME_INFO[sup].title}</h3>
                <p>{SUPREME_INFO[sup].text}</p>
                <ul>
                  {items.map((d) => (
                    <li key={d.id}>
                      <a href={`#/kuladevata?k=${d.id}`} onClick={() => document.getElementById('kula-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        {d.name.split(' (')[0]}
                      </a>
                      <span>{roots[d.id].chain.slice(1, -1).join(' → ') || roots[d.id].chain[0]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className={styles.help}>
          Where a deity has no dedicated Purana chapter (many regional devis), the scriptural basis given is for the general form, e.g. Durga in the Devi Mahatmya, and the
          local identification rests on living tradition and the shrine’s own sthala-purana.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Family deities in the inscriptions</h2>
        <p className={styles.help}>The custom is old. Inscriptions record people building temples to their tutelary deity and naming the family deity of a whole community.</p>
        <Evidence items={kulaEvidence} title="Tutelary and family deities in stone" />
      </section>

      <Sources items={kulaSources} />
    </>
  );
}
