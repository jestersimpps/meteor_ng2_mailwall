import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {wallposts} from '../../imports/wallposts/wallposts';
import {navbar} from '../../imports/navbar/navbar';

let name = 'profile';


@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [RouterLink, wallposts, navbar]
})

export class profile {
    constructor() {

    }
    ngAfterViewInit() {
        
    }
}
