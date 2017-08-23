import React, { Component } from 'react';
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Hire from './components/Hire/Hire'
import Footer from './components/Footer/Footer'

import StaticParallaxContainer from './components/ParallaxContainer/StaticParallaxContainer'
import IntroductionParallaxContainer from './components/ParallaxContainer/IntroductionParallaxContainer/IntroductionParallaxContainer'

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
      parallaxContainer1: ''
    }
  }

  componentDidMount(){
    this.initFirebase();
    this.initParallax();
  }

  componentWillUnmount(){
    this.removeParallax();
  }

  /**
   * Adapted from https://codepen.io/anon/pen/OjZYgw?editors=0010
   */
  parallaxScroll(evt){
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

    if (this.state.ticking != true) {
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
    //compute previous slide
    var previousSlideNumber = this.state.currentSlideNumber - 1;
    var previousSlideRef = 'parallaxContainer' + previousSlideNumber;
    this.setState({
      [previousSlideRef]: 'down-scroll'
    });
  }

  //upscroll
  previousItem(){
    var currentSlideNumber = this.state.currentSlideNumber;
    var currentSlideRef = 'parallaxContainer' + currentSlideNumber;
    this.setState({
      [currentSlideRef]: 'up-scroll'
    });
  }

  slideDurationTimeout(slideDuration) {
    var self = this;
    setTimeout(function() {
      self.setState({ ticking: false });
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
    window.addEventListener(mousewheelEvent, this.parallaxScroll, false);

  }

  removeParallax(){
    var mousewheelEvent = this.state.isFirefox ? "DOMMouseScroll" : "wheel";
    window.removeEventListener(mousewheelEvent, this.parallaxScroll, false);

  }

  submitHireForm(formData){
    console.log('formData',formData);
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/*<ParallaxContainer ref="parallaxContainer0" backgroundClass={this.state.parallaxContainer0}/>*/}
        <IntroductionParallaxContainer ref="parallaxContainer0" scrollBackgroundClass={this.state.parallaxContainer0}/>

        <StaticParallaxContainer ref="parallaxContainer1" scrollBackgroundClass={this.state.parallaxContainer1}/>
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
