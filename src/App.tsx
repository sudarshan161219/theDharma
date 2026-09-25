import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { useRoute } from './lib/router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Every page except Home is split into its own chunk and downloaded on first visit.
// (Search pulls in the index of all data; the map pages pull in Leaflet.)
const Acharyas = lazy(() => import('./pages/Acharyas'));
const Avatars = lazy(() => import('./pages/Avatars'));
const CosmicTime = lazy(() => import('./pages/CosmicTime'));
const Dynasties = lazy(() => import('./pages/Dynasties'));
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
const Vyasas = lazy(() => import('./pages/Vyasas'));

export default function App() {
  const route = useRoute();
  const [section = '', id] = route.path;

  let page;
  switch (section) {
    case '':
      page = <Home />;
      break;
    case 'scriptures':
      page = id ? <ScriptureDetail id={id} /> : <Scriptures />;
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
    case 'places':
      page = <Places route={route} />;
      break;
    case 'kuladevata':
      page = <Kuladevata route={route} />;
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
