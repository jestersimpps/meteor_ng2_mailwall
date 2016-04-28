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
    directives: [youtubecard, articlecard]
})

export class wallposts {
    posts: Mongo.Cursor<Object>;

    constructor() {
        this.posts = Posts.find();
    }

    popShare(post) {
        console.log('cloning');
        delete post['_id'];
        Posts.insert(post);
    }
    popRemove(post) {
        console.log('removing')
        Posts.remove(post._id);
    }
    popLike(post) {
        console.log('upvote');
        Posts.update({ _id: post._id }, { upvotes: post.upvotes + 1 });
    }
    popDislike(post) {
        console.log('downvote');
        Posts.update({ _id: post._id }, { downvotes: post.downvotes + 1 });
    }
}
