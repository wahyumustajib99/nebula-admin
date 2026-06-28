import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebula Admin - Next.js Premium Dashboard",
  description: "Modern Admin Template built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" class="h-full dark">
      <body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans h-full overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}