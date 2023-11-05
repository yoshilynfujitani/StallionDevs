import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./usePosts";
import AddComment from "../../components/addComment/AddComment";
import { useUser } from "../auth/useUser";
import { useLikePost } from "./useLikePost";
import { useUnlikePost } from "./useUnlikePost";

const SinglePost = () => {
  const { id } = useParams();
  const { posts, isLoading } = usePosts();
  const { isAuthenticated, user } = useUser();
  const { likePost, likingPost } = useLikePost();
  const { unlikePost, unlikingPost } = useUnlikePost();

  const userId = user?.id;

  const post = posts?.find((item) => item.postId === Number(id));
  const isLiked = post?.likes.find((item) => item.id === user.id);
  const postId = post?.postId;
  let numberOfLikes = post?.likes.length;
  if (isLoading) return <p>Loading...</p>;

  function handleLikeButton(e) {
    e.preventDefault();
    likePost({ userId: userId, postId: postId });
  }

  function handleUnLikeButton(e) {
    e.preventDefault();
    unlikePost({ userId: userId });
  }

  return (
    <div>
      {post?.postTitle}
      {isLiked ? (
        <button
          className="h-5 w-5 rounded-full bg-green-500"
          onClick={handleUnLikeButton}
        ></button>
      ) : (
        <button
          className="h-5 w-5 rounded-full bg-red-500"
          onClick={handleLikeButton}
        ></button>
      )}
      <h2>{numberOfLikes} Likes</h2>
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
      <AddComment userDetails={userId} postDetails={postId} />
    </div>
  );
};

export default SinglePost;
