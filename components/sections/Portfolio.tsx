"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react"; 
import { useLanguage } from "@/context/LanguageContext";

// 1. CATEGORÍAS
const CATEGORIES = ["Todos", "Flying Dress", "Boda & Parejas", "Familia", "Drone", "Celebraciones"];

// 2. LISTA CON TUS FOTOS REALES
const PORTFOLIO_ITEMS = [
  // --- BODA & PAREJAS ---
  { id: 1, category: "Boda & Parejas", src: "/images/propuesta-matrimonio.jpg", title: "She said Yes!" },
  { id: 2, category: "Boda & Parejas", src: "/images/foto-pareja-5.jpg", title: "Marry Me" },
  { id: 3, category: "Boda & Parejas", src: "/images/foto-pareja-3.jpg", title: "Atardecer Romántico" },
  { id: 4, category: "Boda & Parejas", src: "/images/foto-maternidad-2.jpg", title: "Dulce Espera" },

  // --- FAMILIA ---
  { id: 5, category: "Familia", src: "/images/familia-cancun.jpg", title: "Cancún Vibes" },
  { id: 6, category: "Familia", src: "/images/foto-familiar-1.jpg", title: "Alegría Familiar" },
  { id: 7, category: "Familia", src: "/images/foto-familiar-3.jpg", title: "Azul Coordinado" },

  // --- CELEBRACIONES ---
  { id: 8, category: "Celebraciones", src: "/images/foto-globo-cumpleanios-4.jpg", title: "Birthday Jump" },
  { id: 9, category: "Celebraciones", src: "/images/foto-globo-cumpleanios-2.jpg", title: "Fabulous 40" },
  { id: 10, category: "Celebraciones", src: "/images/globo-cumpleanios.jpg", title: "Fiesta en la Arena" },

  // --- DRONE ---
  { id: 11, category: "Drone", src: "/images/foto-drone.jpg", title: "Vista Grupal" },
  { id: 12, category: "Drone", src: "/images/foto-drone-1.jpg", title: "Texturas del Caribe" },
  { id: 13, category: "Drone", src: "/images/foto-drone-3.jpg", title: "Rocas y Mar" },

  // --- FLYING DRESS ---
  { id: 14, category: "Flying Dress", src: "/images/vestido-dorado.jpg", title: "Golden Hour" },
  { id: 15, category: "Flying Dress", src: "/images/vestido-rojo.jpg", title: "Lady in Red" },
  { id: 16, category: "Flying Dress", src: "/images/vestido-azul-claro.jpg", title: "Cielo Infinito" },
  { id: 17, category: "Flying Dress", src: "/images/vestido-amarillo.jpg", title: "Amarillo Sol" },
  { id: 18, category: "Flying Dress", src: "/images/vestido-rosa-fiusha.jpg", title: "Rosa Mexicano" },
  { id: 19, category: "Flying Dress", src: "/images/vestido-verde-frente.jpg", title: "Esmeralda" },
  { id: 20, category: "Flying Dress", src: "/images/vestido-morado.jpg", title: "Orquídea" },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const filteredItems = filter === "Todos" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section className="py-24 px-4 bg-white" id="portafolio">
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
            {t.nav.portfolio}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2 mb-8">
            {t.sections.portfolio_title}
          </h2>

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-brand-dark text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE FOTOS */}
        <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <ZoomIn className="text-white mb-2" size={24} />
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-lg md:text-xl">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX (VENTANA MODAL CORREGIDA) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-black/20 rounded-full"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                // --- CORRECCIÓN AQUÍ ---
                // Le damos h-[80vh] para que la caja tenga altura real y la foto pueda expandirse.
                className="relative w-full max-w-6xl h-[80vh] md:h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                 <Image
                    src={selectedImage}
                    alt="Vista previa"
                    fill
                    className="object-contain" // Esto ajusta la imagen sin cortarla
                    sizes="100vw"
                    priority
                 />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}