# Backlog Health - User Guide

## Overview

The Backlog Health section helps Product Owners maintain a well-groomed, prioritized backlog that enables efficient sprint planning and execution. These metrics ensure your backlog follows agile best practices.

---

## Components

### 1. Backlog Health Card

**Purpose:** Overall assessment of backlog quality using industry-standard metrics.

#### Health Score Calculation

The overall score (0-100) is calculated from three sub-metrics:

```
Health Score = (INVEST Score × 0.4) + (DEEP Score × 0.4) + (Refinement % × 0.2)
```

#### Score Interpretation

| Score | Rating | Color | Action |
|-------|--------|-------|--------|
| 90-100 | Excellent | 🟢 | Maintain current practices |
| 70-89 | Good | 🟢 | Minor improvements possible |
| 50-69 | Fair | 🟡 | Schedule refinement sessions |
| < 50 | Poor | 🔴 | Immediate attention required |

#### INVEST Score (40%)

Measures story quality against INVEST principles:

| Principle | Description | Weight |
|-----------|-------------|--------|
| **I**ndependent | Can be developed separately | 16% |
| **N**egotiable | Details can be discussed | 16% |
| **V**aluable | Delivers user value | 16% |
| **E**stimable | Team can estimate size | 16% |
| **S**mall | Fits in sprint | 16% |
| **T**estable | Has acceptance criteria | 20% |

#### DEEP Score (40%)

Measures backlog structure against DEEP principles:

| Principle | Description | Weight |
|-----------|-------------|--------|
| **D**etailed Appropriately | Right level of detail | 25% |
| **E**stimated | Has story points | 25% |
| **E**mergent | Evolves with learning | 25% |
| **P**rioritized | Ordered by value | 25% |

#### Refinement Percentage (20%)

Percentage of stories meeting Definition of Ready:

```
Refinement % = (Ready Stories / Total Stories) × 100
```

**Target:** > 60% of backlog should be refined

---

### 2. Backlog Aging Chart

**Purpose:** Identify stale stories that may need attention or removal.

#### Age Categories

| Category | Age | Color | Action |
|----------|-----|-------|--------|
| Fresh | < 30 days | 🟢 | Normal |
| Aging | 30-60 days | 🟡 | Review priority |
| Stale | 60-90 days | 🟠 | Re-evaluate value |
| Zombie | > 90 days | 🔴 | Close or rewrite |

#### Why Stories Age

Common reasons:
- **Low Priority:** Always deprioritized for higher value items
- **Dependencies:** Blocked by other work
- **Unclear Value:** Stakeholders can't articulate benefit
- **Too Large:** Needs decomposition
- **Resource Constraints:** Requires unavailable expertise

#### Actions by Category

**Aging (30-60 days):**
- Review with stakeholders
- Confirm priority is correct
- Check for blockers
- Consider splitting

**Stale (60-90 days):**
- Re-evaluate business value
- Check if still relevant
- Consider closing as "Won't Do"
- Rewrite if still needed

**Zombie (> 90 days):**
- Close with appropriate resolution
- Document why it wasn't done
- Create new story if still needed
- Review intake process

#### Best Practices

1. **Regular Review:**
   - Review aging report weekly
   - Include in backlog refinement
   - Set calendar reminders

2. **Prevention:**
   - Better initial prioritization
   - Smaller, more focused stories
   - Regular stakeholder engagement
   - Clear definition of value

3. **Metrics:**
   - Track average story age
   - Monitor zombie story rate
   - Measure closure rate

---

### 3. Story Readiness Chart

**Purpose:** Visualize how many stories are ready for sprint planning.

#### Definition of Ready (DoR)

Stories must meet these criteria:

| Criterion | Description |
|-----------|-------------|
| Clear Title | Describes what, not how |
| User Story Format | "As a... I want... So that..." |
| Acceptance Criteria | Specific, testable conditions |
| Story Points | Estimated by team |
| No Blockers | Dependencies resolved |
| Small Enough | Fits in single sprint |
| Value Defined | Business value articulated |

