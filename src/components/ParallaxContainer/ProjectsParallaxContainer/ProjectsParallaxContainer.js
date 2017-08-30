import React, { Component } from 'react';
import ScrollUpToolbar from '../../Toolbar/ScrollUpToolbar/ScrollUpToolbar';
import DetailParallaxContainer from '../DetailParallaxContainer';
import ProjectInformationOverlay from '../../InformationOverlay/ProjectInformationOverlay/ProjectInformationOverlay';
import './ProjectsParallaxContainer.css';

class ProjectsParallaxContainer extends Component {


  constructor(props){
    super(props);
    this.handleProjectImageClicked = this.handleProjectImageClicked.bind(this);
    this.handleCloseInfoOverlayClicked = this.handleCloseInfoOverlayClicked.bind(this);
    this.state = {
      isOpenOverlay: false,
      openOverlayFromRight: true,
      selectedProject: null
    }
  }

  handleProjectImageClicked(project){
    console.log('!!!!!!CLICKED',project);
    this.setState({
      isOpenOverlay: true,
      selectedProject: project
    });
  }

  handleCloseInfoOverlayClicked(){
    this.setState({
      isOpenOverlay: false,
      selectedProject: null
    });
  }


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

    let projectsList = this.props && this.props.data;
    console.log('projectsList', projectsList);
    if (projectsList){
      projectsList = projectsList.map((project) =>
        <article key={project.name} className="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img className={`db bg-center cover aspect-ratio--object img img-${project.imageName}`} alt={project.name}
              onClick={() => this.handleProjectImageClicked(project)}/>
          </div>
          <a href="#0" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 white-text roboto-condensed">{project.name}</h3>


            {project.technologies &&
                  project.technologies.map((tech, index)=>
                      <span className="f6 f5 mt2 yellow-text roboto-condensed tech-list-item" key={index}>
                        {index === (project.technologies.length - 1) ? tech : tech+','}
                      </span>
                  )
            }

            <h3 className="f6 f5 fw4 mt2 grey-text roboto">{project.details}</h3>


          </a>
        </article>



      );
    }

    return (
        <DetailParallaxContainer>

        <ProjectInformationOverlay
          isOpenOverlay={this.state.isOpenOverlay}
          onCloseInfoOverlayClicked={this.handleCloseInfoOverlayClicked}
          openOverlayFromRight={this.state.openOverlayFromRight}
          selectedProject={this.state.selectedProject}/>

          <div className="scrollable-override">

          <ScrollUpToolbar
            title="Projects"
            simulateUpScroll={this.props.simulateUpScroll}/>

            <section className="cf w-100 pa2-ns">
              {projectsList}
            </section>

          </div>
        </DetailParallaxContainer>
    );
  }
}

export default ProjectsParallaxContainer;
