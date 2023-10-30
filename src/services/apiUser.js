import supabase from "./supabase";

export async function getUsers() {
  let { data: profile, error } = await supabase.from("profile").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return profile;
}
