import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function BaptismRequestPage() {
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

          <form className="mt-8 space-y-8">
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
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
          placeholder="Child’s surname"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Child’s Christian names
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
          placeholder="Child’s Christian names"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Date of birth
        </label>
        <input
          type="date"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Requested date of Baptism
        </label>
        <input
          type="date"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>
    </div>

    <div className="mt-5">
      <label className="text-sm font-semibold text-[#2f4864]">
        Address of parents
      </label>
      <textarea
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
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s Christian name
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s religion
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Father’s email
        </label>
        <input
          type="email"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s maiden name
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s Christian name
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s religion
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mother’s email
        </label>
        <input
          type="email"
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Phone number
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
      </div>

      <div>
        <label className="text-sm font-semibold text-[#2f4864]">
          Mobile number
        </label>
        <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
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
      <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
    </div>

    <div>
      <label className="text-sm font-semibold text-[#2f4864]">
        Godmother’s name
      </label>
      <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3" />
    </div>
  </div>

  <div className="mt-5 grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-black/10 p-4">
      <p className="text-sm font-semibold text-[#2f4864]">
        Godfather requirements
      </p>

      <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
        <input type="checkbox" className="mt-1" />
        Over 16 years old
      </label>

      <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
        <input type="checkbox" className="mt-1" />
        Baptised Catholic and confirmed
      </label>
    </div>

    <div className="rounded-2xl border border-black/10 p-4">
      <p className="text-sm font-semibold text-[#2f4864]">
        Godmother requirements
      </p>

      <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
        <input type="checkbox" className="mt-1" />
        Over 16 years old
      </label>

      <label className="mt-3 flex items-start gap-3 text-sm text-[#425466]">
        <input type="checkbox" className="mt-1" />
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
      <input type="radio" name="chosenChurch" />
      Clonskeagh
    </label>

    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]">
      <input type="radio" name="chosenChurch" />
      Kilmacud
    </label>

    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 p-4 text-sm font-semibold text-[#2f4864]">
      <input type="radio" name="chosenChurch" />
      Mount Merrion
    </label>
  </div>
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
      <input type="checkbox" className="mt-1" />
      I confirm that the information provided is accurate.
    </label>

    <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
      <input type="checkbox" className="mt-1" />
      I understand that this information will be used to register this Baptism in the parish.
    </label>

    <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
      <input type="checkbox" className="mt-1" />
      I understand that the information entered in the Baptism Register will be retained permanently.
    </label>

    <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
      <input type="checkbox" className="mt-1" />
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
      <input type="checkbox" className="mt-1" />
      I consent to my child’s name being included in the parish newsletter or website.
    </label>

    <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
      <input type="checkbox" className="mt-1" />
      I consent to my child’s name being included on the parish Facebook page.
    </label>

    <label className="flex items-start gap-3 text-sm leading-6 text-[#425466]">
      <input type="checkbox" className="mt-1" />
      I consent to being contacted about future parish events or celebrations.
    </label>
  </div>
</section>

<button
  type="submit"
  className="w-full rounded-full bg-[#2f4864] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
>
  Send Baptism Request
</button>
</form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}