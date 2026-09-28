import { useMemo, useState, type CSSProperties } from 'react';
import PlacesMap, { type MapPoint } from '../components/PlacesMap';
import { kindLabel, sixtyFour, sriChakraYoginis, twoMeanings, yoginiArt, yoginiDasha, yoginiSources, yoginiTemples, type YoginiKind } from '../data/yoginis';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { PageHeader, Sources } from '../components/ui';
import styles from './Yoginis.module.css';

const KINDS = Object.keys(kindLabel) as YoginiKind[];

/** The sixty-four in a ring around Bhairava, like the circular yogini temples. */
function YoginiRing({ selected, kind, onSelect }: { selected: number; kind: YoginiKind | null; onSelect: (i: number) => void }) {
  const R = 150;
  const C = 180;
  return (
    <svg className={styles.ring} viewBox="0 0 360 360" aria-hidden="true">
      <circle className={styles.ringLine} cx={C} cy={C} r={R} />
      <circle className={styles.ringInner} cx={C} cy={C} r={R - 36} />
      {sixtyFour.map((y, i) => {
        const a = (i / 64) * 2 * Math.PI - Math.PI / 2;
        const x = C + R * Math.cos(a);
        const yy = C + R * Math.sin(a);
        const dim = kind !== null && y.kind !== kind;
        return (
          <circle
            key={y.name}
            cx={x}
            cy={yy}
            r={i === selected ? 9 : 6}
            className={`${styles.dot} ${styles['k_' + y.kind]} ${i === selected ? styles.dotOn : ''} ${dim ? styles.dim : ''}`}
            onClick={() => onSelect(i)}
          >
            <title>
              {i + 1}. {y.name}: {y.meaning}
            </title>
          </circle>
        );
      })}
      <text className={styles.centre} x={C} y={C - 6}>
        Bhairava
      </text>
      <text className={styles.centreSmall} x={C} y={C + 14}>
        at the centre
      </text>
    </svg>
  );
}

