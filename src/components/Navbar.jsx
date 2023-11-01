import { useGetUsers } from "./userGetUsers";
import { useUser } from "../pages/auth/useUser";
import { useState } from "react";
import { uploadAvatar } from "../services/apiUser";
import { useLogOut } from "./useLogOut";

const Navbar = () => {
  const { isAuthenticated, user } = useUser();
  const { userInfo, isLoading: gettingData } = useGetUsers();
  const [selectedImage, setSelectedImage] = useState(null);
  const { logout, isLoading: isLoggingOut } = useLogOut();

  const currentUserInfo = userInfo?.find((users) => users.id === user.id);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadAvatar = (e) => {
    e.preventDefault();
    uploadAvatar({
      user: currentUserInfo,
      newImage: selectedImage,
      id: currentUserInfo.id,
    });
  };

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
      {/* Avatar upload */}
      {/* <div className="">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUploadAvatar}>Upload Avatar</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
