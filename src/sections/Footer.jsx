import { Link } from "react-router-dom"
import '../styles/sections/Footer.css'

function Footer() {
  return (
    <footer className="basdepage">
      <ul className="footer-links">
        <li><Link to="/mentions-legales">Mentions légales</Link></li>
        <li><Link to="/cgu">CGU</Link></li>
        <li><Link to="/confidentialite">Confidentialité</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} Cécilia - Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer

