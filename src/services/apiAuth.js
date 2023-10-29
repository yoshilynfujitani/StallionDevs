import supabase from "./supabase";

export async function signUp({ email, password, name }) {
  try {
    let { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) throw error;
  } catch (e) {
    console.log(e.message);
  }
}
