import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { href, navigate } from "../lib/router";
import styles from "./Layout.module.css";

const NAV = [
  { key: "scriptures", label: "Scriptures" },
  { key: "vedas", label: "Vedas" },
  { key: "time", label: "Cosmic Time" },
  { key: "calendar", label: "Calendar" },
  { key: "manvantaras", label: "Manvantaras" },
  { key: "dynasties", label: "Dynasties" },
  { key: "vyasas", label: "Vyasas" },
  { key: "people", label: "Rishis" },
  { key: "devas", label: "Devas" },
  { key: "forms", label: "Divine Forms" },
  { key: "epithets", label: "Epithets" },
  { key: "gotra", label: "Gotras" },
  { key: "avatars", label: "Avatars" },
  { key: "acharyas", label: "Acharyas" },
  { key: "darshanas", label: "Darshanas" },
  { key: "trika", label: "Kashmir Shaivism" },
  { key: "siddhanta", label: "Shaiva Siddhanta" },
  { key: "vishishtadvaita", label: "Vishishtadvaita" },
  { key: "dvaita", label: "Dvaita" },
  { key: "dharma", label: "Life & Dharma" },
  { key: "places", label: "Sacred Places" },
  { key: "regions", label: "Regions" },
  { key: "kuladevata", label: "Kuladevata" },
  { key: "chandas", label: "Chandas" },
  { key: "glossary", label: "Definitions" },
];

/** The desktop sidebar groups the same sections; the phone strip keeps the flat order above. */
const NAV_GROUPS: { label: string; keys: string[] }[] = [
  { label: "Texts", keys: ["scriptures", "vedas", "chandas", "glossary"] },
  { label: "Time", keys: ["time", "calendar", "manvantaras", "dynasties", "vyasas"] },
  { label: "The Divine", keys: ["devas", "forms", "epithets", "avatars"] },
  { label: "Philosophy", keys: ["darshanas", "trika", "siddhanta", "vishishtadvaita", "dvaita"] },
  { label: "People & lineage", keys: ["people", "acharyas", "gotra", "kuladevata"] },
  { label: "Life & places", keys: ["dharma", "places", "regions"] },
];

const LABELS = Object.fromEntries(NAV.map((n) => [n.key, n.label]));

type Theme = "dark" | "light" | "paper";

/** The toggle cycles through these, in order. */
const THEMES: { id: Theme; icon: string; label: string }[] = [
  { id: "dark", icon: "☾", label: "Dark" },
  { id: "light", icon: "☀", label: "Light" },
  { id: "paper", icon: "✒", label: "Paper ink" },
];

/**
 * Horizontally scrollable section nav: arrow buttons appear when there is more
 * to see on that side, and the strip can be dragged with a mouse or swiped.
 */
