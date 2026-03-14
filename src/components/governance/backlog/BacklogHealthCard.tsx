/**
 * Backlog Health Card - Size, readiness %, tech debt indicator
 * 
 * TODO[STAGE-2]: Backlog Health Implementation
 *   - JQL queries for backlog metrics
 *   - Tech debt detection via labels
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface BacklogHealthCardProps {
  totalIssues: number;
  readyForDev: number;
  needsRefinement: number;
  techDebtCount: number;
  techDebtStoryPoints: number;
  isLoading: boolean;
}

export function BacklogHealthCard({
  totalIssues,
  readyForDev,
  needsRefinement,
  techDebtCount,
  techDebtStoryPoints,
  isLoading,
}: BacklogHealthCardProps) {
  const readinessPercent = totalIssues 
    ? Math.round((readyForDev / totalIssues) * 100) 
    : 0;

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Backlog Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Backlog Health</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Readiness */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Ready for Development</span>
            <span>{readinessPercent || '?'}%</span>
          </div>
          <Progress value={readinessPercent} className="h-2" />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-gray-50 rounded">
            <span className="text-gray-500 block">Total Issues</span>
            <span className="font-bold">{totalIssues || '?'}</span>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <span className="text-gray-500 block">Needs Refinement</span>
            <span className="font-bold">{needsRefinement || '?'}</span>
          </div>
        </div>
        
        {/* Tech Debt */}
        <div className="mt-3 p-2 bg-orange-50 rounded">
          <div className="flex justify-between text-xs">
            <span className="text-orange-600 font-medium">Tech Debt</span>
            <span className="text-orange-600">
              {techDebtCount || '?'} issues ({techDebtStoryPoints || '?'} pts)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
