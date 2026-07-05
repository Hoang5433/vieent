import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vieent — Modern Analytics Platform",
    template: "%s | Vieent",
  },
  description:
    "A modern analytics platform for tracking and visualizing your data with real-time insights.",
  openGraph: {
    title: "Vieent — Modern Analytics Platform",
    description:
      "A modern analytics platform for tracking and visualizing your data with real-time insights.",
    type: "website",
    siteName: "Vieent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieent — Modern Analytics Platform",
    description:
      "A modern analytics platform for tracking and visualizing your data with real-time insights.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
