# AI Agent Procurement Guide for Government Agencies

> **Comprehensive guidance for government procurement officers navigating the acquisition of AI tools and services.**

---

## Table of Contents

1. [Overview](#overview)
2. [Procurement Paths](#procurement-paths)
3. [Requirements Development](#requirements-development)
4. [RFP Development](#rfp-development)
5. [Vendor Evaluation](#vendor-evaluation)
6. [Contract Negotiation](#contract-negotiation)
7. [Implementation & Transition](#implementation--transition)
8. [Common Pitfalls](#common-pitfalls)
9. [Resources & Templates](#resources--templates)

---

## Overview

### The AI Procurement Landscape

Procuring AI tools presents unique challenges compared to traditional software:

**Key Differences**:
- **Rapid evolution**: AI capabilities advance monthly, not yearly
- **Subscription models**: Most AI tools are SaaS, not perpetual licenses
- **Usage-based pricing**: Costs vary with volume, unlike fixed-seat licensing
- **Compliance complexity**: Government compliance certifications still emerging
- **Limited track record**: Many vendors are startups with <5 years history
- **Pilot-friendly**: Low-cost pilots possible before full commitment

**Good News for Procurement**:
- ✅ **Low entry costs**: $20-50/user/month for most tools
- ✅ **Month-to-month terms**: Easy to start small and scale
- ✅ **Existing contracts**: Many tools available on GSA Schedule
- ✅ **Fast deployment**: Days/weeks vs. months/years for traditional IT
- ✅ **High ROI**: 300-600% returns typical, strong business case

### Who Should Use This Guide

**Primary Audience**:
- Procurement officers and contracting specialists
- Grants and budget analysts
- Program managers leading AI initiatives
- IT directors and CIOs
- Legal counsel reviewing AI contracts

**How to Use**:
- **New to AI procurement**: Read sequentially, sections 1-8
- **Experienced buyer**: Jump to [RFP Templates](#rfp-templates) or [Evaluation Criteria](#evaluation-criteria)
- **Stuck on specific issue**: See [Common Pitfalls](#common-pitfalls) and [FAQ](./FAQ.md)

---

## Procurement Paths

Choose the right procurement path based on dollar value, urgency, and complexity.

### Path 1: Existing Contracts (Fastest)

**Best for**: Standard tools, under $250K, need speed

**Timeline**: 2-4 weeks from decision to deployment

**Vehicles**:

#### GSA Multiple Award Schedule (MAS)
- **What**: Pre-negotiated contracts with thousands of vendors
- **Search**: [GSA Advantage](https://www.gsaadvantage.gov/)
- **AI tools available**: 100+ (ChatGPT Enterprise, Microsoft, Google, specialized AI vendors)
- **Pricing**: Already negotiated, typically 5-20% below commercial
- **Process**:
  1. Search GSA Advantage for AI/ML/SaaS categories
  2. Compare 2-3 vendors
  3. Place order (credit card or purchase order)
  4. Deployment within days

**Advantages**:
- ✅ Fast (no competition required)
- ✅ Compliant pricing
- ✅ Simplified paperwork
- ✅ Pre-vetted vendors

**Limitations**:
- ⚠️ Not all AI tools available (emerging vendors may not have GSA contracts)
- ⚠️ Less negotiation flexibility
- ⚠️ Must accept standard terms (limited customization)

#### State Master Agreements
- Many states have master agreements for cloud/SaaS
- Check your state's procurement portal
- Process similar to GSA Schedule

#### Cooperative Purchasing
- Piggyback on contracts from:
  - Other agencies (with permission)
  - NASPO ValuePoint (state cooperative)
  - National IPA, Sourcewell (local government cooperatives)
- Verify your jurisdiction allows cooperative purchasing

**Example**: Utah DOH uses cooperative contract for O365/Microsoft Copilot, extends to AI tools within same vendor ecosystem.

---

### Path 2: Credit Card / Micro-Purchase (Fastest)

**Best for**: Small pilots, individual subscriptions, under micro-purchase threshold

**Timeline**: 1-3 days from approval to deployment

**Thresholds**:
- **Federal**: $10,000 (as of 2024, check current limit)
- **State/Local**: Varies ($2,500-$10,000 typically)

**Process**:
1. Verify purchase under micro-purchase threshold
2. Get supervisor approval (per your agency policy)
3. Use government purchase card
4. Document business purpose
5. Track subscription in asset management

**What This Works For**:
- Individual subscriptions: ChatGPT Pro ($240/year), Claude Pro ($240/year)
- Small team pilots: 5 users × $40/month × 3 months = $600
- Meeting transcription: Otter.ai Business 10 users × $120/year = $1,200
- Workflow automation: Zapier Team $300/year

**Best Practices**:
- Get quotes from 2-3 vendors (not required but good practice)
- Document selection rationale
- Track recurring charges (set calendar reminders)
- Cancel promptly if pilot unsuccessful
- Save receipts and documentation for audit

**Common Pitfall**: Auto-renewal charges exceed micro-purchase threshold in year 2. Solution: Cancel before renewal, re-procure properly if continuing.

---

### Path 3: Simplified Acquisition Procedures (SAP)

**Best for**: Department implementations, $10K-$250K, moderate urgency

**Timeline**: 6-12 weeks from requirements to award

**Process**:
1. **Market research** (1-2 weeks): Identify 3-5 potential vendors
2. **Requirements development** (1-2 weeks): Define what you need (see [Requirements section](#requirements-development))
3. **Solicitation** (2-3 weeks):
   - Post RFQ (Request for Quotation) to SAM.gov
   - Or, get quotes directly from known vendors (if allowed by your agency)
   - Request written quotes responding to requirements
4. **Evaluation** (1-2 weeks): Score quotes against criteria
5. **Award** (1 week): Select vendor, issue purchase order or simple contract
6. **Deployment** (1-2 weeks): Onboard and train users

**SAP-Friendly Features of AI Tools**:
- Simple pricing (per-user/month)
- Short contracts (1-year initial, month-to-month after)
- Limited customization needed (configure, don't customize)
- SaaS delivery (no hardware, installation, or maintenance)

**Evaluation Criteria Example**:
```
Technical Capability:     40 points
Security & Compliance:    30 points
Price:                   20 points
Vendor Qualifications:    10 points
Total:                   100 points
```

**Evaluation Shortcuts**:
- Use [Agent Shift Catalog](../README.md) pre-research on capabilities and compliance
- Check [Evaluation Framework](./methodology/AI_EVALUATION_FRAMEWORK.md) for assessment criteria
- Leverage [Compliance Guide](./COMPLIANCE.md) for certification verification

---

### Path 4: Formal Competition (Traditional)

**Best for**: Enterprise deployments, over $250K, complex requirements

**Timeline**: 4-9 months from planning to award

**When Required**:
- Purchase exceeds simplified acquisition threshold
- Multi-year commitment over threshold
- Agency policy requires formal RFP
- Significant customization or integration needed

**Process**:
1. **Planning** (4-8 weeks): Requirements, budget, acquisition strategy
2. **RFP Development** (3-6 weeks): Draft solicitation (see [RFP section](#rfp-development))
3. **Solicitation** (4-8 weeks): Posting, Q&A, amendments
4. **Proposal Evaluation** (4-8 weeks): Technical and cost evaluation
5. **Award** (2-4 weeks): Selection, debriefs, protests, award
6. **Transition** (4-12 weeks): Implementation and onboarding

**Complexity Factors**:
- Large user population (100+ seats)
- Integration with existing systems (ERP, CRM, etc.)
- Custom development or configuration
- Multi-vendor solution (best-of-breed vs. single vendor)
- Long-term commitment (3-5 years)

**Risk Mitigation**:
- **Pilot first**: Even if formal RFP required, pilot with 2-3 tools using micro-purchase to inform requirements
- **Modular approach**: Separate base contract (proven tools) from optional features
- **Performance metrics**: Build in KPIs and off-ramps if vendor underperforms
- **Phased implementation**: Award multi-phase contract, evaluate between phases

---

### Path 5: Blanket Purchase Agreements (BPAs) & IDIQs

**Best for**: Ongoing AI tool needs, multiple purchases over time, volume discounts

**Timeline**: 3-6 months to establish, then rapid task orders

**How BPAs Work**:
1. **Establish BPA** (one-time):
   - Compete among 3-5 AI tool vendors
   - Set price list, terms, SOW templates
   - Award to 1-3 vendors (multiple awards)
2. **Issue task orders** (ongoing):
   - Define specific need (e.g., 50 ChatGPT Enterprise seats)
   - Request quotes from BPA holders
   - Award to best value (simplified process)
   - Deploy quickly

**Advantages**:
- ✅ Fast deployment of new tools (task order in 2-4 weeks)
- ✅ Volume discounts across agency
- ✅ Consistent terms and compliance
- ✅ Flexibility to try multiple tools

**Strategic Use**:
- Establish "AI Tools & Services BPA" with 3 categories:
  - **Category 1**: General productivity (ChatGPT, Claude, Microsoft Copilot)
  - **Category 2**: Specialized tools (legal AI, medical AI, coding)
  - **Category 3**: Professional services (training, integration, consulting)

**Example**: Washington State establishes AI BPA with Microsoft, OpenAI, Google, Anthropic. Issues task orders for specific departments, achieves 15% volume discount.

---

## Requirements Development

### Data Classification Worksheet

**Critical first step**: Understand what data will be used with AI tools.

| Question | Answer | Implication |
|----------|--------|-------------|
| Will tool process PII? | Yes/No | If Yes: HIPAA/privacy compliance required |
| Will tool process PHI? | Yes/No | If Yes: HIPAA BAA required |
| Will tool process CUI? | Yes/No | If Yes: FedRAMP Moderate+ required |
| Will tool process CJIS data? | Yes/No | If Yes: CJIS certification required |
| Will tool process financial data? | Yes/No | If Yes: SOC 2 + PCI DSS if payment cards |
| Will data leave US borders? | Yes/No | If Yes: Data residency controls needed |
| Will data be used to train AI? | Accept/Reject | If Reject: Enterprise version required |

**Output**: Compliance requirements for your use case (see [Compliance Guide](./COMPLIANCE.md))

---

### Functional Requirements Template

**1. Use Case Definition**
```
Primary Use Case: [Brief description]
Example: "Automate initial response to citizen inquiries via web chatbot,
          reducing response time from 8 hours to <1 minute for routine questions."

Target Users: [Who will use this?]
Example: "311 call center staff (25 FTEs) and citizens via website (50K monthly visitors)"

Success Metrics: [How will you measure success?]
Example:
- 60% of inquiries handled by AI without human intervention
- <30 second response time for AI-handled inquiries
- 80%+ citizen satisfaction (CSAT)
- 10 staff hours saved per week
```

**2. Capability Requirements**
```
Must Have (Required):
- [ ] Natural language understanding in English
- [ ] Integration with existing website (WordPress)
- [ ] Handle top 20 inquiry types (list attached)
- [ ] Escalate complex inquiries to human agent with context
- [ ] Available 24/7/365 with 99.5% uptime SLA
- [ ] WCAG 2.1 AA accessible

Should Have (Desired):
- [ ] Support for Spanish language
- [ ] Learn from human agent corrections
- [ ] Provide analytics dashboard
- [ ] Mobile-friendly interface

Nice to Have (Optional):
- [ ] Voice interface (speech-to-text)
- [ ] Integration with CRM (future)
- [ ] Proactive chatbot (offer help without prompt)
```

**3. Data Requirements**
```
Data Volume: [Expected usage]
Example: "50,000 inquiries/month, 500 concurrent chats during business hours"

Data Sources: [What data does AI need?]
Example: "Knowledge base (500 articles), past inquiry database (2 years, 120K records)"

Data Outputs: [What does AI produce?]
Example: "Chat transcripts, analytics reports, escalated case summaries"

Data Retention: [How long to keep?]
Example: "Chat logs retained 3 years per public records law"
```

---

### Technical Requirements

**Integration Requirements**:
```
Must Integrate With:
- [ ] Website Platform: [WordPress 6.x]
- [ ] Authentication: [Azure AD / Okta / Other]
- [ ] Notification System: [Email / SMS]
- [ ] Analytics: [Google Analytics / Adobe / Other]

API Requirements:
- [ ] RESTful API for integration
- [ ] Webhooks for real-time events
- [ ] Authentication via OAuth 2.0 or API keys
- [ ] Rate limits acceptable for our volume
```

**Performance Requirements**:
```
Response Time:
- [ ] <2 seconds for 95% of queries
- [ ] <5 seconds for 99% of queries

Availability:
- [ ] 99.5% uptime (minimum)
- [ ] 99.9% uptime (desired)
- [ ] Scheduled maintenance <4 hours/month, during off-peak hours

Scalability:
- [ ] Support 500 concurrent users (current)
- [ ] Scale to 2,000 concurrent users (3-year projection)
```

---

### Security & Compliance Requirements

**Use this checklist** (see [Compliance Guide](./COMPLIANCE.md) for details):

```
Required Certifications:
- [ ] FedRAMP Moderate (federal) or High (DoD, CUI)
- [ ] HIPAA compliance + BAA (if PHI)
- [ ] SOC 2 Type II (minimum for government)
- [ ] CJIS certification (if law enforcement)
- [ ] ISO 27001 (if international data)
- [ ] StateRAMP (if state-specific requirement)

Data Controls:
- [ ] Data encrypted in transit (TLS 1.2+)
- [ ] Data encrypted at rest (AES-256)
- [ ] Data residency in US (or specify region)
- [ ] Data not used for AI model training (enterprise)
- [ ] Data deletion within 30 days of termination
- [ ] Subcontractors disclosed and compliant

Access Controls:
- [ ] Multi-factor authentication (MFA)
- [ ] Role-based access control (RBAC)
- [ ] Single sign-on (SSO) via SAML 2.0
- [ ] Audit logs retained 1 year minimum
- [ ] IP allowlisting (if required)
```

---

### Cost & Budget Requirements

**Total Cost of Ownership (TCO) Calculation**:

```
Year 1 Costs:
- Software licenses:        $XX,XXX  (# users × $/user × 12 months)
- Implementation:           $XX,XXX  (setup, configuration, integration)
- Training:                 $XX,XXX  (staff training, change management)
- IT support:              $XX,XXX  (admin time, ongoing support)
- Contingency (10%):       $XX,XXX
                        -----------
Year 1 Total:             $XXX,XXX

Year 2-3 Costs (Annual):
- Software licenses:        $XX,XXX  (assuming X% growth)
- Maintenance & support:    $XX,XXX  (included or additional?)
- Training (ongoing):       $X,XXX   (new hires, refreshers)
- IT support:              $XX,XXX
                        -----------
Annual Ongoing:           $XXX,XXX

3-Year TCO:               $XXX,XXX
```

**Pricing Model Preferences**:
```
Preferred: [ ] Per-user/month  [ ] Usage-based  [ ] Enterprise flat-fee
Minimum commitment acceptable: [ ] Month-to-month  [ ] 1-year  [ ] 3-year
Payment terms: [ ] Monthly arrears  [ ] Annual prepay  [ ] Quarterly
```

**Budget Availability**:
```
Funding Source: [General fund / Grant / IT budget / Department budget]
Fiscal Year: [FY 2025]
Budget Authority: $XXX,XXX
Obligation deadline: [Date]
Multi-year funding: [ ] Yes  [ ] No  (impacts contract length)
```

---

## RFP Development

### RFP Structure for AI Tools

**Standard Sections**:
1. Introduction & Background
2. Scope of Work
3. Requirements (Functional, Technical, Security)
4. Deliverables & Timeline
5. Proposal Instructions
6. Evaluation Criteria
7. Contract Terms & Conditions
8. Pricing Schedule
9. Attachments (SOW, compliance forms, etc.)

---

### Section 1: Introduction & Background

**Template**:
```
1.0 INTRODUCTION

[Your Agency] is seeking proposals from qualified vendors to provide
[AI tool category] to support [use case/department].

1.1 PURPOSE
This Request for Proposals (RFP) seeks a [SaaS/cloud-based/on-premises]
artificial intelligence solution that will [specific objective].

Example: "...cloud-based conversational AI chatbot that will reduce
citizen inquiry response times, improve service quality, and free
staff for complex casework."

1.2 BACKGROUND
[Your Agency] currently [describe current state and pain points].

Example: "[Department] receives 50,000 citizen inquiries annually via
phone, email, and web forms. Current average response time is 8 hours
for routine inquiries, with 25 FTE staff handling inquiries. Analysis
shows 60% of inquiries are routine and could be automated."

1.3 OBJECTIVES
Through this procurement, [Agency] seeks to:
- [Objective 1]: Reduce response time to <1 minute for routine inquiries
- [Objective 2]: Maintain or improve citizen satisfaction (currently 75% CSAT)
- [Objective 3]: Redeploy 10 FTE hours/week to complex casework
- [Objective 4]: Provide 24/7 citizen service availability

1.4 SCOPE SUMMARY
Anticipated contract value: $XX,XXX - $XXX,XXX (3-year term)
Number of users: XX-XX (growing to XX by Year 3)
Implementation timeline: XX months from contract award
Contract term: [3 years base + 2 one-year options]
```

---

### Section 2: Scope of Work

**Template**:
```
2.0 SCOPE OF WORK

The Contractor shall provide a comprehensive AI [chatbot/writing assistant/
analysis tool/etc.] solution including:

2.1 SOFTWARE PLATFORM
- Cloud-hosted SaaS application accessible via web browser
- [Specify any on-premises or government cloud requirements]
- Support for [X] concurrent users
- [Specify integration requirements, if any]

2.2 IMPLEMENTATION SERVICES
- Project management and planning
- System configuration and setup
- Integration with [list systems: website, CRM, etc.]
- Data migration (if applicable)
- User acceptance testing support
- Go-live support

2.3 TRAINING
- Train-the-trainer sessions (X hours for Y staff)
- End-user training (webinars, documentation, videos)
- Administrator training (system management)
- Ongoing training for new hires (materials provided)

2.4 SUPPORT & MAINTENANCE
- Technical support [specify hours: 24/7, business hours]
- [Email/phone/chat] support channels
- [Response times: <X hours for critical, <Y hours for standard]
- Software updates and upgrades included
- Quarterly business reviews (QBRs)

2.5 DELIVERABLES
- Implemented and configured system (Month 2)
- Training completion for all initial users (Month 3)
- Go-live and transition to production (Month 3)
- Quarterly usage and performance reports
- Annual customer satisfaction survey

2.6 PERFORMANCE STANDARDS
Contractor shall meet or exceed:
- [99.5%] system uptime (excluding scheduled maintenance)
- [<2 second] response time for [95%] of queries
- [<4 hours] support response time for critical issues
- [<1 business day] support response for standard issues
- [80%+] user satisfaction score (quarterly survey)
```

---

### Section 3: Requirements (Detailed)

**Refer to [Requirements Development](#requirements-development) section above.**

Structure as:
- 3.1 Functional Requirements (must-have, should-have, nice-to-have)
- 3.2 Technical Requirements (integration, performance, scalability)
- 3.3 Security & Compliance Requirements (certifications, controls)
- 3.4 Usability & Accessibility Requirements (WCAG 2.1 AA, mobile)

**Pro Tip**: Number each requirement (FR-01, TR-12, SC-05) so vendors can reference in proposals and you can score responses.

---

### Section 4: Proposal Instructions

**Template**:
```
4.0 PROPOSAL INSTRUCTIONS

4.1 PROPOSAL SUBMISSION
Proposals must be submitted electronically to [email/portal] by
[DATE] at [TIME] [TIMEZONE].

Proposals must include:
- Cover letter (1 page)
- Executive summary (2 pages max)
- Technical proposal (respond to all requirements in Section 3)
- Implementation plan and timeline
- Experience and qualifications
- Cost proposal (using template in Section 8)
- Required forms (Attachment A, B, C)

4.2 PROPOSAL FORMAT
- PDF format, single file
- Font: Arial 11pt minimum
- Page limits: Technical proposal (20 pages max), Cost proposal (5 pages max)
- Clearly label sections matching RFP structure

4.3 QUESTIONS & CLARIFICATIONS
Questions must be submitted in writing to [email] by [DATE].
Answers will be posted to [procurement portal] by [DATE].
No questions accepted after deadline.

4.4 ORAL PRESENTATIONS (if applicable)
Finalists (top 3 scored proposals) will be invited for oral
presentations and demonstrations on [DATE RANGE].
```

---

### Section 5: Evaluation Criteria

**Recommended Scoring**:

```
5.0 EVALUATION CRITERIA

Proposals will be evaluated using the following criteria:

5.1 TECHNICAL CAPABILITY (40 points)
- Meets functional requirements (20 points)
  * Must-have requirements met (15 points)
  * Should-have and nice-to-have features (5 points)
- Ease of use and user experience (10 points)
- Demonstrated performance at similar scale (10 points)

5.2 SECURITY & COMPLIANCE (30 points)
- Required certifications (FedRAMP, SOC 2, etc.) (15 points)
- Data protection and privacy controls (10 points)
- Security incident history and response (5 points)

5.3 COST (20 points)
- Total 3-year cost (evaluated using formula below) (15 points)
- Value for money (cost vs. capabilities) (5 points)

Cost Scoring Formula:
[Lowest Proposed Cost / Vendor's Proposed Cost] × 15 points

5.4 VENDOR QUALIFICATIONS (10 points)
- Relevant experience with similar agencies (5 points)
- Financial stability (3 points)
- Customer references and satisfaction (2 points)

TOTAL: 100 points

Minimum Qualifying Score: 70 points
Oral presentations may be requested from top 3 scored proposals.
```

**Alternative Scoring Weights**:
- **High-security environments**: Security & Compliance 40%, Technical 35%, Cost 15%, Vendor 10%
- **Fast deployment needs**: Technical 45%, Vendor Experience 25%, Cost 20%, Security 10%
- **Budget-constrained**: Cost 30%, Technical 40%, Security 20%, Vendor 10%

---

### Section 6: Contract Terms

**Key Terms for AI Tool Contracts**:

```
6.0 CONTRACT TERMS & CONDITIONS

6.1 CONTRACT TYPE
[Firm-fixed-price / Time-and-materials / Subscription agreement]

6.2 CONTRACT TERM
- Base period: [3 years] from date of award
- Option periods: [2] one-year options at Agency's sole discretion
- Termination: Either party may terminate with [90] days written notice

6.3 PRICING
- Fixed per-user/month pricing for base period
- Price increase limited to [CPI / 3% / other] annually
- No price increases during base period
- Volume discounts for growth beyond initial commitment

6.4 DATA OWNERSHIP & PORTABILITY
- Agency retains all rights to data input to or generated by system
- Upon termination, Contractor shall provide all Agency data in
  [CSV, JSON, PDF] format within [30] days
- Data deletion from Contractor systems within [30] days of export
- No data retention by Contractor except as required by law

6.5 INTELLECTUAL PROPERTY
- Contractor retains all IP rights to base software platform
- Agency owns all custom configurations, workflows, and content
- Agency granted perpetual license to use deliverables (reports,
  training materials, documentation)

6.6 SERVICE LEVEL AGREEMENT (SLA)
- Uptime: [99.5%] measured monthly, excluding scheduled maintenance
- Performance: [<2 second] response time for [95%] of interactions
- Support: [<4 hour] response for critical, [<24 hour] for standard
- Credits: [X%] of monthly fees as credit for each [Y%] below SLA

6.7 SECURITY & COMPLIANCE
- Contractor shall maintain [FedRAMP Moderate, SOC 2 Type II, ISO 27001]
  certifications throughout contract term
- Contractor shall notify Agency within [24 hours] of any security incident
- Annual security audit at Agency's request
- Subcontractors must meet same security standards

6.8 BUSINESS ASSOCIATE AGREEMENT (if HIPAA applicable)
- Contractor agrees to BAA terms in Attachment [X]
- Contractor shall not use or disclose PHI except as permitted
- Breach notification within [24 hours]

6.9 INDEMNIFICATION
- Contractor shall indemnify Agency against IP infringement claims
- Professional liability insurance: [$X million] per occurrence
- Cyber liability insurance: [$X million] per occurrence

6.10 TERMINATION FOR CONVENIENCE
- Agency may terminate without cause with [90] days notice
- Contractor entitled to payment for services rendered through
  termination date
- No termination penalties or early termination fees

6.11 TERMINATION FOR CAUSE
- Either party may terminate immediately for material breach
- Agency may terminate immediately for security incident
- [30] day cure period for non-security breaches
```

---

### Section 7: Pricing Schedule Template

**Template for Vendors**:

```
7.0 COST PROPOSAL INSTRUCTIONS

7.1 PRICING TABLE

Complete all fields. Pricing must be held firm for base period (3 years).

Line Item | Description | Unit | Qty | Year 1 Unit Price | Year 1 Total | Year 2 Total | Year 3 Total
----------|-------------|------|-----|-------------------|--------------|--------------|-------------
1.0       | Software Subscription
1.1       | User licenses (standard) | User/month | 50 | $ | $ | $ | $
1.2       | User licenses (admin) | User/month | 5 | $ | $ | $ | $
1.3       | API usage (if applicable) | Per 1K calls | 100K | $ | $ | $ | $
2.0       | Implementation Services (One-Time)
2.1       | Project management | Hours | XX | $ | $ | N/A | N/A
2.2       | System configuration | Hours | XX | $ | $ | N/A | N/A
2.3       | Integration (website) | Hours | XX | $ | $ | N/A | N/A
2.4       | Data migration (if applicable) | Fixed | 1 | $ | $ | N/A | N/A
3.0       | Training (One-Time)
3.1       | Train-the-trainer | Hours | XX | $ | $ | N/A | N/A
3.2       | End-user training | Hours | XX | $ | $ | N/A | N/A
3.3       | Training materials | Fixed | 1 | $ | $ | N/A | N/A
4.0       | Support & Maintenance (Annual)
4.1       | Technical support (included) | Annual | 1 | Included | $0 | $0 | $0
4.2       | Premium support (if optional) | Annual | 1 | $ | $ | $ | $
5.0       | Optional Items (priced separately)
5.1       | Spanish language support | User/month | 50 | $ | $ | $ | $
5.2       | Voice interface add-on | User/month | 50 | $ | $ | $ | $
5.3       | Advanced analytics module | Fixed/month | 1 | $ | $ | $ | $

TOTAL 3-YEAR COST: $__________

7.2 VOLUME DISCOUNTS
Provide pricing for growth scenarios:
- 100 users (Year 2): $____/user/month
- 200 users (Year 3): $____/user/month

7.3 PAYMENT TERMS
Specify preferred payment terms:
[ ] Monthly invoicing (arrears)
[ ] Quarterly invoicing (arrears)
[ ] Annual prepayment (with X% discount)

7.4 PRICE ESCALATION
Year 4-5 option period pricing increases limited to:
[ ] Consumer Price Index (CPI)
[ ] Fixed 3% annually
[ ] Other: ___________

7.5 COST BREAKDOWN (Required)
Provide percentage breakdown:
- Software/Platform: ____%
- Implementation: ____%
- Training: ____%
- Support: ____%
- Margin/Profit: ____%
```

---

## Vendor Evaluation

### Evaluation Matrix

**Score each vendor using this matrix**:

| Criteria | Weight | Vendor A Score | Vendor B Score | Vendor C Score |
|----------|--------|----------------|----------------|----------------|
| **Technical Capability** | 40% |
| Meets must-have requirements | 15% | /15 | /15 | /15 |
| Must-have features | 15 pts |
| Should-have features | 5 pts |
| Usability & UX | 10% | /10 | /10 | /10 |
| Performance & scalability | 10% | /10 | /10 | /10 |
| **Security & Compliance** | 30% |
| Required certifications | 15% | /15 | /15 | /15 |
| FedRAMP (req) | 10 pts |
| SOC 2 (req) | 5 pts |
| Data protection controls | 10% | /10 | /10 | /10 |
| Encryption | 5 pts |
| Access controls | 5 pts |
| Security track record | 5% | /5 | /5 | /5 |
| **Cost** | 20% |
| 3-year TCO | 15% | /15 | /15 | /15 |
| Value for money | 5% | /5 | /5 | /5 |
| **Vendor Qualifications** | 10% |
| Relevant experience | 5% | /5 | /5 | /5 |
| Financial stability | 3% | /3 | /3 | /3 |
| References | 2% | /2 | /2 | /2 |
| **TOTAL** | 100% | /100 | /100 | /100 |

**Scoring Guide**:
- **5/5**: Exceeds requirements significantly
- **4/5**: Exceeds requirements moderately
- **3/5**: Meets requirements fully
- **2/5**: Partially meets requirements
- **1/5**: Minimally meets requirements
- **0/5**: Does not meet requirements

**Minimum Score**: 70/100 to be considered for award

---

### Reference Check Questions

**Call 3+ references for top 2-3 vendors**:

**General Questions**:
1. How long have you used this tool? What's your user population?
2. What use cases do you use it for? How well does it perform?
3. On a scale of 1-10, how satisfied are you overall?

**Capabilities & Performance**:
4. Has the tool met your functional requirements? Any gaps?
5. How reliable is it? Any significant outages or performance issues?
6. How accurate are the AI outputs? Any quality concerns?

**Implementation**:
7. How long did implementation take? Smooth or challenging?
8. How responsive was the vendor during implementation?
9. What would you do differently if implementing again?

**Support**:
10. How responsive is vendor support? Examples of good/poor support?
11. How frequent are updates? Do they improve or disrupt?
12. Has the vendor been proactive in addressing issues?

**Security & Compliance**:
13. Have you had any security incidents? How did vendor respond?
14. Were compliance certifications verified and current?
15. Any concerns about data handling or privacy?

**Value**:
16. Has the tool delivered expected ROI/value?
17. Any unexpected costs or fees?
18. Would you purchase again / recommend to others?

**Red Flags to Watch For**:
- Vendor didn't deliver on promises
- Poor support responsiveness
- Frequent outages or performance degradation
- Lack of transparency about issues
- Unexpected cost increases

---

### Proof of Concept (POC) Evaluation

**For finalists**, consider a 2-4 week POC before final award:

**POC Structure**:
```
Week 1: Setup & Configuration
- Vendor configures system for your environment
- Load sample data (de-identified)
- Integrate with test/dev systems (if applicable)
- Train pilot users (5-10 people)

Week 2-3: Active Testing
- Pilot users perform real tasks with tool
- Test all must-have requirements
- Stress test performance and scalability
- Security team reviews controls and access

Week 4: Evaluation & Decision
- Collect user feedback (surveys, interviews)
- Review analytics and performance data
- Score against evaluation criteria
- Select winner
```

**POC Success Criteria** (define upfront):
- ✅ 80%+ user satisfaction score
- ✅ All must-have requirements demonstrated
- ✅ Performance meets SLA requirements
- ✅ No critical security findings
- ✅ Vendor support responsive (<24 hours)

**POC Costs**:
- Most vendors offer free 30-day trials (leverage this)
- For paid POC, negotiate cap (e.g., $5K-10K max, credited toward contract if selected)
- Include POC costs in RFP pricing schedule

---

## Contract Negotiation

### Negotiation Priorities

**Rank your priorities** (varies by agency):

**High Priority** (must achieve):
1. Data ownership and portability
2. Termination rights (for convenience, no penalties)
3. Required compliance certifications
4. Price lock for base period (3 years)
5. Service level agreement (SLA) with teeth (credits)

**Medium Priority** (negotiate hard):
6. Volume discounts for growth
7. Roadmap commitments (future features)
8. Premium support included (not extra)
9. Training included (not just materials)
10. Option periods at agency discretion

**Low Priority** (nice to have):
11. Dedicated account manager
12. Quarterly business reviews
13. Custom integrations (may cost extra)
14. Priority feature requests

---

### Key Contract Terms to Negotiate

#### 1. Data Ownership & Portability

**Vendor's First Offer** (common):
```
"Customer data remains property of Customer. Upon termination,
Vendor will provide data export in proprietary format within 60 days."
```

**Counter-Offer** (stronger):
```
"Agency retains all ownership and IP rights to data input or generated.
Upon termination or Agency request, Vendor shall provide all data in
open formats (CSV, JSON, PDF) within 30 days at no additional charge.
Vendor shall permanently delete all Agency data within 30 days of
export confirmation, with written certification of deletion."
```

**Why It Matters**: Prevents vendor lock-in, ensures you can move to another tool.

---

#### 2. Termination for Convenience

**Vendor's First Offer** (common):
```
"Either party may terminate with 180 days notice. Customer agrees
to pay early termination fee of 50% of remaining contract value."
```

**Counter-Offer** (stronger):
```
"Agency may terminate without cause with 90 days written notice.
No early termination fees or penalties. Agency pays only for
services rendered through termination date. Vendor may terminate
only for Agency material breach with 30-day cure period."
```

**Why It Matters**: Government needs flexibility to change direction, reallocate budget.

---

#### 3. Service Level Agreement (SLA)

**Vendor's First Offer** (weak):
```
"Vendor shall use commercially reasonable efforts to maintain 99%
uptime. In the event of SLA breach, Vendor will work to resolve
issue promptly."
```

**Counter-Offer** (stronger):
```
"Vendor shall maintain 99.5% uptime measured monthly, excluding
scheduled maintenance (max 4 hours/month, off-peak hours).
Performance: <2 second response time for 95% of queries.

SLA Credits:
- 99.0-99.5% uptime: 10% of monthly fees credited
- 98.0-99.0% uptime: 25% of monthly fees credited
- <98.0% uptime: 50% of monthly fees credited

Credits automatically applied to next month's invoice, no request required."
```

**Why It Matters**: "Commercially reasonable efforts" is unenforceable. Credits create accountability.

---

#### 4. Price Lock & Escalation

**Vendor's First Offer**:
```
"Pricing held for initial 12 months. Year 2+ pricing subject to
increase based on Vendor's then-current pricing, typically 5-10% annually."
```

**Counter-Offer**:
```
"Pricing held firm for base period (3 years). Option period pricing
increases limited to lesser of (a) CPI or (b) 3% annually. No
increases for same user counts. Volume discounts apply:
- 100+ users: 10% discount
- 200+ users: 15% discount
- 500+ users: 20% discount"
```

**Why It Matters**: Multi-year price certainty enables accurate budgeting.

---

#### 5. Compliance & Audit Rights

**Vendor's First Offer**:
```
"Vendor maintains SOC 2 Type II compliance. Reports available upon request."
```

**Counter-Offer**:
```
"Vendor shall maintain [FedRAMP Moderate, SOC 2 Type II, ISO 27001]
throughout contract term. Current audit reports provided annually
without request. Agency may conduct on-site audit or third-party
assessment upon 30 days notice, at Agency expense.

Vendor shall notify Agency within 24 hours of:
- Loss of compliance certification
- Security incident affecting Agency data
- Change in compliance posture affecting Agency

Loss of required certification is material breach, Agency may
terminate immediately."
```

**Why It Matters**: Ongoing compliance is critical; you need audit rights and notifications.

---

### Unacceptable Terms (Red Flags)

**Do NOT accept**:

❌ **Liability caps below $1M** (for significant contracts)
- Standard: Liability capped at 12-24 months of fees
- Government needs recourse for data breaches, major failures

❌ **Vendor owns derivative data or usage insights**
- Example: "Vendor may use anonymized, aggregated Customer data to improve services"
- Problem: Your citizen data used to train competitor-accessible AI

❌ **Forced arbitration or venue in vendor's jurisdiction**
- Standard: Disputes resolved in Agency's jurisdiction, under Agency's state law
- Problem: You can't effectively pursue claims across country

❌ **Indemnification limited or vendor not liable for AI errors**
- Example: "Vendor not liable for decisions made based on AI outputs"
- Problem: Who's responsible if AI gives wrong answer causing harm?

❌ **Automatic renewal without easy opt-out**
- Example: "Contract auto-renews for 1-year terms unless terminated 180 days prior"
- Problem: Missed deadline locks you in another year

---

## Implementation & Transition

### Implementation Checklist

**Pre-Kickoff (Weeks 1-2)**:
- [ ] Contract signed, purchase order issued
- [ ] Project team assigned (yours and vendor's)
- [ ] Kickoff meeting scheduled
- [ ] Access credentials provided to vendor
- [ ] IT security review completed

**Implementation (Weeks 3-8)**:
- [ ] System configured per requirements
- [ ] Integrations completed (website, SSO, etc.)
- [ ] Test data loaded
- [ ] User acceptance testing (UAT) completed
- [ ] Training materials reviewed and approved
- [ ] Staff training completed
- [ ] Pilot users identified and trained

**Go-Live (Weeks 9-10)**:
- [ ] Production data migration (if applicable)
- [ ] Go-live checklist completed
- [ ] Users notified of launch
- [ ] Support plan active (help desk, escalation)
- [ ] Monitoring dashboard configured

**Post-Launch (Weeks 11-12)**:
- [ ] Hypercare support (vendor on-call first 2 weeks)
- [ ] User feedback collected
- [ ] Issues triaged and resolved
- [ ] Performance metrics reviewed
- [ ] Transition to steady-state support

---

### Change Management

**Communication Plan**:
```
Audience: All staff (agency-wide)
Message: "AI tools coming to help you work smarter, not replace you"
Timing: 30 days before launch

Audience: Direct users (pilot group)
Message: "You're selected for pilot, here's what to expect"
Timing: 14 days before training

Audience: Managers/supervisors
Message: "Support your teams during transition, expect learning curve"
Timing: 14 days before launch

Audience: Citizens/public (if public-facing AI)
Message: "New AI assistant available 24/7, chat with us anytime"
Timing: Launch day
```

**Training Strategy**:
- **Mandatory training**: 2-hour workshop for all users
- **Optional deep-dive**: 3-hour advanced session for power users
- **On-demand resources**: Video library, quick reference guides
- **Office hours**: Weekly drop-in support first 8 weeks

---

### Success Metrics

**Track from Day 1**:

| Metric | Baseline | Target | Actual (Month 1) | Actual (Month 3) | Actual (Month 6) |
|--------|----------|--------|------------------|------------------|------------------|
| **Adoption** |
| Active users | 0 | 80% of licenses | | | |
| Daily usage | 0 | 60% of users daily | | | |
| **Efficiency** |
| Time savings | 0 | 10 hours/user/week | | | |
| Task volume | 1,000/month | 1,500/month (+50%) | | | |
| **Quality** |
| User satisfaction | N/A | 80%+ (CSAT) | | | |
| Accuracy rate | N/A | 90%+ | | | |
| **Cost** |
| Cost per task | $XX | $XX (-40%) | | | |
| ROI | 0% | 200%+ (Year 1) | | | |

---

## Common Pitfalls

### Pitfall 1: Not Piloting First

**Mistake**: "We'll save time by skipping pilot and deploying to everyone."

**Why It Fails**:
- You don't know if tool actually solves your problem
- Users not trained, frustrated, abandon tool
- IT issues surface under load (didn't test integration)
- Wrong tool selected, locked into 3-year contract

**Better Approach**:
- Pilot with 10-20 users for 8-12 weeks
- Measure results, gather feedback
- Refine before full rollout
- Catch issues when stakes are low

**Cost**: Piloting costs <10% of project budget, saves 10x in avoided mistakes.

---

### Pitfall 2: Underestimating Change Management

**Mistake**: "Tool is easy to use, no training needed."

**Why It Fails**:
- Staff don't adopt because they don't understand how it helps
- Resistance: "This will take my job" fear not addressed
- Poor initial experience leads to permanent rejection
- Usage plateaus at 20%, tool underutilized

**Better Approach**:
- Invest 10-20% of budget in change management
- Communication: Why this helps you, not replaces you
- Training: Hands-on, relevant to real work
- Support: Office hours, peer champions
- Patience: 3-6 months to full adoption

---

### Pitfall 3: Ignoring Data Classification

**Mistake**: "We'll figure out compliance later."

**Why It Fails**:
- Realize after contract award that tool isn't compliant
- Can't actually use tool with real data (only test data)
- Audit finding, project shut down
- Start over with compliant tool, wasted 6-12 months

**Better Approach**:
- Data classification FIRST (see [Requirements](#requirements-development))
- Match compliance requirements to tool certifications
- Verify certifications before contract award
- Build compliance into requirements, not afterthought

---

### Pitfall 4: No Exit Strategy

**Mistake**: "This tool will work forever, no need to plan for change."

**Why It Fails**:
- Vendor goes bankrupt, acquired, or raises prices 300%
- Better tool emerges, but you're locked in
- Data stuck in proprietary format, can't migrate
- Paying for underperforming tool because switching is "too hard"

**Better Approach**:
- Negotiate termination rights (90 days, no penalty)
- Require data portability in open formats
- Document your workflows independently of tool
- Test data export annually
- Budget for migration (assume 7-year tool lifecycle)

---

### Pitfall 5: Scope Creep

**Mistake**: "Since we have the tool, let's use it for everything!"

**Why It Fails**:
- Original use case (50 users) expands to 200 users, budget blown
- Tool used for use cases it's not designed for, poor results
- Integration complexity explodes
- Project never "done," perpetual implementation

**Better Approach**:
- Define specific use case and scope in RFP
- Implement in phases: Pilot → Department → Enterprise
- Prove ROI at each phase before expanding
- Budget for expansion (option periods in contract)
- Know when to add second tool vs. expanding first tool

---

### Pitfall 6: Vendor Over-Promises

**Mistake**: "Vendor demo looked perfect, we'll get same results."

**Why It Fails**:
- Demo was carefully curated, doesn't reflect real-world performance
- "Coming soon" features aren't actually available
- Implementation more complex than vendor suggested
- Results don't match ROI projections, expectations unmet

**Better Approach**:
- Proof of concept with YOUR data, not demo data
- Get commitments in writing (feature roadmap in contract)
- Check references: Did vendor deliver on promises?
- Pilot thoroughly before full commitment
- Build in performance standards and off-ramps

---

### Pitfall 7: Forgetting About Ongoing Costs

**Mistake**: Budget only for software licenses, not total cost.

**Why It Fails**:
- Implementation costs 50-100% of Year 1 software cost
- Training, change management not budgeted
- Integration requires IT staff time (not in budget)
- Premium support needed but not included
- Project stalls for lack of budget

**Better Approach**:
- Calculate full 3-year TCO (see [Requirements](#requirements-development))
- Budget:
  - Software: 60% of total
  - Implementation: 20%
  - Training: 10%
  - Contingency: 10%
- Include ongoing costs: support, training new hires, upgrades

---

### Pitfall 8: No Measurement Plan

**Mistake**: "We'll know it's working if users are happy."

**Why It Fails**:
- Can't prove value, budget cut next year
- Don't know if goals achieved
- Can't identify and fix problems
- Vendor claims success, you have no data to refute

**Better Approach**:
- Define metrics BEFORE launch (see [Success Metrics](#success-metrics))
- Establish baseline (current state)
- Measure monthly, report quarterly
- Course-correct based on data
- Build measurement into contract (vendor provides analytics)

---

### Pitfall 9: Security as Afterthought

**Mistake**: "IT will handle security after we select tool."

**Why It Fails**:
- Tool doesn't meet security requirements
- IT vetos tool after months of procurement work
- Data breach because security controls inadequate
- Audit finding, project shut down

**Better Approach**:
- Include IT and security in initial planning
- Security requirements in RFP (not negotiable)
- Security review BEFORE final selection
- Ongoing monitoring (security isn't one-time)

---

### Pitfall 10: Vendor Lock-In by Default

**Mistake**: Become dependent on vendor without realizing it.

**How It Happens**:
- All workflows built around vendor-specific features
- Data in proprietary format
- Staff only know this one tool
- Integrations are one-way (data in, but not out)
- 3-year contract auto-renews, no alternative explored

**Better Approach**:
- Design vendor-agnostic workflows where possible
- Require open data formats
- Cross-train staff on multiple tools
- Test data export regularly
- Evaluate alternatives every 2-3 years (even if happy)

---

## Resources & Templates

### Templates Available

1. **Data Classification Worksheet** - Determine compliance requirements
2. **RFP Template for AI Tools** - Complete solicitation
3. **Evaluation Matrix** - Score vendor proposals consistently
4. **Reference Check Script** - Questions for vendor references
5. **POC Evaluation Criteria** - Test finalists objectively
6. **Contract Negotiation Checklist** - Key terms to negotiate
7. **Implementation Checklist** - Task list for go-live
8. **Success Metrics Dashboard** - Track performance post-launch

Download templates from: [Agent Shift GitHub Repository](../../README.md)

---

### Government Procurement Resources

**Federal**:
- **SAM.gov**: Official federal procurement portal - https://sam.gov
- **GSA Advantage**: GSA Schedule shopping - https://www.gsaadvantage.gov/
- **FAR**: Federal Acquisition Regulation - https://www.acquisition.gov/far/
- **FedRAMP Marketplace**: Authorized cloud services - https://marketplace.fedramp.gov/

**State & Local**:
- **NASPO ValuePoint**: State cooperative purchasing - https://www.naspo valuepoint.org/
- **National IPA**: Local government cooperative - https://www.nationalipa.org/
- **NIGP**: Public procurement association - https://www.nigp.org/

---

### AI-Specific Procurement Guidance

- **OMB AI Memo (M-24-10)**: Federal AI policy - https://www.whitehouse.gov/omb/
- **NIST AI Risk Management Framework**: AI risk assessment - https://www.nist.gov/itl/ai-risk-management-framework
- **GSA AI Guide for Government**: Practical AI guidance - https://www.gsa.gov/technology/ai-guide
- **Agent Shift Catalog**: Browse 190+ AI tools with compliance filters - [../README.md](../README.md)

---

## Related Documentation

**Agent Shift Resources**:
- [Use Cases](./USE_CASES.md) - Real-world AI applications by sector
- [Compliance Guide](./COMPLIANCE.md) - Detailed compliance frameworks
- [FAQ](./FAQ.md) - Common procurement questions answered
- [Government Guide](../GOVERNMENT_GUIDE.md) - Implementation guidance
- [AI Evaluation Framework](./methodology/AI_EVALUATION_FRAMEWORK.md) - Tool assessment criteria
- [ROI Calculator](../README.md#roi-calculator) - Calculate business case

**Phase 2 Documentation**:
- [AI Agent Methodology](./methodology/AI_AGENT_METHODOLOGY.md) - How Agent Shift was built
- [Brand Story](./brand/BRAND_STORY.md) - Our mission and values
- [Government AI Research](./research/GOVERNMENT_AI_RESEARCH.md) - Market research
- [ROI Calculator Methodology](./methodology/ROI_CALCULATOR_METHODOLOGY.md) - Calculation methods

---

## Questions?

**Need help with procurement?**
- [Open GitHub Discussion](../../README.md#discussions)
- [Email us](#)
- [Schedule consultation](#)

**Contribute**:
- Share your procurement templates
- Add lessons learned from your process
- [Contributing Guide](../CONTRIBUTING.md)

---

*Last updated: November 2024*
*Part of the Agent Shift Documentation Suite*
