export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

export const quickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

export const footerServices: NavLink[] = [
  { label: "Website Development", href: "/services/website-development/" },
  { label: "Web Application Development", href: "/services/web-application-development/" },
  { label: "AI Agents Development", href: "/services/ai-agents-development/" },
  { label: "Chatbot Development", href: "/services/chatbot-development/" },
  { label: "Mobile App Development", href: "/services/mobile-app-development/" },
  { label: "Custom Software Development", href: "/services/custom-software-development/" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms/" },
];
