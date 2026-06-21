import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Artemis Intelligence",
  description:
    "Let's work together. Whether you're an SME ready to put AI to work or a graduate ready to build it, we'd love to hear from you. Nicosia, Cyprus.",
};

export default function ContactPage() {
  return (
    <main className="pt-16 md:pt-24">
      <Contact />
    </main>
  );
}
