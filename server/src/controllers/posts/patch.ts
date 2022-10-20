import { Request, Response } from "express";
import Post from "../../models/posts";

const editPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.updateOne(
            {_id : req.params.id},
            {
                $set : {
                    title : req.body.title,
                    content : req.body.content,
                    author : req.body.author,
                    date : new Date(),
                },
            });
        res.status(200).json(req.body);
    } catch (err) {
        res.status(400).json({err: err});
    }
};

export default editPost;