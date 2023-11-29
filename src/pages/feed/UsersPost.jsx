import React from "react";
import { useUsersPost } from "../dashboard/userUsersPost";
import Back from "../../utils/Back";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";

const UsersPost = () => {
  const { data, isLoading } = useUsersPost();

  if (isLoading) return <p>IsLoading...</p>;
  console.log(data);
  return (
    <div className="container">
      <Back destination={"/home"} />
      <div className="grid grid-rows-4  gap-5 w-full py-10 bg-[#252525] rounded-md px-5 mt-10">
        {data.map((post) => (
          <Link to={`/post/{post.postId}`} key={post.postId}>
            <PostCard postDetails={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPost;
