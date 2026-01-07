import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockStakeholders, mockPRDs } from '@/data/mockData';
import { Mail, FileText } from 'lucide-react';

const Stakeholders = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getPRDCount = (stakeholderId: string) => {
    return mockPRDs.filter((prd) =>
      prd.stakeholders.some((s) => s.id === stakeholderId)
    ).length;
  };

  return (
    <Layout title="Stakeholders" subtitle="Manage PRD contributors and reviewers">
      <div className="space-y-6 animate-fade-in">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockStakeholders.map((stakeholder) => (
            <Card
              key={stakeholder.id}
              className="card-hover cursor-pointer border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                    {getInitials(stakeholder.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="font-semibold text-foreground">
                    {stakeholder.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {stakeholder.role}
                  </Badge>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{stakeholder.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{getPRDCount(stakeholder.id)} PRDs assigned</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stakeholders;
