import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/card"
              >
                Card Comp
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/user"
              >
                List User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/products"
              >
                List Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
