import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Del&Co",
  description: "Bâtiment,Fourniture,Architecture",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Bâtiment", "Architecture ", "Fourniture", "Maison","Achat de terrain abidjan"],
  authors: [
    { name: "Delon Jean-Philippe",
      url: "https://delon-portfolio.vercel.app/" },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
