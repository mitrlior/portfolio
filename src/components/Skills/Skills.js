import React from "react";
import SkillsList from "./SkillsList";
import "./Skills.css";

const Skills = () => {
  const skillsLists = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "HTML", "JavaScript", "CSS"],
    },
    {
      title: "Backend Technologies",
      skills: ["Express", "Flask", "Spring"],
    },
  ];
  return (
    <div id="skills">
      <div className="reveal">
        <h1>My Skills!</h1>
        <ul className="skills__container">
          {skillsLists.map((item) => (
            <li className="skills__item">
              <SkillsList title={item.title} skills={item.skills} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
