export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "rahul-mehta",
    quote:
      "KrutiKalpa delivered an exceptional web application for our business. Their team is professional, responsive and truly understands our requirements.",
    author: "Rahul Mehta",
    role: "CEO",
    company: "Novaflow Pvt. Ltd.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: "vikram-singhania",
    quote:
      "The custom ERP and inventory system KrutiKalpa engineered for our plant completely eliminated stockout delays. Their technical depth and adherence to deadlines is remarkable.",
    author: "Vikram Singhania",
    role: "VP of Operations",
    company: "Precision Forge & Metalcraft",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: "ananya-sharma",
    quote:
      "Our B2B ordering portal saw instant adoption from our distributor network. The sub-second speed, flawless mobile experience, and automated billing saved hundreds of labor hours every month.",
    author: "Ananya Sharma",
    role: "Chief Commercial Officer",
    company: "Apex Distribution Network",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    id: "rajesh-deshmukh",
    quote:
      "Working with KrutiKalpa on our public sector digital initiative gave us complete confidence. Their engineering resilience, security rigor, and citizen-first design are unmatched.",
    author: "Rajesh Deshmukh",
    role: "Chief Information Officer",
    company: "Civic Digital Initiatives",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
];
