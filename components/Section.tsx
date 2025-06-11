
import React from 'react';
import { LocalizedString, Language } from '../types';

interface SectionProps {
  id: string;
  title: LocalizedString;
  currentLanguage: Language;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, currentLanguage, icon: Icon, children, className = "" }) => {
  return (
    <section id={id} className={`py-8 md:py-12 bg-white rounded-xl shadow-lg mb-8 md:mb-12 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-6 md:mb-8 flex items-center">
          {Icon && <Icon className="w-7 h-7 mr-3 text-sky-600" />}
          {title[currentLanguage]}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;