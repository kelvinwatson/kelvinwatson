import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
  getCareerTimeline(): Promise<FirebaseListObservable<any[]>> {
    return Promise.resolve(this.db.list('careerTimeline/'));
  }
  getTechnologies(): Promise<FirebaseListObservable<any[]>> {
    return Promise.resolve(this.db.list('technologies/'));
  }
  getProjects(): Promise<FirebaseListObservable<any[]>> {
    return Promise.resolve(this.db.list('projects/'));
  }
}
