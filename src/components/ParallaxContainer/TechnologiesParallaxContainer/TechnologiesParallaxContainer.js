import React, { Component } from 'react';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './TechnologiesParallaxContainer.css';

class TechnologiesParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <StaticParallaxContainer>
          <h1 className="detail-title">TechnologiesParallaxContainer</h1>
        </StaticParallaxContainer>
    );
  }
}

export default TechnologiesParallaxContainer;
