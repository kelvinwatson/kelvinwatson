/*global FB*/

import React, { Component } from 'react';

import ScrollSpyBar from './components/ScrollSpyBar/ScrollSpyBar';
import IntroductionParallaxContainer from './components/ParallaxContainer/IntroductionParallaxContainer/IntroductionParallaxContainer'
import TableOfContentsParallaxContainer from './components/ParallaxContainer/TableOfContentsParallaxContainer/TableOfContentsParallaxContainer'
import HireParallaxContainer from './components/ParallaxContainer/HireParallaxContainer/HireParallaxContainer'
import ProjectsParallaxContainer from './components/ParallaxContainer/ProjectsParallaxContainer/ProjectsParallaxContainer';
import TechnologiesParallaxContainer from './components/ParallaxContainer/TechnologiesParallaxContainer/TechnologiesParallaxContainer'

import * as firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.parallaxScroll = this.parallaxScroll.bind(this);
    this.simulateUpScroll = this.simulateUpScroll.bind(this);
    this.simulateDownScroll = this.simulateDownScroll.bind(this);
    this.handleHireClicked = this.handleHireClicked.bind(this);
    this.handleTechnologiesClicked = this.handleTechnologiesClicked.bind(this);
    this.handleProjectsClicked = this.handleProjectsClicked.bind(this);
    this.state = {
      projects: null,
      technologies: null,
      ticking: false,
      isFirefox: /Firefox/i.test(navigator.userAgent),
      isIe: (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv:11\./i.test(navigator.userAgent)),
      scrollSensitivitySetting: 0,
      slideDurationSetting: 600,
      currentSlideNumber: 0,
      totalSlideNumber: 2,
      parallaxContainer0: '',
      parallaxContainer1: '',
      isFirstScrollSpyItemActive: true,
      isSecondScrollSpyItemActive: false,
      detailParallaxContainerToLoad: 'tableOfContents',
      isActivateDetailParallaxContainerBackgroundAnimation: false,
      isScrollSpyBarVisible: true
    }
  }

  componentDidMount(){
    this.initFirebase();
    this.initParallax();
    this.initFacebookSdk();
    if (this.isMobileBrowser()){
      this.setSwipeListener(this.handleSwipeUp);
    }
  }

  initFacebookSdk(){
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '1890104247975761',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  componentWillUnmount(){
    this.removeParallax();
  }

  /**
   * src: https://stackoverflow.com/a/24600597
   */
  isMobileBrowser(){
    return /Mobi/.test(navigator.userAgent);
  }

  handleSwipeUp(){
    this.simulateDownScroll();
  }

  /**
   * src (adapted): https://codepen.io/ganmahmud/pen/RaoKZa?editors=0110
   */
  setSwipeListener(){
    var swipedir,
    startX, startY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime, startTime,
    swipeZone = document.getElementById('swipeZone');

    swipeZone.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0];
      swipedir = 'none';
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      // e.preventDefault();
    }, false);

    swipeZone.addEventListener('touchmove', function(e){
      e.preventDefault() // prevent scrolling when inside DIV
    }, false);

    var self = this;
    swipeZone.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0];
      var distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
      var distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
          }
      }
      if (swipedir === 'up'){ //only handle the swipe up direction
        self.handleSwipeUp()
      }
      // e.preventDefault()
    }, false);
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

    var currentSlideNumber;
    if (this.state.ticking !== true) {
      if (isSimulateDownScroll || delta <= -this.state.scrollSensitivitySetting) {
        //Down scroll
        this.setState({
          ticking: true
        });
        if (this.state.currentSlideNumber !== this.state.totalSlideNumber - 1) {
          currentSlideNumber = ++this.state.currentSlideNumber;
          this.setState({
            currentSlideNumber: currentSlideNumber
          });
          this.nextItem();
        }
        this.slideDurationTimeout(this.state.slideDurationSetting);

        this.setState({
          isActivateDetailParallaxContainerBackgroundAnimation: true
        });
      }
      // if (isSimulateUpScroll || delta >= this.state.scrollSensitivitySetting) {
      if (isSimulateUpScroll) {
        //Up scroll
        console.log('got here!');
        this.setState({
          ticking: true
        });
        if (this.state.currentSlideNumber !== 0) {
          currentSlideNumber = --this.state.currentSlideNumber;
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

  simulateDownScroll(e){
    if (e)
      e.preventDefault();

    this.parallaxScroll(null, true, false);
  }

  simulateUpScroll(e){
    if (e)
      e.preventDefault();

    this.setState({
      isActivateDetailParallaxContainerBackgroundAnimation: false
    });

    this.parallaxScroll(null, false, true);
  }

  handleProjectsClicked(){
    console.log('projects clicked');
    this.setState({
      detailParallaxContainerToLoad: 'projects'
    });
    this.simulateDownScroll();
  }

  handleHireClicked(){

    this.setState({
      detailParallaxContainerToLoad: 'hire'
    });
    this.simulateDownScroll();
  }

  handleTechnologiesClicked(){

    this.setState({
      detailParallaxContainerToLoad: 'tech'
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
            simulateUpScroll={this.simulateUpScroll}
            isActivateDetailParallaxContainerBackgroundAnimation={this.state.isActivateDetailParallaxContainerBackgroundAnimation}
            onTechnologiesClicked={this.handleTechnologiesClicked}
            onHireClicked={this.handleHireClicked}
            onProjectsClicked={this.handleProjectsClicked}/>;
        break;
      case 'projects':
        detailParallaxContainerToLoad =
          <ProjectsParallaxContainer
            ref="parallaxContainer1"
            scrollBackgroundClass={this.state.parallaxContainer1}
            simulateUpScroll={this.simulateUpScroll}
            data={this.state.projects}/>
        break;
      case 'hire':
        detailParallaxContainerToLoad =
          <HireParallaxContainer
            ref="parallaxContainer1"
            scrollBackgroundClass={this.state.parallaxContainer1}
            simulateUpScroll={this.simulateUpScroll}
            wallpaperClass="hire"/>
        break;
      case 'tech':
        detailParallaxContainerToLoad =
          <TechnologiesParallaxContainer
            ref="parallaxContainer1"
            scrollBackgroundClass={this.state.parallaxContainer1}
            simulateUpScroll={this.simulateUpScroll}
            wallpaperClass="tech"
            data={this.state.technologies}/>
        break;
      default:
        break;
    }

    return (
      <div className="App">
        <IntroductionParallaxContainer
          ref="parallaxContainer0"
          scrollBackgroundClass={this.state.parallaxContainer0}
          onTechnologiesClicked={this.handleTechnologiesClicked}
          onHireClicked={this.handleHireClicked}
          onProjectsClicked={this.handleProjectsClicked}
          toggleThemeBlack={this.toggleThemeBlack}
          toggleThemeWhite={this.toggleThemeWhite} />

        <ScrollSpyBar
          isScrollSpyBarVisible={this.state.isScrollSpyBarVisible}
          isFirstScrollSpyItemActive={this.state.isFirstScrollSpyItemActive}
          isSecondScrollSpyItemActive={this.state.isSecondScrollSpyItemActive}
          simulateDownScroll={this.simulateDownScroll}
          simulateUpScroll={this.simulateUpScroll}/>

        {detailParallaxContainerToLoad}

      </div>
    );
  }
}

export default App;
