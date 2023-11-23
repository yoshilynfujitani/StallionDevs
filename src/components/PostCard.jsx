import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const PostCard = ({ postDetails }) => {
  const { postTitle, postDesc, likes, comment } = postDetails;
  const noOfLikes = likes.length;
  console.log(postDetails);
  return (
    <div className="bg-[#1d1d1d] max-w-full min-h-[50px] rounded-md py-2 px-4 drop-shadow-md">
      <h1 className="bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent text-xl ">
        {postTitle}
      </h1>
      <p className="line-clamp-2 text-sm text-slate-100">{postDesc}</p>
      <div className="flex items-center gap-3">
        <p className="flex items-center gap-1">
          {noOfLikes} <AiFillLike />
        </p>
        <p className="flex items-center gap-1">
          {comment[0].count} <FaRegComment />
        </p>
      </div>
    </div>
  );
};

export default PostCard;
