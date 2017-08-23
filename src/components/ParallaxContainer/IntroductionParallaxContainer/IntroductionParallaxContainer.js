import React, { Component } from 'react';
import AnimatedParallaxContainer from '../AnimatedParallaxContainer';
import NavigationDial from '../../NavigationDial/NavigationDial';
import Toolbar from '../../Toolbar/Toolbar';
import './IntroductionParallaxContainer.css';

class IntroductionParallaxContainer extends Component {

  constructor(props){
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    console.log('constructor', props);
    this.state = {
      backgroundClass: (props.backgroundClass || '') + ' ' + (props.scrollBackgroundClass || ''),
      infoClass: 'info-black'
    }
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
    var infoClass;
    var backgroundClass = this.state.backgroundClass;
    if (bgColorClass === 'background-black') {
      //replace white with black
      backgroundClass = this._replaceIfExists(backgroundClass, 'background-white', bgColorClass);
      backgroundClass = this._addIfNotExists(backgroundClass, 'background-black');
      infoClass = 'info-white';
    } else if (bgColorClass === 'background-white'){
      //replace black with white
      backgroundClass = this._replaceIfExists(backgroundClass, 'background-black', bgColorClass);
      backgroundClass = this._addIfNotExists(backgroundClass, 'background-white');
      infoClass = 'info-black';
    }

    // if (/\S/.test(this.state.backgroundClass) &&
    //   !(this.state.backgroundClass.includes('up-scroll') || this.state.backgroundClass.includes('down-scroll'))){ //not empty and not just whitespace
    //   backgroundClass = this.state.backgroundClass + ' ' + backgroundClass;
    // }
    //
    // console.log('bgClass', bgClass);
    // console.log('setting state with backgroundClass', backgroundClass); //color
    // console.log('setBackgroundClass this.state.backgroundClass', this.state.backgroundClass); //scroll

    this.setState({
      backgroundClass: backgroundClass,
      infoClass: infoClass
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
        <div className="parallax-flex-parent">
          <Toolbar infoClass={this.state.infoClass} onCheckboxChecked={this.handleCheckboxChange}/>
          <NavigationDial />
          <div className="kelvin-watson-logo">KELVIN WATSON</div>
        </div>
      </AnimatedParallaxContainer>
    );
  }
}

export default IntroductionParallaxContainer;
