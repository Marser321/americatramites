'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Check, 
  X, 
  ArrowRight,
  Gift,
  BookOpen,
  ShieldCheck,
  PlaneTakeoff,
  Compass
} from 'lucide-react';

const CeoLogo = ({ className = "h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 650 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,130 L110,15 C100,5 60,10 35,30 C60,-5 120,-15 160,15 C190,35 190,60 190,80 L190,130 L145,130 L145,65 C145,45 115,40 85,75 L55,130 Z" fill="#000B6B" />
    <polygon points="125,22 170,22 147.5,50" fill="#BE0000" />
    <text x="195" y="130" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="135" fill="#000B6B" letterSpacing="-2.5">MERICA</text>
    <text x="35" y="205" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="90" fill="#BE0000" letterSpacing="-0.5">TRAMITES</text>
  </svg>
);

// Liquid Glass Card Component
function GlassCard({ children, className = "", glowColor = "rgba(59, 130, 246, 0.15)" }: { children: React.ReactNode, className?: string, glowColor?: string }) {
  return (
    <div className={`relative transition-all duration-500 group ${className}`}>
      {/* Shimmer Border Star */}
      <div className="absolute -top-[18px] right-[10%] w-9 h-9 z-20 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse">
        <svg className="w-full h-full text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" viewBox="0 0 100 100">
           <path fill="currentColor" d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z"></path>
        </svg>
      </div>

      {/* Crystal Glass Base */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.2] backdrop-blur-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:border-white/[0.3] group-hover:bg-white/[0.08] transition-all duration-500">
        {/* Glare line top */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80"></div>
        
        {/* Side Glare */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-white/60 to-transparent"></div>

        {/* Inner ambient glow */}
        <div 
          className="absolute -inset-32 opacity-50 blur-[80px] pointer-events-none transition-all duration-700 group-hover:opacity-70" 
          style={{ background: `radial-gradient(circle at top right, ${glowColor}, transparent 60%)` }}
        ></div>
      </div>
      
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export default function LandingPage() {
  const { scrollY } = useScroll();
  const cloudsY = useTransform(scrollY, [0, 1000], [0, 600]);
  const orbsY1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const orbsY2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const orbsY3 = useTransform(scrollY, [0, 1000], [0, 200]);

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const positivas = [
    "Quieres generar ingresos extra o emprender desde cero sin título universitario.",
    "Quieres servir a la comunidad hispana desde un rol profesional y legal.",
    "Deseas trabajar desde casa con flexibilidad de horarios.",
    "Quieres aprender a conseguir clientes, no solo a llenar formularios."
  ];

  const negativas = [
    "Buscas soluciones mágicas sin comprometerte a estudiar 4 a 6 horas semanales.",
    "Quieres brindar asesoría legal o representar clientes en corte (eso requiere ser abogado)."
  ];

  const temario = [
    { titulo: "Semana 1: Fundamentos y Blindaje Legal.", desc: "(Instituciones clave: USCIS, EOIR, ICE. Límites de tu rol legal, contratos y estructura de LLC)." },
    { titulo: "Semana 2: Dominio Documental.", desc: "(Lectura y extracción de datos de NTA, I-220A, I-220B, I-797, RFE y citas biométricas)." },
    { titulo: "Semana 3: Los Motores de Ingreso.", desc: "(Asilo afirmativo I-589 y permisos de trabajo I-765 paso a paso con casos reales)." },
    { titulo: "Semana 4: Servicios Premium y Rentables.", desc: "(Peticiones familiares I-130, Ajuste de estatus I-485 y Permiso de viaje I-131)." },
    { titulo: "Semana 5: Diferenciación Estratégica.", desc: "(Cambios de dirección AR-11, Solicitudes FOIA y Exención de pago I-912)." },
    { titulo: "Semana 6: Tu Máquina de Clientes.", desc: "(Creación de tu Video de Ventas VSL, embudos, CRM con GoHighLevel y publicidad en Meta)." }
  ];

  const oferta = [
    { text: "Programa Central: Masterclass en vivo de 6 semanas con Greter Hernández", icon: <BookOpen className="w-5 h-5 text-[#3b82f6]" /> },
    { text: "Bono 1: Kit de Inicio Profesional con contratos y checklists", icon: <Gift className="w-5 h-5 text-[#BE0000]" /> },
    { text: "Bono 2: Tutoría Privada de Casos (1 hora en Zoom)", icon: <Gift className="w-5 h-5 text-[#BE0000]" /> },
    { text: "Bono 3: Primer mes en Comunidad privada de preparadores", icon: <Gift className="w-5 h-5 text-[#BE0000]" /> },
    { text: "Bono 4: Entrenamiento \"Tu primer VSL\" para atraer prospectos", icon: <Gift className="w-5 h-5 text-[#BE0000]" /> },
  ];

  const handleClickCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050B14] font-sans selection:bg-red-500/30 overflow-hidden">
      {/* 
        ========================================================
        1. DEEP BACKGROUND (Fixed Parallax Dark Ocean/Space)
        ========================================================
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Orbs with Parallax & Independent Float */}
        <motion.div style={{ y: orbsY1 }} className="absolute top-[20%] left-[10%] mix-blend-screen">
          <motion.div 
            animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40vw] h-[40vw] bg-[#00246B]/40 blur-[130px] rounded-full"
          />
        </motion.div>
        
        <motion.div style={{ y: orbsY2 }} className="absolute bottom-[20%] right-[5%]">
          <motion.div 
            animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-[50vw] h-[50vw] bg-[#0B0121]/80 blur-[150px] rounded-full"
          />
        </motion.div>

        <motion.div style={{ y: orbsY3 }} className="absolute top-[40%] right-[20%] mix-blend-screen">
          <motion.div 
            animate={{ x: [0, 50, 0], scale: [1, 1.3, 1] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30vw] h-[30vw] bg-[#6B0000]/20 blur-[120px] rounded-full"
          />
        </motion.div>
        
        {/* Sky/Cloud Macro Texture for blending into blue */}
        <svg className="absolute top-0 inset-x-0 w-full h-full opacity-[0.2] mix-blend-color-dodge pointer-events-none">
          <filter id="macro-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#macro-noise)"/>
        </svg>

        {/* Fine Noise Texture for deep premium feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] mix-blend-overlay pointer-events-none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* 
        ========================================================
        2. TOP SECTION (Volumetric Clouds + Deep Cutoff)
        ========================================================
      */}
      {/* Absolute Cloud Layer with a strict cutoff mask to prevent bleeding into cards */}
      <div 
        className="absolute top-0 inset-x-0 h-[110vh] pointer-events-none z-10 overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
      >
        {/* Subtle Blue Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#e8f0fe] to-[#cdddf4]/40 z-0"></div>
        
        <motion.div style={{ y: cloudsY }} className="absolute inset-x-0 top-0 h-full pointer-events-none z-10">
          
          {/* Dense Realistic Cloud Photo Texture (Structure & Shadows) */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], x: ["-1%", "1%", "-1%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-cover bg-center bg-no-repeat opacity-[0.35] mix-blend-color-burn"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410cbda?q=80&w=2500&auto=format&fit=crop')" }}
          ></motion.div>

          {/* Majestic Foreground Cloud Photo (Highlights & Density) */}
          <motion.div 
            animate={{ scale: [1.05, 1, 1.05], y: ["0%", "2%", "0%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-5%] left-[-5%] w-[110%] h-[120%] bg-cover bg-[center_top] bg-no-repeat opacity-[0.6] mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2500&auto=format&fit=crop')" }}
          ></motion.div>

          {/* Central Brightness Backing (Keeps text area highly contrasted) */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-white/95 blur-[120px]"></div>
          
          {/* Subtle Glowing Orbs embedded deeply within the real clouds */}
          <motion.div animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[15%] w-[35vw] h-[35vw] min-w-[300px] bg-[#00b4d8]/25 blur-[80px] rounded-full mix-blend-screen"></motion.div>
          <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[35%] right-[10%] w-[45vw] h-[45vw] min-w-[400px] bg-[#00246B]/20 blur-[100px] rounded-full mix-blend-multiply"></motion.div>

          {/* Edge Softeners (CSS shapes to ensure edges melt into the blue gradient cleanly) */}
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[50vw] max-h-[800px] bg-[radial-gradient(circle,_#ffffff_0%,_transparent_75%)] blur-[60px] opacity-90"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] max-h-[800px] bg-[radial-gradient(circle,_#ffffff_0%,_transparent_75%)] blur-[60px] opacity-90"></div>
          <div className="absolute top-[45%] left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_transparent_80%)] blur-[90px] opacity-[0.9]"></div>

          {/* Rainbow Prism Effect sweeping through the clouds */}
          <motion.div animate={{ opacity: [0.5, 0.9, 0.5], rotate: [0, 5, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[20%] w-[700px] h-[300px] origin-center">
            <div className="absolute inset-0 rounded-[100%] border-[60px] border-transparent border-t-[#BE0000]/20 border-r-[#00246B]/15 border-b-[#00b4d8]/10 blur-[50px] rotate-[-20deg] skew-x-12 mix-blend-multiply"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Nav & Hero Content Wrapper */}
      <div className="relative z-20 w-full flex flex-col pb-8">
        {/* --- NAVBAR --- */}
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none ${scrolled ? 'py-4' : 'py-6'}`}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className={`transition-all duration-300 flex items-center justify-center pointer-events-auto ${scrolled ? 'scale-90 relative top-1' : 'scale-100'}`}>
              <CeoLogo className="h-10 md:h-12 w-auto drop-shadow-md" />
            </div>
            {/* Desktop Nav Button */}
            <div className="flex items-center pointer-events-auto">
              <button onClick={handleClickCTA} className="px-6 py-2.5 bg-[#BE0000] text-white rounded-full font-bold shadow-[0_4px_14px_0_rgba(190,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(190,0,0,0.23)] hover:bg-[#a00000] transition-all">
                INICIAR ACREDITACIÓN
              </button>
            </div>
          </div>
        </nav>

        {/* --- HERO CONTENT --- */}
        <section className="flex-1 flex flex-col justify-center pt-32 pb-8 px-4 text-center max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#050b14] mb-8 leading-[1.05] [text-shadow:_0_0_40px_rgba(255,255,255,1),_0_0_20px_rgba(255,255,255,0.8)] relative z-10">
              Construye un Negocio <span className="text-black">Rentable y Seguro</span> <br className="hidden md:block"/> en Solo 6 Semanas
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-900 max-w-3xl mx-auto mb-12 leading-relaxed font-semibold [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_10px_rgba(255,255,255,1)]">
              Como <span className="font-bold text-[#BE0000]">Preparador Profesional de Formularios Migratorios.</span> Domina el sistema legal, prepara documentos sin errores y automatiza tu captación de clientes. <span className="font-bold text-[#000B6B] border-b-2 border-[#BE0000]/30 pb-0.5">Sin necesidad de título universitario.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleClickCTA}
                className="group relative flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 bg-gradient-to-b from-[#b30000] to-[#7a0000] rounded-2xl hover:from-[#d10000] hover:to-[#990000] shadow-[0_10px_40px_-10px_rgba(190,0,0,0.8)] hover:shadow-[0_20px_60px_-15px_rgba(190,0,0,0.9)] hover:-translate-y-1 border border-red-400/30 overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                INICIAR ACREDITACIÓN
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-5 font-bold text-[#000B6B] transition-all bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm hover:shadow-md">
                VER CURRÍCULO DETALLADO
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* 
        ========================================================
        3. DEEP BLUE GLASSMORPHISM SECTION
        ========================================================
      */}
      <div className="relative z-20 px-4 max-w-7xl mx-auto space-y-32 pb-32 pt-4">
        
        {/* --- VENTAJAS / CUALIFICACIÓN --- */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">La Ventaja <span className="text-[#BE0000]">Estratégica</span></h2>
            <p className="text-slate-400 text-lg">Descubre si cumples con el perfil para escalar en esta industria.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Positivo Glass Card */}
            <GlassCard glowColor="rgba(34,197,94,0.15)" className="p-8 md:p-12 group">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
                <CheckCircle2 size={14} /> Perfil Ideal
              </div>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Este programa <br/><span className="text-green-400">ES para ti</span> si...</h3>
              <ul className="space-y-6">
                {positivas.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)] group-hover:bg-green-500/30 transition-colors">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Negativo Glass Card */}
            <GlassCard glowColor="rgba(190,0,0,0.15)" className="p-8 md:p-12 group">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
                <XCircle size={14} /> Fuera de Rango
              </div>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Este programa <br/><span className="text-red-400">NO es para ti</span> si...</h3>
              <ul className="space-y-6">
                {negativas.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)] group-hover:bg-red-500/30 transition-colors">
                        <X className="w-3 h-3" />
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* --- TEMARIO (Liquid Glass Accordion) --- */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">El Plan de Estudios Exacto</h2>
            <p className="text-lg text-slate-400">Seis semanas de inmersión total para pasar de cero a experto.</p>
          </div>

          <div className="space-y-4">
            {temario.map((item, idx) => (
              <GlassCard key={idx} glowColor="rgba(255,255,255,0.05)" className="!rounded-2xl">
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
                      0{idx + 1}
                    </span>
                    {item.titulo.replace(`Semana ${idx + 1}: `, '')}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-500 transition-transform duration-500 ${
                      openAccordion === idx ? 'transform rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                        <p className="text-slate-400 leading-relaxed text-lg font-light pl-14">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* --- OFERTA & BONOS (Massive Dashboard Card) --- */}
        <section id="oferta">
          <GlassCard glowColor="rgba(190,0,0,0.2)" className="p-1 md:p-2 border-white/20">
            <div className="relative bg-gradient-to-b from-[#050B14]/80 to-[#02050A]/90 rounded-[1.8rem] rounded-tl-[1.8rem] rounded-tr-[1.8rem] p-8 md:p-16 overflow-hidden">
              
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#BE0000]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                  Paquete Premium
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Herramientas Elite Incluidas</h2>
                <p className="text-slate-400 text-lg md:text-xl">Inscríbete ahora y asegura todos los bonos de acción rápida antes del cierre.</p>
              </div>

              <div className="grid lg:grid-cols-5 gap-16 items-center relative z-10">
                <div className="lg:col-span-3 space-y-4">
                  {oferta.map((item, idx) => (
                    <div key={idx} className="group flex bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-5 rounded-2xl border border-white/5 hover:border-white/10 backdrop-blur-sm">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="ml-5 flex-1 flex items-center">
                        <p className="text-white font-medium text-lg leading-snug">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-2">
                  <div className="p-8 md:p-10 bg-gradient-to-b from-white/[0.08] to-transparent rounded-3xl border border-white/10 backdrop-blur-xl relative shadow-2xl text-center">
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#BE0000] to-[#7a0000] text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg border border-red-400/30 whitespace-nowrap">
                      Oferta Fundadores
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-3 uppercase tracking-widest font-bold mt-6">Inversión Única</p>
                    <p className="text-7xl font-black text-white mb-2 tracking-tighter">$997 <span className="text-2xl text-slate-500 font-medium tracking-normal">USD</span></p>
                    
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold py-2 px-4 rounded-full inline-block mb-10 mt-2">
                      Solo para asistentes a la masterclass
                    </div>

                    <button className="w-full flex items-center justify-center px-8 py-5 font-black text-white transition-all bg-gradient-to-b from-[#b30000] to-[#7a0000] rounded-2xl hover:from-[#d10000] hover:to-[#990000] shadow-[0_10px_30px_-10px_rgba(190,0,0,0.8)] transform hover:-translate-y-1 border border-red-400/30 text-lg">
                      Acceso Completo Ahora
                    </button>
                    <div className="mt-6 flex items-center justify-center text-sm font-medium text-slate-500 gap-2">
                       <ShieldCheck className="w-5 h-5 text-green-500/70" /> Check-out 100% Cifrado y Seguro
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer className="py-16 px-4 border-t border-white/5 bg-black/80 relative z-30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
            <CeoLogo className="h-8 md:h-10 w-auto opacity-80 mix-blend-screen grayscale brightness-200" />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed text-justify md:text-center max-w-3xl">
            Aviso: "CEO América Trámites no es un bufete de abogados y no provee asesoría legal. El programa 'Preparador Profesional de Formularios Migratorios' es estrictamente educativo. No sustituye a un abogado matriculado y no otorga licencias gubernamentales."
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
          <p className="text-xs text-slate-600 font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} CEO América Trámites. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
