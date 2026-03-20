export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  pitch: string;
  category: 'web' | 'design' | 'chatbot' | 'app';
  tags: string[];
  icon: string;
  link: string;
  features: string[];
  stack: {
    frontend?: string;
    backend?: string;
    ai?: string;
    deployment?: string;
    other?: string[];
  };
  highlights: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}


