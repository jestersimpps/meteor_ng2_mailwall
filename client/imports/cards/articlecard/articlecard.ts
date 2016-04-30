import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {n2br} from '../../../imports/pipes/n2br';

let name = 'articlecard';
declare var freewall: any;


@Component({
    selector: name,
    templateUrl: `/client/imports/cards/${name}/${name}.html`,
    inputs: ['post'],
    pipes: [n2br]
})


export class articlecard {
    
    refreshWall() {
        //TODO: figure out a way to make the bootstrap-collapse -> freewall refresh transition smooth
        //check css, white bar below footer on collapse
        setTimeout(function () {
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
