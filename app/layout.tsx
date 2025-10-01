import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tubarrio.pe - Tu Negocio en el Barrio Digital | Propuesta Comercial',
  description: 'Deja de pagar 25-30% a Rappi y PedidosYa. Ten TU propia tienda online por menos de S/100 al mes. Sin comisiones por venta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
