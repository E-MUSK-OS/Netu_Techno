export interface CareerItem {
  id: string;
  slug: string;
  title: string;
  department: string;
  employmentType: string;
  experienceLevel: string;
  location: string;
  badge: string;
  overview: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  technologies: string[];
}

export const careersData: CareerItem[] = [
  {
    id: "frontend-developer",
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "Frontend & UI Engineering",
    employmentType: "Full-Time",
    experienceLevel: "0 - 2 Years",
    location: "Surat, Gujarat (Hybrid / Flexible)",
    badge: "Active Hiring",
    overview:
      "Join Netu Techno to build world-class, high-performance web applications, interactive dashboards, and scalable design systems with Next.js, React, TypeScript, and modern styling architectures.",
    responsibilities: [
      "Architect and deliver responsive, high-fidelity user interfaces using Next.js (App Router), React, and TypeScript.",
      "Implement fluid micro-interactions and smooth scroll animations using Tailwind CSS and Framer Motion.",
      "Optimize web applications for sub-second Core Web Vitals (LCP, CLS, INP) and seamless cross-browser consistency.",
      "Collaborate with backend architects to integrate REST and GraphQL endpoints with strict type-safety and robust error states.",
      "Maintain modular component systems, write clean maintainable code, and conduct peer code reviews.",
    ],
    requiredSkills: [
      "Strong proficiency in TypeScript, JavaScript (ES6+), and React 18 / 19 ecosystem.",
      "Deep practical experience with Next.js (App Router, Server Components, client optimizations).",
      "Expertise with Tailwind CSS, responsive layouts, CSS Flexbox/Grid, and modern design systems.",
      "Hands-on experience with Framer Motion or modern web animation libraries.",
      "Solid understanding of client-side state management, Git version control, and RESTful API consumption.",
    ],
    preferredSkills: [
      "Experience with headless WordPress integration and Next.js Incremental Static Regeneration (ISR).",
      "Familiarity with web accessibility guidelines (WCAG) and browser performance profiling tools.",
      "Basic understanding of automated testing using Jest, React Testing Library, or Playwright.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Zod", "REST / GraphQL"],
  },
  {
    id: "backend-developer",
    slug: "backend-developer",
    title: "Backend Developer",
    department: "Systems & Cloud Engineering",
    employmentType: "Full-Time",
    experienceLevel: "0 - 2 Years",
    location: "Surat, Gujarat (Hybrid / Flexible)",
    badge: "Core Engineering",
    overview:
      "Architect scalable backend microservices, event-driven message queues, high-throughput APIs, and bulletproof database schemas powering enterprise business automation.",
    responsibilities: [
      "Design, develop, and maintain high-throughput backend services and APIs using Node.js, Express/NestJS, and TypeScript.",
      "Architect relational database schemas in PostgreSQL / MySQL with query optimization, indexing, and connection pooling.",
      "Build asynchronous event queues, background workers, and webhook processing engines with automated retries (Redis / BullMQ).",
      "Implement enterprise-grade authentication, role-based access control (RBAC), data encryption, and OWASP security standards.",
      "Monitor system uptime, implement structured telemetry and error tracking, and deploy containerized workloads using Docker.",
    ],
    requiredSkills: [
      "Deep expertise in Node.js and TypeScript for scalable backend server development.",
      "Strong relational database proficiency (PostgreSQL / MySQL) including schema migrations, indexing, and complex queries.",
      "Hands-on experience with modern ORMs (Prisma, Drizzle, or TypeORM) and query profiling.",
      "Proven ability to design clean RESTful APIs, OpenAPI documentation, and webhook consumers/producers.",
      "Practical experience with Redis caching, message queue architectures, and Docker containerization.",
    ],
    preferredSkills: [
      "Experience with AWS or GCP cloud infrastructure (EC2, S3, RDS, Lambda) and CI/CD pipelines.",
      "Familiarity with Python for workflow automation, data scraping, or microservices.",
      "Knowledge of microservices communication patterns and distributed transaction management.",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker", "REST / GraphQL", "Linux"],
  },
  {
    id: "fullstack-developer",
    slug: "fullstack-developer",
    title: "Full Stack Developer",
    department: "End-to-End Product Engineering",
    employmentType: "Full-Time",
    experienceLevel: "0 - 2 Years",
    location: "Surat, Gujarat (Hybrid / Flexible)",
    badge: "High Priority",
    overview:
      "Lead the end-to-end delivery of custom digital platforms and SaaS products, orchestrating modern Next.js frontends with resilient cloud-native backend services.",
    responsibilities: [
      "Own end-to-end feature lifecycles from architecture design and database modeling to UI delivery and deployment.",
      "Build type-safe full-stack web applications using Next.js App Router, TypeScript, PostgreSQL, and Prisma/Drizzle.",
      "Integrate complex third-party APIs including Stripe payments, communication services (Twilio, SendGrid), and CRM systems.",
      "Ensure end-to-end performance, type safety from database to UI, and high automated test coverage.",
      "Collaborate directly with senior architects to translate client operational bottlenecks into durable technical solutions.",
    ],
    requiredSkills: [
      "3+ years of full-stack engineering experience delivering production web applications with Next.js/React and Node.js.",
      "Deep end-to-end TypeScript mastery across client, server, and database layers.",
      "Solid experience with relational databases (PostgreSQL/MySQL), schema modeling, and caching with Redis.",
      "Experience implementing secure authentication (OAuth, JWT, session auth) and payment workflows (Stripe).",
      "Strong proficiency with modern Git workflows, CI/CD automated deployment pipelines, and Linux basics.",
    ],
    preferredSkills: [
      "Experience architecting multi-tenant SaaS platforms or headless CMS / WordPress solutions.",
      "Knowledge of Docker containerization, cloud hosting (Vercel, AWS), and system performance tuning.",
      "Experience with GraphQL APIs or state machines for complex workflow execution.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Redis", "Docker", "Stripe API"],
  },
];

export const culturePerks = [
  {
    title: "Engineering Excellence",
    description: "Work on clean, typed architectures without legacy baggage or technical debt compromises.",
    iconName: "Code2",
  },
  {
    title: "Competitive Compensation",
    description: "Merit-based compensation packages, timely performance reviews, and yearly milestone rewards.",
    iconName: "TrendingUp",
  },
  {
    title: "Flexible Hybrid Culture",
    description: "Balanced work environment with hybrid options and flexible hours focused on outcomes, not seat time.",
    iconName: "Clock",
  },
  {
    title: "Continuous Learning",
    description: "Dedicated learning budget, course reimbursements, and peer architecture code reviews.",
    iconName: "GraduationCap",
  },
  {
    title: "Direct Impact & Ownership",
    description: "Your code runs mission-critical client workflows. No bureaucratic silos or red tape.",
    iconName: "Sparkles",
  },
  {
    title: "Modern Tech Toolchain",
    description: "Work daily with modern toolchains: Next.js, TypeScript, PostgreSQL, Tailwind CSS, and AI-assisted workflows.",
    iconName: "Cpu",
  },
];

