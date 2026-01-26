"use client";

import { Instagram, Facebook, Phone } from "lucide-react"; // Quitamos 'Mail' de aquí
import { AGENCY_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Logo y Eslogan */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Vic Díaz Photography</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Capturando la magia del Caribe Mexicano. Especialistas en Flying Dress, bodas y momentos inolvidables.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={AGENCY_INFO.instagram} target="_blank" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href={AGENCY_INFO.facebook} target="_blank" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-6">
              Experiencias
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto (SIN EMAIL) */}
          <div>
            <h4 className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`https://wa.me/${AGENCY_INFO.phone}`} 
                  target="_blank"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone size={18} className="text-brand-gold group-hover:scale-110 transition-transform" />
                  <span>+{AGENCY_INFO.phone}</span>
                </a>
              </li>
              
              {/* AQUÍ ELIMINAMOS EL BLOQUE DEL CORREO */}

              <li className="text-gray-500 text-sm pt-2">
                {AGENCY_INFO.location}
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior de Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {currentYear} Vic Díaz Photography. Todos los derechos reservados.
          </p>
          <p>
            Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}