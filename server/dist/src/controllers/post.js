"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("../models/post"));
exports.getPosts = function (req, res) {
    res.send([
        {
            title: "Hello World",
            description: "Hi there! How are you?",
        },
    ]);
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
