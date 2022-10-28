import React from "react";
import Navigation from "./Navigation";
import "../styles/notfound.css"

function NotFound() {
  return (
    <section className="notfound">
      <h1>
        Oops! You seem to be lost.
        <br />
        You are lost definitely.
      </h1>
      <p>You can find your way back using any of these links.</p>
      <Navigation />
    </section>
  );
}

export default NotFound;
