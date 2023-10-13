import "../scss/components/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-logo"></a>
        <div className="section">
          <p className="section-title">A propos</p>
          <p className="section-text">
            {" "}
            L'association LA CLAC est une association à but non lucratif qui
            organise des événements ainsi que des spectacles de varietés les
            deux derniers weekends complet de novembre.
          </p>
        </div>

        <div className="section">
          <p className="section-title">Légale</p>
          <ul className="section-list">
            <li className="section-item">
              <a href="#">Mentions Légales</a>
            </li>
            <li className="section-item">
              <a href="#">CVG</a>
            </li>
            <li className="section-item">
              <a href="#">Cookies</a>
            </li>
            <li className="section-item">
              <a href="#">Contact</a>
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
