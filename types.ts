
export enum Language {
  KO = 'ko',
  EN = 'en',
}

export interface LocalizedString {
  [Language.KO]: string;
  [Language.EN]: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: LocalizedString;
}

export interface EducationEntry {
  degree: LocalizedString;
  institution: LocalizedString;
  period: LocalizedString;
  description?: LocalizedString;
}

export interface ExperienceEntry {
  role: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  responsibilities: LocalizedString[];
  logoUrl?: string; 
}

export interface ProjectEntry {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  period?: LocalizedString;
  link?: string;
  imageUrl?: string;
}

export interface SkillEntry {
  name: string;
  category: LocalizedString;
  level?: number; // Optional: 0-5 or similar for proficiency display
}

export interface ResearchEntry {
  title: LocalizedString;
  publication: LocalizedString;
  date: string;
  link?: string;
}

export interface AwardEntry {
  name: LocalizedString;
  issuer: LocalizedString;
  date: string;
  description?: LocalizedString;
}

export interface QuickLinkEntry {
  name: LocalizedString;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CVData {
  name: LocalizedString;
  tagline: LocalizedString;
  profilePictureUrl: string;
  contact: ContactInfo;
  summaryKeywords: LocalizedString[];
  about: {
    introduction: LocalizedString;
    goals: LocalizedString;
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillEntry[];
  research: ResearchEntry[];
  awards: AwardEntry[];
  quickLinks: QuickLinkEntry[];
}

export interface SectionConfig {
  id: string;
  title: LocalizedString;
}