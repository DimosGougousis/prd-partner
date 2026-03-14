/**
 * Sprint Goal Status - Progress indicator for current sprint goal
 * 
 * TODO[GAP-007]: Sprint Goal Data Source
 *   - JIRA Sprint field: `goal` (if available via API)
 *   - Or parse from sprint name/description
 *   - Progress: % of stories completed vs total
 */

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

interface SprintGoalStatusProps {
  goal: string;
  progress: number; // 0-100
  storiesCompleted: number;
  storiesTotal: number;
  isLoading: boolean;
}

export function SprintGoalStatus({
  goal,
  progress,
  storiesCompleted,
  storiesTotal,
  isLoading,
}: SprintGoalStatusProps) {
  // TODO: Determine status based on progress and days remaining
  // const status = calculateStatus(progress, daysRemaining);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="h-16 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Status Icon */}
          <div className="mt-1">
            {progress >= 80 ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : progress >= 50 ? (
              <Circle className="w-5 h-5 text-yellow-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
          
          <div className="flex-1">
            {/* Sprint Goal */}
            <p className="text-sm font-medium mb-2">
              {goal || 'TODO: Fetch sprint goal from JIRA'}
            </p>
            
            {/* Progress Bar */}
            <Progress value={progress} className="h-2 mb-2" />
            
            {/* Stats */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>{progress}% complete</span>
              <span>
                {storiesCompleted || '?'}/{storiesTotal || '?'} stories
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
