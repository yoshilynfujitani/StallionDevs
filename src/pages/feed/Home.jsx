import { Link, useSearchParams } from "react-router-dom";
import { usePosts } from "./usePosts";

const Home = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>is Loading...</p>;
  return (
    <div className="">
      {posts.map((post) => (
        <>
          <Link to={`/post/${post.postId}`}>
            <div key={post.postId}>{post.postTitle}</div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Home;
