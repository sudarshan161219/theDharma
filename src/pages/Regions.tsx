import { useMemo } from 'react';
import PlacesMap, { type MapPoint } from '../components/PlacesMap';
import { regions, regionSources, zoneLabel, type Region, type Zone } from '../data/regions';
import { navigate, type Route } from '../lib/router';
import { onTabListKeyDown } from '../lib/a11y';
import { PageHeader, Sources } from '../components/ui';
import styles from './Regions.module.css';

const ZONES = Object.keys(zoneLabel) as Zone[];

/** Site markers carry their region and index, so a click can select both. */
const siteId = (r: string, i: number) => `${r}~${i}`;

function go(r: string | null, s?: number) {
  navigate(r ? `/regions?r=${r}${s !== undefined ? `&s=${s}` : ''}` : '/regions');
}

function scrollToMap() {
  document.getElementById('region-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** The short card beside the map. */
function Summary({ r }: { r: Region }) {
  return (
    <div className={styles.summary}>
      <span className={styles.zone}>{zoneLabel[r.zone]}</span>
      <h3>{r.name}</h3>
      <p className={styles.old}>{r.oldNames}</p>
      <p className={styles.tagline}>{r.tagline}</p>
      <dl>
        <dt>Today</dt>
        <dd>{r.states}</dd>
        <dt>Languages</dt>
        <dd>{r.languages.join(', ')}</dd>
        <dt>Scripts</dt>
        <dd>{r.scripts.map((s) => s.name).join(', ')}</dd>
        <dt>Deities</dt>
        <dd>{r.deities.slice(0, 4).join('; ')}</dd>
      </dl>
      <a
        href="#region-detail"
        className={styles.more}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('region-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Philosophy, saints, texts and traditions ↓
      </a>
    </div>
  );
}

/** Everything a region gave, in cards. */
function Detail({ r, site }: { r: Region; site: number | null }) {
  return (
    <section className={styles.section} id="region-detail">
      <h2>
        {r.name} <span className={styles.h2old}>{r.oldNames}</span>
      </h2>
      <p className={styles.about}>{r.about}</p>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.c_phil}`}>
          <h3>Philosophy and schools</h3>
          <ul className={styles.named}>
            {r.philosophy.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b>
                <span>{p.note}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.c_people}`}>
          <h3>Saints, sages and scholars</h3>
          <ul className={styles.people}>
            {r.people.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b>
                <small>{p.when}</small>
                <span>{p.note}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.c_texts}`}>
          <h3>Scriptures and books</h3>
          <ul className={styles.named}>
            {r.texts.map((t) => (
              <li key={t.name}>
                <b>{t.name}</b>
                <span>{t.note}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.c_deities}`}>
          <h3>Deities most worshipped</h3>
          <ul className={styles.chips}>
            {r.deities.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.c_trad}`}>
          <h3>Traditions and festivals</h3>
          <ul className={styles.bullets}>
            {r.traditions.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.c_lang}`}>
          <h3>Languages and scripts</h3>
          <ul className={styles.chips}>
            {r.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <ul className={styles.named}>
            {r.scripts.map((s) => (
              <li key={s.name}>
                <b>{s.name}</b>
                <span>{s.note}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <h3 className={styles.h3}>Sacred sites on the map</h3>
      <ol className={styles.sites}>
        {r.sites.map((s, i) => (
          <li key={s.name}>
            <button
              className={site === i ? styles.on : undefined}
              onClick={() => {
                go(r.id, i);
                scrollToMap();
              }}
            >
              <b>{s.name}</b>
              <span>{s.note}</span>
            </button>
            {s.to && (
              <a href={s.to} className={styles.siteLink}>
                More →
              </a>
            )}
          </li>
        ))}
      </ol>

      {r.links && (
        <p className={styles.links}>
          {r.links.map((l, i) => (
            <span key={l.to}>
              {i > 0 && ' · '}
              <a href={l.to}>{l.label} →</a>
            </span>
          ))}
        </p>
      )}
      <p className={styles.srcs}>
        Source:{' '}
        {r.sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 && ' · '}
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          </span>
        ))}
      </p>
    </section>
  );
}

