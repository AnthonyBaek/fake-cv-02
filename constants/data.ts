
import { CVData, Language, SectionConfig } from '../types';
import { GithubIcon, LinkedInIcon, LinkIcon, KoreanFlagIcon, USFlagIcon, EmailIcon, PhoneIcon, LocationIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, TrophyIcon, SparklesIcon } from './icons';

export const sampleCVData: CVData = {
  name: {
    [Language.KO]: "홍길동",
    [Language.EN]: "Gildong Hong",
  },
  tagline: {
    [Language.KO]: "열정적인 풀스택 소프트웨어 엔지니어 | 혁신적인 솔루션 개발",
    [Language.EN]: "Passionate Full-Stack Software Engineer | Building Innovative Solutions",
  },
  profilePictureUrl: "https://picsum.photos/seed/cv-profile/200/200", // Replace with ./public/profile.png if served
  contact: {
    email: "gildong.hong@example.com",
    phone: "010-1234-5678",
    location: {
      [Language.KO]: "대한민국 서울",
      [Language.EN]: "Seoul, South Korea",
    },
  },
  summaryKeywords: [
    { [Language.KO]: "풀스택 개발", [Language.EN]: "Full-Stack Development" },
    { [Language.KO]: "React", [Language.EN]: "React" },
    { [Language.KO]: "Node.js", [Language.EN]: "Node.js" },
    { [Language.KO]: "클라우드", [Language.EN]: "Cloud Computing" },
    { [Language.KO]: "애자일", [Language.EN]: "Agile Methodologies" },
  ],
  about: {
    introduction: {
      [Language.KO]: "안녕하세요. 저는 5년 이상의 경험을 가진 소프트웨어 엔지니어 홍길동입니다. 사용자 중심의 웹 애플리케이션 개발과 문제 해결에 깊은 열정을 가지고 있으며, 최신 기술 트렌드를 학습하고 적용하는 것을 즐깁니다. 다양한 프로젝트를 통해 백엔드부터 프론트엔드까지 아우르는 풀스택 개발 역량을 쌓아왔습니다. 복잡한 문제를 분석하고 효과적인 기술 솔루션을 설계 및 구현하는 데 능숙합니다.",
      [Language.EN]: "Hello, I am Gildong Hong, a software engineer with over 5 years of experience. I have a deep passion for developing user-centric web applications and problem-solving, and I enjoy learning and applying the latest technology trends. Through various projects, I have built full-stack development capabilities covering everything from backend to frontend. I am proficient in analyzing complex problems and designing and implementing effective technical solutions.",
    },
    goals: {
      [Language.KO]: "저의 목표는 기술을 통해 사회에 긍정적인 영향을 미치는 혁신적인 제품과 서비스를 만드는 것입니다. 특히 AI와 머신러닝 기술을 활용하여 사용자 경험을 향상시키고 새로운 가치를 창출하는 분야에 기여하고 싶습니다. 지속적인 성장과 학습을 통해 기술 리더십을 갖춘 전문가로 발전하고, 동료들과 함께 성장하며 뛰어난 팀워크를 발휘하는 환경에서 일하고 싶습니다.",
      [Language.EN]: "My goal is to create innovative products and services that positively impact society through technology. I am particularly interested in contributing to fields that enhance user experience and create new value by leveraging AI and machine learning technologies. I aspire to develop into an expert with technical leadership through continuous growth and learning, and to work in an environment where I can grow with colleagues and demonstrate excellent teamwork.",
    },
  },
  education: [
    {
      degree: { [Language.KO]: "소프트웨어공학 석사", [Language.EN]: "Master of Science in Software Engineering" },
      institution: { [Language.KO]: "한국대학교 대학원", [Language.EN]: "Hangook University, Graduate School" },
      period: { [Language.KO]: "2018.03 - 2020.02", [Language.EN]: "Mar 2018 - Feb 2020" },
      description: { [Language.KO]: "논문: '대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구'", [Language.EN]: "Thesis: 'A Study on Efficient Data Processing Techniques in Large-Scale Distributed Systems'" },
    },
    {
      degree: { [Language.KO]: "컴퓨터공학 학사", [Language.EN]: "Bachelor of Science in Computer Science" },
      institution: { [Language.KO]: "한국대학교", [Language.EN]: "Hangook University" },
      period: { [Language.KO]: "2014.03 - 2018.02", [Language.EN]: "Mar 2014 - Feb 2018" },
      description: { [Language.KO]: "캡스톤 프로젝트: '머신러닝 기반 영화 추천 시스템 개발'", [Language.EN]: "Capstone Project: 'Development of a Machine Learning-based Movie Recommendation System'" },
    },
  ],
  experience: [
    {
      role: { [Language.KO]: "선임 소프트웨어 엔지니어", [Language.EN]: "Senior Software Engineer" },
      company: { [Language.KO]: "테크 이노베이션스", [Language.EN]: "Tech Innovations Inc." },
      period: { [Language.KO]: "2021.03 - 현재", [Language.EN]: "Mar 2021 - Present" },
      logoUrl: "https://picsum.photos/seed/company1/40/40",
      responsibilities: [
        { [Language.KO]: "주요 웹 서비스의 백엔드 시스템 개발 및 유지보수 (Node.js, Express, MongoDB)", [Language.EN]: "Developed and maintained backend systems for key web services (Node.js, Express, MongoDB)" },
        { [Language.KO]: "React와 TypeScript를 활용한 프론트엔드 UI/UX 개선", [Language.EN]: "Improved frontend UI/UX using React and TypeScript" },
        { [Language.KO]: "AWS 기반 클라우드 인프라 설계 및 운영 참여", [Language.EN]: "Participated in designing and operating AWS-based cloud infrastructure" },
        { [Language.KO]: "애자일 스크럼 방법론을 통한 프로젝트 관리 및 팀 협업", [Language.EN]: "Managed projects and collaborated with teams using Agile Scrum methodology" },
      ],
    },
    {
      role: { [Language.KO]: "소프트웨어 엔지니어", [Language.EN]: "Software Engineer" },
      company: { [Language.KO]: "스타트업 코리아", [Language.EN]: "Startup Korea Ltd." },
      period: { [Language.KO]: "2020.03 - 2021.02", [Language.EN]: "Mar 2020 - Feb 2021" },
      logoUrl: "https://picsum.photos/seed/company2/40/40",
      responsibilities: [
        { [Language.KO]: "Python (Django) 기반의 초기 서비스 프로토타입 개발", [Language.EN]: "Developed initial service prototypes based on Python (Django)" },
        { [Language.KO]: "RESTful API 설계 및 구현", [Language.EN]: "Designed and implemented RESTful APIs" },
        { [Language.KO]: "사용자 피드백 수렴 및 빠른 기능 개선 사이클 주도", [Language.EN]: "Led user feedback collection and rapid feature improvement cycles" },
      ],
    },
  ],
  projects: [
    {
      id: "proj1",
      title: { [Language.KO]: "AI 기반 개인화 학습 플랫폼", [Language.EN]: "AI-Powered Personalized Learning Platform" },
      description: { [Language.KO]: "학생들의 학습 패턴을 분석하여 맞춤형 콘텐츠를 제공하는 웹 플랫폼입니다. React, Node.js, Python(Flask) 및 GCP를 활용하여 개발되었습니다.", [Language.EN]: "A web platform that analyzes student learning patterns to provide personalized content. Developed using React, Node.js, Python (Flask), and GCP." },
      technologies: ["React", "Node.js", "Python", "Flask", "Google Cloud Platform", "Machine Learning"],
      period: { [Language.KO]: "2022.01 - 2022.12", [Language.EN]: "Jan 2022 - Dec 2022" },
      link: "https://example.com/project1",
      imageUrl: "https://picsum.photos/seed/project1/300/200",
    },
    {
      id: "proj2",
      title: { [Language.KO]: "실시간 협업 문서 편집기", [Language.EN]: "Real-time Collaborative Document Editor" },
      description: { [Language.KO]: "다수의 사용자가 동시에 문서를 편집할 수 있는 웹 애플리케이션입니다. WebSocket, CRDT 알고리즘, Vue.js, Firebase를 사용하여 구현했습니다.", [Language.EN]: "A web application allowing multiple users to edit documents simultaneously. Implemented using WebSockets, CRDT algorithms, Vue.js, and Firebase." },
      technologies: ["Vue.js", "Firebase", "WebSocket", "CRDT"],
      period: { [Language.KO]: "2021.05 - 2021.11", [Language.EN]: "May 2021 - Nov 2021" },
      link: "https://example.com/project2",
      imageUrl: "https://picsum.photos/seed/project2/300/200",
    },
  ],
  skills: [
    { name: "JavaScript (ES6+)", category: { [Language.KO]: "프로그래밍 언어", [Language.EN]: "Programming Languages" }, level: 5 },
    { name: "TypeScript", category: { [Language.KO]: "프로그래밍 언어", [Language.EN]: "Programming Languages" }, level: 5 },
    { name: "Python", category: { [Language.KO]: "프로그래밍 언어", [Language.EN]: "Programming Languages" }, level: 4 },
    { name: "Java", category: { [Language.KO]: "프로그래밍 언어", [Language.EN]: "Programming Languages" }, level: 3 },
    { name: "React", category: { [Language.KO]: "프론트엔드", [Language.EN]: "Frontend" }, level: 5 },
    { name: "Next.js", category: { [Language.KO]: "프론트엔드", [Language.EN]: "Frontend" }, level: 4 },
    { name: "Vue.js", category: { [Language.KO]: "프론트엔드", [Language.EN]: "Frontend" }, level: 3 },
    { name: "Tailwind CSS", category: { [Language.KO]: "프론트엔드", [Language.EN]: "Frontend" }, level: 5 },
    { name: "Node.js", category: { [Language.KO]: "백엔드", [Language.EN]: "Backend" }, level: 5 },
    { name: "Express.js", category: { [Language.KO]: "백엔드", [Language.EN]: "Backend" }, level: 5 },
    { name: "Django", category: { [Language.KO]: "백엔드", [Language.EN]: "Backend" }, level: 3 },
    { name: "Spring Boot", category: { [Language.KO]: "백엔드", [Language.EN]: "Backend" }, level: 2 },
    { name: "MongoDB", category: { [Language.KO]: "데이터베이스", [Language.EN]: "Databases" }, level: 4 },
    { name: "PostgreSQL", category: { [Language.KO]: "데이터베이스", [Language.EN]: "Databases" }, level: 4 },
    { name: "MySQL", category: { [Language.KO]: "데이터베이스", [Language.EN]: "Databases" }, level: 3 },
    { name: "AWS", category: { [Language.KO]: "클라우드/DevOps", [Language.EN]: "Cloud/DevOps" }, level: 4 },
    { name: "Docker", category: { [Language.KO]: "클라우드/DevOps", [Language.EN]: "Cloud/DevOps" }, level: 4 },
    { name: "Kubernetes", category: { [Language.KO]: "클라우드/DevOps", [Language.EN]: "Cloud/DevOps" }, level: 3 },
    { name: "Git", category: { [Language.KO]: "기타", [Language.EN]: "Others" }, level: 5 },
    { name: "Agile/Scrum", category: { [Language.KO]: "기타", [Language.EN]: "Others" }, level: 4 },
  ],
  research: [
    {
      title: { [Language.KO]: "딥러닝 기반 자연어 처리 기술의 최신 동향 분석", [Language.EN]: "Analysis of Recent Trends in Deep Learning-based Natural Language Processing" },
      publication: { [Language.KO]: "한국정보과학회 학술지", [Language.EN]: "Journal of KIISE" },
      date: "2020.11",
      link: "https://example.com/research1",
    },
    {
      title: { [Language.KO]: "클라우드 환경에서의 마이크로서비스 아키텍처 구축 전략", [Language.EN]: "Strategies for Building Microservice Architectures in Cloud Environments" },
      publication: { [Language.KO]: "KCC 2019 (한국컴퓨터종합학술대회)", [Language.EN]: "KCC 2019 (Korea Computer Congress)" },
      date: "2019.06",
    },
  ],
  awards: [
    {
      name: { [Language.KO]: "최우수 졸업 프로젝트상", [Language.EN]: "Best Graduation Project Award" },
      issuer: { [Language.KO]: "한국대학교 컴퓨터공학과", [Language.EN]: "Dept. of Computer Science, Hangook University" },
      date: "2018.02",
    },
    {
      name: { [Language.KO]: "AWS Certified Solutions Architect – Associate", [Language.EN]: "AWS Certified Solutions Architect – Associate" },
      issuer: { [Language.KO]: "Amazon Web Services", [Language.EN]: "Amazon Web Services" },
      date: "2022.07",
    },
    {
      name: { [Language.KO]: "정보처리기사", [Language.EN]: "Engineer Information Processing" },
      issuer: { [Language.KO]: "한국산업인력공단", [Language.EN]: "HRD Korea" },
      date: "2017.12",
    }
  ],
  quickLinks: [ 
    { name: { [Language.KO]: "GitHub", [Language.EN]: "GitHub" }, url: "https://github.com/example", icon: GithubIcon },
    { name: { [Language.KO]: "LinkedIn", [Language.EN]: "LinkedIn" }, url: "https://linkedin.com/in/example", icon: LinkedInIcon },
    { name: { [Language.KO]: "개인 블로그", [Language.EN]: "Personal Blog" }, url: "https://blog.example.com", icon: LinkIcon },
  ],
};

export const sectionConfigs: SectionConfig[] = [
    { id: "about", title: { [Language.KO]: "요약", [Language.EN]: "Summary" } }, // 자기 소개 -> 요약, About Me -> Summary (or keep About Me)
    { id: "education", title: { [Language.KO]: "학력", [Language.EN]: "Education" } }, // 학력 정보 -> 학력
    { id: "experience", title: { [Language.KO]: "경력", [Language.EN]: "Experience" } }, // 경력 정보 -> 경력
    { id: "projects", title: { [Language.KO]: "프로젝트", [Language.EN]: "Projects" } }, // 프로젝트 경험 -> 프로젝트
    { id: "skills", title: { [Language.KO]: "기술", [Language.EN]: "Skills" } }, // 기술 스택 -> 기술
    { id: "research", title: { [Language.KO]: "연구", [Language.EN]: "Research" } }, // 연구 실적 -> 연구
    { id: "awards", title: { [Language.KO]: "수상/자격증", [Language.EN]: "Awards & Certs" } }, // "수상 및 자격증" -> "수상/자격증"
];

// NAV_ITEMS is derived from sectionConfigs, so it updates automatically.
export const NAV_ITEMS = [...sectionConfigs];
