import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "../../utils/cn";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul's Portfolio",
  description: "A demonstration of my current interests, skills, projects and more. Check it out.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
