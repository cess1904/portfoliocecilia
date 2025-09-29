import '../styles/sections/Hero.css'
import logo from '../assets/icons/libellule.webp'
import Button from '../components/Buttoncontact.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Bloc gauche */}
        <div className="hero-left">
          <img src={logo} alt="logo" className="hero-logo" />
          <h1 className="hero-title">CRÉATION WEB & DIGITAL</h1>
        </div>

        {/* Bloc droite */}
        <div className="hero-right">
          <Button variant="primary">Me contacter</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
