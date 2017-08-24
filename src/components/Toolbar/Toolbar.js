import React, { Component } from 'react';
import './Toolbar.css'

class Toolbar extends Component {
  render(){
    return (
      <div className="toolbar-flex-parent">

        {this.props.children}

      </div>
    );
  }
}

export default Toolbar;
