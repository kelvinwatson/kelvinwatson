import React, { Component } from 'react';
import './ScrollSpyBar.css'

class ScrollSpyBar extends Component {
  render(){
    let scrollSpyVisibility = 'scrollspy-menu-visible';
    if (/Mobi/.test(navigator.userAgent)){
      scrollSpyVisibility = 'scrollspy-menu-hidden'
    }
    return (
      <div id="scrollspy-menu" className={scrollSpyVisibility}>
        <ul>
          <li>
            <div onClick={this.props.simulateUpScroll} className={`scrollspy-menu__anchor scrollspy-menu__anchor--${this.props.isFirstScrollSpyItemActive}`}>
            </div>
          </li>
          <li>
            <div onClick={this.props.simulateDownScroll} className={`scrollspy-menu__anchor scrollspy-menu__anchor--${this.props.isSecondScrollSpyItemActive}`}>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}

export default ScrollSpyBar;
