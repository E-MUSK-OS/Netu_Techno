export interface CoreModuleItem {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  technicalComponents: string[];
  features: string[];
}

export interface ArchitectureLayer {
  title: string;
  summary: string;
  details: string[];
  technologies: string[];
}

export interface ArchitectureOverview {
  frontend: string;
  backend: string;
  database: string;
  realtimeAndHardware?: string;
  storage?: string;
  layers?: ArchitectureLayer[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  name: string; // Backward compatibility with existing components
  subtitle: string;
  category: string;
  industry: string;
  client: string;
  timeline: string;
  status: string;
  featured: boolean;
  isInternalDemo: boolean;
  badgeText: string;
  shortDescription: string;
  fullOverview: string;
  businessChallenge: string; // Backward compatibility
  solutionDelivered: string; // Backward compatibility
  problemStatement: string[];
  keyOutcomes: string[];
  techStack: string[];
  keyMetrics: ProjectMetric[];
  architectureOverview: ArchitectureOverview;
  coreModules: CoreModuleItem[];
  interfaceMockup: {
    type: "dashboard" | "pipeline" | "integration" | "workflow";
    accentColor: string;
    headline: string;
    statMetric: string;
    statLabel: string;
    metrics?: { label: string; value: string }[];
  };
}

export const featuredProjects: ProjectItem[] = [
  {
    id: "orderos-erp-wms",
    slug: "orderos-ecommerce-warehouse-erp",
    title: "OrderOS — Enterprise Multi-Channel E-Commerce, Warehouse & ERP Platform",
    name: "OrderOS — Enterprise Multi-Channel E-Commerce, Warehouse & ERP Platform",
    subtitle:
      "Unified Marketplace Sync, Multi-Warehouse WMS, Video Packing Verification & Financial Accounting Engine",
    category: "Enterprise ERP & WMS",
    industry: "High-Volume Multi-Channel Retail & Logistics",
    client: "Confidential High-Volume Multi-Channel Brand & Logistics Seller",
    timeline: "Production Deployment (Enterprise Scale)",
    status: "Live & Active Production",
    featured: true,
    isInternalDemo: false,
    badgeText: "Flagship Enterprise Case Study",
    shortDescription:
      "An end-to-end e-commerce order management, multi-warehouse inventory, accounting ledger, and fulfillment automation platform built for high-volume multi-channel sellers.",
    fullOverview:
      "OrderOS is an enterprise-grade multi-channel e-commerce order management, multi-warehouse inventory, double-entry accounting ledger, and fulfillment automation platform engineered for high-volume brand operators. Architected to eliminate fractured data silos between marketplaces (Amazon SP-API, Myntra, custom webstores) and on-the-ground warehouse operations, OrderOS unifies real-time order ingestion, multi-location variant matrices, automated video packing verification (VMS), thermal label printing hardware integration (PrintBridge), and financial party ledgers under a single, highly resilient software architecture.",
    businessChallenge:
      "High-volume multi-channel sellers struggle with fragmented order sync delays, stock discrepancies across regional warehouses, packing dispute fraud, manual spreadsheet SKU mapping, and disconnected accounting ledgers causing costly fulfillment errors.",
    solutionDelivered:
      "Architected an end-to-end monolithic and micro-service hybrid ERP platform with layered Node.js/Express API, dual HTTP/WebSocket servers, Prisma PostgreSQL database, automated Amazon SP-API cron synchronization, VMS video packing verification, double-entry financial ledgers, and zero-dialog PrintBridge desktop thermal printing.",
    problemStatement: [
      "Marketplace Sync Fragility & Rate-Limiting: High-volume Amazon SP-API and Myntra order flows frequently suffered from API rate-limit throttling, unhandled payload drops, and delayed order status synchronization.",
      "Multi-Warehouse Inventory Desynchronization: Maintaining real-time stock counts across multiple physical warehouses, tracking raw materials vs. finished product variants, and handling inter-warehouse transit without duplicate bookings caused severe stockouts and overselling.",
      "Fulfillment Disputes & Packing Fraud: Without tamper-proof packing station auditing, customer return claims, empty box allegations, and carrier discrepancies resulted in significant financial leakage.",
      "Thermal Shipping Label Bottlenecks: Standard web browser printing dialogues created unacceptable latency (5–10 seconds per order) on high-speed fulfillment conveyor lines.",
      "Disjointed Financial & Party Accounting: Managing purchase challans, sales invoices, tax compliance, and supplier party ledgers across separate accounting spreadsheets led to monthly reconciliation nightmares.",
    ],
    keyOutcomes: [
      "99.98% Amazon SP-API order ingestion reliability with automated chunked batch queueing",
      "Zero-dialog sub-second shipping label dispatch via native PrintBridge daemon",
      "94% reduction in return disputes using tamper-proof VMS packing video logging",
      "Real-time synchronized stock across multiple warehouse nodes with automated transfer numbers",
      "Full double-entry party ledger and GST invoice automation eliminating manual reconciliation",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Socket.IO",
      "WebSockets",
      "Tailwind CSS",
      "shadcn/ui",
      "Amazon SP-API",
      "PrintBridge Hardware Daemon",
      "Nodemailer OTP",
      "NAS Storage",
    ],
    keyMetrics: [
      {
        label: "Core Modules",
        value: "7 Enterprise Modules",
        description: "End-to-end coverage spanning marketplace ingestion, VMS, inventory, and accounting",
      },
      {
        label: "Hardware Label Sync",
        value: "< 250ms",
        description: "Zero-dialog one-click thermal printing via native PrintBridge desktop daemon",
      },
      {
        label: "Batch Processing",
        value: "10,000+ Orders",
        description: "Chunked, synchronized, and verified per automated background cron cycle",
      },
      {
        label: "Packing Dispute Resolution",
        value: "100% Audit Trail",
        description: "Verified video playback, Awb barcode scanning, and TagLoop tracking",
      },
    ],
    architectureOverview: {
      frontend:
        "Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui components, paired with native desktop hardware integration via PrintBridge-Setup.exe for instant one-click thermal shipping label printing.",
      backend:
        "Node.js & Express architected following a strict Controller-Service-Repository-Validation-Middleware layered pattern (src/controllers, src/services, src/repositories, src/validations, src/middleware), dual HTTP + WebSocket server (server.js, ws-server.js, socket.js), automated background cron jobs (src/crons), and Nodemailer OTP transactional email services.",
      database:
        "PostgreSQL managed via Prisma ORM (prisma/schema.prisma) with 30+ relational migrations, composite indexes, and strict transactional ACID integrity.",
      realtimeAndHardware:
        "Dual Socket.IO & WebSockets for live operator event broadcasting, push notifications, and native Windows desktop hardware daemon (PrintBridge) for zero-dialog thermal barcode/shipping label printing.",
      storage:
        "Enterprise hybrid storage architecture with local server and Network Attached Storage (NAS) paths (nasPath.js, amazonBatchNasPath.js, companyMediaNasPath.js) for persistent video management system (VMS) footage, pack thumbnails, and bulk documents.",
      layers: [
        {
          title: "Presentation & Hardware Integration Layer",
          summary:
            "Responsive Next.js App Router administrative console paired with local Windows PrintBridge daemon.",
          details: [
            "Operator-focused packing station UI with high-contrast barcode scanner feedback and audio telemetry",
            "Low-latency Socket.IO event listeners for real-time inventory and packing station status updates",
            "Local TCP socket integration with PrintBridge-Setup.exe to bypass browser print dialogs directly to TSC/Zebra thermal printers",
          ],
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PrintBridge.exe", "Socket.IO Client"],
        },
        {
          title: "Layered Application Backend & Cron Engine",
          summary:
            "Decoupled Controller-Service-Repository architecture running dual HTTP and WebSocket listeners.",
          details: [
            "Strict separation of concerns: Controllers handle HTTP transport, Services execute business rules, Repositories interface with Prisma",
            "Automated background cron jobs (amazonOrder.cron.js, amazonAnalytics.cron.js, sheetDraft.cron.js) for resilient batch processing",
            "JWT session authentication with refresh token rotation and granular module permissions (permission.middleware.js)",
          ],
          technologies: ["Node.js", "Express", "Socket.IO", "Node-Cron", "JWT", "Nodemailer OTP"],
        },
        {
          title: "Relational Persistence & Migration Layer",
          summary:
            "Robust PostgreSQL database model managed through Prisma ORM with 30+ schema migrations.",
          details: [
            "Relational schema covering orders, batches, multi-warehouse inventory, products, materials, and double-entry accounting ledgers",
            "Composite indexes on marketplace order IDs, ASINs, SKUs, and tracking numbers for sub-10ms query execution",
            "Atomic Prisma transactions guaranteeing consistency across stock transfers and invoice generation",
          ],
          technologies: ["PostgreSQL", "Prisma ORM", "SQL Migrations", "Connection Pooling"],
        },
        {
          title: "Enterprise Storage & Media Streaming Layer",
          summary:
            "Hybrid on-premise and NAS architecture for video audit recordings and document archiving.",
          details: [
            "Automated video capture and ffmpeg thumbnail generation (videoThumbnail.js, generateThumbnail.js) on packing scan",
            "Path abstraction engine (nasPath.js, amazonBatchNasPath.js, companyMediaNasPath.js) for seamless network storage mounting",
            "Secure streaming endpoints for instant customer return dispute review and AWB audit playback",
          ],
          technologies: ["NAS Mounts", "FFmpeg", "Local Media Streams", "Multer Upload Pipeline"],
        },
      ],
    },
    coreModules: [
      {
        id: "module-marketplace-order-engine",
        moduleNumber: "01",
        title: "Multi-Channel Marketplace & Order Engine",
        technicalComponents: [
          "amazonOrder",
          "amazonBatch",
          "amazonBatchChunk",
          "asinImport",
          "myntraImport",
          "webstore",
        ],
        description:
          "Automated multi-channel order ingestion, batch processing, and marketplace catalog synchronization engineered for high-throughput resilience.",
        features: [
          "Automated Amazon Selling Partner API (SP-API) order syncing with intelligent backoff and rate-limit buffering",
          "Chunked batch processing architecture (amazonBatch, amazonBatchChunk) for parallel fulfillment queueing",
          "Automated ASIN catalog importing and dynamic product attribute extraction",
          "Myntra order and catalog ingestion engine supporting bulk updates and shipment confirmations",
          "Custom Webstore order management pipeline with unified order status normalization",
          "Automated cron-based order and analytics synchronization (amazonOrder.cron.js, amazonAnalytics.cron.js)",
        ],
      },
      {
        id: "module-inventory-sku-mapping",
        moduleNumber: "02",
        title: "Multi-Warehouse Inventory, Products & SKU Mapping",
        technicalComponents: [
          "warehouse",
          "inventory",
          "product",
          "productVariant",
          "material",
          "materialVariant",
          "transfer",
          "skuMapping",
          "sheetDraft",
        ],
        description:
          "Multi-location warehouse stock tracking, product and raw material variant matrices, inter-warehouse transfers, and bulk Excel SKU mapping.",
        features: [
          "Multi-location physical warehouse stock tracking with bin, rack, and aisle location granularity",
          "Product and raw material variant matrices (size, color, finish, fabric) with dynamic BOM consumption",
          "Inter-warehouse stock transfers with auto-generated transfer serial numbers (generateTransferNumber.js)",
          "Bulk Excel SKU mapping pipeline with validation parser (demo-sku-mapping.xlsx, excelUpload.middleware.js)",
          "Collaborative sheet draft persistence and background reconciliation cron (sheetDraft.cron.js)",
          "Automated low-stock inventory alerts and safety stock triggers (inventoryNotification.service.js)",
        ],
      },
      {
        id: "module-vms-packing-verification",
        moduleNumber: "03",
        title: "VMS (Video Management System) & Packing Verification",
        technicalComponents: ["vms", "tagLoop", "label", "PrintBridge"],
        description:
          "Tamper-proof operator packing station verification, barcode scan video recording, anti-fraud TagLoop return tracking, and one-click thermal label printing.",
        features: [
          "Dedicated operator terminal authentication and packing station security (operatorAuth, vmsAuth.middleware.js)",
          "Barcode & AWB tracking scan verification with visual pack confirmation and audio feedback",
          "Automated video recording and thumbnail generation (videoThumbnail.js, generateThumbnail.js) tied to order IDs",
          "Hybrid public and Network Attached Storage (NAS) storage path routing (nasPath.js, amazonBatchNasPath.js)",
          "Anti-fraud TagLoop return tracking and verification for disputing dishonest return claims",
          "Instant thermal shipping label generation and native desktop execution via PrintBridge-Setup.exe",
        ],
      },
      {
        id: "module-accounting-invoicing-ledgers",
        moduleNumber: "04",
        title: "B2B/B2C Accounting, Invoicing & Party Ledgers",
        technicalComponents: [
          "account",
          "party",
          "purchaseChallan",
          "purchaseInvoice",
          "salesChallan",
          "salesInvoice",
          "wallet",
        ],
        description:
          "Comprehensive financial accounting engine with double-entry party ledgers, challans, GST tax invoices, and integrated digital wallets.",
        features: [
          "Full double-entry-style party ledger management for suppliers, logistics partners, and wholesale buyers",
          "Purchase challans and purchase invoice generation with automated inventory receipt linkage",
          "Sales challans and automated GST-compliant tax invoices with HSN code calculation",
          "Company bank account and cash ledger reconciliation tracking",
          "Integrated user and dealer wallet balance management with automated transaction histories",
        ],
      },
      {
        id: "module-hr-rbac-operators",
        moduleNumber: "05",
        title: "HR, Operators & Role-Based Access Control",
        technicalComponents: [
          "auth",
          "userManagement",
          "employee",
          "salariedEmployee",
          "operator",
          "profile",
        ],
        description:
          "Enterprise security architecture featuring JWT authentication, email OTP verification, granular module permissions, and operator terminal tracking.",
        features: [
          "JWT access token and refresh token rotation security architecture (jwt.js)",
          "Email OTP verification and user lockout protection mechanisms (otp.js)",
          "Granular module-level and action-level permission middleware (permission.middleware.js)",
          "Salaried employee payroll tracking, attendance records, and document vaults",
          "Auto-generated employee identification codes and operator credential provisioning (generateEmployeeCode.js)",
        ],
      },
      {
        id: "module-notifications-analytics",
        moduleNumber: "06",
        title: "Real-Time Notifications & Analytics Dashboard",
        technicalComponents: [
          "notification",
          "amazonAnalytics",
          "amazonDailySummary",
          "socket.io",
        ],
        description:
          "Socket.IO real-time event broadcasting for warehouse floor alerts, accompanied by daily aggregated financial and sales analytics.",
        features: [
          "Socket.IO real-time push notification streaming for packing events, TagLoop scans, and inventory thresholds",
          "Daily aggregated Amazon sales volume, return rate, and revenue summary tables (amazonDailySummary)",
          "Comprehensive analytics visualizer for marketplace performance and fulfillment speed",
          "Operator throughput leaderboards and packaging efficiency telemetries",
        ],
      },
      {
        id: "module-storage-multitenant-config",
        moduleNumber: "07",
        title: "Enterprise Storage & Multi-Tenant Configuration",
        technicalComponents: [
          "company",
          "clientConfiguration",
          "settingMasters",
          "nasStorage",
        ],
        description:
          "Dynamic multi-tenant company configurations, master settings engines, and hybrid local/NAS media path abstraction.",
        features: [
          "Dynamic multi-company profiling supporting distinct GSTINs, branding, and billing entities",
          "Custom client configuration overrides for thermal printer dimensions, barcode formats, and marketplace keys",
          "Master settings dictionary engine for extensible workflow configurations",
          "Hybrid local server and NAS media path resolution (companyMediaNasPath.js, productImagePath.js, userProfileNasPath.js)",
        ],
      },
    ],
    interfaceMockup: {
      type: "dashboard",
      accentColor: "#C59B27",
      headline: "OrderOS Central Fulfillment & Inventory Live Telemetry",
      statMetric: "100k+ Orders / mo",
      statLabel: "Automated Fulfillment with VMS & PrintBridge Sync",
      metrics: [
        { label: "Active Warehouses", value: "4 Regional Hubs" },
        { label: "PrintBridge Sync", value: "Zero-Dialog Real-Time" },
        { label: "VMS Audit Trail", value: "100% Video Logged" },
      ],
    },
  },
  {
    id: "project-enterprise-workflow",
    slug: "enterprise-workflow-automation-engine",
    title: "Enterprise Workflow Automation Engine",
    name: "Enterprise Workflow Automation Engine",
    subtitle: "Event-Driven Orchestrator with Real-Time State Synchronization & Audit Logging",
    category: "Workflow Automation",
    industry: "Enterprise Operations & Logistics",
    client: "Confidential Industrial Logistics Group",
    timeline: "Completed Architecture Showcase",
    status: "Production Reference System",
    featured: true,
    isInternalDemo: true,
    badgeText: "Internal Architecture Showcase",
    shortDescription:
      "Engineered an automated event-driven workflow engine with real-time state synchronization, role-based approval queues, and automated audit trails.",
    fullOverview:
      "A high-throughput workflow orchestration engine designed to eliminate manual spreadsheet coordination across disparate corporate departments. Built with event-driven architecture, cryptographic state verification, and automated background queue workers, this system processes thousands of critical business actions every day with zero human data-entry bottlenecks.",
    businessChallenge:
      "Disjointed multi-step operations requiring excessive manual data entry and spreadsheet coordination across 4 internal departments.",
    solutionDelivered:
      "Engineered an automated event-driven workflow engine with real-time state synchronization, role-based approval queues, and automated audit trails.",
    problemStatement: [
      "Departmental siloing created 3-day turnaround delays on internal work orders.",
      "Spreadsheet-based coordination resulted in frequent version conflicts and unlogged alterations.",
      "Lack of centralized audit trails prevented compliance certification and governance oversight.",
    ],
    keyOutcomes: [
      "85% reduction in cross-departmental coordination latency",
      "100% elimination of manual CSV spreadsheet transfers",
      "Full cryptographic audit logging for compliance verification",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis Queues", "Tailwind CSS"],
    keyMetrics: [
      { label: "Jobs Processed", value: "14,820 / 24h", description: "Automated business workflow jobs processed with zero errors" },
      { label: "Latency Reduction", value: "85%", description: "Drop in cross-departmental approval turnaround time" },
      { label: "Audit Accuracy", value: "100%", description: "Cryptographically verified operational change logs" },
    ],
    architectureOverview: {
      frontend: "Next.js App Router client with responsive step-by-step approval pipelines.",
      backend: "Node.js worker queues powered by Redis and event-driven job dispatchers.",
      database: "PostgreSQL with strict state transition constraints.",
      realtimeAndHardware: "WebSocket live stream for team-wide status updates.",
    },
    coreModules: [
      {
        id: "module-pipeline-orchestrator",
        moduleNumber: "01",
        title: "Pipeline Orchestrator & State Engine",
        technicalComponents: ["queueWorker", "stateMachine", "redisBroker"],
        description: "Deterministic state engine governing multi-step approval workflows.",
        features: [
          "Declarative workflow graph definition with conditional branching",
          "Automated retry mechanisms with exponential backoff on transient errors",
          "Real-time event broadcasting to all connected departmental dashboards",
        ],
      },
      {
        id: "module-audit-compliance",
        moduleNumber: "02",
        title: "Compliance & Audit Trail Vault",
        technicalComponents: ["auditLogger", "cryptoSigner", "exportService"],
        description: "Tamper-proof chronological record of every decision and state transition.",
        features: [
          "Cryptographic hash chaining on all state transition log entries",
          "Automated PDF and CSV export generation for external regulatory audits",
          "Granular role-based authorization for administrative reviews",
        ],
      },
    ],
    interfaceMockup: {
      type: "workflow",
      accentColor: "#2563EB",
      headline: "Pipeline Orchestrator Active",
      statMetric: "14,820",
      statLabel: "Automated Jobs Processed / 24h",
      metrics: [
        { label: "Active Queues", value: "12 Channels" },
        { label: "Failover Mode", value: "Auto-Recover" },
      ],
    },
  },
  {
    id: "project-api-integration-hub",
    slug: "unified-api-integration-gateway",
    title: "Unified API & Systems Integration Gateway",
    name: "Unified API & Systems Integration Gateway",
    subtitle: "Resilient Middleware Hub with Webhook Validation & Idempotent Retries",
    category: "API Integration",
    industry: "B2B Commerce & Logistics",
    client: "Confidential B2B Wholesale Network",
    timeline: "Completed Reference Implementation",
    status: "Production Reference System",
    featured: true,
    isInternalDemo: true,
    badgeText: "Reference Implementation",
    shortDescription:
      "Developed a resilient middleware integration hub with webhook signature validation, queue-based idempotent retries, and automated schema mapping.",
    fullOverview:
      "A high-availability API gateway engineered to bridge incompatible legacy enterprise systems with modern cloud platforms. The gateway enforces cryptographic webhook authentication, idempotent transaction queues, and dynamic rate-limiting to ensure zero data loss during high-volume enterprise data synchronization.",
    businessChallenge:
      "Fragmented third-party platforms (CRM, ERP, and payment provider) operating with incompatible data schemas, leading to frequent silent record sync failures.",
    solutionDelivered:
      "Developed a resilient middleware integration hub with webhook signature validation, queue-based idempotent retries, and automated schema mapping.",
    problemStatement: [
      "Incompatible legacy data payloads caused 4% silent transaction drops between CRM and ERP.",
      "Third-party rate-limiting throttled critical end-of-day order synchronizations.",
      "Lack of centralized payload monitoring left integration failures undetected for days.",
    ],
    keyOutcomes: [
      "Zero data loss with automated dead-letter queue recovery",
      "Under 250ms end-to-end sync latency across platforms",
      "Self-healing connectors with dynamic rate limit throttling",
    ],
    techStack: ["Node.js", "REST / Webhooks", "PostgreSQL", "Prisma", "Docker", "Prometheus"],
    keyMetrics: [
      { label: "Sync Health", value: "99.98%", description: "Continuous operational uptime across all integrated APIs" },
      { label: "Data Loss", value: "0 Errors", description: "Guaranteed delivery via persistent dead-letter recovery queues" },
      { label: "Sync Latency", value: "< 250ms", description: "P95 end-to-end event transformation and ingestion time" },
    ],
    architectureOverview: {
      frontend: "Monitoring console providing live HTTP telemetry and payload inspection.",
      backend: "Node.js microservice architecture with Docker containerization.",
      database: "PostgreSQL using Prisma ORM for transaction record storage.",
    },
    coreModules: [
      {
        id: "module-gateway-proxy",
        moduleNumber: "01",
        title: "Intelligent Gateway & Rate Limiter",
        technicalComponents: ["rateLimiter", "circuitBreaker", "authValidator"],
        description: "Adaptive API proxy managing burst traffic and third-party rate limits.",
        features: [
          "HMAC SHA-256 webhook payload signature verification",
          "Dynamic token-bucket rate limiting tailored to provider limits",
          "Automated circuit breaker preventing cascade failure during partner outages",
        ],
      },
      {
        id: "module-schema-transformer",
        moduleNumber: "02",
        title: "Dynamic Schema Transformer & DLQ",
        technicalComponents: ["jsonTransformer", "deadLetterQueue", "retryWorker"],
        description: "Schema mapping engine ensuring compatibility between legacy and modern APIs.",
        features: [
          "Zero-data-loss dead letter queue (DLQ) with one-click manual retry",
          "Bidirectional JSON schema normalization with Zod runtime validation",
          "Prometheus metrics instrumentation for alerting on anomalous error spikes",
        ],
      },
    ],
    interfaceMockup: {
      type: "integration",
      accentColor: "#132A43",
      headline: "Multi-Platform Sync Health: 99.98%",
      statMetric: "0 Sync Errors",
      statLabel: "Idempotent Event Handlers",
      metrics: [
        { label: "Throughput", value: "450 req/sec" },
        { label: "DLQ Depth", value: "0 Pending" },
      ],
    },
  },
  {
    id: "project-custom-saas-portal",
    slug: "scalable-multitenant-saas-portal",
    title: "Scalable Multi-Tenant Operations Dashboard",
    name: "Scalable Multi-Tenant Operations Dashboard",
    subtitle: "High-Performance Next.js Portal with Row-Level Security & Server Components",
    category: "Custom Web Apps",
    industry: "Enterprise B2B Software",
    client: "Confidential FinTech Software Venture",
    timeline: "Completed Architecture Blueprint",
    status: "Production Reference System",
    featured: true,
    isInternalDemo: true,
    badgeText: "Architecture Blueprint",
    shortDescription:
      "Architected a Next.js App Router portal with row-level security, optimized PostgreSQL indexing, and server-driven interactive dashboard widgets.",
    fullOverview:
      "A modular, multi-tenant administrative portal designed for enterprise software companies. Built with Next.js App Router, React Server Components, and PostgreSQL Row-Level Security (RLS), the architecture guarantees airtight tenant isolation while achieving lightning-fast page transitions and real-time analytical telemetry.",
    businessChallenge:
      "Need for a robust multi-tenant foundation capable of handling fine-grained tenant isolation, subscription tier limits, and responsive analytics reporting.",
    solutionDelivered:
      "Architected a Next.js App Router portal with row-level security, optimized PostgreSQL indexing, and server-driven interactive dashboard widgets.",
    problemStatement: [
      "Client-side heavy rendering created sluggish dashboard performance for power users.",
      "Tenant data leakage concerns demanded cryptographic data isolation at the database layer.",
      "Rigid UI components made customized enterprise tier views cumbersome to maintain.",
    ],
    keyOutcomes: [
      "Sub-200ms page load times achieved via server components",
      "Strict tenant isolation with automated access token revocation",
      "Modular widget architecture for extensible customer views",
    ],
    techStack: ["Next.js App Router", "React 19", "PostgreSQL", "Tailwind CSS", "Zod", "Prisma"],
    keyMetrics: [
      { label: "Response Latency", value: "185ms", description: "P95 server response latency powered by React Server Components" },
      { label: "Tenant Isolation", value: "100% Strict", description: "Zero data leakage via database row-level security policies" },
      { label: "Lighthouse Score", value: "98/100", description: "Exceptional core web vitals and desktop performance" },
    ],
    architectureOverview: {
      frontend: "Next.js App Router with React Server Components and Tailwind CSS.",
      backend: "Server actions and API route handlers with Zod schema validation.",
      database: "PostgreSQL with multi-tenant row-level security policies.",
    },
    coreModules: [
      {
        id: "module-tenant-manager",
        moduleNumber: "01",
        title: "Tenant Isolation & RBAC Engine",
        technicalComponents: ["tenantContext", "rlsPolicy", "sessionGuard"],
        description: "Airtight multi-tenant partitioning with granular access control lists.",
        features: [
          "Automated tenant context injection via Next.js middleware",
          "Dynamic permission hierarchy (Owner, Admin, Operator, Auditor)",
          "Instant session revocation and token blacklisting on credential changes",
        ],
      },
      {
        id: "module-analytics-widgets",
        moduleNumber: "02",
        title: "Server-Driven Analytics Widgets",
        technicalComponents: ["streamingRsc", "cacheManager", "metricChart"],
        description: "Low-overhead visual analytics streamed directly from server caches.",
        features: [
          "Streaming UI with Suspense boundaries for non-blocking dashboard loading",
          "Optimized PostgreSQL aggregations leveraging composite covering indexes",
          "Customizable widget layouts persisted per user profile",
        ],
      },
    ],
    interfaceMockup: {
      type: "dashboard",
      accentColor: "#059669",
      headline: "Tenant Concurrency & Analytics",
      statMetric: "185ms",
      statLabel: "P95 Server Response Latency",
      metrics: [
        { label: "Tenant Count", value: "1,200+" },
        { label: "Isolation Guard", value: "Enforced" },
      ],
    },
  },
];

// Helper functions for easy querying
export function getAllProjects(): ProjectItem[] {
  return featuredProjects;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectItem[] {
  return featuredProjects.filter((p) => p.featured);
}
