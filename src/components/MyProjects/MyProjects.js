import React from "react";
import Project from "./Project";
import bird from "../../assets/bird.jpg";
import nuble from "../../assets//nuble.jpg";

import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Bird's identifier",
      git: "https://github.com/mitrlior/BirdsAppFinalProject",
      image: bird,
      description:
        "Birds identifier app, for Software Engineering final project, react-native, Flask, AWS",
    },
    {
      id: 1,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: nuble,
      description:
        "You get 6 tries to guess the hidden equation! You get one hint, the value! All your guesses need to equate to the value to be accepted.",
    },
  ];

  return (
    <div id="my-projects">
      <div className="reveal">
        <h1>My Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <Project
              id={project.id}
              title={project.title}
              image={project.image}
              git={project.git}
              demo={project.demo}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
