import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("blog_page").select();
  return {
    blog_page: data ?? [],
  };
}
