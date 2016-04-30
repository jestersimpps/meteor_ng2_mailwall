import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

let name = 'navbar';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [RouterLink]
})


export class navbar { }
