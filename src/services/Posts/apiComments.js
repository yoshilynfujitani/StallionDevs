import supabase from "../supabase";

export async function addComment({ userId, postId, comment }) {
  const { data, error } = await supabase
    .from("comment")
    .insert([{ id: userId, postId: postId, comment: comment }])
    .select();
  if (error) {
    console.log(error.message);
  }

  return data;
}

export async function deleteComment(commentId) {
  const { error } = await supabase
    .from("comment")
    .delete()
    .eq("commentId", commentId);

  if (error) {
    console.log(error.message);
  }
}
