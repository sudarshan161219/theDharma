import { useMemo, useState } from 'react';
import { brahmaElapsedAtYear, eras, locate, manuName, presets, toAstroYear, type Position } from '../lib/cosmicPosition';
import { fmt, human } from '../lib/time';
import styles from './TimeCalculator.module.css';

type Mode = 'year' | 'offset' | 'preset';

const PHASE: Record<string, string> = { dawn: 'dawn twilight (sandhya)', main: 'main period', dusk: 'dusk twilight (sandhyamsha)' };
const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function Bar({ label, value, frac, tone = 'gold' }: { label: string; value: string; frac: number | null; tone?: 'gold' | 'accent' | 'indigo' }) {
  return (
    <div className={styles.bar}>
      <div className={styles.barHead}>
        <span className={styles.barLabel}>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className={styles.track} aria-hidden>
        {frac !== null && <span className={`${styles.fill} ${styles[tone]}`} style={{ width: `${Math.min(100, Math.max(0.4, frac * 100))}%` }} />}
      </div>
    </div>
  );
}

function Result({ pos, astroYear }: { pos: Position; astroYear: number | null }) {
  const nowB = brahmaElapsedAtYear(new Date().getFullYear());
  const diff = pos.B - nowB;
  const when = diff === 0 ? 'This year' : `${fmt(Math.abs(diff))} years ${diff < 0 ? 'ago' : 'from now'} (${human(Math.abs(diff))})`;

  let headline: string;
  if (pos.isNight) headline = `Brahma’s night: the worlds rest in dissolution, ${human(pos.kalpaYears)} years into the night`;
  else if (pos.sandhiAfter === 0) headline = 'The opening twilight of the kalpa, before the first Manu';
  else if (pos.sandhiAfter) headline = `The deluge-twilight after the ${ordinal(pos.sandhiAfter)} manvantara (${manuName(pos.sandhiAfter)})`;
  else headline = `${pos.yuga!.name}, year ${fmt(pos.yearOfYuga!)} — ${PHASE[pos.phase!]}`;

  return (
    <div className={styles.result} aria-live="polite">
      <p className={styles.when}>{when}</p>
      <h3 className={styles.headline}>{headline}</h3>

      <div className={styles.bars}>
        <Bar label="Life of Brahma" value={`Year ${pos.brahmaYear} of 100 · day ${pos.brahmaDay}${pos.isNight ? ' (night)' : ''}`} frac={pos.frac.life} tone="accent" />
        <Bar label={pos.isNight ? 'Night of Brahma' : 'Kalpa'} value={pos.isNight ? `${human(pos.kalpaYears)} of 4.32 billion years` : pos.kalpaName} frac={pos.frac.kalpa} tone="accent" />
        {pos.manvantara && (
          <>
            <Bar label="Manvantara" value={`${ordinal(pos.manvantara)} of 14 · ${manuName(pos.manvantara)} Manu`} frac={pos.frac.manvantara} />
            <Bar label="Mahayuga" value={`${ordinal(pos.mahayuga!)} of 71`} frac={pos.frac.mahayuga} />
            <Bar label="Yuga" value={`${pos.yuga!.name.split(' (')[0]} · ${fmt(pos.yugaRemaining!)} years left`} frac={pos.frac.yuga} tone="indigo" />
          </>
        )}
      </div>

      {pos.manvantara && (
        <div className={styles.facts}>
          <span>
            Dharma stands on <strong>{pos.yuga!.dharmaLegs} of 4</strong> legs
          </span>
          <span>
            Lifespan: <strong>{pos.yuga!.lifespan}</strong>
          </span>
          <span>
            Path: <strong>{pos.yuga!.practice}</strong>
          </span>
          <a href={`#/manvantaras?n=${pos.manvantara}`}>Who were the Manu, Indra and Saptarishis then? →</a>
        </div>
      )}

      {astroYear !== null && (
        <div className={styles.eras}>
          {(() => {
            const e = eras(astroYear);
            return (
              <>
                <span>
                  Kali year <strong>{e.kali > 0 ? fmt(e.kali) : '— (before Kali)'}</strong>
                </span>
                <span>
                  Vikram Samvat <strong>{e.vikram > 0 ? fmt(e.vikram) : '— (before the era)'}</strong>
                </span>
                <span>
                  Shaka <strong>{e.shaka > 0 ? fmt(e.shaka) : '— (before the era)'}</strong>
                </span>
              </>
            );
          })()}
          <small>Approximate: the Hindu new year falls in March–April.</small>
        </div>
      )}
    </div>
  );
}

