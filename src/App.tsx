import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { useRoute } from './lib/router';
import { SECTION_TITLES, useDocumentTitle } from './lib/title';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Every page except Home is split into its own chunk and downloaded on first visit.
// (Search pulls in the index of all data; the map pages pull in Leaflet.)
const Acharyas = lazy(() => import('./pages/Acharyas'));
const Avatars = lazy(() => import('./pages/Avatars'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Chandas = lazy(() => import('./pages/Chandas'));
const Darshanas = lazy(() => import('./pages/Darshanas'));
const CosmicTime = lazy(() => import('./pages/CosmicTime'));
const Devas = lazy(() => import('./pages/Devas'));
const Dharma = lazy(() => import('./pages/Dharma'));
const Dynasties = lazy(() => import('./pages/Dynasties'));
const Forms = lazy(() => import('./pages/Forms'));
const Glossary = lazy(() => import('./pages/Glossary'));
const Gotra = lazy(() => import('./pages/Gotra'));
const Kuladevata = lazy(() => import('./pages/Kuladevata'));
const Manvantaras = lazy(() => import('./pages/Manvantaras'));
const People = lazy(() => import('./pages/People'));
const PersonDetail = lazy(() => import('./pages/PersonDetail'));
const Places = lazy(() => import('./pages/Places'));
const ScriptureDetail = lazy(() => import('./pages/ScriptureDetail'));
const Scriptures = lazy(() => import('./pages/Scriptures'));
const Search = lazy(() => import('./pages/Search'));
const Vedas = lazy(() => import('./pages/Vedas'));
const Vyasas = lazy(() => import('./pages/Vyasas'));

export default function App() {
  const route = useRoute();
  const [section = '', id] = route.path;
  // Detail pages (a scripture, a person) set their own, more specific title.
  const hasOwnTitle = !!id && (section === 'scriptures' || section === 'people');
  useDocumentTitle(hasOwnTitle ? null : section ? (SECTION_TITLES[section] ?? 'Not found') : undefined);

  let page;
  switch (section) {
    case '':
      page = <Home />;
      break;
    case 'scriptures':
      page = id ? <ScriptureDetail id={id} /> : <Scriptures />;
      break;
    case 'vedas':
      page = <Vedas route={route} />;
      break;
    case 'calendar':
      page = <Calendar />;
      break;
    case 'devas':
      page = <Devas />;
      break;
    case 'forms':
      page = <Forms />;
      break;
    case 'dharma':
      page = <Dharma />;
      break;
    case 'time':
      page = <CosmicTime route={route} />;
      break;
    case 'manvantaras':
      page = <Manvantaras route={route} />;
      break;
    case 'dynasties':
      page = <Dynasties route={route} />;
      break;
    case 'vyasas':
      page = <Vyasas />;
      break;
    case 'people':
      page = id ? <PersonDetail id={id} /> : <People />;
      break;
    case 'gotra':
      page = <Gotra />;
      break;
    case 'avatars':
      page = <Avatars route={route} />;
      break;
    case 'acharyas':
      page = <Acharyas route={route} />;
      break;
    case 'darshanas':
      page = <Darshanas route={route} />;
      break;
    case 'places':
      page = <Places route={route} />;
      break;
    case 'kuladevata':
      page = <Kuladevata route={route} />;
      break;
    case 'chandas':
      page = <Chandas />;
      break;
    case 'glossary':
      page = <Glossary route={route} />;
      break;
    case 'search':
      page = <Search route={route} />;
      break;
    default:
      page = <NotFound />;
  }

  return (
    <Layout active={section}>
      <Suspense fallback={<p>Loading…</p>}>{page}</Suspense>
    </Layout>
  );
}
