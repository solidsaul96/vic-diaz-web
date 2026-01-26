import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DressCatalog from "@/components/sections/DressCatalog";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
// Borramos el import de Footer de aquí porque ya está en el layout global

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> {/* NOTA: Si ves que el menú de arriba también sale doble, borra también esta línea */}
      
      {/* Sección 1: Portada */}
      <Hero />
      
      {/* Sección 2: Experiencias */}
      <ServicesGrid />
      
      {/* Sección 3: Catálogo */}
      <DressCatalog />
      
      {/* Sección 4: Portafolio */}
      <Portfolio />
      
      {/* Sección 5: Contacto */}
      <Contact />
      
      {/* ELIMINADO: <Footer /> (Ya lo pone el sistema automáticamente) */}
    </main>
  );
}