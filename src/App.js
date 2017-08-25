import React, { Component } from 'react';
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import ScrollSpyBar from './components/ScrollSpyBar/ScrollSpyBar';
import Technologies from './components/Technologies/Technologies'
import Hire from './components/Hire/Hire'
import Footer from './components/Footer/Footer'

import IntroductionParallaxContainer from './components/ParallaxContainer/IntroductionParallaxContainer/IntroductionParallaxContainer'
import TableOfContentsParallaxContainer from './components/ParallaxContainer/TableOfContentsParallaxContainer/TableOfContentsParallaxContainer'

import HireParallaxContainer from './components/ParallaxContainer/HireParallaxContainer/HireParallaxContainer'
import ProjectsParallaxContainer from './components/ParallaxContainer/ProjectsParallaxContainer/ProjectsParallaxContainer';
import TechnologiesParallaxContainer from './components/ParallaxContainer/TechnologiesParallaxContainer/TechnologiesParallaxContainer'

import './App.css';

import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.parallaxScroll = this.parallaxScroll.bind(this);
    this.simulateUpScroll = this.simulateUpScroll.bind(this);
    this.simulateDownScroll = this.simulateDownScroll.bind(this);
    this.handleProjectsClicked = this.handleProjectsClicked.bind(this);
    this.state = {
      projects: null,
      technologies: null,
      ticking: false,
      isFirefox: /Firefox/i.test(navigator.userAgent),
      isIe: (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
      scrollSensitivitySetting: 0,
      slideDurationSetting: 600,
      currentSlideNumber: 0,
      totalSlideNumber: 2,
      parallaxContainer0: '',
      parallaxContainer1: '',
      isFirstScrollSpyItemActive: true,
      isSecondScrollSpyItemActive: false,
      detailParallaxContainerToLoad: 'tableOfContents'
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
  parallaxScroll(evt, isSimulateDownScroll, isSimulateUpScroll){

    var delta;
    if (!isSimulateUpScroll && !isSimulateDownScroll){ //only perform below if not simulation
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
    }

    if (this.state.ticking != true) {
      if (isSimulateDownScroll || delta <= -this.state.scrollSensitivitySetting) {
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
      if (isSimulateUpScroll || delta >= this.state.scrollSensitivitySetting) {
      // if (isSimulateUpScroll) {
        //Up scroll
        console.log('got here!');
        this.setState({
          ticking: true
        });
        if (this.state.currentSlideNumber !== 0) {
          var currentSlideNumber = --this.state.currentSlideNumber;
          this.setState({
            currentSlideNumber: currentSlideNumber,
            detailParallaxContainerToLoad: 'tableOfContents'
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
      [previousSlideRef]: 'down-scroll',
      isFirstScrollSpyItemActive: false,
      isSecondScrollSpyItemActive: true
    });
  }

  //upscroll
  previousItem(){
    var currentSlideNumber = this.state.currentSlideNumber;
    var currentSlideRef = 'parallaxContainer' + currentSlideNumber;
    this.setState({
      [currentSlideRef]: 'up-scroll',
      isFirstScrollSpyItemActive: true,
      isSecondScrollSpyItemActive: false
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
      console.log('technologies', snap.val());

      this.setState({
        technologies: Object.values(snap.val())
      });
    });

    firebase.database().ref('projects').once('value').then((snap) => {
      console.log('projects', snap.val());
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

  simulateDownScroll(e){
    if (e)
      e.preventDefault();
    this.parallaxScroll(null, true, false);
  }

  simulateUpScroll(e){
    if (e)
      e.preventDefault();
    this.parallaxScroll(null, false, true);
  }

  handleProjectsClicked(){
    this.setState({
      detailParallaxContainerToLoad: 'projects'
    });
    this.simulateDownScroll();
  }

  render() {

    let detailParallaxContainerToLoad;

    switch (this.state.detailParallaxContainerToLoad){
      case 'tableOfContents':
        detailParallaxContainerToLoad =
          <TableOfContentsParallaxContainer
            ref="parallaxContainer1"
            scrollBackgroundClass={this.state.parallaxContainer1}
            simulateUpScroll={this.simulateUpScroll}/>;
        break;
      case 'projects':
        detailParallaxContainerToLoad =
          <ProjectsParallaxContainer
            ref="parallaxContainer1"
            scrollBackgroundClass={this.state.parallaxContainer1}
            simulateUpScroll={this.simulateUpScroll}
            data={this.state.projects}/>
        break;
    }

    return (
      <div className="App">
        {/* <Header /> */}
        {/*<ParallaxContainer ref="parallaxContainer0" backgroundClass={this.state.parallaxContainer0}/>*/}
        <IntroductionParallaxContainer
          ref="parallaxContainer0"
          scrollBackgroundClass={this.state.parallaxContainer0}
          onProjectsClicked={this.handleProjectsClicked}/>

        <ScrollSpyBar
          isFirstScrollSpyItemActive={this.state.isFirstScrollSpyItemActive}
          isSecondScrollSpyItemActive={this.state.isSecondScrollSpyItemActive}
          simulateDownScroll={this.simulateDownScroll}
          simulateUpScroll={this.simulateUpScroll}/>

        {detailParallaxContainerToLoad}

        {/*
        <ProjectsParallaxContainer
          ref="parallaxContainer1"
          scrollBackgroundClass={this.state.parallaxContainer1}
          simulateUpScroll={this.simulateUpScroll}
          data={this.state.projects}/>
        */}

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
