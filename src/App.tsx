import { useState, useEffect, FormEvent } from "react";
import { 
  Laptop, 
  Compass, 
  Heart, 
  Briefcase, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  Calendar, 
  MessageSquare, 
  Shield, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Quote,
  Send
} from "lucide-react";
import { bentoItems, reflectionCards, testimonials, faqItems } from "./data";

const lauraHeroDesktopImage = "https://lh3.googleusercontent.com/d/1lJqkRTupOlmBTgCpc-hm6PX3TD5sSYaf=s1600";
const lauraHeroMobileImage = "https://lh3.googleusercontent.com/d/1abubjy2GuKS_mHZaoxpgE7_BiBNnT1pD=s1600";

export default function App() {
  // Navigation & UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeReflection, setActiveReflection] = useState(reflectionCards[0].id);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Form States
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formFocus, setFormFocus] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial Carousel Auto-run
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real database saving / processing
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Save to localStorage as a durable record of booking request
      const requestData = {
        name: formName,
        email: formEmail,
        phone: formPhone,
        age: formAge,
        focus: formFocus,
        msg: formMsg,
        timestamp: new Date().toISOString()
      };
      
      const existing = localStorage.getItem("laura_bookings");
      const list = existing ? JSON.parse(existing) : [];
      list.push(requestData);
      localStorage.setItem("laura_bookings", JSON.stringify(list));
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Laura! Meu nome é ${formName}. Gostaria de solicitar um agendamento para sessão de psicoterapia.\n\n` +
      `*Detalhes do pedido:*\n` +
      `• Área de Foco: ${formFocus || "Não especificado"}\n` +
      `• Faixa Etária: ${formAge || "Não especificado"}\n` +
      `• Mensagem: ${formMsg || "Olá, gostaria de saber mais sobre a terapia."}\n\n` +
      `Aguardo seu retorno para alinharmos os horários!`
    );
    return `https://wa.me/5554999999999?text=${text}`; // Placeholder for professional Whatsapp with prepopulated structured details
  };

  const getIconComponent = (name: string) => {
    switch (name) {
      case "Laptop": return <Laptop className="w-5 h-5 text-brand-accent" />;
      case "Compass": return <Compass className="w-5 h-5 text-brand-accent" />;
      case "Heart": return <Heart className="w-5 h-5 text-brand-accent" />;
      case "Briefcase": return <Briefcase className="w-5 h-5 text-brand-accent" />;
      case "Brain": return <Brain className="w-5 h-5 text-brand-accent" />;
      default: return <Sparkles className="w-5 h-5 text-brand-accent" />;
    }
  };

  const getReflectionIconComponent = (id: string) => {
    switch (id) {
      case "sentido": return <Sparkles className="w-5 h-5 text-brand-accent" />;
      case "sobrecarga": return <Brain className="w-5 h-5 text-brand-accent" />;
      case "incerteza": return <Compass className="w-5 h-5 text-brand-accent" />;
      case "transicao": return <Award className="w-5 h-5 text-brand-accent" />;
      default: return <Sparkles className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-body font-sans selection:bg-brand-accent/20 selection:text-text-title">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-radial-gradient-top pointer-events-none z-0" />
      <div className="absolute top-[1600px] right-0 w-[500px] h-[500px] bg-radial-gradient pointer-events-none z-0 opacity-60" />
      <div className="absolute top-[3200px] left-0 w-[500px] h-[500px] bg-radial-gradient pointer-events-none z-0 opacity-40" />

      {/* HEADER */}
      <header 
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#inicio" 
            className="group flex flex-col justify-start transition-all duration-500 opacity-100 translate-y-0 pointer-events-auto"
          >
            <span className="font-display text-lg md:text-xl tracking-wide font-semibold text-text-title group-hover:text-brand-accent transition-colors duration-300">
              Laura Barbizan Barichello
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent font-medium -mt-0.5">
              Psicologia Clínica • CRP 07/34923
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#diferenciais" className="text-sm font-medium text-text-body hover:text-brand-accent hover:text-glow transition-all">
              Diferenciais
            </a>
            <a href="#filosofia" className="text-sm font-medium text-text-body hover:text-brand-accent hover:text-glow transition-all">
              Espaço de Reflexão
            </a>
            <a href="#sobre" className="text-sm font-medium text-text-body hover:text-brand-accent hover:text-glow transition-all">
              Sobre Mim
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-text-body hover:text-brand-accent hover:text-glow transition-all">
              Depoimentos
            </a>
            <a href="#faq" className="text-sm font-medium text-text-body hover:text-brand-accent hover:text-glow transition-all">
              Perguntas Frequentes
            </a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden lg:block">
            <a 
              href="#agendar" 
              className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-brand-accent/30 text-text-title hover:bg-brand-accent hover:text-white transition-all duration-300 bg-bg-secondary/40"
            >
              Agendar Sessão
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-title hover:text-brand-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-nav-panel"
            className="lg:hidden absolute top-full left-0 w-full bg-bg-secondary/95 backdrop-blur-xl border-b border-border-subtle py-6 px-8 flex flex-col gap-6 animate-fadeIn"
          >
            <a 
              href="#diferenciais" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-body hover:text-brand-accent transition-colors"
            >
              Diferenciais
            </a>
            <a 
              href="#filosofia" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-body hover:text-brand-accent transition-colors"
            >
              Espaço de Reflexão
            </a>
            <a 
              href="#sobre" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-body hover:text-brand-accent transition-colors"
            >
              Sobre Mim
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-body hover:text-brand-accent transition-colors"
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-body hover:text-brand-accent transition-colors"
            >
              Perguntas Frequentes
            </a>
            <a 
              href="#agendar" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-semibold uppercase bg-brand-accent text-white hover:bg-brand-accent-hover transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section 
        id="inicio"
        className="relative min-h-screen flex items-end md:items-center justify-start overflow-hidden pt-32 pb-20 md:py-32 z-10 bg-bg-primary"
      >
        {/* DESKTOP BACKGROUND (md and up) */}
        <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
          <img 
            src={lauraHeroDesktopImage} 
            alt="Psicóloga Laura Barbizan Barichello" 
            className="w-full h-full object-cover object-[center_20%] opacity-90 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Soft elegant gradient overlay to ensure left-side text has incredible contrast */}
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-bg-primary via-bg-primary/95 to-transparent z-1" />
          {/* Subtle bottom screen-wide fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-1" />
        </div>

        {/* MOBILE BACKGROUND (hidden on desktop) */}
        <div className="hero-mobile-bg-container md:hidden">
          <div className="hero-background" />
          <div className="hero-overlay" />
        </div>

        {/* Content Container (Perfectly positioned on both desktop and mobile) */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col">
          <div className="max-w-xl md:max-w-2xl flex flex-col items-start justify-center text-left">
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight text-text-title mb-6 max-w-xl text-left">
              Um espaço de <span className="text-brand-accent italic font-normal text-glow block sm:inline">acolhimento.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-text-body text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-10 text-left">
              Psicoterapia para cuidar de você, com escuta, respeito e empatia.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#agendar" 
                className="group inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-accent text-white font-semibold tracking-wide text-sm hover:bg-brand-accent-hover active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(186,84,49,0.15)]"
              >
                Agendar Sessão Inicial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <section className="relative py-8 bg-bg-secondary border-y border-border-subtle/50 overflow-hidden z-10">
        <div className="flex items-center w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> PSICÓLOGA HUMANISTA EXISTENCIAL
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> ATENDIMENTO 100% ONLINE GLOBAL
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> PÓS-GRADUADA EM GESTÃO DE PESSOAS
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> ESPECIALIZAÇÃO EM ABA (CIÊNCIA COMPORTAMENTAL)
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> CRP 07/34923 ATIVO
            </span>
            
            {/* Duplicated for smooth loop */}
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> PSICÓLOGA HUMANISTA EXISTENCIAL
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> ATENDIMENTO 100% ONLINE GLOBAL
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> PÓS-GRADUADA EM GESTÃO DE PESSOAS
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> ESPECIALIZAÇÃO EM ABA (CIÊNCIA COMPORTAMENTAL)
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-body font-medium flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-brand-accent/70" /> CRP 07/34923 ATIVO
            </span>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS BENTO GRID */}
      <section 
        id="diferenciais"
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 z-10 relative"
      >
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Como trabalhamos juntos</p>
          <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-text-title mb-6">
            Uma abordagem integrada para cuidar de você por inteiro
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent/60 rounded" />
          <p className="text-text-body text-sm md:text-base mt-6 leading-relaxed">
            Unindo a sensibilidade filosófica da terapia existencial ao pragmatismo comportamental e corporativo, construímos um caminho adaptado às suas reais demandas de vida.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[18px] md:items-start">
          {bentoItems.map((item) => {
            
            // Grid sizing logic for desktop (2 columns with balanced widths)
            let gridClasses = "col-span-1";
            if (item.id === "aba") {
              gridClasses = "col-span-1 md:col-span-2";
            } else {
              gridClasses = "col-span-1 md:col-span-1";
            }

            return (
              <div 
                key={item.id}
                id={`bento-${item.id}`}
                className={`relative rounded-xl p-4 md:p-[20px_22px] glass-card border border-border-subtle/30 glass-card-hover overflow-hidden md:overflow-visible flex flex-col justify-between md:justify-start h-auto md:h-auto ${gridClasses}`}
              >
                {/* Subtle colorful gradient bg in bento */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.colorClass} pointer-events-none z-0 opacity-20 rounded-xl`} />
                
                {/* Bento Header */}
                <div className="relative z-10 flex items-start justify-between md:mb-5">
                  <div className="p-2 rounded-lg bg-bg-primary/40 border border-border-subtle/40">
                    {getIconComponent(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-bg-primary/40 border border-border-subtle/40 text-text-body text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Bento Content */}
                <div className="relative z-10 mt-3 md:mt-0 flex flex-col justify-start">
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-brand-accent/90 mb-0.5 md:mb-[8px]">{item.subtitle}</p>
                  <h3 className="font-display text-sm md:text-lg text-text-title font-medium mb-1 md:mb-[8px] leading-snug md:leading-normal">{item.title}</h3>
                  <p className="text-text-body text-[11px] md:text-sm leading-relaxed md:leading-relaxed line-clamp-2 md:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* INTERACTIVE PHILOSOPHICAL REFLECTION ENGINE */}
      <section 
        id="filosofia"
        className="py-24 md:py-32 bg-bg-secondary border-y border-border-subtle/50 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Concept and tabs */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Filosofia Clínica Existencial</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-text-title mb-6">
                Como você tem encarado os seus vazios?
              </h2>
              <p className="text-text-body text-sm md:text-base leading-relaxed mb-8">
                Diferente de abordagens focadas apenas em catalogar sintomas, a terapia existencial e fenomenológica nos convida a compreender como você vivencia suas principais angústias no dia a dia. Selecione abaixo a dor que mais ressoa em você e veja uma nova perspectiva.
              </p>

              {/* Selector Tabs */}
              <div className="flex flex-col gap-3 w-full">
                {reflectionCards.map((card) => {
                  const isActive = activeReflection === card.id;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveReflection(card.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left border ${
                        isActive 
                          ? "bg-brand-accent/10 border-brand-accent/40 text-text-title pl-6" 
                          : "bg-bg-primary/40 border-border-subtle/20 text-text-body hover:bg-bg-primary/85 hover:text-text-title"
                      }`}
                    >
                      <span className="flex items-center gap-3 font-medium text-sm md:text-base">
                        {getReflectionIconComponent(card.id)}
                        {card.label}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-90 text-brand-accent" : "text-text-body/60"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Dynamic Card Display */}
            <div className="lg:col-span-7">
              {reflectionCards.map((card) => {
                if (card.id !== activeReflection) return null;
                return (
                  <div 
                    key={card.id}
                    className="rounded-2xl glass-card p-8 md:p-10 border border-border-subtle/30 shadow-xl relative overflow-hidden animate-fadeIn"
                  >
                    {/* Background glow in the active card */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
                    
                    {/* Floating quote decoration */}
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-accent/[0.04]" />

                    {/* Section Badge */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent mb-6 block">
                      Reflexão Fenomenológica
                    </span>

                    {/* Card Title */}
                    <h3 className="font-display text-2xl md:text-3xl text-text-title font-normal mb-6 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Narrative */}
                    <p className="text-text-body text-sm md:text-base leading-relaxed mb-8">
                      {card.text}
                    </p>

                    {/* Philosopher Quote */}
                    <div className="border-l-2 border-brand-accent/40 pl-6 my-8 py-1">
                      <p className="text-text-body/80 italic text-sm md:text-base mb-2">
                        "{card.quote}"
                      </p>
                      <p className="text-brand-accent/90 font-mono text-xs uppercase tracking-wider">
                        — {card.author}
                      </p>
                    </div>

                    {/* Interactive Invitation Callout */}
                    <div className="mt-8 pt-6 border-t border-border-subtle/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-xs text-text-body">Quer desatar esses nós de forma segura?</p>
                      <a 
                        href="#agendar" 
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover hover:text-glow transition-colors"
                      >
                        Falar sobre isso em terapia
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section 
        id="sobre"
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 z-10 relative"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Left Column - Abstract symbolic image representing professional journey */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[90px]" />
            
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle/30 glass-card p-3 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600" 
                alt="Escritório de atendimento online" 
                className="w-full h-auto rounded-xl object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent">Consultório Online</span>
                <p className="text-text-title text-xs mt-1 leading-relaxed">Infraestrutura segura para garantir o mais alto nível de conforto e sigilo digital.</p>
              </div>
            </div>

            {/* Micro-grid of metrics */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-xl glass-card border border-border-subtle/20">
                <p className="text-2xl font-semibold text-text-title tracking-tight mb-1 font-display">100%</p>
                <p className="text-xs text-text-body leading-snug">Online e sem barreiras geográficas</p>
              </div>
              <div className="p-5 rounded-xl glass-card border border-border-subtle/20">
                <p className="text-2xl font-semibold text-text-title tracking-tight mb-1 font-display">+300</p>
                <p className="text-xs text-text-body leading-snug">Vidas acolhidas e escutadas</p>
              </div>
            </div>
          </div>

          {/* Letter/Bio Right Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Sobre Laura Barbizan Barichello</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-text-title mb-6">
              "Acredito em uma psicologia que escuta com o coração e compreende com rigor."
            </h2>
            <div className="w-12 h-[2px] bg-brand-accent/60 rounded mb-8" />

            <div className="space-y-6 text-text-body text-sm md:text-base leading-relaxed">
              <p>
                Sou psicóloga formada com profundo amor pelas complexidades das relações humanas. Minha atuação se sustenta na tríade das filosofias da existência: a <strong className="text-text-title font-semibold">Fenomenologia, o Existencialismo e o Humanismo</strong>. Na prática, isso significa que não vejo as pessoas através de caixas diagnósticas frias; encaro cada indivíduo como um projeto único de liberdade e escolha.
              </p>
              <p>
                Buscando agregar caminhos concretos de mudança, consolidei minha formação com uma pós-graduação em <strong className="text-text-title font-semibold">Gestão de Pessoas</strong> e especialização científica em <strong className="text-text-title font-semibold">ABA (Análise do Comportamento Aplicada)</strong>. Esse leque me permite navegar desde as dores mais abstratas da perda de sentido de vida até questões pragmáticas de organização cotidiana, estresse ocupacional e esgotamento profissional (Burnout).
              </p>
              <p>
                A opção pela terapia 100% online veio para quebrar fronteiras geográficas. Meu objetivo é proporcionar um refúgio seguro de tranquilidade, carinho e competência técnica a brasileiros em qualquer canto do Brasil ou do mundo, oferecendo sessões leves, profundas e repletas de sentido.
              </p>
            </div>

            {/* List of credentials */}
            <div className="mt-8 pt-8 border-t border-border-subtle/30 grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-title text-sm font-medium">Abordagem Humanista</p>
                  <p className="text-xs text-text-body">Escuta empática incondicional</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-title text-sm font-medium">Especialização em ABA</p>
                  <p className="text-xs text-text-body">Ações práticas comportamentais</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-title text-sm font-medium">Gestão de Pessoas</p>
                  <p className="text-xs text-text-body">Carreira, liderança e Burnout</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-title text-sm font-medium">CRP Ativo (07/34923)</p>
                  <p className="text-xs text-text-body">Garantia de conduta ética</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section 
        id="depoimentos"
        className="py-24 md:py-32 bg-bg-tertiary border-y border-border-subtle/50 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Depoimentos</p>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-text-title mb-6">
              Relatos de quem encontrou novos caminhos
            </h2>
            <div className="w-12 h-[2px] bg-brand-accent/60 rounded" />
            <p className="text-text-body text-sm md:text-base mt-6">
              A maior validação do meu trabalho é ver meus pacientes retomando as rédeas de suas histórias com mais leveza e presença.
            </p>
          </div>

          {/* Testimonial Active Display Card */}
          <div className="max-w-4xl mx-auto relative px-4 md:px-8">
            
            {/* Visual indicators */}
            <div className="absolute top-0 left-0 text-7xl font-serif text-brand-accent/10 pointer-events-none select-none">“</div>
            
            <div className="relative glass-card rounded-2xl p-8 md:p-12 border border-border-subtle/30 shadow-xl">
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-text-title text-base md:text-lg leading-relaxed italic mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeTestimonial].avatarUrl} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-12 h-12 rounded-full object-cover border border-brand-accent/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-text-title font-medium text-sm md:text-base">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-text-body text-xs mt-0.5">
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].city}
                  </p>
                </div>
              </div>

            </div>

            {/* Manual controls dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? "bg-brand-accent w-8" 
                      : "bg-border-subtle/60 hover:bg-border-subtle"
                  }`}
                  aria-label={`Visualizar depoimento ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SCHEDULING FORM SECTION */}
      <section 
        id="agendar"
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 z-10 relative"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informational Column */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Agende sua Sessão</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-text-title mb-6">
              Dê o primeiro passo para resgatar sua essência.
            </h2>
            <div className="w-12 h-[2px] bg-brand-accent/60 rounded mb-8" />
            
            <p className="text-text-body text-sm md:text-base leading-relaxed mb-8">
              Preencha os campos ao lado com as suas preferências. Esse formulário me ajudará a entender melhor as suas demandas e preparar uma recepção acolhedora e personalizada. Se preferir atendimento imediato via chat, você também pode usar o redirecionamento para o WhatsApp após preencher!
            </p>

            {/* Interactive guidelines cards */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 p-4 rounded-xl bg-bg-secondary/40 border border-border-subtle/30">
                <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-text-title text-sm font-medium">Sessões de 50 minutos</h4>
                  <p className="text-xs text-text-body mt-0.5">Tempo ideal estruturado para escuta profunda e reflexões pontuais.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-bg-secondary/40 border border-border-subtle/30">
                <Shield className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-text-title text-sm font-medium">Plataforma Criptografada</h4>
                  <p className="text-xs text-text-body mt-0.5">Atendimento em conformidade absoluta com as diretrizes do CFP.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-bg-secondary/40 border border-border-subtle/30">
                <Laptop className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-text-title text-sm font-medium">Sem Instalação Necessária</h4>
                  <p className="text-xs text-text-body mt-0.5">As videochamadas ocorrem direto no seu navegador com um clique.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl glass-card p-6 md:p-10 border border-border-subtle/30 shadow-xl relative">
              
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-accent/80" /> Nome Completo
                      </label>
                      <input 
                        type="text" 
                        id="form-name"
                        required
                        placeholder="Ex: João Silva"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title placeholder-text-body/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-brand-accent/80" /> E-mail de Contato
                      </label>
                      <input 
                        type="email" 
                        id="form-email"
                        required
                        placeholder="Ex: joao@email.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title placeholder-text-body/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone/Whatsapp input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-phone" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-brand-accent/80" /> WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        id="form-phone"
                        required
                        placeholder="Ex: (54) 99999-9999"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title placeholder-text-body/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
                      />
                    </div>

                    {/* Age bracket */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-age" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                        Faixa Etária
                      </label>
                      <select 
                        id="form-age"
                        required
                        value={formAge}
                        onChange={(e) => setFormAge(e.target.value)}
                        className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
                      >
                        <option value="" disabled className="text-text-body/50 bg-bg-primary">Selecione sua faixa etária</option>
                        <option value="adolescente" className="bg-bg-primary">Adolescente (12 a 17 anos)</option>
                        <option value="jovem" className="bg-bg-primary">Jovem Adulto (18 a 25 anos)</option>
                        <option value="adulto" className="bg-bg-primary">Adulto (26 a 59 anos)</option>
                        <option value="idoso" className="bg-bg-primary">Idoso (60 anos ou mais)</option>
                      </select>
                    </div>
                  </div>

                  {/* Focus area */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-focus" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                      O que mais aflige você hoje?
                    </label>
                    <select 
                      id="form-focus"
                      required
                      value={formFocus}
                      onChange={(e) => setFormFocus(e.target.value)}
                      className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
                    >
                      <option value="" disabled className="text-text-body/50 bg-bg-primary">Selecione a área principal de conflito</option>
                      <option value="Ansiedade e Estresse" className="bg-bg-primary">Ansiedade, Angústia ou Estresse Crônico</option>
                      <option value="Burnout e Carreira" className="bg-bg-primary">Estresse de Carreira e Síndrome de Burnout</option>
                      <option value="Crise Existencial" className="bg-bg-primary">Crise Existencial e Perda de Sentido de Vida</option>
                      <option value="Transições e Luto" className="bg-bg-primary">Transição de Ciclo de Vida ou Luto</option>
                      <option value="Autoestima" className="bg-bg-primary">Dificuldade com Autoestima e Escolhas</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-msg" className="text-xs font-mono uppercase tracking-wider text-text-body flex items-center gap-1">
                      Mensagem / Contexto (Opcional)
                    </label>
                    <textarea 
                      id="form-msg"
                      rows={4}
                      placeholder="Fique à vontade para escrever brevemente o que você gostaria de tratar nas sessões..."
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      className="w-full bg-white/50 border border-border-subtle focus:border-brand-accent rounded-lg p-3.5 text-sm text-text-title placeholder-text-body/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold tracking-wide text-sm hover:bg-brand-accent-hover active:scale-[0.98] transition-all duration-300 disabled:opacity-50 shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processando solicitação...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Solicitar Conversa Inicial
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-text-body/80 leading-snug">
                    Seus dados estão protegidos sob sigilo ético absoluto e não serão repassados a terceiros sob nenhuma hipótese.
                  </p>
                </form>
              ) : (
                /* Success screen */
                <div className="py-8 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                  </div>
                  
                  <h3 className="font-display text-2xl text-text-title font-normal mb-4">Solicitação recebida com sucesso!</h3>
                  <p className="text-text-body text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Olá, <strong>{formName}</strong>. Guardei seus dados no meu painel de acolhimento. Em breve, entrarei em contato via WhatsApp para fecharmos o melhor horário para você.
                  </p>

                  <div className="bg-bg-primary/50 border border-border-subtle/30 p-5 rounded-xl text-left max-w-md w-full mb-8">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-brand-accent mb-2">Opção de atendimento prioritário</p>
                    <p className="text-xs text-text-body leading-relaxed mb-4">
                      Se você quer agilizar e iniciar o seu agendamento imediatamente via WhatsApp, clique no botão de redirecionamento prioritário abaixo:
                    </p>
                    
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider hover:brightness-105 active:scale-[0.98] transition-all duration-300"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      Iniciar Conversa Prioritária
                    </a>
                  </div>

                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormName("");
                      setFormEmail("");
                      setFormPhone("");
                      setFormAge("");
                      setFormFocus("");
                      setFormMsg("");
                    }}
                    className="text-xs text-text-body hover:text-text-title transition-colors"
                  >
                    Preencher um novo formulário
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* POLISHED FAQ ACCORDION SECTION */}
      <section 
        id="faq"
        className="py-24 md:py-32 bg-bg-secondary border-y border-border-subtle/50 z-10 relative"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">Dúvidas Frequentes</p>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-text-title mb-6">
              Esclareça suas dúvidas sobre a psicoterapia
            </h2>
            <div className="w-12 h-[2px] bg-brand-accent/60 rounded" />
            <p className="text-text-body text-sm mt-6">
              Transparência e clareza técnica são pilares da minha conduta clínica. Se a sua dúvida não estiver listada abaixo, sinta-se à vontade para me perguntar.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = expandedFaq === item.id;
              return (
                <div 
                  key={item.id}
                  className="rounded-xl border border-border-subtle/30 bg-bg-primary/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <span className="font-display text-sm md:text-base text-text-title font-medium pr-4">
                      {item.question}
                    </span>
                    <span className="p-1 rounded bg-bg-secondary border border-border-subtle/30 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand-accent" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-text-body/70" />
                      )}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-text-body text-xs md:text-sm leading-relaxed border-t border-border-subtle/20 pt-4 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg-secondary text-text-body text-xs py-16 border-t border-border-subtle/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
            
            {/* Column 1 - Logo & Identification */}
            <div className="md:col-span-6 flex flex-col items-start">
              <span className="font-display text-base text-text-title font-semibold tracking-wide">
                Laura Barbizan Barichello
              </span>
              <p className="font-mono text-[9px] uppercase tracking-wider text-brand-accent/90 mt-1">
                Psicóloga Clínica • CRP 07/34923
              </p>
              <p className="text-text-body text-xs mt-4 max-w-sm leading-relaxed">
                Terapia online humanizada, existencial e integrativa para pessoas de todas as idades ao redor do mundo. Sigilo profissional e competência garantidos pelas normas éticas.
              </p>
            </div>

            {/* Column 2 - Links */}
            <div className="md:col-span-3">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-text-title font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2.5">
                <li><a href="#inicio" className="hover:text-brand-accent transition-colors">Início</a></li>
                <li><a href="#diferenciais" className="hover:text-brand-accent transition-colors">Diferenciais</a></li>
                <li><a href="#filosofia" className="hover:text-brand-accent transition-colors">Espaço de Reflexão</a></li>
                <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre Mim</a></li>
                <li><a href="#depoimentos" className="hover:text-brand-accent transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            {/* Column 3 - Contact details */}
            <div className="md:col-span-3">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-text-title font-semibold mb-4">Atendimento</h4>
              <p className="text-text-body mb-2 flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-brand-accent/80" /> 100% Online (Vídeo)
              </p>
              <p className="text-text-body mb-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-accent/80" /> Seg à Sex: 08h às 20h
              </p>
              <p className="text-text-body flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-accent/80" /> Atendimento sem barreiras
              </p>
            </div>

          </div>

          {/* Legal disclosures & CFP/CRP instructions */}
          <div className="border-t border-border-subtle/50 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* CFP Warning mandatory */}
            <div className="max-w-2xl">
              <p className="text-[10px] text-text-body/60 leading-relaxed mb-1">
                IMPORTANTE: Este site não presta serviços de urgência ou emergência. Caso você esteja passando por uma crise grave, risco de automutilação ou ideação suicida imediata, entre em contato imediatamente com o Centro de Valorização da Vida (CVV) ligando para o número 188 (Brasil), ou procure o serviço de emergência de saúde mental mais próximo.
              </p>
              <p className="text-[10px] text-text-body/60 leading-relaxed">
                Laura Barbizan Barichello - CRP 07/34923. Registro profissional ativo e consultável junto ao Conselho Regional de Psicologia da 7ª Região.
              </p>
            </div>

            {/* Copyright */}
            <div className="shrink-0 text-right">
              <p className="text-[11px] text-text-title font-mono">
                &copy; {new Date().getFullYear()} Laura Barbizan Barichello
              </p>
              <p className="text-[9px] text-text-body/50 mt-1 uppercase tracking-widest">
                Todos os direitos reservados
              </p>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
