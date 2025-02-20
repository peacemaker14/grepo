import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

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
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Logo"
                width={120}
                height={25}
                priority
              />
            </header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
