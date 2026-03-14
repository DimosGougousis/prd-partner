/**
 * Top Bar - Product selector, release info, refresh controls
 * 
 * TODO[GAP-004]: Product selector data source
 *   - Fetch from existing prd-partner products table
 *   - Or use JIRA project list via integration
 * 
 * TODO: Implement manual refresh button with loading state
 * TODO: Implement auto-refresh toggle (5min default)
 * TODO: Show connection status for each integration
 */

import { useState } from 'react';
import { RefreshCw, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopBarProps {
  selectedProduct: string | null;
  onProductChange: (productId: string) => void;
  lastUpdated: Date | null;
  isRefreshing: boolean;
  onRefresh: () => void;
}

export function TopBar({
  selectedProduct,
  onProductChange,
  lastUpdated,
  isRefreshing,
  onRefresh,
}: TopBarProps) {
  // TODO: Fetch products from API
  const products: string[] = [];
  
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">PO Governance</h1>
        
        {/* Product Selector */}
        <select
          value={selectedProduct || ''}
          onChange={(e) => onProductChange(e.target.value)}
          className="border rounded-md px-3 py-1.5 text-sm"
        >
          <option value="">Select Product...</option>
          {products.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Last Updated */}
        {lastUpdated && (
          <span className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
        
        {/* Refresh Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
        
        {/* Settings */}
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
