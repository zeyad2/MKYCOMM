import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const coolvetica = localFont({
  src: [
    {
      path: "./fonts/coolvetica-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/coolvetica-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-coolvetica",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MKYCOMM - Marketing Communications Agency",
  description: "We are a dynamic and innovative marketing communications agency dedicated to crafting cutting-edge solutions for global brands. Aiming at making every client a market leader, with an indelible impact in the market.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${coolvetica.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
