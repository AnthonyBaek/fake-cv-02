
import React from 'react';
import { Language, LocalizedString } from '../types';
import { NAV_ITEMS } from '../constants/data';
// Removed KoreanFlagIcon and USFlagIcon imports

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  cvName: LocalizedString;
}

const Navbar: React.FC<NavbarProps> = ({ currentLanguage, onLanguageChange, cvName }) => {
  const handleTitleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-800 text-slate-100 shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <a 
          href="#" 
          onClick={handleTitleClick}
          className="text-xl md:text-2xl font-bold hover:text-sky-400 transition-colors"
          aria-label={currentLanguage === Language.KO ? "페이지 상단으로 이동" : "Scroll to top"}
        >
          {cvName[currentLanguage]}
        </a>
        <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          <div className="hidden md:flex space-x-1"> {/* Reduced space for potentially more items */}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.title[currentLanguage]}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLanguageChange(Language.KO)}
              className={`px-3 py-1 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-400 ${
                currentLanguage === Language.KO
                  ? 'text-sky-300 font-semibold'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
              aria-label="한국어로 변경"
              aria-pressed={currentLanguage === Language.KO}
            >
              KOR
            </button>
            <button
              onClick={() => onLanguageChange(Language.EN)}
              className={`px-3 py-1 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-400 ${
                currentLanguage === Language.EN
                  ? 'text-sky-300 font-semibold'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
              aria-label="Switch to English"
              aria-pressed={currentLanguage === Language.EN}
            >
              ENG
            </button>
          </div>
          {/* Mobile menu button could be added here if needed for more items */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
