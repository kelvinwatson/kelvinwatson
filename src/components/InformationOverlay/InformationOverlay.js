import React, { Component } from 'react';
import './InformationOverlay.css';

class InformationOverlay extends Component {
  render(){
    return (
      <div className={`information-overlay-container
          ${this.props.openOverlayFromRight ? 'information-overlay-container--open-from-right' : 'information-overlay-container--open-from-left'}
          ${this.props.isOpenOverlay ? 'information-overlay-container-open information-overlay-container-animation' : ''}
          ${this.props.wallpaper ? 'information-overlay-container-wallpaper-'+this.props.wallpaper :'information-overlay-container-wallpaper-default'}
          `}>
        <div className="information-overlay-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default InformationOverlay;
