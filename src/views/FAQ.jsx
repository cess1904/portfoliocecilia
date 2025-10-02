import { Link } from "react-router-dom"
import "../styles/views/FAQ.css" 
import { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quels types de sites proposez-vous ?",
      answer: "Je crée principalement des sites vitrines modernes et personnalisés, pensés pour mettre en valeur votre activité et vos services. Mon but est de concevoir un site qui vous ressemble et qui parle directement à vos futurs clients. Je travaille surtout avec des indépendants, artisans, commerçants, petites entreprises et associations. Chaque projet est unique et je l’adapte à vos objectifs." /*Si besoin, je peux aussi mettre en place une petite boutique en ligne, un système de réservation ou une landing page pour vos campagnes. */
    },
    {
      question: "Est-ce que le site sera responsive (adapté au mobile) ?",
      answer: "Absolument, la majorité des internautes consultent les sites depuis leur téléphone, alors je développe tous mes sites pour qu’ils s’adaptent automatiquement à tous les écrans : ordinateur, tablette et smartphone. Je fais en sorte que le site reste clair, facile à utiliser et agréable à lire, quel que soit l’appareil utilisé. Vous aurez un seul site, mais pensé pour être efficace partout."
    },
    {
      question: "Proposez-vous aussi le référencement SEO ?",
      answer: "C’est même une partie essentielle de mon travail. Dès la conception, j’intègre les bonnes pratiques de référencement : structure claire, balises optimisées, site rapide et adapté au mobile. Je prends aussi le temps de travailler les images et la lisibilité des contenus. Si vous voulez aller plus loin, je peux vous accompagner avec une stratégie SEO personnalisée (choix des mots-clés, optimisation de vos pages, mise en place d’un blog, suivi avec Google Analytics et Search Console). Mon objectif est simple : vous aider à être plus visible sur Google."
    },
    {
      question: "Qui s’occupe de l’hébergement et du nom de domaine ?",
      answer: "Je vous conseille sur le choix de l’hébergement et du nom de domaine, mais c’est toujours vous qui en restez le propriétaire. Si vous préférez, je peux m’occuper de toute la partie technique : achat du domaine, configuration de l’hébergement, installation du certificat de sécurité (HTTPS), mise en ligne du site et même création de vos adresses e-mail professionnelles. De cette façon, vous n’avez pas à vous soucier de l’aspect technique, tout en gardant la main sur vos accès."
    },
    {
      question: "Est-ce que je pourrai modifier mon site moi-même ?",
      answer: "Pour le moment, les mises à jour sont gérées pour vous, ce qui assure un site fiable et sécurisé. À terme, une option permettra aussi de modifier vos textes et images de façon autonome, sans connaissances techniques."
    },
    {
      question: "Combien de temps faut-il pour créer un site ?",
      answer: "Le délai varie en fonction de la taille du projet et des fonctionnalités souhaitées. En règle générale, un site vitrine de base comprenant quelques pages essentielles (accueil, services, à propos, contact) peut être livré en 2 à 4 semaines. Pour des projets plus complexes, incluant un blog ou des intégrations spécifiques, le délai peut être plus long. Le calendrier dépend également de la rapidité avec laquelle vous me fournissez vos contenus (textes, images, logos). Ensemble, nous définissons toujours un planning clair dès le départ, afin que vous sachiez exactement à quoi vous attendre."
    },
    
    {
      question: "Quels sont vos tarifs ?",
      answer: "Je n’ai pas de tarif unique, car chaque projet est différent. Le prix dépend du nombre de pages, des fonctionnalités (galerie photo, blog, formulaire, boutique…), du niveau de personnalisation et du travail de SEO nécessaire. Après un premier échange pour comprendre vos besoins, je vous envoie un devis détaillé et transparent. Pas de surprise : vous savez exactement ce qui est inclus."
    },
    {
      question: "Proposez-vous une maintenance après la mise en ligne ?",
      answer: "Oui. Un site a besoin de petites attentions régulières pour rester sécurisé et performant. Je propose donc des forfaits de maintenance qui incluent les mises à jour techniques, les sauvegardes automatiques et la surveillance de la sécurité. Cela vous permet d’avoir l’esprit tranquille, en sachant que je m’occupe de votre site même après sa mise en ligne."
    },
    {
      question: "Quels contenus dois-je vous fournir ?",
      answer: "L’idéal est que vous prépariez vos textes, vos photos et votre logo, car personne ne connaît mieux votre activité que vous. Si vous n’avez pas encore tout, pas d’inquiétude : je peux vous accompagner. Selon vos besoins, je propose en option la rédaction de contenus adaptés au web et au SEO, la recherche d’images libres de droit ou l’optimisation de vos photos pour le site. L’objectif est de créer ensemble un site fidèle à votre univers et attractif pour vos visiteurs."
    },
    {
      question: "Pourquoi choisir un site vitrine plutôt qu’une page sur les réseaux sociaux ?",
      answer: "Un site vitrine est une base solide et professionnelle. Contrairement aux réseaux sociaux, il vous appartient à 100% : aucun risque de voir vos contenus disparaître ou votre visibilité réduite par un algorithme. Votre site est accessible en permanence, peut évoluer avec votre activité et, surtout, il est référencé sur Google, là où vos clients vous cherchent. Les réseaux sociaux sont utiles en complément, mais un site vitrine reste votre carte de visite moderne et évolutive, que vous contrôlez totalement."
    },
  {
  question: "Et si j’ai d’autres questions ?",
  answer: (
    <>
      Si vous avez encore des doutes ou besoin d’éclaircissements, n’hésitez pas à me contacter directement via le{" "}
       <Link to="/contact">formulaire de contact</Link>.    
      Je serai ravie d’échanger avec vous et de répondre à vos questions de manière personnalisée.
    </>
  )
}


  ];

  return (
    <section className="faq">
      <h1>Foire aux questions</h1>
    

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              {item.question}
            </button>
            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

     <div className="retour-accueil contact-retour">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    Retour à l’accueil
  </Link>
</div>

    </section>
  );
}

export default Faq;
