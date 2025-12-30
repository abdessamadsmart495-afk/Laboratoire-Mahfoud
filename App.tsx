import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ResultsPortal from './components/ResultsPortal';
import Trust from './components/Trust';
import Footer from './components/Footer';
import { TEXT_CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('FR'); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const text = TEXT_CONTENT[lang];
  const isRTL = lang === 'AR';

  const handleLangChange = (newLang: Language) => {
    if (newLang === lang) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(newLang);
      setIsTransitioning(false);
    }, 300); // Wait for fade out
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
    
    if (isRTL) {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
      document.body.classList.add('font-sans');
    }
  }, [lang, isRTL]);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'font-cairo' : 'font-sans'} overflow-x-hidden`}>
      
      {/* Top Bar */}
      <div className="bg-medical-primary text-white py-2 relative z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2 sm:gap-4">
             <div className="flex items-center gap-1.5 animate-pulse">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                <span className="truncate max-w-[150px] sm:max-w-none">{text.topBar.urgency} {text.topBar.phone}</span>
             </div>
             <div className="hidden sm:block h-4 w-px bg-white/30"></div>
             <div className="hidden sm:flex items-center gap-1 opacity-90">
                <MapPin size={12} />
                <span>{text.topBar.location}</span>
             </div>
          </div>
        </div>
      </div>

      <Navbar lang={lang} setLang={handleLangChange} text={text} />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <main>
          <Hero text={text} lang={lang} />
          <Services text={text} />
          <Trust text={text} />
          <ResultsPortal text={text} lang={lang} />
        </main>
        <Footer text={text} lang={lang} />
      </div>

      {/* Floating WhatsApp - Fixed Bottom Right */}
      <a
        href={`https://wa.me/212655209108?text=${encodeURIComponent(text.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-heartbeat group`}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        
        {/* Tooltip hint */}
        <span className={`absolute ${isRTL ? 'left-full ml-4' : 'right-full mr-4'} bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block`}>
          WhatsApp
        </span>
      </a>

    </div>
  );
}

export default App;