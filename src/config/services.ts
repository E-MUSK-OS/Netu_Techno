export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  iconName: "Code2" | "Layers" | "Workflow" | "ShoppingCart" | "Cpu" | "Cloud";
  whoNeedsThis: string;
  problemsSolved: string[];
  whatWeDeliver: string[];
  technicalApproach: string;
  businessOutcomes: string[];
  technologies: string[];
  featured: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Purpose-built software tailored to your proprietary operational workflows, business rules, and scaling needs.",
    summary:
      "We design and build bespoke software applications engineered specifically around your company's unique operational requirements and customer workflows.",
    iconName: "Code2",
    whoNeedsThis:
      "Organizations whose specialized workflows outgrow off-the-shelf software or companies requiring proprietary digital systems to establish competitive operational advantage.",
    problemsSolved: [
      "Rigid off-the-shelf SaaS platforms that force suboptimal business workarounds",
      "Manual data handoffs across disconnected departmental spreadsheets",
      "Legacy software that cannot be extended with new capabilities or modern integrations",
      "High licensing costs for software where 80% of features remain unused",
    ],
    whatWeDeliver: [
      "Comprehensive requirements discovery and domain architecture specification",
      "Tailored web applications built with TypeScript, Next.js, and modern relational databases",
      "Role-based access control (RBAC), multi-level audit logs, and security controls",
      "Clean, modular codebase with automated testing, CI/CD pipelines, and maintainable documentation",
    ],
    technicalApproach:
      "We apply domain-driven design principles to model software entities around your real operations. Code is organized into clean, modular layers to ensure durability, low maintenance overhead, and rapid feature additions.",
    businessOutcomes: [
      "100% operational alignment with your specific business logic",
      "Elimination of recurring seat-based license bloat",
      "Zero dependency on rigid third-party feature roadmaps",
      "High data integrity and team productivity across departments",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "saas-engineering",
    slug: "saas-product-engineering",
    title: "SaaS Product Engineering",
    shortDescription:
      "Scalable multi-tenant architectures, subscription billing, reliable authentication, and responsive product dashboards.",
    summary:
      "From MVP conception to high-concurrency SaaS platforms, we build resilient, secure, and intuitive cloud software products.",
    iconName: "Layers",
    whoNeedsThis:
      "B2B startups and established enterprises launching digital subscription products, client portals, or customer-facing SaaS platforms.",
    problemsSolved: [
      "Difficulty isolating tenant data securely in shared environments",
      "Complex billing and tier subscription lifecycle edge cases",
      "Slow initial time-to-market due to boilerplate authentication and dashboard plumbing",
      "Platform performance bottlenecks when user concurrency increases",
    ],
    whatWeDeliver: [
      "Multi-tenant data isolation architecture (row-level security or tenant schema isolation)",
      "Secure authentication (SSO, OAuth2, MFA) and team workspace invitation flows",
      "Automated subscription billing, webhook reconciliations, and metered usage tracking",
      "High-performance interactive management dashboards with analytics reporting",
    ],
    technicalApproach:
      "We structure SaaS solutions with decoupled frontend and backend boundaries, resilient background job processing for async operations, and robust caching tiers to ensure responsiveness under spike loads.",
    businessOutcomes: [
      "Rapid product launch with production-grade engineering standards",
      "Low churn driven by intuitive UX and reliable performance",
      "Seamless recurring revenue capture with automated tier management",
      "Predictable infrastructure scaling costs as customer base expands",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
    featured: true,
  },
  {
    id: "api-integration",
    slug: "api-system-integration",
    title: "API & System Integration",
    shortDescription:
      "Bi-directional data sync, third-party platform connectors, webhook pipelines, and robust error recovery systems.",
    summary:
      "Eliminate data silos by interconnecting ERPs, CRMs, payment gateways, internal databases, and external partner APIs.",
    iconName: "Workflow",
    whoNeedsThis:
      "Businesses juggling multiple SaaS tools, legacy databases, or partner ecosystems that require reliable, automated data synchronization without manual intervention.",
    problemsSolved: [
      "Fragmented customer and financial data split across disparate systems",
      "Manual data re-entry leading to costly discrepancies and order delays",
      "Silent sync failures and untracked API rate limits causing lost records",
      "Complex third-party API changes breaking mission-critical business workflows",
    ],
    whatWeDeliver: [
      "Custom RESTful & GraphQL API gateway connectors",
      "Event-driven webhook ingestion handlers with cryptographic verification",
      "Queue-backed retry mechanisms, exponential backoff, and dead-letter queues",
      "Bi-directional data transformation, schema mapping, and validation layers",
    ],
    technicalApproach:
      "We build resilient integration middleware using asynchronous queues (BullMQ/Redis) and idempotent handlers. Every event is logged with transaction IDs to provide total auditability and self-healing recovery.",
    businessOutcomes: [
      "Real-time synchronized data across CRM, ERP, and operational tools",
      "Elimination of manual export/import and CSV spreadsheet headaches",
      "Near-zero data loss during network blips or external vendor downtime",
      "Accelerated partner onboarding through standardized API endpoints",
    ],
    technologies: ["REST APIs", "GraphQL", "Webhooks", "Redis Queues", "Node.js", "TypeScript"],
    featured: true,
  },
  {
    id: "ecommerce-tech",
    slug: "ecommerce-technology",
    title: "E-Commerce Technology",
    shortDescription:
      "Custom checkout experiences, multi-channel marketplace integrations, inventory sync, and fulfillment automation.",
    summary:
      "Enterprise e-commerce engineering that optimizes order routing, keeps multi-channel inventory synchronized, and streamlines customer purchasing.",
    iconName: "ShoppingCart",
    whoNeedsThis:
      "Direct-to-consumer (D2C) brands, B2B wholesale distributors, and multi-channel retailers seeking seamless checkout, automated inventory, and order fulfillment.",
    problemsSolved: [
      "Overselling and stock discrepancies across marketplaces and web storefronts",
      "High checkout drop-off rates caused by sluggish or rigid cart interfaces",
      "Manual order routing and label generation slowing down fulfillment teams",
      "Difficulty managing B2B custom pricing tiers, bulk quantities, and credit terms",
    ],
    whatWeDeliver: [
      "Headless storefronts and custom checkout flows with microsecond response times",
      "Centralized real-time inventory synchronization engine across multi-warehouses",
      "Automated shipping carrier API integrations (rate calculation, label creation, tracking)",
      "B2B quote-to-order portals with corporate account hierarchy and price rule tables",
    ],
    technicalApproach:
      "We design headless e-commerce architectures utilizing edge caching, optimistic UI updates, and webhook-driven inventory ledger updates to prevent concurrency conflicts during flash sales.",
    businessOutcomes: [
      "Higher checkout conversion rates from optimized checkout speed",
      "Substantial drop in fulfillment labor hours via automated workflows",
      "Accurate inventory tracking across all sales channels in real time",
      "Scalability to handle high-traffic promotional spikes with zero downtime",
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Stripe", "PostgreSQL", "Webhooks"],
    featured: true,
  },
  {
    id: "process-automation",
    slug: "business-process-automation",
    title: "Business Process Automation",
    shortDescription:
      "Intelligent workflows, document processing, notification pipelines, and automated reporting systems.",
    summary:
      "Automate repetitive operational procedures, document generation, approval hierarchies, and alert systems so your team focuses on high-leverage growth.",
    iconName: "Cpu",
    whoNeedsThis:
      "Companies spending hundreds of employee hours on repetitive data transcription, status tracking, manual invoicing, and multi-step approval coordination.",
    problemsSolved: [
      "High administrative overhead consuming senior staff attention",
      "Human errors in invoice creation, contract generation, and data transcription",
      "Customer response bottlenecks caused by manual review queues",
      "Lack of centralized visibility into where internal requests are stalled",
    ],
    whatWeDeliver: [
      "End-to-end workflow automation bots and rule engines",
      "Automated PDF document compilation, template merging, and delivery pipelines",
      "Multi-stage approval triggers integrated with Slack, Email, and SMS notifications",
      "Automated reconciliations, metric aggregations, and executive PDF digest reports",
    ],
    technicalApproach:
      "We map human operational dependencies and translate them into state machines with strict guards, idempotency keys, and fallbacks. Exceptions automatically route to human reviewers with rich context.",
    businessOutcomes: [
      "Up to 80% reduction in routine manual administrative task duration",
      "Near-complete elimination of transcription and calculation errors",
      "Dramatically faster cycle times for customer requests and approvals",
      "Transparent audit trail showing exact step-by-step process timing",
    ],
    technologies: ["Node.js", "Python", "State Machines", "Puppeteer", "PostgreSQL", "Cron Queues"],
    featured: true,
  },
  {
    id: "cloud-optimization",
    slug: "cloud-application-optimization",
    title: "Cloud & Application Optimization",
    shortDescription:
      "Infrastructure modernization, database query indexing, Core Web Vitals performance tuning, and 24/7 reliability.",
    summary:
      "Make your applications lightning fast, resilient under load, cost-efficient, and easy to maintain with modern cloud best practices.",
    iconName: "Cloud",
    whoNeedsThis:
      "Businesses experiencing slow page load times, high cloud server bills, database timeouts, or deployment anxiety.",
    problemsSolved: [
      "Slow web response times damaging user conversion and Google SEO rankings",
      "Unoptimized database queries triggering CPU spikes and connection pool exhaustion",
      "Unreliable deployment processes requiring manual steps and unplanned downtime",
      "Spiraling cloud infrastructure costs with poorly allocated instances",
    ],
    whatWeDeliver: [
      "Comprehensive performance audit (Core Web Vitals, API latency, DB query profiling)",
      "Database schema indexing, connection pooling (PgBouncer), and caching architecture",
      "Modern CI/CD automated deployment pipelines with zero-downtime rolling updates",
      "Proactive error tracking (Sentry), uptime telemetry, and health check endpoints",
    ],
    technicalApproach:
      "We pinpoint exact system latency bottlenecks using profilers and APM telemetry. We apply edge caching, bundle size reduction, database index optimization, and right-sized compute resources.",
    businessOutcomes: [
      "Sub-second page load times improving conversion rates and SEO rankings",
      "Reduction in monthly cloud infrastructure hosting expenses",
      "High reliability with graceful error degradation and automated recovery",
      "Confidence in releasing updates multiple times daily without customer disruption",
    ],
    technologies: ["Docker", "PostgreSQL", "Redis", "Next.js Turbopack", "Linux", "Vercel / AWS"],
    featured: true,
  },
];
