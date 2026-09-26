"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type InstagramPost = {
  id: number | string;
  instagram_id?: string;
  caption: string | null;
  media_url?: string | null;
  permalink?: string | null;
  media_type?: string | null;
  posted_at?: string | null;
};

const previewPosts: InstagramPost[] = [
  {
    id: "preview-1",
    caption: "Latest news from Trinity of Faith Partnership.",
  },
  {
    id: "preview-2",
    caption: "Keeping our three parish communities connected.",
  },
  {
    id: "preview-3",
    caption: "News, events and moments from across the partnership.",
  },
  {
    id: "preview-4",
    caption: "More parish news will appear here from Instagram.",
  },
];

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<InstagramPost[]>(previewPosts);
  useEffect(() => {
  async function loadInstagramPosts() {
    const { data, error } = await supabase
      .from("instagram_posts")
      .select(
        "id, instagram_id, caption, media_url, permalink, media_type, posted_at"
      )
      .order("posted_at", { ascending: false })
      .limit(12);

    if (error) {
      console.error("Instagram posts:", error);
      return;
    }

    if (data && data.length > 0) {
      setPosts(data);
    }
  }

  loadInstagramPosts();
}, []);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-[#f5f1e8] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#70839a]">
              Instagram
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#1f2f3f] sm:text-3xl">
              Latest Parish Updates
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous Instagram posts"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2f4864] bg-white text-xl text-[#2f4864] transition hover:bg-[#2f4864] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next Instagram posts"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2f4864] bg-white text-xl text-[#2f4864] transition hover:bg-[#2f4864] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="
            max-h-[620px] space-y-4 overflow-y-auto pr-1
            sm:flex sm:max-h-none sm:snap-x sm:space-y-0 sm:gap-5 sm:overflow-x-auto sm:overflow-y-hidden sm:pb-4
          "
        >
          {posts.map((post) => (
            <article
              key={post.id}
             className="
  w-full shrink-0 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5
  sm:w-[calc(50%-10px)] sm:min-w-[calc(50%-10px)]
  lg:w-[calc(33.333%-14px)] lg:min-w-[calc(33.333%-14px)]
              "
            >
              <div className="flex aspect-square items-center justify-center bg-[#e7f0f3] px-8 text-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#70839a]">
                    Instagram
                  </p>
                  <p className="mt-3 text-xl font-semibold text-[#2f4864]">
                    Post preview
                  </p>
                </div>
              </div>

              <div className="p-5">
               <h3 className="font-semibold text-[#2f4864]">Parish Update</h3>

                <p className="mt-2 text-sm leading-6 text-[#425466]">
                  {post.caption}
                </p>

               {post.permalink ? (
  <a
    href={post.permalink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex text-sm font-semibold text-[#2f4864]"
  >
    View on Instagram
  </a>
) : (
  <span className="mt-4 inline-flex text-sm font-semibold text-[#2f4864]">
    View on Instagram
  </span>
)}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#70839a] sm:hidden">
          Scroll down for more updates
        </p>
      </div>
    </section>
  );
}