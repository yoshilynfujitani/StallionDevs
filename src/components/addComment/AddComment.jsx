import React, { useState } from "react";
import { useAddComment } from "./useAddComment";

const AddComment = ({ userDetails, postDetails }) => {
  const [comment, setComment] = useState();
  const { addComment, creatingComment } = useAddComment();
  console.log(userDetails);
  function handleSubmit(e) {
    e.preventDefault();
    addComment({ userId: userDetails, postId: postDetails, comment: comment });
  }
  return (
    <div>
      AddComment
      <input
        type="text"
        className="border"
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="" onClick={handleSubmit} disabled={creatingComment}>
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;
