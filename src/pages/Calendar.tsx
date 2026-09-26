import { useMemo, useState } from 'react';
import { calendarSources, festivals, limbs, monthNakshatra, monthSpan, pakshas, tithiGroups } from '../data/calendar';
import { MASAS, NAKSHATRAS, RITUS, SAMVATSARAS, panchanga, sunriseIST, tithiName, todayIST, upcomingFestivals } from '../lib/panchanga';
import { PageHeader, Sources } from '../components/ui';
import styles from './Calendar.module.css';

const pad = (n: number) => String(n).padStart(2, '0');
const isoDay = (t: { y: number; m: number; d: number }) => `${t.y}-${pad(t.m + 1)}-${pad(t.d)}`;
const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });

/** The moon's lit shape for a given elongation (0 = new, 180 = full). */
function MoonShape({ e, r }: { e: number; r: number }) {
  const waxing = e < 180;
  const rx = Math.abs(Math.cos((e * Math.PI) / 180)) * r;
  const gibbous = e > 90 && e < 270;
  const outer = waxing ? 1 : 0;
  const term = waxing ? (gibbous ? 1 : 0) : gibbous ? 0 : 1;
  const d = `M0 ${-r} A${r} ${r} 0 0 ${outer} 0 ${r} A${rx} ${r} 0 0 ${term} 0 ${-r}Z`;
  return (
    <g>
      <circle r={r} className={styles.moonDark} />
      <path d={d} className={styles.moonLit} />
    </g>
  );
}

/** Thirty tithis around the moon, the current one highlighted. */
function TithiWheel({ index, e }: { index: number; e: number }) {
  const R = 92;
  const arc = (i: number) => {
    // Amavasya at the top, Purnima at the bottom, the month running clockwise.
    const a0 = ((i * 12 - 90) * Math.PI) / 180;
    const a1 = (((i + 1) * 12 - 90 - 1.2) * Math.PI) / 180;
    return `M${R * Math.cos(a0)} ${R * Math.sin(a0)} A${R} ${R} 0 0 1 ${R * Math.cos(a1)} ${R * Math.sin(a1)}`;
  };
  return (
    <svg viewBox="-110 -110 220 220" className={styles.wheel} role="img" aria-label={`Tithi ${index + 1} of 30`}>
      {Array.from({ length: 30 }, (_, i) => (
        <path key={i} d={arc(i)} className={`${styles.seg} ${i < 15 ? styles.segS : styles.segK} ${i === index ? styles.segOn : ''}`}>
          <title>
            {i < 15 ? 'Shukla' : 'Krishna'} {tithiName(i)}
          </title>
        </path>
      ))}
      <MoonShape e={e} r={48} />
      <text y={-100} textAnchor="middle" className={styles.wheelLabel} dy="-2">
        Amavasya
      </text>
      <text y={108} textAnchor="middle" className={styles.wheelLabel}>
        Purnima
      </text>
      <text x={-104} y={4} textAnchor="middle" className={styles.wheelSide}>
        K
      </text>
      <text x={104} y={4} textAnchor="middle" className={styles.wheelSide}>
        S
      </text>
    </svg>
  );
}

