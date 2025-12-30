export type Language = 'EN' | 'FR' | 'AR';

export interface ContentStrings {
  whatsappMessage: string;
  topBar: {
    urgency: string;
    phone: string;
    location: string;
  };
  nav: {
    home: string;
    services: string;
    results: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPhone: string;
    ctaResults: string;
    badge: string;
  };
  stats: {
    experience: string;
    patients: string;
    available: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      blood: { title: string; desc: string; };
      diabetes: { title: string; desc: string; };
      hormones: { title: string; desc: string; };
      pregnancy: { title: string; desc: string; };
      covid: { title: string; desc: string; };
    };
  };
  trust: {
    title: string;
    subtitle: string;
    items: {
      experience: { title: string; desc: string; };
      iso: { title: string; desc: string; };
      confidentiality: { title: string; desc: string; };
      precision: { title: string; desc: string; };
    };
  };
  testimonials: {
    title: string;
    reviews: {
      name: string;
      text: string;
      stars: number;
    }[];
  };
  portal: {
    title: string;
    desc: string;
    loginPlaceholder: string;
    passPlaceholder: string;
    button: string;
    help: string;
  };
  footer: {
    address: string;
    hours: string;
    contact: string;
    rights: string;
  };
}