import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Clock,
  User,
  Bot,
  TrendingDown,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Target,
  BarChart3,
  Lightbulb
} from 'lucide-react';

interface WorkflowStep {
  task: string;
  time: number;
  actor: 'human' | 'agent';
  details?: string;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  doerWorkflow: WorkflowStep[];
  orchestratorWorkflow: WorkflowStep[];
  insights: {
    timeSaved: string;
    capacityReleased: string;
    qualityImpact: string;
    scalability: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: 'quarterly-report',
    title: 'Quarterly Performance Report',
    description: 'Generate comprehensive quarterly report with data from 5 systems, analysis, and executive summary',
    doerWorkflow: [
      { task: 'Log into Sales CRM and export Q4 data', time: 15, actor: 'human' },
      { task: 'Access Marketing Analytics platform', time: 10, actor: 'human' },
      { task: 'Download customer success metrics', time: 12, actor: 'human' },
      { task: 'Pull financial data from accounting system', time: 20, actor: 'human' },
      { task: 'Extract operational KPIs from project management tool', time: 15, actor: 'human' },
      { task: 'Manually normalize data formats in Excel', time: 45, actor: 'human', details: 'Different date formats, currency conversions, metric standardization' },
      { task: 'Create pivot tables and calculate trends', time: 30, actor: 'human' },
      { task: 'Build charts and visualizations', time: 25, actor: 'human' },
      { task: 'Write analysis for each department', time: 40, actor: 'human' },
      { task: 'Draft executive summary', time: 30, actor: 'human' },
      { task: 'Format and review final document', time: 18, actor: 'human' }
    ],
    orchestratorWorkflow: [
      { task: 'Design data collection workflow (one-time setup)', time: 20, actor: 'human', details: 'Map data sources, define agent context' },
      { task: 'Data Agent: Pull from all 5 systems in parallel', time: 3, actor: 'agent', details: 'Automated API calls with authentication' },
      { task: 'Normalization Agent: Standardize all data formats', time: 2, actor: 'agent', details: 'Rule-based transformation pipeline' },
      { task: 'Analysis Agent: Calculate trends and patterns', time: 2, actor: 'agent', details: 'Statistical analysis across all metrics' },
      { task: 'Visualization Agent: Generate charts from data', time: 1, actor: 'agent', details: 'Automated chart creation with branding' },
      { task: 'Writing Agent: Draft department analyses', time: 3, actor: 'agent', details: 'Context-aware content generation' },
      { task: 'Review insights and validate key findings', time: 15, actor: 'human', details: 'Quality control and strategic oversight' },
      { task: 'Personalize executive summary with strategic context', time: 12, actor: 'human', details: 'Add leadership perspective and recommendations' },
      { task: 'Final review and approval', time: 8, actor: 'human' }
    ],
    insights: {
      timeSaved: '87%',
      capacityReleased: '3.5 hours of strategic thinking time',
      qualityImpact: 'Higher - agents eliminate manual data entry errors and ensure consistent formatting',
      scalability: 'Can process 10x more data sources with same human effort'
    }
  },
  {
    id: 'customer-research',
    title: 'Customer Market Research Project',
    description: 'Analyze 500 customer feedback responses, identify trends, and create actionable recommendations',
    doerWorkflow: [
      { task: 'Read through all 500 survey responses', time: 180, actor: 'human', details: '~20 seconds per response' },
      { task: 'Manually categorize feedback themes in spreadsheet', time: 90, actor: 'human', details: 'Create categories, tag each response' },
      { task: 'Count frequency of each theme', time: 30, actor: 'human' },
      { task: 'Calculate sentiment scores manually', time: 60, actor: 'human', details: 'Rate each response 1-5' },
      { task: 'Extract notable quotes for each category', time: 45, actor: 'human' },
      { task: 'Create summary charts in Excel', time: 25, actor: 'human' },
      { task: 'Write findings report with recommendations', time: 60, actor: 'human' },
      { task: 'Format and proofread final document', time: 20, actor: 'human' }
    ],
    orchestratorWorkflow: [
      { task: 'Define analysis framework and success criteria', time: 15, actor: 'human', details: 'Specify what insights matter most' },
      { task: 'Analysis Agent: Process all 500 responses', time: 2, actor: 'agent', details: 'NLP analysis for themes and sentiment' },
      { task: 'Pattern Agent: Identify trends and correlations', time: 2, actor: 'agent', details: 'Statistical pattern recognition' },
      { task: 'Insight Agent: Generate findings with evidence', time: 3, actor: 'agent', details: 'Auto-extract quotes and examples' },
      { task: 'Validate insights against business context', time: 20, actor: 'human', details: 'Ensure recommendations align with strategy' },
      { task: 'Visualization Agent: Create charts and graphs', time: 1, actor: 'agent' },
      { task: 'Draft Agent: Write findings report', time: 2, actor: 'agent', details: 'Structured report with all sections' },
      { task: 'Personalize recommendations with strategic priorities', time: 15, actor: 'human', details: 'Add business judgment and next steps' },
      { task: 'Review and finalize', time: 10, actor: 'human' }
    ],
    insights: {
      timeSaved: '89%',
      capacityReleased: '7.5 hours for strategic planning',
      qualityImpact: 'Higher - AI identifies patterns humans might miss, processes all data (no sampling)',
      scalability: 'Can analyze 5,000+ responses in same timeframe'
    }
  },
  {
    id: 'content-creation',
    title: 'Multi-Channel Content Campaign',
    description: 'Create blog post, social media content, email newsletter, and landing page copy for product launch',
    doerWorkflow: [
      { task: 'Research product features and benefits', time: 30, actor: 'human' },
      { task: 'Research competitor messaging', time: 25, actor: 'human' },
      { task: 'Identify target audience pain points', time: 20, actor: 'human' },
      { task: 'Write blog post draft (1,500 words)', time: 90, actor: 'human' },
      { task: 'Adapt blog content for LinkedIn post', time: 20, actor: 'human' },
      { task: 'Create Twitter thread from key points', time: 15, actor: 'human' },
      { task: 'Write email newsletter version', time: 25, actor: 'human' },
      { task: 'Draft landing page copy', time: 30, actor: 'human' },
      { task: 'Create CTAs for each channel', time: 15, actor: 'human' },
      { task: 'Proofread and edit all content', time: 30, actor: 'human' }
    ],
    orchestratorWorkflow: [
      { task: 'Define messaging strategy and key themes', time: 20, actor: 'human', details: 'Core narrative and positioning' },
      { task: 'Research Agent: Gather product info and competitor analysis', time: 3, actor: 'agent', details: 'Automated data collection' },
      { task: 'Audience Agent: Analyze target persona pain points', time: 2, actor: 'agent', details: 'From historical data and reviews' },
      { task: 'Writing Agent: Draft blog post', time: 2, actor: 'agent', details: 'Based on strategic framework' },
      { task: 'Adaptation Agent: Create LinkedIn, Twitter, email versions', time: 2, actor: 'agent', details: 'Platform-optimized adaptations' },
      { task: 'Landing Page Agent: Write conversion-focused copy', time: 2, actor: 'agent', details: 'Benefit-driven messaging' },
      { task: 'Review all content for brand voice and accuracy', time: 25, actor: 'human', details: 'Ensure authenticity and strategic alignment' },
      { task: 'Personalize with unique insights and examples', time: 15, actor: 'human', details: 'Add human storytelling elements' },
      { task: 'Final polish and approval', time: 10, actor: 'human' }
    ],
    insights: {
      timeSaved: '75%',
      capacityReleased: '4 hours for creative strategy',
      qualityImpact: 'Consistent - maintains brand voice across all channels, human adds strategic storytelling',
      scalability: 'Can produce content for 10+ channels simultaneously'
    }
  },
  {
    id: 'compliance-update',
    title: 'Regulatory Compliance Update',
    description: 'Update 50 internal documents to comply with new industry regulation',
    doerWorkflow: [
      { task: 'Read and analyze new regulation (120 pages)', time: 180, actor: 'human' },
      { task: 'Review each of 50 documents for affected sections', time: 200, actor: 'human', details: '~4 minutes per document' },
      { task: 'Research compliant language for each update', time: 90, actor: 'human' },
      { task: 'Manually edit each document', time: 150, actor: 'human', details: 'Make changes, ensure context preservation' },
      { task: 'Cross-reference changes for consistency', time: 60, actor: 'human' },
      { task: 'Create change log for audit trail', time: 30, actor: 'human' },
      { task: 'Route documents for legal review', time: 20, actor: 'human' }
    ],
    orchestratorWorkflow: [
      { task: 'Review regulation and define compliance requirements', time: 45, actor: 'human', details: 'Strategic interpretation of requirements' },
      { task: 'Compliance Agent: Analyze all 50 documents', time: 3, actor: 'agent', details: 'Identify affected sections automatically' },
      { task: 'Language Agent: Suggest compliant updates', time: 4, actor: 'agent', details: 'Generate regulation-aligned language' },
      { task: 'Review agent suggestions for 10 documents (sample)', time: 30, actor: 'human', details: 'Validate approach and quality' },
      { task: 'Consistency Agent: Ensure uniform updates', time: 2, actor: 'agent', details: 'Cross-document terminology alignment' },
      { task: 'Approve agent-generated changes', time: 40, actor: 'human', details: 'Final human oversight for all docs' },
      { task: 'Audit Agent: Generate change log automatically', time: 1, actor: 'agent', details: 'Track all modifications' },
      { task: 'Review change log and route for legal approval', time: 15, actor: 'human' }
    ],
    insights: {
      timeSaved: '81%',
      capacityReleased: '10 hours for strategic compliance planning',
      qualityImpact: 'Higher - ensures consistent terminology and no missed updates',
      scalability: 'Can handle 500+ documents with minimal additional human time'
    }
  }
];

