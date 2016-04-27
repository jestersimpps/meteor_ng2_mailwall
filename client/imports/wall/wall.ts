import 'reflect-metadata';
import {Component} from 'angular2/core';
import {Posts} from '../../../collections/posts';

@Component({
    selector: 'wall',
    templateUrl: '/client/imports/wall/wall.html'
})
export class wall {
    posts: Mongo.Cursor<Object>;
    constructor() {
        this.posts = Posts.find();
    }
}
