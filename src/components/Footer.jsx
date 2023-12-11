import React from "react";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer-style.css";

export default function Footer() {
  return (
    <section className="footer-container mt-2">
      <div className="container">
        <div className="social-icon d-flex justify-content-center">
          <a href="/">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="fa-lg"
              style={{ color: "#00000" }}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faYoutube}
              className="fa-lg"
              style={{ color: "#00000" }}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="fa-lg"
              style={{ color: "#00000" }}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="fa-lg"
              style={{ color: "#00000" }}
            />
          </a>
        </div>
        <div className="footerNav d-flex justify-content-center">
          <ul className="d-flex justify-content-center">
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Indotrading FAQ</a>
            </li>
            <li>
              <a href="/">Terms & Condition</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footerBottom d-flex justify-content-center">
          <p>
            Copyright &copy; 2023 Indotrading - Indonesia B2B Marketplace. All
            rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
