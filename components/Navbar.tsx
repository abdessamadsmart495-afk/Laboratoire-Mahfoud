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
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
            <a href="#home" className="text-gray-600 hover:text-medical-primary font-medium transition-colors">{text.nav.home}</a>
            <a href="#services" className="text-gray-600 hover:text-medical-primary font-medium transition-colors">{text.nav.services}</a>
            <a href="#about" className="text-gray-600 hover:text-medical-primary font-medium transition-colors">{text.nav.about}</a>
            <a href="#portal" className="px-4 py-2 rounded-full bg-medical-50 text-medical-700 font-semibold hover:bg-medical-100 transition-colors">
              {text.nav.results}
            </a>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-medical-primary font-semibold border px-3 py-1 rounded-md">
                {lang} <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 border border-gray-100 hidden group-hover:block animate-fade-in">
                {(['FR', 'AR', 'EN'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${lang === l ? 'bg-medical-50 text-medical-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {l === 'AR' ? 'العربية' : l === 'FR' ? 'Français' : 'English'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{text.nav.home}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">{text.nav.services}</a>
            <a href="#portal" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-medical-700 bg-medical-50">{text.nav.results}</a>
            
            <div className="mt-4 flex gap-2 justify-center border-t pt-4">
               {(['FR', 'AR', 'EN'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsOpen(false); }}
                    className={`px-4 py-2 rounded-md text-sm font-bold border ${lang === l ? 'bg-medical-primary text-white border-medical-primary' : 'bg-white text-gray-600 border-gray-200'}`}
                  >
                    {l}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;