"use client";

import { useState } from "react"; // IMPORTANTE: Importar useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare, 
  CheckCircle2,
  HelpCircle,
  Loader2 // Icono para carga
} from "lucide-react";

export default function ContactPage() {
  // 1. ESTADO DEL FORMULARIO
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "Desarrollo de Software a Medida", // Valor por defecto
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. MANEJAR CAMBIOS EN LOS INPUTS
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Usamos 'id' para identificar el campo, excepto en el select que usaremos 'name' si no tiene id compatible
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // 3. FUNCIÓN DE ENVÍO
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setFormData({ name: "", company: "", email: "", service: "Desarrollo de Software a Medida", message: "" });
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Datos de FAQ
  const faqs = [
    {
      question: "¿Cuál es el tiempo promedio de entrega?",
      answer: "Depende del proyecto. Un sitio web corporativo toma entre 2 a 4 semanas. Aplicaciones más complejas pueden llevar de 2 a 3 meses."
    },
    {
      question: "¿Necesito tener el diseño listo?",
      answer: "No. Contamos con un equipo de diseño UI/UX que creará la estética de tu producto desde cero si lo necesitas."
    },
    {
      question: "¿Ofrecen planes de mantenimiento?",
      answer: "Sí. Tenemos planes mensuales para asegurar que tu sitio esté siempre actualizado, seguro y rápido."
    },
    {
      question: "¿Cómo funciona el pago?",
      answer: "Trabajamos con un esquema 50/50. El 50% al iniciar el proyecto y el 50% restante contra entrega final y satisfacción."
    }
  ];

  return (
    <main className="relative min-h-screen text-gray-900 pt-24 pb-20 overflow-hidden">

      {/* --- FONDO FIJO (DISEÑO "CONEXIÓN") --- */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-white dark:bg-gray-950 pointer-events-none">
        {/* ... (Todo tu código de fondo se mantiene igual) ... */}
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-100/50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950/30"></div>
         <div className="absolute top-[5%] left-[5%] text-blue-300 dark:text-blue-600/30 text-9xl font-mono font-bold opacity-30 -rotate-12 select-none">@</div>
         <div className="absolute bottom-[20%] right-[5%] text-indigo-300 dark:text-indigo-600/30 text-8xl font-mono font-bold opacity-30 rotate-90 select-none">POST</div>
         <div className="absolute top-[40%] right-[15%] text-emerald-300 dark:text-emerald-600/30 text-6xl font-mono font-bold opacity-40 blur-[1px] select-none">200 OK</div>
         <div className="absolute bottom-[10%] left-[10%] text-purple-300 dark:text-purple-600/30 text-7xl font-mono font-bold opacity-30 -rotate-6 select-none">send()</div>
         <div className="absolute top-[15%] right-[30%] text-gray-300 dark:text-gray-700/50 text-8xl font-mono font-bold opacity-20 rotate-12 select-none">{"{ }"}</div>
         <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
               <path fill="none" stroke="#6366f1" strokeWidth="2" d="M100,100 Q400,300 700,100 T400,500" />
             </svg>
         </div>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hablemos de tu <span className="text-blue-600">próximo proyecto</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes una idea? Nosotros tenemos el equipo para hacerla realidad.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          
          {/* COLUMNA IZQUIERDA (Info) se mantiene igual */}
          <div className="space-y-12">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <MessageSquare className="text-blue-500" /> Información Directa
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full text-blue-600 dark:text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:bpfcompanies@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                      bpfcompanies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-purple-50 dark:bg-gray-800 p-3 rounded-full text-purple-600 dark:text-purple-400">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Teléfono / WhatsApp</p>
                        <p className="text-gray-600 dark:text-gray-400">+57 310 793 55 04</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-orange-50 dark:bg-gray-800 p-3 rounded-full text-orange-600 dark:text-orange-400">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Oficinas</p>
                        <p className="text-gray-600 dark:text-gray-400">Bogotá, Colombia</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Qué sigue (Proceso) - Se mantiene igual */}
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">¿Qué pasa después de contactarnos?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-300">Te respondemos en menos de 24 horas.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-300">Agendamos una videollamada corta.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-300">Firmamos NDA si tu proyecto es confidencial.</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario CON LOGICA */}
          <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
               <Send className="w-24 h-24 text-blue-600 rotate-12" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Envíanos un mensaje</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Los campos marcados con * son obligatorios</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium dark:text-gray-300">Nombre *</label>
                  <Input 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Juan Pérez" 
                    required 
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium dark:text-gray-300">Empresa</label>
                  <Input 
                    id="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Tu Startup S.A.S" 
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium dark:text-gray-300">Email *</label>
                <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="juan@empresa.com" 
                    required 
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium dark:text-gray-300">Servicio de interés</label>
                <select 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <option>Desarrollo de Software a Medida</option>
                  <option>Aplicación Móvil</option>
                  <option>Inteligencia Artificial</option>
                  <option>Staff Augmentation</option>
                  <option>Consultoría / Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium dark:text-gray-300">Cuéntanos sobre tu proyecto *</label>
                <Textarea 
                  id="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  placeholder="Detalles, presupuesto estimado, plazos..." 
                  className="min-h-[120px] bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 text-lg"
              >
                {isSubmitting ? (
                    <>Enviando... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                ) : (
                    <>Enviar Solicitud <Send className="ml-2 w-4 h-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* SECCIÓN FAQ (Sin cambios) */}
        <div className="max-w-4xl mx-auto">
             {/* ... Mismo código de FAQ ... */}
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 dark:text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-500" />
                Preguntas Frecuentes
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                Resolvemos tus dudas antes de empezar a trabajar juntos.
                </p>
            </div>
            <div className="grid gap-6">
                {faqs.map((faq, index) => (
                <div key={index} className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/40 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 pl-5 leading-relaxed">
                    {faq.answer}
                    </p>
                </div>
                ))}
            </div>
        </div>

      </div>
    </main>
  );
}