import type { Metadata } from "next";
import "./globals.css";
import WhatsappFloat from "@/components/layout/WhatsappFloat";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chatbot/ChatBot";

export const metadata = {
  title: {
    default: "Aspire Tuition Centre",
    template: "%s | Aspire Tuition Centre",
  },

  description:
    "Aspire Tuition Centre provides smart learning, science practicals, coding exposure and academic excellence.",

  keywords: [
    "tuition centre kerala",
    "coaching centre",
    "science tuition",
    "best tuition centre",
    "academic coaching",
    "Aspire tuition centre",
  ],

  openGraph: {
    title: "Aspire Tuition Centre",
    description:
      "Structured learning and future-ready education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <ChatBot />
        <WhatsappFloat />
        <Footer />
      </body>
    </html>
  );
}