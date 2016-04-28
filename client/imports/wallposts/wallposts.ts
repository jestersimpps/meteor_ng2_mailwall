import 'reflect-metadata';
import {Mongo} from 'meteor/mongo';
import {Component} from 'angular2/core';
import {Posts} from '../../../collections/posts';
import {articlecard} from '../../imports/cards/articlecard/articlecard';
import {youtubecard} from '../../imports/cards/youtubecard/youtubecard';

let name = 'wallposts';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives:[youtubecard,articlecard]
})

export class wallposts {
    posts: Mongo.Cursor<Object>;
    constructor() {
        this.posts = Posts.find();
    }
}
