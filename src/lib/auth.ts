import { createServerSupabaseClient } from "@/lib/supabaseServer";

export async function userHasRole(role: string) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { allowed: false, user: null };

  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .eq("role", role)
    .maybeSingle();

  if (error || !data) {
    return { allowed: false, user };
  }

  return { allowed: true, user };
}