// ===== EDIT YOUR INFORMATION HERE =====

export const profile = {
  name: "David Ndiga",
  title: "Computer Science Student",
  bio: "Computer Science student and freelance developer building full-stack web apps with React, Next.js, Python and Laravel, backed by Supabase, PostgreSQL and MongoDB. Diploma graduate, now pursuing my degree, with a passion for networking, cloud computing, DevOps and algorithms.",
  email: "ndigadavid01@gmail.com",
  phone: "0796269599",
  location: "Nairobi, Kenya",
  github: "https://github.com/davidape05-dev",
  linkedin: "https://www.linkedin.com/in/david-ndungu-ndiga",
  twitter: "https://twitter.com/ndigadavid",
};

export const education = [
  {
    level: "Degree",
    title: "Bachelor's Degree in Computer Science",
    school: "Zetech University",
    status: "In progress",
    current: true,
    note: "Currently pursuing my degree, building on my diploma with deeper study of software engineering, algorithms and systems.",
  },
  {
    level: "Diploma",
    title: "Diploma in Computer Science",
    school: "Zetech University",
    status: "Completed",
    current: false,
    note: "Completed the diploma programme, covering programming, databases, networking and web development, and delivered a React-based research project for the Kenyan tourism market.",
  },
];

export const experiences = [
  {
    title: "Industrial Attachment",
    company: "Nairobi City County Government — Innovation & Digital Economy Sector",
    period: "Present",
    description:
      "Working within the county's innovation and digital economy team, exploring and scoping digital systems for county departments, including revenue reconciliation and asset register concepts.",
    tags: ["Public Sector", "Systems Analysis", "Digital Innovation"],
    icon: "building",
  },
  {
    title: "Freelance Software Developer",
    company: "Self-employed",
    period: "Ongoing",
    description:
      "Designing, building and deploying web systems for clients end to end: requirements, database design, interface, deployment and ongoing support. Delivered a full church management system now live in production.",
    tags: ["React", "Next.js", "Version Control", "Client Work"],
    icon: "laptop",
  },
  {
    title: "Freelance Network Engineer & Administrator",
    company: "Self-employed",
    period: "Ongoing",
    description:
      "Designing, installing and maintaining network systems for clients end to end: requirements, network design, layout, configuration and ongoing support.",
    tags: ["Routing", "Protocols", "Network Uptime", "Client Work"],
    icon: "network",
  },
];

export const projects = [
  {
    name: "PCEA Thingati Church Management System",
    badge: "Client project · Live",
    description:
      "A private full-stack church management system for a church in Kiambu County. Covers members and households, attendance, life events, finance (contributions, expenses, petty cash, budgets, audit log), an asset register with depreciation schedules, reports, and role-based user access. Includes automated twice-weekly database backups via GitHub Actions. Accessible to church management only.",
    tags: ["React 18", "Supabase", "PostgreSQL", "Vercel", "GitHub Actions"],
    live: null,
    code: null,
    icon: "church",
    featured: true,
  },
  {
    name: "PCEA Thingati Church Website",
    badge: "Client project · Live",
    description:
      "A full-stack church website for a church in Kiambu County. Shares information about the church, its groups and clergy, weekly announcements and monthly events.",
    tags: ["Python", "Google Search Console", "SEO"],
    live: "https://pceathingati.org",
    code: null,
    icon: "church",
    featured: true,
  },
  {
    name: "Tour Guide Discovery Platform",
    badge: "Diploma research project",
    description:
      "A React-based platform that helps tourists discover local tour guides in Kenya. Built as my diploma research project, with a literature review, Waterfall methodology, a search and filter experience, and a user authentication flow.",
    tags: ["React", "JavaScript", "Research", "Tourism"],
    live: null,
    code: null,
    icon: "map",
  },
  {
    name: "Personal Portfolio",
    badge: "This site",
    description:
      "My portfolio, rebuilt from PHP to a modern stack: a fast, responsive single-page app deployed on Vercel, with a working contact form powered by Formspree.",
    tags: ["React", "Vite", "Tailwind CSS", "Vercel", "Formspree"],
    live: null,
    code: null,
    icon: "code",
  },
];

export const skills = [
  { group: "Programming Languages", icon: "laptop", items: ["JavaScript", "Python", "Java", "PHP", "SQL"] },
  { group: "Web Development", icon: "window", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Vite", "REST APIs"] },
  { group: "Backend & Data", icon: "database", items: ["Supabase", "PostgreSQL", "MongoDB", "MySQL", "Laravel (PHP)", "Database Design"] },
  { group: "Networking", icon: "network", items: ["TCP/IP", "OSI Model", "DNS", "IP Addressing", "Routing", "Network Topologies"] },
  { group: "Cloud & DevOps", icon: "cloud", items: ["Cloud Computing", "DevOps", "GitHub Actions", "Vercel"] },
  { group: "Tools", icon: "toolbox", items: ["Git & GitHub", "VS Code"] },
  { group: "Soft Skills", icon: "people", items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"] },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];