import React from 'react';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { ContentStrings, Language } from '../types';

interface HeroProps {
  text: ContentStrings;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ text, lang }) => {
  const isRTL = lang === 'AR';

  return (
    <div id="home" className="relative bg-gradient-to-br from-medical-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-100/50 skew-x-12 transform translate-x-20 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`space-y-8 ${isRTL ? 'lg:order-last' : ''}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 animate-fade-in-up">
              <CheckCircle2 size={16} />
              <span className="text-sm font-semibold">{text.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {text.hero.title.split(':')[0]}
              <span className="block text-medical-primary mt-2">
                 {text.hero.title.split(':')[1] ? text.hero.title.split(':')[1] : ''}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {text.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#portal" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-medical-primary hover:bg-medical-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {text.hero.ctaPrimary}
                <ArrowRight className={`ml-2 w-5 h-5 ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-medical-100 text-base font-bold rounded-xl text-medical-700 bg-white hover:bg-medical-50 transition-all duration-300">
                {text.hero.ctaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
              <div>
                <p className="text-3xl font-bold text-medical-primary">20+</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{text.stats.experience}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-medical-primary">24/7</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{text.stats.available}</p>
              </div>
               <div>
                <p className="text-3xl font-bold text-medical-primary">ISO</p>
                <p className="text-sm text-gray-500 font-medium mt-1">15189:2023</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
             {/* Abstract medical shapes */}
             <div className="relative w-full aspect-square max-w-lg">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl border-4 border-white/50 overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <img 
                    src="https://picsum.photos/600/600?grayscale" 
                    alt="Lab Equipment" 
                    className="rounded-2xl object-cover w-full h-full"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-green-100 rounded-full text-green-600">
                         <Activity size={20} />
                       </div>
                       <div>
                         <p className="font-bold text-gray-900">Dr. Samir Mahfoud</p>
                         <p className="text-xs text-gray-500">UCL Belgium Graduate</p>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;