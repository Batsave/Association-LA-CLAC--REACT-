import "../scss/legal.scss";
import { Helmet } from "react-helmet";

export default function MentionsLegales() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mentions légales de l'association la CLAC"
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
        <link rel="canonical" href="https://www.laclac.fr/mentions-legales" />
        <meta
          property="og:url"
          content="https://www.laclac.fr/mentions-legales"
        />
        <meta property="og:site_name" content="La CLAC" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mentions Légales | La CLAC" />
        <meta
          property="og:description"
          content="Mentions légales de l'association la CLAC"
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
          content="Mentions légales de l'association la CLAC"
        />
        <meta
          name="twitter:image"
          content="https://www.laclac.fr/webp/share-cover.webp"
        />
        <title>Mentions Légales | LA CLAC</title>
      </Helmet>
    </main>
  );
}
