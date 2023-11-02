import supabase from "../supabase";

export async function getPostDetails() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select(
      "postId, postTitle, postDesc, comment(commentId, id, postId, comment), likes(id, postId, isLiked)"
    );
  if (error) {
    console.log(error.message);
  }

  return posts;
}

// let { data: posts, error } = await supabase.from("posts").select(`
//     some_column,
//     other_table (
//       foreign_key
//     )
//   `);
