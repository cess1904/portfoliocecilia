import '../styles/sections/Contact.css'

function Contact() {
  return (
    <section className="contact" id='contact'>
      <h2 className="contact-title">Contactez-moi</h2>
      <h3 className="contact-subtitle">Un projet en tête ?</h3>
      <p className="contact-text">
        Remplissez ce formulaire et je vous répondrai rapidement.
      </p>

      <form className="contact-form">
        <label htmlFor="name">Votre nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex : Maître Yoda"
          required
        />

        <label htmlFor="email">Votre email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ex : maitre.yoda@force.com"
          required
        />

        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          placeholder= "Votre message passera du côté obscur ici 👇"
          rows="5"
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

export default Contact
