import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { ContentStrings, Language } from '../types';

interface FooterProps {
  text: ContentStrings;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ text, lang }) => {
  const isRTL = lang === 'AR';

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Laboratoire Mahfoud</h3>
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin className="flex-shrink-0 mt-1" size={20} />
              <p className="leading-relaxed">{text.footer.address}</p>
            </div>
             <div className="flex items-center gap-4 text-gray-300">
              <Phone className="flex-shrink-0" size={20} />
              <p dir="ltr" className={isRTL ? "text-right" : "text-left"}>0528 82 02 10</p>
            </div>
             <div className="flex items-center gap-4 text-gray-300">
              <Clock className="flex-shrink-0" size={20} />
              <p>{text.footer.hours}</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="md:col-span-2 h-64 rounded-2xl overflow-hidden bg-slate-800 relative group">
            {/* Emulating a map with an image */}
            <img 
              src="https://picsum.photos/800/400?grayscale&blur=2" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <a 
                 href="https://maps.google.com/?q=Laboratoire+Mahfoud+Agadir" 
                 target="_blank" 
                 rel="noreferrer"
                 className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-medical-50 transition-colors flex items-center gap-2"
               >
                 <MapPin size={18} className="text-red-500" />
                 Open in Google Maps
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{text.footer.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;