import type { Metadata } from "next";
import { Inter, Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Artemis Intelligence · Tailored AI for businesses & future ready talent",
  description:
    "Artemis Intelligence builds enterprise grade AI agents and SaaS for SMEs, and trains the next generation of AI talent through the Artemis Academy. Technology with empathy, from Nicosia, Cyprus.",
  applicationName: "Artemis Intelligence",
  authors: [{ name: "Artemis Intelligence" }],
  keywords: [
    "AI",
    "AI Agents",
    "SaaS",
    "Artemis Academy",
    "Graduate Readiness Accelerator",
    "Mentorship",
    "Cyprus",
    "Artemis Intelligence",
  ],
  creator: "Artemis Intelligence",
  publisher: "Artemis Intelligence",
  robots: "index, follow",
  openGraph: {
    title: "Artemis Intelligence · Tailored AI for businesses & future ready talent",
    description:
      "Enterprise grade AI agents and SaaS for SMEs, plus the Artemis Academy training the next generation of AI talent.",
    siteName: "Artemis Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@artemisai",
    title: "Artemis Intelligence",
    description:
      "Tailored AI for businesses and future ready talent. Technology with empathy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
