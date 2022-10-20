import { Request, Response } from "express";
import Category from "../../models/categories";

const addNewCategory = async (req: Request, res: Response) => {
    const newCategory = new Category({
        title : req.body.title,
        posts : req.body.posts,
    });

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(req.body);
    } catch (err) {
        res.status(400).json({err: err});
    }
};

export default addNewCategory;