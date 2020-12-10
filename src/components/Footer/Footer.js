import React from "react";
// import "./style.css";

function Footer(){
  return(
    <footer>
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <ul className="list-group list-group-horizontal nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/joshwilsonsound/" target="_blank">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://vimeo.com/joshwilsonsound" target="_blank">Vimeo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/josh-wilson6289" target="_blank">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Assets/Sample Resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </nav>
  </footer>
  );
}

export default Footer;