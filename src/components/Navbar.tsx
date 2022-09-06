import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// import {Navbar as NavbarBs} from "react-bootstrap"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav--container">
        <div className="shop">
          <a className="logo--container">arsen</a>
          <Nav.Link className="shop--link">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fa-cart-shopping"
            />
          </Nav.Link>
          <button className="button login--button">log in</button>
        </div>

        <nav className="nav">
          <ul className="nav--ul">
            <Nav.Link
              to="/"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              Home
            </Nav.Link>

            <Nav.Link
              to="/Shop"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              Shop
            </Nav.Link>

            <Nav.Link
              to="/Contact"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              Contact
            </Nav.Link>

            <Nav.Link
              to="/About"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              About
            </Nav.Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
