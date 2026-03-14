/**
 * NPS/CSAT Trend Chart - Customer satisfaction over time
 * 
 * TODO[STAGE-3]: Customer Metrics Implementation
 *   - Mixpanel or Amplitude integration
 *   - 12-week trend data
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NPSDataPoint {
  week: string;
  nps: number;
  csat: number;
}

interface NPSCsatTrendChartProps {
  data: NPSDataPoint[];
  isLoading: boolean;
}

export function NPSCsatTrendChart({ data, isLoading }: NPSCsatTrendChartProps) {
  // TODO: Calculate trend direction
  // const npsTrend = calculateTrend(data.map(d => d.nps));

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">NPS & CSAT Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">NPS & CSAT (12 weeks)</CardTitle>
      </CardHeader>
      <CardContent>
        {/* TODO: Implement Recharts LineChart */}
        <div className="h-40 bg-gray-50 rounded flex items-center justify-center text-sm text-gray-400">
          TODO: NPS/CSAT trend chart (Stage 3)
        </div>
        
        {/* Current Values */}
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div className="text-center">
            <span className="text-xs text-gray-500 block">Current NPS</span>
            <span className="text-lg font-bold">
              {data?.[data.length - 1]?.nps || '?'}
            </span>
          </div>
          <div className="text-center">
            <span className="text-xs text-gray-500 block">Current CSAT</span>
            <span className="text-lg font-bold">
              {data?.[data.length - 1]?.csat || '?'}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
