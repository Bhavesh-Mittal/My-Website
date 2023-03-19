import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Loading from './Pages/Loading';
import NotFound from './Pages/NotFound';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Achievements = lazy(() => import('./Pages/Achievements'));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/achievements' element={ <Achievements /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Suspense>
    </>
  );
}