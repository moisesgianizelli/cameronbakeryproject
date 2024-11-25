import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="footer-container main-color text-white py-5">
      <footer className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">About Cameron Bakery</h5>
            <p>
              At Cameron Bakery, we craft freshly baked goods with love and
              dedication. Visit us to experience the taste of perfection every
              day.
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 25a Washington Street
              West, Cork, Ireland
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> (021) 241 3977
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> cameronbakery@gmail.com
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-white text-decoration-none">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="text-white text-decoration-none"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <p>Connect with us on social media:</p>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/cameronbakery"
                className="text-white me-3 fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook as any} />
              </a>
              <a
                href="https://www.instagram.com/cameron_bakery/"
                className="text-white me-3 fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram as any} />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-white fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp as any} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 pt-4 border-top border-light">
          <div className="col text-center">
            <p className="mb-0">
              © 2024 Cameron Bakery. All Rights Reserved.{" "}
              <a href="/privacy-policy" className="text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/cookie-policy" className="text-white">
                Cookie Policy
              </a>
            </p>
            <p className="mb-0">
              Website by{" "}
              <a
                href="https://moisesgianizelli.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Moises Munaldi Web Developer
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
