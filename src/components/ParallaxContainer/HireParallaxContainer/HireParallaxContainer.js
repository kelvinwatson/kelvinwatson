import React, { Component } from 'react';
import DetailParallaxContainer from '../DetailParallaxContainer';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import './HireParallaxContainer.css';

class HireParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <DetailParallaxContainer
          wallpaperClass={this.props.wallpaperClass}>

          <ScrollUpToolbar
            title="Hire Me"
            simulateUpScroll={this.props.simulateUpScroll}/>

        </DetailParallaxContainer>
    );
  }
}

export default HireParallaxContainer;
