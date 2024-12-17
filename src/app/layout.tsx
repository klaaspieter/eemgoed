import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eemgoed",
  description: "Dorpslandgoed Het Eemgoed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-sandy-beach">
      <head>
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Eemgoed" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
        <Analytics />
      </head>
      <body className={`${inter.className}`}>
        <Navigation />
        <main>{children}</main>
        <GoogleAnalytics gaId="G-ZC41313JZ3" />
      </body>
    </html>
  );
}
