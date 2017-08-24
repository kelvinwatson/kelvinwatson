import React, { Component } from 'react';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './ProjectsParallaxContainer.css';

class ProjectsParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <StaticParallaxContainer>
          <h1 className="detail-title">ProjectsParallaxContainer</h1>
        </StaticParallaxContainer>
    );
  }
}

export default ProjectsParallaxContainer;
