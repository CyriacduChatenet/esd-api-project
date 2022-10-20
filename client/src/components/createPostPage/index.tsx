import { usePostFetch } from "@/hooks/useFetch";
import { FC } from "react";

const CreatePostPage : FC = () => {
    return (
        <main>
            <h1>Create post</h1>
            <br />
            <form action="POST">
                <label>
                    Title
                    <input type="text" placeholder="title" name="title" />
                </label>
                <label>
                    Content
                    <input type="text" placeholder="content" name="content" />
                </label>
                <label>
                    Author
                    <input type="text" placeholder="author" name="author" />
                </label>
                <input type="submit" value="Create post" onSubmit={() => usePostFetch()} />
            </form>
        </main>
    );
};

export default CreatePostPage;