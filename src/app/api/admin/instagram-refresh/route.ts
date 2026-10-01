import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabaseServer";

export async function POST() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "You must be logged in." },
      { status: 401 }
    );
  }

  const { data: roleRows } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id);

  const roles = roleRows?.map((row) => row.role) ?? [];

  if (!roles.includes("super_admin")) {
    return NextResponse.json(
      { error: "Super admin access required." },
      { status: 403 }
    );
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Instagram access token is missing." },
      { status: 500 }
    );
  }

  const instagramUrl =
    "https://graph.instagram.com/me/media" +
    "?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url" +
    `&access_token=${encodeURIComponent(accessToken)}`;

  const response = await fetch(instagramUrl, {
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Instagram API error:", result);

    return NextResponse.json(
      { error: "Could not load Instagram posts.", details: result },
      { status: 500 }
    );
  }

  const posts = (result.data ?? []).slice(0, 12).map(
    (post: {
      id: string;
      caption?: string;
      media_type?: string;
      media_url?: string;
      permalink?: string;
      timestamp?: string;
      thumbnail_url?: string;
    }) => ({
      instagram_id: post.id,
      caption: post.caption ?? null,
      media_url:
        post.media_type === "VIDEO"
          ? post.thumbnail_url ?? post.media_url ?? null
          : post.media_url ?? null,
      permalink: post.permalink ?? null,
      media_type: post.media_type ?? null,
      posted_at: post.timestamp ?? null,
      updated_at: new Date().toISOString(),
    })
  );

  const { error: upsertError } = await supabase
    .from("instagram_posts")
    .upsert(posts, {
      onConflict: "instagram_id",
    });

  if (upsertError) {
    console.error("Instagram Supabase error:", upsertError);

    return NextResponse.json(
      { error: upsertError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    count: posts.length,
  });
}