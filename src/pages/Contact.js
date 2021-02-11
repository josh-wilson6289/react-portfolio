import React from "react";
import "../App.css";

function Contact() {
  return (
  <main className="contact">
<div className="jumbotron" id="contact-jumbotron">
  <h1 className="display-4">Thanks for stopping by!</h1>
  <p className="lead">Let's get in touch.</p>
  <hr className="my-4"></hr>
  <br></br>
  <div className="row contact-info">
  <p>Email: joshua.wilson6289@gmail.com</p>
    </div>
    <div className="row contact-info">
  <p>Phone: (978) 979-4214</p>
    </div>
</div>
  </main>
  );
}

export default Contact;