import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const sections = [
  {
    title: <i class="fa-solid fa-house" />,
    destination: "#home",
    key: 0,
  },
  {
    title: <i class="fa-solid fa-circle-info" />,
    destination: "#about-me",
    key: 1,
  },
  {
    title: <i class="fa-solid fa-gears" />,
    destination: "#skills",
    key: 2,
  },
  {
    title: <i class="fa-solid fa-diagram-project" />,
    destination: "#my-projects",
    key: 3,
  },
  {
    title: <i class="fa-solid fa-address-card" />,
    destination: "#contact-me",
    key: 4,
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