export default function TimeCalculator() {
  const [mode, setMode] = useState<Mode>('year');
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [era, setEra] = useState<'CE' | 'BCE'>('CE');
  const [offset, setOffset] = useState('10000');
  const [dir, setDir] = useState<'ago' | 'ahead'>('ago');
  const [preset, setPreset] = useState('rama');

  const { outcome, astroYear } = useMemo(() => {
    if (mode === 'year') {
      const y = Number(year);
      if (!year.trim() || !Number.isInteger(y) || y < 1) return { outcome: { ok: false as const, reason: 'Enter a whole year, e.g. 2026 CE or 3102 BCE (there is no year 0).' }, astroYear: null };
      const a = toAstroYear(y, era);
      return { outcome: locate(brahmaElapsedAtYear(a)), astroYear: a };
    }
    if (mode === 'offset') {
      const n = Number(offset.replace(/[,\s_]/g, ''));
      if (!Number.isFinite(n) || n < 0) return { outcome: { ok: false as const, reason: 'Enter a positive number of years.' }, astroYear: null };
      const nowB = brahmaElapsedAtYear(new Date().getFullYear());
      const B = dir === 'ago' ? nowB - n : nowB + n;
      const a = n <= 10_000 ? new Date().getFullYear() + (dir === 'ago' ? -n : n) : null;
      return { outcome: locate(B), astroYear: a !== null && Number.isInteger(a) ? a : null };
    }
    const p = presets.find((x) => x.id === preset)!;
    return { outcome: locate(p.B()), astroYear: p.year ? toAstroYear(p.year.value, p.year.era) : p.id === 'now' ? new Date().getFullYear() : null };
  }, [mode, year, era, offset, dir, preset]);

  return (
    <div className={styles.calc}>
      <div className={styles.modes} role="tablist" aria-label="Input">
        {(
          [
            ['year', 'A calendar year'],
            ['offset', 'Years from now'],
            ['preset', 'Sacred moments'],
          ] as [Mode, string][]
        ).map(([k, l]) => (
          <button key={k} role="tab" aria-selected={mode === k} className={mode === k ? styles.on : undefined} onClick={() => setMode(k)}>
            {l}
          </button>
        ))}
      </div>

      <div className={styles.inputs}>
        {mode === 'year' && (
          <>
            <label>
              Year
              <input inputMode="numeric" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <label>
              Era
              <select value={era} onChange={(e) => setEra(e.target.value as 'CE' | 'BCE')}>
                <option value="CE">CE</option>
                <option value="BCE">BCE</option>
              </select>
            </label>
          </>
        )}
        {mode === 'offset' && (
          <>
            <label>
              Years
              <input inputMode="numeric" value={offset} onChange={(e) => setOffset(e.target.value)} />
            </label>
            <label>
              Direction
              <select value={dir} onChange={(e) => setDir(e.target.value as 'ago' | 'ahead')}>
                <option value="ago">ago</option>
                <option value="ahead">from now</option>
              </select>
            </label>
          </>
        )}
        {mode === 'preset' && (
          <div className={styles.presets}>
            {presets.map((p) => (
              <button key={p.id} className={preset === p.id ? styles.on : undefined} onClick={() => setPreset(p.id)} title={p.note}>
                {p.label}
              </button>
            ))}
            <p className={styles.presetNote}>{presets.find((p) => p.id === preset)!.note}</p>
          </div>
        )}
      </div>

      {outcome.ok ? <Result pos={outcome.pos} astroYear={astroYear} /> : <p className={styles.error}>{outcome.reason}</p>}
    </div>
  );
}
