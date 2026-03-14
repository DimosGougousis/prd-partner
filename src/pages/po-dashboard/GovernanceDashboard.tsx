/**
 * PO Governance Dashboard - Main Page
 * 
 * Stage 1 & 2 Implementation: Delivery, Quality & Backlog
 */

import * as React from 'react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { TopBar } from '@/components/governance/TopBar';
import { VelocityTrendChart } from '@/components/governance/delivery/VelocityTrendChart';
import { SprintBurndownChart } from '@/components/governance/delivery/SprintBurndownChart';
import { SprintGoalStatus } from '@/components/governance/delivery/SprintGoalStatus';
import { DefectDensityChart } from '@/components/governance/quality/DefectDensityChart';
import { TestCoverageGauge } from '@/components/governance/quality/TestCoverageGauge';
import { SecurityFindingsBadge } from '@/components/governance/quality/SecurityFindingsBadge';
import { BacklogHealthCard } from '@/components/governance/backlog/BacklogHealthCard';
import { BacklogAgingChart } from '@/components/governance/backlog/BacklogAgingChart';
import { StoryReadinessChart } from '@/components/governance/backlog/StoryReadinessChart';
import { useDeliveryMetrics } from '@/hooks/governance/useDeliveryMetrics';
import { useQualityMetrics } from '@/hooks/governance/useQualityMetrics';
import { useBacklogMetrics } from '@/hooks/governance/useBacklogMetrics';

export default function GovernanceDashboard() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const { data: deliveryMetrics, isLoading: isLoadingDelivery, refetch: refetchDelivery } = useDeliveryMetrics({
    productId: selectedProduct,
    sprintCount: 5,
    useMock: true,
  });

  const { data: qualityMetrics, isLoading: isLoadingQuality, refetch: refetchQuality } = useQualityMetrics({
    projectKey: selectedProduct,
    useMock: true,
  });

  const { data: backlogMetrics, isLoading: isLoadingBacklog, refetch: refetchBacklog } = useBacklogMetrics({
    productId: selectedProduct,
    useMock: true,
  });

  const isLoading = isLoadingDelivery || isLoadingQuality || isLoadingBacklog;

  const handleRefresh = () => {
    refetchDelivery();
    refetchQuality();
    refetchBacklog();
  };

  // Calculate days remaining for active sprint
  const daysRemaining = React.useMemo(() => {
    if (!deliveryMetrics?.activeSprint?.endDate) return 0;
    const end = new Date(deliveryMetrics.activeSprint.endDate);
    const now = new Date();
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  }, [deliveryMetrics?.activeSprint]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Top Bar */}
        <TopBar
          selectedProduct={selectedProduct}
          onProductChange={setSelectedProduct}
          lastUpdated={new Date()}
          isRefreshing={isLoading}
          onRefresh={handleRefresh}
        />
        
        {/* Main Content */}
        <div className="container mx-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">PO Governance Dashboard</h1>
            <p className="text-gray-600">
              Unified SDLC governance across 8 pillars
            </p>
          </div>
          
          {/* 3-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Strategic & Delivery */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Delivery Performance</h2>
              
              {/* Sprint Goal Status */}
              <SprintGoalStatus
                goal={deliveryMetrics?.activeSprint?.goal}
                progress={deliveryMetrics?.sprintGoalProgress || 0}
                daysRemaining={daysRemaining}
                isLoading={isLoading}
              />
              
              {/* Velocity Trend */}
              <VelocityTrendChart
                data={deliveryMetrics?.velocityTrend || []}
                isLoading={isLoading}
              />
            </div>
            
            {/* Center Column - Active Sprint & Quality */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Active Sprint</h2>
              
              {/* Sprint Burndown */}
              <SprintBurndownChart
                sprintName={deliveryMetrics?.activeSprint?.name || ''}
                goal={deliveryMetrics?.activeSprint?.goal}
                data={deliveryMetrics?.activeBurndown || []}
                totalPoints={deliveryMetrics?.activeBurndown?.[0]?.remaining || 0}
                isLoading={isLoading}
              />
              
              {/* Quality Metrics */}
              <h2 className="text-lg font-semibold text-gray-700">Quality Metrics</h2>

              <TestCoverageGauge
                metrics={qualityMetrics}
                isLoading={isLoadingQuality}
              />

              <DefectDensityChart
                metrics={qualityMetrics}
                isLoading={isLoadingQuality}
              />

              <SecurityFindingsBadge
                metrics={qualityMetrics}
                isLoading={isLoadingQuality}
              />
            </div>
            
            {/* Right Column - Backlog */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Backlog Health</h2>

              <BacklogHealthCard
                metrics={backlogMetrics}
                isLoading={isLoadingBacklog}
              />

              <BacklogAgingChart
                metrics={backlogMetrics}
                isLoading={isLoadingBacklog}
              />

              <StoryReadinessChart
                metrics={backlogMetrics}
                isLoading={isLoadingBacklog}
              />

              {/* Placeholder for Compliance */}
              <div className="p-4 bg-white rounded-lg border border-gray-200 text-sm text-gray-500 mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Compliance</h3>
                <p>Compliance widgets coming in Stage 4...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
