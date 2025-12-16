export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  category?: 'All' | 'Web Dev' | 'Desktop App' | 'Mobile App' | 'API REST' | 'Data Science';
}
