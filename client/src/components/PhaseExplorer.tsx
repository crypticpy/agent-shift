import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User, Users, Network, TrendingUp, Clock, Target, CheckCircle2, ArrowRight
} from 'lucide-react';

interface Phase {
  id: number;
  name: string;
  title: string;
  icon: typeof User;
  mindset: string;
  pattern: string;
  timeSavings: string;
  indicators: string[];
  growthPath: string;
  color: string;
}

const phases: Phase[] = [
  {
    id: 1,
    name: "doer",
    title: "Phase 1: The Doer",
    icon: User,
    mindset: "I need to do this work myself to ensure quality.",
    pattern: "Working on a task → get stuck → ask AI for help → implement suggestion → continue working. You're the executor using AI as an assistant.",
    timeSavings: "10-15%",
    indicators: [
      "Task completion rate",
      "Hours worked",
      "Individual output volume"
    ],
    growthPath: "Start delegating ONE complete routine task to an AI agent this week. Don't help mid-task—design the workflow upfront, then let it run.",
    color: "slate"
  },
  {
    id: 2,
    name: "delegator",
    title: "Phase 2: The Delegator",
    icon: Users,
    mindset: "I can assign work to AI agents like I would to team members.",
    pattern: "Break project into tasks → assign each task to AI or person → review outputs → integrate results. You're coordinating work distribution.",
    timeSavings: "30-45%",
    indicators: [
      "Tasks delegated",
      "Work distributed",
      "Review cycles"
    ],
    growthPath: "Design your first multi-agent workflow where agents coordinate with each other, not through you. Learn hierarchical delegation patterns.",
    color: "amber"
  },
  {
    id: 3,
    name: "orchestrator",
    title: "Phase 3: The Orchestrator",
    icon: Network,
    mindset: "I design systems where specialized agents execute workflows end-to-end.",
    pattern: "Define outcome and constraints → design agent workflow with clear roles → implement context engineering → validate system output → measure outcome velocity.",
    timeSavings: "60-85%",
    indicators: [
      "Capacity hours released",
      "Outcome velocity (time from decision to result)",
      "Escalation rate (how often agents need human intervention)",
      "Decision latency"
    ],
    growthPath: "M-shaped supervisors (broad generalists orchestrating across domains) and T-shaped experts (deep specialists who architect workflows in their domain).",
    color: "orange"
  }
];

export default function PhaseExplorer() {
  const [activePhase, setActivePhase] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const currentPhase = phases[activePhase];
  const Icon = currentPhase.icon;

  const getColorClasses = (color: string) => {
    const colors = {
      slate: {
        bg: "bg-slate-50",
        border: "border-slate-300",
        icon: "bg-slate-100 text-slate-600",
        badge: "bg-slate-500",
        text: "text-slate-900"
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-300",
        icon: "bg-amber-100 text-amber-600",
        badge: "bg-amber-500",
        text: "text-amber-900"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-500",
        text: "text-orange-900"
      }
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const colors = getColorClasses(currentPhase.color);

  return (
    <div className="space-y-6">
      {!showQuiz ? (
        <>
          {/* Phase Tabs */}
          <div className="flex gap-2 flex-wrap">
            {phases.map((phase, index) => (
              <Button
                key={phase.id}
                variant={activePhase === index ? "default" : "outline"}
                onClick={() => setActivePhase(index)}
                className={activePhase === index ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {phase.title}
              </Button>
            ))}
          </div>

          {/* Phase Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`border-2 ${colors.border} shadow-lg`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`h-14 w-14 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{currentPhase.title}</CardTitle>
                      <CardDescription className="text-base italic">
                        "{currentPhase.mindset}"
                      </CardDescription>
                    </div>
                  </div>

                  {/* Time Savings Metric */}
                  <div className={`${colors.bg} p-4 rounded-lg mt-4 border-l-4 ${colors.border}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-lg">Time Savings: {currentPhase.timeSavings}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Common Pattern */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-orange-500" />
                      Common Pattern
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{currentPhase.pattern}</p>
                  </div>

                  {/* Performance Indicators */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      Performance Indicators
                    </h4>
                    <ul className="space-y-2">
                      {currentPhase.indicators.map((indicator, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Growth Path */}
                  <div className={`${colors.bg} p-4 rounded-lg border-l-4 ${colors.border}`}>
                    <h4 className="font-semibold text-lg mb-2">Your Growth Path</h4>
                    <p className="text-slate-700 leading-relaxed">{currentPhase.growthPath}</p>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                      disabled={activePhase === 0}
                    >
                      Previous Phase
                    </Button>
                    {activePhase < phases.length - 1 ? (
                      <Button
                        onClick={() => setActivePhase(activePhase + 1)}
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Next Phase
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setShowQuiz(true)}
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Which Phase Are You?
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        /* Self-ID Quiz */
        <Card className="border-2 border-orange-300 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Which Phase Are You In?</CardTitle>
            <CardDescription>
              Think about a routine task you do weekly. How do you currently approach it?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {phases.map((phase) => {
              const PhaseIcon = phase.icon;
              const phaseColors = getColorClasses(phase.color);
              const isSelected = quizAnswer === phase.name;

              return (
                <button
                  key={phase.id}
                  onClick={() => setQuizAnswer(phase.name)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${phaseColors.border} ${phaseColors.bg} shadow-md`
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 ${phaseColors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <PhaseIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{phase.title}</h4>
                      <p className="text-sm text-slate-600 italic">"{phase.mindset}"</p>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}

            {quizAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-l-4 border-green-400 p-4 rounded"
              >
                <p className="font-semibold text-green-900 mb-2">Great self-awareness!</p>
                <p className="text-green-800 text-sm">
                  {quizAnswer === "doer" && "You're building the foundation. Start with one complete task delegation to move toward the Delegator phase."}
                  {quizAnswer === "delegator" && "You're making progress! Design your first multi-agent workflow to level up to Orchestrator."}
                  {quizAnswer === "orchestrator" && "You're thinking in systems! Focus on measuring outcome velocity and refining your orchestration patterns."}
                </p>
              </motion.div>
            )}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowQuiz(false)} className="flex-1">
                Review Phases
              </Button>
              {quizAnswer && (
                <Button
                  onClick={() => {
                    setShowQuiz(false);
                    const targetPhase = phases.findIndex(p => p.name === quizAnswer);
                    setActivePhase(targetPhase);
                  }}
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                >
                  See Your Phase Details
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
