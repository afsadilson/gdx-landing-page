export type Language = 'en' | 'pt' | 'es' | 'it' | 'fr' | 'de' | 'ja';

export interface Translation {
  nav: {
    features: string;
    testimonials: string;
    download: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    users_count: string;
  };
  features: {
    title: string;
    subtitle: string;
    list: {
      title: string;
      desc: string;
    }[];
  };
  stats: {
    title: string;
    items: {
      label: string;
      value: string;
    }[];
  };
  download_section: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    // Japanese stores typically use slightly different CTA styling/text length, keeping standard structure
  };
  footer: {
    copyright: string;
    rights: string;
  };
}

export interface ContentData {
  en: Translation;
  pt: Translation;
  es: Translation;
  it: Translation;
  fr: Translation;
  de: Translation;
  ja: Translation;
}