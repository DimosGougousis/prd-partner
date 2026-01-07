export type PRDStatus = 'backlog' | 'research' | 'in-progress' | 'review' | 'complete';
export type Priority = 'P0' | 'P1' | 'P2';
export type SectionStatus = 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';
export type PRDTemplate = 'feature' | 'enhancement' | 'technical';

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  email: string;
  function?: string;
}

export interface PRDSection {
  id: string;
  prdId: string;
  title: string;
  description: string;
  status: SectionStatus;
  completeness: number;
  assignedTo: Stakeholder[];
  dueDate?: string;
  content?: string;
  aiSuggestion?: string;
  order: number;
}

export interface PRD {
  id: string;
  title: string;
  description: string;
  status: PRDStatus;
  priority: Priority;
  template: PRDTemplate;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  owner: Stakeholder;
  sections: PRDSection[];
  progress: number;
  stakeholders: Stakeholder[];
}

export interface DashboardMetrics {
  totalPRDs: number;
  inProgress: number;
  completed: number;
  blocked: number;
  averageCompletionTime: number;
  stakeholderResponseRate: number;
}