#### Chart Elements

- **Ready:** Stories meeting all DoR criteria
- **In Progress:** Stories being refined
- **Blocked:** Stories with unresolved dependencies
- **Not Started:** Stories needing refinement

#### Readiness Targets

| Metric | Target | Minimum |
|--------|--------|---------|
| Ready Stories | 2+ sprints worth | 1.5 sprints |
| Ready % | > 60% | > 40% |
| Blocked Stories | < 10% | < 20% |

#### Improving Readiness

**Weekly Refinement Sessions:**
- 1-2 hours per week
- Whole team participation
- Focus on top of backlog
- Time-box discussion

**Refinement Checklist:**
- [ ] Story is user-centric
- [ ] Acceptance criteria are clear
- [ ] Edge cases considered
- [ ] Technical approach discussed
- [ ] Story points assigned
- [ ] Dependencies identified

**Common Blockers:**
- Missing requirements
- Unresolved dependencies
- Technical uncertainty
- Stakeholder unavailability
- Resource constraints

---

## Backlog Health Best Practices

### 1. Regular Refinement

**Schedule:**
- Weekly 1-2 hour sessions
- Same day/time each week
- Protected calendar time

**Participants:**
- Product Owner (required)
- Development team
- Technical leads
- Subject matter experts (as needed)

**Agenda:**
1. Review aging stories (10 min)
2. Discuss new stories (20 min)
3. Estimate ready stories (20 min)
4. Prioritize backlog (20 min)
5. Identify blockers (10 min)

### 2. Story Splitting

**When to Split:**
- Story > 13 points
- Multiple acceptance criteria
- Crosses component boundaries
- Can deliver partial value

**Splitting Patterns:**
- **Workflow Steps:** Split by process steps
- **Business Rules:** Split by rule variations
- **Data Variations:** Split by data types
- **CRUD Operations:** Split by operation type
- **Happy/Unhappy Path:** Split by scenario

### 3. Prioritization Frameworks

**WSJF (Weighted Shortest Job First):**
```
WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size
```

**MoSCoW:**
- **Must Have:** Critical for release
- **Should Have:** Important but not critical
- **Could Have:** Nice to have
- **Won't Have:** Out of scope

**Value vs. Effort:**
- High Value, Low Effort: Do first
- High Value, High Effort: Plan carefully
- Low Value, Low Effort: Fill gaps
- Low Value, High Effort: Avoid

---

## Troubleshooting

### Low Health Score

**Symptoms:**
- Score < 50
- Many unrefined stories
- High zombie count

**Solutions:**
1. Increase refinement frequency
2. Improve story writing training
3. Set DoR checklist
4. Review intake process

### Too Many Blocked Stories

**Symptoms:**
- Blocked % > 20%
- Sprint planning delays
- Dependency confusion

**Solutions:**
1. Map dependencies earlier
2. Create dependency board
3. Coordinate with other teams
4. Architect to reduce coupling

### Aging Stories Accumulating

**Symptoms:**
- Many stories > 60 days
- Backlog growing without delivery
- Priority confusion

**Solutions:**
1. Implement WIP limits
2. Regular backlog pruning
3. Stakeholder priority sessions
4. Say "no" or "later" more often

---

## Metrics to Track

| Metric | Target | Frequency |
|--------|--------|-----------|
| Health Score | > 70 | Weekly |
| Average Story Age | < 45 days | Weekly |
| Ready Story % | > 60% | Per sprint |
| Zombie Stories | < 5% | Monthly |
| Refinement Hours | 4-8/week | Weekly |

---

## Related Guides

- [Delivery Metrics Guide](./DELIVERY_METRICS_GUIDE.md)
- [Governance Dashboard Overview](./GOVERNANCE_DASHBOARD_GUIDE.md)
- [Sprint Planning Guide](./SPRINT_PLANNING_GUIDE.md)
