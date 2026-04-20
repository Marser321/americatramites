import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Preparador Profesional de Formularios Migratorios | CEO América Trámites',
  description: 'Construye un Negocio Rentable y Seguro como Preparador Profesional de Formularios Migratorios en Solo 6 Semanas.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="bg-[#020817] text-slate-50 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
