import "../scss/legalpages.scss";
import { Helmet } from "react-helmet";

export default function Cookies() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Cookies de l'association la CLAC"
        />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="googlebot"
          content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.laclac.fr/cookies" />
        <meta property="og:url" content="https://www.laclac.fr/cookies" />
        <meta property="og:site_name" content="La CLAC" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cookies | La CLAC"
        />
        <meta
          property="og:description"
          content="Cookies de l'association la CLAC"
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
          content="Cookies de l'association la CLAC"
        />
        <meta
          name="twitter:image"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <title>Cookies | LA CLAC</title>
      </Helmet>

      <div className="container">
        <h1>Utilisation des Cookies</h1>
        <div className="content">
          <p className="subtitle">Qu’est-ce qu’un cookie ?</p>
          <p className="paragraphe">Un cookie est un petit fichier texte sauvegardé sur votre ordinateur lorsque vous visitez un site web. Ce fichier texte enregistre des informations qui peuvent être lues par un site web lorsque vous le visitez de nouveau plus tard. Certains de ces cookies sont nécessaires pour accéder à certaines fonctionnalités d’un site. D’autres cookies sont d’utilité pratique pour le visiteur : ils sauvegardent de manière sécurisée votre nom d’utilisateur ou vos préférences linguistiques par exemple. Les cookies signifient tout simplement qu’à chaque fois que vous visitez un site web, vous n’avez pas besoin de saisir à nouveau les mêmes informations.
</p>
          
        </div>
        <div className="content">
          <p className="subtitle">Pourquoi LA CLAC utilise des cookies ?</p>
          <p className="paragraphe">Nous utilisons des cookies pour vous fournir une expérience utilisateur optimale et adaptée à vos préférences personnelles. En utilisant les cookies,Les cookies sont également utilisés pour optimiser la performance du site.​LA CLAC a pris toutes les mesures organisationnelles et techniques pour protéger vos données personnelles ainsi que d’une éventuelle perte d’informations ou de toute forme de traitement illicite. Pour davantage d’informations, consultez notre Politique de confidentialité.​</p>
          
        </div>
        <div className="content">
          <p className="subtitle">Comment puis-je désactiver les cookies ?</p>
          <p className="paragraphe">Vous pouvez paramétrer votre navigateur Internet pour désactiver les cookies. Notez toutefois que si vous désactivez les cookies, votre nom d’utilisateur ainsi que votre mot de passe ne seront plus sauvegardés sur aucun site web.</p>
         
        </div>
        <div className="content">
          <p className="subtitle">Firefox :</p>
          <p className="paragraphe">1. Ouvrez Firefox</p>
          <p className="paragraphe">2. Appuyez sur la touche « Alt »</p>
          <p className="paragraphe">3. Dans le menu en haut de la page cliquez sur « Outils » puis « Options »</p>
          <p className="paragraphe">4. Sélectionnez l’onglet « Vie privée »</p>
          <p className="paragraphe">5. Dans le menu déroulant à droite de « Règles de conservation », cliquez sur « utiliser les paramètres personnalisés pour l’historique »</p>
          <p className="paragraphe">6. Un peu plus bas, décochez « Accepter les cookies »</p>
          <p className="paragraphe">7. Sauvegardez vos préférences en cliquant sur « OK »</p>
        </div>
        <div className="content">
          <p className="subtitle">Internet Explorer/Edge :</p>
          <p className="paragraphe">1. Ouvrez Internet Explorer</p>
          <p className="paragraphe">2. Dans le menu « Outils », sélectionnez « Options Internet »</p>
          <p className="paragraphe">3. Cliquez sur l’onglet « Confidentialité »</p>
          <p className="paragraphe">4. Cliquez sur « Avancé » et décochez « Accepter »</p>
          <p className="paragraphe">5. Sauvegardez vos préférences en cliquant sur « OK »</p>
        </div>
        <div className="content">
          <p className="subtitle">Safari:</p>
          <p className="paragraphe">1. Ouvrez Safari</p>
          <p className="paragraphe">2. Dans la barre de menu en haut, cliquez sur « Safari », puis « Préférences »</p>
          <p className="paragraphe">3. Sélectionnez l’icône « Sécurité »</p>
          <p className="paragraphe">4. À côté de « Accepter les cookies », cochez « Jamais »</p>
          <p className="paragraphe">5. Si vous souhaitez voir les cookies qui sont déjà sauvegardés sur votre ordinateur, cliquez sur « Afficher les cookies »</p>
        </div>
        <div className="content">
          <p className="subtitle">Google Chrome :</p>
          <p className="paragraphe">1. Ouvrez Google Chrome</p>
          <p className="paragraphe">2. Cliquez sur l’icône d’outils dans la barre de menu</p>
          <p className="paragraphe">3. Sélectionnez « Options »</p>
          <p className="paragraphe">4. Cliquez sur l’onglet « Options avancées »</p>
          <p className="paragraphe">5. Dans le menu déroulant « Paramètres des cookies », sélectionnez « Bloquer tous les cookies »</p>
        </div>
        
      </div>
    </main>
  );
}
