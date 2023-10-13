import { Helmet } from "react-helmet";

//Styles
import "../scss/home.scss";

//Composants
import PrimaryButton from "../components/buttons/primary-button";
import SecondaryButton from "../components/buttons/secondary-button";
import Arguments from "../components/arguments.jsx";

//Data
import argumentsData from "../data/arguments.json";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Réservez simplement vos places pour l'une de nos séances"
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
        <link rel="canonical" href="https://www.laclac.fr/" />
        <meta property="og:url" content="https://www.laclac.fr/" />
        <meta property="og:site_name" content="La CLAC" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La CLAC" />
        <meta
          property="og:description"
          content="Réservez simplement vos places pour l'une de nos séances"
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
          content="Réservez simplement vos places pour l'une de nos séances"
        />
        <meta
          name="twitter:image"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <title>LA CLAC</title>
      </Helmet>

      <header className="header-container">
        <video className="bg-video" autoPlay={true} loop={true} controls={false} playsInline muted  >
          <source src="/mp4/main-background-video.mp4" type="video/mp4" />
        </video>
        <div className="head-bloc">
          <a className="social-button" href="https://linktr.ee/assolaclac">
            Suivez-nous sur les réseaux
          </a>

          <h1 className="title"> 35 ans sur les planches </h1>
          <h2 className="subtitle">
            Découvrez ou re-découvrez l’art du spectacle amateur dans un show
            unique et familial.
          </h2>
          <div className="btn-bloc">
            <PrimaryButton 
              btnText="Réserver par téléphone"
              btnLink="tel:0640235591"
            />
            <SecondaryButton btnText="Réserver en ligne" btnLink="/seances" />
          </div>
        </div>
      </header>

      <div className="about">
        <div className="about-container">
          <div className="content">
            <div>
              <p className="about-ancre"> A propos de nous.</p>
            </div>
            <h3 className="title">35 ans d'existence.</h3>
            <p className="paragraphe">
              Créée en 1988, mais officiellement association indépendante en
              1992, l'association La CLAC (Chapelle Largeau Association
              Culturelle) regroupe, en 2022, plus de 120 adhérents tous
              bénévoles. Nous organisons notre spectacle de variétés annuel les
              deux derniers weekends complets de novembre. Réunissant plusieurs
              générations d'acteurs allant de 10 ans à 80 ans.
            </p>
          </div>
          <div className="content">
            <div className="arguments-list">
              {argumentsData.map((argIndex) => {
                return (
              <Arguments  argIndex={argIndex}/>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
