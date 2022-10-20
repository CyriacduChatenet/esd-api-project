import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '@/components/homePage';
import PostPage from '@/components/postPage';
import CreatePostPage from '@/components/createPostPage';

const Router :FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/post/:id'} element={<PostPage />} />
                <Route path={'/create-post'} element={<CreatePostPage />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;