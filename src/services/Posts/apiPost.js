import supabase from "../supabase";

export async function getPostDetails() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select(
      "postId, postTitle, postDesc, comment(commentId, id, postId, comment, profile(username, userAvatar)), likes(id, postId, isLiked)"
    );
  if (error) {
    console.log(error.message);
  }

  return posts;
}
