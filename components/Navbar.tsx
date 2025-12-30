import React, { useState } from 'react';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import { Language, ContentStrings } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentStrings;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform duration-300 group-hover:rotate-6">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                Laboratoire Mahfoud
              </span>
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
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
            
            <a href="#portal" className="px-5 py-2.5 rounded-full bg-medical-50 text-medical-700 font-bold hover:bg-medical-100 transition-all hover:shadow-md hover:-translate-y-0.5">
              {text.nav.results}
            </a>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-medical-primary font-semibold border px-3 py-1.5 rounded-lg transition-colors">
                {lang} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                {(['FR', 'AR', 'EN'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-left rtl:text-right px-4 py-2.5 text-sm transition-colors ${lang === l ? 'bg-medical-50 text-medical-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {l === 'AR' ? 'العربية' : l === 'FR' ? 'Français' : 'English'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
          <a href="#portal" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-medium text-medical-700 bg-medical-50">
            {text.nav.results}
          </a>
          
          <div className="mt-6 flex gap-3 justify-center border-t pt-6">
             {(['FR', 'AR', 'EN'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsOpen(false); }}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${lang === l ? 'bg-medical-primary text-white border-medical-primary shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                >
                  {l}
                </button>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;