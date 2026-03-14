/**
 * Velocity Trend Chart - Rolling 5-sprint velocity + forecast
 * 
 * TODO[GAP-005]: JIRA Sprint API Contract
 *   - JQL: `project = X AND sprint in closedSprints() ORDER BY sprint DESC`
 *   - Need: sprint name, committed story points, completed story points
 *   - Forecast algorithm: average of last 3 sprints
 * 
 * TODO: Implement Recharts LineChart with:
 *   - Committed vs Completed bars
 *   - Forecast line (dashed)
 *   - Trend indicator (improving/declining/stable)
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface SprintVelocity {
  sprintName: string;
  committed: number;
  completed: number;
  startDate: Date;
}

interface VelocityTrendChartProps {
  data: SprintVelocity[];
  isLoading: boolean;
}

export function VelocityTrendChart({ data, isLoading }: VelocityTrendChartProps) {
  // TODO: Calculate forecast based on rolling average
  // const forecast = calculateForecast(data);
  
  // TODO: Determine trend direction
  // const trend = calculateTrend(data);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Velocity Trend</CardTitle>
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
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Velocity Trend (5 Sprints)</span>
          {/* TODO: Add trend badge */}
          <span className="text-xs text-gray-400">TODO: Forecast</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* TODO: Implement Recharts BarChart
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sprintName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="committed" fill="#94a3b8" name="Committed" />
            <Bar dataKey="completed" fill="#3b82f6" name="Completed" />
          </BarChart>
        </ResponsiveContainer>
        */}
        <div className="h-48 bg-gray-50 rounded flex items-center justify-center text-sm text-gray-400">
          TODO: Velocity chart (Stage 1)
        </div>
        
        {/* TODO: Add forecast summary */}
        <div className="mt-3 text-xs text-gray-500">
          Next sprint forecast: TODO points
        </div>
      </CardContent>
    </Card>
  );
}
