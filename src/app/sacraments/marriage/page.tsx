"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function MarriageEnquiryPage() {
  const [chosenChurch, setChosenChurch] = useState("");
  const [previousMarriage, setPreviousMarriage] = useState("");
  const [bothCatholic, setBothCatholic] = useState("");
  const [civilResponsibility, setCivilResponsibility] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!chosenChurch) {
      setError("Please select the church you would like to provisionally book.");
      return;
    }

    if (!previousMarriage) {
      setError("Please answer whether either of you has been married before.");
      return;
    }

    if (!bothCatholic) {
      setError("Please answer whether you are both Catholic.");
      return;
    }

    if (!civilResponsibility) {
      setError(
        "Please confirm whether you understand responsibility for civil notification and registration."
      );
      return;
    }

    setError("");
    alert("Marriage booking enquiry validation is working.");
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
              Provisional Marriage Booking
            </h1>

            <p className="mt-4 leading-7 text-[#425466]">
              Preparing for marriage is an exciting time and we look forward to
              helping you prepare for your wedding day and your life together as
              a married couple.
            </p>

            <div className="mt-8 space-y-5">
              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Notice Required
                </h2>
                <p className="mt-3 leading-7 text-[#425466]">
                  Four months’ notice of your intention to marry is required,
                  but it is advisable to contact the parish office as early as
                  possible to see if your preferred date is available.
                </p>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  You Will Need
                </h2>

                <div className="mt-3 space-y-3 leading-7 text-[#425466]">
                  <p>
                    A Letter of Freedom to Marry form. A parent or sibling will
                    need to complete this in the presence of a priest.
                  </p>
                  <p>
                    Participation in a marriage preparation course, which can be
                    booked through Accord or Together.
                  </p>
                  <p>The prenuptial enquiry form.</p>
                  <p>
                    Baptism and Confirmation Certificates dated within six months
                    of the proposed wedding date.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  State Regulations
                </h2>

                <p className="mt-3 leading-7 text-[#425466]">
                  The Registrar of Marriages must be notified of your intention
                  to marry, in person, at least three months before the date of
                  the marriage. Civil notification and registration remain the
                  responsibility of the couple.
                </p>
              </section>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Bride Details
                </h2>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Bride full name *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Bride full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Bride telephone / mobile *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-sm font-semibold text-[#2f4864]">
                    Bride address *
                  </label>
                  <textarea
                    required
                    className="mt-2 min-h-24 w-full rounded-2xl border border-black/10 px-4 py-3"
                    placeholder="Bride address"
                  />
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Groom Details
                </h2>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Groom full name *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Groom full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Groom telephone / mobile *
                    </label>
                    <input
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-sm font-semibold text-[#2f4864]">
                    Groom address *
                  </label>
                  <textarea
                    required
                    className="mt-2 min-h-24 w-full rounded-2xl border border-black/10 px-4 py-3"
                    placeholder="Groom address"
                  />
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Booking Details
                </h2>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Requested wedding date *
                    </label>
                    <input
                      type="date"
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Requested wedding time *
                    </label>
                    <input
                      type="time"
                      required
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-[#2f4864]">
                      Name of priest who has agreed to officiate
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                      placeholder="Optional / if known"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Choose Church
                </h2>

                <p className="mt-2 text-sm text-[#425466]">
                  Please select the church you would like to provisionally book.
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
                  Declaration by Couple
                </h2>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-[#2f4864]">
                      Have either of you been married in any religious or civil
                      ceremony? *
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="previousMarriage"
                          value="Yes"
                          checked={previousMarriage === "Yes"}
                          onChange={(e) => setPreviousMarriage(e.target.value)}
                        />
                        Yes
                      </label>

                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="previousMarriage"
                          value="No"
                          checked={previousMarriage === "No"}
                          onChange={(e) => setPreviousMarriage(e.target.value)}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2f4864]">
                      Are you both Catholic? *
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="bothCatholic"
                          value="Yes"
                          checked={bothCatholic === "Yes"}
                          onChange={(e) => setBothCatholic(e.target.value)}
                        />
                        Yes
                      </label>

                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="bothCatholic"
                          value="No"
                          checked={bothCatholic === "No"}
                          onChange={(e) => setBothCatholic(e.target.value)}
                        />
                        No
                      </label>
                    </div>

                    {bothCatholic === "No" && (
                      <div className="mt-4">
                        <label className="text-sm font-semibold text-[#2f4864]">
                          If not, please specify *
                        </label>
                        <input
                          required
                          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
                          placeholder="Please provide details"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2f4864]">
                      Are you willing to assume responsibility for the civil
                      notification and registration of your marriage? *
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="civilResponsibility"
                          value="Yes"
                          checked={civilResponsibility === "Yes"}
                          onChange={(e) =>
                            setCivilResponsibility(e.target.value)
                          }
                        />
                        Yes
                      </label>

                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-[#2f4864]">
                        <input
                          type="radio"
                          name="civilResponsibility"
                          value="No"
                          checked={civilResponsibility === "No"}
                          onChange={(e) =>
                            setCivilResponsibility(e.target.value)
                          }
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {error &&
                  (!previousMarriage || !bothCatholic || !civilResponsibility) && (
                    <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      {error}
                    </p>
                  )}
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Supporting Document Upload
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#425466]">
                  If you already have any relevant document, you may upload it
                  here. If not, the parish office can advise you after receiving
                  your enquiry.
                </p>

                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="mt-5 w-full rounded-2xl border border-black/10 px-4 py-3"
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
                    I understand this is a provisional booking enquiry and does
                    not confirm the church booking until the parish office
                    confirms it.
                  </label>

                  <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
                    <input type="checkbox" required className="mt-1" />
                    I consent to the parish contacting me about this marriage
                    enquiry.
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
                  Send Provisional Marriage Booking Enquiry
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