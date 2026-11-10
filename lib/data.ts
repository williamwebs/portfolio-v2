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

export interface Project {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  approach: string;
  solution: string;
  contribution: string;
  toolsUsed: string[];
  techStack: string[];
  images?: string[];
  liveUrl?: string | null;
  codeUrl?: string | null;
}

export const projects: Project[] = [
  {
    id: "awujo",
    name: "Awujo",
    title: "Awujo: Group-Buying for Nigerian Neighbourhoods",
    tagline:
      "Group-buying platform enabling urban neighbours to split bulk staple goods at wholesale prices.",
    description:
      "A mobile-first progressive web application (PWA) that coordinates neighbourhood bulk-buying. Zone boundaries are defined as PostGIS polygons, with custom proximity and urgency ranking.",
    problemStatement:
      "Buying staple goods in bulk is cheaper, but most households cannot afford a large purchase alone or store that much. Neighbours who would happily split a bulk order have no simple way to find each other and coordinate.",
    approach:
      "I treated this as a coordination problem rather than a marketplace problem. Groups form around neighbourhoods, so I modelled the app around geographic zones. Since group buys depend on timing, I ranked what users see by how close it is and how urgent it is. I built it as a mobile-first PWA so people can use it without installing from an app store.",
    solution:
      "Awujo lets people in the same urban neighbourhood join or start group purchases of bulk commodities and split the cost at wholesale prices. Zone boundaries are defined as PostGIS polygons, and a custom ranking algorithm surfaces the most relevant and time-sensitive group buys first. Version 1 is built and shipped.",
    contribution:
      "I designed and built it end to end as a personal project. That includes the zone boundary polygons, the proximity and urgency ranking algorithm, authentication emails through a custom SMTP setup with Resend, and DNS configuration for the project's subdomain.",
    toolsUsed: [
      "Next.js 14",
      "Supabase",
      "PostGIS",
      "TanStack Query",
      "Zustand",
      "Serwist",
      "Resend",
    ],
    techStack: [
      "Next.js 14",
      "Supabase",
      "PostGIS",
      "TanStack Query",
      "Zustand",
      "Serwist",
      "Resend",
    ],
    images: ["/awujo-screenshot.png", "/awujo-screenshot-1.png", "/awujo-screenshot-2.png"],
    liveUrl: "https://awujo.top", // Add your live URL when deployed
    codeUrl: null,
  },
  {
    id: "events-in-lagos",
    name: "Events in Lagos",
    title: "Events in Lagos: Location-Aware Event Discovery",
    tagline:
      "Location-aware event discovery platform with interactive map browsing, AI assistant, and organizer dashboards.",
    description:
      "A premium event discovery platform featuring map-based exploration, real-time alerts, organizer & admin suites, and a RAG-powered Gemini event assistant.",
    problemStatement:
      "Events in Lagos are scattered across social media pages and word of mouth, which makes it hard for attendees to find what is happening near them and hard for organizers to reach the right people.",
    approach:
      "I designed for three kinds of users from the start: attendees, organizers, and a platform admin. Each has a different need, so each got a dedicated experience on top of one shared database schema. Location came first, so the map is central to discovery. I also added an AI assistant so people can ask questions in plain language instead of filtering manually.",
    solution:
      "A premium event discovery platform with a map-based browsing experience, organizer and admin dashboards, real-time notifications, and a RAG-powered event assistant. SEO infrastructure helps events get found through search. The platform is live at events-in-lagos.vercel.app and is at an advanced stage of development.",
    contribution:
      "I designed the full database schema and built the attendee experience, the organizer and admin dashboards, the real-time notification system, the SEO infrastructure, and the RAG event assistant.",
    toolsUsed: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React Leaflet",
      "OpenStreetMap",
      "Vercel AI SDK",
      "Google Gemini",
      "Vercel",
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React Leaflet",
      "OpenStreetMap",
      "Vercel AI SDK",
      "Google Gemini",
    ],
    images: ["/eil-screenshot.png", "/eil-screenshot-1.png", "/eil-screenshot-2.png", "/eil-screenshot-3.png"],
    liveUrl: "https://events-in-lagos.vercel.app",
    codeUrl: null,
  },
  {
    id: "cueactor",
    name: "CueActor",
    title: "CueActor: An AI Scene Partner for Actors",
    tagline:
      "AI-powered scene partner platform enabling actors to rehearse lines in real time without a human reader.",
    description:
      "A platform for actors to rehearse scripts against Hazel, an AI scene partner with real-time turn-taking voice responses, integrated Google Calendar scheduling, Stripe payments, and Agora P2P video calling.",
    problemStatement:
      "Actors frequently need a reliable rehearsal partner to run lines on demand without relying on another human reader, while also needing integrated session scheduling, secure payment processing, and peer-to-peer video calls in one place.",
    approach:
      "I designed and engineered a low-latency, conversational rehearsal interface with turn-taking AI audio synthesis, backed by Agora WebRTC for video calls, WebSocket signaling, and seamless third-party service integrations with Stripe and Google Calendar.",
    solution:
      "CueActor lets actors rehearse without a human reader. You upload a script in any format and run scenes against Hazel, an AI scene partner. Hazel reads the other characters’ lines aloud in distinct voices, listens, and takes turns in real time: you speak, and Hazel responds. Around the rehearsal experience, the platform supports booking sessions with secure payments and calendar scheduling, as well as peer-to-peer video calls between users.",
    contribution:
      "I worked as a frontend developer on a customer-facing, AI-powered product, collaborating closely with the product designer, backend engineers, and product manager through planning, sprints, and feature delivery:\n\n• Translated Figma designs into clean, reusable, pixel-perfect components.\n• Designed and implemented complex UI flows across onboarding, core features, and AI-assisted workflows.\n• Integrated RESTful APIs to power the AI-driven features, enabling real-time data exchange and a responsive experience.\n• Built a peer-to-peer video calling feature with the Agora SDK and WebSocket, supporting real-time communication between users.\n• Implemented custom authentication flows, including user access, session management, and secure interactions across the platform.\n• Built a booking and scheduling system that integrates Google Calendar to synchronize session availability and automate scheduling workflows.\n• Integrated Stripe to handle secure booking payments and transactions.\n• Built an admin dashboard with analytics so internal teams could monitor user activity, bookings, and platform performance.",
    toolsUsed: [
      "Next.js",
      "Shadcn",
      "Figma",
      "REST APIs",
      "WebSocket",
      "Agora SDK",
      "Stripe",
      "Google Calendar API",
    ],
    techStack: [
      "Next.js",
      "Shadcn",
      "Agora SDK",
      "WebSocket",
      "REST APIs",
      "Stripe",
      "Google Calendar API",
      "Figma",
    ],
    images: [],
    liveUrl: null,
    codeUrl: null,
  },
];