export default function Calendar() {
  const today = todayIST();
  const [day, setDay] = useState(isoDay(today));
  const isToday = day === isoDay(today);
  const p = useMemo(() => {
    if (isToday) return panchanga(new Date());
    const [y, m, d] = day.split('-').map(Number);
    return panchanga(sunriseIST(y, m - 1, d));
  }, [day, isToday]);
  const upcoming = useMemo(() => upcomingFestivals(festivals), []);

  return (
    <>
      <PageHeader
        eyebrow="Panchanga — the five limbs of time"
        title="Hindu Calendar"
        sub="The Hindu calendar follows both the moon and the sun. Its almanac, the panchanga, gives five things for every day: tithi, weekday, nakshatra, yoga and karana. Here they are for today, worked out in your browser, with the months, the sixty-year cycle and the coming festivals."
      />

      {/* ——— Today ——— */}
      <section className={styles.section}>
        <div className={styles.todayHead}>
          <h2>{isToday ? 'Right now, in India' : 'At sunrise on the chosen day'}</h2>
          <label className={styles.picker}>
            Date{' '}
            <input type="date" value={day} onChange={(e) => e.target.value && setDay(e.target.value)} />
            {!isToday && (
              <button type="button" onClick={() => setDay(isoDay(today))}>
                Today
              </button>
            )}
          </label>
        </div>

        <div className={styles.today}>
          <div className={styles.wheelBox}>
            <TithiWheel index={p.tithiIndex} e={p.elongation} />
            <p className={styles.bigTithi}>
              {p.paksha} {p.tithi}
            </p>
            <p className={styles.progress}>
              <span style={{ width: `${p.tithiProgress * 100}%` }} />
            </p>
            <small className={styles.muted}>{Math.round(p.tithiProgress * 100)}% of this tithi has passed</small>
          </div>

          <dl className={styles.limbGrid}>
            {(
              [
                ['Tithi', `${p.paksha} ${p.tithi}`, `lunar day ${p.tithiIndex + 1} of 30`],
                ['Vara', p.vara, `day of the ${p.varaGraha}`],
                ['Nakshatra', p.nakshatra, `deity: ${p.nakshatraDeity}`],
                ['Yoga', p.yoga, 'sun + moon'],
                ['Karana', p.karana, 'half-tithi'],
                ['Masa', `${p.adhika ? 'Adhika ' : ''}${p.masa}`, p.adhika ? 'an extra (leap) month' : 'amanta month'],
                ['Ritu', p.ritu, 'season'],
                ['Sun · Moon in', `${p.sunRashi} · ${p.moonRashi}`, 'sidereal signs (rashi)'],
                ['Samvatsara', p.samvatsara, `year ${p.samvatsaraIndex + 1} of 60`],
                ['Era', `Shaka ${p.shaka} · Vikram ${p.vikram}`, `from Chaitra ${p.yearStart}`],
              ] as [string, string, string][]
            ).map(([k, v, n], i) => (
              <div key={k} className={i < 5 ? styles.limb : styles.extra}>
                <dt>{k}</dt>
                <dd>
                  {v}
                  <small>{n}</small>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className={styles.note}>
          Computed for India (IST) with the Lahiri ayanamsa, with sunrise taken as 06:00. Positions are accurate to a fraction of a degree, so near a boundary a printed
          panchanga for your town may differ by one step. For rituals, follow your local panchanga.
        </p>
      </section>

      {/* ——— Five limbs ——— */}
      <section className={styles.section}>
        <h2>The five limbs (pancha-anga)</h2>
        <div className={styles.limbsExplained}>
          {limbs.map((l, i) => (
            <div key={l.name}>
              <span className={styles.limbNo}>{i + 1}</span>
              <b>
                {l.name} <span className="deva">{l.sanskrit}</span>
              </b>
              <p>{l.what}</p>
              <small>{l.count}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Month ——— */}
      <section className={styles.section}>
        <h2>The lunar month and its two halves</h2>
        <div className={styles.phases}>
          {Array.from({ length: 9 }, (_, i) => i * 45).map((e) => (
            <svg key={e} viewBox="-22 -22 44 44" className={styles.phase} aria-hidden="true">
              <MoonShape e={e % 360} r={18} />
            </svg>
          ))}
        </div>
        <div className={styles.halves}>
          <div className={styles.half}>
            <b>Shukla paksha</b>
            <p>{pakshas.shukla}</p>
          </div>
          <div className={`${styles.half} ${styles.halfK}`}>
            <b>Krishna paksha</b>
            <p>{pakshas.krishna}</p>
          </div>
        </div>

        <h3 className={styles.sub}>Where does a month end? Amanta and purnimanta</h3>
        <div className={styles.systems}>
          <div>
            <b>Amanta</b> <small>ends at the new moon · South and West India</small>
            <div className={styles.band}>
              <span className={styles.bS}>Shukla</span>
              <span className={styles.bK}>Krishna</span>
            </div>
          </div>
          <div>
            <b>Purnimanta</b> <small>ends at the full moon · North India</small>
            <div className={styles.band}>
              <span className={styles.bK}>Krishna</span>
              <span className={styles.bS}>Shukla</span>
            </div>
          </div>
        </div>
        <p className={styles.help}>
          The bright fortnight has the same month name in both. The dark fortnight belongs to the next month in the North. That is why Janmashtami falls in “Shravana” in
          the South and “Bhadrapada” in the North, on the same day. This page uses amanta.
        </p>

        <h3 className={styles.sub}>The twelve months</h3>
        <p className={styles.help}>
          Each is named after the nakshatra near which its full moon falls. When a lunar month passes with no sankranti (the sun changing sign), it is repeated as an
          adhika (extra) month, about every 32½ months, keeping the lunar year in step with the seasons.
        </p>
        <div className={styles.months}>
          {MASAS.map((m, i) => (
            <div key={m} className={`${styles.month} ${i === p.masaIndex ? styles.monthOn : ''}`}>
              <span className={styles.mNo}>{i + 1}</span>
              <b>{m}</b>
              <small>full moon in {monthNakshatra[i]}</small>
              <small>
                {monthSpan[i]} · {RITUS[Math.floor(i / 2)].split(' ')[0]}
              </small>
            </div>
          ))}
        </div>

        <h3 className={styles.sub}>The five groups of tithis</h3>
        <div className={styles.groups}>
          {tithiGroups.map((g) => (
            <div key={g.name}>
              <b>{g.name}</b>
              <small>{g.meaning}</small>
              <span>tithis {g.tithis}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Nakshatras ——— */}
      <section className={styles.section}>
        <h2>The 27 nakshatras</h2>
        <p className={styles.help}>
          The moon passes through one lunar mansion a day, each 13°20′ of the sky, starting from Ashvini. In the Puranas the nakshatras are daughters of Daksha, married to
          Soma, the Moon. Each has a presiding deity.
        </p>
        <ol className={styles.naks}>
          {NAKSHATRAS.map((n, i) => (
            <li key={n.name} className={i === p.nakshatraIndex ? styles.nakOn : undefined}>
              <span>{i + 1}</span>
              <b>{n.name}</b>
              <small>{n.deity}</small>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Samvatsara ——— */}
      <section className={styles.section}>
        <h2>The sixty-year cycle (samvatsara)</h2>
        <p className={styles.help}>
          Years are named in a cycle of sixty, which the Brihat Samhita ties to the orbit of Jupiter (five twelve-year rounds). The year and its name change at Ugadi,
          Chaitra Shukla 1. This is the reckoning used in the South and West; North India counts the Jovian years differently.
        </p>
        <ol className={styles.years}>
          {SAMVATSARAS.map((s, i) => (
            <li key={s} className={i === p.samvatsaraIndex ? styles.yearOn : undefined} title={`${1987 + i}–${String(1988 + i).slice(2)} / ${2047 + i}–${String(2048 + i).slice(2)}`}>
              <span>{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Festivals ——— */}
      <section className={styles.section}>
        <h2>Coming festivals</h2>
        <p className={styles.help}>
          Worked out from the tithi at the time each festival is kept: sunrise for most, evening for Diwali and Holika, midnight for Shivaratri and Janmashtami. Regional
          practice and local sunrise can move a date by a day.
        </p>
        <ol className={styles.fests}>
          {upcoming.map((f) => (
            <li key={f.rule.id}>
              <time>{fmtDate(f.date)}</time>
              <div>
                <b>{f.rule.name}</b>
                <small>{f.rule.note}</small>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Sources items={calendarSources} />
    </>
  );
}