export default function Yoginis({ route }: { route: Route }) {
  const [selected, setSelected] = useState(0);
  const [kind, setKind] = useState<YoginiKind | null>(null);
  const y = sixtyFour[selected];

  const temple = yoginiTemples.find((t) => t.id === route.query.get('p')) ?? null;
  const points = useMemo<MapPoint[]>(() => yoginiTemples.map((t) => ({ id: t.id, n: t.n, name: t.name, kind: 'shakti', lat: t.lat, lng: t.lng })), []);

  return (
    <>
      <PageHeader
        eyebrow="Chatuhshashti Yogini · the sixty-four"
        title="The Yoginis"
        sub="Fierce and beautiful, animal-faced and radiant, the yoginis are goddesses of the Tantric circle. Most often sixty-four, they dance around Bhairava in temples open to the sky, guard the enclosures of the Sri Chakra, and gave their name to the women who walk the path of yoga."
      />

      <section className={styles.section}>
        <h2>Two meanings of one word</h2>
        <div className={styles.twoCol}>
          {twoMeanings.map((m) => (
            <div key={m.title} className={styles.panel}>
              <h3>{m.title}</h3>
              <p>{m.about}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>From the Mothers to the sixty-four</h2>
        <p className={styles.help}>
          The yoginis grew out of the Matrikas, the Mothers who fight beside Durga in the Devi Mahatmya. Many Tantras multiply the eight Mothers by eight: each leads a band of
          eight yoginis, making sixty-four. Like the fiercer Mothers, many yoginis wear the faces of animals and birds.
        </p>
        <div className={styles.gallery}>
          {yoginiArt.map((a) => (
            <figure key={a.url} className={styles.art}>
              <a href={a.url} target="_blank" rel="noreferrer" className={styles.frame} title={`${a.title}: view at ${a.museum}`}>
                <img src={a.img} alt={a.title} loading="lazy" decoding="async" />
              </a>
              <figcaption>
                <b>{a.title}</b>
                <span>
                  {a.date} · {a.place}
                </span>
                <p>{a.why}</p>
                <small>
                  {a.medium} ·{' '}
                  <a href={a.url} target="_blank" rel="noreferrer">
                    {a.museum}, public domain ↗
                  </a>
                </small>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.help}>
          <a href="#/avatars?g=devi&a=devi-mahatmya">The Matrikas in the Devi Mahatmya →</a> · <a href="#/epithets?d=matrika">The Matrikas’ names →</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>The sixty-four of Kashi</h2>
        <div className={styles.story}>
          <p>
            The Skanda Purana tells how Shiva, longing to return to Kashi, sent the sixty-four yoginis there to find some fault in the rule of King Divodasa. They came in
            disguise, as gardeners’ wives, musicians, ascetics and healers, but could find no flaw. Rather than go back empty-handed, they chose to stay in Kashi for ever.
            The Purana names them all.
          </p>
          <a href={src.skandaYoginis.url} target="_blank" rel="noreferrer">
            Skanda Purana, Kashi Khanda 45.34–41 ↗
          </a>
        </div>

        <div className={styles.kinds} role="group" aria-label="Highlight by kind of name">
          <button type="button" className={kind === null ? styles.on : undefined} aria-pressed={kind === null} onClick={() => setKind(null)}>
            All sixty-four
          </button>
          {KINDS.map((k) => (
            <button key={k} type="button" className={`${styles['k_' + k]} ${kind === k ? styles.on : ''}`} aria-pressed={kind === k} onClick={() => setKind(kind === k ? null : k)}>
              <i className={styles.swatch} /> {kindLabel[k].label} ({sixtyFour.filter((x) => x.kind === k).length})
            </button>
          ))}
        </div>

        <div className={styles.circleRow}>
          <YoginiRing selected={selected} kind={kind} onSelect={setSelected} />
          <div className={`${styles.chosen} ${styles['k_' + y.kind]}`} aria-live="polite">
            <span className={styles.num}>{selected + 1}</span>
            <b>{y.name}</b>
            <i>{y.iast}</i>
            <p>“{y.meaning}”</p>
            <small>{kindLabel[y.kind].about}</small>
            <div className={styles.step}>
              <button type="button" onClick={() => setSelected((selected + 63) % 64)} aria-label="Previous yogini">
                ‹
              </button>
              <button type="button" onClick={() => setSelected((selected + 1) % 64)} aria-label="Next yogini">
                ›
              </button>
            </div>
          </div>
        </div>

        <ol className={styles.names}>
          {sixtyFour.map((x, i) => (
            <li key={x.name} className={`${styles['k_' + x.kind]} ${kind !== null && x.kind !== kind ? styles.dim : ''}`}>
              <button type="button" className={i === selected ? styles.on : undefined} onClick={() => setSelected(i)}>
                <span className={styles.n}>{i + 1}</span>
                <span>
                  <b>{x.name}</b>
                  <small>{x.meaning}</small>
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.help}>
          Other texts give other lists, and the names carved at each temple differ again. The meanings here are plain translations of the names.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Temples open to the sky</h2>
        <p className={styles.help}>
          The yogini temples are unlike any others: most are round and roofless (hypaethral), with a niche for each yogini in the inner wall, all facing Bhairava at the
          centre. The circle is the yogini-chakra itself; the open roof is often explained by the yoginis’ power of flight. Only a handful survive, mostly in Odisha and
          central India. Locations here are approximate.
        </p>
        <div className={styles.mapRow} id="yogini-map">
          <PlacesMap places={points} selected={temple?.id ?? null} label="Map of the yogini temples" onSelect={(id) => navigate(`/yoginis?p=${id}`)} />
          <ol className={styles.temples}>
            {yoginiTemples.map((t) => (
              <li key={t.id}>
                <a href={`#/yoginis?p=${t.id}`} className={temple?.id === t.id ? styles.on : undefined}>
                  <span className={styles.tn}>{t.n}</span>
                  <span>
                    <b>{t.name}</b>
                    <small>
                      {t.state} · {t.date} · {t.plan}
                    </small>
                    {temple?.id === t.id && <em>{t.note}</em>}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Yoginis in the Tantras</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>The Kaula yoginis</h3>
            <p>
              In the Kaula Tantras the yoginis are not only outer goddesses but the powers of one’s own senses and mind, circling consciousness at the centre. The
              Kaulajnana-nirnaya, ascribed to Matsyendranatha, belongs to the Yogini-kaula, the “yogini family” of teaching, and describes their worship.
            </p>
            <p className={styles.help}>
              <a href="#/nath">Matsyendranatha and the Naths →</a> · <a href="#/trika">Kula in Kashmir Shaivism →</a>
            </p>
          </div>
          <div className={styles.panel}>
            <h3>The yoginis of the Sri Chakra</h3>
            <p className={styles.help}>In Srividya, each of the nine enclosures of the Sri Chakra is guarded by its own class of yoginis, named in the Khadgamala hymn.</p>
            <ol className={styles.chakra}>
              {sriChakraYoginis.map((c, i) => (
                <li key={c.name} style={{ '--i': i } as CSSProperties}>
                  <b>{c.name}</b>
                  <span>{c.enclosure}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Yoginis in the calendar and the stars</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <h3>Yogini dasha</h3>
            <p className={styles.help}>
              An astrological reckoning of life in periods ruled by eight yoginis, each lasting one year more than the last: a cycle of thirty-six years.
            </p>
            <ol className={styles.dasha}>
              {yoginiDasha.map((d) => (
                <li key={d.name}>
                  <b>{d.name}</b>
                  <span className={styles.bar} style={{ '--w': `${(d.years / 8) * 100}%` } as CSSProperties}>
                    <i />
                  </span>
                  <small>
                    {d.years} {d.years === 1 ? 'year' : 'years'} · {d.lord}
                  </small>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.panel}>
            <h3>Yogini Ekadashi</h3>
            <p>
              The eleventh day of the waning moon in the month before the rains (Ashadha, in the north’s reckoning): a fast said to wash away even grave faults. It falls
              just before Devshayani Ekadashi, when Vishnu begins his four months’ sleep.
            </p>
            <p className={styles.help}>
              <a href="#/calendar">The Hindu calendar →</a>
            </p>
          </div>
        </div>
      </section>

      <Sources items={yoginiSources} />
    </>
  );
}
