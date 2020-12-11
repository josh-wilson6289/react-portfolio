import React from "react";
import PortfolioPiece from "../components/PortfolioPiece/PortfolioPiece";

function Portfolio() {
  return (
    <div>
      <main className="portfolio">
        <div className="container">
          <div classname="row">
            <div className="col-md-12">
              <h1>Portfolio</h1>
            <br></br>
            <br></br>
            <div className="row">
              <PortfolioPiece
              title="Off Your Chest" 
              image="/react-portfolio/Assets/note-wall.jpg" 
              alt="Post-it Notes" 
              description="A digital board to post anonymous notes, appropriate for all sentiments and occasions. This app provides an online sanctum for safe expression in written form."
              github="https://github.com/Sakiskid/Note-Wall"
              deployed="https://off-your-chest.herokuapp.com">
              
              </PortfolioPiece>

              <PortfolioPiece
              title="Mars Vacation Homes"
              image="/react-portfolio/Assets/mars1.jpg" 
              alt= "Mars Landscape"
              description="Ever wonder what it would be like to live on Mars?  This project uses two different NASA APIs to display weather data and pictures."
              github="https://github.com/josh-wilson6289/mars-vacation-homes"
              deployed= "https://josh-wilson6289.github.io/mars-vacation-homes/">
              </PortfolioPiece>
            </div>
              <br></br>
              <br></br>
            
            <div className="row">
              <PortfolioPiece
              title="Weather App" 
              image="/react-portfolio/Assets/weather-app.png" 
              alt= "Weather Application"
              description="An app that uses the Open Weather API to show weather data for any city"
              github="https://github.com/josh-wilson6289/weather-app"
              deployed="https://josh-wilson6289.github.io/weather-app/">
              </PortfolioPiece>


              <PortfolioPiece
              title="Javascript Quiz"
              image="/react-portfolio/Assets/javascript-quiz.png" 
              alt= "Javascript Quiz"
              description="This website utilized DOM manipulation to generate a Javascript quiz"
              github="https://github.com/josh-wilson6289/javascript-quiz"
              deployed="https://josh-wilson6289.github.io/javascript-quiz/">
              </PortfolioPiece>
              <br></br>
              <br></br>
              </div>

              <div className="row">
              <PortfolioPiece
              title="Password Generator" 
              image="/react-portfolio/Assets/03-javascript-homework-demo.png" 
              alt= "Password Generator"
              description="This project creates a randomly generated password given user parameters"
              github="https://github.com/josh-wilson6289/password-generator"
              deployed="https://josh-wilson6289.github.io/password-generator/">
              </PortfolioPiece>


              <PortfolioPiece
              title="README Generator"
              image="/react-portfolio/Assets/readme.png" 
              alt= "README Generator"
              description="Do you hate creating README files?  This command-line application walks you through the steps and spits out a polished README for any project."
              github="https://github.com/josh-wilson6289/readme-generator">
              </PortfolioPiece>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;