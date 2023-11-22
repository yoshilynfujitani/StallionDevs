import { Link } from "react-router-dom";
import { usePosts } from "./usePosts";
import Filter from "../../ui/Filter";
import PostCard from "../../components/PostCard";

const Home = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>is Loading...</p>;

  return (
    <div className=" bg-[#2c2c2c]  text-white overflow-clip container h-screen px-52">
      <h1>
        Share your thoughts.{" "}
        <Link to="/addpost">
          <span className="text-blue-600">Write a post</span>
        </Link>
      </h1>
      <Filter
        options={[
          "General",
          "Bugs and Glitches",
          "Improvements",
          "Announcements",
        ]}
      />
      <div className="grid grid-cols-4  gap-5 w-full py-10">
        {" "}
        {posts.map((post) => (
          <Link to={`/post/${post.postId}`} key={post.postId}>
            <PostCard postDetails={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
