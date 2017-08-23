import React, { Component } from 'react';
import './ScrollSpyBar.css'

class ScrollSpyBar extends Component {
  render(){

    return (
      <div id="scrollspy-menu">
        <ul>
          <li>
            <div className={`scrollspy-menu__anchor scrollspy-menu__anchor--${this.props.isFirstScrollSpyItemActive}`}>
              <a href="#topSection" onClick={this.props.simulateUpScroll}></a>
            </div>
          </li>
          <li>
            <div className={`scrollspy-menu__anchor scrollspy-menu__anchor--${this.props.isSecondScrollSpyItemActive}`}>
              <a href="#bottomSection" onClick={this.props.simulateDownScroll}></a>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}

export default ScrollSpyBar;
