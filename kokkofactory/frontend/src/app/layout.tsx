import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ShipmentProvider } from "../components/ShipmentContext";
import { LangProvider } from "../components/LangContext";

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
  title: "こっこふぁくとりー",
  description: "養鶏場の在庫・出荷管理アプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ShipmentProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ShipmentProvider>
      </body>
    </html>
  );
}
