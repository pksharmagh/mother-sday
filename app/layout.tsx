import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Her Hands",
  description: "A cinematic AI-powered memory storytelling app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
