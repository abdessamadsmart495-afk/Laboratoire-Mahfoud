import React from 'react';
import { ArrowRight, CheckCircle2, Phone, FileText } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { Reveal } from './Reveal';

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
            
            {/* CTA Section - Simplified per requirements */}
            <Reveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                
                {/* 1. Phone Call (Green) */}
                <a 
                  href="tel:0528820210"
                  className="group relative flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-medical-secondary shadow-lg hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {text.hero.ctaPhone}
                </a>
                
                {/* 2. Results (White/Border) */}
                <a 
                  href="#portal" 
                  className="flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-base font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-medical-primary hover:text-medical-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full sm:w-auto"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {text.hero.ctaResults}
                </a>
              </div>
            </Reveal>

          </div>

          <Reveal delay={300} className="hidden lg:flex relative lg:h-[600px] items-center justify-center perspective-1000">
             {/* 3D-ish Card effect */}
             <div className="relative w-full aspect-square max-w-lg group">
                <div className="absolute inset-0 bg-medical-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
                
                <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl border-4 border-white/50 overflow-hidden transform transition-all duration-700 ease-out hover:rotate-1 hover:scale-[1.01]">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Laboratoire Mahfoud Equipment" 
                    className="rounded-[1.5rem] object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
             </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};

export default Hero;