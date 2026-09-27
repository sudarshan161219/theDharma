import { useSyncExternalStore } from 'react';

/*
 * Reading preferences: theme, text size, fonts, weights and line spacing.
 * They are kept in this browser only (localStorage) and applied to <html>
 * as a data-theme attribute and CSS custom properties. A copy of the applied
 * values is also stored, so the inline script in index.html can apply them
 * before the first paint.
 */

export type ThemeId = 'dark' | 'light' | 'paper' | 'midnight' | 'forest' | 'saffron' | 'contrast';

export interface ThemeInfo {
  id: ThemeId;
  label: string;
  about: string;
  icon: string;
  scheme: 'dark' | 'light';
  /** Background, surface, text and accent, for the swatch. */
  swatch: [string, string, string, string];
}

export const THEMES: ThemeInfo[] = [
  { id: 'dark', label: 'Dark', about: 'Pitch black, easy on the eyes at night', icon: '☾', scheme: 'dark', swatch: ['#000000', '#17171a', '#efe8dc', '#f78843'] },
  { id: 'light', label: 'Light', about: 'Warm white', icon: '☀', scheme: 'light', swatch: ['#faf6ee', '#f3ecdd', '#2b2118', '#b5501c'] },
  { id: 'paper', label: 'Paper ink', about: 'Old paper, vermilion and indigo ink', icon: '✒', scheme: 'light', swatch: ['#f1e7d2', '#eadcc1', '#221a12', '#9b2b1a'] },
  { id: 'midnight', label: 'Midnight', about: 'Deep blue night sky', icon: '✦', scheme: 'dark', swatch: ['#0a0f1f', '#182141', '#e6e9f5', '#f2b35e'] },
  { id: 'forest', label: 'Forest', about: 'Dark green, like a grove', icon: '❦', scheme: 'dark', swatch: ['#0b130e', '#17261d', '#e5ede3', '#e3a64f'] },
  { id: 'saffron', label: 'Saffron', about: 'Bright, with saffron and deep red', icon: '✺', scheme: 'light', swatch: ['#fff8ee', '#fdebd3', '#2a170a', '#c2410c'] },
  { id: 'contrast', label: 'High contrast', about: 'White on black with yellow links, for the clearest reading', icon: '◐', scheme: 'dark', swatch: ['#000000', '#1a1a1a', '#ffffff', '#ffd400'] },
];

export interface FontOption {
  id: string;
  label: string;
  about: string;
  stack: string;
  /** Google Fonts family spec, or none for fonts already on the device. */
  google?: string;
}

