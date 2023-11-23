import { Link } from "react-router-dom";
import { usePosts } from "./usePosts";

import PostCard from "../../components/PostCard";

const Home = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>is Loading...</p>;

  return (
    <div className="   text-white overflow-clip  min-h-screen ">
      <div className="container">
        {" "}
        <h1>
          Share your thoughts.{" "}
          <Link to="/addpost">
            <span className="text-blue-600">Write a post</span>
          </Link>
        </h1>
        <div className="grid grid-rows-4  gap-5 w-full py-10 bg-[#252525] rounded-md px-5 mt-10">
          {" "}
          {posts.map((post) => (
            <Link to={`/post/${post.postId}`} key={post.postId}>
              <PostCard postDetails={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
