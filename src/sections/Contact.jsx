import '../styles/sections/Contact.css'

function Contact() {
  return (
    <section className="contact">
      {/* Colonne gauche */}
      <div className="contact-left">
        <h2 className="contact-title">Contactez-moi</h2>
        <h3 className="contact-subtitle">Prêt à donner vie à votre projet ?</h3>
        <p className="contact-text">
          Contactez-moi pour créer ensemble un projet qui vous ressemble.
        </p>

        {/* Ligne email */}
        {/* Ligne email */}
        <div className="contact-line contact-email">
          <h3 className="contact-line-title">E-mail :</h3>
          <span className="info">
            <a href="mailto:contact@cecilia.fr">contact@cecilia.fr</a>
          </span>
        </div>

        {/* Ligne réseaux */}
        <div className="contact-line contact-socials">
          <h3 className="contact-line-title">Rejoignez-moi :</h3>
          <span className="info">
            <a href="#">GitHub</a> | <a href="#">Facebook</a> |{' '}
            <a href="#">Instagram</a>
          </span>
        </div>
      </div>

      {/* Colonne droite */}
      <div className="contact-right">
        <iframe
          src="https://xxx.sibforms.com/serve/MUIEAMg..."
          frameBorder="0"
          scrolling="auto"
          width="100%"
          height="500"
          style={{
            borderRadius: '12px',
            border: '1px solid #ccc',
            background: '#fff',
          }}
          title="Formulaire de contact Brevo"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
