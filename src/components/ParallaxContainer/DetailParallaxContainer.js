import React, { Component } from 'react';
import './DetailParallaxContainer.css'

class DetailParallaxContainer extends Component {
  render(){

    console.log('huh???', this.props);

    return (
      <section className={`detail-background ${this.props.wallpaperClass ? 'detail-background-'+this.props.wallpaperClass : 'detail-background-default'}`}>

        <div className="content-wrapper content-wrapper-override">
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

export default DetailParallaxContainer;
