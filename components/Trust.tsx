import React from 'react';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';
import { ContentStrings } from '../types';
import { Reveal } from './Reveal';

interface TrustProps {
  text: ContentStrings;
}

const Trust: React.FC<TrustProps> = ({ text }) => {
  return (
    <div className="bg-white py-24 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ISO Section */}
          <Reveal delay={0}>
            <div className="h-full bg-gradient-to-br from-gray-50 to-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-emerald-200 transition-colors duration-500 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg">
              <div className="p-5 bg-emerald-100 text-emerald-600 rounded-2xl flex-shrink-0 transform transition-transform hover:scale-110 hover:rotate-6">
                 <ShieldCheck size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{text.trust.isoTitle}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{text.trust.isoDesc}</p>
                <div className="inline-flex items-center gap-2 bg-white text-emerald-700 px-5 py-2 rounded-full text-sm font-bold border border-emerald-100 shadow-sm">
                  <Award size={16} /> NM ISO 15189:2023
                </div>
              </div>
            </div>
          </Reveal>

          {/* Doctor Section */}
          <Reveal delay={200}>
            <div className="h-full bg-gradient-to-br from-blue-50 to-white p-10 rounded-[2.5rem] border border-blue-100 hover:border-blue-200 transition-colors duration-500 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg">
               <div className="p-5 bg-blue-100 text-blue-600 rounded-2xl flex-shrink-0 transform transition-transform hover:scale-110 hover:rotate-[-6deg]">
                 <GraduationCap size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{text.trust.doctorTitle}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{text.trust.doctorDesc}</p>
                <div className="flex flex-wrap gap-3">
                   <span className="bg-white text-blue-700 px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm border border-blue-100">UCL Belgium</span>
                   <span className="bg-white text-blue-700 px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm border border-blue-100">Since 2002</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
};

export default Trust;