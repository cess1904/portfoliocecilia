import '../styles/sections/Footer.css'

function Footer() {
  return (
    <footer className="basdepage">
      <ul className="footer-links">
        <li><a href="/mentions-legales">Mentions légales </a></li>
        <li><a href="/cgu">CGU </a></li>
        <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} Cécilia - Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer

