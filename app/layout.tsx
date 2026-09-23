import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanielai.github.io"),
  title: "Nathaniel Blaiklock — AI Engineer & Full Stack Developer",
  description:
    "Canada-based AI engineer and senior full stack developer building intelligent products, reliable applications, and scalable systems.",
  openGraph: {
    title: "Nathaniel Blaiklock",
    description: "AI engineering. Full stack thinking. Products built to work.",
    url: "https://nathanielai.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
