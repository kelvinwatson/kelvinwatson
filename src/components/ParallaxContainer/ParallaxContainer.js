import React, { Component } from 'react';
import './ParallaxContainer.css'

class ParallaxContainer extends Component {
  render(){
    let className = 'background ' + this.props.backgroundClass;
    return (
      <section className={className}>
        <div className="content-wrapper">
          {this.props.children}
          
          {/* <p className="content-title">Full Page Parallax Effect</p> */}
          {/* <p className="content-subtitle">Scroll down and up to see the effect!</p> */}
        </div>
      </section>
    );
  }
}

export default ParallaxContainer;
