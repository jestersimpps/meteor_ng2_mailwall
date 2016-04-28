import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {n2br} from '../../../imports/pipes/n2br';

let name = 'articlecard';

@Component({
    selector: name,
    templateUrl: `/client/imports/cards/${name}/${name}.html`,
    inputs: ['post'],
    pipes: [n2br]
})


export class articlecard { }
