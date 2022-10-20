import e, { Request, Response } from "express";
import Category from "../../models/categories";

const deleteCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.remove({_id : req.params.id});
        res.status(204).json(category);
    } catch (err) {
        res.status(400).json({err: err});
    }
};

export default deleteCategory;