import React, { Component } from 'react';

import './DetailParallaxContainer.css'

class DetailParallaxContainer extends Component {
  render(){
    return (
      <section className={`detail-background ${this.props.wallpaperClass ? 'detail-background-'+this.props.wallpaperClass : 'detail-background-default'}`}>
        <div className="content-wrapper content-wrapper-override">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default DetailParallaxContainer;
