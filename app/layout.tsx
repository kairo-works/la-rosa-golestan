import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "./fonts/CormorantGaramond-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-arabic.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LA ROSA CANGGU — Beach-side restaurant & bar, Batu Bolong Beach",
  description:
    "La Rosa Canggu is a beach-side restaurant and bar on Batu Bolong beach in Canggu — tom yum seafood, nasi goreng, kung pao chicken and cocktails with your feet in the sand. Open every day 7am to midnight. Book a table on WhatsApp.",
  openGraph: {
    title: "LA ROSA CANGGU — Beach-side restaurant & bar, Batu Bolong Beach",
    description:
      "Tom yum seafood, nasi goreng, kung pao chicken and a Tequila Sunrise, with your feet in the sand on Batu Bolong beach. Open daily 7am – midnight.",
    images: ["/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${vazirmatn.variable} antialiased bg-black text-[#F5F1E8]`}
      >
        {children}
      </body>
    </html>
  );
}
