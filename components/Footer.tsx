import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { Reveal } from './Reveal';

interface FooterProps {
  text: ContentStrings;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ text, lang }) => {
  const isRTL = lang === 'AR';

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Contact Info */}
          <Reveal delay={0}>
            <div className="space-y-8">
              <div>
                 <h3 className="text-3xl font-bold text-white mb-2">Laboratoire Mahfoud</h3>
                 <p className="text-slate-400 text-sm">Excellence in medical diagnostics.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-300 group hover:text-white transition-colors">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-medical-primary transition-colors">
                    <MapPin className="flex-shrink-0" size={20} />
                  </div>
                  <p className="leading-relaxed mt-1">{text.footer.address}</p>
                </div>
                 <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                   <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-medical-primary transition-colors">
                    <Phone className="flex-shrink-0" size={20} />
                   </div>
                  <p dir="ltr" className={`mt-1 font-mono text-lg ${isRTL ? "text-right" : "text-left"}`}>0528 82 02 10</p>
                </div>
                 <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                   <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-medical-primary transition-colors">
                    <Clock className="flex-shrink-0" size={20} />
                   </div>
                  <p className="mt-1">{text.footer.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map Placeholder */}
          <Reveal delay={200} className="md:col-span-2">
            <div className="h-80 rounded-3xl overflow-hidden bg-slate-800 relative group border-2 border-slate-700 hover:border-slate-500 transition-colors">
              {/* Emulating a map with an image */}
              <img 
                src="https://picsum.photos/800/400?grayscale&blur=2" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <a 
                   href="https://maps.google.com/?q=Laboratoire+Mahfoud+Agadir" 
                   target="_blank" 
                   rel="noreferrer"
                   className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-medical-50 transition-all duration-300 transform hover:scale-110 flex items-center gap-3 group/btn"
                 >
                   <MapPin size={20} className="text-red-500 group-hover/btn:animate-bounce" />
                   Open in Google Maps
                 </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{text.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors hover:underline">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;