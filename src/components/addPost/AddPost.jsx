import { useState } from "react";
import { useAddPost } from "./useAddPost";
import { useUser } from "../../pages/auth/useUser";

const AddPost = () => {
  const [posttitle, setposttitle] = useState("");
  const [description, setdesc] = useState("");
  const [category, setCategory] = useState("all");
  const { addPost, isLoading } = useAddPost();
  const { user } = useUser();
  const userId = user?.id;

  function handleSubmit(e) {
    e.preventDefault();
    addPost({
      id: userId,
      title: posttitle,
      desc: description,
      category: category,
    });
  }
  return (
    <div>
      <input type="text" onChange={(e) => setposttitle(e.target.value)} />
      <input type="text" onChange={(e) => setdesc(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>Bugs and Glitches</option>
        <option>Improvements</option>
        <option>Announcements</option>
      </select>

      <button onClick={handleSubmit} disabled={isLoading}>
        Add post
      </button>
    </div>
  );
};

export default AddPost;
