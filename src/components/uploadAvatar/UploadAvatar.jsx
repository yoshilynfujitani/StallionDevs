import React, { useState } from "react";

import { useUploadavatar } from "./useUploadAvatar";
const UploadAvatar = ({ userInfo }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { uploadAvatar, uploading } = useUploadavatar();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadAvatar = (e) => {
    e.preventDefault();
    uploadAvatar({
      user: userInfo,
      newImage: selectedImage,
      id: userInfo.id,
    });
  };
  console.log(userInfo);
  return (
    <div>
      {" "}
      <div className="">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUploadAvatar} disabled={uploading}>
          Upload Avatar
        </button>
      </div>
    </div>
  );
};

export default UploadAvatar;
