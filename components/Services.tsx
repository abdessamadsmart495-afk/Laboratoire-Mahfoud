import React from 'react';
import { Droplets, Activity, TestTube2, Baby, Microscope, ArrowRight } from 'lucide-react';
import { ContentStrings } from '../types';
import { Reveal } from './Reveal';

interface ServicesProps {
  text: ContentStrings;
}

const Services: React.FC<ServicesProps> = ({ text }) => {
  const services = [
    {
      id: 'blood',
      icon: <Droplets size={32} />,
      title: text.services.items.blood.title,
      desc: text.services.items.blood.desc,
    },
    {
      id: 'diabetes',
      icon: <Activity size={32} />,
      title: text.services.items.diabetes.title,
      desc: text.services.items.diabetes.desc,
    },
    {
      id: 'hormones',
      icon: <TestTube2 size={32} />,
      title: text.services.items.hormones.title,
      desc: text.services.items.hormones.desc,
    },
    {
      id: 'pregnancy',
      icon: <Baby size={32} />,
      title: text.services.items.pregnancy.title,
      desc: text.services.items.pregnancy.desc,
    },
    {
      id: 'covid',
      icon: <Microscope size={32} />,
      title: text.services.items.covid.title,
      desc: text.services.items.covid.desc,
    }
  ];

  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 50}>
              <div className="group h-full flex flex-col p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:border-medical-primary/30">
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-medical-50 text-medical-primary mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-medical-secondary mb-3 group-hover:text-medical-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-auto">
                  {service.desc}
                </p>

                <div className="mt-4 flex items-center text-medical-primary opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <ArrowRight size={16} />
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