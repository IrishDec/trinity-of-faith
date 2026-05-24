import { supabase } from "@/lib/supabaseClient";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type WeeklyMessage = {
  id: string;
  title: string;
  week_start: string;
  teaser_html: string | null;
  full_html: string | null;
  slug: string;
  published: boolean;
  created_at: string;
  updated_by: string | null;
};

export default async function WeeklyMessagesPage() {
  const { data: messages, error } = await supabase
    .from("weekly_messages")
    .select(
      "id, title, week_start, teaser_html, full_html, slug, published, created_at, updated_by"
    )
    .eq("published", true)
    .order("week_start", { ascending: false });

  if (error) {
    return (
      <>
        <main className="min-h-screen bg-[#f5f1e8] px-6 py-16 text-[#1f2f3f]">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-semibold">Fr Joe</h1>
            <p className="mt-4 text-red-700">Could not load weekly messages.</p>
          </div>
        </main>

        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-8 text-[#1f2f3f]">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {messages?.map((message: WeeklyMessage) => (
              <article
                key={message.id}
                className="rounded-3xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f4864]/70">
                  {message.week_start}
                </p>

                {message.updated_by && (
                  <p className="mt-2 text-sm font-semibold text-[#425466]">
                    Updated by {message.updated_by}
                  </p>
                )}

                <h2 className="mt-2 text-2xl font-semibold text-[#2f4864]">
                  {message.title}
                </h2>
<p className="text-red-600">{String(message.full_html)}</p>
{message.full_html && (
  <div className="mt-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
    {message.full_html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .split("\n\n")
      .filter((paragraph) => paragraph.trim() !== "")
      .map((paragraph, index) => (
        <p key={index} className="mb-5 last:mb-0">
          {paragraph.replace(/\n/g, " ")}
        </p>
      ))}
  </div>
)}
              </article>
            ))}

            {messages?.length === 0 && (
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p>No weekly messages published yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}