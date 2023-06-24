import React from "react";
import SkillsList from "./SkillsList";
import "./Skills.css";

const Skills = () => {
  const skillsLists = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
      key: 0
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "HTML", "JavaScript", "CSS"],
      key: 1
    },
    {
      title: "Backend Technologies",
      skills: ["Node js","Express", "Flask", "Spring"],
      key: 2
    },
  ];
  return (
    <div id="skills">
      <div className="reveal">
        <h1>My Skills</h1>
        <div className="skills__container">
          {skillsLists.map((item) => (
            <div className="skills__item">
              <SkillsList title={item.title} skills={item.skills} key={item.key}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
