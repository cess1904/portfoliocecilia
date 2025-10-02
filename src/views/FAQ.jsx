import { Link } from 'react-router-dom'
import '../styles/views/FAQ.css'
import { useState } from 'react'

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqData = [
    {
      question: 'Quels types de sites proposez-vous ?',
      answer:
        'Je crée principalement des <strong>sites vitrines modernes et personnalisés</strong>, pensés pour <strong>mettre en valeur votre activité et vos services</strong>. Mon but est de concevoir <strong>un site qui vous ressemble</strong> et qui <strong>parle directement à vos futurs clients</strong>. Je travaille surtout avec des <strong>indépendants, artisans, commerçants, petites entreprises et associations</strong>. Chaque projet est <strong>unique</strong> et je l’adapte à vos <strong>objectifs</strong>.',
    },
    {
      question: 'Est-ce que le site sera responsive (adapté au mobile) ?',
      answer:
        'Absolument, la majorité des internautes consultent les sites depuis leur <strong>téléphone</strong>, alors je développe tous mes sites pour qu’ils <strong>s’adaptent automatiquement à tous les écrans</strong> : ordinateur, tablette et smartphone. Je fais en sorte que le site reste <strong>clair</strong>, <strong>facile à utiliser</strong> et <strong>agréable à lire</strong>, quel que soit l’appareil utilisé. Vous aurez un <strong>seul site</strong>, mais pensé pour être <strong>efficace partout</strong>.',
    },

    {
      question: 'Proposez-vous aussi le référencement SEO ?',
      answer:
        'C’est même une <strong>partie essentielle</strong> de mon travail. Dès la conception, j’intègre les <strong>bonnes pratiques de référencement</strong> : <strong>structure claire</strong>, <strong>balises optimisées</strong>, <strong>site rapide</strong> et <strong>adapté au mobile</strong>. Je prends aussi le temps de travailler <strong>les images</strong> et la <strong>lisibilité des contenus</strong>. Si vous voulez aller plus loin, je peux vous accompagner avec une <strong>stratégie SEO personnalisée</strong> (choix des mots-clés, optimisation de vos pages, mise en place d’un blog, suivi avec <strong>Google Analytics</strong> et <strong>Search Console</strong>). Mon objectif est simple : <strong>vous aider à être plus visible sur Google</strong>.',
    },

    {
      question: 'Qui s’occupe de l’hébergement et du nom de domaine ?',
      answer:
        'Je vous conseille sur le choix de <strong>l’hébergement</strong> et du <strong>nom de domaine</strong>, mais c’est toujours <strong>vous qui en restez le propriétaire</strong>. Si vous préférez, je peux m’occuper de toute la <strong>partie technique</strong> : <strong>achat du domaine</strong>, <strong>configuration de l’hébergement</strong>, <strong>installation du certificat de sécurité (HTTPS)</strong>, <strong>mise en ligne du site</strong> et même <strong>création de vos adresses e-mail professionnelles</strong>. De cette façon, vous n’avez pas à vous soucier de l’aspect technique, tout en <strong>gardant la main sur vos accès</strong>.',
    },

    {
      question: 'Est-ce que je pourrai modifier mon site moi-même ?',
      answer:
        'Pour le moment, les mises à jour sont <strong>prises en charge pour vous</strong>, afin que le site reste toujours <strong>fiable</strong> et <strong>sécurisé</strong>. Une option permettra bientôt de <strong>modifier facilement vos textes et vos images</strong>, sans connaissances techniques. L’idée est que vous soyez toujours <strong>à l’aise</strong> avec votre site, que vous préfériez déléguer ou garder la main.',
    },

    {
      question: 'Combien de temps faut-il pour créer un site ?',
      answer:
        'Le délai dépend surtout de la <strong>taille du projet</strong> et des <strong>fonctionnalités souhaitées</strong>. En règle générale, un <strong>site vitrine simple</strong> comprenant les pages essentielles (accueil, services, à propos, contact) peut être prêt en <strong>2 à 4 semaines</strong>. Pour des projets plus <strong>complexes</strong> (par exemple avec un blog ou des intégrations spécifiques), le délai sera plus long. Le rythme dépend aussi de la <strong>rapidité avec laquelle vos contenus</strong> (textes, images, logos) sont fournis. Dans tous les cas, nous définissons toujours un <strong>planning clair dès le départ</strong>, pour que vous sachiez exactement à quoi vous attendre.',
    },

    {
      question: 'Quels sont vos tarifs ?',
      answer:
        'Il n’y a pas de <strong>tarif unique</strong>, car <strong>chaque projet est différent</strong>. Le prix dépend du <strong>nombre de pages</strong>, des <strong>fonctionnalités</strong> (galerie photo, blog, formulaire de contact…), du <strong>niveau de personnalisation</strong> et du <strong>travail SEO</strong> nécessaire. Après un <strong>premier échange</strong> pour comprendre vos besoins, je vous envoie un <strong>devis détaillé et transparent</strong>. <strong>Pas de surprise</strong> : vous savez exactement ce qui est inclus.',
    },

   {
  question: 'Proposez-vous une maintenance après la mise en ligne ?',
  answer:
    'Oui, car un site a besoin de <strong>petites attentions régulières</strong> pour rester <strong>sécurisé</strong> et <strong>performant</strong>. Je propose des <strong>forfaits de maintenance</strong> qui incluent les <strong>mises à jour techniques</strong>, les <strong>sauvegardes automatiques</strong> et la <strong>surveillance de la sécurité</strong>. L’objectif est simple : que vous ayez <strong>l’esprit tranquille</strong>, en sachant que votre site est suivi même après sa mise en ligne.',
},

    {
  question: 'Quels contenus dois-je vous fournir ?',
  answer:
    'L’idéal est que vous prépariez vos <strong>textes</strong>, vos <strong>photos</strong> et votre <strong>logo</strong>, car <strong>personne ne connaît mieux votre activité que vous</strong>. Si vous n’avez pas encore tout, pas d’inquiétude : je peux vous <strong>accompagner</strong>. Selon vos besoins, je propose en option la <strong>rédaction de contenus adaptés au web et au SEO</strong>, la <strong>recherche d’images libres de droit</strong> ou l’<strong>optimisation de vos photos</strong> pour le site. L’objectif est de <strong>créer ensemble un site fidèle à votre univers</strong> et <strong>attractif pour vos visiteurs</strong>.',
},

    {
  question:
    'Pourquoi choisir un site vitrine plutôt qu’une page sur les réseaux sociaux ?',
  answer:
    'Un <strong>site vitrine</strong> est une <strong>base solide et professionnelle</strong>. Contrairement aux réseaux sociaux, il <strong>vous appartient à 100%</strong> : aucun risque de voir vos contenus disparaître ou votre visibilité réduite par un algorithme. Votre site est <strong>accessible en permanence</strong>, peut <strong>évoluer avec votre activité</strong> et, surtout, il est <strong>référencé sur Google</strong>, là où vos clients vous cherchent. Les réseaux sociaux sont utiles en complément, mais un site vitrine reste votre <strong>carte de visite moderne et évolutive</strong>, que vous <strong>contrôlez totalement</strong>.',
},

 {
  question: 'Et si j’ai d’autres questions ?',
  answer: (
    <>
      Si quelque chose n’est pas clair ou si vous souhaitez en savoir plus,
      écrivez-moi via le{' '}
      <Link to="/contact" className="link-inline">
        <strong>formulaire de contact</strong>
      </Link>
      . Je vous répondrai avec plaisir et nous prendrons le temps d’
      <strong>échanger ensemble</strong>.
    </>
  ),
},

  ]

  return (
    <section className="faq">
      <h1>Foire aux questions</h1>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? 'active' : ''
              }`}
              onClick={() => toggle(index)}
            >
              {item.question}
            </button>
             <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {typeof item.answer === 'string' ? (
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              ) : (
                // Quand c'est du JSX (ex: avec <Link>), on l'affiche directement
                <div className="faq-answer-content">{item.answer}</div>
              )}
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
  )
}

export default Faq
