
export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  stats: string;
  statsLabel: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  caseStudyHighlight: string;
}

export const industriesData: IndustryItem[] = [
  // Manufacturing
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Streamlining operations with digital solutions and smart automation.",
    fullDescription:
      "Transform discrete and process manufacturing with connected digital architectures. We develop smart factory applications, inventory control systems, equipment monitoring dashboards, and predictive maintenance portals that minimize unplanned downtime and optimize shop-floor productivity.",
    image: "/images/Industries/Manufacturing.png",
    iconName: "Factory",
    stats: "35%",
    statsLabel: "Average Downtime Reduction",
    challenges: [
      "Fragmented shop-floor logs and manual tally sheets",
      "Inaccurate inventory reporting leading to production delays",
      "Lack of real-time machine telemetry and predictive alerting",
      "Complex supply chain coordination across suppliers and distributors",
    ],
    solutions: [
      "Custom ERP & Shop-Floor Execution Systems (MES)",
      "Automated Raw Material & Finished Goods Inventory Management",
      "IoT Sensor Telemetry & Real-Time Production Analytics",
      "Vendor Procurement & Purchase Order Approval Automation",
    ],
    technologies: [
      "Node.js",
      "React",
      "PostgreSQL",
      "MQTT / IoT",
      "Docker",
      "Python",
    ],
    caseStudyHighlight:
      "Inventory Management & Production ERP delivered for automotive fabrication plant.",
  },

  // Healthcare
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "Innovative healthcare technology solutions for care delivery and governance.",
    fullDescription:
      "Modernize clinical workflows, patient management, and public health governance with healthcare software. From national health claim desk audits (Ayushman Bharat, RSBY) to hospital management and ArogyaMitra citizen health portals, we build mission-critical healthcare systems.",
    image:
      "/images/Industries/Futuristic MRI Suite in Orange Glow-2.png",
    iconName: "HeartPulse",
    stats: "6L+",
    statsLabel: "Health Claims Audited Across India",
    challenges: [
      "Massive claim processing backlogs and manual audit bottlenecks",
      "Strict data privacy regulations and compliance hurdles",
      "Patient data fragmentation across diagnostics, beds, and billing",
      "Remote accessibility constraints in rural public health outreach",
    ],
    solutions: [
      "ArogyaMitra Digital Public Health & Clinic Management Platform",
      "National-Scale AI-Driven Health Claim Desk & Field Audit Software",
      "Telemedicine & Appointment Booking Web / Mobile Applications",
      "Electronic Health Records (EHR) with Role-Based Security",
    ],
    technologies: [
      "Spring Boot",
      "Next.js",
      "Python AI",
      "PostgreSQL",
      "Redis",
      "AWS Cloud",
    ],
    caseStudyHighlight:
      "Audited 6,00,000+ national health claims across multiple Indian states with zero data leaks.",
  },

  // Retail & E-commerce
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    shortDescription:
      "Scalable e-commerce platforms and omnichannel retail solutions.",
    fullDescription:
      "Build high-converting storefronts and B2B wholesale portals engineered for lightning-fast catalog search, dynamic pricing, smooth payment gateways, and automated inventory sync across multiple channels.",
    image:
      "/images/Industries/Cinematic Modern Fulfillment Showroom-4.png",
    iconName: "ShoppingCart",
    stats: "3.2x",
    statsLabel: "Average Checkout Conversion Lift",
    challenges: [
      "Cart abandonment caused by slow site performance",
      "Inventory desynchronization across online stores and physical outlets",
      "Complex B2B tiered bulk pricing and credit terms",
      "Inability to handle surge traffic during festival sales",
    ],
    solutions: [
      "Headless Next.js E-Commerce Storefronts with Sub-Second Speed",
      "B2B Wholesale Portals with Custom Invoicing and Credit Limits",
      "WhatsApp Commerce & Order Notification Automation",
      "Real-Time Multi-Warehouse Inventory & Dispatch Tracking",
    ],
    technologies: [
      "Next.js 15",
      "Node.js",
      "Stripe / Razorpay",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
    ],
    caseStudyHighlight:
      "B2B E-commerce platform scaling 10,000+ SKUs with real-time stock allocation.",
  },

  // Real Estate
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    shortDescription:
      "Digital solutions for modern real estate developers and property managers.",
    fullDescription:
      "Transform property marketing and asset management. We build 3D virtual tour property showcases, real estate CRM lead funnels, automated tenant billing portals, and maintenance ticketing software for builders and facility operators.",
    image:
      "/images/Industries/Twilight Glass Towers Against Stormy Skies-5.png",
    iconName: "Building2",
    stats: "45%",
    statsLabel: "Inbound Lead Qualification Increase",
    challenges: [
      "High acquisition cost of property buyer leads with poor follow-up",
      "Manual lease documentation and rent payment tracking",
      "Lack of interactive online floorplans and virtual tours",
      "Unorganized maintenance tickets causing tenant dissatisfaction",
    ],
    solutions: [
      "Interactive Project Portals with Unit Availability Matrices",
      "Real Estate AI Lead Nurturing & Site Visit Scheduling Chatbots",
      "Tenant & Owner Portal for Automated Rent Invoicing & Maintenance",
      "Broker & Channel Partner Incentive Management System",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "Three.js",
    ],
    caseStudyHighlight:
      "Lead capture & automated WhatsApp follow-up engine for a premier residential township.",
  },

  // Education
  {
    id: "education",
    slug: "education",
    title: "Education",
    shortDescription:
      "Smart digital learning platforms and education management solutions.",
    fullDescription:
      "Transform educational institutions with modern digital learning and administration platforms. We build learning management systems, student information portals, online examination platforms, virtual classrooms, and AI-powered learning assistants that improve student engagement, simplify academic administration, and support accessible education.",
    image: "/images/Industries/Education.png",
    iconName: "GraduationCap",
    stats: "40%",
    statsLabel: "Less Manual Administrative Work",
    challenges: [
      "Manual student enrollment, attendance, and academic record management",
      "Disconnected learning resources and communication channels",
      "Time-consuming examination, assessment, and result processing",
      "Limited visibility into student progress and learning outcomes",
    ],
    solutions: [
      "Learning Management Systems (LMS) and Digital Course Platforms",
      "Student Information Systems and Online Admission Portals",
      "Online Examination, Assessment, and Result Management",
      "AI-Powered Learning Assistants and Student Progress Analytics",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Spring Boot",
      "PostgreSQL",
      "Python AI",
    ],
    caseStudyHighlight:
      "Digital education platform concept connecting student management, online learning, assessments, and academic progress tracking.",
  },

  // Automotive
  // {
  //   id: "automotive",
  //   slug: "automotive",
  //   title: "Automotive",
  //   shortDescription:
  //     "Connected software systems for auto dealerships, workshops, and parts suppliers.",
  //   fullDescription:
  //     "Power dealership sales networks and spare-parts supply chains with purpose-built automotive software. From vehicle configuration engines to digital job cards in service workshops, we build software that accelerates the automotive industry.",
  //   image:
  //     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  //   iconName: "Car",
  //   stats: "50%",
  //   statsLabel: "Service Bay Turnaround Speedup",
  //   challenges: [
  //     "Stock inaccuracies in spare parts inventory across distributed dealerships",
  //     "Delayed service job card creation and paper bill approvals",
  //     "Poor service reminder follow-up leading to lost customer retention",
  //     "Disconnected vehicle warranty and insurance claim workflows",
  //   ],
  //   solutions: [
  //     "Dealership Management System (DMS) & Digital Workshop Job Cards",
  //     "Spare Parts Catalog with Dynamic Stock Inquiries & QR Invoicing",
  //     "Automated Service Due SMS & WhatsApp Appointment Booking",
  //     "Automobile Warranty & Insurance Claim Processing Desk",
  //   ],
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "MySQL",
  //     "Tailwind CSS",
  //     "AWS",
  //     "Docker",
  //   ],
  //   caseStudyHighlight:
  //     "Streamlined workshop management system connecting 20+ service centers across western India.",
  // },
];
