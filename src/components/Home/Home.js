import React from "react";
import ParticlesBackground from "../UI/ParticlesBackground";
import "./Home.css";

const Welcome = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  console.log(`sizes:`);
  console.log(`sizes: ${height} , ${width}`);
  return (
    <div>
      <ParticlesBackground height={height} width={width} />
      <div className="home">
        <p className="home__title">
          Hello, I'm <span>Lior</span>. <br /> I'm a full-stack web developer.
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
