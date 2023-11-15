import React, { useEffect } from "react";

import AddComment from "../../components/addComment/AddComment";
import { useUser } from "../auth/useUser";
import { useLikePost } from "./useLikePost";
import { useUnlikePost } from "./useUnlikePost";
import moment from "moment/moment";
import { useDeleteComment } from "../../components/addComment/useDeleteComment";
import { useDeletePost } from "../../components/addPost/useDeletePost";
import { usePost } from "./usePost";
import { useSearchParams } from "react-router-dom";
import CommentPagination from "./CommentPagination";
import Back from "../../utils/Back";

const SinglePost = () => {
  const { post, isLoading } = usePost();
  let currentPost = post?.SinglePosts[0];
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useUser();
  const { likePost, likingPost } = useLikePost();
  const { unlikePost, unlikingPost } = useUnlikePost();
  const { deleteComment, deletetingComment } = useDeleteComment();
  const { deletePost, deletingPost } = useDeletePost();

  const userId = user?.id;

  const isLiked = currentPost?.likes.find((item) => item.id === user.id);
  const postId = currentPost?.postId;
  let numberOfLikes = currentPost?.likes.length;
  if (isLoading) return <p>Loading...</p>;

  console.log(currentPost);

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
      <div className="">
        <Back />
      </div>
      {currentPost?.postTitle}
      <h1>posted {moment(currentPost.created_at).fromNow()}</h1>
      {currentPost.userId === userId ? (
        <button
          onClick={() => deletePost(currentPost?.postId)}
          disabled={deletingPost}
        >
          Delete Post
        </button>
      ) : (
        ""
      )}
      {isLiked ? (
        <button
          className="h-5 w-5 rounded-full bg-green-500"
          onClick={handleUnLikeButton}
          disabled={unlikingPost}
        ></button>
      ) : (
        <button
          className="h-5 w-5 rounded-full bg-red-500"
          onClick={handleLikeButton}
          disabled={likingPost}
        ></button>
      )}
      <h2>
        {numberOfLikes === 0
          ? "Be the first one to like the post"
          : `${numberOfLikes} Likes`}{" "}
      </h2>
      <h1>Comments</h1>
      {currentPost.comment ? (
        currentPost.comment.map((item) => (
          <>
            <div className="flex items-center" key={item.id}>
              <img
                src={item?.profile.userAvatar}
                className="w-14 h-14 rounded-full"
                alt=""
              />
              <h1>{item.profile.username}</h1>
            </div>
            <p className="pl-10">
              {" "}
              {item.comment}{" "}
              <span>posted {moment(item.created_at).fromNow()}</span>
            </p>
            {userId === item.id ? (
              <button
                disabled={deletetingComment}
                onClick={() => deleteComment(item?.commentId)}
              >
                Delete comment
              </button>
            ) : (
              ""
            )}
          </>
        ))
      ) : (
        <div>Be the first one to comment!</div>
      )}
      <AddComment userDetails={userId} postDetails={postId} />
      <CommentPagination count={currentPost.commentCount[0].count} />
    </div>
  );
};

export default SinglePost;
