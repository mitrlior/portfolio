import React from "react";

import "./NavBarItem.css";

const NavBarItem = (props) => {
  return (
    <a href={props.destination} className="nav-bar__item">
      {props.title}
    </a>
  );
};

export default NavBarItem;
