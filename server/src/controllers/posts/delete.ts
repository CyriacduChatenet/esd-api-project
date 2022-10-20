import { Request, Response } from "express";
import Post from "../../models/posts";

const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.remove({_id : req.params.id});
        res.status(204).json(post);
    } catch (err) {
        res.status(400).json({err: err});
    };
};

export default deletePost;