import React from "react";

import "./SkillsList.css";

const SkillsList = (props) => {
  return (
    <div className="skills-list">
      <p className="skills-list__title">{props.title}</p>
      <ul>
        {props.skills.map((skill) => (
          <li>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
