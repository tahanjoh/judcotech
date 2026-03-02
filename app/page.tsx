"use client";

import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import Image from "next/image";

const APP_BASE =
  process.env.NEXT_PUBLIC_APP_BASE_URL?.replace(/\/+$/, "") ||
  "https://app.judcotech.com";

const BROKER_LOGIN_URL = `${APP_BASE}/login`;

export default function Home() {
  function scrollToPlatforms() {
    document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" });
  }

  // TODO: Replace with your deployed cape-may-app URL (Vercel prod)

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 flex flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          {/* Base background (STATIC) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero/judcotech_hero.png')" }}
          />

          {/* Water-only movement illusion (REALISTIC: dark troughs + light highlights + sheen) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Water starts ~1/2 down */}
            <div className="absolute inset-x-0 bottom-0 top-[50%] overflow-hidden">
              {/* 45° shoreline feather + vertical feather (prevents spill onto beach) */}
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: `
                    linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%),
                    linear-gradient(135deg, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 78%)
                  `,
                  WebkitMaskComposite: "destination-in",
                  maskImage: `
                    linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%),
                    linear-gradient(135deg, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 78%)
                  `,
                }}
              >
                {/* DARK troughs (adds depth) */}
                <div
                  className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, rgba(0,0,0,0.26) 0px, rgba(0,0,0,0.0) 18px, rgba(0,0,0,0.22) 36px)",
                    backgroundSize: "240px 240px",
                    filter: "blur(0.6px)",
                    animation: "waterFlow 12s linear infinite",
                    willChange: "background-position",
                  }}
                />

                {/* LIGHT highlights (wave crests) */}
                <div
                  className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.0) 20px, rgba(255,255,255,0.16) 40px)",
                    backgroundSize: "260px 260px",
                    filter: "blur(0.9px)",
                    animation: "waterFlow2 16s linear infinite",
                    willChange: "background-position",
                  }}
                />

                {/* SHEEN (broad moving specular) */}
                <div
                  className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(60% 42% at 30% 70%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
                    animation: "sheenFlow 22s linear infinite",
                    willChange: "transform",
                  }}
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            /* One-direction flow (left -> right) */
            @keyframes waterFlow {
              0% {
                background-position: 0px 0px;
              }
              100% {
                background-position: 320px 60px;
              }
            }

            /* Slightly different speed/offset to avoid “pattern” look */
            @keyframes waterFlow2 {
              0% {
                background-position: 40px 10px;
              }
              100% {
                background-position: 360px 70px;
              }
            }

            /* Broad specular drift (also left -> right only) */
            @keyframes sheenFlow {
              0% {
                transform: translate3d(0px, 0px, 0);
              }
              100% {
                transform: translate3d(46px, 0px, 0);
              }
            }
          `}</style>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-[#0b1623]/45" />

          {/* Content */}
          <div className="relative px-6 pb-24 pt-28 sm:pt-32">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-tight leading-[1.05] text-white sm:text-6xl">
                  StayOps — automated guest communication, feedback, and operational insight.
                </h1>

                <p className="mt-6 text-lg leading-8 text-white/80">
                  Built for professional vacation rental brokers. StayOps streamlines the full guest lifecycle—
                  automated messaging from check-in to checkout, feedback capture, and owner-ready insights—
                  <span className="font-medium text-white"> powered by ARC Intelligence</span>.
                </p>

                <div className="mt-10 max-w-xl rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-medium text-white/70">Product</p>
                  <p className="mt-1 text-sm font-medium text-white">StayOps</p>
                  <p className="mt-1 text-xs text-white/70">Powered by ARC Intelligence • A JudcoTech platform</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={scrollToPlatforms}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-white/90"
                  >
                    View StayOps
                  </button>

                  <a
                    href={BROKER_LOGIN_URL}
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15"
                  >
                    Broker Login
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    Broker-branded experience
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    Automated guest lifecycle
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    Feedback → owner insight
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Model */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Platform model
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                JudcoTech builds operational platforms that streamline real-world workflows with measured automation.
                StayOps is our active product platform for vacation rental brokers—designed to run quietly in the
                background while broker brands remain front and center.
              </p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" className="border-t border-zinc-200 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Product platform
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  StayOps is the broker platform. ARC Intelligence is the engine that powers automation and insight.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={BROKER_LOGIN_URL}
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Broker Login
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Request demo
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* StayOps */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-zinc-500">Active product</p>

                    {/* Title + logo */}
                    <div className="mt-2 flex items-center gap-3">
                      <div className="relative h-8 w-8 shrink-0">
                        <Image
                          src="/logo/stayops-icon.png"
                          alt="StayOps"
                          fill
                          className="object-contain opacity-90"
                          sizes="32px"
                          priority={false}
                        />
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight">StayOps</h3>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      Automated guest communication, feedback, and operational insight for
                      professional vacation rental brokers. Built to streamline the guest
                      lifecycle while keeping broker branding front and center.
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>
                          Automated check-in → mid-stay → trash/recycling → checkout
                          communications
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>Feedback engine with owner-ready summaries</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>Delivery logs + operational visibility</span>
                      </div>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                    Active
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/products/stayops"
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    View StayOps
                  </Link>
                  <a
                    href={BROKER_LOGIN_URL}
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                  >
                    Broker Login
                  </a>
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  Powered by ARC Intelligence • A JudcoTech platform
                </p>
              </div>

              {/* ARC Intelligence */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-zinc-500">
                      Engine
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      ARC Intelligence
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      The intelligence layer behind StayOps—turning guest messages and feedback into structured
                      automation and actionable insight.
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>Automated messaging orchestration + timing discipline</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>Feedback summarization, sentiment, and themes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                        <span>Owner-ready reporting outputs</span>
                      </div>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                    Active
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    href="/products/arc"
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                  >
                    View ARC Intelligence
                  </Link>
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  ARC Intelligence powers StayOps (and future JudcoTech platforms).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="border-t border-zinc-200 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Operating principles
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Systems designed for real operations — structured, observable, and durable over time.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-semibold">Clarity</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Structured inputs and visible outputs — designed for control and accountability.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-semibold">Durability</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Built to perform reliably under real constraints, across long operating cycles.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-semibold">Measured automation</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Automation deployed with discipline: predictable behavior, safe defaults, and observability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-200 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-zinc-200 bg-white p-10">
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Inquiries
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  For StayOps demos, partnerships, or private previews, contact:
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:judcotech@gmail.com"
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    judcotech@gmail.com
                  </a>

                  <a
                    href={BROKER_LOGIN_URL}
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                  >
                    Broker Login
                  </a>
                </div>

                <p className="mt-6 text-xs text-zinc-500">
                  StayOps is a JudcoTech platform powered by ARC Intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}