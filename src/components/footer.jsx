import "../scss/components/footer.scss";


export default function Footer() {
    
  return (
    <footer className="footer">
      <div className="footer-container">
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

        <div className="footer-section">
          <p className="copyright">
            © 1992-2023 | ASSOCIATION LA CLAC. Tous droits réservés.
          </p>
        </div>
        </div>
    </footer>
  );
}
