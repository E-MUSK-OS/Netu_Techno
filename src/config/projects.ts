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
    id: "orderos",
    slug: "orderos",
    title: "OrderOS — Enterprise Multi-Channel E-Commerce, Warehouse & ERP Platform",
    name: "OrderOS — Enterprise Multi-Channel E-Commerce, Warehouse & ERP Platform",
    subtitle:
      "Unified Marketplace Sync, Multi-Warehouse WMS, Video Packing Verification, API Gateway & Accounting Engine",
    category: "Enterprise ERP & WMS",
    industry: "High-Volume Multi-Channel Retail & Logistics",
    client: "Confidential High-Volume Multi-Channel Brand & Logistics Seller",
    timeline: "Production Deployment (Enterprise Scale)",
    status: "Live & Active Production",
    featured: true,
    isInternalDemo: false,
    badgeText: "Flagship Enterprise Case Study",
    shortDescription:
      "An end-to-end enterprise e-commerce order management, multi-warehouse inventory, accounting ledger, API integration gateway, and fulfillment automation platform built for high-volume multi-channel sellers.",
    fullOverview:
      "OrderOS is an enterprise-grade multi-channel e-commerce order management, multi-warehouse inventory, double-entry accounting ledger, and fulfillment automation platform engineered for high-volume brand operators. Architected to eliminate fractured data silos between marketplaces (Amazon SP-API, Myntra, custom webstores) and on-the-ground warehouse operations, OrderOS unifies real-time order ingestion, multi-location variant matrices, automated video packing verification (VMS), thermal label printing hardware integration (PrintBridge), double-entry party ledgers, event-driven workflow state orchestration, and resilient API gateway middleware under a single, highly resilient software architecture.",
    businessChallenge:
      "High-volume multi-channel sellers struggle with fragmented order sync delays, stock discrepancies across regional warehouses, packing dispute fraud, manual spreadsheet coordination, incompatible third-party API schemas, and disconnected accounting ledgers causing costly fulfillment errors and administrative friction.",
    solutionDelivered:
      "Architected an end-to-end monolithic and micro-service hybrid ERP platform with layered Node.js/Express API, dual HTTP/WebSocket servers, Prisma PostgreSQL database, automated Amazon SP-API cron synchronization, VMS video packing verification, double-entry financial ledgers, zero-dialog PrintBridge desktop thermal printing, event-driven workflow queue workers, and a self-healing API gateway with dead-letter queue recovery.",
    problemStatement: [
      "Marketplace Sync Fragility & Rate-Limiting: High-volume Amazon SP-API and Myntra order flows frequently suffered from API rate-limit throttling, unhandled payload drops, and delayed order status synchronization.",
      "Multi-Warehouse Inventory Desynchronization: Maintaining real-time stock counts across multiple physical warehouses, tracking raw materials vs. finished product variants, and handling inter-warehouse transit without duplicate bookings caused severe stockouts and overselling.",
      "Fulfillment Disputes & Packing Fraud: Without tamper-proof packing station auditing, customer return claims, empty box allegations, and carrier discrepancies resulted in significant financial leakage.",
      "Thermal Shipping Label Bottlenecks: Standard web browser printing dialogues created unacceptable latency (5–10 seconds per order) on high-speed fulfillment conveyor lines.",
      "Disjointed Financial & Party Accounting: Managing purchase challans, sales invoices, tax compliance, and supplier party ledgers across separate accounting spreadsheets led to monthly reconciliation nightmares.",
      "Departmental Siloing & Manual Spreadsheet Coordination: Disjointed multi-step operations requiring manual CSV data entry across internal departments caused multi-day turnaround delays and unlogged stock alteration records.",
      "Third-Party API Incompatibility & Silent Sync Drops: Incompatible legacy partner data payloads (CRM, ERP, and payment providers) caused silent transaction drops and lacked centralized dead-letter recovery.",
      "Multi-Tenant Security & High-Concurrency Dashboard Latency: High-throughput warehouse operations suffered from sluggish dashboard performance, while multi-brand tenant operations demanded cryptographic data isolation at the database layer.",
    ],
    keyOutcomes: [
      "99.98% Amazon SP-API and marketplace order ingestion reliability with automated chunked batch queueing",
      "Zero-dialog sub-second shipping label dispatch via native PrintBridge desktop hardware daemon",
      "94% reduction in return disputes using tamper-proof VMS packing video logging and TagLoop tracking",
      "Real-time synchronized stock across multiple warehouse nodes with automated transfer numbers and low-stock alerts",
      "Full double-entry party ledger and GST tax invoice automation eliminating manual spreadsheet reconciliation",
      "Zero data loss with automated dead-letter queue (DLQ) recovery and self-healing API connectors across all integrated endpoints",
      "85% reduction in cross-departmental coordination latency via automated event-driven state orchestration",
      "14,820+ automated business workflow jobs processed per 24-hour cycle with cryptographic audit logging",
      "Sub-200ms page load times achieved via Next.js React Server Components and strict PostgreSQL Row-Level Security",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React 19",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Socket.IO",
      "WebSockets",
      "Redis Queues",
      "Tailwind CSS",
      "shadcn/ui",
      "Amazon SP-API",
      "PrintBridge Hardware Daemon",
      "Docker",
      "Prometheus",
      "Zod",
      "Nodemailer OTP",
      "NAS Storage",
    ],
    keyMetrics: [
      {
        label: "Core Modules",
        value: "11 Enterprise Modules",
        description: "End-to-end coverage spanning marketplace ingestion, WMS, VMS packing, accounting, API gateway, and workflow automation",
      },
      {
        label: "Hardware Label Sync",
        value: "< 250ms",
        description: "Zero-dialog one-click thermal printing via native PrintBridge desktop daemon",
      },
      {
        label: "Batch & Event Throughput",
        value: "100k+ Orders / mo",
        description: "Chunked, synchronized, and verified per automated background cron cycle",
      },
      {
        label: "API & Sync Health",
        value: "99.98% Uptime",
        description: "Continuous operational uptime with zero-loss dead-letter queue recovery",
      },
      {
        label: "Workflow Automation",
        value: "14,820 Jobs / 24h",
        description: "Automated business state transitions processed with cryptographic audit logging",
      },
      {
        label: "Server Response Latency",
        value: "185ms P95",
        description: "Powered by Next.js React Server Components and optimized composite indexes",
      },
    ],
    architectureOverview: {
      frontend:
        "Next.js (App Router) with React Server Components, TypeScript, Tailwind CSS, and shadcn/ui components, paired with native desktop hardware integration via PrintBridge-Setup.exe for instant one-click thermal shipping label printing.",
      backend:
        "Node.js & Express architected following a strict Controller-Service-Repository-Validation-Middleware layered pattern (src/controllers, src/services, src/repositories, src/validations, src/middleware), dual HTTP + WebSocket server (server.js, ws-server.js, socket.js), automated background cron jobs (src/crons), Redis event queues, and Nodemailer OTP transactional email services.",
      database:
        "PostgreSQL managed via Prisma ORM (prisma/schema.prisma) with 30+ relational migrations, composite indexes, Row-Level Security policies, and strict transactional ACID integrity.",
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
          technologies: ["Next.js", "TypeScript", "React 19", "Tailwind CSS", "shadcn/ui", "PrintBridge.exe", "Socket.IO Client"],
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
          technologies: ["Node.js", "Express", "Socket.IO", "Node-Cron", "JWT", "Nodemailer OTP", "Redis Queues"],
        },
        {
          title: "Relational Persistence & Migration Layer",
          summary:
            "Robust PostgreSQL database model managed through Prisma ORM with 30+ schema migrations.",
          details: [
            "Relational schema covering orders, batches, multi-warehouse inventory, products, materials, and double-entry accounting ledgers",
            "Composite indexes on marketplace order IDs, ASINs, SKUs, and tracking numbers for sub-10ms query execution",
            "Atomic Prisma transactions guaranteeing consistency across stock transfers and invoice generation with Row-Level Security (RLS)",
          ],
          technologies: ["PostgreSQL", "Prisma ORM", "SQL Migrations", "Connection Pooling", "Row-Level Security"],
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
        {
          title: "Integration Gateway & Event Broker Layer",
          summary:
            "Resilient API middleware and event queue broker connecting external marketplaces and legacy systems.",
          details: [
            "HMAC SHA-256 webhook payload signature verification and dynamic token-bucket rate limiting",
            "Zero-data-loss dead letter queue (DLQ) with automatic retry mechanisms and circuit breakers",
            "Prometheus metrics instrumentation for alerting on anomalous error spikes and queue depths",
          ],
          technologies: ["Docker", "Prometheus", "REST / Webhooks", "Redis Broker", "Zod"],
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
      {
        id: "module-pipeline-orchestrator",
        moduleNumber: "08",
        title: "Pipeline Orchestrator & State Engine",
        technicalComponents: ["queueWorker", "stateMachine", "redisBroker"],
        description:
          "Deterministic event-driven state engine governing multi-step cross-departmental approval workflows and automated job queues.",
        features: [
          "Declarative workflow graph definition with conditional branching and automated stage transitions",
          "Automated retry mechanisms with exponential backoff on transient external service errors",
          "Real-time event broadcasting to connected administrative and fulfillment dashboards via Redis queues",
        ],
      },
      {
        id: "module-audit-compliance",
        moduleNumber: "09",
        title: "Compliance & Cryptographic Audit Trail Vault",
        technicalComponents: ["auditLogger", "cryptoSigner", "exportService"],
        description:
          "Tamper-proof chronological record vault verifying every business decision, state change, and operational stock alteration.",
        features: [
          "Cryptographic hash chaining on all state transition log entries for non-repudiation",
          "Automated PDF and CSV export generation for external financial and regulatory audits",
          "Granular role-based authorization for administrative compliance reviews and event inspections",
        ],
      },
      {
        id: "module-gateway-proxy",
        moduleNumber: "10",
        title: "Resilient API Gateway & Dead-Letter Queue (DLQ)",
        technicalComponents: ["rateLimiter", "circuitBreaker", "deadLetterQueue", "jsonTransformer"],
        description:
          "High-availability middleware gateway bridging external marketplaces, legacy ERPs, and carriers with zero data loss.",
        features: [
          "HMAC SHA-256 webhook payload signature verification and dynamic token-bucket rate limiting",
          "Zero-data-loss dead letter queue (DLQ) with automated self-healing retry mechanisms",
          "Bidirectional JSON schema normalization with Zod runtime validation and Prometheus instrumentation",
        ],
      },
      {
        id: "module-analytics-widgets",
        moduleNumber: "11",
        title: "Server-Driven Operations Console & Streaming Widgets",
        technicalComponents: ["streamingRsc", "cacheManager", "rlsPolicy", "metricChart"],
        description:
          "High-performance operations portal built on React Server Components with database row-level security and dynamic widgets.",
        features: [
          "Streaming UI with React Suspense boundaries for non-blocking dashboard loading under high concurrency",
          "Strict multi-tenant data partitioning enforced via PostgreSQL Row-Level Security policies",
          "Optimized PostgreSQL aggregations leveraging composite covering indexes for sub-200ms telemetry queries",
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
        { label: "API Gateway Sync", value: "99.98% Health (0 Errors)" },
        { label: "Workflow Queues", value: "14,820 Jobs / 24h" },
        { label: "Server Latency", value: "185ms P95" },
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
