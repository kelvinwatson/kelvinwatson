import React, { Component } from 'react';
import DetailParallaxContainer from '../DetailParallaxContainer';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import './HireParallaxContainer.css';

class HireParallaxContainer extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
        <DetailParallaxContainer
          wallpaperClass={this.props.wallpaperClass}>

          <ScrollUpToolbar
            title="Hire Me"
            simulateUpScroll={this.props.simulateUpScroll}/>

            <main className="pa4 black-80">
              <form className="measure center">
                <fieldset className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Let me make your next website or app</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="contact-name">Name</label>
                    <input className="pa2 input-reset ba b--white hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba b--white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="phone">Phone (optional)</label>
                    <input className="pa2 input-reset ba b--white hover-bg-black hover-white w-100" type="tel" name="phone"  id="phone"/>
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Tell me about your project idea</label>
                    <textarea className="b pa2 input-reset ba b--white hover-bg-black hover-white w-100"
                      name="message"  id="message" rows="5"/>
                  </div>
                </fieldset>
                <div className="">
                  <input className="b c--white ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Send"/>
                </div>
              </form>
            </main>

        </DetailParallaxContainer>
    );
  }
}

export default HireParallaxContainer;
