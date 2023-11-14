import { useGetUsers } from "./userGetUsers";
import { useUser } from "../../pages/auth/useUser";

import { useLogOut } from "./useLogOut";
import UploadAvatar from "../uploadAvatar/uploadAvatar";

const Navbar = () => {
  const { isAuthenticated } = useUser();
  const { userInfo, isLoading: gettingData } = useGetUsers();

  const { logout, isLoading: isLoggingOut } = useLogOut();

  if (gettingData) return <h1>Loading...</h1>;
  const currentUserInfo = userInfo[0];
  console.log(currentUserInfo);

  return (
    <nav className="container flex items0center justify-between px-10 py-2">
      <div className="">Stallion Developers Batac</div>
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src={currentUserInfo?.userAvatar}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          {!gettingData && <p>{currentUserInfo.username}</p>}
        </div>
        {isAuthenticated && (
          <div className="">
            <button onClick={logout} disabled={isLoggingOut}>
              LogOut
            </button>
          </div>
        )}
      </div>
      {/* Avatar pload */}
      <UploadAvatar userInfo={currentUserInfo} />
    </nav>
  );
};

export default Navbar;
