import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {wall} from './imports/wall/wall';
import {login} from './imports/auth/login/login';
import {register} from './imports/auth/register/register';

declare var freewall: any;

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: wall },
  { path: '/login', as: 'Login', component: login },
  { path: '/register', as: 'Register', component: register },
  { path: '/private', as: 'Private', component: wall }
])
class Mailwall {
  constructor() {
    console.log('App Start');
  }
  ngAfterViewInit() {
    console.log('View init');
  }
}

bootstrap(Mailwall,
  [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' })
  ]);


