"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PastoralSupportPage() {
  const [chosenChurch, setChosenChurch] = useState("");
  const [supportType, setSupportType] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!chosenChurch) {
      setError("Please select the parish office you would like to contact.");
      return;
    }

    if (!supportType) {
      setError("Please select the type of pastoral support needed.");
      return;
    }

    setError("");
    alert("Pastoral support form validation is working.");
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]/70">
              Sacraments
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864]">
              Pastoral Support
            </h1>

            <p className="mt-4 leading-7 text-[#425466]">
              Please use this form to contact the parish office about pastoral
              support, including anointing of the sick, Holy Communion for the
              sick or housebound, bereavement support, or a priest visit.
            </p>

            <div className="mt-8 space-y-5">
              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Sacrament of the Sick
                </h2>

                <p className="mt-3 leading-7 text-[#425466]">
                  This Sacrament of Anointing is available to those who are ill,
                  housebound, infirm, or experiencing the need for healing. If
                  you would like a priest to visit or would like Holy Communion
                  brought to someone, please contact the parish office.
                </p>
              </section>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Your Details
                </h2>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Your name *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Phone number *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Phone number"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Person support is for
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Type of Support
                </h2>

                <p className="mt-2 text-sm text-[#425466]">
                  Please select the type of support needed.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    "Anointing of the Sick",
                    "Holy Communion for sick or housebound",
                    "Priest visit",
                    "Bereavement support",
                    "Funeral or memorial support",
                    "General pastoral support",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]"
                    >
                      <input
                        type="radio"
                        name="supportType"
                        value={item}
                        checked={supportType === item}
                        onChange={(e) => setSupportType(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}
                </div>

                {error && !supportType && (
                  <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                )}
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Choose Parish Office
                </h2>

                <p className="mt-2 text-sm text-[#425466]">
                  Please select the parish office you would like this message sent to.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]">
                    <input
                      type="radio"
                      name="chosenChurch"
                      value="Clonskeagh"
                      checked={chosenChurch === "Clonskeagh"}
                      onChange={(e) => setChosenChurch(e.target.value)}
                    />
                    Clonskeagh
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]">
                    <input
                      type="radio"
                      name="chosenChurch"
                      value="Kilmacud"
                      checked={chosenChurch === "Kilmacud"}
                      onChange={(e) => setChosenChurch(e.target.value)}
                    />
                    Kilmacud
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]">
                    <input
                      type="radio"
                      name="chosenChurch"
                      value="Mount Merrion"
                      checked={chosenChurch === "Mount Merrion"}
                      onChange={(e) => setChosenChurch(e.target.value)}
                    />
                    Mount Merrion
                  </label>
                </div>

                {error && !chosenChurch && (
                  <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                )}
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Message
                </h2>

                <label className="text-sm font-semibold text-[#2f4864]">
                  Please give any details that may help the parish office *
                </label>

                <textarea
                  required
                  className="mt-2 min-h-40 w-full rounded-2xl border border-black/10 px-4 py-3"
                  placeholder="Write your message here..."
                />
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Consent
                </h2>

                <div className="mt-5 space-y-4">
                  <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
                    <input type="checkbox" required className="mt-1" />
                    I confirm that the information provided is accurate.
                  </label>

                  <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
                    <input type="checkbox" required className="mt-1" />
                    I consent to the parish contacting me about this pastoral
                    support request.
                  </label>
                </div>
              </section>

              <div>
                {error && (
                  <p className="mb-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#2f4864] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
                >
                  Send Pastoral Support Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}