export default function Regions({ route }: { route: Route }) {
  const region = regions.find((r) => r.id === route.query.get('r')) ?? null;
  const sParam = Number(route.query.get('s'));
  const site = region && Number.isInteger(sParam) && route.query.has('s') && region.sites[sParam] ? sParam : null;

  const points = useMemo<MapPoint[]>(() => {
    const base: MapPoint[] = regions.map((r) => ({ id: r.id, n: r.n, name: r.name, kind: 'region', lat: r.lat, lng: r.lng }));
    if (!region) return base;
    return [...base, ...region.sites.map((s, i): MapPoint => ({ id: siteId(region.id, i), n: 0, name: s.name, kind: 'site', lat: s.lat, lng: s.lng }))];
  }, [region]);

  const selected = region ? (site !== null ? siteId(region.id, site) : region.id) : null;

  return (
    <>
      <PageHeader
        eyebrow="What each land gave"
        title="Regions of Dharma"
        sub="Every region of India has added something of its own: a philosophy, a line of saints, a script, a language of devotion, a way of worshipping. Choose a region to see its schools, sages, scriptures, deities, traditions and sacred sites on the map."
      />

      <section className={styles.section}>
        <div className={styles.zones} role="tablist" aria-label="Region" onKeyDown={onTabListKeyDown}>
          {ZONES.map((z) => (
            <div key={z} className={styles.zoneRow}>
              <span className={styles.zoneLabel}>{zoneLabel[z]}</span>
              <div className={styles.zoneChips}>
                {regions
                  .filter((r) => r.zone === z)
                  .map((r) => (
                    <button key={r.id} role="tab" aria-selected={region?.id === r.id} className={region?.id === r.id ? styles.on : undefined} onClick={() => go(region?.id === r.id ? null : r.id)}>
                      <span className={styles.num}>{r.n}</span>
                      {r.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mapRow} id="region-map">
          <PlacesMap
            places={points}
            selected={selected}
            label="Map of India’s regions and their sacred sites"
            onSelect={(id) => {
              const [r, s] = id.split('~');
              go(r, s !== undefined ? Number(s) : undefined);
            }}
          />
          <div className={styles.side}>
            {region ? (
              <>
                {site !== null && (
                  <div className={styles.siteCard}>
                    <span className={styles.zone}>Site</span>
                    <b>{region.sites[site].name}</b>
                    <p>{region.sites[site].note}</p>
                    {region.sites[site].to && <a href={region.sites[site].to}>More on this site →</a>}
                  </div>
                )}
                <Summary r={region} />
              </>
            ) : (
              <div className={styles.hint}>
                <strong>Select a region</strong> on the map or above. Its sacred sites then appear on the map as small gold dots.
              </div>
            )}
          </div>
        </div>
        <p className={styles.legend}>
          <i className={styles.dotRegion} /> Region <i className={styles.dotSite} /> Sacred site of the chosen region
        </p>
      </section>

      {region && <Detail r={region} site={site} />}

      <section className={styles.section}>
        <h2>At a glance</h2>
        <p className={styles.help}>Each region’s hallmark, its languages and its scripts. Tap a row to open it.</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Region</th>
                <th scope="col">Known for</th>
                <th scope="col">Languages</th>
                <th scope="col">Scripts</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((r) => (
                <tr key={r.id} className={region?.id === r.id ? styles.rowOn : undefined}>
                  <th scope="row">
                    <a href={`#/regions?r=${r.id}`} onClick={() => setTimeout(scrollToMap, 40)}>
                      {r.n}. {r.name}
                    </a>
                  </th>
                  <td>{r.tagline}</td>
                  <td>{r.languages.filter((l) => !l.startsWith('Sanskrit')).join(', ')}</td>
                  <td>{r.scripts.map((s) => s.name).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Sources items={regionSources} />
    </>
  );
}
