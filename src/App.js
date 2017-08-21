import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Hire from './components/Hire'
import Footer from './components/Footer'
import './App.css';

import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: null,
      technologies: null
    }
  }

  componentDidMount(){
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

  submitHireForm(formData){
    console.log('formData',formData);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Projects projects={this.state.projects}/>
        <Technologies technologies={this.state.technologies}/>
        <Hire handleSubmit={this.submitHireForm} />
        <Footer />
      </div>
    );
  }
}

export default App;
