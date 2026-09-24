import Link from "next/link";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { createServerSupabaseClient } from "@/lib/supabaseServer";

const officeRoles = [
  "super_admin",
  "mount_merrion_office",
  "kilmacud_office",
  "clonskeagh_office",
];

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/admin");
  }

  const { data: roleRows } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id);

  const roles = roleRows?.map((row) => row.role) ?? [];

  const canManageNewsletters = roles.some((role) =>
    officeRoles.includes(role)
  );

  const canManageFrJoe =
    roles.includes("super_admin") || roles.includes("fr_joe_editor");

  if (!canManageNewsletters && !canManageFrJoe) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f]">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h1 className="text-3xl font-semibold text-[#2f4864]">
              No admin access
            </h1>
            <p className="mt-4 text-[#425466]">
              You are logged in, but this account does not currently have an admin role.
            </p>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]/70">
              Staff Area
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864]">
              Admin Dashboard
            </h1>

            <p className="mt-4 leading-7 text-[#425466]">
              Choose the area you would like to manage.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {canManageNewsletters && (
                <Link
                  href="/admin/newsletters"
                  className="rounded-2xl border border-black/10 p-6 transition hover:bg-[#f8f6f1]"
                >
                  <h2 className="text-xl font-semibold text-[#2f4864]">
                    Newsletters
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#425466]">
                    Upload and manage parish newsletters.
                  </p>
                </Link>
              )}

              {canManageFrJoe && (
                <Link
                  href="/fr-joe-admin"
                  className="rounded-2xl border border-black/10 p-6 transition hover:bg-[#f8f6f1]"
                >
                  <h2 className="text-xl font-semibold text-[#2f4864]">
                    Fr Joe&apos;s Words
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#425466]">
                    Update the weekly message shown on the website.
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}