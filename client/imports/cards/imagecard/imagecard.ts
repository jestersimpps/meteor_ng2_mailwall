import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {n2br} from '../../../imports/pipes/n2br';
import {carousel} from '../../../imports/carousel/carousel';

let name = 'imagecard';

@Component({
    selector: name,
    templateUrl: `/client/imports/cards/${name}/${name}.html`,
    inputs: ['post'],
    directives:[carousel],
    pipes: [n2br]
})


export class imagecard { }
