# Delivery Metrics - User Guide

## Overview

The Delivery Metrics section provides comprehensive visibility into your team's sprint performance, velocity trends, and sprint execution. These metrics help Product Owners track delivery predictability and identify potential risks early.

---

## Components

### 1. Velocity Trend Chart

**Purpose:** Track team velocity across sprints to identify trends and forecast capacity.

#### How to Use

1. **View Historical Data**
   - Chart displays last 6 sprints by default
   - Each bar represents total story points completed
   - Trend line shows velocity direction

2. **Interpret Trends**
   - **Upward Trend:** Team improving, processes maturing
   - **Downward Trend:** Potential blockers, scope creep, or team changes
   - **Volatile:** Inconsistent estimation or external disruptions

3. **Forecasting**
   - Use average velocity for sprint planning
   - Account for holidays/vacations in projections
   - Adjust for known upcoming changes

#### Key Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Average Velocity | Mean story points per sprint | Stable or increasing |
| Trend Direction | Slope of velocity line | Positive or flat |
| Volatility | Standard deviation of velocity | < 20% of average |

#### Actions Based on Data

**If Velocity is Declining:**
- Review sprint retrospectives for common issues
- Check for increased technical debt
- Assess team composition changes
- Analyze story complexity trends

**If Velocity is Volatile:**
- Improve estimation practices
- Break down stories more consistently
- Reduce external interruptions
- Stabilize sprint scope

---

### 2. Sprint Burndown Chart

**Purpose:** Visualize daily progress during the sprint and identify deviations from plan.

#### How to Read the Chart

- **Gray Dashed Line:** Ideal burndown (linear from total to 0)
- **Blue Line:** Actual remaining work
- **X-Axis:** Days in sprint
- **Y-Axis:** Remaining story points

#### Status Indicators

| Pattern | Meaning | Action |
|---------|---------|--------|
| Above ideal line | Behind schedule | Identify blockers, consider scope reduction |
| Below ideal line | Ahead of schedule | May pull in additional stories |
| Flat line | No progress | Immediate team discussion needed |
| Upward spike | Scope added | Review with PO, renegotiate commitment |

#### Daily Standup Usage

1. **Day 1-3:** Early sprint, expect some variance
2. **Day 4-7:** Should track close to ideal line
3. **Day 8-10:** Critical period for closing gaps
4. **Final Day:** Should reach or be very close to 0

#### Best Practices

- Review burndown daily in standups
- Update remaining hours/points daily
- Flag deviations > 20% from ideal
- Use to facilitate team discussions, not blame

---

### 3. Sprint Goal Status

**Purpose:** High-level view of current sprint health and goal achievement likelihood.

#### Display Elements

- **Sprint Name:** Current sprint identifier
- **Date Range:** Sprint start and end dates
- **Progress Bar:** Visual completion percentage
- **Days Remaining:** Countdown to sprint end
- **Status Badge:** Overall health indicator

#### Status Definitions

| Status | Criteria | Color |
|--------|----------|-------|
| On Track | Progress >= Expected | Green |
| At Risk | Progress 10-20% behind | Yellow |
| Off Track | Progress > 20% behind | Red |

#### Calculation

```
Expected Progress = (Days Elapsed / Total Days) × 100
Actual Progress = (Completed Points / Committed Points) × 100
```

#### Response Guidelines

**On Track:**
- Continue current pace
- Monitor for emerging risks
- Prepare for next sprint planning

**At Risk:**
- Daily check-ins with team
- Identify and remove blockers
- Consider scope negotiation
- Update stakeholders

**Off Track:**
- Emergency team meeting
- Stakeholder notification
- Scope reduction discussion
- Root cause analysis

---

## Integration with JIRA

### Required Permissions

- Browse Projects
- View Agile Boards
- Read Sprint Information
- View Issues

### Data Refresh

- Automatic refresh every 5 minutes
- Manual refresh button available
- Real-time updates via webhooks (if configured)

### Troubleshooting

**"No Sprint Data" Error:**
1. Verify board ID is correct
2. Check if sprints exist in JIRA
3. Ensure API token has not expired
4. Confirm project key matches

**Velocity Shows Zero:**
1. Check if stories have story points
2. Verify sprint is marked complete
3. Ensure "Done" status mapping is correct
4. Check date range filters

---

## Metrics Glossary

| Term | Definition |
|------|------------|
| Velocity | Sum of story points completed in a sprint |
| Capacity | Available team hours/points for a sprint |
| Committed | Story points planned at sprint start |
| Completed | Story points marked done by sprint end |
| Burndown | Rate at which work is being completed |
| Scope Creep | Unplanned work added during sprint |

---

## Related Guides

- [Backlog Health Guide](./BACKLOG_HEALTH_GUIDE.md)
- [Quality Metrics Guide](./QUALITY_METRICS_GUIDE.md)
- [Team Health Guide](./TEAM_HEALTH_GUIDE.md)
