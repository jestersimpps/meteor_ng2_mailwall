import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor/build/meteor_component';

let name = 'navbar';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [RouterLink]
})


export class navbar {
    
    user: Meteor.User;

    constructor() {
        console.log(this.user);
    }
}
