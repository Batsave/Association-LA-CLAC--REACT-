import { Link } from "react-router-dom";
import "../scss/legalpages.scss";

export default function NotFound() {
  return (
    <section>
      <div className="containererror">
        <h1>Oops! Il semble que la page n'éxiste pas. </h1>
        <p className="message">
          Nous vous conseillons de retourner à la page d'accueil.
        </p>
        <Link className="btn-return" to="/">
          retourner à la page d'accueil
        </Link>
      </div>
    </section>
  );
}
