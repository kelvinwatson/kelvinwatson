import React, { Component } from 'react';
import './InformationOverlay.css'

class InformationOverlay extends Component {
  render(){
    return (
      <div className={`information-overlay-container ${this.props.isOpenOverlay ? 'information-overlay-container-open information-overlay-container-animation' : ''}`}>
        <div className="content-wrapper">
          <div onClick={this.props.onCloseInfoOverlayClicked}> X </div>

          <h1>I am Kelvin Watson</h1>

          <div className="information-overlay-text-flex">
            <div className="information-overlay-text-flex-item">
              <p>In my past life, I was a hospital pharmacist.</p>
              </div>
            <div className="information-overlay-text-flex-item">
              <p>Right</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InformationOverlay;
