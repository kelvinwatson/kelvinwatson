import React, { Component } from 'react';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './HireParallaxContainer.css';

class HireParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <StaticParallaxContainer>
          <h1 className="detail-title">HireParallaxContainer</h1>
        </StaticParallaxContainer>
    );
  }
}

export default HireParallaxContainer;
