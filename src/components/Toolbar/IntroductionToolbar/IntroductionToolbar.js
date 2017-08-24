import React, { Component } from 'react';
import Toolbar from '../Toolbar'
import '../Toolbar.css'

class IntroductionToolbar extends Component {
  render(){
    return (
      <Toolbar>
        <div className="toolbar-flex-item">
          <div className="info left-icon" onClick={this.props.onInfoClicked}>
            <div className={this.props.infoClass}>i</div>
          </div>
          <div className="info right-icon">
            <div>
              <svg className={`share share-${this.props.shareIconColor}`} height="32" version="1.1" width="32" xmlns="http://www.w3.org/2000/svg">
                <desc></desc>
                <defs/>
                <path
                  fill={this.props.svgFillColor}
                  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </div>

            <div className="share-icons">
              <div className="info share-icon facebook">
                <div className={this.props.infoClass}>f</div>
              </div>
              <div className="info share-icon linkedin">
                <div className={this.props.infoClass}>L</div>
              </div>
            </div>
          </div>

        </div>
        <div className="toolbar-flex-item color-toggle">
          <input type="checkbox" onChange={this.props.onCheckboxChecked} />
        </div>
      </Toolbar>
    );
  }
}

export default IntroductionToolbar;
