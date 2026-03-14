# Customer Metrics - User Guide

## Overview

The Customer Metrics section provides insights into customer satisfaction, loyalty, and support experience. These metrics help Product Owners understand how well the product meets user needs and identify areas for improvement.

---

## Components

### 1. NPS/CSAT Trend Chart

**Purpose:** Track customer satisfaction and loyalty over time to measure product success.

#### Net Promoter Score (NPS)

**What is NPS?**
NPS measures customer loyalty based on one question:
> "How likely are you to recommend our product to a friend or colleague?"

**Scale:** 0-10

| Category | Score | Description |
|----------|-------|-------------|
| Promoters | 9-10 | Loyal enthusiasts |
| Passives | 7-8 | Satisfied but unenthusiastic |
| Detractors | 0-6 | Unhappy customers |

**Calculation:**
```
NPS = % Promoters - % Detractors
```

**Score Range:** -100 to +100

#### NPS Benchmarks

| Score | Rating | Interpretation |
|-------|--------|----------------|
| > 70 | Excellent | World-class loyalty |
| 50-70 | Great | Strong customer base |
| 30-50 | Good | Solid foundation |
| 0-30 | Fair | Room for improvement |
| < 0 | Poor | Significant issues |

#### Customer Satisfaction (CSAT)

**What is CSAT?**
CSAT measures satisfaction with specific interactions or features.

**Typical Question:**
> "How satisfied were you with [experience]?"

**Scale:** 1-5 or 1-10

**Calculation:**
```
CSAT = (Number of Satisfied Customers / Total Responses) × 100
```

**Satisfied = Top 2 box (4-5 on 5-point scale)**

#### CSAT Benchmarks

| Score | Rating | Action |
|-------|--------|--------|
| > 85% | Excellent | Maintain |
| 70-85% | Good | Monitor |
| 50-70% | Fair | Investigate |
| < 50% | Poor | Immediate action |

#### Chart Elements

- **Dual Axis:** NPS (left), CSAT % (right)
- **Trend Lines:** 3-month moving average
- **Annotations:** Release dates, major events
- **Response Rate:** Sample size indicator

#### Using the Data

**Correlate with Releases:**
- Did NPS change after major release?
- Which features improved satisfaction?
- Any regressions?

**Segment Analysis:**
- By customer tier (Enterprise, SMB)
- By user role (Admin, End User)
- By feature usage

**Trend Analysis:**
- Seasonal patterns
- Long-term trajectory
- Impact of initiatives

---

### 2. Support Ticket Volume

**Purpose:** Monitor customer issues and support team workload.

#### Ticket Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Open Tickets | Currently unresolved | < 50 per agent |
| New Tickets | Created today/this week | Stable or declining |
| Resolved Tickets | Closed in period | > New tickets |
| Backlog | Tickets > SLA | < 10% of total |

#### Priority Distribution

| Priority | Response Time | Resolution Time | Color |
|----------|---------------|-----------------|-------|
| P0 - Critical | 1 hour | 4 hours | 🔴 |
| P1 - High | 4 hours | 24 hours | 🟠 |
| P2 - Medium | 24 hours | 72 hours | 🟡 |
| P3 - Low | 72 hours | 1 week | 🔵 |

#### Chart Elements

- **Stacked Bars:** Tickets by priority
- **Line:** Average resolution time
- **Gauge:** SLA compliance %
- **Trend:** Week-over-week change

#### Key Indicators

**Healthy Support:**
- Resolution time decreasing
- First-contact resolution > 70%
- Customer satisfaction > 80%
- Escalation rate < 10%

**Warning Signs:**
- Spike in P0/P1 tickets
- Resolution time increasing
- Backlog growing
- CSAT declining

#### Actions Based on Data

**High Volume:**
- Review for patterns
- Check recent releases
- Consider proactive communication
- Add self-service resources

**Long Resolution Times:**
- Review ticket complexity
- Assess team capacity
- Check for knowledge gaps
- Improve documentation

**Escalation Spikes:**
- Analyze escalation reasons
- Train frontline support
- Improve triage process
- Create escalation playbooks

---

## Data Collection Methods

### NPS Surveys

**Timing:**
- Quarterly for overall NPS
- After key milestones
- Post-onboarding (30 days)
- Post-support interaction

**Channels:**
- In-app surveys
- Email campaigns
- Phone interviews
- SMS

**Best Practices:**
- Keep it short (1-2 questions)
- Follow up with detractors
- Share results with team
- Close the loop

### CSAT Collection

**Touchpoints:**
- After support ticket resolution
- Post-feature usage
- After onboarding
- Periodic check-ins

**Questions:**
1. Overall satisfaction (1-5)
2. Ease of use (1-5)
3. Value delivered (1-5)
4. Open feedback (text)

### Support Ticket Analysis

**Categorization:**
- Bug reports
- Feature requests
- How-to questions
- Account issues
- Performance problems

**Tagging:**
- Product area
- Customer tier
- Root cause
- Resolution type

---

## Improving Customer Metrics

### NPS Improvement Strategies

**For Detractors (0-6):**
1. Reach out within 24 hours
2. Understand their pain points
3. Address immediate issues
4. Follow up on resolutions

**For Passives (7-8):**
1. Identify what would make them promoters
2. Share new features
3. Provide additional value
4. Build relationship

**For Promoters (9-10):**
1. Thank them
2. Ask for reviews/referrals
3. Invite to advocacy programs
4. Keep them engaged

### Reducing Support Tickets

**Proactive Measures:**
- Improve UX based on common issues
- Enhance error messages
- Create better documentation
- Implement in-app guidance

**Self-Service:**
- Knowledge base articles
- Video tutorials
- FAQ sections
- Community forums

**Product Improvements:**
- Fix top 10 issues
- Address root causes
- Simplify complex flows
- Add validation/prevention

---

## Integration with Support Tools

### Supported Platforms

- Zendesk
- Intercom
- Freshdesk
- Salesforce Service Cloud
- JIRA Service Management

### Required Data

- Ticket volume by priority
- Resolution times
- Customer satisfaction scores
- Ticket categories
- Response times

---

## Troubleshooting

### Low Response Rates

**Symptoms:**
- < 10% survey response
- Small sample sizes
- Biased results

**Solutions:**
1. Shorten surveys
2. Improve timing
3. Offer incentives
4. Use multiple channels
5. Follow up non-responders

### Declining Scores

**Symptoms:**
- NPS dropping month-over-month
- CSAT below target
- Negative feedback increasing

**Solutions:**
1. Analyze qualitative feedback
2. Correlate with product changes
3. Interview unhappy customers
4. Prioritize fixes
5. Communicate improvements

### Data Inconsistency

**Symptoms:**
- Scores vary wildly
- Different sources show different results
- Trends don't match reality

**Solutions:**
1. Standardize survey methodology
2. Check data integration
3. Verify calculation logic
4. Audit data sources

---

## Related Guides

- [Governance Dashboard Overview](./GOVERNANCE_DASHBOARD_GUIDE.md)
- [Financial Metrics Guide](./FINANCIAL_METRICS_GUIDE.md)
- [Product Analytics Guide](./PRODUCT_ANALYTICS_GUIDE.md)
