import React, { Component } from 'react';

import './AnimatedParallaxContainer.css'

class AnimatedParallaxContainer extends Component {
  render(){
    let backgroundClassName = 'background ' +
      (this.props.backgroundClass || '') +
      ' ' +
      (this.props.scrollBackgroundClass || '');

    if (this.props.isOpenOverlay){ // should slide out and fade out
      backgroundClassName += ' background-slide-off-screen';
    } else if (backgroundClassName.includes('background-slide-off-screen')){
      backgroundClassName.replace('background-slide-off-screen', '');
      backgroundClassName = backgroundClassName.trim();
    }

    return (
      <section className={backgroundClassName}>
        <div className="animated-content-wrapper">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default AnimatedParallaxContainer;
