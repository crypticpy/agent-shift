import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { useParticleBurst } from '@/hooks/useParticleBurst';
import { useComplementaryColors } from '@/hooks/useComplementaryColors';

interface RoleScenario {
  role: string;
  before: string;
  after: string;
  impact: string;
  timeSaved: string;
  scenarios: {
    title: string;
    agent: string;
    task: string;
    result: string;
  }[];
  skills: string[];
  tags: string[];
}

const roleScenarios: RoleScenario[] = [
  {
    role: 'Program Manager',
    before: "Spends significant time on reports, data analysis, and status updates. Has ideas for program improvements but no time to implement them.",
    after: "Agents handle reports and analysis, saving 2-5 hours per week. Program manager spends time talking to participants, identifying needs, and implementing 3-4 improvement initiatives per month instead of 1-2 per year.",
    impact: 'Programs improve faster. Participants get better service. Manager is energized instead of burned out.',
    timeSaved: 'Est. 2-5 hours per week saved through AI assistance',
    scenarios: [
      {
        title: 'Weekly Status Reports',
        agent: 'Data Analysis Agent',
        task: 'Compiles metrics, formats report, and highlights areas needing attention',
        result: 'Complete status report generated in 15 minutes instead of 2-3 hours'
      },
      {
        title: 'Program Improvement Research',
        agent: 'Research Agent + Writing Agent',
        task: 'Researches best practices, analyzes program gaps, and drafts proposal',
        result: 'Well-researched improvement proposal ready for review in 1 hour'
      },
      {
        title: 'Stakeholder Communication',
        agent: 'Writing Agent + Email Agent',
        task: 'Drafts update emails, meeting agendas, and follow-up action items',
        result: 'Professional communications ready in 30 minutes instead of 2 hours'
      }
    ],
    skills: ['Data Analysis', 'Communication', 'Research'],
    tags: ['Government', 'Non-profit', 'Healthcare']
  },
  {
    role: 'Epidemiologist',
    before: 'Manually processes disease surveillance data. Writes reports. Attends meetings. Little time for actual analysis or outbreak investigation.',
    after: 'Agents process data, generate reports, and create visualizations. Epidemiologist focuses on pattern recognition, outbreak investigation, and strategic planning.',
    impact: 'Faster outbreak detection. More thorough investigations. Better public health outcomes.',
    timeSaved: 'Est. 3-6 hours per week through automated data processing',
    scenarios: [
      {
        title: 'Surveillance Data Processing',
        agent: 'Data Processing Agent',
        task: 'Cleans datasets, runs statistical analysis, and identifies anomalies',
        result: 'Processed data and initial findings ready in 20 minutes instead of 3-4 hours'
      },
      {
        title: 'Outbreak Investigation Support',
        agent: 'Analysis Agent + Visualization Agent',
        task: 'Maps cases, identifies patterns, generates investigation timeline',
        result: 'Comprehensive investigation framework in 45 minutes'
      },
      {
        title: 'Public Health Reports',
        agent: 'Writing Agent + Data Visualization Agent',
        task: 'Drafts report narrative, creates charts and maps, formats for publication',
        result: 'Publication-ready report in 1 hour instead of half day'
      }
    ],
    skills: ['Statistical Analysis', 'Data Visualization', 'Research'],
    tags: ['Public Health', 'Research', 'Government']
  },
  {
    role: 'Policy Analyst',
    before: 'Reads hundreds of pages of legislation, research papers, and public comments. Writes policy briefs. Limited time for stakeholder engagement.',
    after: 'Agents summarize documents, identify key issues, and draft initial briefs. Analyst focuses on stakeholder conversations, political dynamics, and strategic recommendations.',
    impact: 'Better informed policies. More stakeholder input. Faster response to emerging issues.',
    timeSaved: 'Est. 4-8 hours per week saved through automated document processing',
    scenarios: [
      {
        title: 'Legislative Analysis',
        agent: 'Research Agent + Summarization Agent',
        task: 'Reads legislation, extracts key provisions, analyzes implications',
        result: '10-page summary and analysis of 200-page bill in 30 minutes'
      },
      {
        title: 'Stakeholder Comments Processing',
        agent: 'Analysis Agent',
        task: 'Analyzes hundreds of public comments, identifies themes and concerns',
        result: 'Thematic analysis complete in 1 hour instead of full day'
      },
      {
        title: 'Policy Brief Drafting',
        agent: 'Writing Agent + Research Agent',
        task: 'Drafts brief, cites supporting research, creates executive summary',
        result: 'First draft ready in 45 minutes for analyst review'
      }
    ],
    skills: ['Policy Analysis', 'Research', 'Writing'],
    tags: ['Government', 'Advocacy', 'Think Tank']
  },
  {
    role: 'Grant Writer',
    before: 'Writes 2-3 grant proposals per month. Each takes 40-60 hours. Limited capacity means turning down opportunities.',
    after: 'Agents research funders, draft proposals, and format applications. Writer focuses on strategy, relationships, and high-value customization. Can handle 4-5 proposals per month (40-60% increase).',
    impact: 'More funding secured. Better funder relationships. Organization can pursue more opportunities.',
    timeSaved: 'Est. 15-25 hours per proposal (40% reduction in writing time)',
    scenarios: [
      {
        title: 'Funder Research',
        agent: 'Research Agent',
        task: 'Identifies relevant funders, analyzes priorities, reviews past grants',
        result: 'Targeted funder list with alignment analysis in 45 minutes'
      },
      {
        title: 'Proposal Drafting',
        agent: 'Writing Agent + Content Agent',
        task: 'Drafts narrative sections, creates budget justification, formats requirements',
        result: 'Complete first draft in 3 hours instead of 20 hours'
      },
      {
        title: 'Application Assembly',
        agent: 'Formatting Agent + Review Agent',
        task: 'Formats to specifications, checks requirements, creates supporting documents',
        result: 'Submission-ready package in 2 hours with all compliance checks'
      }
    ],
    skills: ['Research', 'Writing', 'Budgeting'],
    tags: ['Non-profit', 'Education', 'Healthcare']
  },
  {
    role: 'Business Manager',
    before: 'Spends days each month on reports, budget tracking, meeting logistics, and administrative coordination. Little time for strategic business development.',
    after: 'Agents handle routine reports, track budgets automatically, coordinate schedules, and prepare meeting materials. Manager focuses on growth opportunities, customer relationships, and process improvement.',
    impact: 'Better financial oversight. Improved customer satisfaction. Sustainable business growth.',
    timeSaved: 'Est. 5-10 hours per week saved on administrative tasks',
    scenarios: [
      {
        title: 'Financial Reports',
        agent: 'Analysis Agent + Visualization Agent',
        task: 'Compiles financial data, creates charts, identifies trends and anomalies',
        result: 'Complete financial dashboard in 30 minutes instead of 4 hours'
      },
      {
        title: 'Meeting Coordination',
        agent: 'Scheduling Agent + Preparation Agent',
        task: 'Schedules meetings, prepares agendas, distributes pre-read materials',
        result: '10 meetings coordinated and prepped in 1 hour'
      },
      {
        title: 'Budget Monitoring',
        agent: 'Monitoring Agent + Alert Agent',
        task: 'Tracks expenses against budget, flags overruns, forecasts trends',
        result: 'Automated monitoring with alerts prevents budget issues'
      }
    ],
    skills: ['Financial Management', 'Operations', 'Communication'],
    tags: ['Small Business', 'Government', 'Enterprise']
  }
];

