import { useState } from "react";
import { useAddPost } from "./useAddPost";
import { useUser } from "../../pages/auth/useUser";

const AddPost = () => {
  const [posttitle, setposttitle] = useState("");
  const [description, setdesc] = useState("");
  const { addPost, isLoading } = useAddPost();
  const { user } = useUser();
  const userId = user?.id;

  function handleSubmit(e) {
    e.preventDefault();
    addPost({ id: userId, title: posttitle, desc: description });
  }
  return (
    <div>
      <input type="text" onChange={(e) => setposttitle(e.target.value)} />
      <input type="text" onChange={(e) => setdesc(e.target.value)} />

      <button onClick={handleSubmit} disabled={isLoading}>
        Add post
      </button>
    </div>
  );
};

export default AddPost;
