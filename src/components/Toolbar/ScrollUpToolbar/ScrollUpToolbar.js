import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import '../Toolbar.css';
import './ScrollUpToolbar.css';

class ScrollUpToolbar extends Component {
  render(){
    return (
      <Toolbar>
        <div className="toolbar-flex-item">
          <div className="info cancel-icon-container" onClick={this.props.simulateUpScroll}>
            <div className={`info-${this.props.isTextBlack ? 'black':'white'} cancel-icon non-italic`}> ^ </div>
          </div>
        </div>
        <div className="toolbar-flex-item">
          <h1 className={`${this.props.isTextBlack ? 'black': 'white'}-text title`}>{this.props.title}</h1>
        </div>
        <div className="toolbar-flex-item color-toggle">
          <input type="hidden" />
        </div>
      </Toolbar>
    );
  }
}

export default ScrollUpToolbar;
