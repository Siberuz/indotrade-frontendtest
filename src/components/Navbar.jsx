import React from "react";
import logo from "../images/indoradinglogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import emptycart_icon from "../images/emptycart.svg";
import "./navbar-style.css";

export default function NavbarCustom() {
  return (
    <section className="header">
      <div className="navbar-custom fixed-top">
        <div className="top-nav d-none d-md-block">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-2 mt-3">
                <p>
                  <FontAwesomeIcon
                    icon={faMobile}
                    style={{ color: "#ffffff" }}
                    className="fa-lg me-1"
                  />
                  <a href="/">Download Indotrading Apps</a>
                </p>
              </div>
              <div class="col-4 mt-3 text-end">
                <p>
                  <a href="/" className="me-2">
                    Request Quotation
                  </a>
                  |
                  <a href="/" className="me-2 ms-2">
                    Search Project
                  </a>
                  |
                  <a href="/" className="me-2 ms-2">
                    Help
                  </a>
                  |
                  <a href="/" className="ms-2">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo-indotrading" />
            </a>
            <li className="d-flex align-items-center ms-3 d-lg-none ms-auto me-4">
              <button className="cart-icon">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  bounce
                  className="fa-lg"
                  style={{ color: "#fff" }}
                />
              </button>
            </li>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item me-3 bg-white rounded-3 p-1">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-1"
                      type="search"
                      placeholder="Search products..."
                    />
                    <select
                      name="filter-search"
                      className="filter-dropdown me-3"
                    >
                      <option value="0">Product</option>
                      <option value="1">Perusahaan</option>
                      <option value="2">Tender</option>
                    </select>
                    <button className="search-btn">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#ffffff" }}
                      />
                    </button>
                  </form>
                </li>
                <li className="d-lg-flex align-items-center ms-3 d-none">
                  <button className="cart-icon">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      bounce
                      className="fa-lg"
                      style={{ color: "#fff" }}
                    />
                  </button>
                  <div className="cart-dropdown">
                    <div className="container">
                      <img src={emptycart_icon} alt="empty-cart" />
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto d-lg-none list mt-2">
                <li class="nav-item mobile-nav-list">
                  <a class="nav-link" href="/">
                    <FontAwesomeIcon
                      icon={faMobile}
                      style={{ color: "#ffffff" }}
                      className="me-1"
                    />
                    Download Indotrading Apps
                  </a>
                </li>
                <li class="nav-item mobile-nav-list">
                  <a class="nav-link" href="/">
                    Request Quotation
                  </a>
                </li>
                <li class="nav-item mobile-nav-list">
                  <a class="nav-link" href="/">
                    Search Project
                  </a>
                </li>
                <li class="nav-item mobile-nav-list">
                  <a class="nav-link" href="/">
                    Help
                  </a>
                </li>
                <li class="nav-item mobile-nav-list">
                  <a class="nav-link" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex mt-2">
                <button className="w-100 button login-btn me-2">Login</button>
                <button className="w-100 button signin-btn">Sign In</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
