import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lux Canopy | Luxury Eco-Tourism & Safari",
  description:
    "Luxury eco-tourism and safari experiences with bespoke guides, elevated lodges, and carbon-conscious comfort across Sri Lanka.",
  metadataBase: new URL("https://luxcanopy.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#F7F3E9] text-[#2B2B2B] antialiased`}>
        <LanguageProvider>
          <CursorGlow />
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
