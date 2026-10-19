export interface WhyChooseUsItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  stat?: string;
  statLabel?: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: "domain-expertise",
    title: "Domain Expertise",
    shortDescription: "Deep understanding across industries.",
    description: "Our engineers bring over a decade of hands-on experience designing architectures for manufacturing, healthcare, e-commerce, and high-scale public administration systems.",
    iconName: "BrainCircuit",
    stat: "10+",
    statLabel: "Years Industry Experience",
  },
  {
    id: "agile-approach",
    title: "Agile Approach",
    shortDescription: "Flexible and adaptive development process.",
    description: "Two-week sprint cadences, transparent weekly demos, and adaptive feature prioritization ensure rapid time-to-market without costly surprises.",
    iconName: "RefreshCw",
    stat: "2-Week",
    statLabel: "Sprint Delivery Cycles",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    shortDescription: "Delivering reliable and scalable solutions.",
    description: "Every codebase undergoes stringent peer reviews, automated regression test runs, WCAG accessibility validation, and sub-second performance benchmarking.",
    iconName: "ShieldCheck",
    stat: "99.9%",
    statLabel: "System Reliability Rate",
  },
  {
    id: "long-term-partnership",
    title: "Long-term Partnership",
    shortDescription: "Building lasting relationships with our clients.",
    description: "We don't just deliver code and disappear. We function as your dedicated fractional CTO and technical arm, evolving your software as your enterprise scales.",
    iconName: "Handshake",
    stat: "95%",
    statLabel: "Client Retention Rate",
  },
];
