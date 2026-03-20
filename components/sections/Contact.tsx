"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react"; // <--- AQUÍ QUITAMOS 'Mail'
import { useLanguage } from "@/context/LanguageContext";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { AGENCY_INFO } from "@/lib/constants";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="contacto">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
              {t.nav.contact}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">
              ¿Listo para volar? <br />
              <span className="text-gray-400">Creemos magia juntos.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
              Ya sea una sesión de maternidad, una propuesta sorpresa o la icónica experiencia Flying Dress, estamos listos para capturar tu momento en el paraíso.
            </p>

            <div className="flex flex-col gap-4">
               {/* Botón WhatsApp Principal */}
               <a 
                 href={generateWhatsAppLink("Hola Vic, me gustaría cotizar una sesión de fotos.")}
                 target="_blank"
                 className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all w-fit shadow-lg hover:shadow-brand-gold/20"
               >
                 <MessageCircle size={24} />
                 Reservar vía WhatsApp
               </a>
               
               {/* --- AQUÍ ESTABA EL ÍCONO, YA FUE ELIMINADO --- */}

            </div>
          </motion.div>

          {/* Columna Derecha: Tarjeta de Información */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-serif mb-6">Información de Estudio</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-400">{AGENCY_INFO.location}</p>
                  <p className="text-xs text-gray-500 mt-1">Disponibles para viajar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Instagram className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Síguenos</h4>
                  <p className="text-gray-400 mb-2">Mira nuestro trabajo más reciente.</p>
                  
                  {/* Links a Redes Sociales */}
                  <div className="flex gap-4">
                    <a href={AGENCY_INFO.instagram} target="_blank" className="text-brand-gold hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                       Instagram
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href={AGENCY_INFO.facebook} target="_blank" className="text-brand-gold hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                       Facebook
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <hr className="border-white/10 my-8" />

            <p className="text-center text-gray-400 text-sm italic">
              "La fotografía es la belleza de la vida capturada."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}