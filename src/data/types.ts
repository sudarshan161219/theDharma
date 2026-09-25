import type { Evidence } from './sources';

export interface Source {
  label: string;
  url: string;
}

export interface Fact {
  label: string;
  value: string;
}

/** One layer of "who is telling whom" inside a text. */
export interface NarrationLayer {
  /** Person id from people.ts, or free text if not profiled. */
  speaker: string;
  listener: string;
  where?: string;
  context: string;
}

export type ScriptureCategory = 'Itihasa' | 'Mahapurana' | 'Upapurana';
export type Guna = 'Sattvic' | 'Rajasic' | 'Tamasic';

export interface Scripture {
  id: string;
  name: string;
  sanskrit: string;
  category: ScriptureCategory;
  /** Principal deity the text glorifies. */
  deity: string;
  /** Classification per Padma Purana (Uttara-khanda); only for Mahapuranas. */
  guna?: Guna;
  /** Traditional verse count (Bhagavata Purana 12.13 for Mahapuranas). Omitted where sources disagree widely. */
  verses?: number;
  /** Status or classification caveat, e.g. Upapurana vs Mahapurana disputes. */
  note?: string;
  composer: string;
  yuga: string;
  manvantara: string;
  summary: string;
  structure?: string[];
  /** Transmission lineage, oldest first. */
  lineage?: string[];
  narration: NarrationLayer[];
  highlights: string[];
  sources: Source[];
  /** Print translations not hosted on wisdomlib (e.g. Bibek Debroy, Penguin). */
  furtherReading?: Source[];
  /** Primary evidence: inscriptions and manuscripts (MIDF Smriti). */
  evidence?: Evidence[];
}

export interface Person {
  id: string;
  name: string;
  sanskrit?: string;
  kind: 'Rishi' | 'Rishika' | 'Deva' | 'King' | 'Narrator' | 'Avatara' | 'Other';
  short: string;
  /** Present on profiled sages: longer description + facts. */
  about?: string;
  facts?: Fact[];
  sources?: Source[];
}

export interface Yuga {
  id: string;
  name: string;
  sanskrit: string;
  divineYears: number;
  sandhya: number;
  humanYears: number;
  dharmaLegs: number;
  lifespan: string;
  practice: string;
  vishnuColour: string;
  notable: string[];
}

export interface Manvantara {
  n: number;
  manu: string;
  indra: string;
  saptarishi: string[];
  avatara?: string;
  note?: string;
}

export interface Vyasa {
  n: number;
  name: string;
  note?: string;
}
