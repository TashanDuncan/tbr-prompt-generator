import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Christina's TBR Prompt Generator",
  description: "A simple prompt generator for Christina's TBR list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} antialiased`}>{children}</body>
    </html>
  );
}
