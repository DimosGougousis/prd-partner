# Quality Metrics - User Guide

## Overview

The Quality Metrics section provides visibility into code quality, test coverage, and security posture. These metrics help teams maintain high standards and catch issues early in the development cycle.

---

## Components

### 1. Defect Density Chart

**Purpose:** Measure the number of defects relative to codebase size to track quality trends.

#### Understanding Defect Density

**Formula:**
```
Defect Density = (Number of Defects / Code Size in KLOC) × 1000
```

Where:
- **Defects:** Bugs found in production or testing
- **KLOC:** Thousand Lines of Code
- **Result:** Defects per 1000 lines of code

#### Industry Benchmarks

| Level | Defects/KLOC | Interpretation |
|-------|--------------|----------------|
| Excellent | < 1.0 | World-class quality |
| Good | 1.0 - 2.5 | Industry average |
| Fair | 2.5 - 4.0 | Needs attention |
| Poor | > 4.0 | Significant improvement needed |

#### Chart Elements

- **Bars:** Defect density per release/sprint
- **Trend Line:** Moving average over time
- **Benchmark Line:** Industry standard (2.0)
- **Color Coding:**
  - 🟢 Green: Below benchmark
  - 🟡 Yellow: Near benchmark
  - 🔴 Red: Above benchmark

#### Actions Based on Data

**If Defect Density is High:**
1. Review code review practices
2. Increase test coverage
3. Implement static analysis tools
4. Provide developer training
5. Analyze defect categories for patterns

**If Defect Density is Improving:**
1. Document what's working
2. Share practices across teams
3. Set new stretch goals
4. Maintain current processes

#### Defect Categories

The chart can be drilled down to show:
- **Functional:** Logic errors, missing requirements
- **Performance:** Speed, memory, resource issues
- **Security:** Vulnerabilities, authentication issues
- **Usability:** UI/UX problems
- **Compatibility:** Platform/browser issues

---

### 2. Test Coverage Gauge

**Purpose:** Visualize the percentage of code covered by automated tests.

#### Coverage Levels

| Coverage | Status | Color | Action |
|----------|--------|-------|--------|
| > 90% | Excellent | 🟢 | Maintain, focus on edge cases |
| 80-90% | Good | 🟢 | Continue improvement |
| 70-80% | Acceptable | 🟡 | Prioritize uncovered areas |
| 60-70% | Warning | 🟡 | Add tests for critical paths |
| < 60% | Critical | 🔴 | Immediate action required |

#### Types of Coverage

1. **Line Coverage:** Percentage of lines executed
2. **Branch Coverage:** Percentage of decision branches taken
3. **Function Coverage:** Percentage of functions called
4. **Statement Coverage:** Percentage of statements executed

#### Gauge Interpretation

- **Outer Ring:** Overall coverage percentage
- **Inner Segments:** Coverage by module/component
- **Trend Arrow:** Week-over-week change
- **Target Line:** Configurable goal (default 80%)

#### Improving Coverage

**Quick Wins:**
- Add tests for public APIs
- Cover error handling paths
- Test boundary conditions

**Strategic Improvements:**
- Implement TDD for new features
- Add integration tests
- Create contract tests for APIs
- Set coverage gates in CI/CD

#### Coverage Anti-Patterns

❌ **Don't:**
- Write tests just to hit coverage numbers
- Exclude files from coverage to inflate numbers
- Test only happy paths
- Ignore failing coverage checks

✅ **Do:**
- Focus on meaningful test scenarios
- Test edge cases and error conditions
- Maintain test quality over quantity
- Review uncovered code for importance

---

### 3. Security Findings Badge

**Purpose:** Display security vulnerabilities found in code scans.

#### Severity Levels

| Severity | Icon | Response Time | Description |
|----------|------|---------------|-------------|
| Critical | 🔴 | Immediate | Exploitable vulnerabilities |
| High | 🟠 | 7 days | Significant security risks |
| Medium | 🟡 | 30 days | Moderate concerns |
| Low | 🔵 | 90 days | Minor issues |
| Info | ⚪ | As scheduled | Best practice suggestions |

#### Badge Components

- **Total Count:** Sum of all open findings
- **By Severity:** Breakdown of critical/high/medium/low
- **New Findings:** Since last scan
- **Trend:** Week-over-week change
- **Age:** How long findings have been open

#### Vulnerability Types

Common categories include:
- **Injection:** SQL, NoSQL, OS command injection
- **Broken Auth:** Authentication/authorization flaws
- **Sensitive Data:** Exposure of sensitive information
- **XXE:** XML external entity attacks
- **Access Control:** Missing function-level access control
- **Security Misconfig:** Default configs, error messages
- **XSS:** Cross-site scripting
- **Deserialization:** Insecure deserialization
- **Components:** Vulnerable dependencies
- **Logging:** Insufficient logging and monitoring

#### Response Workflow

1. **Critical/High:**
   - Stop current work if necessary
   - Assign immediately
   - Fix within SLA
   - Verify fix with re-scan

2. **Medium:**
   - Add to current sprint
   - Prioritize based on exposure
   - Fix within 30 days

3. **Low/Info:**
   - Add to backlog
   - Address during refactoring
   - Batch fixes

#### Integration with SonarQube

**Required Configuration:**
```bash
VITE_SONARQUBE_URL=https://sonar.company.com
VITE_SONARQUBE_TOKEN=your_token
VITE_SONARQUBE_PROJECT_KEY=project_key
```

**Quality Gates:**
- 0 new critical issues
- 0 new high issues
- Coverage on new code > 80%
- Duplicated lines on new code < 3%

---

## Quality Metrics Best Practices

### 1. Set Quality Gates

Define minimum standards:
- Coverage > 70%
- No critical security issues
- Defect density < 2.5
- Technical debt < 5 days

### 2. Track Trends, Not Just Numbers

- Focus on improvement over time
- Compare sprint-over-sprint
- Account for codebase growth
- Normalize for team size

### 3. Balance Speed and Quality

- Don't sacrifice all speed for quality
- Find sustainable pace
- Address technical debt regularly
- Invest in automation

### 4. Make Metrics Visible

- Display in team areas
- Review in retrospectives
- Include in stakeholder updates
- Celebrate improvements

---

## Troubleshooting

### Coverage Not Updating

1. Check if tests are running in CI
2. Verify coverage reports are being generated
3. Confirm SonarQube is receiving reports
4. Check file path mappings

### False Positive Security Findings

1. Review finding details carefully
2. Mark as false positive in SonarQube if appropriate
3. Document why it's a false positive
4. Configure rule exceptions if needed

### Defect Data Missing

1. Verify JIRA integration is working
2. Check defect issue type mapping
3. Ensure defects are linked to releases
4. Confirm date range filters

---

## Related Guides

- [Delivery Metrics Guide](./DELIVERY_METRICS_GUIDE.md)
- [Compliance & Security Guide](./COMPLIANCE_SECURITY_GUIDE.md)
- [Governance Dashboard Overview](./GOVERNANCE_DASHBOARD_GUIDE.md)
