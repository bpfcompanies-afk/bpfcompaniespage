import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-5 pb-10 mt-24">
      
      {/* --- CURVA (OLA) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
        <svg
          // CAMBIO AQUÍ: Reduje la altura a h-[50px] (móvil) y md:h-[90px] (escritorio)
          className="relative block w-full h-[40px] md:h-[90px] text-black fill-current"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="max-w-7xl mx-auto px-4 md:pr-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm text-center md:text-left font-light">
          © 2026 BpfCompanies. Todos los derechos reservados.
        </p>

        <div className="flex gap-8 justify-center">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">
            Twitter
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">
            LinkedIn
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}