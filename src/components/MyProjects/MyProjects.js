import React from "react";
import Project from "./Project";

import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      id: 0,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: "./nuble.jpg",
      description:
        "You get 6 tries to guess the hidden equation! You get one hint, the value! All your guesses need to equate to the value to be accepted.",
    },
    {
      id: 1,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: "./nuble.jpg",
      description:
        "You get 6 tries to guess the hidden equation! You get one hint, the value! All your guesses need to equate to the value to be accepted.",
    },
    {
      id: 2,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: "./nuble.jpg",
      description:
        "You get 6 tries to guess the hidden equation! You get one hint, the value! All your guesses need to equate to the value to be accepted.",
    },
    {
      id: 3,
      title: "Nuble",
      git: "https://github.com/mitrlior/Nuble",
      demo: "https://mitrlior.github.io/Nuble/",
      image: "./nuble.jpg",
      description:
        "You get 6 tries to guess the hidden equation! You get one hint, the value! All your guesses need to equate to the value to be accepted.",
    },
  ];

  return (
    <div id="my-projects">
      <h1>My Projects</h1>
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
  );
};

export default MyProjects;
