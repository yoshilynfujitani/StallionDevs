import React from "react";

const PostCard = ({ postDetails }) => {
  const { postTitle, postDesc, likes } = postDetails;
  const noOfLikes = likes.length;
  console.log(postDetails);
  return (
    <div className="bg-[#1d1d1d] max-w-full min-h-[50px] rounded-md py-2 px-4 drop-shadow-md">
      <h1 className="bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent text-xl ">
        {postTitle}
      </h1>
      <p className="line-clamp-2">{postDesc}</p>
      <p>{noOfLikes} Likes</p>
    </div>
  );
};

export default PostCard;
