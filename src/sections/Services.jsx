import "../styles/sections/Services.css";

// 🖼️ imports des PNG
import imgVitrine from "../assets/services/vitrine.png";
import imgResponsive from "../assets/services/responsive 22.png";
import imgAccompagnement from "../assets/services/accompagnement1.png";

function Services() {
  const cards = [
    {
      img: imgVitrine,
      alt: "Illustration site vitrine",
      title: "Création de site vitrine",
      text:
        "« Je conçois des sites vitrines modernes, clairs et faciles à prendre en main. Une solution sur mesure pour les artisans, créateurs et petites structures qui veulent se faire connaître sur le web. »",
    },
    {
      img: imgResponsive,
      alt: "Illustration design responsive",
      title: "Design moderne & responsive",
      text:
        "« Je développe des sites adaptés à tous les écrans (ordinateur, tablette, mobile). Pensés pour être rapides et bien référencés, ils offrent un vrai confort de navigation, fluide et agréable pour vos visiteurs. »",
    },
    {
      img: imgAccompagnement,
      alt: "Illustration accompagnement personnalisé",
      title: "Accompagnement personnalisé",
      text:
        "« Je vous accompagne pas à pas pour créer un site qui vous ressemble. À l’écoute de vos besoins, je propose des solutions sur mesure pour construire ensemble une présence en ligne à votre image, unique et authentique. »",
    },
  ];

  return (
    <section className="services">
      <h2 className="services-title">Mes services</h2>

      <div className="services-grid">
        {cards.map((c, i) => (
          <article className="services-card" key={i}>
            <div className="services-illu-wrap">
              <img
                src={c.img}
                alt={c.alt}
                className="services-illu"
                loading="lazy"
                decoding="async"

              />
            </div>

            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services
