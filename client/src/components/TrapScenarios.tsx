import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle, CheckCircle2, XCircle, TrendingUp, ArrowRight, RotateCcw
} from 'lucide-react';

interface Choice {
  text: string;
  isTrap: boolean;
  explanation: string;
  impact: string;
}

interface Scenario {
  id: number;
  title: string;
  situation: string;
  choices: Choice[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Context Overload",
    situation: "You're setting up an AI agent to analyze quarterly sales data and create visualizations. The agent needs the sales CSV file.",
    choices: [
      {
        text: "Give the agent your entire project folder including brand guidelines, meeting notes, and all historical data 'just in case it needs context'",
        isTrap: true,
        explanation: "This is Over-Prompting (Context Overload). You're overwhelming the agent with irrelevant information.",
        impact: "Result: Agent gets confused, response quality drops, execution slows down. The agent doesn't need your brand guidelines to analyze sales data."
      },
      {
        text: "Give the agent only the sales CSV file and specific instructions about what analysis you need",
        isTrap: false,
        explanation: "Perfect! This is proper context engineering. Each agent gets only its required inputs.",
        impact: "Result: Fast execution, clear focus, high-quality analysis. The agent can concentrate on the actual task without distraction."
      }
    ]
  },
  {
    id: 2,
    title: "Micro-Management Trap",
    situation: "You've asked an AI agent to write a competitive analysis report. It's been running for 5 minutes.",
    choices: [
      {
        text: "Check in every 2 minutes, add new instructions, try to 'help' the agent by feeding it more information mid-task",
        isTrap: true,
        explanation: "This is Micro-Managing Agents. You're preventing the agent from completing its workflow.",
        impact: "Result: Interrupted workflow, inconsistent output, wasted your time. You can't focus on other work because you're babysitting."
      },
      {
        text: "Let the agent complete the task, then review the output and provide feedback for improvements",
        isTrap: false,
        explanation: "Excellent! Design complete workflows upfront, then let agents execute without interruption.",
        impact: "Result: Agent completes work efficiently, you're free to focus elsewhere, better final output quality."
      }
    ]
  },
  {
    id: 3,
    title: "Single-Agent Thinking",
    situation: "You need to: research 10 competitors, analyze their pricing, summarize findings, and create a presentation. You open ChatGPT.",
    choices: [
      {
        text: "Ask ChatGPT to do everything in one long conversation thread",
        isTrap: true,
        explanation: "This is Single-Agent Thinking. You're using one general-purpose AI for specialized tasks.",
        impact: "Result: Context gets muddled, quality decreases over long threads, harder to iterate on specific parts."
      },
      {
        text: "Use Perplexity for research, ChatGPT for analysis, Beautiful.ai for presentation—specialized agents with clear roles",
        isTrap: false,
        explanation: "Perfect! Multi-agent pattern with focused expertise for each phase of work.",
        impact: "Result: Higher quality outputs, better scalability, clearer workflow architecture. Each agent excels at its specialty."
      }
    ]
  },
  {
    id: 4,
    title: "Wrong Metrics",
    situation: "You've been using AI agents for a month. Time to measure success. What do you track?",
    choices: [
      {
        text: "Count how many AI prompts you sent and how many tasks you completed this month",
        isTrap: true,
        explanation: "This is Task-Based Metrics. You're measuring busyness, not business results.",
        impact: "Result: You optimize for prompt volume instead of outcomes. More tasks ≠ more value. Focus shifts to throughput, not impact."
      },
      {
        text: "Track 'time from decision to deliverable', 'hours freed for strategic work', and 'agent tasks needing human intervention'",
        isTrap: false,
        explanation: "Excellent! These are outcome-based KPIs: outcome velocity, capacity released, and escalation rate.",
        impact: "Result: You optimize for what matters—speed to results, freed capacity for high-value work, and system reliability."
      }
    ]
  },
  {
    id: 5,
    title: "Quality Control Paralysis",
    situation: "Your AI agent just generated 200 social media posts for the next quarter. How do you ensure quality?",
    choices: [
      {
        text: "Read through all 200 posts carefully, editing each one to make sure they're perfect",
        isTrap: true,
        explanation: "This is Manual Quality Control. You can't scale if you review everything in detail.",
        impact: "Result: Orchestration becomes a bottleneck. You're back to doing the work yourself. Defeats the purpose of automation."
      },
      {
        text: "Review 20 posts thoroughly to validate the agent's approach, then spot-check a few more. Trust the system for the rest.",
        isTrap: false,
        explanation: "Perfect! Sample-based validation. You validate the analytical framework, not every individual output.",
        impact: "Result: Allows orchestration at scale. You ensure quality of the system, not micromanaging every item."
      }
    ]
  },
  {
    id: 6,
    title: "Reactive vs. Reusable",
    situation: "You just successfully orchestrated a competitive research workflow using 4 different AI tools. The project is done.",
    choices: [
      {
        text: "Move on to the next project. You'll figure out the workflow again when you need competitive research next time.",
        isTrap: true,
        explanation: "This is Reactive Orchestration. You're rebuilding workflows instead of refining patterns.",
        impact: "Result: Every project starts from scratch. No compound learning. You never build a strategic asset of proven workflows."
      },
      {
        text: "Document the workflow as a template: tools used, sequence, inputs needed, validation points. Save it as 'Competitive Research Workflow v1'",
        isTrap: false,
        explanation: "Excellent! You're building reusable orchestration patterns. Each workflow improves with use.",
        impact: "Result: Your orchestration library becomes a strategic asset. Next time is faster and better. Workflows compound over time."
      }
    ]
  }
];

