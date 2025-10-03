import { Link } from "react-router-dom"

import "../styles/views/Confidentialite.css" 

function Confidentialite() {
  return (
   <section className="confidentialite">
  <h1>Confidentialité</h1>

  <h2>Introduction</h2>
  <p>
    Cette politique de confidentialité décrit la manière dont vos données personnelles sont collectées, 
    utilisées et protégées lors de votre navigation sur ce site.  
    En utilisant ce site, vous acceptez les pratiques décrites ci-dessous.
  </p>

  <h2>Données collectées</h2>
  <p>
    Les données que vous pouvez être amené à transmettre via le formulaire de contact sont les suivantes :
    nom, adresse e-mail et contenu du message.  
    Aucune autre donnée personnelle n’est collectée à votre insu.
  </p>

  <h2>Finalité de la collecte</h2>
  <p>
    Les informations recueillies sont utilisées uniquement pour :
    <br />– Répondre à vos demandes de contact  
    <br />– Établir un échange professionnel en vue d’une prestation  
    <br />– Vous informer sur mes services si vous en faites la demande
  </p>

  <h2>Durée de conservation</h2>
  <p>
    Vos données sont conservées pour une durée maximale de 12 mois à compter de leur collecte, 
    sauf obligation légale contraire.
  </p>

  <h2>Partage des données</h2>
  <p>
    Aucune donnée personnelle collectée via ce site n’est vendue, cédée ou partagée à des tiers sans votre consentement explicite.
  </p>

  <h2>Cookies</h2>
  <p>
    Ce site peut utiliser des cookies techniques pour améliorer la navigation et les performances.  
    Vous pouvez configurer votre navigateur afin de refuser ou supprimer ces cookies.
  </p>

  <h2>Sécurité</h2>
  <p>
    Tout est mis en œuvre pour protéger vos données personnelles contre toute perte, 
    accès non autorisé ou divulgation.  
    Cependant, aucune méthode de transmission sur Internet n’est totalement sécurisée.
  </p>

  <h2>Vos droits</h2>
  <p>
    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
    vous disposez des droits suivants :  
    <br />– Droit d’accès et de consultation  
    <br />– Droit de rectification  
    <br />– Droit à l’effacement  
    <br />– Droit à la limitation du traitement  
    <br />– Droit d’opposition  
  </p>
  <p>
    Pour exercer vos droits, vous pouvez écrire à : <strong>contact@[tonfuturmail].alsace</strong>
  </p>

  <h2>Modification de la politique</h2>
  <p>
    Cette politique de confidentialité peut être mise à jour à tout moment en fonction des évolutions légales 
    ou techniques. La version la plus récente est celle publiée sur ce site.
  </p>

  <h2>Contact</h2>
  <p>
    Pour toute question relative à cette politique de confidentialité ou à vos données personnelles, 
    vous pouvez me contacter à l’adresse suivante : <strong>contact@[tonfuturmail].alsace</strong>.
  </p>

 <div className="retour-accueil contact-retour">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
  Retour à l’accueil
  </Link>
</div>

</section>

  )
}

export default Confidentialite