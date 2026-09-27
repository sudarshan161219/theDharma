import { useEffect, type CSSProperties, type ReactNode } from 'react';
import {
  allFontsHref,
  BODY_FONTS,
  DEFAULTS,
  DEVA_FONTS,
  DISPLAY_FONTS,
  HEADING_WEIGHTS,
  LEADINGS,
  resetPrefs,
  setLink,
  setPrefs,
  SIZES,
  THEMES,
  usePrefs,
  WEIGHTS,
  type FontOption,
  type Prefs,
} from '../lib/prefs';
import { PageHeader } from '../components/ui';
import styles from './Settings.module.css';

/** One set of radio buttons, drawn as cards or as a segmented row. */
function Choice<T extends string | number>({
  legend,
  help,
  name,
  options,
  value,
  onChange,
  layout = 'segments',
}: {
  legend: string;
  help?: string;
  name: string;
  options: { value: T; label: ReactNode; key?: string }[];
  value: T;
  onChange: (v: T) => void;
  layout?: 'segments' | 'cards' | 'themes';
}) {
  return (
    <fieldset className={styles.group}>
      <legend>{legend}</legend>
      {help && <p className={styles.help}>{help}</p>}
      <div className={styles[layout]}>
        {options.map((o) => (
          <label key={o.key ?? String(o.value)} className={styles.option}>
            <input type="radio" name={name} className="visually-hidden" checked={o.value === value} onChange={() => onChange(o.value)} />
            <span className={styles.face}>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function FontCard({ f, sample, deva = false }: { f: FontOption; sample: string; deva?: boolean }) {
  return (
    <>
      <span className={deva ? styles.sampleDeva : styles.sample} style={{ fontFamily: f.stack === 'var(--font-body)' ? 'var(--font-body)' : f.stack }}>
        {sample}
      </span>
      <b>{f.label}</b>
      <small>{f.about}</small>
    </>
  );
}

const isDefault = (p: Prefs) => (Object.keys(DEFAULTS) as (keyof Prefs)[]).every((k) => p[k] === DEFAULTS[k]);

export default function Settings() {
  const p = usePrefs();

  // Load every font on offer, so each choice can be shown in its own face.
  useEffect(() => {
    setLink('settings-fonts', allFontsHref());
    return () => setLink('settings-fonts', null);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Make it yours"
        title="Settings"
        sub="Choose a theme, text size and fonts to make theDharma comfortable to read. Changes apply at once, and are remembered in this browser only; nothing is sent anywhere."
      />

      <div className={styles.layout}>
        <div className={styles.controls}>
          <Choice
            legend="Theme"
            name="theme"
            layout="themes"
            value={p.theme}
            onChange={(theme) => setPrefs({ theme })}
            options={THEMES.map((t) => ({
              value: t.id,
              label: (
                <>
                  <span className={styles.swatch} style={{ '--s0': t.swatch[0], '--s1': t.swatch[1], '--s2': t.swatch[2], '--s3': t.swatch[3] } as CSSProperties} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>
                    {t.icon} {t.label}
                  </b>
                  <small>{t.about}</small>
                </>
              ),
            }))}
          />

          <Choice
            legend="Text size"
            help="Scales all the text on the site, and the spacing with it."
            name="size"
            value={p.scale}
            onChange={(scale) => setPrefs({ scale })}
            options={SIZES.map((s) => ({
              value: s.value,
              label: (
                <>
                  <span className={styles.aa} style={{ fontSize: `${1.1 * s.value}rem` }} aria-hidden="true">
                    Aa
                  </span>
                  {s.label}
                </>
              ),
            }))}
          />

          <Choice
            legend="Text font"
            name="body"
            layout="cards"
            value={p.body}
            onChange={(body) => setPrefs({ body })}
            options={BODY_FONTS.map((f) => ({ value: f.id, label: <FontCard f={f} sample="Who tells the Purana, and to whom?" /> }))}
          />

          <Choice
            legend="Heading font"
            name="display"
            layout="cards"
            value={p.display}
            onChange={(display) => setPrefs({ display })}
            options={DISPLAY_FONTS.map((f) => ({ value: f.id, label: <FontCard f={f} sample="The Shiva Purana" /> }))}
          />

          <Choice
            legend="Sanskrit (Devanagari) font"
            name="deva"
            layout="cards"
            value={p.deva}
            onChange={(deva) => setPrefs({ deva })}
            options={DEVA_FONTS.map((f) => ({ value: f.id, label: <FontCard f={f} sample="ॐ नमः शिवाय" deva /> }))}
          />

          <Choice
            legend="Text thickness"
            name="weight"
            value={p.weight}
            onChange={(weight) => setPrefs({ weight })}
            options={WEIGHTS.map((w) => ({ value: w.value, label: <span style={{ fontWeight: w.value }}>{w.label}</span> }))}
          />

          <Choice
            legend="Heading thickness"
            name="headingWeight"
            value={p.headingWeight}
            onChange={(headingWeight) => setPrefs({ headingWeight })}
            options={HEADING_WEIGHTS.map((w) => ({
              value: w.value,
              label: (
                <span className={styles.headingSample} style={{ fontWeight: w.value }}>
                  {w.label}
                </span>
              ),
            }))}
          />

          <Choice
            legend="Line spacing"
            name="leading"
            value={p.leading}
            onChange={(leading) => setPrefs({ leading })}
            options={LEADINGS.map((l) => ({
              value: l.value,
              label: (
                <>
                  <span className={styles.lines} style={{ '--gap': `${(l.value - 1) * 10}px` } as CSSProperties} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  {l.label}
                </>
              ),
            }))}
          />

          <div className={styles.reset}>
            <button type="button" onClick={resetPrefs} disabled={isDefault(p)}>
              Reset to defaults
            </button>
            <small>Dark theme, default size, Inter and Cormorant Garamond.</small>
          </div>
        </div>

        <aside className={styles.previewWrap} aria-label="Preview">
          <span className={styles.previewLabel}>Preview</span>
          <div className={styles.preview}>
            <span className={styles.eyebrow}>Mahapurana</span>
            <h2>The Shiva Purana</h2>
            <p>
              Suta tells the sages of Naimisharanya how Vyasa condensed a hundred thousand verses into seven samhitas, for the people of the Kali age.{' '}
              <a href="#/scriptures/shiva-purana">Read more</a>
            </p>
            <p className={`deva ${styles.verse}`}>ॐ नमः शिवाय</p>
            <p className={styles.iast}>oṃ namaḥ śivāya</p>
            <ul className={styles.chips}>
              <li>Tamasic</li>
              <li>24,000 verses</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
