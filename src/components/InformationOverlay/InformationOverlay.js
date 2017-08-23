import React, { Component } from 'react';
import './InformationOverlay.css'

class InformationOverlay extends Component {
  render(){
    return (
      <div className={`information-overlay-container ${this.props.isOpenOverlay ? 'information-overlay-container-open' : ''}`}>
        <div onClick={this.props.onCloseInfoOverlayClicked}> X </div>
        <h1>I am InformationOverlay!!!</h1>
      </div>
    );
  }
}

export default InformationOverlay;
