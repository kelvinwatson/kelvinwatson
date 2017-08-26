import React, { Component } from 'react';
import CancelToolbar from '../Toolbar/CancelToolbar/CancelToolbar';
import './InformationOverlay.css';

class InformationOverlay extends Component {
  render(){
    return (
      <div className={`information-overlay-container ${this.props.openOverlayFromRight ? 'information-overlay-container--open-from-right' : 'information-overlay-container--open-from-left'}
          ${this.props.isOpenOverlay ? 'information-overlay-container-open information-overlay-container-animation' : ''}`}>
        <div className="information-overlay-content-wrapper">

        {this.props.children}

{/*}          <CancelToolbar
            title="I am Kelvin Watson"
            onCloseInfoOverlayClicked={this.props.onCloseInfoOverlayClicked}/>

          <div className="information-overlay-text-flex">
            <div className="information-overlay-text-flex-item information-overlay-text-flex-item-left">
              <p>In my past life, I was a hospital pharmacist. Seven years later,
              I realized that it was time to reinvent myself and was ready for
              a new challenge, so I pursued a Computer Science degree. Now, I am
              a software engineer, with a passion for sleek and sophisticated
              user interfaces, without compromising simplicity in logic. </p>
              </div>
            <div className="information-overlay-text-flex-item information-overlay-text-flex-item-right">
              <p>Please feel free to have a look around. I collaborate with my
              husband under the alias WatsonLogic. </p>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default InformationOverlay;
