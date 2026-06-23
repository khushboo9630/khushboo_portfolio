import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Khushboo Upadhyay | AI & Full Stack Developer",
  description:
    "Portfolio of Khushboo Upadhyay - AI Enthusiast, Full Stack Developer, and MCA Aspirant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen text-white overflow-x-hidden">
        <AnimatedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}