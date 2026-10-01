"use client";

import { useState } from "react";

export default function InstagramRefreshButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRefresh() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/instagram-refresh", {
        method: "POST",
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "Instagram refresh failed.");
        return;
      }

      setMessage(
        `Instagram refreshed successfully. ${result.count ?? 0} post(s) updated.`
      );
    } catch {
      setMessage("Instagram refresh failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 p-6">
      <h2 className="text-xl font-semibold text-[#2f4864]">
        Instagram Feed
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#425466]">
        Refresh the latest parish Instagram posts shown on the homepage.
      </p>

      <button
        type="button"
        onClick={handleRefresh}
        disabled={loading}
        className="mt-5 rounded-full bg-[#2f4864] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#24384f] disabled:opacity-60"
      >
        {loading ? "Refreshing..." : "Refresh Instagram"}
      </button>

      {message ? (
        <p className="mt-3 text-sm text-[#425466]">{message}</p>
      ) : null}
    </div>
  );
}