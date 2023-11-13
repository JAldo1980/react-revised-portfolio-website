import React from "react";
export default function ProjectWordPress(props) {
  return (
    <div className="project-card margin">
      <div className="project-left-col">
        <h2>{props.headline}</h2>
        <button>{props.label}</button>
        <p>{props.description}</p>
        <ul className="tech-list">
          {props.tech.map((techItem, index) => (
            <li key={index}>{techItem}</li>
          ))}
        </ul>
        <div className="project-btn-flex">
          <a href={props.buttonOne} target="_blank">
            <button>Live Site</button>
          </a>
        </div>
      </div>
      <div className="project-right-col">
        <img
          className="project-img"
          src={props.image}
          alt="James Alderman Project Image"
        />
      </div>
    </div>
  );
}
