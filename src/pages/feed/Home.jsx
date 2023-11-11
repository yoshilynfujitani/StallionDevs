import { Link } from "react-router-dom";
import { usePosts } from "./usePosts";
import Filter from "../../ui/Filter";

const Home = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>is Loading...</p>;

  return (
    <div className="">
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
      {posts.map((post) => (
        <Link to={`/post/${post.postId}`} key={post.postId}>
          <div>{post.postTitle}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
