import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {n2br} from '../../imports/pipes/n2br';

let name = 'bodycollapse';
declare var freewall: any;


@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    inputs: ['htmlbody'],
    pipes: [n2br]
})


export class bodycollapse {

    collapsed: boolean;
    constructor() {
        this.collapsed = true;
    }

    collapse() {
        this.collapsed = !this.collapsed;
        setTimeout(function () {
            var wall = new freewall("#wall");
            wall.reset({
                selector: '.brick',
                animate: false,
                cellW: 300,
                cellH: 'auto',
                onResize: function () {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();
        }, 10);
    }

}
