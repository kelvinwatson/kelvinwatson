import React, { Component } from 'react';
import './StaticParallaxContainer.css'

class StaticParallaxContainer extends Component {
  render(){
    return (
      <section className={`static-background  ${this.props.backgroundClass} ${this.props.scrollBackgroundClass}`}>

        <div className="static-content-wrapper static-content-wrapper-override">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default StaticParallaxContainer;
