# Calculator Page Business Case Guidance Implementation Plan

## Project Overview

Enhance the Calculator page with scenario-based business case guidance to help visitors make their argument for AI tools, with balanced educational content on vendor selection.

**Timeline:** 2-3 weeks with targeted research
**Status:** Phase 1 Complete ✅

---

## Phase 1: Calculator Page UI & Basic Guidance (COMPLETED ✅)

### Implemented Components

#### 1. Calculator Page Modifications
- **File:** `/client/src/pages/Calculator.tsx`
- **Changes:**
  - Added view mode state (`'calculator' | 'guidance'`)
  - Created "Get Guidance" button with amber gradient styling
  - Implemented content switcher with back button navigation
  - Preserved calculator results across view switches

#### 2. BusinessCaseGuidance Component
- **File:** `/client/src/components/BusinessCaseGuidance.tsx`
- **Features:**
  - Accordion-based scenario selector
  - Three main scenarios + vendor comparison
  - Link to full Business Case page
  - Responsive design with color-coded sections

#### 3. ConversationPlaybook Component
- **File:** `/client/src/components/guidance/ConversationPlaybook.tsx`
- **Content:**
  - Personalized elevator pitch using calculated ROI
  - 3 helpful analogies (intern, calculator, research librarian)
  - 5 common objections with prepared responses
  - Conversation closing strategy
  - **Dynamic values:** Uses result, taskType, taskPresets props

#### 4. PurchaseRequestBuilder Component
- **File:** `/client/src/components/guidance/PurchaseRequestBuilder.tsx`
- **Content:**
  - Auto-generated 10-section purchase request
  - Sections: Executive Summary, Business Need, Solution, Cost-Benefit, Risk Mitigation, Alternatives, Implementation, Metrics, Recommendation, Approval
  - Copy to clipboard functionality
  - Download as Word Doc button (placeholder)
  - Pro tips for procurement success
  - **Dynamic values:** Fully populated from calculator results

#### 5. ExecutivePresentationBuilder Component
- **File:** `/client/src/components/guidance/ExecutivePresentationBuilder.tsx`
- **Content:**
  - 8-slide executive deck outline
  - Each slide includes: headline, bullets, speaker notes
  - Slide topics: Opportunity, Numbers, Beyond Savings, Market Context, Risk, Implementation, The Ask, Cost of Waiting
  - Anticipated Q&A section (5 common questions)
  - Presentation strategy tips
  - Copy all slides + Export to PowerPoint (placeholder)
  - **Dynamic values:** All metrics auto-populated from calculator

#### 6. VendorComparisonBrief Component
- **File:** `/client/src/components/guidance/VendorComparisonBrief.tsx`
- **Content:**
  - Side-by-side comparison: Platform Bundle vs. Best-of-Breed
  - Visual check/X marks for pros/cons
  - The AutoGen Paradox callout (40% Fortune 100 adoption)
  - Hybrid approach recommendation with example stack
  - Quick decision framework (3 decision points)
  - Link to detailed `/tool-strategy` page

### Phase 1 Results
- ✅ All components built and tested
- ✅ Dev server running without errors
- ✅ Accordion UI with @radix-ui/react-accordion
- ✅ Dynamic content population from calculator results
- ✅ Responsive design with Tailwind CSS
- ✅ Research citations included where appropriate

---

## Phase 2: Dedicated Tool Strategy Page (IN PROGRESS)

### Overview
Create comprehensive `/tool-strategy` route with deep-dive vendor comparison, decision frameworks, and research-backed guidance.

### Implementation Steps

#### Step 1: Create Route and Page Structure
**Files to create:**
- `/client/src/pages/ToolStrategy.tsx` - Main page component

**Route addition:**
- Update `/client/src/App.tsx` to add `<Route path="/tool-strategy" component={<ToolStrategy />} />`

#### Step 2: Page Structure

