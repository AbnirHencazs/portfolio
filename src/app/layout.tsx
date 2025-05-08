import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "app/components/Navigation";
import { ThemeProvider } from "app/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Sanchez Izquierdo - Fullstack Web Developer Portfolio",
  description:
    "A modern portfolio website showcasing frontend and backend development skills and projects.",
  keywords: [
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "react",
    "next.js",
    "portfolio",
    "web development",
    "software engineer",
    "vue",
    "angular",
    "laravel",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
