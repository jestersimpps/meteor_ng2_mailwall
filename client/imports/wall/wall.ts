import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {wallposts} from '../../imports/wallposts/wallposts';
import {navbar} from '../../imports/navbar/navbar';

declare var freewall: any;
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
        setTimeout(function () {
            //TODO: this should be done better, maybe a global function?
            var wall = new freewall("#wall");
            wall.reset({
                selector: '.brick',
                animate: true,
                cellW: 300,
                cellH: 'auto',
                onResize: function () {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();
        }, 200);
    }
}
