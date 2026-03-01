import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";

export default function ArcPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <SiteHeader variant="product" />

      {/* Hero */}
      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
              Engine
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              Powers StayOps
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              A JudcoTech system
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              ARC Intelligence
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              ARC Intelligence is the engine behind StayOps—turning guest messages and feedback into structured automation
              and owner-ready operational insight.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/stayops"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                View StayOps
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                View capabilities
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-200 px-3 py-1">Automation orchestration</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Feedback summarization</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Sentiment & themes</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Owner-ready outputs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-zinc-200 bg-zinc-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Capabilities</h2>
            <p className="mt-4 text-zinc-600">
              ARC converts operational signals (messages + feedback) into structured outputs (automation + insight).
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold">Automation orchestration</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Structured automation that supports predictable behavior and consistent guest workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold">Feedback summarization</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Themes and sentiment summaries designed for broker → owner reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold">Owner-ready outputs</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Clear, shareable summaries that help brokers prove value and spot issues early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-4 text-zinc-600">
              ARC takes inputs (guest communication + feedback) and produces structured outputs that power StayOps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { title: "1) Ingest", body: "Messages and survey feedback signals." },
              { title: "2) Normalize", body: "Clean structure applied to real-world inputs." },
              { title: "3) Summarize", body: "Themes and sentiment surfaced automatically." },
              { title: "4) Output", body: "Automation guidance + owner-ready insight." },
            ].map((step) => (
              <div key={step.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Start with StayOps</h2>
              <p className="mt-4 text-zinc-600">
                ARC Intelligence powers StayOps. If you want the product experience—guest automation, feedback capture,
                and operational insight—start there.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/stayops"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  View StayOps
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                >
                  Back to JudcoTech
                </Link>
              </div>

              <p className="mt-6 text-xs text-zinc-500">ARC Intelligence is a JudcoTech system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold">JudcoTech</p>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} JudcoTech</p>
        </div>
      </footer>
    </div>
  );
}