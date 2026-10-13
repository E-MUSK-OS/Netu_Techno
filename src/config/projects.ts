export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  industry: string;
  isInternalDemo: boolean;
  badgeText: string;
  businessChallenge: string;
  solutionDelivered: string;
  keyOutcomes: string[];
  techStack: string[];
  interfaceMockup: {
    type: "dashboard" | "pipeline" | "integration" | "workflow";
    accentColor: string;
    headline: string;
    statMetric: string;
    statLabel: string;
  };
}

export const featuredProjects: ProjectItem[] = [
  {
    id: "project-enterprise-workflow",
    name: "Enterprise Workflow Automation Engine",
    category: "Internal Architecture Showcase",
    industry: "[TARGET_CLIENT_INDUSTRY] Operations",
    isInternalDemo: true,
    badgeText: "Internal Architecture Showcase",
    businessChallenge:
      "[BUSINESS_PROBLEM] Disjointed multi-step operations requiring excessive manual data entry and spreadsheet coordination across 4 internal departments.",
    solutionDelivered:
      "Engineered an automated event-driven workflow engine with real-time state synchronization, role-based approval queues, and automated audit trails.",
    keyOutcomes: [
      "85% reduction in cross-departmental coordination latency",
      "100% elimination of manual CSV spreadsheet transfers",
      "Full cryptographic audit logging for compliance verification",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis Queues", "Tailwind CSS"],
    interfaceMockup: {
      type: "workflow",
      accentColor: "#2563EB",
      headline: "Pipeline Orchestrator Active",
      statMetric: "14,820",
      statLabel: "Automated Jobs Processed / 24h",
    },
  },
  {
    id: "project-api-integration-hub",
    name: "Unified API & Systems Integration Gateway",
    category: "Proof-of-Concept System",
    industry: "B2B Commerce & Logistics",
    isInternalDemo: true,
    badgeText: "Reference Implementation",
    businessChallenge:
      "Fragmented third-party platforms (CRM, ERP, and payment provider) operating with incompatible data schemas, leading to frequent silent record sync failures.",
    solutionDelivered:
      "Developed a resilient middleware integration hub with webhook signature validation, queue-based idempotent retries, and automated schema mapping.",
    keyOutcomes: [
      "Zero data loss with automated dead-letter queue recovery",
      "Under 250ms end-to-end sync latency across platforms",
      "Self-healing connectors with dynamic rate limit throttling",
    ],
    techStack: ["Node.js", "REST / Webhooks", "PostgreSQL", "Prisma", "Docker", "Prometheus"],
    interfaceMockup: {
      type: "integration",
      accentColor: "#132A43",
      headline: "Multi-Platform Sync Health: 99.98%",
      statMetric: "0 Sync Errors",
      statLabel: "Idempotent Event Handlers",
    },
  },
  {
    id: "project-custom-saas-portal",
    name: "Scalable Multi-Tenant Operations Dashboard",
    category: "Production Architecture Blueprint",
    industry: "Enterprise B2B Software",
    isInternalDemo: true,
    badgeText: "Architecture Blueprint",
    businessChallenge:
      "Need for a robust multi-tenant foundation capable of handling fine-grained tenant isolation, subscription tier limits, and responsive analytics reporting.",
    solutionDelivered:
      "Architected a Next.js App Router portal with row-level security, optimized PostgreSQL indexing, and server-driven interactive dashboard widgets.",
    keyOutcomes: [
      "Sub-200ms page load times achieved via server components",
      "Strict tenant isolation with automated access token revocation",
      "Modular widget architecture for extensible customer views",
    ],
    techStack: ["Next.js App Router", "React 19", "PostgreSQL", "Tailwind CSS", "Zod"],
    interfaceMockup: {
      type: "dashboard",
      accentColor: "#059669",
      headline: "Tenant Concurrency & Analytics",
      statMetric: "185ms",
      statLabel: "P95 Server Response Latency",
    },
  },
];
