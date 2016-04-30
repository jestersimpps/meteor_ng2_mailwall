import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {wallposts} from '../../imports/wallposts/wallposts';
import {navbar} from '../../imports/navbar/navbar';
// import {freewall} from 'https://cdnjs.cloudflare.com/ajax/libs/freewall/1.0.5/freewall.min.js';


let name = 'wall';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [RouterLink, wallposts, navbar]
})

export class wall {
    constructor() {

    }
    ngAfterViewInit() {
        // var wall = new freewall("#wall");
        // wall.reset({
        //     selector: '.brick',
        //     animate: true,
        //     cellW: 300,
        //     cellH: 'auto',
        //     onResize: function () {
        //         wall.fitWidth();
        //     }
        // });
        // wall.fitWidth();
    }
}
