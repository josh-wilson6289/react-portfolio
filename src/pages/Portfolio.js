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

              <PortfolioPiece
              title="Off Your Chest" 
              image="../../Assets/note-wall.jpg" 
              alt="Post-it Notes" 
              description="A digital board to post anonymous notes, appropriate for all sentiments and occasions. This app provides an online sanctum for safe expression in written form."
              github="https://github.com/Sakiskid/Note-Wall"
              deployed="https://off-your-chest.herokuapp.com">
              </PortfolioPiece>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;