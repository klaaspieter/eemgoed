import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eemgoed",
  description: "Dorpslandgoed Het Eemgoed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-sandy-beach">
      <head>
        <Analytics />
      </head>
      <body className={`${inter.className}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
