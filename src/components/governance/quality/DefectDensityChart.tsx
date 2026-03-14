/**
 * Defect Density Chart - Defects by severity with trend
 * 
 * TODO[GAP-008]: SonarQube Integration Requirements
 *   - API endpoint: `/api/issues/search`
 *   - Query params: `types=BUG`, `severities=BLOCKER,CRITICAL,MAJOR,MINOR`
 *   - Need component/project key mapping
 * 
 * TODO: Implement severity color coding
 *   - Critical: red-500
 *   - High: orange-500
 *   - Medium: yellow-500
 *   - Low: blue-500
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DefectCount {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

interface DefectDensityChartProps {
  defects: DefectCount;
  trend: 'improving' | 'worsening' | 'stable';
  isLoading: boolean;
}

export function DefectDensityChart({ defects, trend, isLoading }: DefectDensityChartProps) {
  const total = defects ? 
    defects.critical + defects.high + defects.medium + defects.low : 0;

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Defect Density</CardTitle>
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
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Defects by Severity</span>
          {/* TODO: Add trend indicator */}
          <Badge variant="outline" className="text-xs">
            TODO: {trend || 'trend'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Severity Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-red-600 font-medium">Critical</span>
            <span className="text-sm font-bold">{defects?.critical || '?'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-orange-600 font-medium">High</span>
            <span className="text-sm font-bold">{defects?.high || '?'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-yellow-600 font-medium">Medium</span>
            <span className="text-sm font-bold">{defects?.medium || '?'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-blue-600 font-medium">Low</span>
            <span className="text-sm font-bold">{defects?.low || '?'}</span>
          </div>
        </div>
        
        {/* Total */}
        <div className="mt-3 pt-3 border-t">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Total</span>
            <span className="text-sm font-bold">{total || '?'}</span>
          </div>
        </div>
        
        {/* TODO: Add trend chart over time */}
        <div className="mt-3 h-16 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">
          TODO: Trend chart (Stage 1)
        </div>
      </CardContent>
    </Card>
  );
}
