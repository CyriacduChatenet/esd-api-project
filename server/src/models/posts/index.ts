import { model, Schema } from "mongoose";
import IPost from "../../types/posts";

const postSchema = new Schema<IPost>({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    categories : [
        {
            type : Schema.Types.ObjectId,
            ref : 'categories',
        }
    ],
    date : {
        type : Date,
        required : true,
    },
});

const Post = model<IPost>('posts', postSchema);

export default Post;