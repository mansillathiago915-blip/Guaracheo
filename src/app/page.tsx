"use client";

import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { ShinyButton } from "@/components/ui/shiny-button";
import { LocationMap } from "@/components/ui/expand-map";
import { FooterGuaracheo } from "@/components/ui/footer";
import { useState, useEffect } from "react";
import { Clock, Music, Star, Calendar, MessageCircle, Ticket } from "lucide-react";

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedNavFramer />

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0">
            <SpiralAnimation />
          </div>

          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-[2000ms] ease-out ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#b4ff00] tracking-widest drop-shadow-[0_0_40px_rgba(180,255,0,0.3)] px-4">
              GUARACHEOO
            </h1>
            <p className="mt-3 sm:mt-4 text-white/60 text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light px-4">
              Jueves de Guaracheoo
            </p>
            <p className="mt-2 text-white/40 text-xs sm:text-sm tracking-widest">
              Bailamos bajo las estrellas
            </p>

            <div className="mt-8 sm:mt-10">
              <a href="#entradas">
                <ShinyButton className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4">
                  Conseguí tu entrada
                </ShinyButton>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1a12] to-transparent z-10" />
        </section>

        {/* INFO / FEATURES SECTION */}
        <section id="info" className="relative py-16 sm:py-24 px-4 bg-[#0b1a12]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-[#b4ff00] tracking-wider mb-10 sm:mb-16">
              INFO
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#0f2618] border border-[#b4ff00]/10 hover:border-[#b4ff00]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.05)]">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#b4ff00] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold text-lg mb-2">Todos los Jueves</h3>
                <p className="text-white/40 text-sm">Tu cita semanal con la mejor noche de Mendoza</p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#0f2618] border border-[#b4ff00]/10 hover:border-[#b4ff00]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.05)]">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#b4ff00] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold text-lg mb-2">00:30 — 06:30</h3>
                <p className="text-white/40 text-sm">Hasta que salga el sol</p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#0f2618] border border-[#b4ff00]/10 hover:border-[#b4ff00]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.05)] sm:col-span-2 md:col-span-1">
                <Music className="w-8 h-8 sm:w-10 sm:h-10 text-[#b4ff00] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold text-lg mb-2">Guaracha · RKT · Cachengue</h3>
                <p className="text-white/40 text-sm">La mejor música para que no pares de bailar</p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION - ENTRADAS */}
        <section id="entradas" className="relative py-16 sm:py-24 px-4 bg-[#0b1a12]">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#b4ff00] mx-auto mb-4 sm:mb-6 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#b4ff00] tracking-wider mb-4">
              ENTRADAS & COMBOS
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Asegurá tu lugar en la mejor noche de Mendoza. Entradas anticipadas y combos especiales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
              <a
                href="https://www.passline.com/sitio/guaracheoo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#b4ff00] text-[#0b1a12] rounded-full font-bold text-base sm:text-lg hover:bg-[#c8ff40] transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.3)] hover:scale-105"
              >
                <Ticket className="w-5 h-5" />
                Comprar Entradas
              </a>

              <a
                href="https://wa.me/2616529661"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-[#b4ff00]/40 text-[#b4ff00] rounded-full font-bold text-base sm:text-lg hover:border-[#b4ff00] transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,255,0,0.1)] hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Lista Free / Cumpleaños
              </a>
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="relative py-16 sm:py-24 px-4 bg-[#0b1a12]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#b4ff00] tracking-wider mb-4">
              GALERÍA
            </h2>
            <p className="text-white/40 mb-12">
              Reviví los mejores momentos de cada noche
            </p>

            <a
              href="https://drive.google.com/drive/folders/1BKxH-eLkcyDXx1haqGgyTGN4AQuMGNVN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="text-base px-8 py-3">
                Ver todas las fotos
              </ShinyButton>
            </a>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-[#0f2618] border border-[#b4ff00]/5 flex items-center justify-center overflow-hidden hover:border-[#b4ff00]/20 transition-colors"
                >
                  <div className="text-[#b4ff00]/10 text-4xl font-bold">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="relative py-16 sm:py-24 px-4 bg-[#0b1a12]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-[#b4ff00] tracking-wider mb-4">
              UBICACIÓN
            </h2>
            <p className="text-white/40 text-center mb-12">
              Encontranos en Mendoza
            </p>

            <div className="flex flex-col items-center gap-8">
              <LocationMap
                location="Mendoza, Argentina"
                coordinates="GUARACHEOO — Jueves"
              />

              <a
                href="https://share.google/NCMm2ISRvRLiZdTaW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b4ff00]/60 hover:text-[#b4ff00] text-sm transition-colors underline underline-offset-4"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterGuaracheo />
    </>
  );
}
