import React, { Component } from 'react';
import './NavigationDial.css'

class NavigationDial extends Component {
  render(){
    return (
      <nav>

        <ul id="navigationDial">


          <div className="quadrant" id="quadrant1"></div>
          <div className="quadrant" id="quadrant2"></div>
          <div className="quadrant" id="quadrant3"></div>
          <div className="quadrant" id="quadrant4"></div>
          <li id="rotator1"></li>
          <li id="rotator2"></li>
          <li id="rotator3"></li>
          <li id="rotator4"></li>
          {/*<div className="quadrant" id="quadrant1"></div>*/}


        </ul>
        {/*}<div className="ring">
          <div className="led-container-projects">
            <div className="led-projects"></div>
            <a id="led-overlay-projects" href="#projectsSection">
              <div id="nav-hover-title-projects">PROJECTS</div>
            </a>
          </div>

          <div className="led-container-tech">
            <div className="led-tech"></div>
            <a id="led-overlay-tech" href="#technologiesSection">
              <div id="nav-hover-title-tech">TECH STACK</div>
            </a>
          </div>

          <div className="led-container-hire">
            <div className="led-hire"></div>
            <a id="led-overlay-hire" href="#hireSection">
              <div id="nav-hover-title-hire">HIRE ME</div>
            </a>
          </div>

          <div className="led-container-career">
            <div className="led-career"></div>
            <a id="led-overlay-career" href="#hireSection">
              <div id="nav-hover-title-career">CAREER</div>
            </a>
          </div>

          <div className="inner-glow-career"></div>
          <div className="inner-glow-hire"></div>

          <div className="face"></div>
        </div>*/}

      </nav>
    );
  }
}

export default NavigationDial;
