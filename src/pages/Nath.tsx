import { useEffect, useMemo, useRef, type CSSProperties } from 'react';
import PlacesMap, { type MapPoint } from '../components/PlacesMap';
import {
  artImage,
  artRecord,
  hathaLadder,
  nathIdeas,
  nathInfluence,
  nathLineage,
  nathMarks,
  nathNames,
  nathSites,
  nathSources,
  nathStories,
  nathTexts,
  navnath,
  nathArt,
  WELLCOME_LICENSE,
} from '../data/nath';
import { src } from '../data/sources';
import { navigate, type Route } from '../lib/router';
import { PageHeader, Sources } from '../components/ui';
import t from './Theology.module.css';
import styles from './Nath.module.css';

export default function Nath({ route }: { route: Route }) {
  const selected = nathSites.find((s) => s.id === route.query.get('p')) ?? null;
  const points = useMemo<MapPoint[]>(() => nathSites.map((s) => ({ id: s.id, n: s.n, name: s.name, kind: 'tirtha', lat: s.lat, lng: s.lng })), []);
  const list = useRef<HTMLOListElement>(null);

  // Bring the chosen site into view within the list (never scrolling the page).
  // Wait for the web fonts, which change the row heights on a fresh load.
  useEffect(() => {
    let live = true;
    void document.fonts.ready.then(() => {
      const el = list.current;
      const item = el?.querySelector<HTMLElement>(`[data-id="${selected?.id}"]`);
      if (live && el && item) el.scrollTop = item.offsetTop - (el.clientHeight - item.offsetHeight) / 2;
    });
    return () => {
      live = false;
    };
  }, [selected]);

  return (
    <>
      <PageHeader
        eyebrow="Adinatha · Matsyendranatha · Gorakhnath"
        title="The Nath Yogis"
        sub="An order of Shaiva yogis who trace their teaching to Shiva as Adinatha, the first lord. The Naths made the body itself the path: through hatha yoga they sought to wake the power coiled within, unite Shiva and Shakti, and win freedom while still alive. Their postures and breathing are now practised all over the world."
      />

      <section className={t.section}>
        <h2>Who they are</h2>
        <div className={t.twoCol}>
          <div className={t.panel}>
            <h3>A yogic order of Shiva</h3>
            <p>
              The Naths are renouncers who live in monasteries (maths) around a sacred fire, wander between shrines, and are buried, not cremated, in meditation. Their
              teaching is less a written philosophy than a practice passed from guru to disciple. Over the centuries they touched almost every tradition of north India,
              Nepal and the Deccan: the Sants, the Varkaris, the Sikh Gurus and Tantric Buddhists.
            </p>
          </div>
          <div className={t.panel}>
            <h3>Their names</h3>
            <ol className={t.acts}>
              {nathNames.map((n) => (
                <li key={n.name}>
                  <b>{n.name}</b>
                  <span>{n.meaning}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={t.section}>
        <h2>The line of teachers</h2>
        <p className={t.help}>From Shiva to the Marathi saints, as the tradition tells it. Scholars place Gorakhnath anywhere from the 10th to the 13th century.</p>
        <ol className={styles.lineage}>
          {nathLineage.map((l) => (
            <li key={l.name}>
              <b>{l.name}</b>
              <span className="deva">{l.sanskrit}</span>
              <small>{l.note}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={t.section}>
        <h2>The stories</h2>
        <div className={styles.stories}>
          {nathStories.map((s) => (
            <article key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={t.section}>
        <h2>The nine Naths</h2>
        <p className={t.help}>
          The lists differ from region to region. This is the Marathi tradition of the Navnath Bhaktisar, which holds each Nath to be one of the nine sages of the Bhagavata
          Purana (11.2), the sons of Rishabha, born again. Other lists include Gopichand, Jvalendra or Chauranginath.
        </p>
        <div className={t.tableWrap}>
          <table className={t.table}>
            <thead>
              <tr>
                <th scope="col">Nath</th>
                <th scope="col">Also called</th>
                <th scope="col">Sage of the Bhagavata</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              {navnath.map((n) => (
                <tr key={n.name}>
                  <th scope="row">{n.name}</th>
                  <td>{n.also}</td>
                  <td>{n.narayana}</td>
                  <td>{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={t.h3}>The Naths in a painted manuscript</h3>
        <p className={t.help}>
          Pages from an illustrated Hindi manuscript of Nath and other saints, catalogued as c. 1715, now in the Wellcome Collection. Four of the nine above are here, with
          Gopichand and Chauranginath, who stand among the nine in other lists.
        </p>
        <div className={styles.gallery}>
          {nathArt.map((a) => (
            <figure key={a.image} className={styles.art}>
              <a href={artRecord(a)} target="_blank" rel="noreferrer" className={styles.frame} title={`${a.title}: view at the Wellcome Collection`}>
                <img src={artImage(a)} alt={`${a.title}, from an illustrated Hindi manuscript, c. 1715`} loading="lazy" decoding="async" />
              </a>
              <figcaption>
                <b>{a.shows}</b>
                <span>“{a.title}”</span>
                <small>
                  <a href={artRecord(a)} target="_blank" rel="noreferrer">
                    Wellcome Collection ↗
                  </a>{' '}
                  ·{' '}
                  <a href={WELLCOME_LICENSE} target="_blank" rel="noreferrer">
                    CC BY 4.0
                  </a>
                </small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={t.section}>
        <h2>The teaching: the body as the path</h2>
        <dl className={t.ideas}>
          {nathIdeas.map((x) => (
            <div key={x.term}>
              <dt>
                <b>{x.term}</b> <span className="deva">{x.sanskrit}</span> <small>{x.meaning}</small>
              </dt>
              <dd>{x.about}</dd>
            </div>
          ))}
        </dl>
        <p className={t.srcs}>
          <a href={src.gorakshaNathaEssay.url} target="_blank" rel="noreferrer">
            {src.gorakshaNathaEssay.label} ↗
          </a>
        </p>
      </section>

      <section className={t.section}>
        <h2>Hatha yoga, step by step</h2>
        <p className={t.help}>
          Svatmarama’s Hatha Yoga Pradipika (15th century) opens by saluting Adinatha and listing the siddhas, Matsyendra and Goraksha first among them. Its four chapters
          climb from the body to absorption.
        </p>
        <ol className={t.upayas}>
          {hathaLadder.map((h, i) => (
            <li key={h.name} style={{ '--i': i } as CSSProperties}>
              <div className={t.uHead}>
                <b>
                  {h.name} <span className="deva">{h.sanskrit}</span>
                </b>
              </div>
              <p>{h.about}</p>
              {h.items && (
                <ul className={t.chips}>
                  {h.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <p className={t.srcs}>
          <a href={src.hypPranayama.url} target="_blank" rel="noreferrer">
            {src.hypPranayama.label} ↗
          </a>{' '}
          ·{' '}
          <a href={src.hypMudras.url} target="_blank" rel="noreferrer">
            {src.hypMudras.label} ↗
          </a>
        </p>
      </section>

      <section className={t.section}>
        <h2>How to know a Nath</h2>
        <div className={t.malas}>
          {nathMarks.map((m) => (
            <div key={m.name}>
              <b>{m.name}</b>
              <p>{m.about}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={t.section}>
        <h2>Monasteries and shrines</h2>
        <p className={t.help}>A few of the great Nath centres, from Punjab to Karnataka and Nepal. Locations are approximate.</p>
        <div className={styles.mapRow} id="nath-map">
          <PlacesMap places={points} selected={selected?.id ?? null} label="Map of Nath monasteries and shrines" onSelect={(id) => navigate(`/nath?p=${id}`)} />
          <ol className={styles.siteList} ref={list}>
            {nathSites.map((s) => (
              <li key={s.id} data-id={s.id}>
                <a href={`#/nath?p=${s.id}`} className={selected?.id === s.id ? styles.on : undefined}>
                  <span className={styles.n}>{s.n}</span>
                  <span>
                    <b>{s.name}</b>
                    <small>{s.state}</small>
                    {selected?.id === s.id && <em>{s.note}</em>}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={t.section}>
        <h2>Texts</h2>
        <ol className={t.padas}>
          {nathTexts.map((x) => (
            <li key={x.name}>
              <b>{x.name}</b>
              <span>{x.about}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={t.section}>
        <h2>How far the Naths reached</h2>
        <dl className={t.ideas}>
          {nathInfluence.map((x) => (
            <div key={x.name}>
              <dt>
                <b>{x.name}</b>
              </dt>
              <dd>
                {x.about} {x.to && <a href={x.to}>More →</a>}
              </dd>
            </div>
          ))}
        </dl>
        <p className={t.help}>
          <a href="#/darshanas?t=shaiva">The Naths among the Shaiva lineages →</a> · <a href="#/trika">Kashmir Shaivism and the Kaula tradition →</a>
        </p>
      </section>

      <Sources items={nathSources} />
    </>
  );
}
