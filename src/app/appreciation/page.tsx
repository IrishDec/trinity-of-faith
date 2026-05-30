import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function AppreciationPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[32px] bg-white px-6 py-16 text-center shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-20 lg:px-10">
            <h1 className="text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl lg:text-5xl">
              Appreciation
            </h1>

            <p className="mt-6 text-lg font-medium text-[#425466] sm:text-xl">
              Coming soon
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}