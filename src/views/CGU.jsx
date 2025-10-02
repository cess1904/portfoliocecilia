import { Link } from "react-router-dom"

import "../styles/views/CGU.css" 


// src/pages/CGU.jsx
function CGU() {
  return (
   <section className="cgu">
  <h1>Conditions Générales d’Utilisation (CGU)</h1>

  <h2>Objet</h2>
  <p>
    Les présentes Conditions Générales d’Utilisation ont pour objet de définir les modalités d’accès et d’utilisation du site 
    par tout utilisateur. En accédant à ce site, vous acceptez de respecter ces conditions.
  </p>

  <h2>Accès au site</h2>
  <p>
    Le site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. 
    Tous les frais relatifs à la connexion et au matériel informatique restent à la charge de l’utilisateur.
  </p>

  <h2>Utilisation du site</h2>
  <p>
    L’utilisateur s’engage à utiliser le site de manière loyale et à ne pas perturber son bon fonctionnement. 
    Toute tentative d’accès non autorisé aux données ou systèmes est strictement interdite.
  </p>

  <h2>Propriété intellectuelle</h2>
  <p>
    L’ensemble des contenus présents sur le site (textes, images, graphismes, logos, maquettes, codes sources, etc.) 
    est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.  
    Toute reproduction, modification, diffusion ou exploitation, même partielle, est interdite sans autorisation écrite.
  </p>

  <h2>Responsabilité</h2>
  <p>
    L’éditrice ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l’utilisateur 
    lors de l’accès au site.  
    L’éditrice décline également toute responsabilité concernant l’utilisation des informations et contenus présents sur le site.
  </p>

  <h2>Liens externes</h2>
  <p>
    Le site peut contenir des liens hypertextes vers d’autres sites.  
    L’éditrice ne dispose d’aucun contrôle sur ces sites externes et décline toute responsabilité quant à leur contenu.
  </p>

  <h2>Données personnelles</h2>
  <p>
    L’utilisation du formulaire de contact implique la transmission volontaire de données personnelles (nom, adresse e-mail, message).  
    Ces données sont traitées uniquement pour répondre aux demandes et ne sont pas communiquées à des tiers sans accord préalable.
  </p>

  <h2>Modification des CGU</h2>
  <p>
    L’éditrice se réserve le droit de modifier les présentes CGU à tout moment.  
    L’utilisateur est invité à consulter régulièrement cette page pour se tenir informé des éventuelles évolutions.
  </p>

  <h2>Loi applicable</h2>
  <p>
    Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, 
    les tribunaux français seront compétents.
  </p>

  <div className="retour-accueil contact-retour">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    Retour à l’accueil
  </Link>
</div>

</section>

  )
}   

export default CGU  