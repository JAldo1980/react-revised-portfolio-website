import React from "react";
import WordpressData from "/src/WordpressData";
import ProjectWordPress from "../components/ProjectWordPress";

export default function Wordpress() {
  const projectElements = WordpressData.map(function (project) {
    return (
      <ProjectWordPress
        key={project.headline}
        headline={project.headline}
        label={project.label}
        description={project.description}
        tech={project.tech}
        buttonOne={project.buttonOne}
        image={project.image}
      />
    );
  });

  return (
    <div className="work-container" id="wordpress-scroll">
      <h2 className="work-headline">WordPress Builds</h2>
      <main className="project-area">{projectElements}</main>
    </div>
  );
}
