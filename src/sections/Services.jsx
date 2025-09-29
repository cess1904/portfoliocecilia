import '../styles/sections/Services.css'

function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Mes services</h2>

      <div className="services-grid">
        {/* Carte projet 1 */}
        <div className="services-card">
          <h3>Création de site vitrine</h3>
          <p>
            « Je conçois des sites vitrines modernes, clairs et faciles à
            prendre en main. Une solution sur mesure pour les artisans,
            créateurs et petites structures qui veulent se faire connaître sur
            le web.»
          </p>
        </div>

        {/* Carte projet 2 */}
        <div className="services-card">
          <h3>Design moderne & responsive</h3>
          <p>
            « Je développe des sites adaptés à tous les écrans (ordinateur,
            tablette, mobile). Pensés pour être rapides et bien référencés, ils
            offrent un vrai confort de navigation, fluide et agréable pour vos
            visiteurs»
          </p>
        </div>

        {/* Carte projet 3 */}
        <div className="services-card">
          <h3>Accompagnement personnalisé</h3>
          <p>
            « Je vous accompagne pas à pas pour créer un site qui vous
            ressemble. À l’écoute de vos besoins, je propose des solutions sur
            mesure pour construire ensemble une présence en ligne à votre image,
            unique et authentique. »
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
