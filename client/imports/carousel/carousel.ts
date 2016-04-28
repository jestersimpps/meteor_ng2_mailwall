import 'reflect-metadata';
import {Component, Input} from 'angular2/core';

let name = 'carousel';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    inputs: ['images','identifier'],
})


export class carousel { }
