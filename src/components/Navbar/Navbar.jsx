import { useGetUsers } from "./userGetUsers";
import { useUser } from "../../pages/auth/useUser";

import { useLogOut } from "./useLogOut";
import UploadAvatar from "../uploadAvatar/uploadAvatar";

import { FaCode } from "react-icons/fa";
import Filter from "../../ui/Filter";

const Navbar = () => {
  const { isAuthenticated } = useUser();
  const { userInfo, isLoading: gettingData } = useGetUsers();

  const { logout, isLoading: isLoggingOut } = useLogOut();

  if (gettingData) return <h1>Loading...</h1>;
  const currentUserInfo = userInfo[0];
  console.log(currentUserInfo);

  return (
    <nav className="bg-[#1d1d1d] flex items-center justify-between px-10 py-2 text-white drop-shadow-md font-ubuntu">
      <div className="text-2xl  flex items-center gap-2 bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent">
        <FaCode className="text-red-500 " />
        Stallion Developers
      </div>
      <div className="">
        <Filter
          options={[
            "General",
            "Bugs and Glitches",
            "Improvements",
            "Announcements",
          ]}
        />
      </div>
      <div className="flex items-center">
        {isAuthenticated && (
          <div className="">
            <button onClick={logout} disabled={isLoggingOut}>
              LogOut
            </button>
          </div>
        )}
      </div>
      {/* Avatar pload */}
      {/* <UploadAvatar userInfo={currentUserInfo} /> */}
    </nav>
  );
};

export default Navbar;
