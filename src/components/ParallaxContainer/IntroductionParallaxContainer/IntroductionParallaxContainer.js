import React, { Component } from 'react';
import ParallaxContainer from '../ParallaxContainer'
import '../ParallaxContainer.css'

class IntroductionParallaxContainer extends Component {

  constructor(props){
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.state = {
      backgroundClass: this.props.backgroundClass
    }
  }

  handleCheckboxChange(e){
    console.log('this.state.backgroundClass', this.state.backgroundClass);
    if (e.target.checked){ //set background to black;
      this.setBackgroundClass('background-black');
    } else {
      this.setBackgroundClass('background-white');
    }
  }

  setBackgroundClass(bgClass){
    console.log('bgClass', bgClass);
    if (bgClass === 'background-black') {
      //replace white with black
      var backgroundClass = this._replace(this.state.backgroundClass, 'background-white', bgClass);

      this.setState({
        backgroundClass: backgroundClass
      });

    } else if (bgClass === 'background-white'){
      var backgroundClass = this._replace(this.state.backgroundClass, 'background-black', bgClass);

      this.setState({
        backgroundClass: backgroundClass
      });

    }
  }

  _replace(str, find, replacement){
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

    // let className this.props.backgroundClass;

    return (
      <ParallaxContainer backgroundClass={this.state.backgroundClass}>

        <input type="checkbox" onChange={this.handleCheckboxChange}/>
        <h1>

          WHY HELLO THERE?
        </h1>
      </ParallaxContainer>
    );
  }
}

export default IntroductionParallaxContainer;
