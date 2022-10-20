import { model, Schema } from "mongoose";
import ICategory from "../../types/categories";

const categorySchema = new Schema<ICategory>({
    title : {
        type : String,
        required : true,
    },
    posts : [
        {
            type : Schema.Types.ObjectId,
            ref : 'posts'
        }
    ],
});

const Category = model<ICategory>('categories', categorySchema);

export default Category;