export default function TrapScenarios() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<Set<number>>(new Set());

  const scenario = scenarios[currentScenario];
  const selectedChoiceData = selectedChoice !== null ? scenario.choices[selectedChoice] : null;

  const handleChoiceSelect = (choiceIndex: number) => {
    setSelectedChoice(choiceIndex);
    setShowFeedback(true);
    setCompletedScenarios(new Set([...completedScenarios, scenario.id]));
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentScenario > 0) {
      setCurrentScenario(currentScenario - 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentScenario(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setCompletedScenarios(new Set());
  };

  const progress = completedScenarios.size;
  const total = scenarios.length;
  const isComplete = progress === total;

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Avoid Common Traps</h3>
          <p className="text-sm text-slate-600">
            Practice identifying good orchestration vs. common mistakes
          </p>
        </div>
        <Badge variant="outline" className="text-base px-4 py-2">
          Scenario {currentScenario + 1} / {total}
        </Badge>
      </div>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="bg-slate-100 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
      )}

      {/* Scenario Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScenario}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-orange-300 shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {scenario.situation}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="font-semibold text-slate-900">What would you do?</p>

              {/* Choices */}
              <div className="space-y-3">
                {scenario.choices.map((choice, index) => {
                  const isSelected = selectedChoice === index;
                  const showResult = showFeedback && isSelected;

                  return (
                    <button
                      key={index}
                      onClick={() => !showFeedback && handleChoiceSelect(index)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showResult
                          ? choice.isTrap
                            ? 'border-red-300 bg-red-50'
                            : 'border-green-300 bg-green-50'
                          : isSelected
                          ? 'border-orange-400 bg-orange-50'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {showResult ? (
                            choice.isTrap ? (
                              <XCircle className="h-6 w-6 text-red-500" />
                            ) : (
                              <CheckCircle2 className="h-6 w-6 text-green-500" />
                            )
                          ) : (
                            <div className="h-6 w-6 border-2 border-slate-300 rounded-full" />
                          )}
                        </div>
                        <p className="text-slate-800 leading-relaxed flex-1">{choice.text}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {showFeedback && selectedChoiceData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    selectedChoiceData.isTrap
                      ? 'bg-red-50 border-red-400'
                      : 'bg-green-50 border-green-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div>
                      <p className={`font-semibold mb-1 ${
                        selectedChoiceData.isTrap ? 'text-red-900' : 'text-green-900'
                      }`}>
                        {selectedChoiceData.isTrap ? '⚠️ That\'s a Trap!' : '✅ Great Orchestration!'}
                      </p>
                      <p className={`text-sm ${
                        selectedChoiceData.isTrap ? 'text-red-800' : 'text-green-800'
                      }`}>
                        {selectedChoiceData.explanation}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-current opacity-50">
                      <p className={`text-sm font-medium mb-1 ${
                        selectedChoiceData.isTrap ? 'text-red-900' : 'text-green-900'
                      }`}>
                        Impact:
                      </p>
                      <p className={`text-sm ${
                        selectedChoiceData.isTrap ? 'text-red-800' : 'text-green-800'
                      }`}>
                        {selectedChoiceData.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 gap-3">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentScenario === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentScenario < scenarios.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!showFeedback}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
                  >
                    Next Scenario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleReset}
                    disabled={!showFeedback}
                    variant="outline"
                    className="flex-1"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Start Over
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Completion Message */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">You've Completed All Scenarios!</h3>
              <p className="mb-3 opacity-95">
                You can now recognize common orchestration traps and know how to avoid them. This awareness will save you countless hours of frustration.
              </p>
              <div className="text-sm opacity-90">
                <strong>Key Takeaway:</strong> Good orchestration means designing upfront, trusting your systems, and measuring outcomes—not micromanaging tasks.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
