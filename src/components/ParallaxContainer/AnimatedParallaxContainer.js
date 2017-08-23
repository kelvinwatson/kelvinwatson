import React, { Component } from 'react';
import './AnimatedParallaxContainer.css'

class AnimatedParallaxContainer extends Component {
  render(){
    let backgroundClassName = 'background ' +
      (this.props.backgroundClass || '') +
      ' ' +
      (this.props.scrollBackgroundClass || '');

    if (this.props.isOpenOverlay){
      // should slide out and fade out
      backgroundClassName += ' background-slide-off-screen';
    } else if (backgroundClassName.includes('background-slide-off-screen')){
      backgroundClassName.replace('background-slide-off-screen', '');
      backgroundClassName = backgroundClassName.trim();
    }
    
    return (
      <section className={backgroundClassName}>

        <div className="content-wrapper">
          {this.props.children}

          {/* <p className="content-title">Full Page Parallax Effect</p> */}
          {/* <p className="content-subtitle">Scroll down and up to see the effect!</p> */}
        </div>
      </section>

    //   let backgroundClassName = 'background background-absolute ' + this.props.backgroundClass;
    //   return(
    //     <section>
    //
    //       <div className={backgroundClassName}></div>
    //
    //       <div className="content-wrapper">
    //         {this.props.children}
    //
    //         {/* <p className="content-title">Full Page Parallax Effect</p> */}
    //         {/* <p className="content-subtitle">Scroll down and up to see the effect!</p> */}
    //       </div>
    //     </section>
    );
  }
}

export default AnimatedParallaxContainer;
