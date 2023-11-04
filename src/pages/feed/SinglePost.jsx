import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./usePosts";

const SinglePost = () => {
  const { id } = useParams();
  const { posts, isLoading } = usePosts();

  const post = posts?.find((item) => item.postId === Number(id));

  if (isLoading) return <p>Loading...</p>;

  console.log(post);

  return <div>{post?.postTitle}</div>;
};

export default SinglePost;
