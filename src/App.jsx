import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import SpaceNews from './pages/SpaceNews';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<SpaceNews />} />
      </Routes>
    </BrowserRouter>

    <div>
   
    </div>
    </>
  )
}

export default App;
