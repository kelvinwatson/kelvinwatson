import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kelvin Watson';
  careerTimeline: FirebaseListObservable<any[]>;
  technologies: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.careerTimeline = db.list('/careerTimeline');
    this.technologies = db.list('/technologies');
    this.projects = db.list('/projects');
  }
}
