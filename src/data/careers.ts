export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const careerOpenings: JobOpening[] = [
  // {
  //   id: "senior-fullstack-engineer",
  //   slug: "senior-fullstack-engineer",
  //   title: "Senior Full-Stack Engineer (Next.js & Node.js)",
  //   department: "Engineering",
  //   location: "Pune, India (Hybrid)",
  //   type: "Full-Time",
  //   experience: "4-7 Years",
  //   overview:
  //     "Join our core product team engineering mission-critical enterprise web apps, real-time dashboards, and microservices for high-profile clients.",
  //   responsibilities: [
  //     "Architect and implement performant web applications using Next.js 15, TypeScript, and Tailwind CSS.",
  //     "Build robust RESTful and GraphQL APIs with Node.js and PostgreSQL.",
  //     "Collaborate with UI/UX designers to translate Figma designs into pixel-perfect components.",
  //     "Participate in code reviews, automated CI/CD pipeline improvements, and mentoring junior developers.",
  //   ],
  //   requirements: [
  //     "Strong proficiency in TypeScript, React, Next.js (App Router), and Node.js.",
  //     "Solid understanding of relational database schema design (PostgreSQL) and caching (Redis).",
  //     "Hands-on experience deploying containerized apps using Docker on AWS or Azure.",
  //     "Excellent problem-solving skills and communication ability.",
  //   ],
  // },
  // {
  //   id: "ai-engineer-llm-agents",
  //   slug: "ai-engineer-llm-agents",
  //   title: "AI / LLM Solutions Engineer",
  //   department: "AI & Innovation",
  //   location: "Pune, India / Remote",
  //   type: "Full-Time",
  //   experience: "3-6 Years",
  //   overview:
  //     "Design and deploy production-ready autonomous AI agents, multi-turn conversational bots, and RAG pipelines for enterprise clients.",
  //   responsibilities: [
  //     "Develop multi-agent orchestration workflows using CrewAI, LangChain, and LangGraph.",
  //     "Implement hybrid vector search retrieval systems with Pinecone, ChromaDB, and embedding models.",
  //     "Evaluate LLM output accuracy, reduce hallucinations, and optimize token costs.",
  //     "Build secure API tool integrations connecting AI agents with enterprise ERP and CRM systems.",
  //   ],
  //   requirements: [
  //     "Deep experience with Python, FastAPI, OpenAI APIs, and modern LLM frameworks.",
  //     "Understanding of prompt engineering techniques, few-shot prompting, and evaluation benchmarks.",
  //     "Experience with data ingestion pipelines for PDFs, spreadsheets, and SQL databases.",
  //   ],
  // },
  // {
  //   id: "ui-ux-designer",
  //   slug: "ui-ux-designer",
  //   title: "Senior UI/UX Product Designer",
  //   department: "Design",
  //   location: "Pune, India (Hybrid)",
  //   type: "Full-Time",
  //   experience: "3-5 Years",
  //   overview:
  //     "Lead design vision across enterprise platforms, crafting sleek dark themes, high-converting responsive layouts, and interactive design tokens.",
  //   responsibilities: [
  //     "Design comprehensive user flows, wireframes, and high-fidelity mockups in Figma.",
  //     "Maintain and evolve our design system tokens, typography scales, and micro-interaction states.",
  //     "Conduct user research and usability testing with clients and end-users.",
  //   ],
  //   requirements: [
  //     "Outstanding portfolio demonstrating B2B SaaS, mobile app, and corporate website designs.",
  //     "Mastery of Figma (auto-layout, components, variables, interactive prototypes).",
  //     "Understanding of modern frontend styling (Tailwind CSS, animations, responsive breakpoints).",
  //   ],
  // },
  // {
  //   id: "devops-cloud-architect",
  //   slug: "devops-cloud-architect",
  //   title: "DevOps & Cloud Engineer",
  //   department: "Infrastructure",
  //   location: "Pune, India (Hybrid)",
  //   type: "Full-Time",
  //   experience: "3-6 Years",
  //   overview:
  //     "Manage scalable cloud infrastructure on AWS, automate CI/CD release pipelines, and guarantee 99.99% system uptime.",
  //   responsibilities: [
  //     "Manage AWS infrastructure using Terraform (IaC) and Kubernetes clusters.",
  //     "Maintain GitHub Actions workflows for automated testing and deployments.",
  //     "Monitor application performance, security anomalies, and cloud cost optimization.",
  //   ],
  //   requirements: [
  //     "Extensive experience with AWS (ECS, EKS, RDS, S3, CloudFront, Route53).",
  //     "Proficiency in Docker containerization and Kubernetes orchestration.",
  //     "Familiarity with SOC 2 / ISO 27001 compliance standards and security hardening.",
  //   ],
  // },
];
