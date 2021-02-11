import React from "react";
import PortfolioPiece from "../components/PortfolioPiece/PortfolioPiece";

function Portfolio() {
  return (
    <div>
        {/* <h1>Portfolio</h1> */}
      <main className="portfolio">
        <div className="container">
           
            <div className="row">
              <PortfolioPiece
              title="inBloom" 
              image="/react-portfolio/Assets/inbloom.png" 
              alt="inBloom App Logo" 
              description="inBloom is here to take the stress away from plant care, so you can enjoy the fruits of your labor.  This full-stack web app allows users to add any plant in the world to their virtual garden."
              technologies="Node, Express, React, Bootstrap, Sequelize, MySQL, ScrollTrigger, GSAP, Trefle API, Google Authentication, Debounce Hook, Adobe Illustrator"
              github="https://github.com/Sakiskid/Note-Wall"
              deployed="https://off-your-chest.herokuapp.com">
              </PortfolioPiece>
              </div>

            <div className="row">
              <PortfolioPiece
              title="Off Your Chest" 
              image="/react-portfolio/Assets/note-wall.jpg" 
              alt="Post-it Notes" 
              description="A digital board to post anonymous notes, appropriate for all sentiments and occasions. This app provides an online sanctum for safe expression in written form."
              technologies="Anime.js, Handlebars, Sass, Node.js, MySQL, Sequelize"
              github="https://github.com/Sakiskid/Note-Wall"
              deployed="https://off-your-chest.herokuapp.com">
              </PortfolioPiece>
              </div>
       
              <div className="row">
              <PortfolioPiece
              title="Mars Vacation Homes"
              image="/react-portfolio/Assets/mars1.jpg" 
              alt= "Mars Landscape"
              description="Ever wonder what it would be like to live on Mars?  This project uses two different NASA APIs to display weather data and pictures."
              technologies="NASA APIs, jQuery, HTML, CSS, JavaScript, Node.js"
              github="https://github.com/josh-wilson6289/mars-vacation-homes"
              deployed= "https://josh-wilson6289.github.io/mars-vacation-homes/">
              </PortfolioPiece>
              </div>
            
            
            
            <div className="row">
              <PortfolioPiece
              title="Weather App" 
              image="/react-portfolio/Assets/weather-app.png" 
              alt= "Weather Application"
              description="An app that uses the Open Weather API to show weather data for any city"
              technologies="JavaScript, jQuery"
              github="https://github.com/josh-wilson6289/weather-app"
              deployed="https://josh-wilson6289.github.io/weather-app/">
              </PortfolioPiece>
              </div>

              {/* <div className="row">
              <PortfolioPiece
              title="Javascript Quiz"
              image="/react-portfolio/Assets/javascript-quiz.png" 
              alt= "Javascript Quiz"
              description="This website utilized DOM manipulation to generate a Javascript quiz"
              technologies="Vanilla JavaScript"
              github="https://github.com/josh-wilson6289/javascript-quiz"
              deployed="https://josh-wilson6289.github.io/javascript-quiz/">
              </PortfolioPiece>
              </div> */}

              <div className="row">
              <PortfolioPiece
              title="Password Generator" 
              image="/react-portfolio/Assets/03-javascript-homework-demo.png" 
              alt= "Password Generator"
              description="This project creates a randomly generated password given user parameters"
              technologies="JavaScript, HTML, CSS"
              github="https://github.com/josh-wilson6289/password-generator"
              deployed="https://josh-wilson6289.github.io/password-generator/">
              </PortfolioPiece>
              </div>

            <div className="row">
              <PortfolioPiece
              title="README Generator"
              image="/react-portfolio/Assets/readme.png" 
              alt= "README Generator"
              description="Do you hate creating README files?  This command-line application walks you through the steps and spits out a polished README for any project."
              technologies="Inquirer"
              github="https://github.com/josh-wilson6289/readme-generator">
              </PortfolioPiece>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Portfolio;