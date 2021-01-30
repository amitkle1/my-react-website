import React from "react";
import "../App.css";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container" id="about">
      <div className="row">
        <div className="image">
          <img src="https://i.ibb.co/tsbVTZD/pic.jpg" alt="myPic" />
        </div>
        <div className="resume">
          <h1>I'm Amit Klein</h1>
          <p>
            I am a fullstack developer, specialize in{" "}
            <b>React and NodeJS, Html. CSS/SCSS. </b>
            I'm Highly motivated, A decision maker who finds solutions to
            problems. Have the ability to work in a highly pressurised
            environment. I consider myself as a team player with great
            interpersonal skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
