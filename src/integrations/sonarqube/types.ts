/**
 * SonarQube Integration Types
 * 
 * TODO: Align with actual SonarQube API responses
 */

export interface SonarIssue {
  key: string;
  rule: string;
  severity: 'BLOCKER' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'INFO';
  component: string;
  type: 'BUG' | 'VULNERABILITY' | 'CODE_SMELL';
  message: string;
  line?: number;
}

export interface SonarMeasure {
  metric: string;
  value: string;
}

export interface SonarQualityGateStatus {
  projectStatus: {
    status: 'OK' | 'ERROR' | 'WARN';
    conditions: Array<{
      status: 'OK' | 'ERROR' | 'WARN';
      metricKey: string;
      actualValue: string;
      threshold: string;
    }>;
  };
}

export interface SonarIssuesResponse {
  total: number;
  issues: SonarIssue[];
}

export interface SonarMeasuresResponse {
  component: {
    key: string;
    name: string;
    measures: SonarMeasure[];
  };
}
