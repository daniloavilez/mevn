import { Request, Response } from "express";
import post from "../models/post";

export let getPosts = (req: Request, res: Response) => {
    res.send([
        {
            title: "Hello World",
            description: "Hi there! How are you?",
        },
    ]);
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
}
