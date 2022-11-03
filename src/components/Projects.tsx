import React from 'react';
import '../styles/general.scss';
import { projects } from '../assets/projects';

import Project from './Project';

function Projects() {
  const projectList = projects.map((x, index) =>
    index % 2 === 0 ? (
      <Project
        side="left"
        title={x.title}
        description={x.description}
        github={x.github}
        website={x.website}
        img={x.img}
        altText={x.alt}
        key={x.title}
      />
    ) : (
      <Project
        side="right"
        title={x.title}
        description={x.description}
        github={x.github}
        website={x.website}
        img={x.img}
        altText={x.alt}
        key={x.title}
      />
    )
  );

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="title-container">
          <h1>Projects</h1>
        </div>
        {projectList}
      </div>
    </div>
  );
}

export default Projects;
