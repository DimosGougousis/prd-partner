/**
 * Sprint Burndown Chart - Active sprint remaining work over time
 * 
 * TODO[GAP-006]: JIRA Burndown Data Requirements
 *   - Active sprint: `sprint in openSprints()`
 *   - Daily remaining story points
 *   - Ideal burndown line (linear from total to 0)
 *   - Actual burndown line (real remaining)
 * 
 * TODO: Handle case when no active sprint
 * TODO: Add sprint goal progress indicator
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BurndownPoint {
  date: Date;
  remaining: number;
  ideal: number;
}

interface SprintBurndownChartProps {
  sprintName: string;
  data: BurndownPoint[];
  totalPoints: number;
  isLoading: boolean;
}

export function SprintBurndownChart({
  sprintName,
  data,
  totalPoints,
  isLoading,
}: SprintBurndownChartProps) {
  // TODO: Calculate if sprint is on track
  // const isOnTrack = data[data.length - 1]?.remaining <= data[data.length - 1]?.ideal;

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Sprint Burndown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">
          Sprint Burndown: {sprintName || 'No Active Sprint'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* TODO: Implement Recharts LineChart
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(d) => format(d, 'MMM dd')} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ideal" stroke="#94a3b8" strokeDasharray="5 5" name="Ideal" />
            <Line type="monotone" dataKey="remaining" stroke="#3b82f6" name="Actual" />
          </LineChart>
        </ResponsiveContainer>
        */}
        <div className="h-48 bg-gray-50 rounded flex items-center justify-center text-sm text-gray-400">
          TODO: Burndown chart (Stage 1)
        </div>
        
        {/* TODO: Add on-track indicator */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="text-gray-500">Status:</span>
          <span className="text-gray-400">TODO: On track / At risk</span>
        </div>
      </CardContent>
    </Card>
  );
}
