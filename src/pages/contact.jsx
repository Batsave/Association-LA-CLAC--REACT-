import "../scss/contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form"
        action="https://getform.io/f/28f8227c-ae20-4f08-9afb-06d4bf038be7"
        method="POST">
        <input className="input" type="text" placeholder="Prénom" name="Prenom" required />
        <input className="input" type="text" placeholder="Nom" name="Nom" required />
        <input className="input"  type="email" placeholder="Adresse email" name="Email" required />
        <input className="input"  type="tel" placeholder="Téléphone" name="Téléphone" required />
        <input className="input" type="hidden" name="_objet"/>
        <textarea className="inputMessage" type="text" placeholder="Message" name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
