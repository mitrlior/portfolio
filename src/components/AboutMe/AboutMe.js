import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="about reveal">
        <p className="about-me__title">About Me</p>
        <div className="about-me__container">
          <ul className="about-me__items">
            <li className="about-me__item">Full Stack / Backend Developer</li>
            <li className="about-me__item">
              1 year experience in Backend Development with JavaScript and
              TypeScript
            </li>
            <li className="about-me__item">
              Passionate about new technologies and fast learner
            </li>
            <li className="about-me__item">
              B.Sc in Software Engineering from Afeka college with majoring in
              AI and deep learning
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
