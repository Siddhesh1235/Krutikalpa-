export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  client: string;
  category: string;
  tags: string[];
  image: string;
  isFeatured: boolean;

  // Optional mobile app information
  appInfo?: string;
  appFeatures?: string[];
  playStoreUrl?: string;
  platform?: string;

  metrics: {
    stat: string;
    label: string;
  }[];

  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];

  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "inventory-management-system",
    slug: "inventory-management-system",
    title: "Inventory Management System",
    shortDescription: "Complete inventory & production management solution.",
    fullDescription:
      "A mission-critical enterprise inventory and production execution platform engineered for high-precision manufacturing. Combines real-time raw material tracking, machine allocation, BOM explosion, and dynamic dispatch scheduling.",
    client: "Precision Forge & Metalcraft Industries",
    category: "Web Application",
    tags: ["Web Application", "Manufacturing"],
    image: "/images/portfolio/inventory-management-system.jpg",
    isFeatured: true,
    metrics: [
      { stat: "99.4%", label: "Inventory Accuracy" },
      { stat: "42%", label: "Turnaround Time Reduction" },
      { stat: "Zero", label: "Production Line Stockouts" },
    ],
    challenge:
      "The client experienced recurring shop-floor disruptions due to paper-based stock reconciliation, misaligned Bill of Materials (BOM), and untracked scrap material resulting in substantial financial write-offs.",
    solution:
      "We engineered a custom web-based ERP portal with barcode-driven bin tracking, automated PO replenishment thresholds, sub-assembly lifecycle tracking, and instant role-based audit logging.",
    results: [
      "Eliminated unplanned manufacturing downtime by automating supplier re-order triggers.",
      "Accelerated quarterly financial audit reconciliations from 14 days down to 4 hours.",
      "Seamlessly integrated with existing CNC machines and legacy accounting software.",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Docker",
    ],
    testimonial: {
      quote:
        "KrutiKalpa built an exceptional web application for our manufacturing plants. Their team is professional, responsive, and truly understands complex operational requirements.",
      author: "Vikram Singhania",
      role: "VP of Operations, Precision Forge",
    },
  },

  {
    id: "b2b-ecommerce-platform",
    slug: "b2b-ecommerce-platform",
    title: "B2B E-commerce Platform",
    shortDescription: "Scalable e-commerce solution with advanced features.",
    fullDescription:
      "A robust digital wholesale storefront and procurement engine supporting multi-tier customer pricing, credit-line approvals, bulk catalog ordering, and real-time inventory allocation.",
    client: "Apex Distribution Network",
    category: "Web Application",
    tags: ["Web Application", "E-commerce"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    isFeatured: true,
    metrics: [
      { stat: "3.4x", label: "Increase in Order Volume" },
      { stat: "65%", label: "Lower Cost Per Order" },
      { stat: "10k+", label: "Wholesale SKUs Managed" },
    ],
    challenge:
      "Wholesale dealers struggled with delayed manual phone orders, static PDF price lists, and convoluted credit limit authorizations that stifled sales expansion.",
    solution:
      "Developed a sub-second Next.js commerce portal featuring instant multi-currency checkout, dynamic credit limit tracking, custom tiered volume discounts, and automatic GST e-way bill generation.",
    results: [
      "Shifted 80% of regular dealer re-orders from phone calls to self-serve online checkout.",
      "Maintained 99.99% uptime during festive high-demand wholesale booking campaigns.",
      "Empowered dealers with 24/7 visibility over pending shipments and ledger statements.",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe / Razorpay",
      "Redis",
    ],
    testimonial: {
      quote:
        "Our wholesale buyers love the new platform. Order placement speed tripled and our customer support calls dropped significantly.",
      author: "Ananya Sharma",
      role: "Chief Commercial Officer, Apex Network",
    },
  },

  {
    id: "ai-customer-support-assistant",
    slug: "ai-customer-support-assistant",
    title: "AI Customer Support Assistant",
    shortDescription:
      "Intelligent chatbot to automate customer support and improve engagement.",
    fullDescription:
      "An enterprise conversational AI system deployed across web and WhatsApp that handles complex customer inquiries, policy lookups, order tracking, and intelligent ticket routing.",
    client: "Novaflow Global Solutions",
    category: "AI / Chatbot",
    tags: ["AI / Chatbot", "Customer Support"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
    isFeatured: true,
    metrics: [
      { stat: "74%", label: "Ticket Deflection Rate" },
      { stat: "<3 sec", label: "Average Resolution Time" },
      { stat: "4.9/5", label: "User Satisfaction Score" },
    ],
    challenge:
      "The client's support team was overwhelmed by repetitive tier-1 customer inquiries, leading to 6-hour wait times, high agent attrition, and deteriorating customer satisfaction.",
    solution:
      "Engineered an autonomous AI agent integrated with enterprise knowledge base vector search (RAG) and conversational guardrails, capable of multi-turn dialogs and CRM actions.",
    results: [
      "Resolved 74% of common incoming inquiries instantly with zero human intervention.",
      "Supported multilingual dialogs across English, Hindi, and Marathi seamlessly.",
      "Safely transferred edge-case queries to live agents with complete conversational context.",
    ],
    technologies: [
      "OpenAI GPT-4o",
      "LangChain",
      "Node.js",
      "Vector DB",
      "WhatsApp Cloud API",
    ],
    testimonial: {
      quote:
        "KrutiKalpa delivered an exceptional web application for our business. Their team is professional, responsive and truly understands our requirements.",
      author: "Rahul Mehta",
      role: "CEO, Novaflow Pvt. Ltd.",
    },
  },

  // WardMitra: App information + Google Play Store
  {
    id: "wardmitra-digital-governance",
    slug: "wardmitra-digital-governance",
    title: "WardMitra: AI Digital Governance",
    shortDescription:
      "AI-powered citizen engagement, grievance redressal, and digital governance application.",

    fullDescription:
      "WardMitra is KrutiKalpa's citizen governance and municipal administration platform. It connects citizens with local authorities through digital grievance registration, complaint tracking, automated department dispatching, Marathi NLP categorization, and real-time civic analytics.",

    client: "Municipal Corporations & Civic Bodies",

    category: "AI Agents",

    tags: [
      "AI Agents",
      "Government",
      "Mobile App",
      "Digital Governance",
    ],

    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",

    isFeatured: false,

    // App Information
    platform: "Android",

    appInfo:
      "WardMitra is a digital civic governance application that helps citizens connect with municipal authorities, report civic issues, and access grievance-related services through a mobile platform.",

    appFeatures: [
      "Citizen Grievance Registration",
      "Civic Complaint Tracking",
      "Automated Department Dispatching",
      "Marathi NLP Complaint Categorization",
      "Real-Time Civic Analytics",
      "Digital Citizen Engagement",
    ],

    // Google Play Store URL
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=in.spwhi.wardmitra",

    metrics: [
      { stat: "85%", label: "Faster Complaint Resolution" },
      { stat: "2.5M+", label: "Citizens Impacted" },
      { stat: "100%", label: "Audit Traceability" },
    ],

    challenge:
      "Municipal civic grievances were filed across disconnected channels (letters, phone, walk-ins) with no central tracking, leading to lost citizen complaints and lack of departmental accountability.",

    solution:
      "Built a unified omni-channel platform featuring WhatsApp bot intake, automated Marathi and English NLP complaint routing, geo-tagged field worker dispatch, and public transparency dashboards.",

    results: [
      "Enabled citizens to file, photo-tag, and track civic issues directly on WhatsApp.",
      "Empowered municipal commissioners with live GIS heatmaps of unresolved civic issues.",
      "Drastically improved municipal satisfaction ratings across surveyed municipal wards.",
    ],

    technologies: [
      "Next.js",
      "Python NLP",
      "FastAPI",
      "PostgreSQL / PostGIS",
      "Docker",
      "AWS",
    ],
  },

  {
    id: "field-assist-workforce-monitoring",
    slug: "field-assist-workforce-monitoring",
    title: "Field Assist: Smart Field Operations",
    shortDescription:
      "Geo-tagged field reporting and mobile workforce management system.",
    fullDescription:
      "A high-resilience mobile and cloud application designed for large-scale field teams. Delivers GPS-verified site audits, tamper-proof offline photo capture, dynamic inspection checklists, and supervisor route tracking.",
    client: "Infrastructure & Public Health Agencies",
    category: "Mobile App",
    tags: ["Mobile App", "Logistics & Field"],
    image: "/images/portfolio/Futuristic Healthcare Analytics Dashboard.png",
    isFeatured: false,
    metrics: [
      { stat: "15,000+", label: "Daily Field Audits" },
      { stat: "100%", label: "Tamper-Proof Geo-Fencing" },
      { stat: "50%", label: "Reduction in Verification Fraud" },
    ],
    challenge:
      "Verifying whether remote field inspectors actually visited remote project sites or beneficiary households was virtually impossible due to lack of network connectivity and spoofed GPS logs.",
    solution:
      "Architected an offline-first mobile app with cryptographic geo-tagging, offline photo hashing, biometric authentication, and automated batch upload once mobile connectivity is regained.",
    results: [
      "Successfully processed millions of field inspections with verified timestamps and GPS coordinates.",
      "Reduced supervisory reporting delays from 7 days down to instant real-time synchronization.",
      "Recognized by regional public authorities for eliminating phantom inspection reports.",
    ],
    technologies: [
      "React Native",
      "SQLite",
      "Node.js",
      "AWS S3",
      "PostgreSQL",
    ],
  },

  {
    id: "arogyamitra-public-health",
    slug: "arogyamitra-public-health",
    title: "ArogyaMitra: Digital Healthcare Ecosystem",
    shortDescription:
      "Digital public health platform streamlining patient care and claim workflows.",
    fullDescription:
      "An integrated healthcare delivery and clinical workflow ecosystem designed to improve patient accessibility, bed management, doctor scheduling, diagnostic lab integration, and cashless claim audits.",
    client: "Healthcare Networks & Public Institutions",
    category: "Custom Software",
    tags: ["Custom Software", "Healthcare"],
    image: "/images/portfolio/Digital Healthcare Ecosystem.png",
    isFeatured: false,
    metrics: [
      { stat: "6,00,000+", label: "Claims Processed & Audited" },
      { stat: "98%", label: "Fraud Pattern Detection Rate" },
      { stat: "10+ States", label: "Pan-India Implementation" },
    ],
    challenge:
      "Handling national-scale public health programs (RSBY, Ayushman Bharat) required processing hundreds of thousands of inpatient claim dockets while detecting fraudulent claims in strict timelines.",
    solution:
      "Designed and delivered specialized claims desk audit software featuring automated anomaly scoring, medical rule validation, diagnostic report cross-referencing, and multi-tier medical referee workflows.",
    results: [
      "Audited over 6,00,000 health insurance claims across multiple states across India.",
      "Identified and prevented significant fraudulent billing leakages across hospital networks.",
      "Delivered 100% compliance with national health authority data privacy and security mandates.",
    ],
    technologies: [
      "Spring Boot",
      "Java",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Apache Kafka",
    ],
  },
];
