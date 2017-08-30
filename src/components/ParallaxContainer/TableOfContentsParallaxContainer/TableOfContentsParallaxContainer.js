import React, { Component } from 'react';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import StaticParallaxContainer from '../StaticParallaxContainer';
import './TableOfContentsParallaxContainer.css';

class TableOfContentsParallaxContainer extends Component {

  //https://codepen.io/kenjiroart/pen/NNgRXj
  render(){

    // let projectsList = this.props && this.props.data;
    // console.log('projectsList', projectsList);
    // if (projectsList){
    //   projectsList = projectsList.map((project) =>
    //     <li key={project.name} className="projects-grid-item">
    //       {project.name}: {project.details}
    //       if (project.technologies){
    //         <ul>
    //           {
    //             project.technologies.map((tech, index)=>
    //               <li key={index}>
    //                 {tech}
    //               </li>
    //             )
    //           }
    //         </ul>
    //       }
    //     </li>
    //   );
    // }

    return (
        <StaticParallaxContainer>

          <ScrollUpToolbar
            title="My Work"
            simulateUpScroll={this.props.simulateUpScroll}
            isTextBlack="true" />

          <div className="toc-flex-container">

            <div className={`toc-flex-container-item toc-flex-container-item__left ${this.props.isActivateDetailParallaxContainerBackgroundAnimation ? 'toc-flex-container-item__left--appear' : ''}`}>
              <div className="toc-flex-container-item__left--text-container">
                <div>Software Engineer &lt;CODER&gt;.</div>
                <div>Mobile Developer.</div>
                <div>Web Developer.</div>
              </div>
            </div>

            <div className="toc-flex-container-item toc-flex-container-item__right">right</div>


          </div>
        </StaticParallaxContainer>
    );
  }
}

export default TableOfContentsParallaxContainer;
