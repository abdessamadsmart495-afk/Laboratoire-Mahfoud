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

  // Handle Direction Change
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
    
    // Switch font
    if (isRTL) {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
      document.body.classList.add('font-sans');
    }
  }, [lang, isRTL]);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'font-cairo' : 'font-sans'}`}>
      
      {/* Top Bar - Brand Green */}
      <div className="bg-medical-primary text-white py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>{text.topBar.urgency}</span>
             </div>
             <div className="hidden sm:block h-4 w-px bg-white/30"></div>
             <div className="flex items-center gap-1 opacity-90">
                <MapPin size={12} />
                <span>{text.topBar.location}</span>
             </div>
          </div>
          
          <div className="flex items-center gap-2 mt-1 sm:mt-0 hover:opacity-90 transition-opacity">
            <Phone size={14} />
            <a href={`tel:${text.topBar.phone.replace(/\s/g, '')}`} className="hover:underline font-bold tracking-wide">
              {text.topBar.phone}
            </a>
          </div>
        </div>
      </div>

      <Navbar lang={lang} setLang={handleLangChange} text={text} />
      
      {/* Main Content with Opacity Transition */}
      <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <main>
          <Hero text={text} lang={lang} />
          <Services text={text} />
          <Trust text={text} />
          <ResultsPortal text={text} lang={lang} />
        </main>
        <Footer text={text} lang={lang} />
      </div>

      {/* Floating WhatsApp Button - Official Green */}
      <a
        href="https://wa.me/212600000000" // Placeholder number
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-wiggle`}
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </a>

    </div>
  );
}

export default App;