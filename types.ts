export type Language = 'EN' | 'FR' | 'AR';

export interface ContentStrings {
  topBar: {
    urgency: string;
    phone: string;
    location: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    patients: string;
    contact: string;
    results: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    biology: {
      title: string;
      desc: string;
    };
    pediatrics: {
      title: string;
      desc: string;
    };
    home: {
      title: string;
      desc: string;
    };
    fertility: {
      title: string;
      desc: string;
    };
  };
  trust: {
    isoTitle: string;
    isoDesc: string;
    doctorTitle: string;
    doctorDesc: string;
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