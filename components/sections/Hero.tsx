"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* IMAGEN DE FONDO (Fija) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/familia-cancun.jpg" // <--- ¡AQUÍ ESTÁ EL CAMBIO! (Asegúrate que el nombre coincida)
          alt="Familia en letras de Cancún - Vic Díaz Photography"
          fill
          className="object-cover brightness-50" // brightness-50 oscurece la foto para que el texto blanco resalte
          priority
        />
      </div>

      {/* CONTENIDO (Traducido) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 tracking-wide"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-200 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://wa.me/529981371002" // Recuerda cambiar esto por el número real de Vic
            target="_blank"
            className="bg-brand-gold text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            {t.hero.cta_book}
          </a>
          
          <Link 
            href="#servicios"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            {t.hero.cta_view}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}