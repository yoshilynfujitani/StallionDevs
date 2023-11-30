import { useGetUsers } from "../../components/Navbar/userGetUsers";
import moment from "moment";
import { useUsersPost } from "./userUsersPost";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { userInfo, isLoading: gettingData } = useGetUsers();
  const { data, isLoading } = useUsersPost();

  if (gettingData && isLoading) return <h1>isLoading...</h1>;

  return (
    <div className="fixed  bg-[#252525] w-1/4  mx-10 my-10 rounded-md">
      <div className="flex flex-col justify-center mx-5 my-10 space-y-5">
        <div className="flex flex-col items-center bg-[#1d1d1d]  rounded-md py-5">
          <img
            src={userInfo[0]?.userAvatar}
            alt=""
            className="w-48 h-48 rounded-full"
          />
          <h1 className="text-center text-white font-semibold text-4xl py-2">
            u/{userInfo[0]?.username}
          </h1>
          <h1 className="text-sm italic text-gray-300 text-center">
            member since {moment(userInfo[0]?.created_at).fromNow()}
          </h1>
        </div>
        <Link to="/yourposts">
          {" "}
          <div className="bg-[#1d1d1d] py-5 rounded-md text-white text-center">
            Your Posts {data?.length}
          </div>
        </Link>
        <div className="">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload Avatar
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
