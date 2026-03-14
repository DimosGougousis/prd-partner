# Financial Metrics - User Guide

## Overview

The Financial Metrics section provides Product Owners with visibility into budget consumption, cost efficiency, and financial planning. These metrics help ensure projects stay within budget while delivering value.

---

## Components

### 1. Budget Burn Chart

**Purpose:** Track actual spending against planned budget to identify financial risks early.

#### Chart Elements

- **Planned Line:** Budget consumption based on project plan
- **Actual Line:** Real spending to date
- **Forecast Line:** Projected spend to completion
- **Variance Bands:** Acceptable deviation ranges

#### Budget Status

| Status | Condition | Color | Action |
|--------|-----------|-------|--------|
| Under Budget | Actual < Planned | 🟢 | Consider reallocating |
| On Track | Within 5% variance | 🟢 | Continue monitoring |
| At Risk | 5-15% over | 🟡 | Review with finance |
| Over Budget | > 15% over | 🔴 | Immediate escalation |

#### Key Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Burn Rate | Actual Spend / Time Elapsed | Match plan |
| Variance % | (Actual - Planned) / Planned | < 5% |
| Forecast EAC | Actual + (Remaining × Burn Rate) | < Budget |
| CPI | Earned Value / Actual Cost | > 0.95 |

#### Calculation Example

```
Budget: $100,000
Timeline: 6 months
Current: Month 3

Planned Spend: $50,000 (50%)
Actual Spend: $55,000 (55%)
Variance: +$5,000 (+10%)
Status: At Risk 🟡

Forecast EAC = $55,000 + ($45,000 × 1.1) = $104,500
Overrun = $4,500 (4.5%)
```

#### Actions Based on Status

**Under Budget:**
- Verify scope is complete
- Check for delayed invoices
- Consider scope additions
- Allocate to contingency

**On Track:**
- Continue current pace
- Monitor for trends
- Update forecast monthly
- Document assumptions

**At Risk:**
- Identify cost drivers
- Review scope for cuts
- Negotiate with vendors
- Increase monitoring frequency

**Over Budget:**
- Emergency stakeholder meeting
- Formal change request
- Scope reduction analysis
- Recovery plan development

---

### 2. Cost Per Story Point

**Purpose:** Measure development efficiency and cost-effectiveness of delivery.

#### Calculation

```
Cost Per Point = Total Sprint Cost / Velocity

Where:
- Total Sprint Cost = Team cost + Tools + Infrastructure
- Velocity = Story points completed
```

#### Cost Components

**Team Costs:**
- Salaries (prorated for sprint)
- Benefits
- Contractor fees
- Training

**Tools & Infrastructure:**
- Software licenses
- Cloud services
- Development tools
- Testing environments

**Overhead:**
- Office space
- Equipment
- Support services

#### Benchmarks

| Cost Per Point | Interpretation | Action |
|----------------|----------------|--------|
| Decreasing | Improving efficiency | Document practices |
| Stable | Consistent performance | Maintain |
| Increasing | Efficiency declining | Investigate |

#### Factors Affecting Cost

**Increases Cost:**
- Complex technical debt
- New team members (ramp-up)
- Complex integrations
- Regulatory requirements
- High seniority team

**Decreases Cost:**
- Process improvements
- Automation
- Team experience
- Better tooling
- Code reuse

#### Using the Metric

**Sprint Planning:**
- Factor into capacity planning
- Compare team costs
- Estimate feature costs
- Prioritize by value/cost

**Team Comparison:**
- Normalize for location/currency
- Account for experience levels
- Consider domain complexity
- Look at trends, not absolutes

**ROI Analysis:**
```
Feature Cost = Story Points × Cost Per Point
Feature Value = Expected Revenue/Savings
ROI = (Value - Cost) / Cost × 100
```

---

## Financial Planning

### Budget Categories

| Category | Typical % | Description |
|----------|-----------|-------------|
| Personnel | 60-70% | Salaries, benefits, contractors |
| Tools & Licenses | 10-15% | Software, subscriptions |
| Infrastructure | 10-15% | Cloud, hosting, services |
| Training | 5-10% | Conferences, courses |
| Contingency | 10-15% | Buffer for unknowns |

### Budget Tracking Best Practices

1. **Weekly Reviews:**
   - Review actual vs planned
   - Identify variances
   - Update forecasts
   - Document decisions

2. **Monthly Reporting:**
   - Formal budget report
   - Variance analysis
   - Forecast updates
   - Stakeholder communication

3. **Quarterly Planning:**
   - Rebaseline if needed
   - Adjust for changes
   - Update annual forecast
   - Strategic alignment check

### Cost Optimization Strategies

**Reduce Waste:**
- Eliminate unused licenses
- Right-size infrastructure
- Automate manual processes
- Reduce meeting overhead

**Improve Efficiency:**
- Invest in tooling
- Reduce technical debt
- Improve code quality
- Cross-train team members

**Smart Spending:**
- Negotiate vendor contracts
- Use open source alternatives
- Leverage volume discounts
- Plan purchases strategically

---

## Integration with Financial Systems

### Supported Platforms

- QuickBooks
- SAP
- Oracle Financials
- NetSuite
- Custom ERP systems

### Data Requirements

- Actual spend by category
- Budget allocations
- Forecast data
- Invoice tracking
- Time tracking data

### API Integration

```bash
# Example configuration
VITE_FINANCE_API_URL=https://finance.company.com/api
VITE_FINANCE_API_KEY=your_key
VITE_BUDGET_ID=project_budget_2026
```

---

## Financial Governance

### Approval Thresholds

| Amount | Approval Required | Timeline |
|--------|-------------------|----------|
| < $1,000 | Team Lead | Immediate |
| $1,000 - $10,000 | Product Owner | 24 hours |
| $10,000 - $50,000 | Department Head | 1 week |
| > $50,000 | Executive | 2 weeks |

### Reporting Cadence

| Report | Frequency | Audience |
|--------|-----------|----------|
| Budget Status | Weekly | Team |
| Variance Report | Monthly | Management |
| Forecast Update | Monthly | Stakeholders |
| Annual Review | Quarterly | Executives |

### Risk Management

**Financial Risks:**
- Budget overrun
- Currency fluctuation
- Vendor price increases
- Scope creep
- Resource changes

**Mitigation Strategies:**
- Contingency reserves
- Fixed-price contracts
- Regular monitoring
- Change control process
- Resource buffers

---

## Troubleshooting

### Budget Data Not Updating

**Symptoms:**
- Stale financial data
- Missing recent transactions
- Incorrect totals

**Solutions:**
1. Check API connections
2. Verify data sync schedule
3. Confirm account mappings
4. Review access permissions

### Cost Per Point Seems Wrong

**Symptoms:**
- Unusually high/low values
- Wild fluctuations
- Negative numbers

**Solutions:**
1. Verify velocity calculation
2. Check cost allocation
3. Confirm time period alignment
4. Review team composition

### Forecast Accuracy Poor

**Symptoms:**
- Forecasts consistently wrong
- Large variances
- Unrealistic projections

**Solutions:**
1. Review estimation accuracy
2. Check assumption validity
3. Update forecasting model
4. Increase buffer amounts

---

## Related Guides

- [Governance Dashboard Overview](./GOVERNANCE_DASHBOARD_GUIDE.md)
- [Customer Metrics Guide](./CUSTOMER_METRICS_GUIDE.md)
- [Delivery Metrics Guide](./DELIVERY_METRICS_GUIDE.md)
