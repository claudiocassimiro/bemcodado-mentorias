import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importing additional components
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mentorias de Programação - BemCodado",
  description:
    "A BemCodado é um canal do YouTube criado por Claudio Cassimiro, que visa facilitar o aprendizado de programação. Hoje estamos oferecendo mentorias de programação em diversas frentes voltadas a tecnologia, vem dá uma olhada no que temos a oferecer!",
  keywords: [
    "programação",
    "mentoria",
    "tecnologia",
    "aprendizado",
    "BemCodado",
  ],
  authors: [{ name: "Claudio Cassimiro" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bemcodado-mentorias.vercel.app/",
    siteName: "BemCodado",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BemCodado - Mentorias de Programação",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#37BBF7" }}
      >
        {/* <Header /> */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
