export type ThemeMode = 'dark' | 'light';

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai';
  proficiency: number; // 0 - 100
  experienceYears: number;
  iconName: string;
  description: string;
  featured?: boolean;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI / ML' | 'Cloud & Infra' | 'Open Source';
  description: string;
  longDescription: string;
  architecturePoints: string[];
  metrics: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  technologies: string[];
  interactiveDemoType?: 'playground' | 'analytics' | 'canvas' | 'terminal';
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  role: string;
  companyOrInstitution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  logoBg: string;
  current?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isFallback?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
}
