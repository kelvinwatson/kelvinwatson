import React, { Component } from 'react';
import './Toolbar.css'

class Toolbar extends Component {
  render(){
    return (
      <div className="toolbar-flex-parent">
        <div className="toolbar-flex-item">
          <div className="info left-icon" onClick={this.props.onInfoClicked}>
            <div className={this.props.infoClass}>i</div>
          </div>
          <div className="info right-icon">
            <div className={this.props.infoClass}>s</div>

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
      </div>
    );
  }
}

export default Toolbar;
