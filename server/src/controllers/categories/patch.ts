import { Request, Response } from "express";
import Category from "../../models/categories";

const editCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.updateOne(
            {_id : req.params.id},
            {
                $set : {
                    title : req.body.title,
                    posts : req.body.posts,
                }
            }
            );
            res.status(200).json(req.body);
    } catch (err) {
        res.status(400).json({err: err});
    }
};

export default editCategory;