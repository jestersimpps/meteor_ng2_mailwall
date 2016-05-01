import 'reflect-metadata';
import {Mongo} from 'meteor/mongo';
import {Component} from 'angular2/core';
import {Posts} from '../../../collections/posts';
import {articlecard} from '../../imports/cards/articlecard/articlecard';
import {youtubecard} from '../../imports/cards/youtubecard/youtubecard';
import {imagecard} from '../../imports/cards/imagecard/imagecard';

declare var freewall: any;
let name = 'wallposts';

@Component({
    selector: name,
    templateUrl: `/client/imports/${name}/${name}.html`,
    directives: [youtubecard, articlecard, imagecard]
})

export class wallposts {
    posts: Mongo.Cursor<Object>;


    constructor() {
        this.posts = Posts.find({}, { sort: { sorter: 1 } });
        this.posts.observeChanges({
            added: function (newDoc) {
                setTimeout(function () {
                    //TODO: this should be done better, maybe a global function?
                    var wall = new freewall("#wall");
                    wall.reset({
                        selector: '.brick',
                        animate: true,
                        cellW: 300,
                        cellH: 'auto',
                        onResize: function () {
                            wall.fitWidth();
                        }
                    });
                    wall.fitWidth();
                }, 200);
            },
            changed: function (newDoc, oldDoc) {
            },
            removed: function (oldDoc) {
                setTimeout(function () {
                    //TODO: this should be done better, maybe a global function?
                    var wall = new freewall("#wall");
                    wall.reset({
                        selector: '.brick',
                        animate: true,
                        cellW: 300,
                        cellH: 'auto',
                        onResize: function () {
                            wall.fitWidth();
                        }
                    });
                    wall.fitWidth();
                }, 200);
            }
        });
    }

    popShare(post) {
        // makes a copy of a post
        let copy = Object.assign({}, post)
        delete copy['_id'];
        Posts.insert(copy);
    }
    popRemove(post) {
        Posts.remove(post._id);
    }
    popLike(post) {
        Posts.update({ _id: post._id }, { $set: { upvotes: post.upvotes + 1 } })
    }
    popDislike(post) {
        Posts.update({ _id: post._id }, { $set: { downvotes: post.downvotes + 1 } });
    }
    makePublic(post) {
        Posts.update({ _id: post._id }, { $set: { public: 1 } });
    }
    makePrivate(post) {
        Posts.update({ _id: post._id }, { $set: { public: 0 } });
    }



}
