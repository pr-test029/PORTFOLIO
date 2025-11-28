export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'design' | 'chatbot' | 'app';
  tags: string[];
  icon: string;
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

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
