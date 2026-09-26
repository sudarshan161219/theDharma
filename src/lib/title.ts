import { useEffect } from 'react';

const SITE = 'theDharma';

/** Browser-tab titles for each section of the site. */
export const SECTION_TITLES: Record<string, string> = {
  scriptures: 'Scriptures',
  vedas: 'Vedas & Shastras',
  time: 'Cosmic Time',
  calendar: 'Hindu Calendar',
  manvantaras: 'Manvantaras',
  dynasties: 'Dynasties',
  vyasas: 'The 28 Vyasas',
  people: 'Rishis & Narrators',
  devas: 'Devas',
  forms: 'How the Divine Appears',
  epithets: 'Epithets of the Devas and Devis',
  gotra: 'Gotras',
  avatars: 'Avatars',
  acharyas: 'Acharyas',
  darshanas: 'Darshanas & Sampradayas',
  trika: 'Kashmir Shaivism',
  siddhanta: 'Shaiva Siddhanta',
  dharma: 'Life & Dharma',
  places: 'Sacred Places',
  kuladevata: 'Kuladevata',
  chandas: 'Chandas',
  glossary: 'Definitions',
  search: 'Search',
};

/** Set the document title to “<title> · theDharma”, or the site name alone; `null` leaves it to a child page. */
export function useDocumentTitle(title: string | undefined | null) {
  useEffect(() => {
    if (title === null) return;
    document.title = title ? `${title} · ${SITE}` : `${SITE} — Hindu scriptures made easy`;
  }, [title]);
}
