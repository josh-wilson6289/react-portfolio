import React from "react";
import "./style.css";
 

function Jumbotron() {
  return(
    <section className="container">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img id="pic" src="../../Assets/bio_pic.JPG" alt="Photo of Josh Wilson"></img>
            </div>
            <div className="col-md-9">
              <h1 className="display-8">Hello, my name is Josh Wilson.</h1>
              <p className="lead">I'm currently studying to become a full-stack web developer at the UT Austin Coding
                Bootcamp. My previous career was in audio engineering for commercials and film. In my spare time, I
                enjoy homebrewing and playing hockey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
