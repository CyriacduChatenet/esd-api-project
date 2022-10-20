import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import DBconnection from './config/dbConfig';
import { getAllPosts, getSinglePost } from './controllers/posts/get';
import addNewPost from './controllers/posts/post';
import editPost from './controllers/posts/patch';
import deletePost from './controllers/posts/delete';
import { getAllCategories, getSingleCategory } from './controllers/categories/get';
import addNewCategory from './controllers/categories/post';
import editCategory from './controllers/categories/patch';
import deleteCategory from './controllers/categories/delete';

const app = express();
dotenv.config();
app.use(express.json());
DBconnection();

app.use(cors());

app.get('/*', )
app.get('/api/v1/post', getAllPosts);
app.get('/api/v1/post/:id', getSinglePost);

app.get('/api/v1/category', getAllCategories);
app.get('/api/v1/category/:id', getSingleCategory);

app.post('/api/v1/post', addNewPost);
app.post('/api/v1/category', addNewCategory);

app.patch('/api/v1/post/:id', editPost);
app.patch('/api/v1/category/:id', editCategory);

app.delete('/api/v1/post/:id', deletePost);
app.delete('/api/v1/category/:id', deleteCategory);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});