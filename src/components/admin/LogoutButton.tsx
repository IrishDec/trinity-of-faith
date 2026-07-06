"use client";

import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabaseClient";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-full bg-[#2f4864] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
    >
      Log out
    </button>
  );
}