export const BODY_FONTS: FontOption[] = [
  { id: 'inter', label: 'Inter', about: 'Clean and modern (default)', stack: "'Inter', system-ui, sans-serif", google: 'Inter:wght@300..700' },
  { id: 'system', label: 'System', about: 'Your device’s own font; nothing to download', stack: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
  { id: 'lexend', label: 'Lexend', about: 'Designed for easier reading', stack: "'Lexend', system-ui, sans-serif", google: 'Lexend:wght@300..700' },
  { id: 'literata', label: 'Literata', about: 'A book serif for long reading', stack: "'Literata', Georgia, serif", google: 'Literata:wght@300..700' },
  { id: 'source-serif', label: 'Source Serif', about: 'A crisp, classic serif', stack: "'Source Serif 4', Georgia, serif", google: 'Source+Serif+4:wght@300..700' },
];

export const DISPLAY_FONTS: FontOption[] = [
  { id: 'cormorant', label: 'Cormorant Garamond', about: 'Elegant old-style serif (default)', stack: "'Cormorant Garamond', Georgia, serif", google: 'Cormorant+Garamond:wght@500;600;700' },
  { id: 'eb-garamond', label: 'EB Garamond', about: 'A sturdier Garamond', stack: "'EB Garamond', Georgia, serif", google: 'EB+Garamond:wght@400..700' },
  { id: 'playfair', label: 'Playfair Display', about: 'High contrast, striking', stack: "'Playfair Display', Georgia, serif", google: 'Playfair+Display:wght@400..700' },
  { id: 'same', label: 'Same as text', about: 'Headings in the text font', stack: 'var(--font-body)' },
];

export const DEVA_FONTS: FontOption[] = [
  { id: 'noto-serif', label: 'Noto Serif Devanagari', about: 'With serifs (default)', stack: "'Noto Serif Devanagari', serif", google: 'Noto+Serif+Devanagari:wght@400..600' },
  { id: 'noto-sans', label: 'Noto Sans Devanagari', about: 'Plain and clear', stack: "'Noto Sans Devanagari', sans-serif", google: 'Noto+Sans+Devanagari:wght@400..600' },
  { id: 'tiro', label: 'Tiro Devanagari Sanskrit', about: 'Made for Sanskrit, like a printed book', stack: "'Tiro Devanagari Sanskrit', serif", google: 'Tiro+Devanagari+Sanskrit' },
];

export const SIZES = [
  { value: 0.9, label: 'Small' },
  { value: 1, label: 'Default' },
  { value: 1.1, label: 'Large' },
  { value: 1.2, label: 'Larger' },
  { value: 1.35, label: 'Largest' },
];

export const WEIGHTS = [
  { value: 300, label: 'Light' },
  { value: 400, label: 'Regular' },
  { value: 500, label: 'Medium' },
];

export const HEADING_WEIGHTS = [
  { value: 500, label: 'Regular' },
  { value: 600, label: 'Semibold' },
  { value: 700, label: 'Bold' },
];

export const LEADINGS = [
  { value: 1.45, label: 'Compact' },
  { value: 1.6, label: 'Default' },
  { value: 1.8, label: 'Relaxed' },
];

export interface Prefs {
  theme: ThemeId;
  scale: number;
  body: string;
  display: string;
  deva: string;
  weight: number;
  headingWeight: number;
  leading: number;
}

export const DEFAULTS: Prefs = { theme: 'dark', scale: 1, body: 'inter', display: 'cormorant', deva: 'noto-serif', weight: 400, headingWeight: 600, leading: 1.6 };

const KEY = 'prefs';
/** What index.html applies before the first paint. */
const APPLIED_KEY = 'prefs-applied';

const pick = <T extends { value: number }>(list: T[], v: unknown, d: number) => (list.some((x) => x.value === v) ? (v as number) : d);
const pickId = (list: { id: string }[], v: unknown, d: string) => (list.some((x) => x.id === v) ? (v as string) : d);

/** Read saved choices, ignoring anything unknown; the old “theme” key is honoured. */
function load(): Prefs {
  let raw: Partial<Prefs> = {};
  try {
    raw = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Prefs>;
    if (!raw.theme) raw.theme = (localStorage.getItem('theme') as ThemeId) ?? undefined;
  } catch {
    /* storage unavailable or corrupt: use the defaults */
  }
  return {
    theme: pickId(THEMES, raw.theme, DEFAULTS.theme) as ThemeId,
    scale: pick(SIZES, raw.scale, DEFAULTS.scale),
    body: pickId(BODY_FONTS, raw.body, DEFAULTS.body),
    display: pickId(DISPLAY_FONTS, raw.display, DEFAULTS.display),
    deva: pickId(DEVA_FONTS, raw.deva, DEFAULTS.deva),
    weight: pick(WEIGHTS, raw.weight, DEFAULTS.weight),
    headingWeight: pick(HEADING_WEIGHTS, raw.headingWeight, DEFAULTS.headingWeight),
    leading: pick(LEADINGS, raw.leading, DEFAULTS.leading),
  };
}

const byId = (list: FontOption[], id: string) => list.find((f) => f.id === id) ?? list[0];

/** The fonts index.html does not already load for these choices. */
export function fontsHref(p: Prefs): string | null {
  const families = new Set<string>();
  const body = byId(BODY_FONTS, p.body);
  // index.html loads Inter at 400–600 only; a light weight needs the full range.
  if (body.google && (body.id !== 'inter' || p.weight === 300)) families.add(body.google);
  const display = byId(DISPLAY_FONTS, p.display);
  if (display.google && display.id !== 'cormorant') families.add(display.google);
  const deva = byId(DEVA_FONTS, p.deva);
  if (deva.google && deva.id !== 'noto-serif') families.add(deva.google);
  if (!families.size) return null;
  return `https://fonts.googleapis.com/css2?${[...families].map((f) => `family=${f}`).join('&')}&display=swap`;
}

/** Every option’s font, so the settings page can show each choice in its own face. */
export function allFontsHref(): string {
  const families = [...BODY_FONTS, ...DISPLAY_FONTS, ...DEVA_FONTS].flatMap((f) => (f.google ? [f.google] : []));
  return `https://fonts.googleapis.com/css2?${families.map((f) => `family=${f}`).join('&')}&display=swap`;
}

function vars(p: Prefs): Record<string, string> {
  return {
    '--font-scale': String(p.scale),
    '--font-body': byId(BODY_FONTS, p.body).stack,
    '--font-display': byId(DISPLAY_FONTS, p.display).stack,
    '--font-deva': byId(DEVA_FONTS, p.deva).stack,
    '--font-weight': String(p.weight),
    '--heading-weight': String(p.headingWeight),
    '--leading': String(p.leading),
  };
}

export function setLink(id: string, href: string | null) {
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!href) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;
}

function apply(p: Prefs) {
  const root = document.documentElement;
  const theme = THEMES.find((t) => t.id === p.theme)!;
  root.dataset.theme = theme.id;
  root.dataset.scheme = theme.scheme;
  const v = vars(p);
  for (const [k, val] of Object.entries(v)) root.style.setProperty(k, val);
  const href = fontsHref(p);
  setLink('pref-fonts', href);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.swatch[0]);
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
    localStorage.setItem(APPLIED_KEY, JSON.stringify({ theme: theme.id, scheme: theme.scheme, color: theme.swatch[0], vars: v, fonts: href }));
    localStorage.removeItem('theme');
  } catch {
    /* storage unavailable: the choice lasts for this visit only */
  }
}

/* ——— A tiny store, so the header button and the settings page stay in step. ——— */

let current: Prefs = typeof window === 'undefined' ? DEFAULTS : load();
const listeners = new Set<() => void>();

if (typeof window !== 'undefined') apply(current);

export function setPrefs(patch: Partial<Prefs>) {
  current = { ...current, ...patch };
  apply(current);
  for (const l of listeners) l();
}

export function resetPrefs() {
  setPrefs(DEFAULTS);
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function usePrefs(): Prefs {
  return useSyncExternalStore(subscribe, () => current, () => DEFAULTS);
}
