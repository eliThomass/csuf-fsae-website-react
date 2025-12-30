import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Subteams from './pages/Subteams';
import JoinUs from './pages/JoinUs';
import OurTeam from './pages/OurTeam';
import Supporters from './pages/Supporters';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subteams" element={<Subteams />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/supporters" element={<Supporters />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />

      </div>	
    </BrowserRouter>
  )
}

export default App
