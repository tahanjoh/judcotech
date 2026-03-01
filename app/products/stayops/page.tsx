import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";

export default function StayOpsPage() {
  /**
   * Recommended:
   * Add NEXT_PUBLIC_STAYOPS_APP_URL to your judcotech-site env vars (Vercel Project Settings -> Environment Variables)
   * Example value: https://app.judcotech.com/login
   *
   * Then Broker Login becomes `${NEXT_PUBLIC_STAYOPS_APP_URL}/broker`
   */
  const BASE_APP_URL =
    process.env.NEXT_PUBLIC_STAYOPS_APP_URL?.replace(/\/+$/, "") || "";

  // Fallback if env var not set (keeps page functional locally)
  const STAYOPS_APP_URL = BASE_APP_URL
    ? `${BASE_APP_URL}/broker`
    : "https://app.judcotech.com/login";

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <SiteHeader variant="product" />

      {/* Hero */}
      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: Copy */}
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
              Product
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              A JudcoTech platform
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              Powered by ARC Intelligence
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              StayOps
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Automated guest communication, feedback, and operational insight for
              professional vacation rental brokers. Streamline the guest lifecycle—from
              check-in to checkout—while keeping broker branding front and center.
            </p>

            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Broker brand stays primary
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                StayOps can appear as “Powered by StayOps” (subtle) or be fully
                white-labeled depending on your preference.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@judcotech.com?subject=StayOps%20Demo%20Request"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Request a demo
              </a>

              <a
                href={STAYOPS_APP_URL}
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Broker Login
              </a>

              <a
                href="#pillars"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                View pillars
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                Automated guest lifecycle
              </span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                Feedback engine
              </span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                Owner-ready insights
              </span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                Delivery logs & controls
              </span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                Broker-branded experience
              </span>
            </div>
          </div>

          {/* Right: Minimal product preview (keeps SaaS tone, no lifestyle hero) */}
          <div className="md:pt-10">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">StayOps Dashboard</div>
                <div className="text-xs text-zinc-600">Messaging + feedback</div>
              </div>

              <div className="mt-4 grid gap-3">
                <PreviewCard title="Today’s Automations" subtitle="4 scheduled • 0 duplicates">
                  <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                    <li className="flex items-center justify-between">
                      <span>Check-in instructions</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs text-zinc-700 ring-1 ring-zinc-200">
                        2:00 PM
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Trash reminder</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs text-zinc-700 ring-1 ring-zinc-200">
                        6:30 PM
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Mid-stay info</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs text-zinc-700 ring-1 ring-zinc-200">
                        Tomorrow
                      </span>
                    </li>
                  </ul>
                </PreviewCard>

                <PreviewCard title="Guest Feedback" subtitle="Owner-ready summaries">
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <MiniStat label="Check-in" value="4.7/5" />
                    <MiniStat label="Cleanliness" value="4.6/5" />
                    <MiniStat label="Accommodations" value="4.5/5" />
                    <MiniStat label="Overall" value="4.6/5" />
                  </div>

                  <div className="mt-3 rounded-xl border border-zinc-200 bg-white p-3">
                    <div className="text-xs font-semibold text-zinc-900">ARC Summary</div>
                    <div className="mt-1 text-xs leading-relaxed text-zinc-700">
                      Guests praised the smooth check-in and cleanliness. One recurring suggestion:
                      clearer trash instructions and improved outdoor lighting.
                    </div>
                  </div>
                </PreviewCard>

                <PreviewCard title="Delivery Log" subtitle="Auditable + dedupe-safe">
                  <div className="mt-2 space-y-2 text-xs text-zinc-700">
                    <LogRow label="Check-in instructions" status="Sent" />
                    <LogRow label="Trash reminder" status="Scheduled" />
                    <LogRow label="Checkout instructions" status="Queued" />
                  </div>
                </PreviewCard>
              </div>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              Preview only. Your dashboard reflects your broker branding and property schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        id="pillars"
        className="border-t border-zinc-200 bg-zinc-50 px-6 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">StayOps pillars</h2>
            <p className="mt-4 text-zinc-600">
              StayOps runs the guest lifecycle end-to-end: it executes communication
              reliably, collects feedback, and turns the results into operational insight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Pillar
              title="Automated Communication"
              body="Check-in, mid-stay, trash/recycling, and checkout messaging—automated with timing discipline."
            />
            <Pillar
              title="Feedback Engine"
              body="Simple guest surveys capture ratings and comments so you can consistently collect the signals owners care about."
            />
            <Pillar
              title="Operational Insight"
              body="Owner-ready summaries and trend visibility—powered by ARC Intelligence—so brokers can prove value, not just promise it."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-4 text-zinc-600">
              Configure once per property. StayOps automates communications, collects feedback, and generates owner-ready insight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { title: "1) Configure", body: "Property details, schedule, and branded templates set once." },
              { title: "2) Automate", body: "Guest lifecycle messages run automatically with safeguards." },
              { title: "3) Capture", body: "Guests submit feedback through a simple survey flow." },
              { title: "4) Summarize", body: "ARC produces themes, sentiment, and owner-ready insight." },
            ].map((step) => (
              <div key={step.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/products/arc"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Learn about ARC Intelligence →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">See StayOps in action</h2>
              <p className="mt-4 text-zinc-600">
                StayOps reduces manual effort, improves consistency, and produces owner-ready insights—without competing with broker branding.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@judcotech.com?subject=StayOps%20Demo%20Request"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Request a demo
                </a>

                <a
                  href={STAYOPS_APP_URL}
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                >
                  Broker Login
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                >
                  Back to JudcoTech
                </Link>
              </div>

              <p className="mt-6 text-xs text-zinc-500">
                StayOps is a JudcoTech platform powered by ARC Intelligence.
              </p>
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

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{body}</p>
    </div>
  );
}

function PreviewCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-zinc-600">{subtitle}</div>
      </div>
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
      <div className="text-xs text-zinc-600">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function LogRow({
  label,
  status,
}: {
  label: string;
  status: "Sent" | "Scheduled" | "Queued";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
      <div className="text-xs text-zinc-800">{label}</div>
      <div className="rounded-full bg-white px-2 py-0.5 text-[11px] text-zinc-700 ring-1 ring-zinc-200">
        {status}
      </div>
    </div>
  );
}