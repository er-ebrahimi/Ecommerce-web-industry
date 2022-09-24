import { Nav } from "react-bootstrap";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import React, { useEffect } from "react";
export default function Navbar() {
  let nav = document.getElementsByClassName("nav");
  const shopAmountSelector = useAppSelector((state) => state.SelectedProduct);
  const [shopAmount, shopAmountSetter] = React.useState(0);
  // shopAmountSetter(shopAmountSelector.)

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < shopAmountSelector.length; i++) {
      const element = shopAmountSelector[i];
      count += element.amount;
    }
    shopAmountSetter(count);
  }, [shopAmountSelector]);
  // let element = document.getElementsByClassName("shop--link");
  // let amountShoup = window.getComputedStyle(element[0], ":after");
  // let content = amountShoup["content"];
  return (
    <nav className="navbar">
      <div className="container nav--container">
        <div className="shop">
          <a className="logo--container">
            <FormattedMessage id="logo" defaultMessage="arsen" />
          </a>
          <Nav.Link className="shop--link">
            <Link to="/shopProduct">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fa-cart-shopping"
              />
              <div className="count_shop--link">{shopAmount}</div>
            </Link>
          </Nav.Link>
        </div>

        <nav className="nav" id="nav">
          <div
            className="nav--button"
            id="x_button"
            onClick={() => {
              nav[0].classList.remove("x_close");
            }}
          >
            <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
          </div>
          <ul className="nav--ul">
            <Link to="/login" className="nav__link active-link login--nav ">
              <button className="button login--button">
                <FormattedMessage id="login.button" defaultMessage="login" />
              </button>
            </Link>
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
        <div
          className=" shop"
          id="bars_button"
          onClick={() => {
            nav[0].classList.add("x_close");
          }}
        >
          <FontAwesomeIcon icon={faBars} className="fa-bars" />
        </div>
      </div>
    </nav>
  );
}
