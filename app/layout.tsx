import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Recebba — Automação inteligente de contas a receber',
  description:
    'Organize contas a receber, automatize a régua de cobrança, centralize conversas e acompanhe o dinheiro voltando com o Recebba.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
