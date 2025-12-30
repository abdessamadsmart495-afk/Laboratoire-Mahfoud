import React from 'react';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';
import { ContentStrings } from '../types';

interface TrustProps {
  text: ContentStrings;
}

const Trust: React.FC<TrustProps> = ({ text }) => {
  return (
    <div className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ISO Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl flex-shrink-0">
               <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{text.trust.isoTitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{text.trust.isoDesc}</p>
              <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold border border-emerald-100">
                NM ISO 15189:2023
              </div>
            </div>
          </div>

          {/* Doctor Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-start">
             <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl flex-shrink-0">
               <GraduationCap size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{text.trust.doctorTitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{text.trust.doctorDesc}</p>
              <div className="flex flex-wrap gap-2">
                 <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-bold">UCL Belgium</span>
                 <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-bold">Since 2002</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trust;