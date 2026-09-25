import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLng } from '../data/places';
import styles from './PlacesMap.module.css';

/** Standard OpenStreetMap tiles; in dark mode they are inverted with a CSS filter (see PlacesMap.module.css). */
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/** Read a CSS custom property so markers follow the site's colour tokens. */
const token = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** Anything that can be pinned: a Jyotirlinga, a Shakti Peetha or a family deity's shrine. */
export interface MapPoint extends LatLng {
  id: string;
  n: number;
  name: string;
  kind: 'jyotirlinga' | 'shakti' | 'kula';
  alternates?: (LatLng & { place: string })[];
}

interface Props {
  places: MapPoint[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function PlacesMap({ places, selected, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const tiles = useRef<L.TileLayer | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const markers = useRef(new Map<string, L.CircleMarker>());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const fit = useRef(() => {});

  // Create the map once.
  useEffect(() => {
    if (!el.current) return;
    const m = L.map(el.current, { center: [22.5, 80], zoom: 4, minZoom: 3, scrollWheelZoom: false, attributionControl: true });
    tiles.current = L.tileLayer(TILES, { attribution: ATTRIBUTION, maxZoom: 18 }).addTo(m);
    layer.current = L.layerGroup().addTo(m);
    map.current = m;

    // The container may get its final size after the (lazy-loaded) stylesheet arrives.
    const ro = new ResizeObserver(() => {
      m.invalidateSize();
      if (!selectedRef.current) fit.current();
    });
    ro.observe(el.current);

    return () => {
      ro.disconnect();
      m.remove();
      map.current = null;
    };
  }, []);

  // (Re)draw markers when the visible set changes.
  useEffect(() => {
    const m = map.current;
    const group = layer.current;
    if (!m || !group) return;
    group.clearLayers();
    markers.current.clear();
    const jyoti = token('--indigo') || '#9eaaf0';
    const shakti = token('--accent') || '#f08a4b';
    const kula = token('--gold') || '#e0b454';
    const bg = token('--bg') || '#000';

    for (const p of places) {
      const color = p.kind === 'jyotirlinga' ? jyoti : p.kind === 'kula' ? kula : shakti;
      const mk = L.circleMarker([p.lat, p.lng], { radius: 7, color: bg, weight: 2, fillColor: color, fillOpacity: 0.95 })
        .bindTooltip(`${p.n}. ${p.name}`, { direction: 'top', offset: [0, -6] })
        .on('click', () => onSelectRef.current(p.id));
      mk.addTo(group);
      markers.current.set(p.id, mk);
      for (const a of p.alternates ?? []) {
        L.circleMarker([a.lat, a.lng], { radius: 5, color, weight: 2, fillOpacity: 0, dashArray: '3 3' })
          .bindTooltip(`${p.name}: alternative claim, ${a.place}`, { direction: 'top' })
          .on('click', () => onSelectRef.current(p.id))
          .addTo(group);
      }
    }
    fit.current = () => {
      if (places.length) m.fitBounds(L.latLngBounds(places.map((p) => [p.lat, p.lng])), { padding: [24, 24], maxZoom: 6 });
    };
    fit.current();
  }, [places]);

  // Highlight and fly to the selected place.
  useEffect(() => {
    const m = map.current;
    for (const [id, mk] of markers.current) mk.setRadius(id === selected ? 11 : 7);
    const mk = selected ? markers.current.get(selected) : undefined;
    if (m && mk) {
      m.flyTo(mk.getLatLng(), Math.max(m.getZoom(), 6), { duration: 0.6 });
      mk.openTooltip();
    }
  }, [selected]);

  return <div ref={el} className={styles.map} role="region" aria-label="Map of sacred places" />;
}
