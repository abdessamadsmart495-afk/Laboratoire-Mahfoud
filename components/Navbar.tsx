import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Globe } from 'lucide-react';
import { Language, ContentStrings } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentStrings;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);

  const languages = [
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'AR', label: 'العربية', flag: '🇲🇦' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            {/* USER: Please right-click the logo on the old site, copy image address, and paste it here if this link breaks */}
            <img 
              src="https://www.laboratoiremahfoud.com/img/logo.png" 
              alt="Laboratoire Mahfoud Logo" 
              className="h-10 w-auto object-contain md:h-16 max-w-[180px] md:max-w-xs transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-logo');
              }}
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-bold text-medical-secondary leading-tight">
                Laboratoire Mahfoud
              </span>
              <span className="text-xs text-medical-primary font-medium flex items-center gap-1">
                <Award size={12} /> NM ISO 15189:2023
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {['home', 'services', 'about'].map((item) => (
               <a 
                 key={item}
                 href={`#${item}`} 
                 className="text-gray-600 hover:text-medical-primary font-medium transition-colors hover:-translate-y-0.5 inline-block"
               >
                 {text.nav[item as keyof typeof text.nav]}
               </a>
            ))}
            
            <a href="#portal" className="px-5 py-2.5 rounded-full bg-medical-50 text-medical-primary font-bold hover:bg-medical-primary hover:text-white transition-all hover:shadow-md hover:-translate-y-0.5 border border-medical-primary whitespace-nowrap">
              {text.nav.results}
            </a>
            
            {/* Desktop Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-medical-primary font-semibold border border-gray-200 px-3 py-2 rounded-xl transition-all hover:shadow-sm"
              >
                <Globe size={18} />
                <span>{currentLang.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${lang === l.code ? 'text-medical-primary font-bold bg-medical-50/50' : 'text-gray-700'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg leading-none">{l.flag}</span>
                        <span>{l.label}</span>
                      </div>
                      {lang === l.code && <div className="w-2 h-2 rounded-full bg-medical-primary"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
             
             {/* Mobile Language Dropdown (Simplified) */}
             <div className="relative" ref={langMenuRef}>
               <button 
                 onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                 className="flex items-center gap-1.5 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                 aria-label="Select Language"
               >
                 <Globe size={20} />
                 <span className="text-sm font-bold">{currentLang.code}</span>
                 <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
               </button>

                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as Language);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${lang === l.code ? 'bg-medical-50 text-medical-primary font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                         <span className="text-lg leading-none">{l.flag}</span>
                         <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
             </div>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {['home', 'services', 'about'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {text.nav[item as keyof typeof text.nav]}
            </a>
          ))}
          <a href="#portal" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-medium text-medical-primary bg-medical-50 border border-medical-100">
            {text.nav.results}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;