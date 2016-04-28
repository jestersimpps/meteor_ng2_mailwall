import 'reflect-metadata';
import {Component} from 'angular2/core';

let name = 'navbar';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`
})


export class navbar {}
