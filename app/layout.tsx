import type { Metadata } from "next";
import { Montserrat, Josefin_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MKYCOMM - Marketing Communications Agency",
  description: "We are a dynamic and innovative marketing communications agency dedicated to crafting cutting-edge solutions for global brands. Aiming at making every client a market leader, with an indelible impact in the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${josefinSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
