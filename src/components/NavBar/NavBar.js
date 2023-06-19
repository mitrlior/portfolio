import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const sections = [
  {
    title: "home",
    destination: "#home",
  },
  {
    title: "about me",
    destination: "#about-me",
  },
  {
    title: "skills",
    destination: "#skills",
  },
  {
    title: "contact me",
    destination: "#contact-me",
  },
];

const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav class="nav-bar__menu">
        {sections.map((section) => (
          <NavBarItem title={section.title} destination={section.destination} />
        ))}
        <div class="dot"></div>
      </nav>
    </div>
  );
};

export default NavBar;
