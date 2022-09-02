// import {Navbar as NavbarBs} from "react-bootstrap"
export default function Navbar(){
    return(
      <nav className="navbar">
        <div className="container nav--container">
        <a className="logo--container">
          arsen
        </a>
        <nav className="nav">
          <ul className="nav--ul">
            <li className="nav--li">
              <a className="nav__link active-link">Home</a>
            </li>
            <li className="nav--li">
              <a className="nav__link active-link">Shop</a>
            </li>
            <li className="nav--li">
              <a className="nav__link active-link">Contact</a>
            </li>
            <li className="nav--li">
              <a className="nav__link active-link">About</a>
            </li>
          </ul>
        </nav>
        </div>
      </nav>
    )
}