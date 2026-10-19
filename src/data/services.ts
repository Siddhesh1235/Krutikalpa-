export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTag: string;
  fullDescription: string;
  iconName: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  deliverables: string[];
  useCases: string[];
  benefits: {
    stat: string;
    label: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Modern, responsive and SEO-friendly websites built for conversion and speed.",
    heroTag: "High-Performance Web Presence",
    fullDescription:
      "We build visually captivating, ultra-fast, and search-optimized websites designed to establish brand authority and convert visitors into loyal clients. Leveraging modern frameworks, responsive grid systems, and technical SEO architecture, we ensure your company looks world-class on every device.",
    iconName: "Globe",
    image: "/images/services/website-development.webp",
    imageAlt: "Modern website interface displayed on a desktop monitor",
    highlights: [
      "Sub-second load times with Core Web Vitals optimization",
      "Semantic HTML5 & Automated Schema markup for rank dominance",
      "Tailored UI/UX design matching your enterprise brand identity",
      "Headless CMS integration for effortless content management",
    ],
    features: [
      {
        title: "Enterprise Brand Architecture",
        description: "Crafting digital identities that immediately resonate with B2B decision-makers and global customers.",
      },
      {
        title: "Advanced On-Page & Technical SEO",
        description: "Built-in structured schema, dynamic OpenGraph assets, canonical URLs, and lightning-fast TTFB.",
      },
      {
        title: "Full Responsive Precision",
        description: "Pixel-perfect rendering tested across smartphones, tablets, high-DPI retina displays, and ultrawide screens.",
      },
      {
        title: "Security & Accessibility (a11y)",
        description: "WCAG 2.1 AA accessibility compliance, zero third-party vulnerability vectors, and hardened TLS standards.",
      },
    ],
    technologies: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Vercel", "Framer Motion"],
    deliverables: [
      "Production-ready Next.js web application",
      "Design tokens & reusable component library",
      "Automated sitemap.xml & robots.txt pipelines",
      "Analytics & conversion tracking dashboard setup",
    ],
    useCases: [
      "Enterprise corporate portals",
      "SaaS product landing pages",
      "Global service directory platforms",
      "Investor relations and stakeholder portals",
    ],
    benefits: [
      { stat: "98+", label: "Google Lighthouse Score" },
      { stat: "3.2x", label: "Average Conversion Uplift" },
      { stat: "<0.8s", label: "Page Load Time (LCP)" },
    ],
  },
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDescription: "Scalable and high-performance web apps with modern cloud architectures.",
    heroTag: "Mission-Critical Enterprise Systems",
    fullDescription:
      "From complex SaaS platforms to internal workflow hubs, our team engineers robust, scalable web applications that handle heavy transaction volumes without flinching. We emphasize clean code, distributed state management, and enterprise-grade data security.",
    iconName: "Code2",
    image: "/images/services/web-application-development.webp",
    imageAlt: "Enterprise web application dashboard with analytics widgets",
    highlights: [
      "Event-driven microservices & serverless backends",
      "Real-time data streaming via WebSockets & GraphQL subscriptions",
      "Zero-trust authentication with SSO, MFA, and RBAC",
      "High-availability database modeling with automatic failover",
    ],
    features: [
      {
        title: "Multi-Tenant SaaS Engineering",
        description: "Architectures supporting isolated tenant boundaries, data sharding, and customizable billing tiers.",
      },
      {
        title: "Real-Time Collaboration Engines",
        description: "Synchronous updates, concurrent editing state, live notifications, and low-latency interaction loops.",
      },
      {
        title: "Complex Workflow Automation",
        description: "Digitize multistage approvals, audit logging, export pipelines, and administrative controls.",
      },
      {
        title: "Enterprise Integrations",
        description: "Seamless bi-directional connectors for Salesforce, SAP, Oracle, Zoho, Stripe, and internal ERPs.",
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    deliverables: [
      "End-to-end full-stack web application",
      "Interactive RESTful & GraphQL API documentation",
      "Role-based permission matrix & admin suite",
      "CI/CD continuous delivery deployment pipeline",
    ],
    useCases: [
      "Enterprise Resource Planning (ERP)",
      "Supply chain & dispatch control towers",
      "Fintech customer dashboards & loan processing",
      "Custom CRM and client management systems",
    ],
    benefits: [
      { stat: "99.99%", label: "Uptime Reliability SLA" },
      { stat: "10x", label: "Scalability Headroom" },
      { stat: "40%", label: "Reduction in Processing Cycles" },
    ],
  },
  {
    id: "ai-agents-development",
    slug: "ai-agents-development",
    title: "AI Agents Development",
    shortDescription: "Intelligent autonomous agents to automate complex workflows and business logic.",
    heroTag: "Autonomous AI Workforce",
    fullDescription:
      "Empower your business with autonomous AI agents capable of reasoning, making decisions, retrieving company knowledge, and executing multi-step workflows. We leverage state-of-the-art LLMs, multi-agent frameworks, and vector retrieval (RAG) to automate tasks previously requiring human hours.",
    iconName: "Bot",
    image: "/images/services/ai-agents-development.webp",
    imageAlt: "Connected autonomous AI agents visualization",
    highlights: [
      "Multi-agent orchestration using CrewAI, LangChain, and LangGraph",
      "Context-aware Retrieval-Augmented Generation (RAG) on private documents",
      "Secure API tool calling with verified action confirmation loops",
      "Continuous hallucination mitigation and evaluation metrics",
    ],
    features: [
      {
        title: "Self-Governing Task Execution",
        description: "Agents that break down high-level business goals into subtasks, execute tools, and verify output validity.",
      },
      {
        title: "Enterprise Knowledge Base RAG",
        description: "Connect proprietary documents, PDFs, databases, and wikis securely with hybrid vector search.",
      },
      {
        title: "Automated Data Processing",
        description: "Read invoices, scrape market intel, categorize emails, and trigger downstream ERP transactions.",
      },
      {
        title: "Audit Trails & Guardrails",
        description: "Enforce safety boundaries, sensitive PII redaction, and deterministic approval checkstops.",
      },
    ],
    technologies: ["OpenAI", "LangChain", "CrewAI", "n8n", "Python", "Pinecone", "ChromaDB", "FastAPI"],
    deliverables: [
      "Custom trained/prompted multi-agent system",
      "Vector search ingestion pipeline for enterprise files",
      "Agent telemetry, token usage, and accuracy dashboard",
      "REST & Webhook endpoints for internal software integration",
    ],
    useCases: [
      "Automated procurement and vendor vetting",
      "Intelligent regulatory compliance document audits",
      "Autonomous marketing and research agents",
      "IT helpdesk tier-1 ticket diagnosis and resolution",
    ],
    benefits: [
      { stat: "85%", label: "Manual Effort Reduction" },
      { stat: "24/7", label: "Uninterrupted Execution" },
      { stat: "4x", label: "Faster Task Completion" },
    ],
  },
  {
    id: "chatbot-development",
    slug: "chatbot-development",
    title: "Chatbot Development",
    shortDescription: "Conversational AI to engage, convert, and support users across web, WhatsApp, and apps.",
    heroTag: "Omnichannel Conversational AI",
    fullDescription:
      "Transform client interactions with conversational AI that understands nuances, speaks multiple languages (including Indian regional languages), and answers queries instantly. We deploy bots across your website, WhatsApp, Slack, and mobile applications.",
    iconName: "MessageSquare",
    image: "/images/services/chatbot-development.webp",
    imageAlt: "AI-powered customer support chatbot interface",
    highlights: [
      "Multilingual support with contextual natural language comprehension",
      "Seamless WhatsApp Business Cloud API & Web chat widgets",
      "Human handoff protocols with live agent routing",
      "CRM sync and lead qualification capture directly inside conversations",
    ],
    features: [
      {
        title: "Omnichannel Messaging",
        description: "Unified chatbot persona deployed on WhatsApp, web widgets, Facebook Messenger, and Telegram.",
      },
      {
        title: "Smart Lead Qualification",
        description: "Engage visitors, capture qualification criteria, schedule meetings, and inject leads directly into your CRM.",
      },
      {
        title: "Instant Customer Support",
        description: "Resolve 70%+ of tier-1 support tickets in seconds without increasing customer service headcount.",
      },
      {
        title: "Regional Language Fluency",
        description: "Native multilingual processing including Hindi, Marathi, and global languages for localized empathy.",
      },
    ],
    technologies: ["OpenAI GPT-4o", "LangChain", "WhatsApp Cloud API", "Node.js", "WebSockets", "MongoDB"],
    deliverables: [
      "White-labeled web chat widget with custom theme",
      "WhatsApp verified webhook architecture",
      "Conversation analytics & sentiment monitoring suite",
      "Live operator fallback portal",
    ],
    useCases: [
      "Customer onboarding & automated KYC assistance",
      "E-commerce order tracking and product discovery",
      "Citizen grievance redressal portals (WardMitra)",
      "24/7 B2B inbound appointment booking",
    ],
    benefits: [
      { stat: "72%", label: "Support Ticket Deflection" },
      { stat: "<2s", label: "First Response Time" },
      { stat: "4.8/5", label: "Average User Satisfaction" },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile solutions for iOS and Android.",
    heroTag: "Intuitive Handheld Experiences",
    fullDescription:
      "Reach your users wherever they are with fluid, offline-capable, and visually stunning mobile applications. Whether building for consumer app stores or enterprise field workforces, we craft intuitive native and cross-platform mobile experiences.",
    iconName: "Smartphone",
    image: "/images/services/mobile-app-development.webp",
    imageAlt: "Mobile application interfaces displayed on smartphones",
    highlights: [
      "Cross-platform parity using React Native and Flutter",
      "Offline-first synchronization with SQLite and local storage",
      "Hardware integrations: GPS, camera scanning, biometric auth, Bluetooth",
      "App Store & Google Play Store release management",
    ],
    features: [
      {
        title: "Fluid 60FPS UI Interactions",
        description: "Native-like tactile feel, gestures, and smooth animations that keep users engaged.",
      },
      {
        title: "Geo-Location & Offline Field Tools",
        description: "Field reporting apps with GPS tracking, photo capture, and sync-on-reconnect for field workers.",
      },
      {
        title: "Push Notifications & Re-engagement",
        description: "Targeted segmentation, behavioral push triggers, and deep-link routing.",
      },
      {
        title: "Enterprise MDM & Security",
        description: "Certificate pinning, encrypted on-device databases, and mobile device management compatibility.",
      },
    ],
    technologies: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "Firebase", "SQLite"],
    deliverables: [
      "Production-ready iOS and Android binaries",
      "App Store Optimization (ASO) setup and metadata",
      "Backend API gateway and push notification dispatchers",
      "Maintenance and OS update compatibility plan",
    ],
    useCases: [
      "Field Assist workforce tracking apps",
      "B2C e-commerce and retail shopping apps",
      "Healthcare patient monitoring & tele-consults",
      "On-demand service booking applications",
    ],
    benefits: [
      { stat: "99.8%", label: "Crash-Free Sessions" },
      { stat: "40%", label: "Shared Codebase Savings" },
      { stat: "Instant", label: "Offline Accessibility" },
    ],
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription: "Tailored enterprise solutions built specifically for your unique operations.",
    heroTag: "Bespoke Enterprise Engineering",
    fullDescription:
      "Off-the-shelf software rarely fits intricate business models. We build bespoke software architectures from the ground up, designed precisely around your unique processes, data models, compliance frameworks, and long-term organizational roadmap.",
    iconName: "Cpu",
    image: "/images/services/custom-software-development.webp",
    imageAlt: "Enterprise custom software platform visualization",
    highlights: [
      "Full IP ownership and bespoke architecture with no vendor lock-in",
      "Strict data sovereignty aligned with India's DPDP Act & international standards",
      "Extensible modular codebase with high automated test coverage",
      "Continuous lifecycle support and legacy modernizations",
    ],
    features: [
      {
        title: "Domain-Specific Architecture",
        description: "Software engineered around your unique operational rules, compliance policies, and KPIs.",
      },
      {
        title: "Legacy System Modernization",
        description: "Migrate clunky legacy databases and monoliths to agile, cloud-native microservices.",
      },
      {
        title: "Data Pipelines & Reporting",
        description: "Consolidate fragmented business data into automated executive reporting and BI insights.",
      },
      {
        title: "Enterprise Security by Design",
        description: "SOC 2-aligned coding practices, end-to-end encryption, and role-based data partitioning.",
      },
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    deliverables: [
      "Custom enterprise software suite",
      "Comprehensive architectural blueprint & API docs",
      "Automated unit, integration, and load testing suites",
      "Source code repository with enterprise CI/CD configs",
    ],
    useCases: [
      "Government public health claim audit platforms",
      "Manufacturing shop-floor MES systems",
      "Proprietary trading & asset tracking software",
      "Automated compliance filing systems",
    ],
    benefits: [
      { stat: "100%", label: "Custom Feature Alignment" },
      { stat: "Zero", label: "Recurring Software Licensing Fees" },
      { stat: "5x", label: "Operational Speed Increase" },
    ],
  },
  {
    id: "erp-development",
    slug: "erp-development",
    title: "ERP Development",
    image: "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Enterprise Resource Planning ERP dashboard with inventory and financial analytics",
    shortDescription: "Integrated Enterprise Resource Planning platforms streamlining manufacturing, sales, and accounts.",
    heroTag: "Unified Business Operations",
    fullDescription:
      "Unify fragmented departments into a single centralized operational hub. Our custom ERP solutions unify inventory tracking, vendor procurement, HR payroll, financial ledgers, and executive intelligence into a unified, real-time command center.",
    iconName: "Layers",
    highlights: [
      "End-to-end inventory, warehouse, and production tracking",
      "Real-time GST-compliant invoicing and financial ledger reporting",
      "Custom role hierarchy and departmental approval workflows",
      "Scalable multi-branch and multi-location synchronization",
    ],
    features: [
      {
        title: "Inventory & Warehouse Control",
        description: "Barcode/QR scanning, batch tracking, low-stock alerts, and auto-purchase order generation.",
      },
      {
        title: "Finance & Tax Compliance",
        description: "Automated GST computation, balance sheets, e-invoicing generation, and accounts reconciliation.",
      },
      {
        title: "HR & Payroll Management",
        description: "Attendance sync, leave policies, automated salary computation, and statutory compliance.",
      },
      {
        title: "Executive Business Intelligence",
        description: "Interactive operational dashboards delivering instant profit margins, cash flow, and demand forecasts.",
      },
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    deliverables: [
      "Custom ERP web portal and mobile companion app",
      "Data migration scripts for legacy Excel/Tally/SAP records",
      "Staff onboarding training modules and user manuals",
      "Dedicated high-availability server setup",
    ],
    useCases: [
      "Manufacturing and fabrication plants",
      "Wholesale distributors and FMCG networks",
      "Construction and infrastructure project tracking",
      "Hospital operations and bed management",
    ],
    benefits: [
      { stat: "60%", label: "Reduction in Paperwork" },
      { stat: "99.5%", label: "Inventory Accuracy" },
      { stat: "3x", label: "Faster Monthly Closing" },
    ],
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions & DevOps",
    image: "https://plus.unsplash.com/premium_photo-1700830193301-99e1c863ee38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Cloud infrastructure architecture and DevOps deployment pipelines",
    shortDescription: "Resilient cloud infrastructure, auto-scaling clusters, and CI/CD automation on AWS & Azure.",
    heroTag: "Elastic Cloud Infrastructure",
    fullDescription:
      "Scale seamlessly from hundreds to millions of users without crashes. We architect, optimize, and manage cloud infrastructures on AWS and Azure, implementing automated CI/CD pipelines, containerization, and cost-reduction strategies.",
    iconName: "Cloud",
    highlights: [
      "Infrastructure as Code (IaC) with Terraform and Docker",
      "Automated CI/CD pipelines with GitHub Actions",
      "Cloud spend audits with up to 40% cost reduction",
      "24/7 uptime monitoring and automated disaster recovery failover",
    ],
    features: [
      {
        title: "Cloud Migration & Architecture",
        description: "Zero-downtime database and application transitions from on-premise servers to AWS or Azure.",
      },
      {
        title: "Kubernetes & Container Orchestration",
        description: "Self-healing, auto-scaling container clusters that expand dynamically during peak traffic.",
      },
      {
        title: "Cost Optimization & FinOps",
        description: "Right-sizing instances, spot instance pools, and serverless compute models to eliminate cloud waste.",
      },
      {
        title: "Disaster Recovery & Redundancy",
        description: "Multi-region backups, automated snapshots, and RPO/RTO targets under 15 minutes.",
      },
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    deliverables: [
      "Production cloud environment with IaC scripts",
      "Automated deployment workflows (CI/CD)",
      "Log monitoring, alerting, and security dashboards",
      "Disaster recovery runbook",
    ],
    useCases: [
      "High-traffic e-commerce flash sales infrastructure",
      "Government-scale public citizen portals",
      "SaaS multi-tenant distributed cloud infrastructure",
      "Data backup and compliance archival",
    ],
    benefits: [
      { stat: "99.99%", label: "Infrastructure Uptime" },
      { stat: "35%+", label: "Average Cloud Bill Savings" },
      { stat: "<5min", label: "Deployment Cycle Time" },
    ],
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting & Digital Strategy",
    image: "https://plus.unsplash.com/premium_photo-1661762503491-815404e48a7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Strategic technology advisory and enterprise architecture consulting session",
    shortDescription: "Strategic technical advisory, enterprise architecture planning, and digital transformation roadmaps.",
    heroTag: "Strategic Technology Advisory",
    fullDescription:
      "Make technology your greatest unfair advantage. Our veteran technical architects advise leadership teams on modernization roadmaps, tech stack selection, cybersecurity posture, and AI adoption to maximize ROI and de-risk major initiatives.",
    iconName: "Compass",
    highlights: [
      "Comprehensive legacy technology debt audits",
      "AI feasibility assessment and roadmap design",
      "Cybersecurity, risk, and regulatory compliance advisory",
      "Fractional CTO and enterprise architecture leadership",
    ],
    features: [
      {
        title: "Digital Transformation Roadmap",
        description: "Phased implementation plans aligning software initiatives with revenue goals and operational milestones.",
      },
      {
        title: "Enterprise Architecture Review",
        description: "Identifying security vulnerabilities, database bottlenecks, and scalability cliffs before they hurt business.",
      },
      {
        title: "Vendor & Tech Selection",
        description: "Unbiased technical evaluation of tools, third-party software, and vendors to eliminate costly missteps.",
      },
      {
        title: "Data Strategy & AI Readiness",
        description: "Structuring enterprise data assets for high-impact AI agent adoption and predictive analytics.",
      },
    ],
    technologies: ["Enterprise Architecture", "TOGAF", "Cloud Strategy", "AI Governance", "Security Audits"],
    deliverables: [
      "Detailed technology roadmap & executive report",
      "Architecture diagram & system flowcharts",
      "Security & compliance remediation plan",
      "Quarterly review cadence and steering committee guidance",
    ],
    useCases: [
      "Mid-market enterprise scaling preparation",
      "Mergers & Acquisitions technical due diligence",
      "Government digital governance transition",
      "Legacy software replatforming",
    ],
    benefits: [
      { stat: "2.5x", label: "Faster Execution Time" },
      { stat: "100%", label: "Strategic Alignment" },
      { stat: "40%", label: "Tech Debt Reduction" },
    ],
  },
];
