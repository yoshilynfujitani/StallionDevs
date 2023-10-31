import supabase, { supabaseUrl } from "./supabase";

export async function getUsers() {
  let { data: profile, error } = await supabase.from("profile").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return profile;
}

export async function uploadAvatar(user) {
  console.log(user.id);
  const hasImagePath = user.userAvatar?.startsWith(supabaseUrl);

  const imageName = `${Math.random()}-${user.newImage.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? user.userAvatar
    : `${supabaseUrl}/storage/v1/object/public/useravatar/${imageName}`;

  // 1. Create/edit user profile
  let query = supabase.from("profile");

  if (user.id)
    query = query
      .update({ ...user.user, userAvatar: imagePath })
      .eq("id", user.id);
  const { data, error } = await query.single();

  if (error) {
    console.error(error);
    throw new Error("User profile could not be updated");
  }

  // 2. Upload a new image if necessary
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("useravatar")
      .upload(imageName, user.newImage);

    if (storageError) {
      console.error(storageError);
      throw new Error("Image upload failed");
    }
  }

  return data; // Return the updated user profile.
}
