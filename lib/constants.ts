export interface PersonalInfo {
  name: string;
  name_ar?: string;
  title: string;
  title_ar?: string;
  location: string;
  location_ar?: string;
  bio: string;
  bio_ar?: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "languages" | "tools" | "spoken-languages";
  level?: string;
}

export interface Project {
  id: string;
  name: string;
  name_ar?: string;
  type: "Client Projects" | "Academic & Personal";
  description: string;
  description_ar?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  role_ar?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  title_ar?: string;
  company: string;
  company_ar?: string;
  period: string;
  description: string;
  description_ar?: string;
  type: "freelance" | "university" | "work";
}

export interface Education {
  degree: string;
  degree_ar?: string;
  institution: string;
  institution_ar?: string;
  period: string;
  status: string;
  status_ar?: string;
}

export interface Language {
  name: string;
  proficiency: number; // percentage 0-100
}

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
  name: "HAMZA",
  name_ar: "حمزة",
  title: "Full Stack Developer",
  title_ar: "  مطور ويب Full Stack",
  location: "Syria / Turkey",
  location_ar: "سوريا / تركيا",
  bio: "I'm a frontend-focused full stack developer passionate about creating beautiful, responsive web applications. I specialize in React and Next.js, building modern user interfaces with clean, maintainable code. Currently graduating this year and eager to work on exciting projects.",
  bio_ar:
    "أنا مطور full stack متخصص في الواجهات الأمامية، شغوف بإنشاء تطبيقات ويب جميلة وسريعة الاستجابة. أتخصص في React و Next.js، وبناء واجهات مستخدم حديثة برمز نظيف وسهل الصيانة. حالياً في السنة الأخيرة من دراستي وحريص على العمل على مشاريع مثيرة.",
  email: "hamza.m.alahmedi@gmail.com",
  github: "https://github.com/Hamza-Alahmedi",
  linkedin: "https://www.linkedin.com/in/hamza-ahmedi-a798432a8/",
  whatsapp: "https://wa.me/00905524885051",
};

// Skills
export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Express.js", category: "backend" },

  // Languages
  { name: "Python", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "WordPress", category: "tools" },
  { name: "VS Code", category: "tools" },
];

// Spoken Languages
export const LANGUAGES: Language[] = [
  { name: "Arabic", proficiency: 100 }, // Native
  { name: "English", proficiency: 75 }, // Good
  { name: "Turkish", proficiency: 75 }, // Good
];

