import React from "react";
import Project from "./Project";

import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Bird's identifier",
      git: "https://github.com/mitrlior/BirdsAppFinalProject",
      image: `${process.env.PUBLIC_URL}/img/bird.png`,
      description:
        "Birds identifier app, for Software Engineering final project, react-native, Flask, AWS",
    },
    {
      id: 1,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: `${process.env.PUBLIC_URL}/img/nuble.jpg`,
      description: "You get 6 tries to guess the hidden equation!",
    },
    {
      id: 2,
      title: "Memory Game",
      git: "https://github.com/mitrlior/Memory-Game",
      demo: "https://mitrlior.github.io/Memory-Game/",
      image: `${process.env.PUBLIC_URL}/img/memory-game.png`,
      description: "Memory game with React",
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
