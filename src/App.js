import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Achievements from './Pages/Achievements';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/achievements' element={ <Achievements /> } />
      </Routes>
    </>
  );
}

export default App;
