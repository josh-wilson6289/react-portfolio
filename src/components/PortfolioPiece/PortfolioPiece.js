import React from "react";
import "./style.css";



function PortfolioPiece(props) {
  
  return(
      <div className="col-md-12">
      <div id="portfolio-piece">
      <div className="portfolio-padding"></div>
        <h2>{props.title}</h2>
      <div className="row">
        <img className="portfolio-img" src={props.image} alt={props.alt}></img>
      </div>
        <div className="row col-md-12">
        <p className="project-description">{props.description}</p>
        </div>
        <div className="row col-md-12">
        <p id="technologies">Technologies Used: {props.technologies}</p>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
        <a className="btn btn-dark" href={props.github} target="_blank"
        role="button">GitHub Repo</a>
          <div className="col-md-3"></div>
        <a className="btn btn-dark btn-right" href={props.deployed}
        target="_blank" role="button">Deployed Site</a>
        </div>
        <div className="portfolio-padding"></div>
      </div>
      <div className="portfolio-padding"></div>
    </div>
  );
}

export default PortfolioPiece;