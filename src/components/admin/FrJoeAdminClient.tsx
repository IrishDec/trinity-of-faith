"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import LogoutButton from "@/components/admin/LogoutButton";

type WeeklyMessage = {
  id: string;
  title: string;
  week_start: string;
  slug: string;
  teaser_html: string | null;
  full_html: string | null;
  published: boolean;
  created_at: string; 
  updated_by: string | null;
};

export default function FrJoeAdminClient() {
  const [messages, setMessages] = useState<WeeklyMessage[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("A Few Words from Fr Joe");
const [updatedBy, setUpdatedBy] = useState("Fr Joe");
  const [weekStart, setWeekStart] = useState("");
  const [slug, setSlug] = useState("");
  const [teaserHtml, setTeaserHtml] = useState("");
  const [fullHtml, setFullHtml] = useState("");
  const [published, setPublished] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const { data, error } = await supabase
      .from("weekly_messages")
      .select("id, title, week_start, slug, teaser_html, full_html, published, created_at, updated_by")
      .order("week_start", { ascending: false });

    if (error) {
      setStatus(`Error loading messages: ${error.message}`);
      return;
    }

    setMessages(data || []);
  }

  function resetForm() {
    setEditingId(null);
    setTitle("A Few Words from Fr Joe");
    setUpdatedBy("Fr Joe");      
    setWeekStart("");
    setSlug("");
    setTeaserHtml("");
    setFullHtml("");
    setPublished(true);
    setStatus("");
  }

  function editMessage(message: WeeklyMessage) {
    setEditingId(message.id);
    setTitle(message.title || "");
    setWeekStart(message.week_start || "");
    setSlug(message.slug || "");
    setTeaserHtml(message.teaser_html || "");
    setFullHtml(message.full_html || "");
    setPublished(message.published);
    setStatus("Editing existing message.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveMessage() {
    setStatus("Saving...");

    const finalSlug = slug || weekStart || new Date().toISOString().slice(0, 10);

  const payload = {
  title,
  week_start: weekStart,
  slug: finalSlug,
  teaser_html: teaserHtml,
  full_html: fullHtml,
  published,
  updated_by: updatedBy,
};

    const { error } = editingId
      ? await supabase.from("weekly_messages").update(payload).eq("id", editingId)
      : await supabase.from("weekly_messages").insert(payload);

    if (error) {
      setStatus(`Error: ${error.message}`);
      return;
    }

    setStatus(editingId ? "Updated." : "Saved.");
    resetForm();
    await loadMessages();
  }

  async function deleteMessage(id: string) {
    const confirmed = window.confirm("Delete this weekly message?");
    if (!confirmed) return;

    setStatus("Deleting...");

    const { error } = await supabase.from("weekly_messages").delete().eq("id", id);

    if (error) {
      setStatus(`Error deleting: ${error.message}`);
      return;
    }

    setStatus("Deleted.");
    if (editingId === id) resetForm();
    await loadMessages();
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f]">
      <div className="mx-auto max-w-4xl space-y-8">
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]">
            CMS Admin
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-[#2f4864]">
            Fr Joe Weekly Message
          </h1>

          {editingId && (
            <p className="mt-3 rounded-2xl bg-[#f5f1e8] px-4 py-3 text-sm font-semibold text-[#2f4864]">
              Editing existing message
            </p>
          )}

          <div className="mt-8 space-y-5">
          <div>
  <label className="text-sm font-semibold text-[#2f4864]">Title</label>
  <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
    placeholder="A few words from Fr Joe"
  />
</div>

<div>
  <label className="text-sm font-semibold text-[#2f4864]">
    Updated by
  </label>
  <input
    value={updatedBy}
    onChange={(e) => setUpdatedBy(e.target.value)}
    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
    placeholder="Fr Joe"
  />
</div>

<div>
  <label className="text-sm font-semibold text-[#2f4864]">
    Week start / Sunday date
  </label>
              <input
                type="date"
                value={weekStart}
                onChange={(e) => {
                  setWeekStart(e.target.value);
                  setSlug(e.target.value);
                }}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#2f4864]">
                Front page teaser
              </label>
              <textarea
                value={teaserHtml}
                onChange={(e) => setTeaserHtml(e.target.value)}
                className="mt-2 min-h-32 w-full rounded-2xl border border-black/10 px-4 py-3"
                placeholder="Short text for the homepage Fr Joe box"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#2f4864]">
                Full weekly message
              </label>
              <textarea
                value={fullHtml}
                onChange={(e) => setFullHtml(e.target.value)}
                className="mt-2 min-h-64 w-full rounded-2xl border border-black/10 px-4 py-3"
                placeholder="Full message shown on the Fr Joe page"
              />
            </div>

            <label className="flex items-center gap-3 text-sm font-semibold text-[#2f4864]">
                <input
                  type="checkbox"
                 checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                   />
                 I have checked this and want to publish it
           </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveMessage}
                className="rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white hover:bg-[#24384f]"
              >
                {editingId ? "Update Message" : "Save Message"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full bg-[#f5f1e8] px-6 py-3 text-sm font-semibold text-[#2f4864] hover:bg-[#ebe3d4]"
                >
                  Cancel Edit
                </button>
              )}
            </div>

             <div className="mt-6 flex justify-end">
          <LogoutButton />
          </div>

            {status && <p className="text-sm font-semibold text-[#2f4864]">{status}</p>}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#2f4864]">
            Existing Messages
          </h2>

          <div className="mt-6 space-y-4">
            {messages.map((message) => (
              <article
                key={message.id}
                className="rounded-2xl border border-black/10 bg-[#f5f1e8] p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f4864]/70">
                      {message.week_start}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[#2f4864]">
                      {message.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[#425466]">
                      {message.published? "Published" : "Draft"}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editMessage(message)}
                      className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2f4864] shadow-sm hover:bg-[#eef2f5]"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteMessage(message.id)}
                      className="rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white hover:bg-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {messages.length === 0 && (
              <p className="rounded-2xl bg-[#f5f1e8] p-5 text-[#425466]">
                No messages saved yet.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}