import React, { Component } from 'react';
import SocialIcons from './SocialIcons';
import Toolbar from './Toolbar';

class Header extends Component {
  render(){
    return (
      <div>
        <h1>I am a Header</h1>
        <Toolbar />
        <SocialIcons />
      </div>
    );
  }
}

export default Header;
