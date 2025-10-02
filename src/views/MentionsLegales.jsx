import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/views/MentionsLegales.css'

function MentionsLegales() {
  return (
    <section className="mentions-legales">
  <h1>Mentions légales</h1>

  <h2>Éditeur du site</h2>
  <p>
    Le présent site est édité par :<br />
    <strong>Cécilia [Nom de famille]</strong><br />
    Micro-entreprise – Création de sites internet et optimisation SEO<br />
    [Adresse postale]<br />
    📧 Contact : contact@[tonfuturmail].alsace<br />
    SIRET : [ton numéro une fois créé]
  </p>

  <h2>Hébergeur</h2>
  <p>
    Le site est hébergé par :<br />
    <strong>Hostinger International Ltd.</strong><br />
    61 Lordou Vironos, 6023 Larnaca, Chypre<br />
    🌐 <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">https://www.hostinger.fr</a>
  </p>

  <h2>Propriété intellectuelle</h2>
  <p>
    L’ensemble des contenus présents sur ce site (textes, visuels, codes sources, graphismes, logo, maquettes, etc.) 
    sont la propriété exclusive de Cécilia [Nom] sauf mention contraire.
  </p>
  <p>
    Toute reproduction, distribution, modification, adaptation ou publication, même partielle, est strictement interdite sans accord écrit préalable.
  </p>

  <h2>Responsabilité</h2>
  <p>
    Les informations fournies sur ce site ont un caractère purement informatif.<br />
    Malgré un soin particulier apporté à la mise à jour, aucune garantie n’est donnée quant à l’exactitude et à l’exhaustivité des contenus.<br />
    L’éditrice ne peut être tenue responsable des dommages directs ou indirects liés à l’utilisation du site ou à l’accès à des liens externes.
  </p>

  <h2>Liens externes</h2>
  <p>
    Le site peut contenir des liens vers des sites tiers. Ces liens sont proposés pour faciliter la navigation, mais 
    l’éditrice n’exerce aucun contrôle sur ces contenus et décline toute responsabilité à leur égard.
  </p>

  <h2>Données personnelles</h2>
  <p>
    Les informations envoyées via le formulaire de contact (nom, adresse e-mail, message) sont uniquement utilisées pour répondre aux demandes.<br />
    Aucune donnée n’est transmise à des tiers sans consentement.<br />
    Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez exercer vos droits d’accès, de rectification et de suppression en écrivant à : contact@[tonfuturmail].alsace
  </p>

  <h2>Loi applicable</h2>
  <p>
    Les présentes mentions légales sont soumises au droit français.
  </p>

      <div className="retour-accueil contact-retour">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    Retour à l’accueil
  </Link>
</div>

    </section>
  )
}

export default MentionsLegales
