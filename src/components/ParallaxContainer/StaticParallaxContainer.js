import React, { Component } from 'react';
import './StaticParallaxContainer.css'

class StaticParallaxContainer extends Component {
  render(){
    return (
      <section className={`static-background  ${this.props.backgroundClass} ${this.props.scrollBackgroundClass}`}>

        <div className="content-wrapper content-wrapper-override scrollable">
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

export default StaticParallaxContainer;
