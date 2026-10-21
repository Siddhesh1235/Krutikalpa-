
import * as SimpleIcons from "simple-icons";

export interface TechItem {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "AI / ML"
    | "Cloud"
    | "Database"
    | "DevOps";
  description: string;
  badge?: string;
  iconSlug: string;
}

export const techCategories = [
  "Frontend",
  "Backend",
  "Mobile",
  "AI / ML",
  "Cloud",
  "Database",
  "DevOps",
] as const;

export type TechCategory = (typeof techCategories)[number];

export const technologiesData: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Interactive & dynamic user interfaces",
    iconSlug: "react",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production React framework with SSR & ISR",
    iconSlug: "nextjs",
    badge: "Primary",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Structured enterprise single-page applications",
    iconSlug: "angular",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe JavaScript for scalable codebases",
    iconSlug: "typescript",
    badge: "Standard",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "High-performance modern ES6+ web runtime",
    iconSlug: "javascript",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Modern utility-first responsive styling",
    iconSlug: "tailwindcss",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Asynchronous event-driven backend microservices",
    iconSlug: "nodejs",
    badge: "Primary",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description: "Mission-critical enterprise Java framework",
    iconSlug: "springboot",
  },
  {
    name: "Java",
    category: "Backend",
    description: "Robust, high-throughput enterprise architectures",
    iconSlug: "java",
  },
  {
    name: "Python",
    category: "Backend",
    description: "Rapid backend APIs and scientific computation",
    iconSlug: "python",
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "High-speed modern Python API framework",
    iconSlug: "fastapi",
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    description: "Cross-platform iOS and Android native apps",
    iconSlug: "reactnative",
    badge: "Primary",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description: "High-performance expressive mobile experiences",
    iconSlug: "flutter",
  },
  {
    name: "iOS Swift",
    category: "Mobile",
    description: "Hardware-accelerated native Apple experiences",
    iconSlug: "swift",
  },
  {
    name: "Android Kotlin",
    category: "Mobile",
    description: "Modern native Android application engineering",
    iconSlug: "kotlin",
  },

  // AI / ML
  {
    name: "OpenAI",
    category: "AI / ML",
    description: "State-of-the-art GPT and reasoning models",
    iconSlug: "openai",
    badge: "Core AI",
  },
  {
    name: "LangChain",
    category: "AI / ML",
    description: "LLM application orchestration and agents",
    iconSlug: "langchain",
  },
  {
    name: "CrewAI",
    category: "AI / ML",
    description: "Autonomous collaborative multi-agent teams",
    iconSlug: "crewai",
    badge: "Agents",
  },
  {
    name: "n8n",
    category: "AI / ML",
    description: "Automated workflow pipelines and AI triggers",
    iconSlug: "n8n",
  },
  {
    name: "MCP",
    category: "AI / ML",
    description: "Model Context Protocol",
    iconSlug: "mcp",
  },
  {
    name: "Hugging Face",
    category: "AI / ML",
    description: "Open-source fine-tuned models and embeddings",
    iconSlug: "huggingface",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    description: "Scalable document-oriented NoSQL database",
    iconSlug: "mongodb",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Rock-solid relational and JSON data store",
    iconSlug: "postgresql",
    badge: "Primary",
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Proven enterprise relational database engine",
    iconSlug: "mysql",
  },
  {
    name: "Redis",
    category: "Database",
    description: "Ultra-fast in-memory caching and real-time state",
    iconSlug: "redis",
  },
  {
    name: "Amazon RDS",
    category: "Database",
    description:
      "Managed relational databases with automated backups and scaling",
    iconSlug: "rds",
    badge: "AWS",
  },

  // Cloud
  {
    name: "AWS",
    category: "Cloud",
    description: "Scalable global cloud computing services",
    iconSlug: "aws",
    badge: "Primary",
  },
  {
    name: "Azure",
    category: "Cloud",
    description: "Enterprise Microsoft cloud infrastructure",
    iconSlug: "azure",
  },
  {
    name: "Vercel",
    category: "Cloud",
    description: "Edge-optimized global serverless deployments",
    iconSlug: "vercel",
  },

  // DevOps
  {
    name: "Docker",
    category: "DevOps",
    description: "Lightweight containerized environments",
    iconSlug: "docker",
    badge: "Standard",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    description: "Automated container orchestration and scaling",
    iconSlug: "kubernetes",
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    description: "Continuous integration and delivery pipelines",
    iconSlug: "githubactions",
  },
  {
    name: "Terraform",
    category: "DevOps",
    description: "Repeatable Infrastructure-as-Code automation",
    iconSlug: "terraform",
  },
];

export interface TechnologyIconData {
  title: string;
  path: string;
  hex: string;
  themeAware: boolean;
}

type SimpleIconDefinition = {
  title: string;
  path: string;
  hex: string;
};

const simpleIcons = SimpleIcons as unknown as Record<
  string,
  SimpleIconDefinition | undefined
>;

const iconMap: Record<string, string[]> = {
  react: ["siReact"],
  nextjs: ["siNextdotjs"],
  angular: ["siAngular"],
  typescript: ["siTypescript"],
  javascript: ["siJavascript"],
  tailwindcss: ["siTailwindcss"],

  nodejs: ["siNodedotjs"],
  springboot: ["siSpringboot"],
  java: ["siOpenjdk", "siJava"],
  python: ["siPython"],
  fastapi: ["siFastapi"],

  reactnative: ["siReact"],
  flutter: ["siFlutter"],
  swift: ["siSwift"],
  kotlin: ["siKotlin"],

  openai: ["siOpenai"],
  langchain: ["siLangchain"],
  crewai: ["siCrewai"],
  n8n: ["siN8N", "siN8n"],
  mcp: ["siModelcontextprotocol", "siMcp"],
  huggingface: ["siHuggingface"],

  mongodb: ["siMongodb"],
  postgresql: ["siPostgresql"],
  mysql: ["siMysql"],
  redis: ["siRedis"],
  rds: ["siAmazonrds", "siAmazonrdsdatabase"],

  aws: ["siAmazonaws"],
  azure: ["siMicrosoftazure"],
  vercel: ["siVercel"],

  docker: ["siDocker"],
  kubernetes: ["siKubernetes"],
  githubactions: ["siGithubactions"],
  terraform: ["siTerraform"],
};

export function getTechnologyIcon(
  iconSlug: string
): TechnologyIconData | null {
  const candidates = iconMap[iconSlug.toLowerCase()];

  if (!candidates) return null;

  for (const key of candidates) {
    const icon = simpleIcons[key];

    if (!icon?.path) continue;

    return {
      title: icon.title,
      path: icon.path,
      hex: icon.hex,
      themeAware:
        iconSlug.toLowerCase() === "nextjs" ||
        iconSlug.toLowerCase() === "angular" ||
        iconSlug.toLowerCase() === "vercel",
    };
  }

  return null;
}
