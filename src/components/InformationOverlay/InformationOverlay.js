import React, { Component } from 'react';
import './InformationOverlay.css'

class InformationOverlay extends Component {
  render(){
    let overlayClassName = 'information-overlay-container';
    if (this.props.isOpenOverlay){
      overlayClassName += ' information-overlay-container-open';
    } else if (overlayClassName.includes('information-overlay-container-open')){
      overlayClassName.replace('information-overlay-container-open','');
      overlayClassName = overlayClassName.trim();
    }

    return (
      <div className={overlayClassName}>
        <div onClick={this.props.onCloseInfoOverlayClicked}> X </div>
        <h1>I am InformationOverlay!!!</h1>
      </div>
    );
  }
}

export default InformationOverlay;
