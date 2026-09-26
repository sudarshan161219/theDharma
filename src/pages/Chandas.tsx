import { useMemo, useState } from 'react';
import { chandasSources, examples, ganas, mnemonic, ruleVerse, template, vedicMetres, weightRules, type Slot } from '../data/chandas';
import { scanVerse, type PadaCheck, type Weight } from '../lib/prosody';
import { PageHeader, Sources } from '../components/ui';
import styles from './Chandas.module.css';

const SYMBOL: Record<Weight, string> = { L: '⏑', G: '—' };
const SLOT_LABEL: Record<Slot, string> = { free: 'free', L: 'must be laghu', G: 'must be guru', anceps: 'either (end of pada)' };

/** The empty 4 × 8 template, with the fixed positions coloured. */
function Template() {
  return (
    <div className={styles.grid} role="table" aria-label="Shloka template: 4 padas of 8 syllables">
      {template.map((row, r) => (
        <div key={r} className={`${styles.row} ${r === 1 ? styles.halfEnd : ''}`} role="row">
          <span className={styles.rowLabel} role="rowheader">
            Pada {r + 1}
            <small>{r % 2 === 0 ? 'odd' : 'even'}</small>
          </span>
          {row.map((slot, c) => (
            <span key={c} className={`${styles.cell} ${styles['s' + slot]}`} role="cell" title={`Syllable ${c + 1}: ${SLOT_LABEL[slot]}`}>
              <b>{c + 1}</b>
              <i>{slot === 'L' ? SYMBOL.L : slot === 'G' ? SYMBOL.G : slot === 'anceps' ? '×' : '·'}</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** A scanned verse on the same grid, with rule checks per pada. */
function ScanGrid({ padas }: { padas: PadaCheck[] }) {
  return (
    <div className={styles.grid}>
      {padas.map((p, r) => {
        const tpl = template[(p.n - 1) % 4];
        return (
          <div key={r} className={`${styles.scanRow} ${r === 1 ? styles.halfEnd : ''}`}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>
                Pada {p.n}
                <small>{p.n % 2 === 1 ? 'odd' : 'even'}</small>
              </span>
              {p.syllables.map((s, c) => {
                const slot = tpl[c] ?? 'free';
                const broken = (slot === 'L' || slot === 'G') && slot !== s.weight;
                return (
                  <span
                    key={c}
                    className={`${styles.cell} ${styles['w' + s.weight]} ${slot !== 'free' && slot !== 'anceps' ? styles.fixed : ''} ${broken ? styles.broken : ''}`}
                    title={`${c + 1}. ${s.text}: ${s.weight === 'G' ? 'guru' : 'laghu'} (${s.why})${slot !== 'free' ? ` · rule: ${SLOT_LABEL[slot]}` : ''}`}
                  >
                    <b>{s.text}</b>
                    <i>{SYMBOL[s.weight]}</i>
                  </span>
                );
              })}
            </div>
            <ul className={styles.checks}>
              {p.rules.map((rule) => (
                <li key={rule.label} className={rule.ok ? styles.ok : styles.no}>
                  {rule.ok ? '✓' : '✗'} {rule.label}
                  {!rule.ok && rule.note ? ` (${rule.note})` : ''}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Scanner() {
  const [text, setText] = useState(examples[1].text);
  const result = useMemo(() => scanVerse(text), [text]);
  const allOk = result?.padas.length === 4 && result.padas.every((p) => p.rules.every((r) => r.ok));
  return (
    <div className={styles.scanner}>
      <label htmlFor="verse" className={styles.scanLabel}>
        Paste a verse in IAST (dharmakṣetre…) or Devanagari (धर्मक्षेत्रे…). Separate the lines with | or ।, or a new line.
      </label>
      <textarea id="verse" value={text} onChange={(e) => setText(e.target.value)} rows={3} spellCheck={false} />
      <div className={styles.try}>
        Try:
        {examples.map((e) => (
          <button key={e.id} onClick={() => setText(e.text)}>
            {e.ref}
          </button>
        ))}
        <button onClick={() => setText('धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥')}>Gita 1.1 (देवनागरी)</button>
      </div>
      {result ? (
        <>
          <p className={`${styles.verdict} ${allOk ? styles.good : ''}`}>
            {result.total} syllables in {result.padas.length} padas.{' '}
            {allOk
              ? 'A regular shloka: every classical rule is met.'
              : result.padas.length === 4 && result.total === 32
                ? 'Thirty-two syllables. Some positions depart from the strict pattern (see ✗ below). The epics often allow such variations (vipulā).'
                : 'Not the 4 × 8 shape of an Anushtubh. It may be another metre, or check the line breaks.'}
          </p>
          <ScanGrid padas={result.padas} />
        </>
      ) : (
        <p className={styles.verdict}>Type a verse to scan it.</p>
      )}
      <p className={styles.fine}>
        Hover a syllable to see why it is laghu or guru. The scanner follows the standard rules of weight and does not handle every sandhi subtlety or Vedic accent.
      </p>
    </div>
  );
}

function GanaMnemonic() {
  const [start, setStart] = useState(0);
  const g = ganas[start];
  return (
    <div className={styles.mnemo}>
      <div className={styles.strip} aria-label="yamātārājabhānasalagā">
        {mnemonic.map((m, i) => (
          <span key={i} className={`${styles.msyl} ${i >= start && i < start + 3 ? styles.win : ''}`}>
            <b>{m.syl}</b>
            <i>{SYMBOL[m.weight]}</i>
          </span>
        ))}
      </div>
      <div className={styles.ganaButtons} role="group" aria-label="Choose a gana">
        {ganas.map((x, i) => (
          <button key={x.name} onClick={() => setStart(i)} className={i === start ? styles.on : undefined} aria-pressed={i === start}>
            {x.name}
          </button>
        ))}
      </div>
      <p className={styles.ganaNow}>
        <strong>{g.name}</strong> = {g.example} ={' '}
        <span className={styles.pattern}>
          {mnemonic
            .slice(g.start, g.start + 3)
            .map((m) => SYMBOL[m.weight])
            .join(' ')}
        </span>
      </p>
    </div>
  );
}

export default function Chandas() {
  const scannedExamples = useMemo(() => examples.map((e) => ({ ...e, scan: scanVerse(e.text)! })), []);

  return (
    <>
      <PageHeader
        eyebrow="Chandas — the science of metre"
        title="Anuṣṭubh: the shloka metre"
        sub="The metre of the Ramayana, the Mahabharata, the Bhagavad Gita and almost all the Puranas. Four quarters of eight syllables each: thirty-two syllables that carry most of Hindu scripture."
      />

      <section className={styles.section}>
        <div className={styles.defn}>
          <div>
            <h2>What it is</h2>
            <p>
              <strong>Anuṣṭubh</strong> (अनुष्टुभ्), classically called the <strong>śloka</strong>, is a metre (chandas) of <strong>4 pādas × 8 syllables = 32 syllables</strong>.
              The four pādas pair into two half-verses (ardha) of 16 syllables, each ending with a daṇḍa (।), and the verse closes with a double daṇḍa (॥).
            </p>
            <p>
              Sanskrit metre is built on <strong>syllable weight</strong>, not stress. Each syllable is either <em>laghu</em> (light, one beat) or <em>guru</em> (heavy, two beats). In the
              Vedic Anuṣṭubh the count of eight mattered most, with only a loose tendency towards a light-heavy close. The classical shloka fixes the weight of syllables 5, 6 and 7 of each pāda, which gives it its unmistakable cadence.
            </p>
          </div>
          <div className={styles.origin}>
            <h3>How it was born</h3>
            <p>
              Tradition calls Valmiki the <em>ādi-kavi</em>, the first poet. Seeing a hunter kill one of a pair of krauncha birds, his grief (<em>śoka</em>) poured out as a verse in
              perfect metre, and so it was called <em>śloka</em>. Brahma then asked him to tell the story of Rama in it.
            </p>
            <a href={examples[0].link}>The Ramayana →</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The shape of a shloka</h2>
        <p className={styles.help}>
          Each row is a pāda of 8 syllables. Coloured boxes are fixed by rule; grey ones are free. The last syllable of every pāda can be either weight.
        </p>
        <Template />
        <div className={styles.legend}>
          <span>
            <i className={`${styles.key} ${styles.sL}`}>⏑</i> must be laghu
          </span>
          <span>
            <i className={`${styles.key} ${styles.sG}`}>—</i> must be guru
          </span>
          <span>
            <i className={`${styles.key} ${styles.sfree}`}>·</i> free
          </span>
          <span>
            <i className={`${styles.key} ${styles.sanceps}`}>×</i> either (end of pāda)
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <h2>The rules, in one verse</h2>
        <div className={styles.ruleVerse}>
          <p className="deva">{ruleVerse.sanskrit}</p>
          <p className={styles.iast}>{ruleVerse.iast}</p>
          <p className={styles.meaning}>“{ruleVerse.meaning}”</p>
        </div>
        <ol className={styles.rules}>
          <li>
            <span className={styles.ruleNum}>5</span>
            <div>
              <strong>The 5th syllable is laghu</strong> in every pāda.
            </div>
          </li>
          <li>
            <span className={styles.ruleNum}>6</span>
            <div>
              <strong>The 6th syllable is guru</strong> in every pāda.
            </div>
          </li>
          <li>
            <span className={styles.ruleNum}>7</span>
            <div>
              <strong>The 7th syllable alternates:</strong> guru in pādas 1 and 3, laghu in pādas 2 and 4. So each half-verse ends <em>⏑ — — ×</em> then <em>⏑ — ⏑ ×</em>.
            </div>
          </li>
          <li>
            <span className={styles.ruleNum}>2·3</span>
            <div>
              <strong>Syllables 2 and 3 are not both laghu.</strong> This refinement keeps the opening from tripping.
            </div>
          </li>
          <li>
            <span className={styles.ruleNum}>8</span>
            <div>
              <strong>The last syllable may be either</strong> (pādānta). A pause follows it.
            </div>
          </li>
        </ol>
        <p className={styles.help}>
          The epics also allow some variations (<em>vipulā</em>) in the odd pādas, where the 5th to 7th syllables differ from the standard pattern. The scanner below flags these
          as variations rather than errors.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Laghu and guru: light and heavy</h2>
        <div className={styles.weights}>
          {weightRules.map((w) => (
            <article key={w.rule} className={`${styles.weight} ${w.weight === 'G' ? styles.wGcard : styles.wLcard}`}>
              <div className={styles.beats} aria-hidden>
                <span className={styles.beat} />
                {w.weight === 'G' && <span className={styles.beat} />}
              </div>
              <span className={styles.symbol}>
                {SYMBOL[w.weight]} {w.weight === 'G' ? 'guru' : 'laghu'}
              </span>
              <p>{w.rule}</p>
              <p className={styles.eg}>
                <strong>{w.example}</strong>
                <small>{w.exampleNote}</small>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Gaṇas: the building blocks</h2>
        <p className={styles.help}>
          Pingala’s Chandaḥsūtra describes metres in groups of three syllables, the eight <em>gaṇas</em>. Students remember them with one word, <em>yamātārājabhānasalagā</em>.
          Slide a window of three along it: each window’s first syllable names the gaṇa whose pattern it shows. The shloka’s standard odd-pāda ending ⏑ — — is a{' '}
          <em>ya-gaṇa</em>; its even-pāda ending ⏑ — ⏑ is a <em>ja-gaṇa</em>.
        </p>
        <GanaMnemonic />
      </section>

      <section className={styles.section}>
        <h2>Two famous shlokas, scanned</h2>
        {scannedExamples.map((e) => (
          <article key={e.id} className={styles.example}>
            <div className={styles.exHead}>
              <h3>{e.title}</h3>
              <span>{e.ref}</span>
            </div>
            <p className={styles.iast}>{e.text}</p>
            <p className={styles.help}>{e.note}</p>
            <ScanGrid padas={e.scan.padas} />
          </article>
        ))}
      </section>

      <section className={styles.section} id="scanner">
        <h2>Scan any verse</h2>
        <Scanner />
      </section>

      <section className={styles.section}>
        <h2>The Anuṣṭubh among the Vedic metres</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Metre</th>
              <th scope="col">Shape</th>
              <th scope="col">Syllables</th>
              <th scope="col">Where</th>
            </tr>
          </thead>
          <tbody>
            {vedicMetres.map((m) => (
              <tr key={m.name} className={m.name === 'Anuṣṭubh' ? styles.hl : undefined}>
                <th scope="row">{m.name}</th>
                <td>
                  {m.padas} × {m.syllables}
                </td>
                <td>{m.padas * m.syllables}</td>
                <td>{m.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.help}>
          Chandas is one of the six Vedāṅgas, the limbs of the Veda. Its classic text is the Chandaḥsūtra of Pingala.
        </p>
      </section>

      <Sources items={chandasSources} />
    </>
  );
}
