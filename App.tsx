
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import SummaryPanel from './components/SummaryPanel';
import MainContentPanel from './components/MainContentPanel';
import { Language, CVData } from './types';
import { sampleCVData } from './constants/data';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.KO);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [cvData, setCvData] = useState<CVData>(sampleCVData); // In a real app, this might be fetched

  // Effect to set document language for accessibility
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  
  const navbarHeight = "pt-20 md:pt-24"; 

  const handleOpenContactModal = () => setIsContactModalOpen(true);
  const handleCloseContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        // onContactClick prop removed from Navbar
        cvName={cvData.name}
      />
      <main className={`container mx-auto px-4 py-8 ${navbarHeight} `}>
        <div className="md:flex md:space-x-8">
          {/* Left Column (Summary) - 30% width on medium screens and up */}
          <div className="md:w-3/10 mb-8 md:mb-0">
            <SummaryPanel 
              data={cvData} 
              currentLanguage={currentLanguage} 
              onContactButtonClick={handleOpenContactModal} // Pass handler to SummaryPanel
            />
          </div>

          {/* Right Column (Main Content) - 70% width on medium screens and up */}
          <div className="md:w-7/10">
            <MainContentPanel data={cvData} currentLanguage={currentLanguage} />
          </div>
        </div>
      </main>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        currentLanguage={currentLanguage}
      />
      
      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-200 mt-12">
        &copy; {new Date().getFullYear()} {cvData.name[currentLanguage]}. {currentLanguage === Language.KO ? "모든 권리 보유." : "All rights reserved."}
      </footer>
    </div>
  );
};

export default App;
