export type PRDStatus = 'draft' | 'in-progress' | 'review' | 'approved' | 'blocked';
export type Priority = 'high' | 'medium' | 'low';
export type SectionStatus = 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  email: string;
}

export interface PRDSection {
  id: string;
  title: string;
  description: string;
  status: SectionStatus;
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
