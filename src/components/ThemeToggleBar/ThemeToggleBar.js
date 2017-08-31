import React, { Component } from 'react';
import './ThemeToggleBar.css'

class ThemeToggleBar extends Component {
  render(){
    let visibilityClass = 'theme-toggle-bar-visible';
    if (/Mobi/.test(navigator.userAgent)){
      visibilityClass = 'theme-toggle-bar-invisible'
    }
    return (
      <div id="theme-toggle" className={visibilityClass}>
        <div className="dotted-white-line"></div>
        <label className="theme-toggle__label">Toggle Theme</label>
        <ul>
          <li>
            <div onClick={this.props.toggleThemeWhite} className="theme-toggle__anchor theme-toggle__anchor--white">
            </div>
          </li>
          <li>
            <div onClick={this.props.toggleThemeBlack} className="theme-toggle__anchor theme-toggle__anchor--black">
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ThemeToggleBar;
