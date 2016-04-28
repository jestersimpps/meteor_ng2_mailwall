import 'reflect-metadata';
import {Component, Input} from 'angular2/core';

let name = 'youtubecard';

@Component({
    selector: name,
    templateUrl: `/client/imports/cards/${name}/${name}.html`,
    inputs: ['post']
})


export class youtubecard { }
