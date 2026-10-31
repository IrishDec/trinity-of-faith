import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type InstagramApiPost = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  permalink?: string;
  timestamp?: string;
  thumbnail_url?: string;
};

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!supabaseUrl || !supabaseSecretKey || !accessToken) {
    return NextResponse.json(
      { error: "Missing server environment variables." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

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

  const instagramPosts: InstagramApiPost[] = (result.data ?? []).slice(0, 12);

  const posts = [];

  for (const post of instagramPosts) {
    const instagramMediaUrl =
      post.media_type === "VIDEO"
        ? post.thumbnail_url ?? post.media_url
        : post.media_url;

    let permanentMediaUrl: string | null = null;

    if (instagramMediaUrl) {
      try {
        const mediaResponse = await fetch(instagramMediaUrl, {
          cache: "no-store",
        });

        if (mediaResponse.ok) {
          const contentType =
            mediaResponse.headers.get("content-type") || "image/jpeg";

          const extension =
            contentType.includes("png")
              ? "png"
              : contentType.includes("webp")
                ? "webp"
                : "jpg";

          const filePath = `${post.id}.${extension}`;

          const fileData = new Uint8Array(
            await mediaResponse.arrayBuffer()
          );

          const { error: storageError } = await supabase.storage
            .from("instagram-media")
            .upload(filePath, fileData, {
              contentType,
              cacheControl: "31536000",
              upsert: true,
            });

          if (storageError) {
            console.error(
              `Instagram media upload failed for ${post.id}:`,
              storageError
            );
          } else {
            permanentMediaUrl =
              `${supabaseUrl}/storage/v1/object/public/instagram-media/${filePath}`;
          }
        }
      } catch (error) {
        console.error(
          `Instagram media processing failed for ${post.id}:`,
          error
        );
      }
    }

    posts.push({
      instagram_id: post.id,
      caption: post.caption ?? null,
      media_url: permanentMediaUrl,
      permalink: post.permalink ?? null,
      media_type: post.media_type ?? null,
      posted_at: post.timestamp ?? null,
      updated_at: new Date().toISOString(),
    });
  }

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