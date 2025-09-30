import "../styles/sections/Realisations.css"
import realisation from "../assets/images/site-vitrine-louise-nomad-bar-mockup.webp"

function Realisations() {
  return (
    <section className="realisations" id="realisations">
      <h2 className="realisations-title">Réalisation d'un site vitrine</h2>
      
      <div className="realisations-content">
        <div className="realisations-card">
          <a 
            href="https://www.louisenomadbar.alsace" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={realisation} 
              alt="Aperçu du site vitrine Louise Nomad Bar affiché sur ordinateur, tablette et smartphone avec un design responsive"
              className="realisations-image"
            />
          </a>
          <h3 className="realisations-subtitle">
            <a 
              href="https://www.louisenomadbar.alsace" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              - Louise Nomad Bar -
            </a>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Realisations

