import React from "react";
import ParticlesBackground from "../UI/ParticlesBackground";
import "./Home.css";

const Home = () => {
  const height = Math.round(window.innerHeight);
  const width = Math.round(window.innerWidth);

  return (
    <div>
      <ParticlesBackground height={height} width={width} />
      <div id="home">
        <div className="home">
          <p className="home__title">
            Hello, I'm <span>Lior</span>. <br /> I'm a Full Stack web developer.
          </p>
          <a href="#about-me">
            <div className="home__button">
              About Me&nbsp;
              <div class="home__arrow">&#10145;</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
