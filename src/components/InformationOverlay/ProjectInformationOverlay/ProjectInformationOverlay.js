import React, { Component } from 'react';
import CancelToolbar from '../../Toolbar/CancelToolbar/CancelToolbar';
import InformationOverlay from '../InformationOverlay';
import '../InformationOverlay.css';

class ProjectInformationOverlay extends Component {
  render(){
    return (
      <InformationOverlay
        isOpenOverlay={this.props.isOpenOverlay}
        openOverlayFromRight={this.props.openOverlayFromRight}
        wallpaper="white">

        <CancelToolbar
          title={`Project: ${this.props.selectedProject ? this.props.selectedProject.name : ''}`}
          char="<"
          onCloseInfoOverlayClicked={this.props.onCloseInfoOverlayClicked}/>

        <div className="information-overlay-text-flex">
          <div className="information-overlay-text-flex-item information-overlay-text-flex-item-left">
            <div className="aspect-ratio aspect-ratio--1x1">
              <img className={`db bg-center cover aspect-ratio--object aspect-ratio--object-50 img ${this.props.selectedProject ? 'img-'+this.props.selectedProject.imageName : ''}`}
                alt={`${this.props.selectedProject ? this.props.selectedProject.name : ''}`}/>
            </div>
          </div>
          <div className="information-overlay-text-flex-item information-overlay-text-flex-item-right">
            <h3>Project Description</h3>
            <p>{this.props.selectedProject ? this.props.selectedProject.details : ''} </p>

            <h3>Technologies</h3>
            {this.props.selectedProject &&
              this.props.selectedProject.technologies.map((tech, index)=>
                  <span className="f6 f5 mt2 yellow-text roboto-condensed tech-list-item" key={index}>
                    {index === (this.props.selectedProject.technologies.length - 1) ? tech : tech+','}
                  </span>
              )
            }
          </div>
        </div>

      </InformationOverlay>
    );
  }
}

export default ProjectInformationOverlay;
