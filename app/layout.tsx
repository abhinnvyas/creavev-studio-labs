import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Creave Studio Labs",
  description: "Creave Studio Labs is an agency that builds digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased text-balance `}>
        {children}
      </body>
    </html>
  );
}
