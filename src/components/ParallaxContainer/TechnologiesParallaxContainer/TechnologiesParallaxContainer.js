import React, { Component } from 'react';
import DetailParallaxContainer from '../DetailParallaxContainer';
import Knob from '../../Knob/Knob';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import './TechnologiesParallaxContainer.css';

class TechnologiesParallaxContainer extends Component {
  render(){

    let technologiesList = this.props && this.props.data;
    console.log('technologiesList', technologiesList);
    if (technologiesList){
      technologiesList = technologiesList.map((technology, index) =>
        <div className="technologies-grid-item">

        <Knob
          knobId={index}
          percent={technology.proficiency}
          label={technology.name}
          />
        </div>



      );
    }

    return (
        <DetailParallaxContainer
          wallpaperClass={this.props.wallpaperClass}>

          <ScrollUpToolbar
            title="TechnologiesParallaxContainer"
            simulateUpScroll={this.props.simulateUpScroll}/>

          <div className="technologies-grid scrollable">
            {technologiesList}
          </div>

        </DetailParallaxContainer>
    );
  }
}

export default TechnologiesParallaxContainer;
