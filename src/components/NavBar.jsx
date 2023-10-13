import navbardata from "../data/NavBarData.json";
import "../scss/components/navbar.scss";
import "../scss/root.scss";
import { NavLink as Link } from "react-router-dom";
import SecondaryButton from "./buttons/secondary-button.jsx";
import Burger from "./burger.jsx";

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
      <Burger />
    </nav>
  );
}


