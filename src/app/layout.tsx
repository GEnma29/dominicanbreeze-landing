import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "@/assets/img/dominican-breeze-logo-top.png";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Landing Page Dominican Breeze",
  description: "Form to apply for the Dominican Breeze",
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col bg-emerald-600 min-h-screen py-8 lg:py-4 justify-center items-center ">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
