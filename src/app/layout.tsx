import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papo de Venda - Band Bahia | Podcast com Silvana",
  description: "Divulgue sua marca no podcast Papo de Venda com Silvana, apresentadora da Band Bahia. Alcance centenas de milhares de espectadores e potencialize seu negócio.",
  openGraph: {
    title: "Papo de Venda - Band Bahia | Podcast com Silvana",
    description: "Divulgue sua marca no podcast Papo de Venda com Silvana, apresentadora da Band Bahia. Alcance centenas de milhares de espectadores.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
