import type { Metadata } from "next";
import { Montserrat, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"]
});

const chakraPetch = Chakra_Petch({ 
  subsets: ["latin"], 
  variable: "--font-chakra-petch",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Novacy | Premium Wallpaper Installation in NYC",
  description: "Premium wallpaper installation serving New York City, Long Island, and Northern New Jersey. Precision, craftsmanship, and lasting results.",
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${chakraPetch.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
