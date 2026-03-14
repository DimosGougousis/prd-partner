/**
 * useBacklogMetrics Hook - Fetch backlog health metrics
 * 
 * TODO[STAGE-2]: Backlog Health Implementation
 *   - JQL: `project = X AND status not in (Done, Closed)`
 *   - Count by status, labels, story points
 *   - Tech debt detection via label
 */

import { useQuery } from '@tanstack/react-query';

interface BacklogMetrics {
  totalIssues: number;
  readyForDev: number;
  needsRefinement: number;
  techDebtCount: number;
  techDebtStoryPoints: number;
  avgStoryAgeDays: number;
}

export function useBacklogMetrics(productId: string | null) {
  return useQuery<BacklogMetrics>({
    queryKey: ['governance', 'backlog', productId],
    queryFn: async () => {
      throw new Error('TODO: Implement useBacklogMetrics (Stage 2)');
    },
    enabled: !!productId,
  });
}
