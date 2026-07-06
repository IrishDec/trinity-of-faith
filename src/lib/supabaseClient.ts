import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const browserSupabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

export const supabase = browserSupabase;

export function createBrowserSupabaseClient() {
  return browserSupabase;
}