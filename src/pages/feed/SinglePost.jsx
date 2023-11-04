import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./usePosts";
import AddComment from "../../components/addComment/AddComment";
import { useUser } from "../auth/useUser";

const SinglePost = () => {
  const { id } = useParams();
  const { posts, isLoading } = usePosts();
  const { isAuthenticated, user } = useUser();

  const post = posts?.find((item) => item.postId === Number(id));

  if (isLoading) return <p>Loading...</p>;
  console.log(user);

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
                src={item?.profile.userAvatar}
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
      <AddComment userDetails={user.id} postDetails={post.postId} />
    </div>
  );
};

export default SinglePost;
