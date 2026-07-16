import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIVA_X_RAM CONSULTANCY | Car & Bike Buying, Selling & Exchange",
  description:
    "Your trusted partner for quality vehicles. Buy, sell, or exchange cars and bikes at the best price with complete satisfaction. Located at Trichy Road, Sulur, Coimbatore.",
  keywords: [
    "car consultancy Coimbatore",
    "bike consultancy Sulur",
    "used cars Coimbatore",
    "bike exchange Coimbatore",
    "SIVA X RAM consultancy",
    "vehicle buying selling Coimbatore",
  ],
  openGraph: {
    title: "SIVA_X_RAM CONSULTANCY",
    description: "Bike & Car Buying • Selling • Exchange — Sulur, Coimbatore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
