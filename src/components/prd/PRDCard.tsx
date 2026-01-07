import { Link } from 'react-router-dom';
import { PRD } from '@/types/prd';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import StatusBadge from './StatusBadge';
import PriorityIndicator from './PriorityIndicator';
import { Calendar, Users } from 'lucide-react';
import { getStakeholderById } from '@/data/mockData';

interface PRDCardProps {
  prd: PRD;
}

const PRDCard = ({ prd }: PRDCardProps) => {
  const getInitials = (name: string | { name?: string } | undefined) => {
    const nameStr = typeof name === 'string' ? name : (name?.name || 'U');
    return nameStr
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Handle owner being either string (new) or object (old localStorage data)
  const ownerName = typeof prd.owner === 'string' ? prd.owner : ((prd.owner as any)?.name || 'Unknown');

  // Get stakeholder objects from IDs
  const stakeholderObjects = (prd.stakeholders || [])
    .map(id => getStakeholderById(id))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <Link to={`/prd/${prd.id}`}>
      <Card className="card-hover cursor-pointer border border-border bg-card p-5 transition-all hover:border-primary/20">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-semibold text-foreground">
                {prd.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {prd.description}
              </p>
            </div>
            <PriorityIndicator priority={prd.priority} />
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">{prd.progress}%</span>
            </div>
            <Progress value={prd.progress} className="h-1.5" />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-4">
              <StatusBadge status={prd.status} size="sm" />
              
              {prd.targetDate && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(prd.targetDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              )}
            </div>

            {/* Owner */}
            <div className="flex items-center gap-1">
              <Avatar className="h-6 w-6 border-2 border-card">
                <AvatarFallback className="bg-accent text-[10px] font-medium text-accent-foreground">
                  {getInitials(ownerName)}
                </AvatarFallback>
              </Avatar>
              {stakeholderObjects.length > 0 && (
                <div className="flex -space-x-2 ml-1">
                  {stakeholderObjects.slice(0, 2).map((stakeholder) => (
                    <Avatar
                      key={stakeholder.id}
                      className="h-5 w-5 border-2 border-card"
                    >
                      <AvatarFallback className="bg-muted text-[8px] font-medium text-muted-foreground">
                        {getInitials(stakeholder.name)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {stakeholderObjects.length > 2 && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-card bg-muted text-[8px] font-medium text-muted-foreground">
                      +{stakeholderObjects.length - 2}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PRDCard;
