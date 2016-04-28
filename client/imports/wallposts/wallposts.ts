import 'reflect-metadata';
import {Mongo} from 'meteor/mongo';
import {Component} from 'angular2/core';
import {Posts} from '../../../collections/posts';
import {articlecard} from '../../imports/cards/articlecard/articlecard';
import {youtubecard} from '../../imports/cards/youtubecard/youtubecard';
import {imagecard} from '../../imports/cards/imagecard/imagecard';

let name = 'wallposts';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [youtubecard, articlecard, imagecard]
})

export class wallposts {
    posts: Mongo.Cursor<Object>;

    constructor() {
        this.posts = Posts.find();
    }

    popShare(post) {
        console.log('cloning ' + post._id);
        delete post['_id'];
        Posts.insert(post);
    }
    popRemove(post) {
        console.log('removing ' + post._id)
        Posts.remove(post._id);
    }
    popLike(post) {
        console.log('upvote ' + post._id);
        Posts.update({ _id: post._id }, { $set: { upvotes: post.upvotes + 1 } })
    }
    popDislike(post) {
        console.log('downvote ' + post._id);
        Posts.update({ _id: post._id }, { $set: { downvotes: post.downvotes + 1 } });
    }
    makePublic(post) {
        console.log('makepublic ' + post._id);
        Posts.update({ _id: post._id }, { $set: { public: 1 } });
    }
    makePrivate(post) {
        console.log('makeprivate ' + post._id);
        Posts.update({ _id: post._id }, { $set: { public: 0 } });
    }
}
