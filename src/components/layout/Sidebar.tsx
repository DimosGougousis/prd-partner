import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Kanban,
  Users,
  Sparkles,
  Settings,
  ChevronDown,
  Plus,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'PRDs', href: '/prds', icon: FileText },
  { name: 'Kanban Board', href: '/kanban', icon: Kanban },
  { name: 'Stakeholders', href: '/stakeholders', icon: Users },
  { name: 'AI Insights', href: '/insights', icon: Sparkles },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Sparkles className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">
            PRD Agent
          </span>
        </div>

        {/* Workspace Selector */}
        <div className="border-b border-sidebar-border p-4">
          <button className="flex w-full items-center justify-between rounded-lg bg-sidebar-accent px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent/80">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-sidebar-primary/20 text-xs font-semibold text-sidebar-primary">
                PM
              </div>
              <span className="font-medium">Product Team</span>
            </div>
            <ChevronDown className="h-4 w-4 text-sidebar-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'sidebar-item',
                  isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Create PRD Button */}
        <div className="p-4">
          <Button
            className="w-full justify-start gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            New PRD
          </Button>
        </div>

        {/* Settings */}
        <div className="border-t border-sidebar-border p-4">
          <Link
            to="/settings"
            className="sidebar-item sidebar-item-inactive"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
