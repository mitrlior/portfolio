import React from "react";
import Canvas from "../UI/ParticlesBackground";
import "./Home.css";

const Welcome = () => {
  return (
    <div>
      <Canvas />
      <div className="about-me">
        <p className="about-me__title">
          Hello, I'm Lior. <br /> I'm a full-stack web developer.
        </p>
        <div className="about-me__button">
          About me&nbsp;
          <div class="about-me__arrow">&#10145;</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
