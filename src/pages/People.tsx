import { people, profiledPeople } from '../data/people';
import type { Person } from '../data/types';
import { href } from '../lib/router';
import { PageHeader } from '../components/ui';
import styles from './People.module.css';

const GROUPS: { title: string; blurb: string; ids: string[] }[] = [
  {
    title: 'Saptarishis of the present manvantara',
    blurb: 'The seven sages holding office in this, the Vaivasvata, manvantara.',
    ids: ['vasishtha', 'kashyapa', 'atri', 'jamadagni', 'gautama', 'vishvamitra', 'bharadvaja'],
  },
  {
    title: 'Rishikas — women seers and sages',
    blurb: 'Women who composed Vedic hymns, debated in royal courts, or are honoured as ideals of wisdom and steadfastness.',
    ids: ['lopamudra', 'arundhati', 'anasuya', 'gargi', 'maitreyi', 'ghosha', 'devahuti'],
  },
  {
    title: 'Mind-born sons of Brahma',
    blurb: 'The first sages and progenitors, born from Brahma’s mind at creation. (Vasishtha and Atri, above, are also among them.)',
    ids: ['marichi', 'angiras', 'pulastya', 'pulaha', 'kratu', 'bhrigu', 'daksha', 'sanatkumara', 'narada'],
  },
  {
    title: 'Vyasa, his line and his disciples',
    blurb: 'The sages who arranged, carried and recited the Vedas, Itihasas and Puranas.',
    ids: ['parashara', 'vyasa', 'shuka', 'suta', 'jaimini', 'vaishampayana', 'yajnavalkya', 'valmiki'],
  },
  {
    title: 'Sages of the Upanishads',
    blurb: 'Teachers and students whose dialogues form the Upanishads.',
    ids: ['uddalaka', 'shvetaketu', 'shandilya', 'vamadeva', 'yajnavalkya'],
  },
];

function Card({ p }: { p: Person }) {
  return (
    <a href={href('people', p.id)} className={styles.card}>
      <strong>{p.name}</strong>
      {p.sanskrit && <span className="deva">{p.sanskrit}</span>}
      <p>{p.short}</p>
    </a>
  );
}

export default function People() {
  const grouped = new Set(GROUPS.flatMap((g) => g.ids));
  const byId = new Map(profiledPeople.map((p) => [p.id, p]));
  const otherSages = profiledPeople.filter((p) => !grouped.has(p.id));
  const rest = people.filter((p) => !p.about);

  return (
    <>
      <PageHeader
        eyebrow="Sages, narrators & listeners"
        title="Rishis"
        sub={
          <>
            Open any name to see every scripture in which they tell or hear the story. What makes a rishi a Brahmarshi, Rajarshi or Devarshi?{' '}
            <a href="#/glossary?t=rishi">See the definitions</a>.
          </>
        }
      />

      {GROUPS.map((g) => (
        <section key={g.title} className={styles.section}>
          <h2>{g.title}</h2>
          <p className={styles.blurb}>{g.blurb}</p>
          <div className={styles.grid}>
            {g.ids.map((id) => {
              const p = byId.get(id);
              return p ? <Card key={id} p={p} /> : null;
            })}
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <h2>Other great sages</h2>
        <div className={styles.grid}>
          {otherSages.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Everyone else who speaks or listens</h2>
        <ul className={styles.list}>
          {rest.map((p) => (
            <li key={p.id}>
              <a href={href('people', p.id)}>{p.name}</a>
              <span>{p.kind}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
