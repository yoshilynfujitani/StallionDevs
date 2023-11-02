import { usePosts } from "./usePosts";

const Home = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>is Loading...</p>;
  return (
    <div className="">
      {posts.map((post, index) => (
        <div key={post.postId}>{post.postTitle}</div>
      ))}
    </div>
  );
};

export default Home;
