import supabase from "../supabase";

export async function getPostDetails() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select(
      "postId, postTitle, postDesc,created_at,userId, comment(commentId, id, postId, comment,created_at, profile(username, userAvatar)), likes(id, postId, isLiked)"
    );
  if (error) {
    console.log(error.message);
  }

  return posts;
}

export async function addPost({ id, title, desc }) {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ userId: id, postTitle: title, postDesc: desc }])
    .select();

  if (error) {
    console.log(error.message);
  }
  return data;
}

export async function deletePost(postId) {
  const { error } = await supabase.from("posts").delete().eq("postId", postId);

  if (error) {
    console.log(error.message);
  }
}
