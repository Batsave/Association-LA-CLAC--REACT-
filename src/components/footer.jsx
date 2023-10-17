import "../scss/components/footer.scss";
import { NavLink as Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="/"
          className="footer-logo"
          alt="Logo Officiel de l'association LA CLAC"
        ></a>
        <div className="section">
          <p className="section-title">Informations</p>
          <p className="section-text">
            Association LA CLAC
            <br />
            laclac.fr
            <br />
            0640235591
            <br />
            contactassolaclac@gmail.com
          </p>
        </div>
        <div className="section">
          <p className="section-title">A propos</p>
          <p className="section-text">
            L'association LA CLAC est une association à but non lucratif qui
            organise des événements ainsi que des spectacles de varietés les
            deux derniers weekends complet de novembre.
          </p>
        </div>

        <div className="section">
          <p className="section-title">Légale</p>
          <ul className="section-list">
            <li className="section-item">
              <Link to="/mentionslegales">Mentions Légales</Link>
            </li>
            <li className="section-item">
              <Link to="/cgv">CGV</Link>
            </li>
            <li className="section-item">
              <Link to="/cookies">Cookies</Link>
            </li>
            <li className="section-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="spacing"></div>
      </div>
      <div className="footer-section">
        <p className="copyright">
          © 1992-2023 | ASSOCIATION LA CLAC. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
