import type { KeyboardEvent } from 'react';

/**
 * Arrow-key navigation for a role="tablist": ←/→ (or ↑/↓) move to the previous/next tab,
 * Home/End to the first/last, and the tab is activated as it receives focus.
 */
export function onTabListKeyDown(e: KeyboardEvent<HTMLElement>) {
  const tabs = [...e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')];
  const i = tabs.indexOf(document.activeElement as HTMLElement);
  if (i < 0) return;
  const next: Record<string, number> = {
    ArrowRight: (i + 1) % tabs.length,
    ArrowDown: (i + 1) % tabs.length,
    ArrowLeft: (i - 1 + tabs.length) % tabs.length,
    ArrowUp: (i - 1 + tabs.length) % tabs.length,
    Home: 0,
    End: tabs.length - 1,
  };
  if (!(e.key in next)) return;
  e.preventDefault();
  const t = tabs[next[e.key]];
  t.focus();
  t.click();
}
