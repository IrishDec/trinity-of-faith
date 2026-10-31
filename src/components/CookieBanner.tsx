"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "trinity-cookie-choice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(STORAGE_KEY);

    if (!choice) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function rejectCookies() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-black/10 bg-white p-5 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-semibold text-[#2f4864]">
              Cookies on Trinity of Faith
            </p>

            <p className="mt-1 text-sm leading-6 text-[#425466]">
              We use essential cookies to help the website work properly,
              including secure staff login. You can accept or reject optional
              cookies. Read our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-[#2f4864] underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={rejectCookies}
              className="rounded-full border border-[#2f4864] px-5 py-2.5 text-sm font-semibold text-[#2f4864]"
            >
              Reject
            </button>

            <button
              type="button"
              onClick={acceptCookies}
              className="rounded-full bg-[#2f4864] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}