export default function RoleScenarioExplorer() {
  const [selectedRole, setSelectedRole] = useState<RoleScenario | null>(null);
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0);

  const { particleBurst } = useParticleBurst();
  const { particleHue, complementaryHue, complementLight, complementDark, cssVariables } = useComplementaryColors(75000); // 75 seconds, 2x slower

  const handleRoleSelect = (role: RoleScenario) => {
    setSelectedRole(role);
    setSelectedScenarioIdx(0);

    particleBurst({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
  };

  return (
    <div className="space-y-8" style={cssVariables as React.CSSProperties}>
      {/* Role Selection */}
      <Card className="card-lift glass border-2 hover:border-primary/30 transition-all">
        <CardHeader>
          <CardTitle className="text-2xl">Explore By Role</CardTitle>
          <CardDescription>
            Select a professional role to see how AI agents transform their daily work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roleScenarios.map((scenario) => (
              <button
                key={scenario.role}
                onClick={() => handleRoleSelect(scenario)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedRole?.role === scenario.role
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg'
                    : 'border-oklch(0.7 0.01 65) hover:border-primary hover:bg-primary/5'
                }`}
                style={{
                  borderColor: selectedRole?.role === scenario.role
                    ? undefined
                    : 'oklch(0.7 0.01 65)'
                }}
              >
                <h4 className="font-bold text-slate-800 mb-2">{scenario.role}</h4>
                <p className="text-sm text-slate-600 mb-3">{scenario.before}</p>
                <div className="flex flex-wrap gap-1">
                  {scenario.tags.slice(0, 2).map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs"
                      style={{
                        backgroundColor: `oklch(0.9 0.08 ${particleHue})`,
                        color: `oklch(0.35 0.1 ${complementDark})`
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Explorer */}
      {selectedRole && (
        <Card
          className="card-lift border-2 shadow-xl hover:shadow-2xl transition-all"
          style={{
            borderColor: `oklch(0.7 0.12 ${complementDark})`
          }}
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🎯</div>
              <div>
                <CardTitle className="text-2xl" style={{ color: `oklch(0.45 0.18 ${particleHue})` }}>
                  {selectedRole.role}
                </CardTitle>
                <CardDescription>
                  Time savings: {selectedRole.timeSaved}
                </CardDescription>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedRole.skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  style={{
                    backgroundColor: `oklch(0.85 0.12 ${complementLight})`,
                    color: `oklch(0.35 0.1 ${complementDark})`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            {/* Before/After Transformation */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div
                className="p-6 rounded-xl glass border-2"
                style={{ borderColor: `oklch(0.85 0.12 ${complementLight})` }}
              >
                <div className="flex items-center gap-2 mb-3" style={{ color: `oklch(0.55 0.2 ${complementLight})` }}>
                  <XCircle className="h-5 w-5" />
                  <h5 className="font-bold">Before: Manual Approach</h5>
                </div>
                <p className="text-slate-700">{selectedRole.before}</p>
              </div>

              <div
                className="p-6 rounded-xl glass border-2"
                style={{ borderColor: `oklch(0.85 0.12 ${particleHue})` }}
              >
                <div className="flex items-center gap-2 mb-3" style={{ color: `oklch(0.55 0.2 ${particleHue})` }}>
                  <CheckCircle2 className="h-5 w-5" />
                  <h5 className="font-bold">After: With AI Agents</h5>
                </div>
                <p className="text-slate-800 font-medium">{selectedRole.after}</p>
              </div>
            </div>

            {/* Impact Statement */}
            <Card
              style={{
                background: `oklch(0.95 0.12 ${complementaryHue} / 15%)`,
                borderColor: `oklch(0.75 0.1 ${complementaryHue})`
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6" style={{ color: `oklch(0.55 0.18 ${complementaryHue})` }} />
                  <CardTitle className="text-xl" style={{ color: `oklch(0.45 0.18 ${complementaryHue})` }}>
                    Impact
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{selectedRole.impact}</p>
              </CardContent>
            </Card>

            {/* Scenario Timeline */}
            <div className="mt-8">
              <h6 className="text-lg font-semibold mb-4" style={{ color: `oklch(0.45 0.15 ${particleHue})` }}>
                AI Agent Workflow Examples
              </h6>

              {/* Scenario Selector Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
                {selectedRole.scenarios.map((scenario, idx) => (
                  <Button
                    key={idx}
                    onClick={() => setSelectedScenarioIdx(idx)}
                    variant={selectedScenarioIdx === idx ? 'default' : 'outline'}
                    className="flex-shrink-0"
                    style={{
                      background: selectedScenarioIdx === idx
                        ? `oklch(0.65 0.18 ${particleHue})`
                        : 'oklch(1 0 0 / 60%)'
                    }}
                  >
                    {scenario.title}
                  </Button>
                ))}
              </div>

              {/* Selected Scenario Detail */}
              {selectedRole.scenarios[selectedScenarioIdx] && (
                <Card
                  className="border-2"
                  style={{
                    borderColor: `oklch(0.75 0.1 ${complementLight})`
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>
                      {selectedRole.scenarios[selectedScenarioIdx].title}
                    </CardTitle>
                    <CardDescription>
                      AI Agent: {selectedRole.scenarios[selectedScenarioIdx].agent}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl" style={{ color: `oklch(0.55 0.2 ${particleHue})` }}>📝</div>
                        <div>
                          <h6 className="font-semibold text-slate-800">Task</h6>
                          <p className="text-sm text-slate-600">
                            {selectedRole.scenarios[selectedScenarioIdx].task}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <ArrowRight className="h-8 w-8" style={{ color: `oklch(0.55 0.2 ${complementaryHue})` }} />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-2xl" style={{ color: `oklch(0.55 0.2 ${complementLight})` }}>✅</div>
                        <div>
                          <h6 className="font-semibold text-slate-800">Result</h6>
                          <p className="text-sm text-slate-600">
                            {selectedRole.scenarios[selectedScenarioIdx].result}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 rounded-lg" style={{ background: `oklch(0.95 0.08 ${particleHue})` }}>
                      <h6 className="font-semibold mb-2" style={{ color: `oklch(0.45 0.1 ${particleHue})` }}>
                        Key Benefits
                      </h6>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          ⚡ Focus on strategy rather than execution
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          ⚡ Higher quality work with AI assistance
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                          ⚡ More time for stakeholder engagement
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Efficiency Metrics */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card
                  style={{
                    background: `oklch(0.95 0.1 ${particleHue})`,
                    borderColor: `oklch(0.75 0.1 ${particleHue})`
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2" style={{ color: `oklch(0.45 0.1 ${particleHue})` }}>
                      <TrendingUp className="h-4 w-4" />
                      WORKLOAD CAPACITY
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-2xl font-bold" style={{ color: `oklch(0.45 0.1 ${particleHue})` }}>
                      3x
                    </span>
                    <p className="text-sm text-slate-600 mt-1">
                      Can handle 3x more strategic initiatives
                    </p>
                  </CardContent>
                </Card>

                <Card
                  style={{
                    background: `oklch(0.95 0.1 ${complementaryHue})`,
                    borderColor: `oklch(0.75 0.1 ${complementaryHue})`
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2" style={{ color: `oklch(0.45 0.1 ${complementaryHue})` }}>
                      ✨ QUALITY
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-2xl font-bold" style={{ color: `oklch(0.45 0.1 ${complementaryHue})` }}>
                      40%
                    </span>
                    <p className="text-sm text-slate-600 mt-1">
                      Improvement in output quality with AI assistance
                    </p>
                  </CardContent>
                </Card>

                <Card
                  style={{
                    background: `oklch(0.95 0.1 ${complementLight})`,
                    borderColor: `oklch(0.75 0.1 ${complementLight})`
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>
                      ⚡ SPEED
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-2xl font-bold" style={{ color: `oklch(0.45 0.1 ${complementLight})` }}>
                      75%
                    </span>
                    <p className="text-sm text-slate-600 mt-1">
                      Faster task completion with AI agents
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
