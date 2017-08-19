
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { DataService } from './service/data.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Kelvin Watson';
  homeActive = false;
  careerTimelineActive = false;
  projectsActive = false;
  hireActive = false;
  careerTimeline: FirebaseListObservable<any[]>;
  technologies: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;

  /**
   * DataService is Injectable, Angular supplies an instance of DataService on
   * constructing AppComponent element
   */
  constructor(private dataService: DataService){}

  /**
   * Lifecycle callback
   */
  ngOnInit():void {
    this.getData();
  }

  ngAfterViewInit() {
    this.initScrollSpy();
  }

  /**
   * Data retreival is abstracted to DataService
   */
  getData():void {
    this.getCareerTimeline();
    this.getTechnologies();
    this.getProjects();
  }

  getCareerTimeline():void {
    this.dataService.getCareerTimeline().then(careerTimeline => this.careerTimeline = careerTimeline);
  }

  getTechnologies():void {
    this.dataService.getTechnologies().then(technologies => this.technologies = technologies);
  }

  getProjects():void {
    this.dataService.getProjects().then(projects => this.projects = projects);
  }

  initScrollSpy(){
    var self = this;

    var section = document.querySelectorAll("section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });

    console.log('sections',sections);

    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      self.homeActive = scrollPosition >= sections['topSection'];
      self.careerTimelineActive = scrollPosition >= sections['careerTimelineSection'];
      self.projectsActive = scrollPosition >= sections['projectsSection'];
      self.hireActive = scrollPosition >= sections['hireSection'];
    };
  }
}
