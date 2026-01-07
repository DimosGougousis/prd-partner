import { cn } from '@/lib/utils';
import { PRDStatus, SectionStatus } from '@/types/prd';
import { Circle, Loader2, CheckCircle2, AlertCircle, FileEdit } from 'lucide-react';

interface StatusBadgeProps {
  status: PRDStatus | SectionStatus;
  size?: 'sm' | 'md';
}

const statusConfig: Record<PRDStatus | SectionStatus, { label: string; className: string; icon: React.ElementType }> = {
  draft: { label: 'Draft', className: 'status-todo', icon: FileEdit },
  todo: { label: 'To Do', className: 'status-todo', icon: Circle },
  'in-progress': { label: 'In Progress', className: 'status-in-progress', icon: Loader2 },
  review: { label: 'In Review', className: 'status-review', icon: Circle },
  approved: { label: 'Approved', className: 'status-done', icon: CheckCircle2 },
  done: { label: 'Done', className: 'status-done', icon: CheckCircle2 },
  blocked: { label: 'Blocked', className: 'status-blocked', icon: AlertCircle },
};

const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
  const config = statusConfig[status];
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
