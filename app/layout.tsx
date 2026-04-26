import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/src/components/ThemeProvider"; // Pastikan path import benar

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DOM Social Hub | The Scene",
  description: "Cultivating the scene. Coffee, Mocktails, and Main Courses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // SupressHydrationWarning wajib ditambahkan jika pakai next-themes
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} bg-theme-bg text-theme-text antialiased selection:bg-theme-accent selection:text-theme-bg font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