```typescript
// ToolStrategy.tsx structure
export default function ToolStrategy() {
  return (
    <>
      {/* Hero Section */}
      {/* Navigation Tabs or Sections */}
      {/* Section 1: Decision Framework */}
      {/* Section 2: Platform Vendors Deep-Dive */}
      {/* Section 3: Best-of-Breed Advantages */}
      {/* Section 4: The Hybrid Approach */}
      {/* Section 5: Real-World Comparisons */}
      {/* Section 6: Common Concerns */}
      {/* Section 7: Your Action Plan */}
      {/* CTA back to Calculator */}
    </>
  );
}
```

#### Step 3: Component Breakdown

##### Hero Section
- **Headline:** "Making Smart Tool Choices: Platform vs. Best-of-Breed"
- **Subheadline:** "A balanced, research-backed guide to AI tool selection"
- **Background:** Gradient with particles (reuse MoneyParticles or FlowingStreams)
- **Quick nav pills:** Jump to section buttons

##### Section 1: Interactive Decision Framework
**Component:** `<DecisionTreeQuiz />`
- **File:** `/client/src/components/tool-strategy/DecisionTreeQuiz.tsx`
- **Features:**
  - 6-8 multiple choice questions
  - Progressive disclosure (answer Q1 to see Q2)
  - Real-time recommendation: Platform, Best-of-Breed, or Hybrid
  - Visual tree diagram showing decision path
- **Questions:**
  1. Do features need to work together automatically?
  2. Is IT control more important than individual tool quality?
  3. Do you have budget flexibility?
  4. Does your team already use platform heavily?
  5. How important is innovation speed (bleeding edge vs. stability)?
  6. Do you need multi-cloud or cross-platform workflows?
- **State management:** Use React useState for quiz progress

##### Section 2: Platform Vendors Deep-Dive
**Component:** `<PlatformVendorCards />`
- **File:** `/client/src/components/tool-strategy/PlatformVendorCards.tsx`
- **Content for each vendor:**

**Microsoft 365 Copilot:**
- Strengths: Deep Office integration, enterprise support, compliance certifications
- Limitations: Ecosystem lock-in, 3-6 month feature lag, bundled pricing ($30-60/user)
- Best for: Organizations fully committed to Microsoft stack
- Compliance: FedRAMP, HIPAA, SOC 2, ISO 27001
- Innovation examples: GPT-4 integration (3 month lag after Azure OpenAI)

**Google Workspace AI:**
- Strengths: Gmail/Docs integration, collaboration features
- Limitations: Limited standalone capabilities, Google ecosystem dependency
- Best for: Google Workspace organizations with light AI needs
- Compliance: SOC 2, ISO 27001

**AWS Bedrock:**
- Strengths: Multi-model access, cloud-native, infrastructure control
- Limitations: Requires AWS expertise, developer-focused (not end-user)
- Best for: Technical teams building custom AI applications
- Compliance: FedRAMP, HIPAA, SOC 2

**Azure OpenAI Service:**
- Strengths: Enterprise OpenAI access, Microsoft support
- Limitations: 1-3 month lag for new models, Azure lock-in
- Best for: Enterprises wanting OpenAI with Microsoft SLAs

##### Section 3: Best-of-Breed Advantages
**Component:** `<BestOfBreedShowcase />`
- **File:** `/client/src/components/tool-strategy/BestOfBreedShowcase.tsx`
- **Structure:** Category-based cards

**Categories with examples:**

1. **Writing & Communication**
   - ChatGPT Plus ($20/month): General-purpose AI assistant
   - Claude Pro ($20/month): Long-form content, analysis
   - Jasper ($39/month): Marketing copy specialization
   - Comparison: Feature depth, speed, quality

2. **Research & Knowledge**
   - Perplexity Pro ($20/month): Real-time search, citations
   - Consensus ($9/month): Academic paper search
   - Elicit ($10/month): Research assistant
   - Comparison: Source quality, citation accuracy

