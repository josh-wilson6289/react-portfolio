import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Navbar() {
  return (
    <header className="navigation">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="index.html">Josh Wilson</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="portfolio.html">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Navbar;