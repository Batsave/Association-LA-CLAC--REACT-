import "../scss/contact.scss";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Une question? une remarque? Contactez-nous directement ! "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.laclac.fr/contact" />
        <meta property="og:url" content="https://www.laclac.fr/contact" />
        <meta property="og:site_name" content="La CLAC" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | La CLAC" />
        <meta
          property="og:description"
          content="Une question? une remarque? Contactez-nous directement ! "
        />
        <meta
          property="og:image"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <meta property="og:image:width" content="584" />
        <meta property="og:image:height" content="384" />
        <meta property="fb:pages" content="" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="La CLAC" />
        <meta
          name="twitter:description"
          content="Une question? une remarque? Contactez-nous directement ! "
        />
        <meta
          name="twitter:image"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <title>Contact | LA CLAC</title>
      </Helmet>

      <div className="contact-page">
        <div className="contact-section">
          <h1 className="contact-title">Contactez-nous</h1>
          <p>
            Si vous avez des questions, que vous souhaites des renseignements,
            n'hésitez pas à nous contacter via ce formulaire.
          </p>
        </div>
        <div className="form-section">
          <div className="form-container">
            <form
              className="form"
              action="https://getform.io/f/28f8227c-ae20-4f08-9afb-06d4bf038be7"
              method="POST"
            >
              <input
                className="input"
                type="text"
                placeholder="Prénom"
                name="Prenom"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Nom"
                name="Nom"
                required
              />
              <input
                className="input"
                type="email"
                placeholder="Adresse email"
                name="Email"
                required
              />
              <input
                className="input"
                type="tel"
                placeholder="Téléphone"
                name="Téléphone"
                required
              />
              <input className="input" type="hidden" name="_objet" />
              <textarea
                className="inputMessage"
                type="text"
                placeholder="Message"
                name="message"
                required
              />
              <button className="send-button" type="submit">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
