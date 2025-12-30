import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Globe } from 'lucide-react';
import { Language, ContentStrings } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentStrings;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, text }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Separate states for desktop and mobile language dropdowns
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  // Separate refs to ensure click-outside logic works for both independently
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // Handle Desktop Logic
      if (desktopLangRef.current && !desktopLangRef.current.contains(target)) {
        setIsDesktopLangOpen(false);
      }
      
      // Handle Mobile Logic
      if (mobileLangRef.current && !mobileLangRef.current.contains(target)) {
        setIsMobileLangOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'AR', label: 'العربية', flag: '🇲🇦' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  const navLinks = [
    { key: 'home', label: text.nav.home },
    { key: 'services', label: text.nav.services },
    { key: 'contact', label: text.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section - Cleaned up: Image + Badge Only */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <img 
              src="https://www.laboratoiremahfoud.com/assets/images/logo.png" 
              alt="Laboratoire Mahfoud Logo" 
              className="h-10 w-auto object-contain md:h-12 max-w-[150px] transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-logo');
              }}
            />
            {/* ISO Badge - Compact */}
            <div className="flex flex-col justify-center border-l border-gray-200 pl-3 ml-1 h-8">
              <span className="text-[10px] md:text-xs text-medical-primary font-bold flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
                <Award size={14} className="text-medical-500" />
                NM ISO 15189
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            {navLinks.map((item) => (
               <a 
                 key={item.key}
                 href={`#${item.key}`} 
                 className="text-gray-600 hover:text-medical-primary font-medium text-sm lg:text-base transition-colors hover:-translate-y-0.5 inline-block"
               >
                 {item.label}
               </a>
            ))}
            
            <a href="#portal" className="px-4 py-2 rounded-full bg-medical-50 text-medical-primary text-sm font-bold hover:bg-medical-primary hover:text-white transition-all hover:shadow-md hover:-translate-y-0.5 border border-medical-primary whitespace-nowrap">
              {text.nav.results}
            </a>
            
            {/* Desktop Language Switcher (ID: lang-switch-desktop) */}
            <div className="relative" ref={desktopLangRef} id="lang-switch-desktop">
              <button 
                onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-medical-primary font-semibold border border-gray-200 px-3 py-2 rounded-xl transition-all hover:shadow-sm"
              >
                <Globe size={18} />
                <span className="text-sm">{currentLang.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDesktopLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDesktopLangOpen && (
                <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-[60]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setIsDesktopLangOpen(false);
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
          <div className="md:hidden flex items-center gap-2">
             
             {/* Mobile Language Dropdown (ID: lang-switch-mobile) */}
             <div className="relative" ref={mobileLangRef} id="lang-switch-mobile">
               <button 
                 onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                 className="flex items-center gap-1.5 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                 aria-label="Select Language"
               >
                 <Globe size={18} />
                 <span className="text-xs font-bold">{currentLang.code}</span>
                 <ChevronDown size={12} className={`transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
               </button>

                {isMobileLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-[60]">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as Language);
                          setIsMobileLangOpen(false);
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

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((item) => (
            <a 
              key={item.key}
              href={`#${item.key}`} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#portal" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-medium text-medical-primary bg-medical-50 border border-medical-100">
            {text.nav.results}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;