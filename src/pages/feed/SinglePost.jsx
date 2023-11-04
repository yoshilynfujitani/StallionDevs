import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./usePosts";

const SinglePost = () => {
  const { id } = useParams();
  const { posts, isLoading } = usePosts();

  const post = posts?.find((item) => item.postId === Number(id));

  if (isLoading) return <p>Loading...</p>;

  console.log(post);

  return (
    <div>
      {post?.postTitle}
      <h1>Comments</h1>
      {post.comment ? (
        post.comment.map((item) => (
          <>
            <div className="flex items-center">
              <img
                src={item.profile.userAvatar}
                className="w-14 h-14 rounded-full"
                alt=""
              />
              <h1>{item.profile.username}</h1>
            </div>
            <p className="pl-10"> {item.comment}</p>
          </>
        ))
      ) : (
        <div>Be the first one to comment!</div>
      )}
    </div>
  );
};

export default SinglePost;
