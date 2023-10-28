import supabase from "./supabase";

export async function login() {
  let { data, error } = await supabase.auth.signUp({
    email: "yosbi52@gmail.com",
    password: "123456",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
