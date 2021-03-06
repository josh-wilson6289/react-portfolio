import React from "react";
import "./style.css";

function PortfolioPiece(props) {
  
  return(
    <div className="container-fluid">
      <div className="col-md-12">
      <div id="portfolio-piece">
      <div className="portfolio-padding"></div>
        <h2>{props.title}</h2>
        <div className="container-fluid">
      <div className="row">
        <img className="portfolio-img" src={props.image} alt={props.alt}></img>
      </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <p className="project-description">{props.description}</p>
        </div>
        <div className="row">
        <p id="technologies">Technologies Used: {props.technologies}</p>
        </div>
        </div>
        <div className="row col-sm-12 buttons">
          <div className="col-sm-3"></div>
        <a className="btn btn-dark" href={props.github} target="_blank"
        role="button">GitHub Repo</a>
          <div className="col-sm-3"></div>
        <a className="btn btn-dark" href={props.deployed}
        target="_blank" role="button">Deployed Site</a>
        </div>
        <div className="portfolio-padding"></div>
      </div>
      <div className="portfolio-padding"></div>
    </div>
    </div>
  );
}

export default PortfolioPiece;