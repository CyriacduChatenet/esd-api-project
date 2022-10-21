import { useGetFetch } from "@/hooks/useFetch";
import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostPage: FC = () => {
  const params = useParams();
  const [post, setPost] = useState<never[] | []>([]);

  useGetFetch(`http://localhost:3000/api/v1/post/${params.id}`, setPost);

  return (
    <>
      {post.map((post: any) => (
        <div key={post._id}>
          <br />
          <Link to="/">
            <button>Home page</button>
          </Link>
          <br />
          <br />
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
};

export default PostPage;
