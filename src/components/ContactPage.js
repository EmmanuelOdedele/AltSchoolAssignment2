import React from "react";
import Navigation from "./Navigation";
import "../styles/contactpage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <Navigation />
      <div className="container1">
        <h1>Contact Me</h1>
        <form className="form-container">
          <div className="field">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Name"></input>
          </div>
          <div className="field">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Email"></input>
          </div>
          <div className="field">
            <label for="tel">Phone number</label>
            <input id="tel" type="text" placeholder="Phone number"></input>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea id="textarea"></textarea>
          </div>
          <button id="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
