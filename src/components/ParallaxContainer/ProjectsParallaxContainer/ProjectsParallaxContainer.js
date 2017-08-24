import React, { Component } from 'react';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './ProjectsParallaxContainer.css';

class ProjectsParallaxContainer extends Component {

  render(){

    let projectsList = this.props && this.props.data;
    console.log('projectsList', projectsList);
    if (projectsList){
      projectsList = projectsList.map((project) =>
        <li key={project.name} className="projects-grid-item">
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
        <StaticParallaxContainer>
          <h1 className="detail-title">ProjectsParallaxContainer</h1>
          <ul className="projects-grid">
            {projectsList}
          </ul>
        </StaticParallaxContainer>
    );
  }
}

export default ProjectsParallaxContainer;
