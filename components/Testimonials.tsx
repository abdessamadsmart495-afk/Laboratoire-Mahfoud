import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ContentStrings } from '../types';
import { Reveal } from './Reveal';

interface TestimonialsProps {
  text: ContentStrings;
}

const Testimonials: React.FC<TestimonialsProps> = ({ text }) => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <h2 className="text-3xl font-extrabold text-center text-medical-secondary mb-16">
            {text.testimonials.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {text.testimonials.reviews.map((review, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-gray-50 p-8 rounded-3xl relative">
                <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.stars)].map((_, idx) => (
                    <Star key={idx} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic relative z-10">
                  "{review.text}"
                </p>
                <div className="font-bold text-medical-secondary">
                  {review.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;