3. **Data Analysis**
   - Julius AI ($20/month): Natural language data analysis
   - Hex ($0-enterprise): Collaborative data science
   - Comparison: Visualization, SQL generation

4. **Voice & Transcription**
   - Superwhisper ($15/month): Local voice-to-text
   - Wispr Flow ($12/month): System-wide dictation
   - Otter.ai ($17/month): Meeting transcription
   - Comparison: Accuracy, privacy, integration

5. **Visual & Design**
   - Midjourney ($30/month): Image generation
   - Beautiful.ai ($12/month): Presentation design
   - Gamma ($10/month): Document + presentation AI
   - Comparison: Quality, ease of use, control

**Each card includes:**
- Tool logo/icon
- Pricing
- Key differentiators
- Compliance/security notes
- "Why not platform alternative" explanation

##### Section 4: The Hybrid Approach (RECOMMENDED)
**Component:** `<HybridArchitectureDiagram />`
- **File:** `/client/src/components/tool-strategy/HybridArchitectureDiagram.tsx`
- **Visual:** Interactive diagram showing layers

**Architecture layers:**
```
┌─────────────────────────────────────────┐
│   Productivity Agents (Best-of-Breed)   │
│  ChatGPT | Perplexity | Julius | Voice  │
└─────────────────────────────────────────┘
           ↕ Integration Layer (APIs, Zapier)
┌─────────────────────────────────────────┐
│   Core Infrastructure (Platform)        │
│  Email | Calendar | Storage | Identity  │
└─────────────────────────────────────────┘
```

**Example stacks by team size:**

**Small Team (5-20 people):**
- Infrastructure: Google Workspace ($12/user)
- AI Tools: ChatGPT ($20), Perplexity ($20), Voice tool ($15)
- Integration: Native APIs
- **Monthly cost per user:** ~$17
- **Time savings:** 5-10 hours/week per person

**Medium Team (50-200 people):**
- Infrastructure: Microsoft 365 E3 ($36/user)
- AI Tools: ChatGPT Team ($25), Perplexity Pro ($20), Julius AI ($20), Superwhisper ($15)
- Integration: Zapier ($30/month shared)
- **Monthly cost per user:** ~$37
- **Time savings:** 8-12 hours/week per person

**Enterprise (500+ people):**
- Infrastructure: Microsoft 365 E5 ($57/user)
- AI Tools: Enterprise ChatGPT ($60), Perplexity Enterprise ($40), custom integrations
- Integration: Custom API layer + Power Automate
- **Monthly cost per user:** ~$67
- **Time savings:** 10-15 hours/week per person

##### Section 5: Real-World Comparisons
**Component:** `<FeatureTimelineChart />` + `<PerformanceBenchmarks />`
- **File:** `/client/src/components/tool-strategy/FeatureTimeline.tsx`
- **File:** `/client/src/components/tool-strategy/PerformanceBenchmarks.tsx`

