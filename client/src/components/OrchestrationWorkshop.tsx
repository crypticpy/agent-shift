import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Wrench, User, Clock, TrendingDown, ArrowRight, Download, Sparkles, CheckCircle2
} from 'lucide-react';

interface WorkflowComparison {
  doerApproach: {
    steps: string[];
    totalTime: string;
    limitations: string[];
  };
  orchestratorApproach: {
    steps: string[];
    totalTime: string;
    benefits: string[];
  };
  timeSavings: string;
  recommendedTools: string[];
  nextSteps: string[];
}

export default function OrchestrationWorkshop() {
  const [role, setRole] = useState('');
  const [task, setTask] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [frequency, setFrequency] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [comparison, setComparison] = useState<WorkflowComparison | null>(null);

  const generateComparison = () => {
    // This is a simplified version - in a real app, you might use AI to generate this
    // or have a more sophisticated matching system

    const isReportTask = task.toLowerCase().includes('report') || task.toLowerCase().includes('analysis');
    const isDataTask = task.toLowerCase().includes('data') || task.toLowerCase().includes('spreadsheet');
    const isContentTask = task.toLowerCase().includes('content') || task.toLowerCase().includes('writing') || task.toLowerCase().includes('document');
    const isResearchTask = task.toLowerCase().includes('research') || task.toLowerCase().includes('competitor') || task.toLowerCase().includes('market');

    let newComparison: WorkflowComparison;

    if (isReportTask) {
      newComparison = {
        doerApproach: {
          steps: [
            "Manually gather data from multiple sources (1-2 hours)",
            "Organize and clean data in spreadsheets (1-2 hours)",
            "Create charts and visualizations (1 hour)",
            "Write analysis and insights (2-3 hours)",
            "Format and review document (1 hour)"
          ],
          totalTime: timeSpent || "6-9 hours",
          limitations: [
            "Time-intensive manual data gathering",
            "Prone to data entry errors",
            "Can't easily scale to more data sources",
            "Your strategic thinking time is consumed by execution"
          ]
        },
        orchestratorApproach: {
          steps: [
            "Design data collection workflow (15 min)",
            "Data Agent: Pull from all sources in parallel (5 min)",
            "Analysis Agent: Generate insights and patterns (10 min)",
            "Visualization Agent: Create charts automatically (5 min)",
            "You: Review insights and add strategic context (45 min)"
          ],
          totalTime: "1.5 hours",
          benefits: [
            "80% time savings - focus on strategy instead of execution",
            "Higher accuracy - agents don't make manual data entry errors",
            "Easy to scale - add more data sources without adding your time",
            "Reusable workflow for next time"
          ]
        },
        timeSavings: "75-85%",
        recommendedTools: [
          "ChatGPT or Claude - workflow design",
          "Julius AI or Pyl - data analysis and visualization",
          "Make.com or Zapier - data collection automation",
          "Beautiful.ai or Gamma - presentation generation"
        ],
        nextSteps: [
          "Map your current manual steps for one report",
          "Identify which steps involve data gathering (automate first)",
          "Try Julius AI or ChatGPT Advanced Data Analysis with sample data",
          "Measure time saved on your first orchestrated report"
        ]
      };
    } else if (isDataTask) {
      newComparison = {
        doerApproach: {
          steps: [
            "Manually export data from source systems (30 min)",
            "Clean and normalize formats in Excel (1-2 hours)",
            "Create pivot tables and formulas (1 hour)",
            "Generate charts manually (30 min)",
            "Copy/paste into reports or presentations (30 min)"
          ],
          totalTime: timeSpent || "3-4 hours",
          limitations: [
            "Repetitive manual work each time",
            "Formula errors cause rework",
            "Time-consuming normalization",
            "Difficult to update with new data"
          ]
        },
        orchestratorApproach: {
          steps: [
            "Design automation workflow (20 min)",
            "Data Agent: Auto-pull from sources (3 min)",
            "Normalization Agent: Standardize formats (5 min)",
            "Analysis Agent: Calculate metrics automatically (5 min)",
            "You: Review outputs and validate (15 min)"
          ],
          totalTime: "45 minutes",
          benefits: [
            "70-80% time savings",
            "Consistent, error-free calculations",
            "One-click updates with new data",
            "Focus on insights, not data wrangling"
          ]
        },
        timeSavings: "70-80%",
        recommendedTools: [
          "Julius AI or ChatGPT - data analysis",
          "Make.com or Zapier - data pipeline automation",
          "Google Apps Script - spreadsheet automation",
          "Airtable or Notion - structured data management"
        ],
        nextSteps: [
          "Document your current data workflow step-by-step",
          "Identify the most repetitive parts",
          "Start with one data source - automate the pull and clean",
          "Expand to additional sources once first one works"
        ]
      };
    } else if (isContentTask) {
      newComparison = {
        doerApproach: {
          steps: [
            "Research topic and gather sources (1-2 hours)",
            "Create outline and structure (30 min)",
            "Write first draft (2-3 hours)",
            "Edit and refine (1 hour)",
            "Format and finalize (30 min)"
          ],
          totalTime: timeSpent || "5-7 hours",
          limitations: [
            "Writer's block delays progress",
            "Time-intensive research phase",
            "Multiple revision cycles",
            "Can't easily create variations"
          ]
        },
        orchestratorApproach: {
          steps: [
            "Define content requirements and audience (10 min)",
            "Research Agent: Gather relevant sources and data (15 min)",
            "Outline Agent: Generate structure and key points (5 min)",
            "Writing Agent: Draft content sections (20 min)",
            "You: Review, add expertise, refine voice (1 hour)"
          ],
          totalTime: "1.5-2 hours",
          benefits: [
            "70-75% time savings",
            "Never face blank page syndrome",
            "Easily create multiple variations",
            "Focus on strategic messaging, not first drafts"
          ]
        },
        timeSavings: "70-75%",
        recommendedTools: [
          "ChatGPT or Claude - content drafting",
          "Perplexity - research and citations",
          "Grammarly - editing and tone",
          "Jasper or Copy.ai - marketing content variations"
        ],
        nextSteps: [
          "Try having AI draft one piece of content this week",
          "Review and measure how much editing you need to do",
          "Develop a reusable prompt template for your content type",
          "Track time savings over 3-4 pieces"
        ]
      };
    } else if (isResearchTask) {
      newComparison = {
        doerApproach: {
          steps: [
            "Manual Google searches and source gathering (2 hours)",
            "Read and take notes from sources (3-4 hours)",
            "Organize findings into themes (1 hour)",
            "Write synthesis and insights (2 hours)",
            "Create summary document (1 hour)"
          ],
          totalTime: timeSpent || "8-10 hours",
          limitations: [
            "Extremely time-intensive",
            "Can miss relevant sources",
            "Bias toward sources you find first",
            "Difficult to update with new information"
          ]
        },
        orchestratorApproach: {
          steps: [
            "Define research questions and scope (15 min)",
            "Research Agent: Comprehensive source search with citations (20 min)",
            "Analysis Agent: Extract key themes and patterns (15 min)",
            "Synthesis Agent: Draft findings and insights (20 min)",
            "You: Validate findings and add strategic interpretation (1.5 hours)"
          ],
          totalTime: "2.5 hours",
          benefits: [
            "75-80% time savings",
            "More comprehensive coverage of sources",
            "Easy to update when new information emerges",
            "Focus on strategic interpretation, not information gathering"
          ]
        },
        timeSavings: "75-80%",
        recommendedTools: [
          "Perplexity - research with citations",
          "Elicit - academic research synthesis",
          "ChatGPT or Claude - analysis and synthesis",
          "Notion AI or Mem - knowledge organization"
        ],
        nextSteps: [
          "Try Perplexity for your next research task",
          "Compare depth of results vs. manual Google searches",
          "Have ChatGPT help synthesize findings into themes",
          "Document your orchestrated research workflow"
        ]
      };
    } else {
      // Generic workflow
      newComparison = {
        doerApproach: {
          steps: [
            "Manually execute each step of the task (60% of time)",
            "Review and correct errors (15% of time)",
            "Format and organize outputs (15% of time)",
            "Final review and delivery (10% of time)"
          ],
          totalTime: timeSpent || "4-6 hours",
          limitations: [
            "Time-intensive manual execution",
            "Prone to errors and inconsistency",
            "Difficult to scale",
            "Strategic thinking time is consumed"
          ]
        },
        orchestratorApproach: {
          steps: [
            "Design workflow and identify agent roles (15 min)",
            "Agents: Execute defined tasks in parallel (20-30 min)",
            "You: Review quality and add strategic value (45 min)",
            "Agents: Implement refinements (10 min)"
          ],
          totalTime: "1.5-2 hours",
          benefits: [
            "65-75% time savings",
            "Higher consistency and quality",
            "Easy to refine and reuse",
            "Focus on strategy and decision-making"
          ]
        },
        timeSavings: "65-75%",
        recommendedTools: [
          "ChatGPT or Claude - general task orchestration",
          "Make.com or Zapier - workflow automation",
          "Notion AI - task organization",
          "Perplexity - research support"
        ],
        nextSteps: [
          "Break down your task into discrete steps",
          "Identify which steps are repetitive vs. strategic",
          "Delegate the repetitive steps to AI agents",
          "Measure time saved on first orchestrated attempt"
        ]
      };
    }

    setComparison(newComparison);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setComparison(null);
  };

  const downloadPlan = () => {
    if (!comparison) return;

    const content = `ORCHESTRATION WORKFLOW PLAN
Generated: ${new Date().toLocaleDateString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Role: ${role || 'Not specified'}
Task: ${task}
Current Time Spent: ${timeSpent || 'Not specified'}
Frequency: ${frequency || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOER APPROACH (Current State)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Time: ${comparison.doerApproach.totalTime}

Steps:
${comparison.doerApproach.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

Limitations:
${comparison.doerApproach.limitations.map(lim => `• ${lim}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORCHESTRATOR APPROACH (Target State)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Time: ${comparison.orchestratorApproach.totalTime}
Time Savings: ${comparison.timeSavings}

Steps:
${comparison.orchestratorApproach.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

Benefits:
${comparison.orchestratorApproach.benefits.map(ben => `✓ ${ben}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDED TOOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${comparison.recommendedTools.map(tool => `• ${tool}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${comparison.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by Agent Shift - Your AI Orchestration Learning Platform
Visit /catalog to explore recommended tools
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orchestration-workflow-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!showResults ? (
          /* Input Form */
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="border-2 border-orange-300 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">Design Your First Orchestration Workflow</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      Tell us about a time-consuming task you do regularly, and we'll show you how to orchestrate it with AI agents.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Role or Title (optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g., Program Manager, Marketing Director, Data Analyst"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What task takes up too much of your time? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="e.g., Creating weekly performance reports, Competitive market research, Writing customer case studies"
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Time Spent (optional)
                    </label>
                    <input
                      type="text"
                      value={timeSpent}
                      onChange={(e) => setTimeSpent(e.target.value)}
                      placeholder="e.g., 4-6 hours"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Frequency (optional)
                    </label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>
                </div>

                <Button
                  onClick={generateComparison}
                  disabled={!task.trim()}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-lg py-6"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate My Orchestration Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Results Display */
          <motion.div
            key="results"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Header with Actions */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Your Orchestration Plan</h3>
                <p className="text-sm text-slate-600">Task: {task}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={downloadPlan} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Plan
                </Button>
                <Button onClick={handleReset} variant="outline">
                  Try Another Task
                </Button>
              </div>
            </div>

            {/* Time Savings Banner */}
            {comparison && (
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <TrendingDown className="h-12 w-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Potential Time Savings: {comparison.timeSavings}</h3>
                    <p className="opacity-95">
                      {comparison.doerApproach.totalTime} → {comparison.orchestratorApproach.totalTime}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Cards */}
            {comparison && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Doer Approach */}
                <Card className="border-2 border-slate-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-xl">Current Approach (Doer)</CardTitle>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {comparison.doerApproach.totalTime}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">Steps:</h4>
                      <ol className="space-y-2">
                        {comparison.doerApproach.steps.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-slate-500 flex-shrink-0">{i + 1}.</span>
                            <span className="text-slate-700 text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-300">
                      <h4 className="font-semibold mb-2 text-slate-900 text-sm">Limitations:</h4>
                      <ul className="space-y-1">
                        {comparison.doerApproach.limitations.map((lim, i) => (
                          <li key={i} className="text-sm text-slate-600">• {lim}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Orchestrator Approach */}
                <Card className="border-2 border-orange-300 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-orange-600" />
                      <CardTitle className="text-xl">Orchestrator Approach (Target)</CardTitle>
                    </div>
                    <Badge className="bg-green-500 w-fit">
                      {comparison.orchestratorApproach.totalTime}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">Steps:</h4>
                      <ol className="space-y-2">
                        {comparison.orchestratorApproach.steps.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-orange-500 flex-shrink-0 font-semibold">{i + 1}.</span>
                            <span className="text-slate-700 text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold mb-2 text-green-900 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {comparison.orchestratorApproach.benefits.map((ben, i) => (
                          <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recommended Tools */}
            {comparison && (
              <Card className="border-2 border-amber-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-amber-600" />
                    Recommended Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {comparison.recommendedTools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="text-sm px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Next Steps */}
            {comparison && (
              <Card className="border-2 border-green-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Your Next Steps
                  </CardTitle>
                  <CardDescription>
                    Follow these steps to implement your first orchestration workflow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {comparison.nextSteps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-semibold">
                          {i + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
