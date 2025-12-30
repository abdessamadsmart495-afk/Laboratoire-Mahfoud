import React from 'react';
import { Microscope, Baby, Home, Dna, ArrowRight } from 'lucide-react';
import { ContentStrings } from '../types';
import { Reveal } from './Reveal';

interface ServicesProps {
  text: ContentStrings;
}

const Services: React.FC<ServicesProps> = ({ text }) => {
  const services = [
    {
      id: 'bio',
      icon: <Microscope size={32} />,
      title: text.services.biology.title,
      desc: text.services.biology.desc,
      color: 'text-medical-primary',
      bg: 'bg-green-50',
      border: 'hover:border-medical-primary',
    },
    {
      id: 'ped',
      icon: <Baby size={32} />,
      title: text.services.pediatrics.title,
      desc: text.services.pediatrics.desc,
      color: 'text-medical-primary',
      bg: 'bg-green-50',
      border: 'hover:border-medical-primary',
    },
    {
      id: 'home',
      icon: <Home size={32} />,
      title: text.services.home.title,
      desc: text.services.home.desc,
      color: 'text-medical-primary',
      bg: 'bg-green-50',
      border: 'hover:border-medical-primary',
    },
    {
      id: 'fertility',
      icon: <Dna size={32} />, // Using DNA icon for FIV/ICSI
      title: text.services.fertility.title,
      desc: text.services.fertility.desc,
      color: 'text-medical-primary',
      bg: 'bg-green-50',
      border: 'hover:border-medical-primary',
    },
  ];

  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-medical-primary tracking-[0.2em] uppercase mb-3">
              {text.nav.services}
            </h2>
            <p className="text-3xl font-extrabold text-medical-secondary sm:text-5xl leading-tight mb-6">
              {text.services.title}
            </p>
            <p className="text-xl text-gray-500 leading-relaxed">
              {text.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 75}>
              <div className={`group h-full relative p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${service.border}`}>
                
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.bg} ${service.color} mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-medical-secondary mb-4 group-hover:text-medical-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-medical-primary">
                   <ArrowRight size={20} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;