import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PRDCard from '@/components/prd/PRDCard';
import { usePRDs } from '@/context/PRDContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Plus, Search, Filter, LayoutGrid, List, Loader2, Trash2, Archive } from 'lucide-react';
import { PRDStatus, Priority } from '@/types/prd';
import { cn } from '@/lib/utils';
import CreatePRDModal from '@/components/prd/CreatePRDModal';

const PRDList = () => {
  const { prds, isLoading, deletePRD, updatePRD } = usePRDs();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<PRDStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [createModalOpen, setCreateModalOpen] = useState(false);
  
  // Bulk actions state
  const [selectedPRDs, setSelectedPRDs] = useState<Set<string>>(new Set());
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);
  const [showBulkArchiveDialog, setShowBulkArchiveDialog] = useState(false);
  const [showBulkPriorityDialog, setShowBulkPriorityDialog] = useState(false);
  const [bulkPriority, setBulkPriority] = useState<Priority>('P1');

  const filteredPRDs = prds.filter((prd) => {
    const matchesSearch =
      prd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prd.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || prd.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || prd.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const togglePRDSelection = (prdId: string) => {
    const newSelected = new Set(selectedPRDs);
    if (newSelected.has(prdId)) {
      newSelected.delete(prdId);
    } else {
      newSelected.add(prdId);
    }
    setSelectedPRDs(newSelected);
  };

  const selectAllPRDs = () => {
    if (selectedPRDs.size === filteredPRDs.length) {
      setSelectedPRDs(new Set());
    } else {
      setSelectedPRDs(new Set(filteredPRDs.map(p => p.id)));
    }
  };

  const handleBulkDelete = () => {
    selectedPRDs.forEach(id => deletePRD(id));
    setSelectedPRDs(new Set());
    setShowBulkDeleteDialog(false);
  };

  const handleBulkArchive = () => {
    selectedPRDs.forEach(id => updatePRD(id, { status: 'archived' }));
    setSelectedPRDs(new Set());
    setShowBulkArchiveDialog(false);
  };

  const handleBulkPriorityChange = () => {
    selectedPRDs.forEach(id => updatePRD(id, { priority: bulkPriority }));
    setSelectedPRDs(new Set());
    setShowBulkPriorityDialog(false);
  };

  if (isLoading) {
    return (
      <Layout title="PRDs" subtitle="Manage your Product Requirements Documents">
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="My PRDs" subtitle="Manage your Product Requirements Documents">
      <div className="space-y-6 animate-fade-in">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search PRDs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as PRDStatus | 'all')}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="backlog">Backlog</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="waiting">Waiting</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={(v) => setPriorityFilter(v as Priority | 'all')}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="P0">P0 - Critical</SelectItem>
                <SelectItem value="P1">P1 - High</SelectItem>
                <SelectItem value="P2">P2 - Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            {/* Bulk Actions */}
            {selectedPRDs.size > 0 && (
              <div className="flex items-center gap-2 mr-4">
                <span className="text-sm text-muted-foreground">
                  {selectedPRDs.size} selected
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBulkArchiveDialog(true)}
                >
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBulkPriorityDialog(true)}
                >
                  Change Priority
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setShowBulkDeleteDialog(true)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            )}

            {/* View Toggle */}
            <div className="flex rounded-lg border border-border p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
                  viewMode === 'grid'
                    ? 'bg-accent text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
                  viewMode === 'list'
                    ? 'bg-accent text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            <Button className="gap-2" onClick={() => setCreateModalOpen(true)}>
              <Plus className="h-4 w-4" />
              New PRD
            </Button>
          </div>
        </div>

        {/* Select All Checkbox */}
        {filteredPRDs.length > 0 && (
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedPRDs.size === filteredPRDs.length && filteredPRDs.length > 0}
              onCheckedChange={selectAllPRDs}
            />
            <span className="text-sm text-muted-foreground">
              Select all {filteredPRDs.length} PRDs
            </span>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          Showing {filteredPRDs.length} of {prds.length} PRDs
        </p>

        {/* PRD Grid/List */}
        {filteredPRDs.length > 0 ? (
          <div
            className={cn(
              'grid gap-4',
              viewMode === 'grid'
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            )}
          >
            {filteredPRDs.map((prd) => (
              <PRDCard 
                key={prd.id} 
                prd={prd} 
                selected={selectedPRDs.has(prd.id)}
                onSelect={togglePRDSelection}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">No PRDs found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      <CreatePRDModal open={createModalOpen} onOpenChange={setCreateModalOpen} />

      {/* Bulk Delete Dialog */}
      <Dialog open={showBulkDeleteDialog} onOpenChange={setShowBulkDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-red-500" />
              Delete {selectedPRDs.size} PRDs
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedPRDs.size} PRDs? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleBulkDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk Archive Dialog */}
      <Dialog open={showBulkArchiveDialog} onOpenChange={setShowBulkArchiveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Archive className="w-5 h-5 text-blue-500" />
              Archive {selectedPRDs.size} PRDs
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to archive {selectedPRDs.size} PRDs? Archived PRDs can be restored later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkArchiveDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleBulkArchive}>
              Archive
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk Priority Dialog */}
      <Dialog open={showBulkPriorityDialog} onOpenChange={setShowBulkPriorityDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Priority for {selectedPRDs.size} PRDs</DialogTitle>
            <DialogDescription>
              Select the new priority level for the selected PRDs.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Select value={bulkPriority} onValueChange={(v) => setBulkPriority(v as Priority)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="P0">P0 - Critical</SelectItem>
                <SelectItem value="P1">P1 - High</SelectItem>
                <SelectItem value="P2">P2 - Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkPriorityDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleBulkPriorityChange}>
              Change Priority
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PRDList;
