/**
 * Security Findings Badge - Critical/high security issue count
 * 
 * TODO[GAP-010]: SonarQube Security API
 *   - API endpoint: `/api/issues/search`
 *   - Query params: `types=VULNERABILITY`, `severities=BLOCKER,CRITICAL`
 *   - Or use Snyk/GitHub Advanced Security integration
 */

import { Card, CardContent } from '@/components/ui/card';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

interface SecurityFindingsBadgeProps {
  critical: number;
  high: number;
  medium: number;
  isLoading: boolean;
}

export function SecurityFindingsBadge({
  critical,
  high,
  medium,
  isLoading,
}: SecurityFindingsBadgeProps) {
  // TODO: Determine overall status
  const hasCritical = (critical || 0) > 0;
  const hasHigh = (high || 0) > 0;

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
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className={`p-2 rounded-full ${
            hasCritical ? 'bg-red-100' : hasHigh ? 'bg-orange-100' : 'bg-green-100'
          }`}>
            {hasCritical ? (
              <ShieldAlert className="w-5 h-5 text-red-600" />
            ) : hasHigh ? (
              <Shield className="w-5 h-5 text-orange-600" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-green-600" />
            )}
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-medium">Security Findings</p>
            
            {/* Counts */}
            <div className="flex gap-3 mt-1 text-xs">
              <span className={critical > 0 ? 'text-red-600 font-bold' : 'text-gray-500'}>
                {critical || '?'} Critical
              </span>
              <span className={high > 0 ? 'text-orange-600 font-bold' : 'text-gray-500'}>
                {high || '?'} High
              </span>
              <span className="text-gray-500">
                {medium || '?'} Medium
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
