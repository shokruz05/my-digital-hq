import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Digital HQ",
  description: "Personal Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        // 👇 ВОТ ЭТА МАГИЯ. Мы красим тело сайта напрямую.
        style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }} 
      >
        {children}
      </body>
    </html>
  );
}