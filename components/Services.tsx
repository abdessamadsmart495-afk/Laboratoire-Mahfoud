import React from 'react';
import { Microscope, Baby, Home, Building2 } from 'lucide-react';
import { ContentStrings } from '../types';

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
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'ped',
      icon: <Baby size={32} />,
      title: text.services.pediatrics.title,
      desc: text.services.pediatrics.desc,
      color: 'bg-pink-50 text-pink-500',
    },
    {
      id: 'home',
      icon: <Home size={32} />,
      title: text.services.home.title,
      desc: text.services.home.desc,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'corp',
      icon: <Building2 size={32} />,
      title: text.services.corporate.title,
      desc: text.services.corporate.desc,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-medical-primary tracking-wide uppercase">
            {text.nav.services}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {text.services.title}
          </p>
          <p className="mt-4 text-xl text-gray-500">
            {text.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`inline-flex items-center justify-center p-4 rounded-xl ${service.color} mb-6 transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-medical-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;