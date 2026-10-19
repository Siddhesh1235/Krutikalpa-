export interface CompanyInfo {
  name: string;
  legalName: string;
  cin: string;
  tagline: string;
  subheadline: string;
  aboutStory: string;
  mission: string;
  vision: string;
  stats: {
    projects: string;
    clients: string;
    industries: string;
    satisfaction: string;
    experience: string;
  };
  contact: {
    email: string;
    supportEmail: string;
    phone: string;
    phoneDisplay: string;
    alternatePhone: string;
    whatsapp: string;
    address: {
      street: string;
      building: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
  };
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    facebook: string;
  };
}

export const companyData: CompanyInfo = {
  name: "KrutiKalpa Solutions",
  legalName: "KrutiKalpa Solutions Private Limited",
  cin: "U62020PN2025PTC238309",
  tagline: "Transforming Businesses Through Technology",
  subheadline:
    "We design and develop websites, web applications, AI agents, chatbots and custom software solutions to help businesses grow, streamline operations and create lasting value.",
  aboutStory:
    "We are a technology-driven company focused on building innovative digital products including websites, web applications, AI agents, chatbots and custom software solutions that solve real business problems and scale seamlessly. With deep engineering expertise across both enterprise platforms and large-scale public initiatives, KrutiKalpa empowers enterprises, public sector institutions, and growth startups to transform operations, boost agility, and unlock sustainable competitive advantage.",
  mission:
    "To empower businesses and organizations with transformative digital platforms, resilient architectures, and cutting-edge Artificial Intelligence that maximize efficiency, transparency, and human potential.",
  vision:
    "To become the premier trusted technology innovation partner for high-growth enterprises and digital governance ecosystems across India and globally.",
  stats: {
    projects: "50+",
    clients: "30+",
    industries: "5+",
    satisfaction: "100%",
    experience: "10+ Years",
  },
  contact: {
    email: "info@krutikalpa.com",
    supportEmail: "support@krutikalpa.com",
    phone: "+91 6364917021",
    phoneDisplay: "+91 6364917021",
    alternatePhone: "",
    whatsapp: "+916364917021",
    address: {
      building: "Kohinoor B-Zone, First Floor, 106",
      street: "Baner Main Road",
      area: "Baner",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411045",
      country: "India",
      full: "Kohinoor B-Zone, First floor, 106, Baner, Pune, Maharashtra – 411045, India",
    },
  },
  social: {
    linkedin: "https://in.linkedin.com/company/spwhipl2kkspl",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    github: "#",
    facebook: "https://www.facebook.com/people/Krutikalpa-Solutions-Pvt-Ltd/61582835206699/",
  },
};
