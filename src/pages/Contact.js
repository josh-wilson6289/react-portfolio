import React from "react";

function Contact() {
  return (
  <main className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contact</h1>
        </div>
      </div>
    </div>



    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form action="mailto:#" method="POST" enctype="text/plain">
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Name</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea2" name="message" rows="3"></textarea>
            </div>
            <div className="submit">
              <div className="row">
                <div className="col-md-12">
                  <input className="btn btn-dark float-right" type="submit" value="Send"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>
  </main>
  );
}

export default Contact;