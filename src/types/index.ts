export interface NavigationItem {
  name: string;
  href: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  impact: string;
}

export interface ImpactStatistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarIcon: string;
}
