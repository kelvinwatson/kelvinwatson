import React, { Component } from 'react';
import Toolbar from '../Toolbar'
import '../Toolbar.css'

class CancelToolbar extends Component {
  render(){
    return (
      <Toolbar>
        <div className="toolbar-flex-item">
          <div className="info cancel-icon-container" onClick={this.props.onCloseInfoOverlayClicked}>
            <div className="info-white cancel-icon"> {this.props.char || 'X'} </div>
          </div>
        </div>
        <div className="toolbar-flex-item">
          <h1 className="title">{this.props.title}</h1>
        </div>
        <div className="toolbar-flex-item color-toggle">
          <input type="hidden" />
        </div>
      </Toolbar>
    );
  }
}

export default CancelToolbar;
