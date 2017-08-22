import React, { Component } from 'react';
import './Projects.css'

function Projects(props){
  console.log(props);

  let projectsList = props && props.projects
  if (projectsList){
    projectsList = projectsList.map((project) =>
      <li key={project.name}>
        {project.name}: {project.details}
        if (project.technologies){
          <ul>
            {
              project.technologies.map((tech, index)=>
                <li key={index}>
                  {tech}
                </li>
              )
            }
          </ul>
        }
      </li>
    );
  }

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <ul>
        {projectsList}
      </ul>
    </div>
  );
}

export default Projects;
