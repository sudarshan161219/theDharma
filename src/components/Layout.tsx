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
  { key: "time", label: "Cosmic Time" },
  { key: "manvantaras", label: "Manvantaras" },
  { key: "dynasties", label: "Dynasties" },
  { key: "vyasas", label: "Vyasas" },
  { key: "people", label: "Rishis" },
  { key: "gotra", label: "Gotras" },
  { key: "avatars", label: "Avatars" },
  { key: "acharyas", label: "Acharyas" },
  { key: "places", label: "Sacred Places" },
  { key: "kuladevata", label: "Kuladevata" },
  { key: "glossary", label: "Definitions" },
];

type Theme = "light" | "dark";

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

/** Dark (pitch black) is the default; light is opt-in and remembered. */
function readTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const isDark = theme === "dark";

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
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
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle colour theme"
          >
            {isDark ? "☀" : "☾"}
          </button>
        </div>
        <NavScroller active={active} />
      </header>
      <main className={styles.main}>{children}</main>
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
