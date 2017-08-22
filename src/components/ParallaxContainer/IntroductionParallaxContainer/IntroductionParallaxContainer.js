import React, { Component } from 'react';
import ParallaxContainer from '../ParallaxContainer'
import '../ParallaxContainer.css'

class IntroductionParallaxContainer extends Component {
  render(){

    // let className this.props.backgroundClass;

    return (
      <ParallaxContainer backgroundClass={this.props.backgroundClass}>
        <h1>
          WHY HELLO THERE?
        </h1>
      </ParallaxContainer>
    );
  }
}

export default IntroductionParallaxContainer;
