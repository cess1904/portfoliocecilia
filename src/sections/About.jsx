import '../styles/sections/About.css'
import Button from '../components/Buttonabout.jsx'
import photoAbout from '../assets/images/developpement-react-seo-freelance.webp'



function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h1 className="about-main-title">Créatrice de site web</h1>
        <p className="about-parragraphe-title">
          Développement front-end, SEO, design & plus...
        </p>

        <div className="about-buttons">
          <button className="btn-about-rea">Réalisation</button>
          <button className="btn-about-comp">Compétances</button>
        </div>

        <h2 className="about-sub-title">À propos de Cécilia</h2>
        <p className="about-text">
          <strong>
            Je crée des sites vitrines modernes, pensés pour refléter votre
            univers.
          </strong>{' '}
          J’aide entrepreneurs, artisans et indépendants à affirmer leur
          présence en ligne avec un site clair, professionnel et unique.
        </p>

        <p className="about-text">
          <strong>Mon approche:</strong> simplicité, écoute et collaboration,
          pour créer ensemble un projet qui vous ressemble et inspire confiance.
        </p>
      </div>

      <div className="about-right">
        <div className="image-wrapper">
          <img
            src={photoAbout}
            alt="Développement de site vitrine sur ordinateur portable – travail de création et SEO"
            className="about-photo"
          />
          <div className="about-color-block"></div>
        </div>
      </div>
    </section>
  )
}

export default About
