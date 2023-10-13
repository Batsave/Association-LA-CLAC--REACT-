import navbardata from "../data/NavBarData.json";
import "../scss/components/navbar.scss";
import "../scss/root.scss";
import { NavLink as Link } from "react-router-dom";
import SecondaryButton from "./buttons/secondary-button.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="link-container">
        {navbardata.map((navdataIndex) => {
          return navdataIndex.btn === false ? (
            <li key={navdataIndex.id} className="link"  >
              <Link to={navdataIndex.linkurl} 
              exact activeClassName="active">{navdataIndex.linkname}</Link>
            </li>
          ) : (
            <li className="link" key={navdataIndex.id} to={navdataIndex.link}>
              <SecondaryButton 
                btnText={navdataIndex.linkname}
                btnLink={navdataIndex.linkurl}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
// je viens de comprendre ! Par défault il lui donne un id de 0 a X et la je lui redonnais un id de 0 a x par dessus
