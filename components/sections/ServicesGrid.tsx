"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const getServiceContent = (serviceId: string, field: 'title' | 'description' | 'cta') => {
    // @ts-ignore
    return t.services?.[serviceId]?.[field] || SERVICES.find(s => s.id === serviceId)?.[field];
  };

  return (
    <section className="py-24 px-4 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
            {t.sections.experiences_sub.split('.')[0]}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2">
            {t.sections.experiences_title}
          </h2>
        </div>

        {/* CAMBIO: Regresamos a GRID para tamaños iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
             const title = getServiceContent(service.id, 'title');
             const description = getServiceContent(service.id, 'description');
             const cta = getServiceContent(service.id, 'cta');

             return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-xl bg-white h-[500px] md:h-[600px]" // <--- ALTURA FIJA AQUÍ
            >
              {/* Imagen de Fondo (Llena todo el cuadro) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.image}
                  alt={title}
                  fill // Usamos fill para que llene el contenedor padre
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  // Nota: Si alguna foto corta caras, podemos agregar object-top aquí, 
                  // pero object-cover suele funcionar bien para servicios.
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors duration-300" />
              </div>

              {/* Contenido (Posicionado abajo) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white flex flex-col justify-end h-1/2">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {title}
                </h3>
                <p className="text-gray-200 mb-6 opacity-90 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-light leading-relaxed">
                  {description}
                </p>
                
                <div>
                    <a 
                        href={generateWhatsAppLink(`Hola, me interesa información sobre la experiencia: ${title}`)}
                        target="_blank"
                        className="inline-block bg-brand-gold text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-md"
                    >
                        {cta}
                    </a>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}