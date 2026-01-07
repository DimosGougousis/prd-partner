import { cn } from '@/lib/utils';
import { PRDStatus, SectionStatus } from '@/types/prd';
import { Circle, Loader2, CheckCircle2, AlertCircle, FileEdit, Search, Eye } from 'lucide-react';

interface StatusBadgeProps {
  status: PRDStatus | SectionStatus;
  size?: 'sm' | 'md';
}

const statusConfig: Record<PRDStatus | SectionStatus, { label: string; className: string; icon: React.ElementType }> = {
  backlog: { label: 'Backlog', className: 'status-todo', icon: Circle },
  research: { label: 'Research', className: 'status-research', icon: Search },
  'in-progress': { label: 'In Progress', className: 'status-in-progress', icon: Loader2 },
  review: { label: 'Review', className: 'status-review', icon: Eye },
  complete: { label: 'Complete', className: 'status-done', icon: CheckCircle2 },
  todo: { label: 'To Do', className: 'status-todo', icon: Circle },
  done: { label: 'Done', className: 'status-done', icon: CheckCircle2 },
  blocked: { label: 'Blocked', className: 'status-blocked', icon: AlertCircle },
};

const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
  const config = statusConfig[status];
  if (!config) return null;
  
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'status-badge',
        config.className,
        size === 'sm' && 'px-2 py-0.5 text-xs'
      )}
    >
      <Icon className={cn('h-3 w-3', status === 'in-progress' && 'animate-spin')} />
      {config.label}
    </span>
  );
};

export default StatusBadge;