// Projects
export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Snake Game – JavaScript Browser Game",
    name_ar: "لعبة الثعبان - لعبة متصفح بجافا سكريبت",
    type: "Academic & Personal",
    description:
      "Classic Snake game built using JavaScript, focusing on game logic, keyboard controls, collision detection, and dynamic state management.",
    description_ar:
      "لعبة الثعبان الكلاسيكية مبنية باستخدام جافا سكريبت، تركز على منطق اللعبة، التحكم بالكيبورد، اكتشاف التصادم، وإدارة الحالة ديناميكياً.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://hamza-alahmedi.github.io/Snake-Game/",
    githubUrl: "https://github.com/Hamza-Alahmedi/Snake-Game",
    role: "JavaScript Developer",
    role_ar: "مطور جافا سكريبت",
    image: "/images/projects/snake-game.png",
  },
  {
    id: "2",
    name: "The Saudi Solutions – Corporate Business Website",
    name_ar: "الحلول السعودية - موقع شركة تجارية",
    type: "Client Projects",
    description:
      "Corporate website developed to present business solutions with a modern design, smooth animations, and a fully responsive user experience.",
    description_ar:
      "موقع للشركة لعرض حلول الأعمال بتصميم عصري، رسوم متحركة سلسة، وتجربة مستخدم متجاوبة بالكامل.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://thesaudisolutions.com/",
    role: "Frontend Developer",
    role_ar: "مطور واجهات أمامية",
    image: "/images/projects/the-saudi-solutions.png",
  },

  {
    id: "3",
    name: "Core Business Hub – Company Website",
    name_ar: "كور بيزنس هب - موقع شركة",
    type: "Client Projects",
    description:
      "Business hub company website built to present services and solutions with a clean layout and a fully responsive user interface.",
    description_ar:
      "موقع لشركة مركز أعمال لعرض الخدمات والحلول بتخطيط نظيف وواجهة مستخدم متجاوبة بالكامل.",
    techStack: ["React", "CSS"],
    liveUrl: "https://corebhub.com/",
    role: "Frontend Developer",
    role_ar: "مطور واجهات أمامية",
    image: "/images/projects/corebhub.png",
  },

  {
    id: "4",
    name: "Iraq Center for Future Studies – Research Center Website",
    name_ar: "مركز العراق للدراسات المستقبلية",
    type: "Client Projects",
    description:
      "Multilingual research center website designed to publish articles, news, reports, and analytical content with complex categories while maintaining high performance and smooth navigation.",
    description_ar:
      "موقع مركز أبحاث متعدد اللغات مصمم لنشر المقالات والأخبار والتقارير والمحتوى التحليلي مع تصنيفات معقدة مع الحفاظ على أداء عالٍ وتنقل سلس.",
    techStack: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://iraqcfs.org/",
    role: "WordPress Developer",
    role_ar: "مطور ووردبريس",
    image: "/images/projects/iraqcenter.png",
  },

  {
    id: "5",
    name: "Elite Windows – Multilingual Product Website",
    name_ar: "نخبة النوافذ - موقع منتجات متعدد اللغات",
    type: "Client Projects",
    description:
      "Corporate product website for a windows and doors company, designed to showcase multiple product categories with a clean, fast, and user-friendly interface.",
    description_ar:
      "موقع منتجات لشركة نوافذ وأبواب، مصمم لعرض فئات منتجات متعددة بواجهة نظيفة وسريعة وسهلة الاستخدام.",
    techStack: [
      "WordPress",
      "Elementor",
      "CSS",
      "JavaScript",
      "TranslatePress",
    ],
    liveUrl: "https://elitewindows.masarsy.com/",
    role: "Frontend / WordPress Developer",
    role_ar: "مطور واجهات أمامية / ووردبريس",
    image: "/images/projects/elite-windows.png",
  },
  {
    id: "6",
    name: "Data Science – Bank Customer Subscription Prediction",
    name_ar: "علم البيانات - توقع اشتراك عملاء البنك",
    type: "Academic & Personal",
    description:
      "Academic data science project focused on analyzing banking data and building a classification model to predict customer subscription behavior using machine learning techniques.",
    description_ar:
      "مشروع علم بيانات أكاديمي يركز على تحليل بيانات البنوك وبناء نموذج تصنيف لتوقع سلوك اشتراك العملاء باستخدام تقنيات تعلم الآلة.",
    techStack: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    githubUrl: "https://github.com/Hamza-Alahmedi/Data-Science-Project",
    role: "Data Analysis & Machine Learning",
    role_ar: "تحليل بيانات وتعلم آلة",
    image: "/images/projects/datascinece.png",
  },

  {
    id: "7",
    name: "LMS Course Enrollment System",
    name_ar: "نظام تسجيل دورات LMS",
    type: "Academic & Personal",
    description:
      "Full-stack course enrollment system allowing students to browse, register, and enroll in courses, with admin management features.",
    description_ar:
      "نظام تسجيل دورات متكامل يسمح للطلاب بتصفح وتسجيل الدورات، مع ميزات إدارة للمسؤولين.",
    techStack: ["React", "Spring Boot", "Java", "REST API", "MySQL"],
    githubUrl: "https://github.com/Hamza-Alahmedi/course-enrollment-system",
    role: "Full-Stack Developer",
    role_ar: "مطور ويب متكامل",
    image: "/images/projects/courseEnrollments.png",
  },
];

// Experience
export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    title: "Freelance Web Developer",
    title_ar: "مطور ويب مستقل",
    company: "Self-Employed",
    company_ar: "عمل حر",
    period: "2024 - Present",
    description:
      "Developing complete websites and web applications for clients, handling frontend development and delivering responsive, high-quality solutions using modern technologies.",
    description_ar:
      "تطوير مواقع وتطبيقات ويب متكاملة للعملاء، مع تنفيذ الواجهات الأمامية وتقديم حلول عالية الجودة ومتجاوبة باستخدام تقنيات حديثة.",
    type: "freelance",
  },
  {
    id: "2",
    title: "Frontend Developer",
    title_ar: "مطور واجهات أمامية",
    company: "RMZ Dev Team",
    company_ar: "فريق RMZ Dev",
    period: "2024",
    description:
      "Responsible for frontend development within the team, building user interfaces and implementing modern frontend architecture for a graduation project.",
    description_ar:
      "المسؤول عن تطوير الواجهات الأمامية ضمن الفريق، وبناء واجهات المستخدم وتنفيذ بنية حديثة للواجهة الأمامية ضمن مشروع التخرج.",
    type: "university",
  },
  {
    id: "3",
    title: "Web Development Intern",
    title_ar: "متدرب تطوير ويب",
    company: "Core Istanbul Business Hub",
    company_ar: "كور إسطنبول للأعمال",
    period: "2023",
    description:
      "Worked on developing and improving the company website, contributing to technical solutions and implementing responsive web pages while gaining hands-on industry experience.",
    description_ar:
      "العمل على تطوير وتحسين موقع الشركة، والمساهمة في تقديم الحلول التقنية وتنفيذ صفحات ويب متجاوبة، مع اكتساب خبرة عملية في بيئة العمل الاحترافية.",
    type: "work",
  },
];

// Education
export const EDUCATION: Education = {
  degree: "Bachelor of Science in Computer  Engineering",
  degree_ar: "بكالوريوس في هندسة الحاسوب",
  institution: "Sultan Mehmet Fatih Vakif University",
  institution_ar: "جامعة السلطان محمد الفاتح الوقفية",
  period: "2022 - 2026",
  status: "Graduating in 2026",
  status_ar: "يتخرج في 2026",
};

// Navigation Items
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
