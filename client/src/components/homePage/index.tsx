import { FC } from 'react';
import { useData } from '@/contexts/dataProvider';
import { Link } from 'react-router-dom';

const HomePage : FC = () => {
    const { posts } = useData();
    return (
        <main>
            <h1>Simple Blog</h1>
            <Link to="/create-post">Create Post</Link>
            <h2>last articles</h2>
            <div>
                {posts.map((post : any) => <Link key={post._id} to={`/post/${post._id}`}>
                <div>
                    <p>{post.title}</p>
                </div>
                </Link>)}
            </div>
        </main>
    )
};

export default HomePage;