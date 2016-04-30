import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

let name = 'login';

@Component({
    selector: name,
    templateUrl: `/client/imports/auth/${name}/${name}.html`,
    directives: [RouterLink]
})


export class login { }