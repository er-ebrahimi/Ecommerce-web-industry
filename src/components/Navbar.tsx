import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import {Navbar as NavbarBs} from "react-bootstrap"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav--container">
        <div className="shop">
          <a className="logo--container">
            {" "}
            <FormattedMessage id="logo" defaultMessage="arsen" />
          </a>
          <Nav.Link className="shop--link">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fa-cart-shopping"
            />
          </Nav.Link>
          <Link to="/login">
            <button className="button login--button">
              <FormattedMessage id="login.button" defaultMessage="login" />
            </button>
          </Link>
        </div>

        <nav className="nav">
          <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
          <ul className="nav--ul">
            <Nav.Link
              to="/"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              <FormattedMessage id="nav.home" defaultMessage="Home" />
            </Nav.Link>

            <Nav.Link
              to="/Shop"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              <FormattedMessage id="nav.shop" defaultMessage="Shop" />
            </Nav.Link>

            <Nav.Link
              to="/Contact"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              <FormattedMessage id="nav.contact" defaultMessage="Contact" />
            </Nav.Link>

            <Nav.Link
              to="/About"
              as={NavLink}
              className="nav__link active-link nav--li"
            >
              <FormattedMessage id="nav.about" defaultMessage="About" />
            </Nav.Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
