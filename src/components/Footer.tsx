import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function () {
  return (
    <footer className="footer">
      <div className="footer--container container grid">
        <div className="reach--footer">
          <ul className="reach--ul footer--ul">
            <h3 className="reach--title--footer title--footer">Reach us </h3>
            <li>
              <FontAwesomeIcon icon="envelope" className="footer--icon icon" />{" "}
              Email: info@arsensanat.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer--icon icon" />{" "}
              Contact number: 09124840863-33314450
            </li>
            <li>
              <FontAwesomeIcon
                icon={faAddressCard}
                className="footer--icon icon"
              />
              Postal code: 1712875331
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="footer--icon icon"
              />
              Address: Siahsang, Khorramdasht Industrial Estate,
              <br /> Syed Al Shahada Blvd., between 4 and 5 Galil, P67
            </li>
            <li className="social_media--footer">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="icon " />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="icon " />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="icon " />
              </a>
            </li>
          </ul>
        </div>

        <div className="Our Services">
          <ul className="footer--ul">
            <h3 className="title--footer">Our Servises</h3>
            <li>Products</li>
            <li>Designing</li>
            <li>Consultation</li>
          </ul>
          <h3 className="title--footer alert_title--footer">
            Sign Up for industry alert
          </h3>
          <input type="email" className="footer--input input" />
          <button className="button footer--button">Sign Up!</button>
        </div>
      </div>
    </footer>
  );
}
