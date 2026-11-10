// ============================================
// PORTFOLIO DATA — Edit this file to update your portfolio content
// ============================================

export const personalInfo = {
  name: "William Anaza",
  role: "Software Engineer",
  yearsOfExperience: "3+",
  tagline:
    "I'm a product-minded software engineer and builder who turns ideas into functional, scalable digital experiences. I work at the intersection of product thinking, technology, and execution — understanding user needs, shaping product solutions, and building software that delivers meaningful business outcomes. From early-stage MVPs to complex digital platforms, I bring a combination of product ownership, engineering expertise, and a bias for getting things done.",
  bio: `Hi, I'm William — a Software Engineer with 3+ years of experience crafting full-stack applications. Currently focused on building robust, user-centric products that solve real problems. Committed to scalable, high-performing software that drives real user impact.`,
  email: "anazawilliam1@gmail.com", // Replace with your real email
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public
  profileImage: "/profile.jpg", // Place your profile image in /public (recommended: 400x400px)
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/williamwebs", // Replace with your GitHub
    icon: "github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/th_ejouRney", // Replace with your Twitter/X
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/william-anaza-8ba41471", // Replace with your LinkedIn
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:anazawilliam1@gmail.com", // Replace with your email
    icon: "mail",
  },
];

export const projects = [
  {
    name: "Project One",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and an admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/williamanaza/project-one",
  },
  {
    name: "Project Two",
    description:
      "AI-powered content management system with automated tagging, search optimization, and multi-language support.",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/williamanaza/project-two",
  },
  {
    name: "Project Three",
    description:
      "Real-time collaboration tool for remote teams with video conferencing, shared workspaces, and project tracking.",
    techStack: ["Next.js", "TypeScript", "WebRTC", "Socket.io"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/williamanaza/project-three",
  },
  {
    name: "Project Four",
    description:
      "Developer productivity dashboard that aggregates GitHub activity, CI/CD pipelines, and deployment metrics.",
    techStack: ["React", "Node.js", "GraphQL", "AWS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/williamanaza/project-four",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    companyUrl: "https://example.com",
    dates: "Jan 2023 – Present",
    location: "Remote",
    bullets: [
      "Developed and maintained scalable web applications using React, Next.js, and Node.js.",
      "Designed robust backend systems leveraging modern frameworks and databases for efficient data processing.",
      "Integrated third-party API services enabling real-time data synchronization and system communication.",
      "Collaborated with cross-functional teams to deliver cohesive, end-to-end technology solutions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Previous Company",
    companyUrl: "https://example.com",
    dates: "Jun 2021 – Dec 2022",
    location: "Remote, Nigeria",
    bullets: [
      "Optimized and managed existing codebase, improving performance across older versions.",
      "Created web-based products with great user interfaces to represent the brand.",
      "Designed and developed responsive applications that solve targeted problems.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University Name",
    dates: "2018 – 2022",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Tailwind CSS",
  "Git / GitHub",
  "Docker",
  "AWS",
  "Redis",
  "Socket.io",
  "Redux / RTK",
  "Jest",
  "Agile / Scrum",
  "Firebase",
];

export const blogPosts = [
  {
    title: "Architecting Scalable Microservices with Next.js and Node.js",
    summary:
      "A deep dive into distributed service boundaries, message queues, and end-to-end type safety in production systems.",
    date: "Oct 2024",
    readTime: "6 min read",
    tags: ["System Design", "Node.js", "Architecture"],
    url: "#",
  },
  {
    title: "Cutting Latency by 40% with Intelligent Edge Caching & Partial Prefetching",
    summary:
      "Practical strategies for utilizing CDN-level caching, stale-while-revalidate patterns, and Next.js modern cache directives.",
    date: "Aug 2024",
    readTime: "4 min read",
    tags: ["Performance", "Edge", "Next.js"],
    url: "#",
  },
  {
    title: "Building Production-Ready Real-Time Collaboration Systems",
    summary:
      "Lessons learned building WebSockets and WebRTC multi-user workspaces that handle network drops and high concurrency.",
    date: "May 2024",
    readTime: "8 min read",
    tags: ["WebSockets", "WebRTC", "TypeScript"],
    url: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Get in touch", href: "#contact" },
];
