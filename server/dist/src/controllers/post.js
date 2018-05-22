"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("../models/post"));
exports.getPosts = function (req, res) {
    post_1.default.find({}, 'title description', function (error, posts) {
        if (error) {
            console.error(error);
        }
        res.send({
            posts: posts
        });
    }).sort({ _id: -1 });
};
exports.postPosts = function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var newPost = post_1.default({
        title: title,
        description: description
    });
    newPost.save(function (error) {
        if (error) {
            console.log(error);
        }
        res.send({
            success: true,
            message: "Post saved successfully!",
        });
    });
};
exports.postById = function (req, res) {
    post_1.default.findById(req.params.id, 'title description', function (error, postId) {
        if (error) {
            console.error(error);
        }
        res.send(post_1.default);
    });
};
exports.updatePost = function (req, res) {
    post_1.default.findById(req.params.id, 'title description', function (error, postId) {
        if (error) {
            console.error(error);
        }
        postId.title = req.body.title;
        postId.description = req.body.description;
        postId.save(function (error) {
            if (error) {
                console.error(error);
            }
            res.send({
                success: true,
                message: "Post updated successfully!",
            });
        });
    });
};
