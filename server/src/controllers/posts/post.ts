import { Request, Response } from "express";
import Post from "../../models/posts";

const addNewPost = async (req: Request, res: Response) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date : new Date(),
    });

    try {
        const savedPost = post.save();
        res.status(201).json(req.body);
    } catch (err) {
        res.status(400).json({ error: err})
    }
};

export default addNewPost;