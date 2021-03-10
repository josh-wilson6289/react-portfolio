import React from "react";
import "../../App.css";

function Jumbotron() {
  return(
    <section className="container">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img id="pic" src="/react-portfolio/Assets/bio_pic.JPG" alt="Photo of Josh Wilson"></img>
            </div>
            <div className="col-md-9">
              <h1 className="display-8">Hello, my name is Josh Wilson.</h1>
              <p className="lead" id="description">
                I'm a self-motivated full-stack web developer with proficiency in Javascript, HTML, and CSS.
                One of my greatest strengths is my willingness to adapt and work with a team, while learning new skills quickly to accomplish the task at hand.
                I graduated from the University of Texas Coding Bootcamp, and bring over a decade of experience as an Audio Engineer
                for film, television, and advertising.  
                Sorry for any of the annoying commercials I helped produce over the years.
                In my spare time, I enjoy homebrewing, playing hockey, and adopting way too many pets.
              </p>
              <br></br>
                <p className="center lead" id="tech">Technologies Used</p>
                <p className="lead" id="smaller-text">  
                JavaScript, ES6, React, Node, Express, 
                MongoDB, Mongoose, MySQL, Sequelize, HTML5, CSS3, Bootstrap, 
                Semantic-UI, jQuery, RESTful API, Git, GitHub, Heroku
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
