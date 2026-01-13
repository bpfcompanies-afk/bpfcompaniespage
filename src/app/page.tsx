"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Componentes UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Iconos
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Bot, 
  Users, 
  Lightbulb, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export default function Home() {
  
  // --- LÓGICA DEL CARRUSEL ---
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; 
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { current } = scrollRef;
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        
        if (current.scrollLeft >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 3000); // Velocidad normal de espera

    return () => clearInterval(autoScroll); 
  }, [isPaused]);


  // --- DATOS ---
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Fábrica de Software",
      desc: "Sistemas robustos y escalables a medida. Backend y Frontend de alto nivel."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Constructor de Ideas",
      desc: "Transformamos conceptos abstractos en MVPs reales y estrategias ganadoras."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Desarrollo Móvil",
      desc: "Apps nativas e híbridas (iOS/Android) con experiencia de usuario fluida."
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      title: "Cloud & DevOps",
      desc: "Arquitectura en la nube (AWS/Azure) y automatización de despliegues."
    },
    {
      icon: <Bot className="w-8 h-8 text-pink-600" />,
      title: "Inteligencia Artificial",
      desc: "Chatbots, ML y automatización inteligente para optimizar tu negocio."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Staff Augmentation",
      desc: "Talento senior certificado para potenciar tu equipo interno bajo demanda."
    }
  ];

  const techStack = [
    { name: "React", logo: "https://cdn.simpleicons.org/react/000000" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/000000" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/000000" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/000000" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/000000" },
    { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/000000" },
    { name: "Go", logo: "https://cdn.simpleicons.org/go/000000" },
    { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/000000" },
    { name: "Android", logo: "https://cdn.simpleicons.org/android/000000" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/000000" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/000000" },
  ];

  const benefits = [
    "Equipo certificado en tecnologías modernas.",
    "Metodología ágil: entregas cada 2 semanas.",
    "Soporte post-lanzamiento incluido.",
  ];

  return (
    // CAMBIO 1: Quitamos bg-white de aquí y lo dejamos transparente
    <main className="min-h-screen relative text-gray-900 dark:text-gray-100">

      {/* --- FONDO MEJORADO: ONDA + LLUVIA DE SÍMBOLOS --- */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 overflow-hidden">
        
        {/* 1. GRADIENTE DE FONDO */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900"></div>

        {/* 2. SÍMBOLOS FLOTANTES (Nube de código) */}
        
        {/* -- NIVEL 1: GRANDES Y BORROSOS (Lejanos o Muy Cercanos) -- */}
        <div className="absolute top-[15%] left-[5%] text-blue-200 dark:text-blue-900/40 text-8xl font-mono font-bold opacity-20 blur-[3px] -rotate-12">
          &lt;/&gt;
        </div>
        <div className="absolute top-[40%] right-[5%] text-cyan-100 dark:text-cyan-900/30 text-9xl font-mono font-bold opacity-30 blur-[5px] rotate-12">
          &#123; &#125;
        </div>
        <div className="absolute bottom-[10%] left-[20%] text-indigo-100 dark:text-indigo-900/30 text-[10rem] font-mono font-bold opacity-20 blur-[6px] -rotate-6">
          [ ]
        </div>

        {/* -- NIVEL 2: MEDIANOS Y MÁS NÍTIDOS (Enfoque medio) -- */}
        <div className="absolute top-[20%] right-[25%] text-purple-200 dark:text-purple-900/50 text-6xl font-mono font-bold opacity-40 blur-[1px] rotate-45">
          !=
        </div>
        <div className="absolute bottom-[30%] right-[15%] text-blue-200 dark:text-blue-900/50 text-7xl font-mono font-bold opacity-40 blur-[2px] -rotate-12">
          =&gt;
        </div>
        <div className="absolute top-[10%] left-[30%] text-gray-200 dark:text-gray-800 text-5xl font-mono font-bold opacity-50 blur-[1px]">
          //
        </div>
        <div className="absolute bottom-[40%] left-[5%] text-emerald-100 dark:text-emerald-900/40 text-6xl font-mono font-bold opacity-40 blur-[2px] rotate-90">
          &amp;&amp;
        </div>

        {/* -- NIVEL 3: PEQUEÑOS DETALLES (Relleno) -- */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 text-pink-100 dark:text-pink-900/30 text-4xl font-mono font-bold opacity-60 blur-[1px] animate-pulse">
          *
        </div>
        <div className="absolute top-[80%] right-[35%] text-orange-100 dark:text-orange-900/30 text-5xl font-mono font-bold opacity-40 blur-[2px] -rotate-45">
          $
        </div>
        <div className="absolute top-[30%] left-[10%] text-sky-100 dark:text-sky-900/40 text-4xl font-mono font-bold opacity-50 blur-[0px]">
          ;
        </div>
        <div className="absolute bottom-[15%] right-[50%] text-slate-200 dark:text-slate-800 text-3xl font-mono font-bold opacity-50 blur-[1px]">
          ()
        </div>


        {/* 3. LA ONDA SUAVE (SINE WAVE) */}
        <div className="absolute bottom-0 left-0 w-full opacity-60 dark:opacity-40 pointer-events-none">
           <svg 
             className="w-full h-[300px] md:h-[500px]" 
             viewBox="0 0 1440 320" 
             preserveAspectRatio="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <defs>
               <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3B82F6" />
                 <stop offset="50%" stopColor="#06B6D4" />
                 <stop offset="100%" stopColor="#3B82F6" />
               </linearGradient>
             </defs>
             
             <style>
               {`
                 @keyframes waveMove {
                   0% { transform: scaleY(1); }
                   50% { transform: scaleY(1.05); }
                   100% { transform: scaleY(1); }
                 }
                 .wave-path {
                   animation: waveMove 8s ease-in-out infinite;
                   transform-origin: bottom;
                 }
               `}
             </style>

             <path 
               className="wave-path"
               fill="none" 
               stroke="url(#gradientWave)" 
               strokeWidth="4"
               d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128"
             ></path>
             <path 
               className="wave-path"
               fill="url(#gradientWave)" 
               fillOpacity="0.05"
               d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
             ></path>
           </svg>
        </div>

      </div>

      {/* ESTILOS ANIMACIÓN */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll-infinite {
          animation: infinite-scroll 80s linear infinite; /* Velocidad ajustada a 80s */
        }
      `}} />

      {/* =========================================
          SECCIÓN 1: HERO
         ========================================= */}
      {/* CAMBIO 3: bg-transparent en lugar de bg-white */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
        
        {/* Manchas de color de fondo del Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-400/10 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible para nuevos clientes
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 text-balance">
            Impulsa tu negocio con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Tecnología del Futuro
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creamos soluciones digitales que transforman visitantes en clientes fieles. 
            Diseño estratégico, desarrollo rápido y resultados medibles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25" asChild>
               <Link href="#contacto">Agendar Consultoría Gratis</Link>
            </Button>
            
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full bg-white/60 backdrop-blur-sm" asChild>
                <Link href="/services">
                  Ver Todos los Servicios
                </Link>
            </Button>
          </div>

          {/* --- STACK TECNOLÓGICO --- */}
          <div className="mt-20 pt-10 border-t border-gray-200/50 dark:border-gray-800">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
              Stack Tecnológico Potente
            </p>
            
            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex w-max">
                <ul className="flex items-center gap-12 sm:gap-24 animate-scroll-infinite pl-12 sm:pl-24">
                  {techStack.map((tech, index) => (
                    <li key={`original-${index}`} className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="h-8 w-auto md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        title={tech.name}
                      />
                    </li>
                  ))}
                </ul>
                <ul className="flex items-center gap-12 sm:gap-24 animate-scroll-infinite pl-12 sm:pl-24" aria-hidden="true">
                  {techStack.map((tech, index) => (
                    <li key={`duplicate-${index}`} className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="h-8 w-auto md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        title={tech.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECCIÓN 2: SERVICIOS
         ========================================= */}
      {/* CAMBIO 4: bg-transparent o un blanco muy sutil con transparencia */}
      <section className="py-24 relative overflow-hidden">
        {/* Fondo sutil para separar secciones, pero que deja ver la grid */}
        <div className="absolute inset-0 bg-blue-50/30 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100/50 px-3 py-1 rounded-full">
                Nuestros Servicios
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
                Soluciones integrales para <br/>
                <span className="text-blue-600">retos digitales</span>
              </h2>
            </div>

            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll("left")} className="p-3 rounded-full border border-gray-200 bg-white/80 hover:bg-blue-50 transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scroll("right")} className="p-3 rounded-full border border-gray-200 bg-white/80 hover:bg-blue-50 transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {services.map((srv, index) => (
                <div key={index} className="min-w-[280px] md:min-w-[320px] snap-start bg-white/80 backdrop-blur-md border border-gray-100 p-6 rounded-2xl transition-all duration-300 group flex flex-col items-start cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] hover:border-blue-200">
                  <div className="mb-4 p-3 rounded-xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {srv.desc}
                  </p>
                  <div className="mt-auto group-hover:translate-x-2 transition-transform">
                    <Link href="/services" className="flex items-center text-sm font-semibold text-blue-600">
                      Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
              
              <div className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col justify-center items-center bg-white/30 border-2 border-dashed border-gray-300 p-6 rounded-2xl text-center">
                  <h3 className="text-xl font-bold mb-2">¿Necesitas más?</h3>
                  <p className="text-gray-500 text-sm mb-6">Explora nuestro catálogo completo.</p>
                  <Button variant="outline" asChild className="bg-white/50">
                    <Link href="/services">Ver Todos los Servicios</Link>
                  </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Button variant="secondary" asChild>
               <Link href="/services">Explorar Servicios</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* =========================================
          SECCIÓN 3: NOSOTROS
         ========================================= */}
      <section id="nosotros" className="py-20 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Equipo trabajando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-4xl font-bold text-blue-600">5+</p>
                <p className="text-sm font-medium text-gray-600">Años de experiencia</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-600 text-sm font-medium mb-6">
                Sobre Nosotros
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Más que una agencia, somos tu socio tecnológico
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fundada con la misión de democratizar la tecnología de alto nivel. 
                No solo escribimos código; entendemos tu modelo de negocio y creamos 
                herramientas que te ayudan a vender más y operar mejor.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800" asChild>
                <Link href="/about">Conocenos</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECCIÓN 4: CONTACTO
         ========================================= */}
      <section id="contacto" className="py-20 relative">
        {/* Fondo sutil degradado para el footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent -z-10"></div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hablemos de tu próximo proyecto
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos listos para escuchar tus ideas y convertirlas en realidad. 
                Escríbenos y te responderemos en menos de 24 horas.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white shadow-sm border border-gray-100 rounded-lg text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">bpfcompanies@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white shadow-sm border border-gray-100 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white shadow-sm border border-gray-100 rounded-lg text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Oficina</p>
                    <p className="text-gray-600">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" placeholder="Tu nombre" className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" placeholder="Tu apellido" className="bg-white/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="nombre@ejemplo.com" className="bg-white/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Cuéntanos sobre tu proyecto..." 
                    className="min-h-[120px] bg-white/50"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg h-12">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}