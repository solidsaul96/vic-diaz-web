import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; // Importamos la librería oficial
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext"; // <--- 1. IMPORTAR
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  weight: ["300", "400", "700"], 
  subsets: ["latin"], 
  variable: "--font-lato",
  display: "swap",
});

// CONFIGURACIÓN SEO (Lo que lee Google)
export const metadata: Metadata = {
  title: "Vic Díaz | Flying Dress Cancún & Fotografía Aérea",
  description: "Reserva tu sesión de fotos Flying Dress en Cancún. Especialistas en fotografía con drone, maternidad, bodas y sesiones de cumpleaños en la playa.",
  keywords: ["Flying Dress Cancun", "Fotografo Cancun", "Sesion de fotos playa", "Drone Cancun", "Vic Diaz Photography"],
  openGraph: {
    title: "Vic Díaz | Experiencias Fotográficas en Cancún",
    description: "Vuela en el paraíso con nuestros vestidos de cola larga.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <LanguageProvider> {/* <--- 2. ENVOLVER TODO DENTRO DE ESTO */}
          <Navbar />
          <main className="flex-grow">
              {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}