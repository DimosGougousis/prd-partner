/**
 * useDeliveryMetrics Hook - Fetch delivery metrics from JIRA
 * 
 * TODO[GAP-015]: JIRA API Integration
 *   - Extend existing src/integrations/jira/client.ts
 *   - Add methods:
 *     - getSprintVelocity(projectKey, sprintCount)
 *     - getActiveSprintBurndown(projectKey)
 *     - getSprintGoalProgress(projectKey)
 * 
 * TODO: Implement React Query with proper caching
 *   - staleTime: 5 minutes
 *   - refetchInterval: 5 minutes
 */

import { useQuery } from '@tanstack/react-query';

interface SprintVelocity {
  sprintName: string;
  committed: number;
  completed: number;
  startDate: Date;
}

interface BurndownPoint {
  date: Date;
  remaining: number;
  ideal: number;
}

interface DeliveryMetrics {
  velocityTrend: SprintVelocity[];
  activeBurndown: BurndownPoint[];
  sprintGoalProgress: number;
  leadTimeDays: number;
  cycleTimeDays: number;
}

interface UseDeliveryMetricsOptions {
  productId: string | null;
  sprintCount?: number;
}

const fetchDeliveryMetrics = async (
  productId: string,
  sprintCount: number
): Promise<DeliveryMetrics> => {
  // TODO: Implement API call
  // const response = await fetch(`/api/governance/metrics/delivery/${productId}?sprintCount=${sprintCount}`);
  // return response.json();
  
  throw new Error('TODO: Implement fetchDeliveryMetrics');
};

export function useDeliveryMetrics({
  productId,
  sprintCount = 5,
}: UseDeliveryMetricsOptions) {
  return useQuery<DeliveryMetrics>({
    queryKey: ['governance', 'delivery', productId, sprintCount],
    queryFn: () => fetchDeliveryMetrics(productId!, sprintCount),
    enabled: !!productId,
    // TODO: Configure caching
    // staleTime: 5 * 60 * 1000, // 5 minutes
    // refetchInterval: 5 * 60 * 1000,
  });
}
