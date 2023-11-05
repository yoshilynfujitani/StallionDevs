import supabase from "../supabase";

export async function likePost({ userId, postId }) {
  const { data, error } = await supabase
    .from("likes")
    .insert([{ id: userId, postId: postId, isLiked: true }])
    .select();
  if (error) {
    console.log(error.message);
  }

  return data;
}

export async function unlikePost({ userId }) {
  const { error } = await supabase.from("likes").delete().eq("id", userId);
  if (error) {
    console.log(error.message);
  }
}
