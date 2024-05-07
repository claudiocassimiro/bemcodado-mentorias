import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentorias de Programação - BemCodado",
  description:
    "A BemCodado é um canal do YouTube criado por Claudio Cassimiro, que visa facilitar o aprendizado de programação. Hoje estamos oferecendo mentorias de programação em diversas frentes voltadas a tecnologia, vem dá uma olhada no que temos a oferecer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={(inter.className, `bg-sky-400`)}>{children}</body>
    </html>
  );
}
