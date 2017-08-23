import React, { Component } from 'react';
import './Toolbar.css'

class Toolbar extends Component {
  render(){

    const infoColor = 'info-black'; //TODO: this.props.infoColor
    return (
      <div className="toolbar-flex-parent">
        <div className="toolbar-flex-item info">
          <div className={infoColor}>i</div>
        </div>
        <div className="toolbar-flex-item color-toggle">
          <input type="checkbox" onChange={this.props.onCheckboxChecked} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
