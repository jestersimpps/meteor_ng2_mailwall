import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {wall} from './imports/wall/wall';
import {navbar} from './imports/navbar/navbar';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [wall, navbar]
})
class Mailwall {
  constructor() {
    console.log('App Start');
  }
  ngAfterViewInit(){
    console.log('View init');
  }
}

bootstrap(Mailwall);
