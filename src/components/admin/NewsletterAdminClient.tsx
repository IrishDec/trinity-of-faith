"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabaseClient";

const allParishes = [
  {
    key: "mount_merrion",
    name: "Mount Merrion Parish",
    role: "mount_merrion_office",
  },
  {
    key: "kilmacud",
    name: "Kilmacud Parish",
    role: "kilmacud_office",
  },
  {
    key: "clonskeagh",
    name: "Clonskeagh Parish",
    role: "clonskeagh_office",
  },
];

type NewsletterUpload = {
  id: number;
  parish: string;
  week_start: string;
  title: string;
  file_path: string;
  created_at: string;
};

type NewsletterAdminClientProps = {
  roles: string[];
};

function getParishName(key: string) {
  return allParishes.find((parish) => parish.key === key)?.name || key;
}

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function NewsletterAdminClient({
  roles,
}: NewsletterAdminClientProps) {
  const supabase = createBrowserSupabaseClient();

  const isSuperAdmin = roles.includes("super_admin");

  const visibleParishes = isSuperAdmin
    ? allParishes
    : allParishes.filter((parish) => roles.includes(parish.role));

  const visibleParishKeys = visibleParishes.map((parish) => parish.key);

  const [weekStart, setWeekStart] = useState("");
  const [title, setTitle] = useState("Weekly Newsletter");
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [uploads, setUploads] = useState<NewsletterUpload[]>([]);
  const [loadingParish, setLoadingParish] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  async function loadUploads() {
    let query = supabase
      .from("newsletter_uploads")
      .select("id, parish, week_start, title, file_path, created_at")
      .order("week_start", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(20);

    if (!isSuperAdmin) {
      query = query.in("parish", visibleParishKeys);
    }

    const { data, error } = await query;

    if (error) {
      setMessage(error.message);
      return;
    }

    setUploads(data ?? []);
  }

  useEffect(() => {
    loadUploads();
  }, []);

  async function handleUpload(parish: string) {
    setMessage("");

    if (!visibleParishKeys.includes(parish)) {
      setMessage("You do not have permission to upload for this parish.");
      return;
    }

    const file = files[parish];

    if (!file) {
      setMessage("Please choose a PDF first.");
      return;
    }

    if (!weekStart) {
      setMessage("Please choose the newsletter week date.");
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("Please upload a PDF file.");
      return;
    }

    setLoadingParish(parish);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setMessage("You must be logged in to upload.");
      setLoadingParish("");
      return;
    }

    const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-");
    const filePath = `${parish}/${weekStart}/${Date.now()}-${safeFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("newsletters")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      setMessage(uploadError.message);
      setLoadingParish("");
      return;
    }

    const { error: insertError } = await supabase
      .from("newsletter_uploads")
      .insert({
        parish,
        week_start: weekStart,
        title,
        file_path: filePath,
        uploaded_by: user.id,
      });

    if (insertError) {
      setMessage(insertError.message);
      setLoadingParish("");
      return;
    }

    setFiles((current) => ({
      ...current,
      [parish]: null,
    }));

    setMessage("Newsletter uploaded successfully.");
    setLoadingParish("");
    await loadUploads();
  }

  async function handleDelete(upload: NewsletterUpload) {
    if (!isSuperAdmin && !visibleParishKeys.includes(upload.parish)) {
      setMessage("You do not have permission to delete this newsletter.");
      return;
    }

    const confirmed = window.confirm(
      `Delete ${getParishName(upload.parish)} newsletter for ${formatDate(
        upload.week_start
      )}?`
    );

    if (!confirmed) {
      return;
    }

    setMessage("");
    setDeletingId(upload.id);

    const { error: storageError } = await supabase.storage
      .from("newsletters")
      .remove([upload.file_path]);

    if (storageError) {
      setMessage(storageError.message);
      setDeletingId(null);
      return;
    }

    const { error: tableError } = await supabase
      .from("newsletter_uploads")
      .delete()
      .eq("id", upload.id);

    if (tableError) {
      setMessage(tableError.message);
      setDeletingId(null);
      return;
    }

    setMessage("Newsletter deleted.");
    setDeletingId(null);
    await loadUploads();
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f]">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Newsletter Admin</h1>

        <p className="mt-3 text-[#425466]">
          Upload weekly parish newsletters as PDF files.
        </p>

        <div className="mt-4 rounded-2xl bg-white px-5 py-4 text-sm text-[#425466] shadow-sm">
          {isSuperAdmin
            ? "You have super admin access and can manage all parishes."
            : "You can only manage the parish assigned to your account."}
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Newsletter week
              </label>
              <input
                type="date"
                value={weekStart}
                onChange={(event) => setWeekStart(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        {message ? (
          <p className="mt-6 rounded-2xl bg-white px-5 py-4 text-sm shadow-sm">
            {message}
          </p>
        ) : null}

        <div className="mt-8 grid gap-6">
          {visibleParishes.map((parish) => (
            <section
              key={parish.key}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h2 className="text-xl font-semibold">{parish.name}</h2>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#2f4864] bg-white px-5 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-[#f5f1e8]">
                    Select PDF
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(event) =>
                        setFiles((current) => ({
                          ...current,
                          [parish.key]: event.target.files?.[0] ?? null,
                        }))
                      }
                      className="sr-only"
                    />
                  </label>

                  <span className="text-sm text-[#425466]">
                    {files[parish.key]?.name || "No file selected"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleUpload(parish.key)}
                  disabled={loadingParish === parish.key}
                  className="rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {loadingParish === parish.key ? "Uploading..." : "Upload"}
                </button>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-semibold">Recent uploads</h2>

          {uploads.length === 0 ? (
            <p className="mt-4 text-sm text-[#70839a]">
              No newsletters uploaded yet.
            </p>
          ) : (
            <div className="mt-5 divide-y divide-slate-200">
              {uploads.map((upload) => (
                <div
                  key={upload.id}
                  className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      {getParishName(upload.parish)}
                    </p>
                    <p className="mt-1 text-sm text-[#425466]">
                      {upload.title} — {formatDate(upload.week_start)}
                    </p>
                    <p className="mt-1 break-all text-xs text-[#70839a]">
                      {upload.file_path}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(upload)}
                    disabled={deletingId === upload.id}
                    className="rounded-full border border-red-200 bg-white px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
                  >
                    {deletingId === upload.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}