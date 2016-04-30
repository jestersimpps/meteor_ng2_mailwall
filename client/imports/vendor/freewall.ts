import 'reflect-metadata';
import {Component} from 'angular2/core';

let name = 'freewall';

@Component({
    selector: name,
    templateUrl: `/client/imports/vendor/${name}/${name}.html`
})

export class wall {
    constructor() {

    }
    ngAfterViewInit() {

    }
}
