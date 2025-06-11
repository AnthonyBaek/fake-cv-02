
import React from 'react';
import { CVData, Language, LocalizedString } from '../types';
import { EmailIcon, PhoneIcon, LocationIcon, AcademicCapIcon, TrophyIcon, SparklesIcon, ChatBubbleLeftRightIcon } from '../constants/icons'; // Added ChatBubbleLeftRightIcon

interface SummaryPanelProps {
  data: CVData;
  currentLanguage: Language;
  onContactButtonClick: () => void; // New prop to handle contact button click
}

const InfoItem: React.FC<{ icon: React.FC<React.SVGProps<SVGSVGElement>>, text: string | LocalizedString, lang: Language, href?: string }> = ({ icon: Icon, text, lang, href }) => {
    const content = typeof text === 'string' ? text : text[lang];
    const Wrapper = href ? 'a' : 'div';
    const commonClasses = "flex items-center text-sm text-slate-600 mb-2";
    const interactiveClasses = href ? "hover:text-sky-600" : "";
    
    return (
        // Ensure that if Wrapper is 'a', target and rel are provided for external links.
        // For mailto and tel, target="_blank" is not strictly necessary but can be added.
        <Wrapper 
            href={href} 
            className={`${commonClasses} ${interactiveClasses}`}
            target={href && !href.startsWith('tel:') ? '_blank' : undefined}
            rel={href && !href.startsWith('tel:') ? 'noopener noreferrer' : undefined}
        >
            <Icon className="w-4 h-4 mr-2 text-sky-600 flex-shrink-0" />
            <span>{content}</span>
        </Wrapper>
    );
};


const SummaryPanel: React.FC<SummaryPanelProps> = ({ data, currentLanguage, onContactButtonClick }) => {
  const latestEducation = data.education.length > 0 ? data.education[0] : null;
  
  const contactButtonLabels: LocalizedString = {
    [Language.KO]: "연락하기",
    [Language.EN]: "Contact Me",
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg md:sticky md:top-24"> {/* md:top-24 to account for navbar height + padding */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={data.profilePictureUrl}
          alt={data.name[currentLanguage]}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-200 shadow-md mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">{data.name[currentLanguage]}</h1>
        <p className="text-sm md:text-base text-sky-700 text-center mt-1">{data.tagline[currentLanguage]}</p>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-3">
          {currentLanguage === Language.KO ? '연락처' : 'Contact'}
        </h3>
        <InfoItem icon={EmailIcon} text={data.contact.email} lang={currentLanguage} href={`mailto:${data.contact.email}`} />
        {/* Phone number is no longer a hyperlink */}
        {data.contact.phone && <InfoItem icon={PhoneIcon} text={data.contact.phone} lang={currentLanguage} />}
        <InfoItem icon={LocationIcon} text={data.contact.location} lang={currentLanguage} />
      </div>

      {latestEducation && (
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-3 flex items-center">
            <AcademicCapIcon className="w-5 h-5 mr-2 text-sky-600" />
            {currentLanguage === Language.KO ? '최종 학력' : 'Latest Education'}
          </h3>
          <p className="text-sm text-slate-600 font-medium">{latestEducation.degree[currentLanguage]}</p>
          <p className="text-xs text-slate-500">{latestEducation.institution[currentLanguage]}</p>
        </div>
      )}

      {data.summaryKeywords && data.summaryKeywords.length > 0 && (
         <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-3 flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2 text-sky-600" />
                {currentLanguage === Language.KO ? '주요 키워드' : 'Keywords'}
            </h3>
            <div className="flex flex-wrap gap-2">
            {data.summaryKeywords.map((keyword, index) => (
                <span key={index} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                {keyword[currentLanguage]}
                </span>
            ))}
            </div>
        </div>
      )}
      
      {data.awards && data.awards.length > 0 && (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-3 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-sky-600" />
                {currentLanguage === Language.KO ? '주요 자격증 요약' : 'Key Certificates'}
            </h3>
            <ul className="space-y-1">
            {data.awards.slice(0, 2).map((award, index) => ( // Show first 2 for summary
                <li key={index} className="text-sm text-slate-600">
                {award.name[currentLanguage]} ({award.issuer[currentLanguage]})
                </li>
            ))}
            </ul>
        </div>
      )}

       <div className="text-sm text-slate-500 mt-8 mb-4"> {/* Added margin bottom */}
          {currentLanguage === Language.KO ? '자세한 내용은 오른쪽을 확인해주세요.' : 'See details on the right.'}
       </div>

       {/* Contact Me CTA Button */}
       <button
        onClick={onContactButtonClick}
        className="w-full flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
        aria-label={contactButtonLabels[currentLanguage]}
       >
        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
        {contactButtonLabels[currentLanguage]}
       </button>
    </div>
  );
};

export default SummaryPanel;
