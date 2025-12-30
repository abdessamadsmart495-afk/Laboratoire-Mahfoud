import React from 'react';
import { FileText, Lock, User, ArrowRight } from 'lucide-react';
import { ContentStrings, Language } from '../types';

interface PortalProps {
  text: ContentStrings;
  lang: Language;
}

const ResultsPortal: React.FC<PortalProps> = ({ text, lang }) => {
  const isRTL = lang === 'AR';

  return (
    <div id="portal" className="bg-medical-50 py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-medical-primary font-semibold shadow-sm mb-6">
              <Lock size={16} />
              <span className="text-sm">SSL Secure Connection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {text.portal.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {text.portal.desc}
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">PDF Reports</h4>
                <p className="text-sm text-gray-500">Download high-quality PDF reports verified by Dr. Mahfoud.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 max-w-md mx-auto w-full">
             <div className="text-center mb-8">
               <div className="w-16 h-16 bg-medical-50 rounded-full flex items-center justify-center mx-auto mb-4 text-medical-primary">
                 <User size={32} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">{text.nav.results}</h3>
             </div>
             
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">{text.portal.loginPlaceholder}</label>
                 <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all outline-none rtl:text-right"
                    placeholder="12345678"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">{text.portal.passPlaceholder}</label>
                 <input 
                    type="password" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all outline-none rtl:text-right"
                    placeholder="••••••••"
                 />
               </div>
               <button className="w-full bg-medical-primary text-white font-bold py-4 rounded-xl hover:bg-medical-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                 {text.portal.button}
                 <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
               </button>
             </form>
             
             <div className="mt-6 text-center">
               <a href="#contact" className="text-sm text-gray-500 hover:text-medical-primary underline">
                 {text.portal.help}
               </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResultsPortal;