import React, { Component } from 'react';
import HireForm from './HireForm';

class Hire extends Component {



  render(){
    return (
      <div>
        <h1>I am Hire Section</h1>
        <HireForm handleSubmit={this.props.handleSubmit}/>
      </div>
    );
  }
}

export default Hire;