function NavScroller({ active }: { active: string }) {
  const ref = useRef<HTMLElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({
      left: el.scrollLeft > 2,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  // Keep the current section's tab in view.
  useEffect(() => {
    const el = ref.current;
    const link = el?.querySelector<HTMLElement>(`[data-key="${active}"]`);
    if (!el || !link) return;
    const target = link.offsetLeft - (el.clientWidth - link.offsetWidth) / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  // Mouse drag-to-slide (touch devices already swipe natively).
  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { down: true, startX: e.clientX, startScroll: ref.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d.down || !ref.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4) d.moved = true;
    if (d.moved) ref.current.scrollLeft = d.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };

  return (
    <div
      className={`${styles.navWrap} ${edges.left ? styles.fadeLeft : ""} ${edges.right ? styles.fadeRight : ""}`}
    >
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => step(-1)}
        aria-label="Scroll sections left"
        hidden={!edges.left}
      >
        ‹
      </button>
      <nav
        ref={ref}
        className={styles.nav}
        aria-label="Sections"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          // A drag should not also count as a click on the link under the pointer.
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
      >
        {NAV.map((n) => (
          <a
            key={n.key}
            data-key={n.key}
            href={href(n.key)}
            draggable={false}
            className={active === n.key ? styles.active : undefined}
            aria-current={active === n.key ? "page" : undefined}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => step(1)}
        aria-label="Scroll sections right"
        hidden={!edges.right}
      >
        ›
      </button>
    </div>
  );
}

/** Desktop: every section at once, in groups, in a sticky sidebar. */
function Sidebar({ active }: { active: string }) {
  const ref = useRef<HTMLElement>(null);

  // Keep the current section in view when the sidebar itself scrolls (never the page).
  useEffect(() => {
    const el = ref.current;
    const link = el?.querySelector<HTMLElement>(`[data-key="${active}"]`);
    if (!el || !link) return;
    const top = link.offsetTop;
    if (top < el.scrollTop || top + link.offsetHeight > el.scrollTop + el.clientHeight) {
      el.scrollTop = top - el.clientHeight / 2;
    }
  }, [active]);

  return (
    <nav ref={ref} className={styles.sidebar} aria-label="Sections">
      {NAV_GROUPS.map((g) => (
        <div key={g.label} className={styles.group}>
          <p className={styles.groupLabel}>{g.label}</p>
          <ul>
            {g.keys.map((k) => (
              <li key={k}>
                <a
                  data-key={k}
                  href={href(k)}
                  className={active === k ? styles.active : undefined}
                  aria-current={active === k ? "page" : undefined}
                >
                  {LABELS[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

/** Dark (pitch black) is the default; light and paper ink are opt-in and remembered. */
function readTheme(): Theme {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "paper" ? t : "dark";
  } catch {
    return "dark";
  }
}

export default function Layout({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  const [q, setQ] = useState("");
  const [theme, setTheme] = useState<Theme>(readTheme);
  const header = useRef<HTMLElement>(null);
  const shell = useRef<HTMLDivElement>(null);

  // The sidebar sticks just below the header, whatever its height.
  useEffect(() => {
    const h = header.current;
    if (!h) return;
    const ro = new ResizeObserver(() => shell.current?.style.setProperty("--header-h", `${h.offsetHeight}px`));
    ro.observe(h);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const current = THEMES.findIndex((t) => t.id === theme);
  const next = THEMES[(current + 1) % THEMES.length];

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className={styles.shell} ref={shell}>
      <header className={styles.header} ref={header}>
        <div className={styles.bar}>
          <a href="#/" className={styles.brand} aria-label="theDharma home">
            <span className={styles.mark} aria-hidden>
              ॐ
            </span>
            theDharma
          </a>
          <form className={styles.search} onSubmit={onSearch} role="search">
            <label htmlFor="q" className="visually-hidden">
              Search
            </label>
            <input
              id="q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search: Shiva Purana, Narada, Kali…"
            />
          </form>
          <button
            className={styles.theme}
            onClick={() => setTheme(next.id)}
            aria-label={`Theme: ${THEMES[current].label}. Switch to ${next.label}`}
            title={`Theme: ${THEMES[current].label} — click for ${next.label}`}
          >
            {THEMES[current].icon}
          </button>
        </div>
        <NavScroller active={active} />
      </header>
      <div className={styles.body}>
        <Sidebar active={active} />
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <p>
          Content is summarised from the translations hosted on{" "}
          <a href="https://www.wisdomlib.org/" target="_blank" rel="noreferrer">
            wisdomlib.org
          </a>{" "}
          (Wilson’s Vishnu Purana, Shastri’s Shiva Purana, Ganguli’s Mahabharata
          and others). Primary evidence (inscriptions and manuscripts) comes
          from{" "}
          <a
            href="https://smriti.midf.org.in/"
            target="_blank"
            rel="noreferrer"
          >
            Smriti by MIDF
          </a>
          . Every page links to its source. Names and counts can differ between
          Puranas and recensions — when in doubt, read the source.
        </p>
      </footer>
    </div>
  );
}
