import React from "react";
// import "./style.css";



function PortfolioPiece(props) {
  
  return(
    <div className="row">
      <div className="col-md-6">
        <h2>{props.title}</h2>
        <img className="portfolio-image" src={props.image} alt={props.alt}></img>
        <p className="project-description">{props.description}</p>
        <a className="btn btn-dark" href={props.github} target="_blank"
        role="button">GitHub Repo</a>
        <a className="btn btn-dark btn-right" href={props.deployed}
        target="_blank" role="button">Deployed Site</a>
        <div className="portfolio-padding"></div>
      </div>
    </div>
  );
}

export default PortfolioPiece;