export const experience = [
  {
    role: "Frontend Developer (Contract)",
    company: "SHIKI STUDIOS",
    companyUrl: "https://example.com",
    dates: "NOVEMBER 2025 – MAY 2026",
    location: "Remote",
    bullets: [
      "Built and maintained a customer-facing AI-powered platform for actors, translating Figma designs into clean, re-useable, pixel-perfect frontend components.",
      "Designed and implemented complex UI flows, ensuring seamless user journey across onboarding, core-features and AI assisted workflows.",
      "Integrated RESTful APIs to power AI-driven features, enabling real-time data exchange and responsive user interaction.",
      "Developed a peer-to-peer video calling feature using Agora SDK and WebSocket, supporting real-time communication between users.",
      "Implemented custom authentication flows, handling user access, session management, and secure interaction across the platform.",
      "Built a comprehensive admin dashboard with analytics, enabling internal teams to monitor user activity, bookings and platform performance.",
      "Integrated Stripe payment to enable secure booking payments and transaction handling within the platform.",
      "Implemented a booking and scheduling system, integrating Google Calendar to synchronize session availability and automate scheduling workflows.",
      "Collaborated closely with product designer, backend engineers and product manager during planning, sprint execution, and feature delivery.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "FORMULAIT AI",
    companyUrl: "https://example.com",
    dates: "SEPTEMBER 2025 – NOVEMBER 2025",
    location: "Remote",
    bullets: [
      "Contributed to the development of two customer-facing AI-powered applications, focusing on building reusable UI components, debugging and maintaining core features.",
      "Shipped new features and enhancements that improves usability and user engagement across both applications.",
      "Integrated APIs to connect frontend interfaces with AI services, ensuring smooth data flow and real-time interactions.",
      "Applied best practices in performance optimization, accessibility, and responsive design, delivering modern and reliable web applications.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "FIXR TECHNOLOGIES",
    companyUrl: "https://example.com",
    dates: "MARCH 2025 – SEPTEMBER 2025",
    location: "Remote",
    bullets: [
      "Owned the frontend development of Plug24, a flagship e-commerce solution in the electronics and household appliance ecosystem, building customer-facing progressive web application (PWA) using Next.js and TypeScript.",
      "Translated Figma UI design into clean, scalable and pixel-perfect code, ensuring high performance, responsiveness, and accessibility across devices.",
      "Integrated and consumed RESTful APIs, enabling smooth product browsing, checkout, order tracking, and payment flows.",
      "Developed and maintained data management and seller dashboards for handling orders, inventory, logistics, customer records, and role-based admin access.",
      "Optimized UI components, resolved bugs, and implemented new features to enhance application functionality and user experience.",
      "Collaborated with multidisciplinary team of frontend developers, backend engineers, designers, and product managers during sprint planning, brainstorming sessions, and code reviews.",
      "Applied industry best practices in performance optimization, SEO, and maintainable code architecture, contributing to seamless deployments and long-term scalability.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "QURU LAB",
    companyUrl: "https://example.com",
    dates: "SEPTEMBER 2024 – DECEMBER 2025",
    location: "Remote",
    bullets: [
      "Developed and maintained frontend solutions across multiple client projects, including e-commerce, fintech, and enterprise dashboards.",
      "Built and optimized UI components from Figma designs using React.js, Next.js, TypeScript, and Tailwind CSS, ensuring responsive, accessible, and visually consistent applications.",
      "E-commerce (Building Material Store): Implemented customer-facing UIs and integrated APIs for browsing, checkout, and order management, improving user flow and engagement.",
      "Fintech PWA: Contributed to a multi-currency wallet application enabling users to send, save and receive money across 7+ currencies.",
      "Implemented wallet creation, currency swapping, and transaction history features.",
      "Integrated payment gateways and processors configurations.",
      "Built Admin dashboard with role-based permissions for staff/admin management.",
      "E-commerce Project: Developed and consumed APIs across three interconnected dashboards and a main store, streamlining order processing and admin workflows.",
      "Collaborated with backend developers, designers, and QA engineers on feature delivery, bug fixes and system testing.",
    ],
  },
  {
    role: "Website Designer",
    company: "IMPERIAL EDTECH",
    companyUrl: "https://example.com",
    dates: "JUNE 2023 – OCTOBER 2023",
    location: "Remote",
    bullets: [
      "Redesigned and optimized the company websites and subsidiary platforms, enhancing user experience and mobile responsiveness.",
      "Led the transformation of REV Marketplace into an elegant e-commerce store, ensuring competitiveness and efficient product uploads.",
      "Significantly improved SEO ranking for the IET and REV websites, driving increased organic traffic and visibility.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "ENOVERLAB",
    companyUrl: "https://example.com",
    dates: "NOVEMBER 2022 – JANUARY 2023",
    location: "Remote",
    bullets: [
      "Led multi-disciplinary 5-person team to design, develop, and launch Intakes – a health and wellness web application; prioritized and resolved 3+ new features and bug fixes.",
      "Developed strategic insights across 2 product teams, including design and management departments.",
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
  "ReactNative",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  // "GraphQL",
  "REST API",
  "Tailwind CSS",
  "Git / GitHub",
  // "Docker",
  // "AWS",
  // "Redis",
  "Socket.io",
  "Redux / RTK",
  "Zustand",
  "TanStack Query",
  "PostGIS",
  "Jotai",
  // "Jest",
  // "Agile / Scrum",
  "Firebase",
  "Supabase",
  "Sanity.io",
  "Vercel AI SDK",
  "Netlify",
  "Vercel",
  "Stripe",
  "Paystack",
  "LLM / RAG"
];

export const blogPosts: {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}[] = [
  // {
  //   title: "Architecting Scalable Microservices with Next.js and Node.js",
  //   summary:
  //     "A deep dive into distributed service boundaries, message queues, and end-to-end type safety in production systems.",
  //   date: "Oct 2024",
  //   readTime: "6 min read",
  //   tags: ["System Design", "Node.js", "Architecture"],
  //   url: "#",
  // },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Get in touch", href: "#contact" },
];
