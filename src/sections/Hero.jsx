import '../styles/sections/Hero.css'
import logo from '../assets/icons/libellule.webp'
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Bloc gauche */}
        <div className="hero-left">
          <img src={logo} alt="logo" className="hero-logo" />
          <h1 className="hero-title">CREATION WEB & DIGITAL</h1>
        </div>

        {/* Bloc droite : Réseaux sociaux */}
        <div className="hero-right">
          <div className="hero-socials">
            <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://instagram.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


