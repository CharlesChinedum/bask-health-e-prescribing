import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/global.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bask Health",
  description: "E-Prescription and E-Consultation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>

      </body>
    </html>
  );
}
