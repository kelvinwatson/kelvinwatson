import React, { Component } from 'react';

class Toolbar extends Component {
  render(){
    return (
      <div className="toolbar-flex-parent">
        <input type="checkbox" onChange={this.props.onCheckboxChecked}/>
      </div>
    );
  }
}

export default Toolbar;
