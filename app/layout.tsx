import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Mishra | Portfolio",
    template: "%s | Ayush Mishra",
  },
  description:
    "Explore the portfolio of Ayush Mishra, a skilled MERN Stack Developer and Digital Creator. View projects, skills, and contact information.",
  keywords: [
    "Ayush Mishra",
    "Portfolio",
    "MERN Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend Developer",
  ],
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
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
