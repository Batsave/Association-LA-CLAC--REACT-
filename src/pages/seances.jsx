import DatesList from "../components/DatesList.jsx";
import datesdata from "../data/datesData.json";
import "../scss/seances.scss";
import "../scss/root.scss";
import { Helmet } from "react-helmet";

function Representations() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Réservez simplement vos places pour l'une de nos séances"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <link rel="canonical" href="https://www.dev-bsprod.fr/seances"/>
        <meta property="og:url" content="https://www.laclac.fr/seances"/>
        <meta property="og:site_name" content="Séances | La CLAC"/>
        <meta property="og:locale" content="fr_FR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Séances | La CLAC"/>
        <meta property="og:description" content="Réservez simplement vos places pour l'une de nos séances"/>
        <meta property="og:image" content="https://www.laclac.fr/webp/share-cover.webp"/>
        <meta property="og:image:secure_url" content="https://www.laclac.fr/webp/share-cover.webp"/>
        <meta property="og:image:width" content="584"/>
        <meta property="og:image:height" content="384"/>
        <meta property="fb:pages" content=""/>
        <meta property="fb:admins" content=""/>
        <meta property="fb:app_id" content=""/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content=""/>
        <meta name="twitter:creator" content=""/>
        <meta name="twitter:title" content="Séances | La CLAC"/>
        <meta name="twitter:description" content="Réservez simplement vos places pour l'une de nos séances"/>
        <meta name="twitter:image" content="https://www.laclac.fr/webp/share-cover.webp"/>
        <title>Séances | LA CLAC</title>
        
      </Helmet>

      <div className="header">
        <h1 className="title">Nos séances et tarifs</h1>
        <h2 className="subtitle">
          Réservez simplement et rapidement vos places pour nos séances.
        </h2>
      </div>
      <div className="list-container">
        {datesdata.map((datesItem) => {
          return <DatesList key={datesItem.id} data={datesItem} />;
        })}
      </div>
    </main>
  );
}

export default Representations;
