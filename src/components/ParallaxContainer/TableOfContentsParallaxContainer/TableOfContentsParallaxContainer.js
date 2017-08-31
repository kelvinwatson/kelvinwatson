import React, { Component } from 'react';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './TableOfContentsParallaxContainer.css';

class TableOfContentsParallaxContainer extends Component {

  //src: https://codepen.io/kenjiroart/pen/NNgRXj
  render(){
    return (
        <StaticParallaxContainer>

          <ScrollUpToolbar
            title="Welcome to my personal website"
            simulateUpScroll={this.props.simulateUpScroll}
            isTextBlack="true" />

          <div className="toc-flex-container">

            <div className={`toc-flex-container-item toc-flex-container-item__left ${this.props.isActivateDetailParallaxContainerBackgroundAnimation ? 'toc-flex-container-item__left--appear' : ''}`}>
              <div className="toc-flex-container-item__left--text-container">
                <div>Software Engineer &lt;CODER&gt;.</div>
                <div>Mobile Developer.</div>
                <div>Web Developer.</div>
              </div>
            </div>

            <div className="toc-flex-container-item toc-flex-container-item__right">
              <div className="toc-flex-container-item__right--text-container">
                <div onClick={this.props.onProjectsClicked}>Projects</div>
                <div onClick={this.props.onTechnologiesClicked}>Technologies</div>
                <div onClick={this.props.onHireClicked}>Hire Me</div>
              </div>
            </div>
          </div>
        </StaticParallaxContainer>
    );
  }
}

export default TableOfContentsParallaxContainer;
