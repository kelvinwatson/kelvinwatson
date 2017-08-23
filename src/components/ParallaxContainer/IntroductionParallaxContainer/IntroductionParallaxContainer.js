import React, { Component } from 'react';
import AnimatedParallaxContainer from '../AnimatedParallaxContainer';
import InformationOverlay from '../../InformationOverlay/InformationOverlay';
import NavigationDial from '../../NavigationDial/NavigationDial';
import Toolbar from '../../Toolbar/Toolbar';
import './IntroductionParallaxContainer.css';

class IntroductionParallaxContainer extends Component {

  constructor(props){
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleInfoClicked = this.handleInfoClicked.bind(this);
    this.handleCloseInfoOverlayClicked = this.handleCloseInfoOverlayClicked.bind(this);
    console.log('constructor', props);
    this.state = {
      backgroundClass: (props.backgroundClass || '') + ' ' + (props.scrollBackgroundClass || ''),
      infoClass: 'info-black',
      isOpenOverlay: false,
      svgFillColor: 'black',
      shareIconColor: 'black'
    }
  }

  handleInfoClicked(e){
    this.setState({
      isOpenOverlay: true
    });
  }

  handleCloseInfoOverlayClicked(e){
    console.log('wel hi');
    this.setState({
      isOpenOverlay: false
    });
  }

  componentWillReceiveProps(nextProps) {    //ensures child stays inSync with parent
    var backgroundClass = this.state.backgroundClass;
    if (nextProps.scrollBackgroundClass == 'up-scroll'){
      backgroundClass = this._replaceIfExists(backgroundClass, 'down-scroll', 'up-scroll');
      backgroundClass = this._addIfNotExists(backgroundClass, 'up-scroll')
    } else if (nextProps.scrollBackgroundClass == 'down-scroll'){
      backgroundClass = this._replaceIfExists(backgroundClass, 'up-scroll', 'down-scroll');
      backgroundClass = this._addIfNotExists(backgroundClass, 'down-scroll');
    }

    this.setState({
      backgroundClass: backgroundClass
    });
  }

  _addIfNotExists(str, test){
    return str.includes(test) ? str : str + ' ' + test;
  }

  handleCheckboxChange(e){
    this.setBackgroundColorClass(e.target.checked ? 'background-black' : 'background-white');
  }

  setBackgroundColorClass(bgColorClass){
    var infoClass, svgFillColor, shareIconColor;
    var backgroundClass = this.state.backgroundClass;
    if (bgColorClass === 'background-black') {
      //replace white with black
      backgroundClass = this._replaceIfExists(backgroundClass, 'background-white', bgColorClass);
      backgroundClass = this._addIfNotExists(backgroundClass, 'background-black');
      infoClass = 'info-white';
      svgFillColor = shareIconColor = 'white';
    } else if (bgColorClass === 'background-white'){
      //replace black with white
      backgroundClass = this._replaceIfExists(backgroundClass, 'background-black', bgColorClass);
      backgroundClass = this._addIfNotExists(backgroundClass, 'background-white');
      infoClass = 'info-black';
      svgFillColor = shareIconColor = 'black';
    }

    this.setState({
      backgroundClass: backgroundClass,
      infoClass: infoClass,
      svgFillColor: svgFillColor,
      shareIconColor: shareIconColor
    });
  }

  _replaceIfExists(str, find, replacement){
    var newString = str && str.slice() || ''; //copy the string

    if (newString.includes(find)){
      // console.log('includes!');
      return newString.replace(new RegExp(find, 'g'), replacement);
    } else {
      // console.log('not includes!');
      return str;
    }
  }

  render(){
    return (
        <AnimatedParallaxContainer backgroundClass={this.state.backgroundClass}>
        <InformationOverlay isOpenOverlay={this.state.isOpenOverlay} onCloseInfoOverlayClicked={this.handleCloseInfoOverlayClicked}/>
          <div className={`parallax-flex-parent ${this.state.isOpenOverlay ? 'parallax-flex-parent-slide-off' : ''}`}>
            <Toolbar
              shareIconColor={this.state.shareIconColor}
              svgFillColor={this.state.svgFillColor}
              infoClass={this.state.infoClass}
              onCheckboxChecked={this.handleCheckboxChange}
              onInfoClicked={this.handleInfoClicked}/>
            <NavigationDial />
            <div className="kelvin-watson-logo">KELVIN WATSON</div>
            <div className="designation">Software Engineer  |  Web/Mobile Developer</div>
          </div>
        </AnimatedParallaxContainer>
    );
  }
}

export default IntroductionParallaxContainer;
