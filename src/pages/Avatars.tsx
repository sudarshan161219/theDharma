import { useEffect } from 'react';
import { avatarSources, bhagavataAvatars, dashavatara, shivaAvatars } from '../data/avatars';
import { manvantaras } from '../data/cosmos';
import { scriptureById } from '../data/scriptures';
import { href, type Route } from '../lib/router';
import { Chip, PageHeader, PersonLink, Sources } from '../components/ui';
import DeviAvatars from './DeviAvatars';
import styles from './Avatars.module.css';

const YUGA_TONE: Record<string, 'gold' | 'accent' | 'indigo' | 'neutral'> = {
  Satya: 'gold',
  Treta: 'accent',
};

export default function Avatars({ route }: { route: Route }) {
  const focus = route.query.get('a');
  const group = (route.query.get('g') ?? 'vishnu') as 'vishnu' | 'shiva' | 'devi';
  useEffect(() => {
    if (focus && group === 'vishnu') document.getElementById(`av-${focus}`)?.scrollIntoView({ block: 'start' });
  }, [focus, group]);

  return (
    <>
      <PageHeader
        eyebrow="Avatara — the divine descent"
        title="Avatars"
        sub={
          <>
            “Whenever dharma declines, I descend” (Gita 4.7). The descents of Vishnu, the incarnations of Shiva, and the forms of the Goddess: the Navadurga, the Mahavidyas and those of the Devi Mahatmya. <a href="#/glossary?t=avatara">What is an avatara?</a>
          </>
        }
      />

      <nav className={styles.tabs} aria-label="Avatars of">
        {[
          ['vishnu', 'Vishnu'],
          ['shiva', 'Shiva'],
          ['devi', 'Devi (the Goddess)'],
        ].map(([k, label]) => (
          <a key={k} href={`#/avatars?g=${k}`} className={group === k ? styles.tabOn : undefined} aria-current={group === k ? 'page' : undefined}>
            {label}
          </a>
        ))}
      </nav>

      {group === 'devi' && <DeviAvatars focus={focus} />}

      {group === 'vishnu' && (
      <>

      <section className={styles.section}>
        <h2>Dashavatara — the ten</h2>
        <ol className={styles.strip} aria-label="The ten avataras in order">
          {dashavatara.map((a, i) => (
            <li key={a.id}>
              <a href={`#/avatars?a=${a.id}`} className={focus === a.id ? styles.on : undefined}>
                <span className={styles.num}>{i + 1}</span>
                <span className={styles.stripName}>{a.name}</span>
                <span className={styles.stripForm}>{a.form}</span>
              </a>
            </li>
          ))}
        </ol>
        <p className={styles.help}>
          Read in order, the forms move from water creature to amphibian, beast, man-beast, small man, warrior, ideal king, divine teacher, sage and world-renewer.
        </p>

        <div className={styles.cards}>
          {dashavatara.map((a, i) => (
            <article key={a.id} id={`av-${a.id}`} className={`${styles.card} ${focus === a.id ? styles.focus : ''}`}>
              <div className={styles.cardHead}>
                <span className={styles.bigNum}>{i + 1}</span>
                <div>
                  <h3>
                    {a.name} <span className="deva">{a.sanskrit}</span>
                  </h3>
                  <div className={styles.chips}>
                    <Chip tone={YUGA_TONE[a.yuga] ?? 'indigo'}>{a.yuga}</Chip>
                    <Chip>{a.form}</Chip>
                  </div>
                </div>
              </div>
              <p className={styles.purpose}>{a.purpose}</p>
              <p>{a.story}</p>
              <div className={styles.foot}>
                <span>Told in: </span>
                {a.texts.map((t, j) => (
                  <span key={t}>
                    {j > 0 && ', '}
                    <a href={href('scriptures', t)}>{scriptureById.get(t)?.name ?? t}</a>
                  </span>
                ))}
                {a.people && (
                  <>
                    <br />
                    <span>People: </span>
                    {a.people.map((p, j) => (
                      <span key={p}>
                        {j > 0 && ', '}
                        <PersonLink id={p} />
                      </span>
                    ))}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>The avataras in the Bhagavata Purana (1.3)</h2>
        <p className={styles.help}>
          The Bhagavata names twenty-two here. Tradition counts twenty-four by adding Hamsa and Hayagriva. It then adds that the avataras are countless, “like streams flowing from an inexhaustible lake”, and that Krishna is the Lord himself.
        </p>
        <ol className={styles.bhag}>
          {bhagavataAvatars.map((b) => (
            <li key={b.n}>
              <span className={styles.bn}>{b.n}</span>
              <span>
                <strong>{b.person ? <PersonLink id={b.person} /> : b.name}</strong>
                <small>{b.note}</small>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Protector of each manvantara</h2>
        <p className={styles.help}>The Vishnu Purana names a form of Vishnu who protects each of the first seven manvantaras.</p>
        <ol className={styles.manv}>
          {manvantaras
            .filter((m) => m.avatara)
            .map((m) => (
              <li key={m.n}>
                <a href={`#/manvantaras?n=${m.n}`}>
                  <span className={styles.bn}>{m.n}</span>
                  <span>
                    <strong>{m.avatara}</strong>
                    <small>{m.manu} Manu</small>
                  </span>
                </a>
              </li>
            ))}
        </ol>
      </section>

      <Sources items={avatarSources.slice(0, 5)} />
      </>
      )}

      {group === 'shiva' && (
      <>
      <section className={styles.section}>
        <h2>Incarnations of Shiva</h2>
        <p className={styles.help}>
          A selection from the Shatarudra-samhita of the <a href={href('scriptures', 'shiva-purana')}>Shiva Purana</a>, which describes the many forms Shiva takes to protect devotees and restore order.
        </p>
        <ul className={styles.shiva}>
          {shivaAvatars.map((s) => (
            <li key={s.name}>
              <strong>{s.person ? <PersonLink id={s.person} /> : s.name}</strong>
              <p>{s.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <Sources items={avatarSources.slice(5)} />
      </>
      )}
    </>
  );
}
