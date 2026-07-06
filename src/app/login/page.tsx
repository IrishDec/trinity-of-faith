import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LoginForm from "@/components/admin/LoginForm";

export default function LoginPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f4864]/70">
              Private Access
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864] sm:text-5xl">
              Staff Login
            </h1>

            <p className="mt-5 text-base leading-7 text-[#425466] sm:text-lg">
              This area is for authorised parish staff only.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <LoginForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}