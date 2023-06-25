import React from "react";
import Button from "../UI/Button";
import "./Project.css";

const Project = (props) => {

    const handleClick = (url) =>{
        window.open(url);
    }

  return (
    <div className="project__container reveal">
      <p className="project__title">{props.title}</p>
      <img className="project__image" src={props.image} alt={props.title} />
      <p className='project__description'>{props.description}</p>
      <Button
        title="Source"
        className=" "
        onClick={() => handleClick(props.git)}
      />
      {props.demo ?
      <Button
        title="Demo"
        className=" "
        onClick={() => handleClick(props.demo)}
      /> : null}
    </div>
  );
};

export default Project;
