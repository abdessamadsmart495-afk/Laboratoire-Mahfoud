import React from 'react';
import { Award, ShieldCheck, GraduationCap, Clock, Lock } from 'lucide-react';
import { ContentStrings } from '../types';
import { Reveal } from './Reveal';

interface TrustProps {
  text: ContentStrings;
}

const Trust: React.FC<TrustProps> = ({ text }) => {
  const items = [
    {
        icon: <Clock size={32} />,
        title: text.trust.items.experience.title,
        desc: text.trust.items.experience.desc,
        bg: 'bg-blue-50',
        text: 'text-blue-600'
    },
    {
        icon: <Award size={32} />,
        title: text.trust.items.iso.title,
        desc: text.trust.items.iso.desc,
        bg: 'bg-green-50',
        text: 'text-green-600'
    },
    {
        icon: <Lock size={32} />,
        title: text.trust.items.confidentiality.title,
        desc: text.trust.items.confidentiality.desc,
        bg: 'bg-purple-50',
        text: 'text-purple-600'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: text.trust.items.precision.title,
        desc: text.trust.items.precision.desc,
        bg: 'bg-orange-50',
        text: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-gray-50/50 py-24 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-medical-secondary sm:text-4xl">
              {text.trust.title}
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              {text.trust.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
             <Reveal key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                   <div className={`p-4 rounded-2xl ${item.bg} ${item.text} mb-6`}>
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                   <p className="text-gray-600">{item.desc}</p>
                </div>
             </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Trust;