import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Factory } from "lucide-react";

import ThemeToggle from "@src/components/ThemeToggle";

import "./globals.css";
import styles from "./page.module.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRepo",
  description: "Discover GitHub Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <div className={styles.page}>
            <header className={styles.header}>
              <div className={styles.logo}>
                <Factory size={24} />
                <span className={styles.logoText}>GRepo</span>
              </div>
              <ThemeToggle />
            </header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
