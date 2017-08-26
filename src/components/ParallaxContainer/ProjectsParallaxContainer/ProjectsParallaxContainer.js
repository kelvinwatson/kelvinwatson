import React, { Component } from 'react';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import DetailParallaxContainer from '../DetailParallaxContainer';
import './ProjectsParallaxContainer.css';

class ProjectsParallaxContainer extends Component {

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
        <DetailParallaxContainer>
          <div className="scrollable-override">

          <ScrollUpToolbar
            title="Projects"
            simulateUpScroll={this.props.simulateUpScroll}/>


            {/* <ul className="projects-grid">
               {projectsList}
             </ul>
            */}

            <section className="cf w-100 pa2-ns">

              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 white-text">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 white-text">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 white-text">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 white-text">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 white-text">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 white-text">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 white-text">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 white-text">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img className="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>

            </section>
          </div>
        </DetailParallaxContainer>
    );
  }
}

export default ProjectsParallaxContainer;
