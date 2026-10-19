export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Discovery",
    shortDesc: "Understand your business goals",
    description: "We dive deep into your workflow bottlenecks, competitive landscape, user personas, and core technical requirements to define clear success metrics.",
    iconName: "Search",
  },
  {
    step: "02",
    number: "02",
    title: "Planning",
    shortDesc: "Create strategy and roadmap",
    description: "Our system architects create detailed project blueprints, database schema designs, technology stack selections, and agile milestone roadmaps.",
    iconName: "Target",
  },
  {
    step: "03",
    number: "03",
    title: "Design",
    shortDesc: "Craft intuitive experiences",
    description: "We craft high-fidelity wireframes, interactive design systems, and responsive layouts that look stunning while maximizing conversion.",
    iconName: "Layout",
  },
  {
    step: "04",
    number: "04",
    title: "Development",
    shortDesc: "Build with best practices",
    description: "Clean, modular, enterprise-grade code authored using modern TypeScript, secure APIs, and scalable component architectures with Git versioning.",
    iconName: "Code",
  },
  {
    step: "05",
    number: "05",
    title: "Testing",
    shortDesc: "Ensure quality and performance",
    description: "Rigorous automated unit testing, end-to-end integration audits, cross-browser responsiveness checks, and penetration security scanning.",
    iconName: "CheckCircle2",
  },
  {
    step: "06",
    number: "06",
    title: "Deployment",
    shortDesc: "Launch and ongoing support",
    description: "Zero-downtime production deployment with automated CI/CD pipelines, SSL provisioning, edge caching, and 24/7 telemetry monitoring.",
    iconName: "Rocket",
  },
  {
    step: "07",
    number: "07",
    title: "Support & Evolution",
    shortDesc: "Continuous enhancement",
    description: "Ongoing SLA maintenance, feature iteration, cloud cost tuning, and security patches ensuring your platform scales seamlessly with growth.",
    iconName: "ShieldCheck",
  },
];
