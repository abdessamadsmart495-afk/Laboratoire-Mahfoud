import React from 'react';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { Reveal } from './Reveal';
import { Counter } from './Counter';

interface HeroProps {
  text: ContentStrings;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ text, lang }) => {
  const isRTL = lang === 'AR';

  return (
    <div id="home" className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background - Clean Medical Aesthetic */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-[2000ms]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`space-y-8 ${isRTL ? 'lg:order-last' : ''}`}>
            
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-50 text-medical-primary border border-medical-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle2 size={16} />
                <span className="text-sm font-semibold">{text.hero.badge}</span>
              </div>
            </Reveal>
            
            <Reveal delay={50}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-medical-secondary leading-[1.15] tracking-tight">
                {text.hero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                {text.hero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Primary Button: Solid Green */}
                <a href="#portal" className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-medical-primary shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="relative flex items-center gap-2">
                    {text.hero.ctaPrimary}
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </span>
                </a>
                
                {/* Secondary Button: White with Green Border */}
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-medical-primary text-base font-bold rounded-xl text-medical-primary bg-white hover:bg-medical-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {text.hero.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
                <div>
                  <p className="text-3xl font-bold text-medical-primary flex items-baseline">
                    <Counter end={22} suffix="+" />
                  </p>
                  <p className="text-sm text-gray-500 font-medium mt-1">{text.stats.experience}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-medical-primary">24/7</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">{text.stats.available}</p>
                </div>
                 <div>
                  <p className="text-3xl font-bold text-medical-primary">ISO</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">15189</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
             {/* 3D-ish Card effect */}
             <div className="relative w-full aspect-square max-w-lg group">
                <div className="absolute inset-0 bg-medical-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
                
                {/* Image Container with hover tilt */}
                <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl border-4 border-white/50 overflow-hidden transform transition-all duration-700 ease-out hover:rotate-1 hover:scale-[1.01]">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Laboratoire Mahfoud Equipment" 
                    className="rounded-[1.5rem] object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Doctor Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-green-100 rounded-full text-medical-primary shadow-inner">
                         <Activity size={24} />
                       </div>
                       <div>
                         <p className="font-bold text-medical-secondary text-lg">Dr. Samir Mahfoud</p>
                         <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">UCL Belgium Graduate</p>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};

export default Hero;