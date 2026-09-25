import { useEffect, useState } from 'react';

export interface Route {
  path: string[];
  query: URLSearchParams;
}

function parse(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [p, q = ''] = raw.split('?');
  return { path: p.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(q) };
}

export function useRoute(): Route {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onChange = () => {
      const next = parse();
      // Only jump to top on a new page, not when just the query changes (tabs, selections).
      setRoute((prev) => {
        if (prev.path.join('/') !== next.path.join('/')) window.scrollTo({ top: 0 });
        return next;
      });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export const href = (...parts: string[]) => '#/' + parts.map(encodeURIComponent).join('/');

export const navigate = (to: string) => {
  window.location.hash = to.replace(/^#/, '');
};
