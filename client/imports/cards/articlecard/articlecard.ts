import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {bodycollapse} from '../../../imports/bodycollapse/bodycollapse';

let name = 'articlecard';
declare var freewall: any;


@Component({
    selector: name,
    templateUrl: `/client/imports/cards/${name}/${name}.html`,
    inputs: ['post'],
    directives:[bodycollapse]
})


export class articlecard {
    
   
}
