import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ResultsPortal from './components/ResultsPortal';
import Trust from './components/Trust';
import Footer from './components/Footer';
import { TEXT_CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('FR'); // Default to French as it's common in Morocco business
  const text = TEXT_CONTENT[lang];
  const isRTL = lang === 'AR';

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
      
      {/* Top Bar - Urgency */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>{text.topBar.urgency}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <Phone size={14} />
            <a href={`tel:${text.topBar.phone.replace(/\s/g, '')}`} className="hover:underline font-bold tracking-wide">
              {text.topBar.phone}
            </a>
          </div>
        </div>
      </div>

      <Navbar lang={lang} setLang={setLang} text={text} />
      
      <main>
        <Hero text={text} lang={lang} />
        <Services text={text} />
        <Trust text={text} />
        <ResultsPortal text={text} lang={lang} />
      </main>

      <Footer text={text} lang={lang} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212600000000" // Placeholder number
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center`}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

    </div>
  );
}

export default App;