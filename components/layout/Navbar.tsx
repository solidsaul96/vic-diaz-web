"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X, Instagram, Facebook, Globe } from "lucide-react";
import { AGENCY_INFO } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.experiences, href: "#servicios" },
    { name: t.nav.dresses, href: "#catalogo" },
    { name: t.nav.portfolio, href: "#portafolio" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
      {/* LOGO TIPO IMAGEN (Versión PNG Transparente) */}
        <Link 
            href="/" 
            className="relative h-16 w-32 md:h-20 md:w-40 flex-shrink-0 transition-opacity hover:opacity-80"
        >
          <Image
             src="/images/logo-vic.png" // <--- ¡AQUÍ ESTÁ EL CAMBIO! (.png)
             alt="Victor Díaz Photography"
             fill
             className="object-contain"
             priority
          />
        </Link>

        {/* MENÚ DE ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          
          {/* Botón de Idioma */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-bold border px-3 py-1 rounded-full text-xs transition-all hover:opacity-80 ${
               isScrolled 
                ? "border-brand-dark text-brand-dark" 
                : "border-white text-white"
            }`}
          >
            <Globe size={14} />
            <span>{language === "es" ? "EN" : "ES"}</span>
          </button>

          <div className={`h-4 w-px ${isScrolled ? "bg-gray-300" : "bg-white/30"}`} />
          
          <div className="flex gap-4">
            <a href={AGENCY_INFO.instagram} target="_blank" rel="noreferrer" className={`transition-colors hover:text-brand-gold ${isScrolled ? "text-gray-800" : "text-white"}`}>
                <Instagram size={20} />
            </a>
            <a href={AGENCY_INFO.facebook} target="_blank" rel="noreferrer" className={`transition-colors hover:text-brand-gold ${isScrolled ? "text-gray-800" : "text-white"}`}>
                <Facebook size={20} />
            </a>
          </div>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? "text-brand-dark" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-brand-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-6 animate-in slide-in-from-top-5">
          <button 
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="text-lg text-brand-dark font-serif border-b border-gray-100 pb-2 text-left flex items-center gap-3"
          >
            <Globe size={20} className="text-brand-gold" />
            <span className="font-bold">
                {language === "es" ? "Switch to English" : "Cambiar a Español"}
            </span>
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-800 font-serif border-b border-gray-100 pb-2 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-6 justify-center pt-4">
             <a href={AGENCY_INFO.instagram} className="text-gray-800 hover:text-brand-gold"><Instagram /></a>
             <a href={AGENCY_INFO.facebook} className="text-gray-800 hover:text-brand-gold"><Facebook /></a>
          </div>
        </div>
      )}
    </header>
  );
}