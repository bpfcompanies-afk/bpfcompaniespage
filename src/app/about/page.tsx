"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Cpu, 
  Fingerprint, 
  Heart, 
  Lightbulb, 
  Shield, 
  ShieldCheck, 
  Smartphone, 
  Trophy, 
  Users, 
  Target, 
  ChartNoAxesCombinedIcon 
} from "lucide-react";

export default function AboutPage() {
  
  const team = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Tecnología (CTO)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sofía Martínez",
      role: "Líder de Diseño",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovación Constante",
      desc: "No nos conformamos. Siempre buscamos la mejor tecnología para cada problema. "
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Transparencia Total",
      desc: "Sin letras chiquitas. Sabrás exactamente qué hacemos y cuánto cuesta."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Trabajo en Equipo",
      desc: "Tu éxito es nuestro éxito. Nos integramos como una extensión de tu empresa."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Pasión por la Calidad",
      desc: "Entregamos código limpio, escalable y productos de los que nos sentimos orgullosos."
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "+5 Años de Experiencia",
      desc: "Trayectoria sólida en desarrollo de software. No improvisamos, sabemos cómo construir éxito."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Tecnología de Vanguardia",
      desc: "Dominamos el stack moderno: AWS, React, Go, Python y TypeScript para sistemas potentes."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: "Desarrollo 360°",
      desc: "Especialistas en todo el ecosistema digital: Páginas Web, Apps Móviles y Plataformas complejas."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-orange-500" />,
      title: "Soluciones a la Medida",
      desc: "Odiamos lo genérico. Creamos software adaptado 100% al ADN y necesidades de tu cliente."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-pink-500" />,
      title: "Innovación e IA",
      desc: "Implementamos Inteligencia Artificial y Business Intelligence para optimizar tu toma de decisiones."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: "Calidad Garantizada",
      desc: "Pruebas rigurosas, metodologías ágiles y monitoreo continuo. Seguridad y rendimiento primero."
    }
  ];

  return (
    <main className="relative min-h-screen text-gray-900 pt-24 pb-16 overflow-hidden">

      {/* --- FONDO FIJO (FIXED) --- */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-white dark:bg-gray-950 pointer-events-none">
        
        {/* 1. Gradiente más intenso (de gray-100 a teal-100) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-white to-teal-100/70 dark:from-gray-900 dark:via-gray-950 dark:to-teal-900/30"></div>

        {/* 2. Símbolos con colores más fuertes (Teal-400, Emerald-400, etc.) */}
        <div className="absolute top-20 left-1/3 text-teal-100 dark:text-teal-600/30 text-7xl font-mono font-bold opacity-40 blur-[2px] select-none">
          import
        </div>
        
        <div className="absolute bottom-1/3 right-10 text-emerald-100 dark:text-emerald-600/30 text-6xl font-mono font-bold opacity-40 blur-[1px] rotate-6 select-none">
          class
        </div>
        
        <div className="absolute top-10 right-10 text-gray-300 dark:text-gray-700/40 text-5xl font-mono font-bold opacity-60 select-none">
          this.
        </div>
        
        <div className="absolute bottom-10 left-10 text-slate-200 dark:text-slate-600/30 text-6xl font-mono font-bold opacity-50 blur-[1px] -rotate-3 select-none">
          return
        </div>

        
       
      </div>
      
      {/* --- CONTENIDO --- */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Creando el futuro digital, <br/>
            <span className="text-blue-600">una línea de código a la vez.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Somos un grupo de apasionados por la tecnología, obsesionados con ayudar a las empresas a escalar en la era digital.
          </p>
        </div>

        {/* FOTO */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Oficina moderna"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
              <p className="text-white text-2xl md:text-3xl font-medium max-w-2xl leading-tight">
                "Empezamos en 2019 con una laptop y un sueño. Hoy ayudamos a marcas líderes a transformar su presencia digital."
              </p>
            </div>
          </div>
        </div>

        {/* MISIÓN BANNER */}
        <section className="relative bg-blue-600 dark:bg-blue-900 py-24 mb-24 overflow-hidden shadow-xl transform -skew-y-1">
          <div className="skew-y-1">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
               <Target className="w-[500px] h-[500px] text-white" />
             </div>

             <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
               <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight flex items-center justify-center gap-3">
                 <ChartNoAxesCombinedIcon className="w-10 h-10 text-yellow-300" />
                 Nuestra Misión
               </h2>
               <p className="text-xl md:text-3xl leading-relaxed font-medium text-white text-balance mb-8">
                 "En BPF Companies, creemos en las personas, el futuro y el código. Nuestra misión es impulsar la transformación digital a través de soluciones tecnológicas innovadoras."
               </p>
               <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                 Desarrollamos software de alta calidad con <strong className="text-white font-bold">inteligencia artificial</strong> y <strong className="text-white font-bold">business intelligence</strong> para optimizar procesos y potenciar negocios. Combinamos el talento humano con tecnología de vanguardia para ayudar a las empresas a convertirse en líderes de su industria.
               </p>
             </div>
          </div>
        </section>

        {/* VALORES */}
        {/* Backdrop blur ayuda a integrar el fondo fijo */}
        <div className="py-20 mb-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nuestros Valores</h2>
              <p className="text-gray-600 dark:text-gray-400">Los pilares que sostienen cada decisión que tomamos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, index) => (
                <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-4 bg-gray-50 dark:bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{val.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}