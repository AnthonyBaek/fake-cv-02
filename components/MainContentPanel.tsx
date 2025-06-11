
import React from 'react';
import { CVData, Language, EducationEntry, ExperienceEntry, ProjectEntry, SkillEntry, ResearchEntry, AwardEntry, QuickLinkEntry } from '../types';
import Section from './Section';
import { sampleCVData, sectionConfigs } from '../constants/data'; // For section titles
// LinkIcon removed as Quick Links section is gone. ExternalLinkIcon is still used by ProjectCard.
import { BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, TrophyIcon, SparklesIcon, ExternalLinkIcon } from '../constants/icons';


const AboutMeSection: React.FC<{ data: CVData['about'], lang: Language }> = ({ data, lang }) => (
  <>
    <div className="mb-6 prose prose-slate max-w-none">
      <h4 className="font-semibold text-slate-700">{lang === Language.KO ? '자기 소개' : 'Introduction'}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{data.introduction[lang]}</p>
    </div>
    <div className="prose prose-slate max-w-none">
      <h4 className="font-semibold text-slate-700">{lang === Language.KO ? '달성 목표' : 'Career Goals'}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{data.goals[lang]}</p>
    </div>
  </>
);

const EducationTimeline: React.FC<{ items: EducationEntry[], lang: Language }> = ({ items, lang }) => (
  <div className="relative border-l border-slate-300 pl-6 space-y-8">
    {items.map((item, index) => (
      <div key={index} className="relative">
        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-sky-500 rounded-full border-2 border-white"></div>
        <h4 className="font-semibold text-slate-700">{item.degree[lang]}</h4>
        <p className="text-sm text-slate-600">{item.institution[lang]}</p>
        <p className="text-xs text-slate-500 mb-1">{item.period[lang]}</p>
        {item.description && <p className="text-xs text-slate-500 italic">{item.description[lang]}</p>}
      </div>
    ))}
  </div>
);

const ExperienceCard: React.FC<{ item: ExperienceEntry, lang: Language }> = ({ item, lang }) => (
  <div className="bg-slate-50 p-4 rounded-lg shadow-sm mb-6 transition-shadow hover:shadow-md">
    <div className="flex items-start space-x-4">
        {item.logoUrl && <img src={item.logoUrl} alt={`${item.company[lang]} logo`} className="w-10 h-10 rounded-full object-contain mt-1"/>}
        <div className="flex-1">
            <h4 className="font-semibold text-slate-800">{item.role[lang]}</h4>
            <p className="text-sm text-sky-700 font-medium">{item.company[lang]}</p>
            <p className="text-xs text-slate-500 mb-2">{item.period[lang]}</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
            {item.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-xs text-slate-600 leading-relaxed">{resp[lang]}</li>
            ))}
            </ul>
        </div>
    </div>
  </div>
);

const ProjectCard: React.FC<{ item: ProjectEntry, lang: Language }> = ({ item, lang }) => (
  <div className="bg-slate-50 rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
    {item.imageUrl && <img src={item.imageUrl} alt={item.title[lang]} className="w-full h-40 object-cover"/>}
    <div className="p-4">
      <h4 className="font-semibold text-slate-800 mb-1">{item.title[lang]}</h4>
      {item.period && <p className="text-xs text-slate-500 mb-2">{item.period[lang]}</p>}
      <p className="text-xs text-slate-600 mb-3 leading-relaxed">{item.description[lang]}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {item.technologies.map(tech => (
          <span key={tech} className="bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full text-xs font-medium">{tech}</span>
        ))}
      </div>
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs text-sky-600 hover:text-sky-800 font-medium">
          {lang === Language.KO ? "프로젝트 보기" : "View Project"}
          <ExternalLinkIcon className="w-3 h-3 ml-1" />
        </a>
      )}
    </div>
  </div>
);

