"use client";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FooterGuaracheo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-8 px-4 max-w-5xl mx-auto">
      <div className="relative bg-[#0f2618] rounded-3xl max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border border-[#b4ff00]/10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10 px-2 md:px-8 flex-1">
          <div className="flex flex-col items-start gap-2">
            <span className="text-2xl font-extrabold text-[#b4ff00] tracking-wider">
              GUARACHEOO
            </span>
            <p className="text-white/40 font-medium text-base w-full md:w-4/5">
              Todos tus jueves hasta que salga el sol. Bailamos bajo las estrellas.
            </p>
          </div>

          <div className="flex flex-col md:mx-4 md:flex-row gap-2 md:gap-20 items-start md:items-start">
            <div className="flex flex-col gap-1 md:gap-4">
              <h4 className="uppercase text-md text-[#b4ff00]/70 font-semibold">
                Links
              </h4>
              <div className="flex flex-wrap md:flex-col gap-2 text-sm items-start">
                <a
                  className="text-white/50 whitespace-nowrap font-medium hover:text-[#b4ff00] transition-colors"
                  href="https://www.passline.com/sitio/guaracheoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entradas / Combos
                </a>
                <a
                  className="text-white/50 whitespace-nowrap font-medium hover:text-[#b4ff00] transition-colors"
                  href="https://wa.me/2616529661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lista Free / Cumpleaños
                </a>
                <a
                  className="text-white/50 whitespace-nowrap font-medium hover:text-[#b4ff00] transition-colors"
                  href="https://drive.google.com/drive/folders/1BKxH-eLkcyDXx1haqGgyTGN4AQuMGNVN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fotos
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1 md:gap-4">
              <h4 className="uppercase whitespace-nowrap text-md text-[#b4ff00]/70 font-semibold">
                Info
              </h4>
              <div className="flex flex-wrap md:flex-col gap-2 text-sm items-start">
                <span className="text-white/50 whitespace-nowrap font-medium">
                  Jueves 00:30 — 06:30
                </span>
                <span className="text-white/50 whitespace-nowrap font-medium">
                  +18
                </span>
                <span className="text-white/50 whitespace-nowrap font-medium">
                  Mendoza, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/40">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start sm:items-center">
          <p className="whitespace-nowrap">
            ©{currentYear} GUARACHEOO. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.instagram.com/guaracheoo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Guaracheoo"
            className="hover:text-[#b4ff00] transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
