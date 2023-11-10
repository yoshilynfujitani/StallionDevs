import supabase from "../supabase";

export async function getPostDetails({ category }) {
  let query = supabase
    .from("posts")
    .select(
      "postId, postTitle, postDesc,created_at,userId, comment(commentId, id, postId, comment,created_at, profile(username, userAvatar)), likes(id, postId, isLiked)"
    );

  if (category === "all" || category === undefined) {
    query;
  } else {
    query = query.eq("postCategory", category);
  }

  let { data: posts, error } = await query;
  if (error) {
    console.log(error.message);
  }

  return posts;
}

export async function getSinglePost(id) {
  let { data: SinglePosts, error } = await supabase
    .from("posts")
    .select(
      "postId, postTitle, postDesc,created_at,userId, comment(commentId, id, postId, comment,created_at, profile(username, userAvatar)), likes(id, postId, isLiked)"
    )
    .eq("postId", id);

  if (error) {
    console.log(error.message);
  }

  return { SinglePosts, error };
}

export async function addPost({ id, title, desc, category }) {
  const { data, error } = await supabase
    .from("posts")
    .insert([
      { userId: id, postTitle: title, postDesc: desc, postCategory: category },
    ])
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
