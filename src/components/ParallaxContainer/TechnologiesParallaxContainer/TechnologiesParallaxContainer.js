import React, { Component } from 'react';
import DetailParallaxContainer from '../DetailParallaxContainer';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import './TechnologiesParallaxContainer.css';

class TechnologiesParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <DetailParallaxContainer
          wallpaperClass={this.props.wallpaperClass}>

          <ScrollUpToolbar
            title="TechnologiesParallaxContainer"
            simulateUpScroll={this.props.simulateUpScroll}/>

        </DetailParallaxContainer>
    );
  }
}

export default TechnologiesParallaxContainer;
