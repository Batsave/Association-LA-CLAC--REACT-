import navbardata from "../data/NavBarData.json";
import "../scss/components/navbar.scss";
import "../scss/root.scss";
import { NavLink as Link } from "react-router-dom";
import SecondaryButton from "./buttons/secondary-button.jsx";


export default function Burger() {
    return (
      <nav className="menuToggle">
       
          <input type="checkbox" aria-label="Menu"/>
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
          {navbardata.map((navdataIndex) => {
            return navdataIndex.btn === false ? (
              <li key={navdataIndex.id} className="link"  >
                <Link to={navdataIndex.linkurl} 
                >{navdataIndex.linkname}</Link>
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
  