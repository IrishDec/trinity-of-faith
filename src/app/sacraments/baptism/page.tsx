"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function BaptismRequestPage() {
const [chosenChurch, setChosenChurch] = useState("");
const [error, setError] = useState("");
const [isSending, setIsSending] = useState(false);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!chosenChurch) {
    setError("Please select your chosen church before sending.");
    return;
  }

  setError("");
  setIsSending(true);

  const formElement = event.currentTarget;
  const form = new FormData(formElement);
  form.set("chosenChurch", chosenChurch);

  try {
    const response = await fetch("/api/baptism-request", {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      alert("Sorry, the Baptism request could not be sent. Please try again.");
      return;
    }

    formElement.reset();
    setChosenChurch("");

    alert(
      "Thank you. Your Baptism request has been sent. If you requested a copy, please check your spam or junk folder if you do not see it."
    );
  } finally {
    setIsSending(false);
  }
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
              Baptism Request
            </h1>

            <p className="mt-4 leading-7 text-[#425466]">
              Please complete the Baptism request form below. A copy of the
              child’s birth certificate will be required before the Baptism can
              be registered.
            </p>

  <form onSubmit={handleSubmit} className="mt-8 space-y-8">
  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Child Details
    </h2>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Child’s surname
        </label>
        <input
          name="childSurname"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
          placeholder="Child’s surname"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Child’s Christian names
        </label>
        <input
          name="childChristianNames"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
          placeholder="Child’s Christian names"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Date of birth
        </label>
        <input
          name="dateOfBirth"
          type="date"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>
    </div>

    <div className="mt-5">
      <label className="text-sm font-semibold text-[#2f4864]">
        Address of parents
      </label>
      <textarea
        name="parentsAddress"
        required
        className="mt-2 min-h-28 w-full rounded-2xl border border-black/10 px-4 py-3"
        placeholder="Full address"
      />
    </div>
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Parent Details
    </h2>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s surname
        </label>
        <input
          name="fatherSurname"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s Christian name
        </label>
        <input
          name="fatherChristianName"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s religion
        </label>
        <input
          name="fatherReligion"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s email
        </label>
        <input
          name="fatherEmail"
          type="email"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s maiden name
        </label>
        <input
          name="motherMaidenName"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s Christian name
        </label>
        <input
          name="motherChristianName"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s religion
        </label>
        <input
          name="motherReligion"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s email
        </label>
        <input
          name="motherEmail"
          type="email"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Phone number
        </label>
        <input
          name="phone"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mobile number
        </label>
        <input
          name="mobile"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>
    </div>
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Godparent Details
    </h2>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Godfather’s name
        </label>
        <input
          name="godfatherName"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Godmother’s name
        </label>
        <input
          name="godmotherName"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>
    </div>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-black/10 p-4">
        <p className="text-sm font-semibold text-[#2f4864]">
          Godfather requirements
        </p>

        <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
          <input
            type="checkbox"
            name="godfatherOver16"
            className="mt-1"
          />
          Over 16 years old
        </label>

        <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
          <input
            type="checkbox"
            name="godfatherCatholicConfirmed"
            className="mt-1"
          />
          Baptised Catholic and confirmed
        </label>
      </div>

      <div className="rounded-2xl border border-black/10 p-4">
        <p className="text-sm font-semibold text-[#2f4864]">
          Godmother requirements
        </p>

        <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
          <input
            type="checkbox"
            name="godmotherOver16"
            className="mt-1"
          />
          Over 16 years old
        </label>

        <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
          <input
            type="checkbox"
            name="godmotherCatholicConfirmed"
            className="mt-1"
          />
          Baptised Catholic and confirmed
        </label>
      </div>
    </div>
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Choose Church
    </h2>

    <p className="mt-2 text-sm text-[#425466]">
      Please select the church you would like to send this Baptism request to.
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

    {error && (
      <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
        {error}
      </p>
    )}
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Birth Certificate
    </h2>

    <p className="mt-2 text-sm text-[#425466]">
      Please upload a photo or file copy of the child’s birth certificate.
    </p>

    <input
      type="file"
      name="birthCertificate"
      accept="image/*,.pdf"
      required
      className="mt-5 w-full rounded-2xl border border-black/10 px-4 py-3"
    />
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Consent
    </h2>

    <div className="mt-5 space-y-4">
      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="informationAccurate"
          required
          className="mt-1"
        />
        I confirm that the information provided is accurate.
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="baptismRegisterConsent"
          className="mt-1"
        />
        I understand that this information will be used to register this Baptism in the parish.
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="permanentRecordConsent"
          className="mt-1"
        />
        I understand that the information entered in the Baptism Register will be retained permanently.
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="contactConsent"
          required
          className="mt-1"
        />
        I consent to the parish contacting me about this Baptism request.
      </label>
    </div>
  </section>

  <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
    <h2 className="text-xl font-semibold text-[#2f4864]">
      Optional Parish Consent
    </h2>

    <div className="mt-5 space-y-4">
      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="newsletterConsent"
          className="mt-1"
        />
        I consent to my child’s name being included in the parish newsletter or website.
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="facebookConsent"
          className="mt-1"
        />
        I consent to my child’s name being included on the parish social media page.
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
        <input
          type="checkbox"
          name="futureEventsConsent"
          className="mt-1"
        />
        I consent to being contacted about future parish events or celebrations.
      </label>
    </div>
  </section>

  <div>
    {error && (
      <p className="mb-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
        {error}
      </p>
    )}

    <label className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-[#425466] ring-1 ring-black/10">
      <input
        type="checkbox"
        name="sendCopy"
        className="mt-1 h-4 w-4"
      />
      <span>
        Send me a copy of this Baptism request.
      </span>
    </label>

  <button
  type="submit"
  disabled={isSending}
  className="mt-4 w-full rounded-full bg-[#2f4864] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#24384f] disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
>
  {isSending ? "Sending..." : "Send Baptism Request"}
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