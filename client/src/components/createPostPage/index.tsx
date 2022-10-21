import { FC, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import { usePostFetch } from "@/hooks/useFetch";
import { useData } from "@/contexts/dataProvider";

const CreatePostPage : FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    const navigate = useNavigate();
    const { setPosts, posts } = useData();

    return (
        <main>
            <h1>Create post</h1>
            <br />
            <Link to="/"><button>Home page</button></Link>
            <br />
            <br />
            <form action="POST" onSubmit={() => {
                usePostFetch('http://localhost:3000/api/v1/post', {title, content, author});
                setPosts([...posts, {title, content, author}]);
                navigate('/');
            }}>
                <label>
                    Title
                    <input type="text" placeholder="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Content
                    <input type="text" placeholder="content" name="content" onChange={(e) => setContent(e.target.value)} />
                </label>
                <label>
                    Author
                    <input type="text" placeholder="author" name="author" onChange={(e) => setAuthor(e.target.value)} />
                </label>
                <input type="submit" value="Create post" />
            </form>
        </main>
    );
};

export default CreatePostPage;