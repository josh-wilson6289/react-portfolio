import React from "react";
import "./style.css";

function Footer(){
  return(
    <footer>
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <ul className="list-group list-group-horizontal nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/joshwilsonsound/" target="_blank">
          <img src="/react-portfolio/Assets/linkedin.png" href="https://www.linkedin.com/in/joshwilsonsound/" target="_blank" className="footer-icon"></img>
          LinkedIn
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="https://github.com/josh-wilson6289" target="_blank">
        <img src="/react-portfolio/Assets/GitHub.png" href="https://github.com/josh-wilson6289" target="_blank" className="footer-icon"></img>
         GitHub
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/react-portfolio/Assets/Josh_Wilson_Resume.pdf" target="_blank">
          <img src="/react-portfolio/Assets/resume.png" href="/react-portfolio/Assets/Josh_Wilson_Resume.pdf" target="_blank" className="footer-icon"></img>
            Resume
            </a>
        </li>
      </ul>
    </nav>
  </footer>
  );
}

export default Footer;