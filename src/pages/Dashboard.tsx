import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import PRDChart from '@/components/dashboard/PRDChart';
import PRDCard from '@/components/prd/PRDCard';
import { mockPRDs, mockMetrics } from '@/data/mockData';
import { FileText, Clock, CheckCircle2, AlertCircle, TrendingUp, Users } from 'lucide-react';

const Dashboard = () => {
  const recentPRDs = mockPRDs.slice(0, 3);

  return (
    <Layout title="Dashboard" subtitle="Overview of your PRD portfolio">
      <div className="space-y-6 animate-fade-in">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total PRDs"
            value={mockMetrics.totalPRDs}
            icon={<FileText className="h-5 w-5 text-primary" />}
            trend={{ value: 12, label: 'vs last month' }}
          />
          <MetricCard
            title="In Progress"
            value={mockMetrics.inProgress}
            icon={<Clock className="h-5 w-5 text-status-in-progress" />}
            subtitle="Actively being worked on"
          />
          <MetricCard
            title="Completed"
            value={mockMetrics.completed}
            icon={<CheckCircle2 className="h-5 w-5 text-status-done" />}
            trend={{ value: 8, label: 'vs last month' }}
          />
          <MetricCard
            title="Blocked"
            value={mockMetrics.blocked}
            icon={<AlertCircle className="h-5 w-5 text-status-blocked" />}
            trend={{ value: -25, label: 'vs last month' }}
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid gap-4 md:grid-cols-2">
          <MetricCard
            title="Avg. Completion Time"
            value={`${mockMetrics.averageCompletionTime} days`}
            icon={<TrendingUp className="h-5 w-5 text-accent-foreground" />}
            subtitle="From draft to approved"
            trend={{ value: -15, label: 'improvement' }}
          />
          <MetricCard
            title="Stakeholder Response Rate"
            value={`${mockMetrics.stakeholderResponseRate}%`}
            icon={<Users className="h-5 w-5 text-primary" />}
            subtitle="Within 24 hours"
            trend={{ value: 5, label: 'vs last month' }}
          />
        </div>

        {/* Charts and Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <PRDChart />
          <RecentActivity />
        </div>

        {/* Recent PRDs */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Recent PRDs</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPRDs.map((prd) => (
              <PRDCard key={prd.id} prd={prd} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
