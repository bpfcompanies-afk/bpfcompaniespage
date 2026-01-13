"use client"; // <--- 1. IMPORTANTE: Esto permite usar hooks en el navegador

import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- 2. Importamos el hook
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Asegúrate de tener iconos
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Servicios" },
    { href: "/about", label: "Nosotros" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
          <img src="/g7.svg" alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 
                  ${
                    pathname === route.href 
                      ? "text-blue-600 font-bold" // <--- SI ES LA PÁGINA ACTUAL: AZUL
                      : "text-gray-600 dark:text-gray-300" // <--- SI NO: GRIS
                  }
                `}
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Botón CTA (Llamada a la acción) */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/contact">Contactanos</Link>
            </Button>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800">
          <div className="flex flex-col p-4 gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className={`text-base font-medium py-2
                  ${
                    pathname === route.href 
                      ? "text-blue-600" 
                      : "text-gray-600 dark:text-gray-300"
                  }
                `}
              >
                {route.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
               <Link href="/contact">Empezar Ahora</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}