import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navigation">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="index.html">Josh Wilson</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="portfolio.html">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact.html">Contact</Link>
          </li>
        </ul>

    </nav>
  </header>
  )
}

export default Navbar;