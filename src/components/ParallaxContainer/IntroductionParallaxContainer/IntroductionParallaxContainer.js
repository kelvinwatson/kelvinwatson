import React, { Component } from 'react';
import ParallaxContainer from '../ParallaxContainer';
import NavigationDial from '../../NavigationDial/NavigationDial';
import Toolbar from '../../Toolbar/Toolbar';
import './IntroductionParallaxContainer.css';

class IntroductionParallaxContainer extends Component {

  constructor(props){
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.state = {
      backgroundClass: props.backgroundClass
    }
  }

  componentWillReceiveProps(nextProps) {    //ensures child stays inSync with parent
    console.log('nextProps', nextProps);
    this.setState({ backgroundClass: nextProps.backgroundClass });
  }

  handleCheckboxChange(e){
    console.log('e',e.target.checked);

    this.setBackgroundClass(e.target.checked? 'background-black' : 'background-white');
  }

  setBackgroundClass(bgClass){
    console.log('bgClass', bgClass);
    var backgroundClass;
    if (bgClass === 'background-black') {
      backgroundClass = this._replaceIfExists(this.state.backgroundClass, 'background-white', bgClass);
    } else if (bgClass === 'background-white'){
      backgroundClass = this._replaceIfExists(this.state.backgroundClass, 'background-black', bgClass);
    }

    this.setState({
      backgroundClass: backgroundClass
    });
  }

  _replaceIfExists(str, find, replacement){
    var newString = str && str.slice() || '';

    if (newString.includes(find)){
      console.log('includes!');
      return newString.replace(new RegExp(find, 'g'), replacement);
    } else {
      console.log('not includes!');
      return replacement;
    }
  }

  render(){
    return (
      <ParallaxContainer backgroundClass={this.state.backgroundClass}>
        <div className="parallax-flex-parent">
          <Toolbar onCheckboxChecked={this.handleCheckboxChange}/>
          <NavigationDial />
          <div className="kelvin-watson-logo">KELVIN WATSON</div>
        </div>
      </ParallaxContainer>
    );
  }
}

export default IntroductionParallaxContainer;
