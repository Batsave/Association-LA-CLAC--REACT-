import "../scss/legalpages.scss";
import { Helmet } from "react-helmet";

export default function MentionsLégales() {
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

      
      <div className="container">
      <h1>Mentions Légales</h1>
      <div className="content">
        <p className="subtitle">
          Association La CLAC (association à but non lucratif)
        </p>
        <p className="paragraphe">
          Adresse : 2 place de la Vendée 79700 La Chapelle-Largeau
        </p>
        <p className="paragraphe">Président : Patrick Branger</p>
        <p className="paragraphe">Adresse Mail : assoclacclac@gmail.com</p>
      </div>
      <div className="content">
        <p className="subtitle">Contact</p>
        <p className="paragraphe">
          Nous sommes joignables via notre adresse mail.
        </p>
        <p className="paragraphe">contactassolaclac@gmail.com</p>
      </div>
      <div className="content">
        <p className="subtitle">Hebergement Web</p>
        <p className="paragraphe">
          Le nom de domaine est attribué par OVH, 2 rue Kellermann, 59100
          Roubaix, France.
        </p>
        <p className="paragraphe">
          L’Hébergement du site web est assuré par OVH, 2 rue Kellermann, 59100
          Roubaix, France.
        </p>
      </div>
      <div className="content">
        <p className="subtitle">Propriété intellectuelle</p>
        <p className="paragraphe">
          Le Site est une œuvre de l’esprit protégée par la loi. Son contenu, y
          compris les textes, illustrations, photographies et présentations sont
          strictement réservés au titre du droit d'auteur ainsi qu'au titre de
          la propriété intellectuelle. Il en va de même de la base de données
          contenue sur le Site.
        </p>
        <p className="paragraphe">
          L'association "LA CLAC" vous accorde une licence limitée,
          non-exclusive, révocable, sans droit de sous licencier sur le contenu
          du Site, et ce, pour les simples accès, navigation et utilisation liés
          au Site. Cette licence ne vous accorde aucun autre droit, en
          particulier d'exploitation commerciale de ces contenus.
        </p>
      </div>
      <div className="content">
        <p className="subtitle">Marques</p>
        <p className="paragraphe">
          Les dénominations sociales, marques et signes distinctifs figurant sur
          le Site sont protégés par la loi française et internationale.
        </p>
        <p className="paragraphe">
          Toute utilisation, reproduction, diffusion ou représentation de tout
          ou partie d'un des signes précités sans autorisation expresse écrite
          est interdite.
        </p>
      </div>
      <div className="content">
        <p className="subtitle">Limitation de responsabilité</p>
        <p className="paragraphe">
          Nous nous efforçons d'assurer, au mieux de nos possibilités,
          l'exactitude et l’actualité des informations diffusées sur le Site.
          Nous nous réservons le droit de corriger et de modifier le contenu du
          Site à tout moment et sans préavis.
        </p>
        <p className="paragraphe">
          Il appartient aux visiteurs du Site de vérifier l'information donnée
          sur le Site par d'autres moyens, y compris en nous contactant
          directement.
        </p>
        <p className="paragraphe">
          Nous déclinons toute responsabilité (a) pour toute imprécision,
          inexactitude ou omission relative aux informations disponibles sur le
          Site, (b) pour les dommages résultant d'une modification des
          informations figurant sur le Site causée par une éventuelle
          manipulation frauduleuse effectuée par des tiers et (c) pour tous
          dommages, directs ou indirects, quelles qu'en soient les causes,
          origines, nature ou conséquences, provoqués à raison de l'accès de
          quiconque au Site ou de l'impossibilité d'y accéder, de même que
          l'utilisation du Site et/ou du crédit accordé à une quelconque
          information provenant directement ou indirectement de ce dernier.
        </p>
        <p className="paragraphe">
          Les limitations de responsabilité précitées ne s’appliquent pas en cas
          de faute grave ou intentionnelle de l'association "LA CLAC" et/ou de
          mort d'un consommateur ou de dommages corporels causés à celui-ci,
          résultant d'une faute de l'association "LA CLAC".
        </p>
        </div>
      </div>
    </main>
  );
}
