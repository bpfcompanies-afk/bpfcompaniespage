"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Bot, 
  Users, 
  ArrowRight,
  X,
  Lightbulb
} from "lucide-react";

export default function ServicesPage() {
  
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-blue-600" />,
      title: "Fábrica de Software",
      desc: "Desarrollo a medida de sistemas robustos.",
      details: "Convertimos tus requisitos complejos en software funcional y escalable. Nos especializamos en arquitecturas de microservicios, APIs RESTful de alto rendimiento y dashboards interactivos. Utilizamos metodologías ágiles para asegurar entregas continuas y calidad de código superior.",
      tags: ["React", "Node.js", "Python", "..."]
    },
    {
      icon: <Smartphone className="w-10 h-10 text-purple-600" />,
      title: "Desarrollo Móvil",
      desc: "Apps nativas e híbridas que tus usuarios amarán.",
      details: "Desarrollamos aplicaciones móviles que destacan en la App Store y Google Play. Ya sea desarrollo nativo (Swift/Kotlin) o multiplataforma (Flutter/React Native), garantizamos una experiencia de usuario fluida (60fps), modo offline y notificaciones push integradas.",
      tags: ["iOS", "Android", "Flutter", "..."]
    },
    {
      icon: <Cloud className="w-10 h-10 text-orange-600" />,
      title: "Cloud & DevOps",
      desc: "Migración, arquitectura y optimización en la nube.",
      details: "Deja de preocuparte por servidores caídos. Diseñamos infraestructuras auto-escalables en AWS o Azure. Implementamos pipelines CI/CD para que tu equipo pueda desplegar código varias veces al día sin miedo a romper la producción.",
      tags: ["AWS", "Azure", "Docker", "..."]
    },
    {
      icon: <Bot className="w-10 h-10 text-pink-600" />,
      title: "Inteligencia Artificial",
      desc: "Modelos de ML y Chatbots para automatizar procesos.",
      details: "Integramos la potencia de la IA en tu negocio. Desde chatbots de atención al cliente que entienden el contexto hasta modelos predictivos que analizan tus ventas. Usamos las APIs más modernas (OpenAI, Anthropic) y entrenamos modelos propios.",
      tags: ["OpenAI", "TensorFlow", "NLP", "..."]
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Staff Augmentation",
      desc: "Te prestamos a nuestros mejores ingenieros.",
      details: "¿Tu equipo está desbordado? Te asignamos desarrolladores Senior, QA o Project Managers que se integran en tus flujos de trabajo existentes (Jira, Slack, etc.). Sin costes de contratación ni despidos, solo talento puro bajo demanda.",
      tags: ["Seniors", "Tech Leads", "QA", "..."]
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: "Constructor de Ideas",
      desc: "Convierte ideas en realidad con creatividad, estrategia e innovación.",
      details: "Te ayudamos a dar forma a proyectos únicos con visión y tecnología avanzada. Transformamos conceptos abstractos en productos viables, definimos el alcance técnico, diseñamos prototipos interactivos y creamos la hoja de ruta perfecta para lanzar tu MVP al mercado.",
      tags: ["MVP", "Estrategia", "Prototipado", "..."]
    }
  ];

  return (
    <main className="relative min-h-screen text-gray-900 pt-24 pb-20 overflow-hidden">

      {/* --- FONDO FIJO (Visible siempre) --- */}
      <div className="fixed inset-0 w-full h-full z-0 bg-white dark:bg-gray-950 pointer-events-none">
        
        {/* Gradiente base sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900"></div>
        
        {/* ELEMENTOS DE CÓDIGO */}
        <div className="absolute top-[10%] left-[5%] text-indigo-400 dark:text-indigo-600 text-8xl font-mono font-bold opacity-10 -rotate-12 select-none">
          npm
        </div>
        <div className="absolute top-[40%] right-[-5%] text-blue-400 dark:text-blue-600 text-9xl font-mono font-bold opacity-10 rotate-90 select-none">
          git
        </div>
        <div className="absolute bottom-[15%] left-[10%] text-purple-400 dark:text-purple-600 text-6xl font-mono font-bold opacity-10 blur-[1px] select-none">
          docker
        </div>
        <div className="absolute top-[15%] right-[20%] text-cyan-500 dark:text-cyan-700 text-5xl font-mono font-bold opacity-10 select-none">
          ./src
        </div>
        <div className="absolute top-[60%] left-[20%] text-emerald-400 dark:text-emerald-600 text-7xl font-mono font-bold opacity-10 rotate-45 select-none">
          &lt;/&gt;
        </div>

        {/* Onda SVG */}
        <div className="absolute bottom-0 left-0 w-full opacity-40 dark:opacity-20 pointer-events-none">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path fill="#6366f1" fillOpacity="0.4" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* --- CONTENIDO DE LA PÁGINA (z-10 para estar encima del fondo) --- */}
      <div className="relative z-10">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 text-gray-900 dark:text-white">
            Tecnología que <span className="text-blue-600">impulsa resultados</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No somos solo programadores. Somos consultores estratégicos que usan código para resolver problemas de negocio reales.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((srv, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(srv)}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 p-8 rounded-2xl transition-all duration-300 
                        cursor-pointer 
                        hover:-translate-y-2 
                        hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] 
                        hover:border-blue-200"
            >
              <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {srv.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {srv.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {srv.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                <span className="text-xs font-bold uppercase tracking-wide">+ Ver más</span>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN PROCESO (Ahora Transparente) */}
        {/* Eliminamos bg-slate-50, backdrop-blur, border y rounded para que sea transparente */}
        <div className="py-24 relative mx-4 md:mx-8 mb-12">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              
              {/* Lado Izquierdo: Pasos */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Nuestro proceso de trabajo</h2>
                <div className="space-y-10">
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-110 transition-transform">1</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Descubrimiento</h4>
                        <p className="text-gray-600 dark:text-gray-300">Entendemos tu negocio a fondo para definir el alcance real.</p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-110 transition-transform">2</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Desarrollo Ágil</h4>
                        <p className="text-gray-600 dark:text-gray-300">Sprints de 2 semanas con avances funcionales constantes.</p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-110 transition-transform">3</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Entrega y Escala</h4>
                        <p className="text-gray-600 dark:text-gray-300">Despliegue seguro, capacitación y soporte continuo.</p>
                      </div>
                    </div>
                </div>
              </div>

              {/* Lado Derecho: Tarjeta CTA (Esta sí mantiene el fondo oscuro para contraste) */}
              <div className="md:w-5/12 bg-gray-900 text-white p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">¿Listo para empezar?</h3>
                <p className="text-gray-300 mb-8 relative z-10">
                  Agenda una consultoría gratuita de 30 minutos.
                </p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-blue-50 w-full font-bold h-12 relative z-10" asChild>
                  <Link href="/contact">
                    Agendar Llamada <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- MODAL / POPUP --- */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)} 
        >
          <div 
            className="bg-white dark:bg-gray-900 w-full max-w-lg p-8 md:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-gray-800"
            style={{ borderRadius: '2rem' }}
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-start">
              <div className="mb-6 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20">
                <div className="text-blue-600 dark:text-blue-400 scale-125">
                   {selectedService.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedService.title}
              </h3>
              <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {selectedService.details}
              </p>
              <Button className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-gray-200 text-white rounded-xl py-6 text-lg transition-colors" asChild>
                 <Link href="/contact">
                   Cotizar este servicio <ArrowRight className="ml-2 w-5 h-5" />
                 </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}