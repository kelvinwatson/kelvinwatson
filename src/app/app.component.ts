import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Kelvin Watson';
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
}
