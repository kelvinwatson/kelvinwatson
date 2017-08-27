import React, { Component } from 'react';
import DetailParallaxContainer from '../DetailParallaxContainer';
import Knob from '../../Knob/Knob';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import './TechnologiesParallaxContainer.css';

class TechnologiesParallaxContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      hasAnimationStarted: false
    }

    setTimeout(function() {
      this.setState({
        hasAnimationStarted: true
      });
    }.bind(this), 1000);
  }



  render(){
    console.log('Rendering with:', this.state);
    let technologiesList = this.props && this.props.data;
    console.log('technologiesList', technologiesList);
    if (technologiesList){
      technologiesList = technologiesList.map((technology, index) =>
        <div className="technologies-grid-item">
          <Knob
            knobId={index}
            percent={this.state.hasAnimationStarted ? technology.proficiency : 0}
            label={technology.name}
            />
        </div>
      );
    }

    return (
        <DetailParallaxContainer
          wallpaperClass={this.props.wallpaperClass}>

          <ScrollUpToolbar
            title="My Technology Stack"
            simulateUpScroll={this.props.simulateUpScroll}/>

          <div className="technologies-grid scrollable">
            {technologiesList}
          </div>

        </DetailParallaxContainer>
    );
  }
}

export default TechnologiesParallaxContainer;
