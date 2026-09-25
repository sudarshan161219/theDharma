import { useEffect } from 'react';
import { charitas, deviSources, goddessInStone, mahavidyas, matrikas, navadurga, promisedIncarnations, type DeviForm } from '../data/devi';
import { ev } from '../data/smriti';
import { src } from '../data/sources';
import { href } from '../lib/router';
import { Evidence, Sources } from '../components/ui';
import styles from './Avatars.module.css';

function FormCard({ f, n }: { f: DeviForm; n: number }) {
  return (
    <article id={`devi-${f.id}`} className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.bigNum}>{n}</span>
        <div>
          <h3>
            {f.name} <span className="deva">{f.sanskrit}</span>
          </h3>
          {f.aside && <span className={styles.aside}>{f.aside}</span>}
        </div>
      </div>
      <p className={styles.purpose}>{f.meaning}</p>
      <p>
        <strong>Form: </strong>
        {f.form}
      </p>
      <p>{f.story}</p>
      {f.evidence && <Evidence items={f.evidence} compact />}
      <div className={styles.foot}>
        Source:{' '}
        {f.sources.map((s, i) => (
          <span key={s.label}>
            {i > 0 && ' · '}
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          </span>
        ))}
      </div>
    </article>
  );
}

export default function DeviAvatars({ focus }: { focus: string | null }) {
  useEffect(() => {
    if (focus) document.getElementById(focus)?.scrollIntoView({ block: 'start' });
  }, [focus]);

  return (
    <>
      <p className={styles.help}>
        In Shakta scripture the Goddess (Devi, Shakti) is the supreme power, and she too “descends” whenever demons oppress the world. Her own promise is in the <a href={href('scriptures', 'markandeya-purana')}>Devi Mahatmya</a>:
        “Whenever trouble arises from the demons, I shall become incarnate and destroy the foes” (Markandeya Purana 91).
      </p>

      <section className={styles.section} id="devi-mahatmya">
        <h2>The Devi Mahatmya: three episodes, three forms</h2>
        <p className={styles.help}>
          Told by the sage Medhas to King Suratha and the merchant Samadhi. Its 700 verses, read as the Durga Saptashati, are the heart of Navaratri.
        </p>
        <ol className={styles.charitas}>
          {charitas.map((c) => (
            <li key={c.n}>
              <span className={styles.bn}>{c.n}</span>
              <div>
                <strong>{c.form}</strong>
                <small>
                  vs. {c.demon} · {c.cantos}
                </small>
                <p>{c.text}</p>
                <span className={styles.srcLine}>
                  {c.sources.map((s, i) => (
                    <span key={s.label}>
                      {i > 0 && ' · '}
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {s.label} ↗
                      </a>
                    </span>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <h3 className={styles.sub}>The Saptamatrikas: seven Mothers</h3>
        <p className={styles.help}>Against Raktabija, the shakti of each god comes forth in that god’s own form, with his mount and weapons (Markandeya Purana 88).</p>
        <ul className={styles.matrikas}>
          {matrikas.map((m) => (
            <li key={m.name}>
              <strong>{m.name}</strong>
              <small>
                shakti of {m.of} · {m.mount}
              </small>
            </li>
          ))}
        </ul>

        <Evidence items={[ev.dadhimati, ev.mothers, ev.saptashati, ev.deviMahatmya, ev.saptashatiTika, ev.chandiSaptashloki]} />
      </section>

      <section className={styles.section} id="devi-promised">
        <h2>Incarnations the Goddess promises</h2>
        <p className={styles.help}>
          At the close of the Devi Mahatmya the Goddess foretells her future descents. The first is set in <em>our own</em> time: the 28th yuga of the Vaivasvata manvantara (see{' '}
          <a href="#/manvantaras?n=7">Manvantaras</a>).
        </p>
        <ol className={styles.promised}>
          {promisedIncarnations.map((p, i) => (
            <li key={p.name}>
              <span className={styles.bn}>{i + 1}</span>
              <span>
                <strong>{p.name}</strong>
                <small>{p.when}</small>
                <span className={styles.pText}>{p.text}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className={styles.srcLine}>
          Source:{' '}
          <a href={src.dmCanto91.url} target="_blank" rel="noreferrer">
            {src.dmCanto91.label} ↗
          </a>{' '}
          ·{' '}
          <a href={src.shivaShatakshi.url} target="_blank" rel="noreferrer">
            {src.shivaShatakshi.label} ↗
          </a>
        </p>
      </section>

      <section className={styles.section} id="devi-navadurga">
        <h2>Navadurga: the nine Durgas of Navaratri</h2>
        <p className={styles.help}>
          One form is worshipped on each of the nine nights of Navaratri. The names and their order come from the <strong>Devi Kavacha</strong>, recited before the Saptashati:
          “First Shailaputri, second Brahmacharini…” The forms and stories below follow living tradition and are only summarised here.
        </p>
        <ol className={styles.strip9} aria-label="The nine Durgas">
          {navadurga.map((f, i) => (
            <li key={f.id}>
              <a href={`#/avatars?g=devi&a=devi-${f.id}`}>
                <span className={styles.num}>{i + 1}</span>
                <span className={styles.stripName}>{f.name}</span>
              </a>
            </li>
          ))}
        </ol>
        <Evidence items={[ev.navadurgaTemple, ev.deviKavacha, ev.navarnaChandi]} title="Evidence for the Navadurga" />
        <div className={styles.cards}>
          {navadurga.map((f, i) => (
            <FormCard key={f.id} f={f} n={i + 1} />
          ))}
        </div>
      </section>

      <section className={styles.section} id="devi-mahavidya">
        <h2>Dasha Mahavidya: the ten great wisdoms</h2>
        <p className={styles.help}>
          The <a href={href('scriptures', 'mahabhagavata')}>Mahabhagavata Purana</a> tells the origin. Shiva forbade Sati to attend her father Daksha’s sacrifice. Sati grew furious and took ten terrible forms that surrounded Shiva on all ten sides, showing him that she is the supreme power. Lists vary a little: the Mahabhagavata names Sundari and Shodashi and omits Kamala. The ten below are the order most commonly used today.
        </p>
        <ol className={styles.strip10} aria-label="The ten Mahavidyas">
          {mahavidyas.map((f, i) => (
            <li key={f.id}>
              <a href={`#/avatars?g=devi&a=devi-${f.id}`}>
                <span className={styles.num}>{i + 1}</span>
                <span className={styles.stripName}>{f.name.split(' (')[0]}</span>
              </a>
            </li>
          ))}
        </ol>
        <Evidence items={[ev.mahavidyaSara]} title="A Mahavidya digest in the Smriti collection" />
        <div className={styles.cards}>
          {mahavidyas.map((f, i) => (
            <FormCard key={f.id} f={f} n={i + 1} />
          ))}
        </div>
      </section>

      <section className={styles.section} id="devi-stone">
        <h2>The Goddess in stone: a timeline of inscriptions</h2>
        <p className={styles.help}>
          Scriptures tell us what was taught. Inscriptions show what people actually worshipped, and when. These records from MIDF’s Smriti catalogue run from about 500 CE to 1702 CE, oldest first.
        </p>
        <Evidence items={goddessInStone} title="Dated inscriptions" />
        <Evidence items={[ev.jvalamukhiPanchanga, ev.bhavaniPuja, ev.annapurna]} title="More manuscripts of regional Goddesses" />
      </section>

      <Sources items={deviSources} />
    </>
  );
}
