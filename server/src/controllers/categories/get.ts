import { Request, Response } from "express";
import Category from "../../models/categories";

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find().populate('posts');
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

export const getSingleCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.find({_id : req.params.id}).populate('posts');
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ err: err });
    };
};