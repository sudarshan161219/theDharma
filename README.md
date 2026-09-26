# theDharma

Hindu scriptures made easy to grasp: who composed each text, who is telling and who is listening, the yugas, the 14 manvantaras, the 28 Vyasas and the rishis. Every page links to its source chapter on [wisdomlib.org](https://www.wisdomlib.org/).

Stack: Vite + React + TypeScript + CSS Modules, plus Leaflet for the map (lazy-loaded, with OpenStreetMap tiles). No backend. All content is typed static data in `src/data/`.

```bash
npm install
npm run dev
```

## Where things live

| File | What it holds |
| --- | --- |
| `src/data/scriptures.ts` | Itihasas (+ Harivamsha), 18 Mahapuranas and 17 Upapuranas: composer, verses, narration layers, lineage, sources, further reading. A text whose frame isn't confirmed has `narration: []` |
| `src/data/upapuranaList.ts` | The Kurma Purana's traditional list of 18 Upapuranas, linked to entries where we have them |
| `src/data/glossary.ts` | Definitions (Shruti, Purana, Upapurana, pancha-lakshana, manvantara, rishi…), each with sources. Shown at `#/glossary` |
| `src/data/people.ts` | Rishis, narrators and listeners. Entries with `about` get a full profile card |
| `src/data/cosmos.ts` | Yugas, manvantaras (Manu, Indra, Saptarishis), Vyasas, time units |
| `src/data/sources.ts` | wisdomlib chapter URLs, plus Bibek Debroy's Penguin translations (`debroyBooks`) |
| `src/data/avatars.ts` | Dashavatara, Bhagavata 1.3 avataras, Shiva's incarnations (Shatarudra-samhita). Shown at `#/avatars` |
| `src/data/acharyas.ts` | Vedanta schools compared, the four Vaishnava sampradayas, and 13 acharyas from Gaudapada to Chaitanya. Shown at `#/acharyas` |
| `src/data/devi.ts` | Devi Mahatmya episodes, Saptamatrikas, promised incarnations, Navadurga, Dasha Mahavidya. Shown at `#/avatars?g=devi` |
| `src/data/smriti.ts` | Hand-checked inscriptions and manuscripts from MIDF's Smriti catalogue (smriti.midf.org.in), shown as "primary evidence" |
| `src/data/places.ts` | 12 Jyotirlingas (Shiva Purana, Kotirudra-samhita) and Shakti Peethas (the 18 Maha Peethas, other 51-list seats, the 4 Kaula pithas) with coordinates. Shown on a Leaflet/OpenStreetMap map at `#/places` |
| `src/data/kuladevata.ts` | Family deities: kula / ishta / grama / griha devata, customs, how to find yours, 30 regional shrines with coordinates, and `roots`: each deity's supreme deity (Shiva / Vishnu / Skanda / Devi), chain of manifestation and scriptural basis. Shown at `#/kuladevata` |
| `src/data/gotra.ts` | The four original gotras, the eight gotrakarin rishis, 17 gotras with gana and pravara, the classical same-family rule (`compareGotras`). Shown at `#/gotra` |
| `src/data/dynasties.ts` | The Solar (Ikshvaku) and Lunar (Puru/Yadu/Kuru) dynasties as lines with side-branches, per Vishnu Purana Book IV. Shown at `#/dynasties` |
| `src/lib/cosmicPosition.ts` | The time calculator's engine: locates any year (or years ago/ahead, or a preset) in Brahma's life down to the yuga and its dawn/dusk. Shown at `#/time` |
| `src/data/darshanas.ts` | The six astika darshanas (founder, sutra, opening verse, categories, God, bondage, liberation, causation, commentators), the nastika schools, the pramana matrix, theories of causation, and the sampradayas by tradition (Vaishnava, Shaiva, Shakta, Smarta, Ganapatya/Saura/Kaumara) with guru-paramparas and Shankara's four mathas. Shown at `#/darshanas` |
| `src/data/chandas.ts` + `src/lib/prosody.ts` | The Anushtubh (shloka) metre: weight rules, the 4 × 8 template, ganas, examples; plus a scanner that syllabifies IAST or Devanagari, marks laghu/guru and checks the classical rules. Shown at `#/chandas` |
| `src/lib/time.ts` | "Where are we now" maths (Kali and kalpa years elapsed) |

## Adding a scripture

1. Add any new speakers or listeners to `people.ts` (the `id` is what you reference).
2. Add an entry to `scriptures.ts`. `narration[0]` is the outer frame, and the rest are nested dialogues.
3. Add the wisdomlib chapter URL to `sources.ts` and list it in `sources`.

Person pages build their "Appears in" list automatically from every scripture's `narration` and `lineage`.

## About the sources

wisdomlib blocks automated fetching, so the app does not fetch it at runtime. The data was written by hand from the translations wisdomlib hosts: H. H. Wilson's Vishnu Purana, J. L. Shastri's Shiva Purana, K. M. Ganguli's Mahabharata, H. P. Shastri's Ramayana and others. Names and counts differ between Puranas and recensions. Treat the linked chapter as the authority.

Bibek Debroy's translations are not on wisdomlib because they are copyrighted Penguin editions. They appear as "Further reading" on the matching scripture pages and link to Penguin India.

Primary evidence comes from [Smriti](https://smriti.midf.org.in/) by MIDF: 5,000+ inscriptions and 2,100+ manuscript scans. Records were found through its public read API and checked by reading each summary, because words like *durga* ("fort") give false matches. Links go to `smriti.midf.org.in/inscription/<id>` and `/manuscript/<MS_id>`. Inscription pages can take 15–20 seconds to load on their site.
