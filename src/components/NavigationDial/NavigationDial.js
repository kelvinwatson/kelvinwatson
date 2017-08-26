import React, { Component } from 'react';
import './NavigationDial.css'

class NavigationDial extends Component {
  render(){
    return (
      <nav>
        <ul id="navigationDial">
          <div className="quadrant" id="quadrant1" onClick={this.props.onHireClicked}>
            <div className="quadrant-text quadrant-text-1">HIRE</div>
          </div>
          <div className="quadrant" id="quadrant2" onClick={this.props.onProjectsClicked}>
            <div className="quadrant-text quadrant-text-2">PROJECTS</div>
          </div>
          <div className="quadrant" id="quadrant3" onClick={this.props.onTechnologiesClicked}>
            <div className="quadrant-text quadrant-text-3">STACK</div>
          </div>
          <div className="quadrant" id="quadrant4" onClick={this.props.onInfoClicked}>
            <div className="quadrant-text quadrant-text-4">ME</div>
          </div>
          <li id="rotator1"></li>
          <li id="rotator2"></li>
          <li id="rotator3"></li>
          <li id="rotator4"></li>

          <div className="line line-black line1"></div>
          <div className="line line-black line1a"></div>

          <div className="line line-black line2"></div>
          <div className="line line-black line2a"></div>



          <div className="line line-black line3"></div>
          <div className="line line-black line3a"></div>

         <div className="line line-black line4"></div>
         <div className="line line-black line4a"></div>

        </ul>
      </nav>
    );
  }
}

export default NavigationDial;
