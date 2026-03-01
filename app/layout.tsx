import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://judcotech.com"),
  title: {
    default: "JudcoTech",
    template: "%s · JudcoTech",
  },
  description:
    "JudcoTech builds secure, automation-driven systems that streamline communication, reduce manual workload, and keep teams in control.",
  applicationName: "JudcoTech",
  authors: [{ name: "JudcoTech" }],
  creator: "JudcoTech",
  publisher: "JudcoTech",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://judcotech.com",
    siteName: "JudcoTech",
    title: "JudcoTech",
    description: "Secure, automation-driven systems for operational clarity — built to scale.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "JudcoTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JudcoTech",
    description: "Secure, automation-driven systems for operational clarity — built to scale.",
    images: ["/og.png"],
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand lockup */}
        <Link href="/" className="inline-flex items-start gap-3 text-left no-underline">
          {/* jT mark (match your footer mark exactly — same asset) */}
          <span className="relative block h-10 w-16">
            <Image
              src="/brand/judcotech-jT-logo.png"
              alt="JudcoTech"
              fill
              priority
              className="object-contain"
              sizes="64px"
            />
          </span>

          {/* Wordmark under / beside — subtle, institutional */}
          <span className="mt-.5 block leading-none">
            <span className="block text-[11px] font-semibold tracking-[0.32em] text-zinc-900">
              JUDCOTECH
            </span>
            {/* Optional: remove this line if you want ultra-minimal */}
            <span className="mt-1 block text-[12px] text-zinc-600">
              Strategic platforms.
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-[13px] text-zinc-700 md:flex">
          <a href="#platforms" className="hover:text-zinc-950">
            Platforms
          </a>
          <a href="#approach" className="hover:text-zinc-950">
            Approach
          </a>
          <a href="#contact" className="hover:text-zinc-950">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-950 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}