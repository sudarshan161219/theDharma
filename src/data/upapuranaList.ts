/**
 * The eighteen Upapuranas as listed in the Kurma Purana (via the Kalika Purana study on wisdomlib).
 * `id` links to a scripture entry when the app covers that text. The list is less settled than the
 * Mahapurana list; other Puranas (e.g. Brihaddharma) give different names.
 */
export const kurmaUpapuranas: { n: number; name: string; id?: string; note?: string }[] = [
  { n: 1, name: 'Adya (Sanatkumara)', id: 'adi-purana' },
  { n: 2, name: 'Narasimha', id: 'narasimha-purana' },
  { n: 3, name: 'Skanda (Kumara)', note: 'Different from the Skanda Mahapurana' },
  { n: 4, name: 'Shivadharma', id: 'shivadharma' },
  { n: 5, name: 'Durvasas', note: 'Spoken by Durvasa (Ashcharya)' },
  { n: 6, name: 'Naradiya', id: 'brihannaradiya' },
  { n: 7, name: 'Kapila' },
  { n: 8, name: 'Vamana', note: 'Different from the Vamana Mahapurana' },
  { n: 9, name: 'Aushanasa', note: 'Told by Ushanas (Shukra)' },
  { n: 10, name: 'Brahmanda', note: 'Different from the Brahmanda Mahapurana' },
  { n: 11, name: 'Varuna' },
  { n: 12, name: 'Kalika', id: 'kalika-purana' },
  { n: 13, name: 'Maheshvara' },
  { n: 14, name: 'Samba', id: 'samba-purana' },
  { n: 15, name: 'Saura', id: 'saura-purana' },
  { n: 16, name: 'Parashara', note: 'Told by Parashara' },
  { n: 17, name: 'Maricha', note: 'Told by Marichi' },
  { n: 18, name: 'Bhargava', note: 'Told by Bhrigu' },
];
