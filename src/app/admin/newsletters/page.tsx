import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabaseServer";
import NewsletterAdminClient from "@/components/admin/NewsletterAdminClient";

const newsletterRoles = [
  "super_admin",
  "mount_merrion_office",
  "kilmacud_office",
  "clonskeagh_office",
];

export default async function NewslettersAdminPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/admin/newsletters");
  }

  const { data: roleRows, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .in("role", newsletterRoles);

  if (error) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Newsletter role check error</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </main>
    );
  }

  if (!roleRows || roleRows.length === 0) {
    return (
      <main style={{ padding: 40 }}>
        <h1>No newsletter access</h1>
        <p>
          You are logged in, but this user does not have a newsletter role yet.
        </p>
      </main>
    );
  }

  const roles = roleRows.map((row) => row.role);

  return <NewsletterAdminClient roles={roles} />;
}