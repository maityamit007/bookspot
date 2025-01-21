import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";

const metadata: Metadata = {
  title: "BookSpot",
  description: "Lets Pre-Book your Spot in the Queue 🚀",
};

const inter = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
