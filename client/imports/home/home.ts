import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {navbar} from '../../imports/navbar/navbar';

let name = 'home';


@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [RouterLink, navbar]
})

export class home {
    constructor() {

    }
    ngAfterViewInit() {
      
    }
}
