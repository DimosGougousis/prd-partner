/**
 * Compliance Status Widget - GDPR/PCI status with expiry
 * 
 * TODO[STAGE-4]: Compliance Implementation
 *   - GDPR request count from internal tracking
 *   - PCI compliance expiry from compliance tool
 *   - RBAC: Restrict to compliance_officer role
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface ComplianceStatusWidgetProps {
  gdprRequestCount: number;
  pciExpiryDate: Date | null;
  checklistStatus: 'green' | 'amber' | 'red';
  isLoading: boolean;
}

export function ComplianceStatusWidget({
  gdprRequestCount,
  pciExpiryDate,
  checklistStatus,
  isLoading,
}: ComplianceStatusWidgetProps) {
  // TODO: Calculate days until PCI expiry
  const daysUntilExpiry = pciExpiryDate 
    ? Math.ceil((pciExpiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  const statusConfig = {
    green: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
    amber: { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    red: { icon: Shield, color: 'text-red-500', bg: 'bg-red-50' },
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-24 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  const config = statusConfig[checklistStatus || 'amber'];
  const Icon = config.icon;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Compliance Status</span>
          <Badge variant={checklistStatus === 'green' ? 'default' : 'destructive'}>
            {checklistStatus || 'TODO'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {/* GDPR */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">GDPR Requests</span>
            <span className="font-medium">{gdprRequestCount || '?'}</span>
          </div>
          
          {/* PCI */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">PCI Expiry</span>
            <span className={`font-medium ${daysUntilExpiry && daysUntilExpiry < 30 ? 'text-red-500' : ''}`}>
              {daysUntilExpiry !== null ? `${daysUntilExpiry} days` : 'TODO'}
            </span>
          </div>
          
          {/* Status Summary */}
          <div className={`flex items-center gap-2 p-2 rounded ${config.bg}`}>
            <Icon className={`w-4 h-4 ${config.color}`} />
            <span className={`text-xs ${config.color}`}>
              {checklistStatus === 'green' ? 'All checks passing' : 'Action required'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
