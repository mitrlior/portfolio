import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const sections = [
  {
    title: "home",
    destination: "#home",
    key: 0
  },
  {
    title: "about me",
    destination: "#about-me",
    key: 1
  },
  {
    title: "skills",
    destination: "#skills",
    key: 2
  },
  {
    title: "my projects",
    destination: "#my-projects",
    key: 3
  },
  {
    title: "contact me",
    destination: "#contact-me",
    key: 4
  },
];

const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav class="nav-bar__menu">
        {sections.map((section) => (
          <NavBarItem title={section.title} destination={section.destination} key={section.key} />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
