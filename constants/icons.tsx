
import React from 'react';

// Adjusted viewBox for a more common flag aspect ratio (e.g., 2:3 or similar)
// Corrected Trigrams for Korean Flag
// Geon (☰) - 3 solid bars
// Ri (☲) - solid, broken, solid
// Gam (☵) - broken, solid, broken
// Gon (☷) - 3 broken bars
export const KoreanFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props} preserveAspectRatio="xMidYMid meet">
    <rect width="900" height="600" fill="#fff"/>
    <circle cx="450" cy="300" r="150" fill="#CD2E3A"/> {/* Taeguk Red */}
    <path d="M450,150A150,150 0 0 0 450,450Z" fill="#0047A0"/> {/* Taeguk Blue */}
    <g fill="#000" strokeWidth="0"> {/* Trigrams container */}
      {/* Geon (☰) - Top Left */}
      <g transform="translate(150, 100) rotate(-35.26)">
        <rect x="-60" y="-50" width="120" height="25"/>
        <rect x="-60" y="-12.5" width="120" height="25"/>
        <rect x="-60" y="25" width="120" height="25"/>
      </g>
      {/* Ri (☲) - Bottom Left */}
      <g transform="translate(150, 500) rotate(35.26)">
        <rect x="-60" y="-50" width="120" height="25"/>
        <rect x="-60" y="-12.5" width="50" height="25"/>
        <rect x="10"  y="-12.5" width="50" height="25"/>
        <rect x="-60" y="25" width="120" height="25"/>
      </g>
      {/* Gam (☵) - Top Right */}
      <g transform="translate(750, 100) rotate(35.26)">
        <rect x="-60" y="-50" width="50" height="25"/>
        <rect x="10"  y="-50" width="50" height="25"/>
        <rect x="-60" y="-12.5" width="120" height="25"/>
        <rect x="-60" y="25" width="50" height="25"/>
        <rect x="10"  y="25" width="50" height="25"/>
      </g>
      {/* Gon (☷) - Bottom Right */}
      <g transform="translate(750, 500) rotate(-35.26)">
        <rect x="-60" y="-50" width="50" height="25"/>
        <rect x="10"  y="-50" width="50" height="25"/>
        <rect x="-60" y="-12.5" width="50" height="25"/>
        <rect x="10"  y="-12.5" width="50" height="25"/>
        <rect x="-60" y="25" width="50" height="25"/>
        <rect x="10"  y="25" width="50" height="25"/>
      </g>
    </g>
  </svg>
);


export const USFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // Using a viewBox that matches the flag's typical aspect ratio (10:19) better.
  // The w-6 h-4 classes (24x16px) impose a 3:2 ratio. preserveAspectRatio helps.
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 1000" {...props} preserveAspectRatio="xMidYMid meet">
    <defs>
      <polygon id="star" points="0,-100 29.389,-30.902 95.106,-30.902 47.553,11.803 61.803,80.902 0,40 -61.803,80.902 -47.553,11.803 -95.106,-30.902 -29.389,-30.902" fill="#FFF"/>
    </defs>
    <rect width="1900" height="1000" fill="#B22234"/> {/* Red background for stripes */}
    {/* White stripes */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={`stripe-${i}`} y={(i*2+1)*(1000/13)} width="1900" height={1000/13} fill="#FFF"/>
    ))}
    <rect width={1900*0.4} height={7/13*1000} fill="#3C3B6E"/> {/* Blue canton */}
    {/* Stars - simplified layout for iconic representation */}
    {/* 9 rows of stars, alternating 6 and 5 */}
    {[...Array(9)].map((_, r) =>
      [...Array(6 - (r % 2))].map((_, c) => (
        <use key={`star-${r}-${c}`} href="#star" transform={`translate(${ (c + (r % 2 ? 0.5 : 1)) * (1900*0.4/7) }, ${ (r + 1) * (7/13*1000/10) }) scale(0.35)`} />
      ))
    )}
  </svg>
);

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v2.25A2.25 2.25 0 0118 18.75h-1.25a2.25 2.25 0 01-2.25-2.25V14.15m6.623 0V7.5A2.25 2.25 0 0018.375 5.25h-1.348a2.25 2.25 0 00-2.25 2.25V14.15m6.375 0z" />
  </svg>
);

export const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M12 14.25L3.75 9l8.25-5.25 8.25 5.25L12 14.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9v6.75A2.25 2.25 0 006 18h12a2.25 2.25 0 002.25-2.25V9m-16.5 0L12 3.75m0 0l8.25 5.25M12 3.75v10.5" />
  </svg>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.375 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m4.5-9V6.75A2.25 2.25 0 0010.5 4.5h-3A2.25 2.25 0 005.25 6.75v3.75m0 0A2.25 2.25 0 007.5 12h1.5a2.25 2.25 0 002.25-1.5M12 12V3.75m0 0A2.25 2.25 0 0014.25 6h0" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25-2.188a2.25 2.25 0 00-1.708-1.708L12 9l2.188-1.25a2.25 2.25 0 001.708-1.708L17 3.812l1.25 2.188a2.25 2.25 0 001.708 1.708L22.5 9l-2.188 1.25a2.25 2.25 0 00-1.708 1.708zM12 21l-.813-2.846A4.5 4.5 0 008.097 15.06L1.25 12m10.75 9V12m0 0L15.75 12M12 12L9 5.25M12 5.25L15 2.25" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.697-3.697C12.71 16.035 12 16.082 12 16.082s-.71-.047-2.25-.986c-1.391-.835-2.25-2.232-2.25-3.85V8.511c0-.867.616-1.631 1.5-1.907M16.5 9.75h.008v.008h-.008V9.75zM12 9.75h.008v.008h-.008V9.75zM7.5 9.75h.008v.008h-.008V9.75z" />
  </svg>
);
