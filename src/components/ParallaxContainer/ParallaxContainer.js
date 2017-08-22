import React, { Component } from 'react';
import './'

class ParallaxContainer extends Component {

  render(){
    return (
      <section className="background">
        <div className="content-wrapper">
          <p className="content-title">Full Page Parallax Effect</p>
          <p className="content-subtitle">Scroll down and up to see the effect!</p>
        </div>
      </section>
    );
  }
}

export default ParallaxContainer;
