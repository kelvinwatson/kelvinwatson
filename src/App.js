import React, { Component } from 'react';
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Hire from './components/Hire/Hire'
import Footer from './components/Footer/Footer'

import ParallaxContainer from './components/ParallaxContainer/ParallaxContainer'

import './App.css';

import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.parallaxScroll = this.parallaxScroll.bind(this);
    this.state = {
      projects: null,
      technologies: null,
      ticking: false,
      isFirefox: /Firefox/i.test(navigator.userAgent),
      isIe: (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
      scrollSensitivitySetting: 1,
      slideDurationSetting: 600,
      currentSlideNumber: 0,
      totalSlideNumber: 2,
      parallaxContainer0: '',
      parallaxContainer1: '',
      // parallaxContainer2: '',
      // parallaxContainer3: '',
    }
  }

  componentDidMount(){

    this.initFirebase();

    this.initParallax();

  }

  componentWillUnmount(){
    this.removeParallax();
  }

  parallaxScroll(evt){
    console.log('evt',evt);
    var delta;
    if (this.state.isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (this.state.isIe) {
      //Set delta for IE
      delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
      delta = evt.wheelDelta;
    }

    console.log('delta', delta);

    console.log('this.state.ticking', this.state.ticking);

    if (this.state.ticking != true) {

      console.log('this.state.ticking is false');

      if (delta <= -this.state.scrollSensitivitySetting) {
        //Down scroll
        this.setState({
          ticking: true
        });
        if (this.state.currentSlideNumber !== this.state.totalSlideNumber - 1) {

          var currentSlideNumber = ++this.state.currentSlideNumber;

          this.setState({
            currentSlideNumber: currentSlideNumber
          });
          this.nextItem();
        }
        this.slideDurationTimeout(this.state.slideDurationSetting);
      }
      if (delta >= this.state.scrollSensitivitySetting) {
        //Up scroll
        console.log('upscroll');
        this.setState({
          ticking: true
        });
        if (this.state.currentSlideNumber !== 0) {

          var currentSlideNumber = --this.state.currentSlideNumber;

          this.setState({
            currentSlideNumber: currentSlideNumber
          })
        }
        this.previousItem();
        this.slideDurationTimeout(this.state.slideDurationSetting);
      }
    }
  }

  //downscroll
  nextItem(){
    console.log('NEXT ITEM');

    //compute previous slide

    var previousSlideNumber = this.state.currentSlideNumber - 1;
    var previousSlideRef = 'parallaxContainer' + previousSlideNumber;

    console.log('previousSlideNumber', previousSlideNumber);

    this.setState({
      [previousSlideRef]: 'down-scroll'
    });
  }

  //upscroll
  previousItem(){
    console.log('PREVIOUS ITEM');

    var currentSlideNumber = this.state.currentSlideNumber;
    var currentSlideRef = 'parallaxContainer' + currentSlideNumber;

    console.log('currentSlideNumber', currentSlideNumber);

    this.setState({
      [currentSlideRef]: 'up-scroll'
    });
  }

  slideDurationTimeout(slideDuration) {
    var self = this;
    setTimeout(function() {
      self.setState({
        ticking: false
      });
    }, self.state.slideDuration);
  }

  initFirebase(){
    var config = {
      apiKey: "AIzaSyBPY4upYrG7KTASEOS8McUXgZii4Mb0Gr4",
      authDomain: "kelvinwatson-53204.firebaseapp.com",
      databaseURL: "https://kelvinwatson-53204.firebaseio.com",
      projectId: "kelvinwatson-53204",
      storageBucket: "kelvinwatson-53204.appspot.com",
      messagingSenderId: "565863015502"
    };
    firebase.initializeApp(config);

    firebase.database().ref('technologies').once('value').then((snap) => {
      this.setState({
        technologies: Object.values(snap.val())
      });
    });

    firebase.database().ref('projects').once('value').then((snap) => {
      this.setState({
        projects: Object.values(snap.val())
      });
    });
  }

  initParallax(){
    var mousewheelEvent = this.state.isFirefox ? "DOMMouseScroll" : "wheel";
    // window.addEventListener(mousewheelEvent, this._throttle(this.parallaxScroll, 60), false);
    window.addEventListener(mousewheelEvent, this.parallaxScroll, false);

  }

  removeParallax(){
    var mousewheelEvent = this.state.isFirefox ? "DOMMouseScroll" : "wheel";
    // window.removeEventListener(mousewheelEvent, this._throttle(this.parallaxScroll, 60), false);
    window.removeEventListener(mousewheelEvent, this.parallaxScroll, false);

  }

  submitHireForm(formData){
    console.log('formData',formData);
  }

  // _throttle(func, wait, options) {
  //   var context, args, result;
  //   var timeout = null;
  //   var previous = 0;
  //   if (!options) options = {};
  //   var self = this;
  //   var later = function() {
  //     previous = options.leading === false ? 0 : self._now();
  //     timeout = null;
  //     result = func.apply(context, args);
  //     if (!timeout) context = args = null;
  //   };
  //   return function() {
  //     var now = self._now();
  //     if (!previous && options.leading === false) previous = now;
  //     var remaining = wait - (now - previous);
  //     context = self;
  //     args = arguments;
  //     if (remaining <= 0 || remaining > wait) {
  //       if (timeout) {
  //         clearTimeout(timeout);
  //         timeout = null;
  //       }
  //       previous = now;
  //       result = func.apply(context, args);
  //       if (!timeout) context = args = null;
  //     } else if (!timeout && options.trailing !== false) {
  //       timeout = setTimeout(later, remaining);
  //     }
  //     return result;
  //   };
  // };

  // A (possibly faster) way to get the current timestamp as an integer.
  _now() {
    return new Date().getTime();
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <ParallaxContainer ref="parallaxContainer0" backgroundClass={this.state.parallaxContainer0}/>
        <ParallaxContainer ref="parallaxContainer1" backgroundClass={this.state.parallaxContainer1}/>
        {/*
          <Introduction />
          <Projects projects={this.state.projects}/>
          <Technologies technologies={this.state.technologies}/>
          <Hire handleSubmit={this.submitHireForm} />
          <Footer />
        */}
      </div>
    );
  }
}

export default App;
