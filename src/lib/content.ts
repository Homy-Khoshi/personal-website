export type Entry = {
  slug: string;
  kind: 'experience' | 'project';
  title: string;
  subtitle: string;
  period?: string;
  location?: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  image: string;
  imageLabel: string;
  link?: string;
};

export const entries: Entry[] = [
  {
    slug: 'cjsf', kind: 'experience', title: 'Full Stack Developer', subtitle: 'CJSF 90.1',
    period: 'May 2026 – Present', location: 'Vancouver, BC',
    summary: 'Modernizing a legacy radio station website with a maintainable full-stack architecture and responsive user experiences.',
    bullets: [
      'Designed 11 responsive page layouts and 15 reusable UI components in Figma, incorporating feedback from 8 stakeholder review sessions.',
      'Defined application architecture and Git development workflows to support maintainable, ongoing feature development.',
      'Migrating a legacy Drupal website to Next.js and Strapi, rebuilding 10 pages and implementing 5 full-stack features using JavaScript and REST APIs.'
    ],
    technologies: ['Next.js', 'Strapi', 'JavaScript', 'REST APIs', 'Figma', 'Git'],
    image: '/work/cjsf.jpg', imageLabel: 'CJSF website or team photo'
  },
  {
    slug: 'contract-flow', kind: 'experience', title: 'Full Stack Developer', subtitle: 'Contract Flow Solutions · BCIT Industry Project 1',
    period: 'Apr 2025 – Jun 2025', location: 'Vancouver, BC',
    summary: 'Built a Microsoft Word add-in for contract review and annotation, incorporating feedback from an industry sponsor.',
    bullets: [
      'Developed a Microsoft Word add-in supporting 3 contract review and annotation features using TypeScript, Node.js, and Microsoft Office APIs.',
      'Delivered a functional prototype through 4 development iterations, translating industry sponsor feedback into product improvements.'
    ],
    technologies: ['TypeScript', 'Node.js', 'Microsoft Office APIs'],
    image: '/work/contract-flow.jpg', imageLabel: 'Contract Flow Solutions screenshot or project photo'
  },
  {
    slug: 'changescope', kind: 'project', title: 'ChangeScope', subtitle: 'Human–Computer Interaction Research',
    summary: 'A tool to help programmers evaluate suggested code edits through behavioral predictions and side-by-side execution.',
    bullets: [
      'Developing a React and TypeScript tool that helps programmers evaluate suggested code edits through behavioural predictions and side-by-side execution.',
      'Designing a within-subjects study comparing 3 review conditions to measure edit-decision accuracy, explanation quality, usability, and perceived effort.'
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'HCI Research'],
    image: '/work/changescope.jpg', imageLabel: 'ChangeScope interface screenshot'
  },
  {
    slug: 'skillmatch', kind: 'project', title: 'Skillmatch', subtitle: 'Job Matching & Machine Learning',
    summary: 'A React job-matching application connecting applicants to relevant postings through machine-learning inference.',
    bullets: [
      'Developed a React job-matching application integrating a Hugging Face machine-learning model to match applicant skills with relevant postings.',
      'Architected 3 RESTful microservices connecting the frontend, application logic, and ML inference, enabling independent deployment and modular development.'
    ],
    technologies: ['React', 'Microservices', 'REST APIs', 'Hugging Face ML'],
    image: '/work/skillmatch.jpg', imageLabel: 'Skillmatch application screenshot'
  },
  {
    slug: 'linux-shell', kind: 'project', title: 'Linux Shell', subtitle: 'Systems Programming',
    summary: 'A Unix-style command-line shell written in C with job control and signal handling.',
    bullets: [
      'Built a Unix-style command-line shell in C supporting 5 built-in commands, background execution, and process management using POSIX system calls.',
      'Implemented SIGINT signal handling and foreground/background job control using operating-system process APIs.'
    ],
    technologies: ['C', 'Unix', 'Process Management', 'POSIX'],
    image: '/work/linux-shell.jpg', imageLabel: 'Linux Shell terminal screenshot'
  }
];

export const skillGroups = [
  { title: 'Languages', values: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'R'] },
  { title: 'Libraries & Frameworks', values: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Strapi', 'REST APIs', 'Microservices'] },
  { title: 'Developer Tools & Technologies', values: ['Git', 'AWS', 'Azure', 'Docker', 'Linux', 'JUnit', 'Postman', 'Figma', 'SDLC', 'MySQL', 'MongoDB', 'SQL Server', 'PostgreSQL'] }
];