const SkillCategory: React.FC<{ category: string, skills: SkillEntry[], lang: Language }> = ({ category, skills, lang }) => (
  <div className="mb-4">
    <h5 className="font-semibold text-slate-700 text-sm mb-2">{category}</h5>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <div key={skill.name} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          {skill.name}
          {skill.level && (
            <div className="ml-2 flex space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`block w-2 h-2 rounded-full ${i < skill.level! ? 'bg-sky-500' : 'bg-slate-300'}`}></span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC<{ items: SkillEntry[], lang: Language }> = ({ items, lang }) => {
  const groupedSkills = items.reduce((acc, skill) => {
    const category = skill.category[lang];
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, SkillEntry[]>);

  return (
    <div>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <SkillCategory key={category} category={category} skills={skills} lang={lang} />
      ))}
    </div>
  );
};

const ResearchItem: React.FC<{ item: ResearchEntry, lang: Language }> = ({ item, lang }) => (
  <div className="bg-slate-50 p-3 rounded-lg shadow-sm mb-3">
    <h4 className="font-semibold text-sm text-slate-800">{item.title[lang]}</h4>
    <p className="text-xs text-slate-600 italic">{item.publication[lang]} ({item.date})</p>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 hover:text-sky-800 font-medium inline-flex items-center mt-1">
        {lang === Language.KO ? "논문 보기" : "View Publication"} <ExternalLinkIcon className="w-3 h-3 ml-1" />
      </a>
    )}
  </div>
);

const AwardItem: React.FC<{ item: AwardEntry, lang: Language }> = ({ item, lang }) => (
  <div className="bg-slate-50 p-3 rounded-lg shadow-sm mb-3">
    <h4 className="font-semibold text-sm text-slate-800">{item.name[lang]}</h4>
    <p className="text-xs text-slate-600">{item.issuer[lang]} ({item.date})</p>
    {item.description && <p className="text-xs text-slate-500 mt-1">{item.description[lang]}</p>}
  </div>
);

interface MainContentPanelProps {
  data: CVData;
  currentLanguage: Language;
}

const MainContentPanel: React.FC<MainContentPanelProps> = ({ data, currentLanguage }) => {
  const getSectionTitle = (id: string) => {
    const config = sectionConfigs.find(s => s.id === id);
    // Updated fallback to align with the new first section title "Summary" or "요약"
    return config ? config.title : { [Language.KO]: "요약", [Language.EN]: "Summary" };
  };
  
  const sectionIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    about: DocumentTextIcon,
    education: AcademicCapIcon,
    experience: BriefcaseIcon,
    projects: CodeBracketIcon,
    skills: SparklesIcon,
    research: DocumentTextIcon,
    awards: TrophyIcon,
  };


  return (
    <div className="space-y-0"> {/* Section component handles its own bottom margins */}
      <Section id="about" title={getSectionTitle("about")} currentLanguage={currentLanguage} icon={sectionIconMap["about"]}>
        <AboutMeSection data={data.about} lang={currentLanguage} />
      </Section>

      <Section id="education" title={getSectionTitle("education")} currentLanguage={currentLanguage} icon={sectionIconMap["education"]}>
        <EducationTimeline items={data.education} lang={currentLanguage} />
      </Section>

      <Section id="experience" title={getSectionTitle("experience")} currentLanguage={currentLanguage} icon={sectionIconMap["experience"]}>
        {data.experience.map((item, index) => (
          <ExperienceCard key={index} item={item} lang={currentLanguage} />
        ))}
      </Section>

      <Section id="projects" title={getSectionTitle("projects")} currentLanguage={currentLanguage} icon={sectionIconMap["projects"]}>
        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((item) => (
            <ProjectCard key={item.id} item={item} lang={currentLanguage} />
          ))}
        </div>
      </Section>

      <Section id="skills" title={getSectionTitle("skills")} currentLanguage={currentLanguage} icon={sectionIconMap["skills"]}>
        <SkillsSection items={data.skills} lang={currentLanguage} />
      </Section>

      <Section id="research" title={getSectionTitle("research")} currentLanguage={currentLanguage} icon={sectionIconMap["research"]}>
        {data.research.map((item, index) => (
          <ResearchItem key={index} item={item} lang={currentLanguage} />
        ))}
      </Section>

      <Section id="awards" title={getSectionTitle("awards")} currentLanguage={currentLanguage} icon={sectionIconMap["awards"]}>
        {data.awards.map((item, index) => (
          <AwardItem key={index} item={item} lang={currentLanguage} />
        ))}
      </Section>
      
    </div>
  );
};

export default MainContentPanel;
