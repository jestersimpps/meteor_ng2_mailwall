import 'reflect-metadata';
import {Component} from 'angular2/core';
import {wallposts} from '../../imports/wallposts/wallposts';


let name = 'wall';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [wallposts]
})

export class wall {
    constructor() {

    }
}
