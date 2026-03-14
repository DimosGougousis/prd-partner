/**
 * Test Coverage Gauge - Circular progress indicator for test coverage %
 * 
 * TODO[GAP-009]: SonarQube Coverage API
 *   - API endpoint: `/api/measures/component`
 *   - Metric keys: `coverage`, `line_coverage`, `branch_coverage`
 *   - Component key mapping from product
 * 
 * TODO: Implement color thresholds
 *   - >= 80%: green
 *   - 60-79%: yellow
 *   - < 60%: red
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TestCoverageGaugeProps {
  coverage: number; // 0-100
  lineCoverage: number;
  branchCoverage: number;
  isLoading: boolean;
}

export function TestCoverageGauge({
  coverage,
  lineCoverage,
  branchCoverage,
  isLoading,
}: TestCoverageGaugeProps) {
  // TODO: Determine color based on threshold
  const getColor = (value: number) => {
    if (value >= 80) return 'text-green-500';
    if (value >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Test Coverage</CardTitle>
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
        <CardTitle className="text-sm font-medium">Test Coverage</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main Gauge */}
        <div className="flex items-center justify-center py-4">
          <div className="relative w-24 h-24">
            {/* TODO: Implement circular progress using SVG or Recharts
            <RadialBarChart width={96} height={96} data={[{ value: coverage }]}>
              <RadialBar dataKey="value" background clockWise />
            </RadialBarChart>
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold ${getColor(coverage || 0)}`}>
                {coverage || '?'}%
              </span>
            </div>
          </div>
        </div>
        
        {/* Breakdown */}
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Line Coverage</span>
            <span className="font-medium">{lineCoverage || '?'}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Branch Coverage</span>
            <span className="font-medium">{branchCoverage || '?'}%</span>
          </div>
        </div>
        
        {/* SonarQube Gate Status */}
        <div className="mt-3 pt-3 border-t text-xs text-gray-400">
          TODO: SonarQube Quality Gate status
        </div>
      </CardContent>
    </Card>
  );
}
