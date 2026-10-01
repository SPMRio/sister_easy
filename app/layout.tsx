import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SISTER - Sistema da Mulher",
  description: "Acesso integrado aos sistemas da Secretaria da Mulher",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
