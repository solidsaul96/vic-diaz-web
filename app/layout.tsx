import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext"; 
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

// CONFIGURACIÓN SEO (Lo que lee Google y WhatsApp/Facebook)
export const metadata: Metadata = {
  // IMPORTANTE: Cambia esta URL por el dominio .com cuando lo compren
  metadataBase: new URL('https://vic-diaz-web.vercel.app'), 
  title: "Vic Díaz | Flying Dress Cancún & Fotografía Aérea",
  description: "Reserva tu sesión de fotos Flying Dress en Cancún. Especialistas en fotografía con drone, maternidad, bodas y sesiones de cumpleaños en la playa.",
  keywords: ["Flying Dress Cancun", "Fotografo Cancun", "Sesion de fotos playa", "Drone Cancun", "Vic Diaz Photography"],
  openGraph: {
    title: "Vic Díaz | Experiencias Fotográficas en Cancún",
    description: "Vuela en el paraíso con nuestros vestidos de cola larga. Reserva tu sesión hoy.",
    url: "/", 
    siteName: "Vic Díaz Photography",
    images: [
      {
        url: "/images/vestido-rojo.jpg", // Esta foto será la portada en WhatsApp
        width: 1200,
        height: 630,
        alt: "Experiencia Flying Dress en Cancún - Vic Díaz Photography",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <LanguageProvider> 
          <Navbar />
          <main className="flex-grow">
              {children}
          </main>
          <Footer />
        </LanguageProvider>

        {/*  AQUÍ ESTÁ LA MAGIA DE GOOGLE ANALYTICS  */}
        <GoogleAnalytics gaId="G-2Q7KC2EYDD" />
        
      </body>
    </html>
  );
}