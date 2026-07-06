import { redirect } from "next/navigation";
import FrJoeAdminClient from "@/components/admin/FrJoeAdminClient";
import { createServerSupabaseClient } from "@/lib/supabaseServer";

export default async function FrJoeAdminPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: roleRow } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .eq("role", "fr_joe_editor")
    .maybeSingle();

  if (!roleRow) {
    redirect("/");
  }

  return <FrJoeAdminClient />;
}