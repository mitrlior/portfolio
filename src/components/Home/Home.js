import React from "react";
import Canvas from "../UI/ParticlesBackground";
import "./Home.css";

const Welcome = () => {
  return (
    <div>
      <Canvas />
      <div className="home">
        <p className="home__title">
          Hello, I'm <span >Lior</span>. <br /> I'm a full-stack web developer.
        </p>
        <div className="home__button">
          About me&nbsp;
          <div class="home__arrow">&#10145;</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
