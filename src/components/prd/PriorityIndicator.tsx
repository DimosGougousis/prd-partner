import { cn } from '@/lib/utils';
import { Priority } from '@/types/prd';
import { ArrowUp, ArrowRight, ArrowDown } from 'lucide-react';

interface PriorityIndicatorProps {
  priority: Priority;
  showLabel?: boolean;
}

const priorityConfig: Record<Priority, { label: string; className: string; icon: React.ElementType }> = {
  high: { label: 'High', className: 'priority-high', icon: ArrowUp },
  medium: { label: 'Medium', className: 'priority-medium', icon: ArrowRight },
  low: { label: 'Low', className: 'priority-low', icon: ArrowDown },
};

const PriorityIndicator = ({ priority, showLabel = false }: PriorityIndicatorProps) => {
  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <span className={cn('inline-flex items-center gap-1', config.className)}>
      <Icon className="h-4 w-4" />
      {showLabel && <span className="text-xs font-medium">{config.label}</span>}
    </span>
  );
};

export default PriorityIndicator;