export default function BeforeAfterScenarioBuilder() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [activeView, setActiveView] = useState<'doer' | 'orchestrator'>('doer');

  const calculateTotalTime = (workflow: WorkflowStep[]) => {
    return workflow.reduce((total, step) => total + step.time, 0);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}min`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}min`;
  };

  const doerTime = calculateTotalTime(selectedScenario.doerWorkflow);
  const orchestratorTime = calculateTotalTime(selectedScenario.orchestratorWorkflow);
  const timeSavedMinutes = doerTime - orchestratorTime;
  const timeSavedPercentage = ((timeSavedMinutes / doerTime) * 100).toFixed(0);

  return (
    <div className="space-y-6">
      {/* Scenario Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setSelectedScenario(scenario)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedScenario.id === scenario.id
                ? 'border-primary bg-primary/10 shadow-md'
                : 'border-border hover:border-primary/50 hover:bg-accent'
            }`}
          >
            <div className="font-semibold text-sm mb-1">{scenario.title}</div>
            <div className="text-xs text-muted-foreground line-clamp-2">
              {scenario.description}
            </div>
          </button>
        ))}
      </div>

      {/* Time Savings Overview */}
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Doer Approach</div>
              <div className="text-4xl font-bold text-slate-700 dark:text-slate-300">
                {formatTime(doerTime)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Manual execution</div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <ArrowRight className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">
                  {timeSavedPercentage}% faster
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Orchestrator Approach</div>
              <div className="text-4xl font-bold text-primary">
                {formatTime(orchestratorTime)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">AI-assisted workflow</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-800">
            <div className="text-center text-sm">
              <span className="font-semibold text-green-700 dark:text-green-400">
                {formatTime(timeSavedMinutes)} saved
              </span>
              {' — '}
              <span className="text-muted-foreground">
                {selectedScenario.insights.capacityReleased}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Doer Workflow */}
        <Card className="border-2 border-slate-300 dark:border-slate-700">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-2">
                <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </div>
              <CardTitle className="text-lg">Doer Approach</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Manual execution: {formatTime(doerTime)} total time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {selectedScenario.doerWorkflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="shrink-0 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {idx + 1}
                  </Badge>
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs font-mono">{step.time}m</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{step.task}</div>
                  {step.details && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {step.details}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Orchestrator Workflow */}
        <Card className="border-2 border-primary/40">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-gradient-to-br from-orange-500 to-amber-600 p-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">Orchestrator Approach</CardTitle>
            </div>
            <CardDescription className="text-xs">
              AI-assisted workflow: {formatTime(orchestratorTime)} total time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {selectedScenario.orchestratorWorkflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  step.actor === 'agent'
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
                }`}
              >
                <div className="shrink-0 flex items-center gap-2">
                  <Badge
                    variant={step.actor === 'agent' ? 'default' : 'outline'}
                    className="text-xs"
                  >
                    {idx + 1}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {step.actor === 'agent' ? (
                      <Bot className="h-3 w-3 text-primary" />
                    ) : (
                      <User className="h-3 w-3 text-blue-600" />
                    )}
                    <span className="text-xs font-mono">{step.time}m</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{step.task}</div>
                  {step.details && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {step.details}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Impact Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Orchestration Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-4 w-4 text-green-600" />
                <h4 className="font-semibold text-sm">Time Savings</h4>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-1">
                {selectedScenario.insights.timeSaved}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedScenario.insights.capacityReleased}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-sm">Quality Impact</h4>
              </div>
              <p className="text-sm text-foreground">
                {selectedScenario.insights.qualityImpact}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-purple-600" />
                <h4 className="font-semibold text-sm">Capacity Released</h4>
              </div>
              <p className="text-sm text-foreground">
                {selectedScenario.insights.capacityReleased}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                <h4 className="font-semibold text-sm">Scalability</h4>
              </div>
              <p className="text-sm text-foreground">
                {selectedScenario.insights.scalability}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insight Callout */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm mb-2">The Orchestrator Difference</h4>
            <p className="text-sm text-muted-foreground">
              Notice how the Orchestrator spends time on <strong>strategic activities</strong> (design, validation, personalization)
              while agents handle <strong>execution tasks</strong> (data collection, analysis, drafting).
              This is the mindset shift: from "How do I do this?" to "Who should do this?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
