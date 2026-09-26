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

/** Line icons for the collapsed sidebar, one per group (24×24, drawn with the text colour). */
const ICONS: Record<string, ReactNode> = {
  book: (
    <>
      <path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z" />
      <path d="M12 6v13.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  flame: <path d="M12 3c2 3 5 5 5 9.5a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8z" />,
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.8.4 5 2.8 5 5.8" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/** The desktop sidebar groups the same sections; the phone strip keeps the flat order above. */
const NAV_GROUPS: { label: string; icon: string; keys: string[] }[] = [
  { label: "Texts", icon: "book", keys: ["scriptures", "vedas", "chandas", "glossary"] },
  { label: "Time", icon: "clock", keys: ["time", "calendar", "manvantaras", "dynasties", "vyasas"] },
  { label: "The Divine", icon: "flame", keys: ["devas", "forms", "epithets", "avatars"] },
  { label: "Philosophy", icon: "eye", keys: ["darshanas", "trika", "siddhanta", "vishishtadvaita", "dvaita"] },
  { label: "People & lineage", icon: "people", keys: ["people", "acharyas", "gotra", "kuladevata"] },
  { label: "Life & places", icon: "pin", keys: ["dharma", "places", "regions"] },
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

/**
 * Desktop: every section at once, in groups, in a sticky sidebar. It can be
 * collapsed to a rail of group icons; each icon opens its group's links in a
 * small flyout on hover or keyboard focus.
 */
function Sidebar({
  active,
  collapsed,
  onToggle,
}: {
  active: string;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  // Keep the current section in view when the sidebar itself scrolls (never the page).
  useEffect(() => {
    const el = ref.current;
    const link = el?.querySelector<HTMLElement>(`[data-key="${active}"]`);
    if (!el || !link || collapsed) return;
    const top = link.offsetTop;
    if (top < el.scrollTop || top + link.offsetHeight > el.scrollTop + el.clientHeight) {
      el.scrollTop = top - el.clientHeight / 2;
    }
  }, [active, collapsed]);

  // After choosing a page from a flyout, let the flyout close.
  useEffect(() => {
    const focused = document.activeElement;
    if (focused instanceof HTMLElement && ref.current?.contains(focused)) focused.blur();
  }, [active]);

  const toggle = (
    <button
      type="button"
      className={styles.collapse}
      onClick={onToggle}
      aria-expanded={!collapsed}
      aria-label={collapsed ? "Expand the sidebar" : "Collapse the sidebar"}
      title={collapsed ? "Expand the sidebar" : "Collapse the sidebar"}
    >
      {collapsed ? "»" : "«"}
    </button>
  );

  if (collapsed) {
    return (
      <nav
        ref={ref}
        className={`${styles.sidebar} ${styles.rail}`}
        aria-label="Sections"
        onKeyDown={(e) => {
          // Escape closes an open flyout.
          if (e.key === "Escape" && e.target instanceof HTMLElement) e.target.blur();
        }}
      >
        {toggle}
        {NAV_GROUPS.map((g) => {
          const here = g.keys.includes(active);
          return (
            <div key={g.label} className={styles.railGroup}>
              <button
                type="button"
                className={`${styles.railIcon} ${here ? styles.railHere : ""}`}
                aria-label={g.label}
                aria-haspopup="true"
              >
                <Icon name={g.icon} />
              </button>
              <div className={styles.flyout}>
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
            </div>
          );
        })}
      </nav>
    );
  }

  return (
    <nav ref={ref} className={styles.sidebar} aria-label="Sections">
      {toggle}
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

/** The sidebar is open unless this viewer collapsed it before. */
function readCollapsed(): boolean {
  try {
    return localStorage.getItem("sidebar") === "collapsed";
  } catch {
    return false;
  }
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
  const [collapsed, setCollapsed] = useState(readCollapsed);
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

  useEffect(() => {
    try {
      if (collapsed) localStorage.setItem("sidebar", "collapsed");
      else localStorage.removeItem("sidebar");
    } catch {
      /* storage unavailable */
    }
  }, [collapsed]);

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
      <div className={`${styles.body} ${collapsed ? styles.bodyCollapsed : ""}`}>
        <Sidebar active={active} collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
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
