import React, { Component } from 'react';
import CancelToolbar from '../../Toolbar/CancelToolbar/CancelToolbar';
import InformationOverlay from '../InformationOverlay';
import '../InformationOverlay.css';

class ProjectInformationOverlay extends Component {
  render(){
    return (
      <InformationOverlay
        isOpenOverlay={this.props.isOpenOverlay}
        openOverlayFromRight={this.props.openOverlayFromRight}>

        <CancelToolbar
          title="I am Kelvin Watson"
          char="<"
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
        </div>

      </InformationOverlay>
    );
  }
}

export default ProjectInformationOverlay;
