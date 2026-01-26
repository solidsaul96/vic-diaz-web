"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

// 1. FILTROS
const COLORS = ["Todos", "Rojo", "Azul", "Amarillo", "Rosa", "Dorado", "Morado", "Verde", "Blanco"];

// 2. DEFINICIÓN MANUAL DE COLUMNAS (Para equilibrio perfecto)
// Estrategia: 1 Vertical gigante por columna + rellenar con horizontales.

const COLUMN_1 = [
  { id: 1, name: "Fuego Maya", color: "Rojo", image: "/images/vestido-rojo.jpg" }, // Vertical Gigante
  { id: 4, name: "Cielo", color: "Azul", image: "/images/vestido-azul-claro.jpg" },
  { id: 7, name: "Rosa Mexicano", color: "Rosa", image: "/images/vestido-rosa-fiusha.jpg" },
];

const COLUMN_2 = [
  { id: 5, name: "Amarillo Sol", color: "Amarillo", image: "/images/vestido-amarillo.jpg" },
  { id: 9, name: "Esmeralda", color: "Verde", image: "/images/vestido-verde-frente.jpg" }, // Vertical Gigante
  { id: 6, name: "Golden Hour", color: "Dorado", image: "/images/vestido-dorado.jpg" },
];

const COLUMN_3 = [
  { id: 8, name: "Orquídea", color: "Morado", image: "/images/vestido-morado.jpg" }, // Vertical Gigante
  { id: 2, name: "Pasión Escarlata", color: "Rojo", image: "/images/vestido-rojo-intenso.jpg" },
  { id: 3, name: "Azul Caribe", color: "Azul", image: "/images/vestido-azul.jpg" },
  { id: 10, name: "Perla", color: "Blanco", image: "/images/vestido-blanco.jpg" }, // Extra horizontal aquí para compensar
];

export default function DressCatalog() {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState("Todos");

  // Función auxiliar para filtrar una columna específica
  const filterColumn = (columnItems: typeof COLUMN_1) => {
    if (selectedColor === "Todos") return columnItems;
    return columnItems.filter((dress) => dress.color === selectedColor);
  };

  return (
    <section className="py-24 px-4 bg-white" id="catalogo">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
            {t.sections.catalog_sub}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2 mb-6">
            {t.sections.catalog_title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
             Flying dresses designed to fly with the ocean breeze.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedColor === color
                  ? "bg-brand-dark text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        {/* GRID CON COLUMNAS MANUALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Columna 1 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {filterColumn(COLUMN_1).map((dress) => (
                <DressCard key={dress.id} dress={dress} />
              ))}
            </AnimatePresence>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {filterColumn(COLUMN_2).map((dress) => (
                <DressCard key={dress.id} dress={dress} />
              ))}
            </AnimatePresence>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {filterColumn(COLUMN_3).map((dress) => (
                <DressCard key={dress.id} dress={dress} />
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

// Componente individual para limpiar el código principal
function DressCard({ dress }: { dress: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl overflow-hidden shadow-md group relative"
    >
      <Image 
        src={dress.image} 
        alt={dress.name}
        width={800}
        height={1000}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">
            {dress.color}
        </span>
        <h3 className="text-white font-serif text-xl mb-3">
            {dress.name}
        </h3>
        <a
          href={generateWhatsAppLink(`Hola, me interesa el vestido ${dress.name}`)}
          target="_blank"
          className="bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-full text-sm text-center hover:bg-white transition-colors"
        >
          Reservar
        </a>
      </div>
    </motion.div>
  );
}