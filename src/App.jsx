import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './sections/Hero'
import About from './sections/About'
import Competences from './sections/Competences'
import Services from './sections/Services'
import Realisations from './sections/Realisations'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


// Views
import MentionsLegales from './views/MentionsLegales'
import CGU from './views/CGU'
import Confidentialite from './views/Confidentialite'
import FAQ from './views/FAQ'

function App() {
  return (
    <Router basename="/portfoliocecilia">
      <Routes>
        {/* === Page principale === */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Competences />
              <Services />
              <Realisations />
              <Contact />
            </>
          }
        />

        {/* === Pages légales === */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact showRetour={true} />} />

      </Routes>

      {/* 👇 Le footer s’affichera partout */}
      <Footer />
    </Router>
  )
}

export default App
