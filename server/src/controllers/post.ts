import { Request, Response } from "express";
import post from "../models/post";

export let getPosts = (req: Request, res: Response) => {
    post.find({}, 'title description', (error, posts) => {
        if (error) { console.error(error); }

        res.send({
            posts: posts
        });
    }).sort({_id: -1});
};

export let postPosts = (req: Request, res: Response) => {
    const title = req.body.title;
    const description = req.body.description;
    const newPost = post({
        title: title,
        description: description
    });

    newPost.save((error) => {
        if (error) {
            console.log(error);
        }
        res.send({
            success: true,
            message: "Post saved successfully!",
        });
    });
};

export let postById = (req: Request, res: Response) => {
    post.findById(req.params.id, 'title description', (error, postId) => {
        if (error) { console.error(error); }
        res.send(post);
    });
};

export let updatePost = (req: Request, res: Response) => {
    post.findById(req.params.id, 'title description', (error, postId) => {
        if (error) { console.error(error); }

        postId.title = req.body.title;
        postId.description = req.body.description;
        postId.save((error) => {
            if (error) { console.error(error); }

            res.send({
                success: true,
                message: "Post updated successfully!",
            });
        });
    });
};

export let deletePost = (req: Request, res: Response) => {
    post.deleteOne({title: req.params.title, description: req.params.description}, (error) => {
        if (error) { console.error(error); }

        res.send({
            success: true,
            message: "Post deleted successfully!",
        });
    });
};