**Feature Timeline Chart:**
- **Data needed (Phase 3 research):**
  - GPT-4 Turbo: OpenAI (Nov 2023) → Azure OpenAI (Feb 2024) = 3 month lag
  - Voice Mode: ChatGPT (Sept 2024) → Microsoft Copilot (Dec 2024) = 3 month lag
  - Claude 3.5 Sonnet: Anthropic (June 2024) → AWS Bedrock (July 2024) = 1 month lag
  - Gemini 1.5 Pro: Google (Feb 2024) → Vertex AI (Feb 2024) = same day (Google's own)
- **Visual:** Interactive timeline with hover tooltips
- **Insight:** Platform lag averages 2-4 months for non-proprietary models

**Performance Benchmarks:**
- **Metrics to compare:**
  - Task completion speed
  - Output quality (subjective scoring)
  - User satisfaction ratings (from reviews)
  - Citation accuracy (for research tools)
- **Data sources:**
  - Reddit sentiment analysis (r/ChatGPT, r/LocalLLaMA)
  - Product Hunt ratings
  - G2 reviews
  - Public benchmarks where available

**Case Study Cards:**
- **Fortune 100 AutoGen Adoption:**
  - Why 40% chose open framework over Copilot Studio
  - Interview quotes (if available) or published case studies
  - Key lesson: Even Microsoft customers prefer flexibility

- **Government Open Source Preference:**
  - Expand on catalog data insight: "Agencies favor open-source for customization, security auditing, and avoiding vendor lock-in"
  - Examples: Which agencies, which tools
  - FedRAMP certified open-source options

##### Section 6: Common Concerns Addressed
**Component:** `<ConcernAccordion />`
- **File:** `/client/src/components/tool-strategy/ConcernAccordion.tsx`
- **Format:** Accordion with detailed answers

**Concerns to address:**

1. **Security & Compliance**
   - Q: "Are best-of-breed tools as secure as platform options?"
   - A: Comparison table of certifications (FedRAMP, SOC 2, HIPAA, ISO 27001)
   - Enterprise versions vs. consumer versions
   - Data residency options
   - Audit trail capabilities

2. **Vendor Stability & Risk**
   - Q: "What if a specialist vendor goes out of business?"
   - A: Exit strategy frameworks
   - Data portability requirements
   - Investment backing of major vendors (Anthropic: $7B, OpenAI: $13B, etc.)
   - Open-source alternatives as safety net

3. **IT Management Complexity**
   - Q: "How do we manage 10 different tools?"
   - A: Integration patterns (Zapier, Make, native APIs)
   - SSO implementations (Okta, Azure AD)
   - Centralized billing options
   - Agent orchestration frameworks (AutoGen, LangChain)

4. **Training & Adoption**
   - Q: "Will users actually adopt multiple tools?"
   - A: Learning curve data (most tools: 30 min onboarding)
   - Natural language interfaces reduce training needs
   - Adoption rates from case studies
   - Change management best practices

5. **Cost Management**
   - Q: "Will costs spiral out of control?"
   - A: Budget frameworks (per-user caps, role-based access)
   - ROI tracking methods
   - Negotiation strategies for volume discounts
   - When to consolidate vs. expand tools

6. **Interoperability**
   - Q: "Will these tools work together?"
   - A: API ecosystem overview
   - Standardization trends (OpenAI-compatible APIs)
   - Middleware solutions
   - File format compatibility

##### Section 7: Your Action Plan
**Component:** `<ActionPlanBuilder />`
- **File:** `/client/src/components/tool-strategy/ActionPlanBuilder.tsx`
- **Features:** Interactive checklist with phases

**Assessment Phase (Week 1-2):**
- [ ] Audit current tools and usage
- [ ] Survey team needs by role
- [ ] Identify pain points and gaps
- [ ] Calculate current time spent on tasks
- [ ] Review security/compliance requirements

**Selection Phase (Week 3-4):**
- [ ] Use Decision Framework (link to Section 1)
- [ ] Run pilots with 3-5 users per tool
- [ ] Measure actual time savings
- [ ] Collect user feedback
- [ ] Evaluate integration requirements

**Implementation Phase (Month 2):**
- [ ] Negotiate enterprise pricing (if needed)
- [ ] Set up SSO and user provisioning
- [ ] Configure integrations
- [ ] Create internal documentation
- [ ] Train power users/champions

**Scale Phase (Month 3+):**
- [ ] Roll out to full team in waves
- [ ] Monitor usage and adoption metrics
- [ ] Iterate based on feedback
- [ ] Optimize tool stack (add/remove)
- [ ] Share results with leadership

**Downloadable templates:**
- [ ] Tool evaluation matrix (Excel)
- [ ] Pilot program charter (Word)
- [ ] User survey questions (Google Form template)
- [ ] ROI tracking dashboard (template)

#### Step 4: Additional Components Needed

**Navigation Component:**
- **File:** `/client/src/components/tool-strategy/ToolStrategyNav.tsx`
- Sticky nav bar with section links
- Progress indicator as user scrolls
- "Jump to section" dropdown on mobile

**Total Cost of Ownership Calculator:**
- **File:** `/client/src/components/tool-strategy/TCOCalculator.tsx`
- Interactive calculator comparing:
  - Platform bundle cost (visible)
  - Platform bundle cost (hidden costs: unused features, training)
  - Best-of-breed stack cost
  - Hybrid approach cost
- Input fields: team size, roles, usage patterns
- Output: 3-year TCO comparison chart

**Vendor Scorecard:**
- **File:** `/client/src/components/tool-strategy/VendorScorecard.tsx`
- Rate vendors on:
  - Innovation speed (1-5)
  - Feature depth (1-5)
  - Ease of use (1-5)
  - Support quality (1-5)
  - Pricing transparency (1-5)
  - Compliance (1-5)
- Visual radar chart comparison
- Filter by use case (writing, research, data, etc.)

#### Step 5: Design Specifications

**Color Palette:**
- Platform vendors: Blue gradient (`from-blue-500 to-indigo-600`)
- Best-of-breed: Green gradient (`from-green-500 to-emerald-600`)
- Hybrid approach: Purple gradient (`from-purple-500 to-pink-600`)
- Neutral sections: Slate/gray

**Typography:**
- Headings: Bold, 2xl-4xl sizes
- Body: text-base to text-lg
- Code blocks: `font-mono text-sm`

**Layout:**
- Max width: 7xl (1280px) for main content
- Full-width for hero and charts
- Grid layouts: 2-3 columns on desktop, 1 column mobile

**Animations:**
- Fade-in on scroll (IntersectionObserver)
- Hover effects on cards
- Smooth scroll to sections
- Chart animations (Framer Motion or CSS)

---

## Phase 3: Research & Data Enhancement (2-3 WEEKS)

### Research Tasks

#### Task 1: Innovation Speed Timeline Research
**Owner:** Research agent or manual research
**Deliverable:** `innovation-speed-data.json`

**Data points to collect:**
- 10-15 major AI features across last 2 years
- For each feature:
  - Feature name
  - Original vendor release date
  - Platform vendor release dates (Microsoft, Google, AWS)
  - Lag time in days
  - Source/citation

**Example data structure:**
```json
{
  "features": [
    {
      "name": "GPT-4 Turbo",
      "originalVendor": "OpenAI",
      "originalDate": "2023-11-06",
      "platformReleases": [
        {
          "vendor": "Azure OpenAI",
          "date": "2024-02-01",
          "lagDays": 87,
          "source": "https://azure.microsoft.com/updates/"
        }
      ]
    }
  ]
}
```

**Research sources:**
- Vendor changelogs and release notes
- TechCrunch, The Verge AI coverage
- Product Hunt launch dates
- Reddit r/MachineLearning announcements
- GitHub repo release tags (for open-source)

#### Task 2: Performance Benchmark Research
**Owner:** Research agent or manual research
**Deliverable:** `performance-benchmarks.json`

**Metrics to gather:**
- Tool-by-tool comparisons
- User satisfaction ratings (G2, Capterra, Product Hunt)
- Speed tests (where quantifiable)
- Quality assessments (citation accuracy, output quality)

**Data structure:**
```json
{
  "categories": [
    {
      "name": "Research & Knowledge",
      "tools": [
        {
          "name": "Perplexity Pro",
          "ratings": {
            "g2": 4.8,
            "productHunt": 4.7,
            "userCount": 10000
          },
          "performance": {
            "citationAccuracy": "95%",
            "responseTime": "2-3 seconds",
            "sourceCount": "50+ per query"
          }
        }
      ]
    }
  ]
}
```

#### Task 3: Total Cost of Ownership Analysis
**Owner:** Financial modeling
**Deliverable:** `tco-analysis.json`

**Cost breakdowns:**
- Platform bundles: visible costs, hidden costs
- Best-of-breed: per-tool costs, integration costs
- Training and support costs
- Productivity gains (converted to dollar value)

**Example scenarios:**
- 50-person team over 3 years
- 200-person team over 3 years
- 1000-person team over 3 years

#### Task 4: Enterprise Adoption Case Studies
**Owner:** Research agent or interviews
**Deliverable:** `case-studies.json`

**Case studies to gather:**
- 5-7 organizations (varying sizes)
- Each should include:
  - Organization profile (industry, size)
  - Problem statement
  - Tool selection (platform vs. best-of-breed vs. hybrid)
  - Implementation approach
  - Results (quantified where possible)
  - Key lessons learned

**Sources:**
- Published case studies (vendor sites, third-party)
- LinkedIn posts from practitioners
- Conference talks (summaries)
- Reddit/HackerNews experience posts (anonymized)

#### Task 5: Open Source AI Framework Analysis
**Owner:** Research agent
**Deliverable:** `open-source-frameworks.json`

**Frameworks to research:**
- AutoGen (Microsoft)
- LangChain
- CrewAI
- Semantic Kernel
- Haystack

**For each:**
- GitHub stars, contributors, recent activity
- Enterprise adoption metrics (Fortune 500 usage if available)
- Key features and differentiators
- Learning curve and documentation quality
- Integration ecosystem

### Data Integration Plan

**Create unified data file:**
- **File:** `/client/public/tool-strategy-data.json`
- Combines all research findings
- Version controlled with dates
- Properly cited sources for every data point

**Data loading:**
```typescript
// In ToolStrategy.tsx
const [strategyData, setStrategyData] = useState(null);

useEffect(() => {
  fetch('/tool-strategy-data.json')
    .then(res => res.json())
    .then(data => setStrategyData(data));
}, []);
```

---

## Phase 4: Polish & Enhancement (OPTIONAL)

### Advanced Features (if time permits)

#### 1. AI Tool Recommendation Engine
**Component:** `<ToolRecommendationWizard />`
- Multi-step form collecting user requirements
- AI-powered matching algorithm
- Personalized tool stack recommendation
- Export to comparison matrix

**Questions:**
- What's your role? (Developer, Manager, Analyst, etc.)
- Primary use cases? (Writing, Research, Data, Design)
- Team size?
- Budget range?
- Security requirements?

#### 2. Integration Visualization
**Component:** `<IntegrationGraph />`
- Visual network graph showing how tools connect
- Interactive: click tool to see connections
- Filter by integration type (native API, Zapier, webhook)
- Complexity score for each integration

#### 3. ROI Projection Tool
**Component:** `<ROIProjectionTool />`
- Extends Calculator functionality
- Projects 3-year savings by tool
- Accounts for tool switching costs
- Break-even analysis per tool

#### 4. Community Reviews & Ratings
**Component:** `<CommunityReviews />`
- User-submitted reviews (moderated)
- Rating system (1-5 stars)
- Verified user badges
- Sort/filter by use case, company size

#### 5. Vendor Comparison Matrix Builder
**Component:** `<ComparisonMatrixBuilder />`
- User selects 3-5 tools to compare
- Side-by-side feature comparison
- Custom criteria weighting
- Export to PDF/Excel

---

## Implementation Notes

### Technical Considerations

**Performance:**
- Lazy load heavy components (charts, images)
- Code splitting by route
- Image optimization (WebP, lazy loading)
- JSON data caching

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- ARIA labels for complex components
- Color contrast checks

**SEO:**
- Meta tags for /tool-strategy page
- Semantic HTML structure
- Internal linking strategy
- Schema markup for comparisons

**Analytics:**
- Track which sections users engage with most
- Monitor decision framework completion rates
- A/B test different vendor presentations
- Heatmaps for visual components

### Dependencies

**New packages potentially needed:**
```json
{
  "recharts": "^2.x", // For charts
  "react-flow": "^11.x", // For integration graph
  "framer-motion": "^10.x", // Already installed, use for animations
  "react-markdown": "^9.x" // For rich content rendering
}
```

### Testing Strategy

**Unit Tests:**
- Decision framework logic
- TCO calculator math
- Data transformation functions

**Integration Tests:**
- Route navigation
- Data fetching and display
- Form submissions

**User Testing:**
- 5 user interviews with Phase 2 prototype
- Task: "Find the right tool for your use case"
- Measure: Time to decision, confidence level

---

## Success Metrics

### Phase 1 (Completed)
- ✅ Guidance view implemented
- ✅ Zero build errors
- ✅ All dynamic content populating correctly

### Phase 2 (Goal)
- [ ] /tool-strategy route live and functional
- [ ] All 7 sections implemented
- [ ] Decision framework provides clear recommendations
- [ ] Page loads in <3 seconds
- [ ] Mobile responsive (test on 3 devices)

### Phase 3 (Goal)
- [ ] 10+ feature timeline data points collected
- [ ] 15+ tool benchmarks gathered
- [ ] 3+ TCO scenarios modeled
- [ ] 5+ case studies documented
- [ ] All data properly cited with sources

### Overall Success
- [ ] Users spend 5+ minutes on guidance pages (engagement)
- [ ] 30%+ click through from Calculator to tool-strategy
- [ ] 50%+ of visitors expand at least one scenario
- [ ] Positive user feedback (survey or comments)

---

## Timeline Estimate

**Phase 2 (1 week):**
- Day 1-2: Page structure and navigation
- Day 3-4: Core components (Decision Framework, Platform Deep-Dive)
- Day 5: Best-of-Breed and Hybrid sections
- Day 6: Polish and responsive design
- Day 7: Testing and bug fixes

**Phase 3 (2 weeks):**
- Week 1: Research and data collection
- Week 2: Data integration and visualization

**Phase 4 (optional, 1-2 weeks):**
- Advanced features as time permits

**Total:** 2-3 weeks for Phases 2-3, +1-2 weeks for Phase 4

---

## Questions & Decisions Needed

### Before Starting Phase 2:

1. **Design preference:**
   - Tab-based navigation or continuous scroll?
   - Dark mode support needed?

2. **Research depth:**
   - Should we pursue original research (surveys, interviews)?
   - Or rely on secondary sources (published studies, reviews)?

3. **Content tone:**
   - Maintain current balanced educational tone?
   - Any vendor sensitivities to be aware of?

4. **Interactivity level:**
   - Full interactive decision tree, or simplified questionnaire?
   - Real-time charts vs. static images?

5. **Data freshness:**
   - How often should tool-strategy-data.json be updated?
   - Manual updates or automated scraping?

---

## Resources & References

### Existing Research (From Business Case Page)
- McKinsey, Harvard, Stanford, MIT studies already cited
- 50+ peer-reviewed sources in `/business-case` page
- Can cross-reference and deep-link

### Tool Documentation
- Vendor websites for official information
- GitHub repos for open-source frameworks
- Community forums (Reddit, Discord) for user experiences

### Design Inspiration
- Comparison sites: G2, Capterra, Product Hunt
- Decision trees: TurboTax, insurance comparison sites
- Data visualization: Observable, Flourish

---

## Contact & Feedback

**Questions during implementation:**
- Tag with specific phase and section number
- Reference this document for context

**Updates to plan:**
- Edit this markdown file as plans evolve
- Version control with git commits
- Mark completed items with ✅

**Feedback after Phase 2:**
- User testing results
- Performance metrics
- Adjustment recommendations

---

*Last updated: November 2025*
*Status: Phase 1 Complete ✅ | Phase 2 Ready to Start*
