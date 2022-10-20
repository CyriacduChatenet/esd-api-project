import { Request, Response } from "express";
import Post from "../../models/posts";

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().populate('categories');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

export const getSinglePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.find({_id : req.params.id}).populate('categories');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ err: err });
    }
}