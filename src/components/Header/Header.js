import React, { Component } from 'react';
import Social from '../Social/Social';
import Toolbar from '../Toolbar/Toolbar';

class Header extends Component {
  render(){
    return (
      <div>
        <h1>I am a Header</h1>
        <Toolbar />
        <Social />
      </div>
    );
  }
}

export default Header;
