import { useMemo } from 'react';
import { jyotirlingas, kaulaPithas, otherPeethas, placeById, placesSources, shaktiPeethas, type Place } from '../data/places';
import { src } from '../data/sources';
import { href, navigate, type Route } from '../lib/router';
import { Chip, Evidence, PageHeader, Sources } from '../components/ui';
import PlacesMap from '../components/PlacesMap';
import styles from './Places.module.css';

type Show = 'all' | 'jyotirlinga' | 'shakti';

const osm = (p: { lat: number; lng: number }) => `https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lng}#map=14/${p.lat}/${p.lng}`;

function Detail({ p }: { p: Place }) {
  const twin = p.sameSiteAs ? placeById.get(p.sameSiteAs) : undefined;
  return (
    <article className={styles.detail}>
      <div className={styles.detailHead}>
        <Chip tone={p.kind === 'jyotirlinga' ? 'indigo' : 'accent'}>{p.kind === 'jyotirlinga' ? `Jyotirlinga ${p.n}` : 'Shakti Peetha'}</Chip>
        <h2>
          {p.name} <span className="deva">{p.sanskrit}</span>
        </h2>
      </div>
      <dl className={styles.where}>
        <div>
          <dt>{p.kind === 'jyotirlinga' ? 'Shiva Purana says' : 'The stotra / texts say'}</dt>
          <dd>{p.scriptureSays}</dd>
        </div>
        <div>
          <dt>Identified today</dt>
          <dd>
            {p.today}, {p.state}{' '}
            <a href={osm(p)} target="_blank" rel="noreferrer" className={styles.mapLink}>
              map ↗
            </a>
          </dd>
        </div>
        {p.bodyPart && (
          <div>
            <dt>Part of Sati (per tradition)</dt>
            <dd>{p.bodyPart}</dd>
          </div>
        )}
      </dl>
      <p>{p.story}</p>
      {p.alternates && (
        <div className={styles.alts}>
          <strong>Also claimed at:</strong>
          <ul>
            {p.alternates.map((a) => (
              <li key={a.place}>
                {a.place}{' '}
                <a href={osm(a)} target="_blank" rel="noreferrer">
                  map ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {twin && (
        <p className={styles.twin}>
          Same sacred town as{' '}
          <a href={`#/places?p=${twin.id}`}>
            {twin.name} ({twin.kind === 'jyotirlinga' ? 'Jyotirlinga' : 'Shakti Peetha'})
          </a>
          .
        </p>
      )}
      {p.evidence && <Evidence items={p.evidence} compact />}
      <p className={styles.srcs}>
        Source:{' '}
        {p.sources.map((s, i) => (
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

function PlaceList({ items, selected }: { items: Place[]; selected: string | null }) {
  return (
    <ol className={styles.list}>
      {items.map((p) => (
        <li key={p.id}>
          <a
            href={`#/places?p=${p.id}`}
            className={`${styles.item} ${p.kind === 'jyotirlinga' ? styles.itemJ : styles.itemS} ${selected === p.id ? styles.itemOn : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={styles.itemNum}>{p.n}</span>
            <span className={styles.itemBody}>
              <strong>{p.name}</strong>
              <small>
                {p.today.split(',')[0]} · {p.state}
              </small>
              {p.bodyPart && <small className={styles.part}>{p.bodyPart}</small>}
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function Places({ route }: { route: Route }) {
  const show = (route.query.get('show') as Show) || 'all';
  const selected = route.query.get('p');
  const selPlace = selected ? placeById.get(selected) : undefined;

  const visible = useMemo(() => {
    if (show === 'jyotirlinga') return jyotirlingas;
    if (show === 'shakti') return [...shaktiPeethas, ...otherPeethas];
    return [...jyotirlingas, ...shaktiPeethas, ...otherPeethas];
  }, [show]);

  const setShow = (s: Show) => navigate(`/places?show=${s}`);

  return (
    <>
      <PageHeader
        eyebrow="Tirtha — sacred geography"
        title="Jyotirlingas & Shakti Peethas"
        sub="The twelve places where Shiva manifests as a pillar of light, and the seats where the Goddess abides, traditionally where parts of Sati’s body fell. Tap a marker or a name."
      />

      <div className={styles.controls} role="group" aria-label="Show on map">
        {(
          [
            ['all', 'All'],
            ['jyotirlinga', '12 Jyotirlingas'],
            ['shakti', 'Shakti Peethas'],
          ] as [Show, string][]
        ).map(([k, label]) => (
          <button key={k} onClick={() => setShow(k)} className={show === k ? styles.on : undefined} aria-pressed={show === k}>
            {label}
          </button>
        ))}
        <span className={styles.legend}>
          <span className={styles.dotJ} /> Jyotirlinga
          <span className={styles.dotS} /> Shakti Peetha
          <span className={styles.dotAlt} /> Other claimed site
        </span>
      </div>

      <div className={styles.mapRow}>
        <PlacesMap places={visible} selected={selected} onSelect={(id) => navigate(`/places?show=${show}&p=${id}`)} />
        <div className={styles.side}>
          {selPlace ? (
            <Detail p={selPlace} />
          ) : (
            <div className={styles.hint}>
              <p>
                <strong>Select a place</strong> on the map or in the lists below to see what scripture says about it, where it is today, and the inscriptions that record it.
              </p>
              <p>
                Three towns hold both a Jyotirlinga and a Shakti Peetha: <a href="#/places?p=mallikarjuna">Srisailam</a>, <a href="#/places?p=mahakala">Ujjain</a> and{' '}
                <a href="#/places?p=vishveshvara">Varanasi</a>.
              </p>
            </div>
          )}
        </div>
      </div>

      {show !== 'shakti' && (
        <section className={styles.section}>
          <h2>The twelve Jyotirlingas</h2>
          <p className={styles.help}>
            A jyotirlinga is Shiva as a boundless pillar of light, the form in which he appeared between Brahma and Vishnu when they argued over who was greater. The Shiva Purana
            (Kotirudra-samhita, ch. 1 and 14–33) lists the twelve and tells the origin of each. For three of them rival sites claim the name. The Purana’s own description is
            given alongside the site identified today.
          </p>
          <PlaceList items={jyotirlingas} selected={selected} />
          <Sources items={[src.jyotirlingaList, src.jyotirlingaIncarnations, src.defJyotirlinga, src.jyotirlingaEssay]} />
        </section>
      )}

      {show !== 'jyotirlinga' && (
        <section className={styles.section}>
          <h2>Shakti Peethas</h2>
          <p className={styles.help}>
            Sati gave up her body at her father Daksha’s sacrifice (see <a href="#/avatars?g=devi&a=devi-mahavidya">the Mahavidyas</a>). Grief-stricken, Shiva wandered the
            worlds carrying her. To end his grief, Vishnu’s discus cut the body, and wherever a part fell a seat of the Goddess (pitha) arose. Each is guarded by a form of
            Shiva as Bhairava. This dismemberment story is told in later Shakta texts such as the Kalika Purana, the Devi Bhagavata and the Mahabhagavata. The count varies:
            four, eighteen, fifty-one, fifty-two or 108.
          </p>

          <h3 className={styles.sub}>The eighteen Maha Shakti Peethas</h3>
          <p className={styles.help}>
            From the Ashtadasha Shakti Peetha Stotra, attributed to Adi Shankaracharya: “Lanke Shankari devi, Kamakshi Kanchika pure…”. The body parts follow popular
            tradition, and sources differ.
          </p>
          <PlaceList items={shaktiPeethas} selected={selected} />

          <h3 className={styles.sub}>Other great seats from the 51-pitha lists</h3>
          <PlaceList items={otherPeethas} selected={selected} />

          <h3 className={styles.sub}>The four primary pithas (Kalika Purana & Kaula tradition)</h3>
          <ul className={styles.kaula}>
            {kaulaPithas.map((k) => (
              <li key={k.name}>
                <strong>{k.name}</strong>
                <span>{k.where}</span>
                <small>{k.part}</small>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Sources items={placesSources} />
      <p className={styles.help}>
        Coordinates are approximate and for orientation only. Map data and tiles © OpenStreetMap contributors. See also{' '}
        <a href={href('scriptures', 'shiva-purana')}>Shiva Purana</a> and <a href={href('scriptures', 'kalika-purana')}>Kalika Purana</a>.
      </p>
    </>
  );
}
