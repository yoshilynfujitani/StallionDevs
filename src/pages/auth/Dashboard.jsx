import React from "react";
import { useGetUsers } from "../../components/Navbar/userGetUsers";
import moment from "moment";

const Dashboard = () => {
  const { userInfo, isLoading: gettingData } = useGetUsers();
  if (gettingData) return <h1>isLoading...</h1>;
  console.log(userInfo);
  return (
    <div className="fixed  bg-[#252525] w-1/4  mx-10 my-10 rounded-md">
      <div className="flex flex-col justify-center mx-5 my-10 space-y-5">
        <div className="flex flex-col items-center bg-[#1d1d1d]  rounded-md py-5">
          <img
            src={userInfo[0].userAvatar}
            alt=""
            className="w-48 h-48 rounded-full"
          />
          <h1 className="text-center text-white font-semibold text-4xl py-2">
            u/{userInfo[0].username}
          </h1>
          <h1 className="text-sm italic text-gray-300 text-center">
            member since {moment(userInfo[0].created_at).fromNow()}
          </h1>
        </div>
        <div className="bg-[#1d1d1d] py-5 rounded-md">Your Posts</div>
      </div>
    </div>
  );
};

export default Dashboard;
