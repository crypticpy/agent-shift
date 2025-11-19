import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Workflow, Shield, Network, Zap, CheckCircle2, BarChart3, ChevronDown, ChevronUp, Lightbulb
} from 'lucide-react';

interface Technique {
  id: number;
  name: string;
  icon: typeof Workflow;
  shortDesc: string;
  fullDescription: string;
  example: string;
  color: string;
}

const techniques: Technique[] = [
  {
    id: 1,
    name: "Task Decomposition",
    icon: Workflow,
    shortDesc: "Break complex work into a hierarchy where agents delegate to each other",
    fullDescription: "Break complex work into a hierarchy where a parent agent delegates to specialized child agents. Each agent has a clear scope.",
    example: "Report generation → [Data Agent → pulls raw data] → [Analysis Agent → finds patterns] → [Writing Agent → drafts narrative] → [You → add strategic context]",
    color: "orange"
  },
  {
    id: 2,
    name: "Context Engineering",
    icon: Shield,
    shortDesc: "Give each agent exactly what it needs—nothing more, nothing less",
    fullDescription: "Give each agent exactly what it needs—nothing more, nothing less. Scoped context prevents confusion and improves quality.",
    example: "Bad: Give all project documents to every agent. Good: Data Agent gets API credentials only; Analysis Agent gets normalized data only; Writing Agent gets findings only.",
    color: "amber"
  },
  {
    id: 3,
    name: "Delegation Hierarchy",
    icon: Network,
    shortDesc: "Use centralized coordination for complex workflows",
    fullDescription: "Use centralized coordination for complex workflows. A supervisor agent assigns work to specialist agents and integrates results.",
    example: "Customer research project: Supervisor Agent → [Survey Analysis Agent, Sentiment Agent, Pattern Recognition Agent] → Supervisor integrates insights → You validate strategy.",
    color: "teal"
  },
  {
    id: 4,
    name: "Parallel Processing",
    icon: Zap,
    shortDesc: "Identify independent tasks that can run simultaneously",
    fullDescription: "Identify independent tasks that can run simultaneously. Reduce sequential dependencies.",
    example: "Don't: Pull data from 5 systems sequentially (50 min). Do: 5 Data Agents pull in parallel (10 min). Time saved: 40 minutes.",
    color: "orange"
  },
  {
    id: 5,
    name: "Validation Points",
    icon: CheckCircle2,
    shortDesc: "Design human checkpoints at strategic decision points",
    fullDescription: "Design human checkpoints at strategic decision points, not task-completion points.",
    example: "Don't: Review every chart the agent creates. Do: Validate the analysis framework before agents start, then review final insights.",
    color: "green"
  },
  {
    id: 6,
    name: "Outcome-Based KPIs",
    icon: BarChart3,
    shortDesc: "Measure capacity released and outcome velocity, not task completion",
    fullDescription: "Measure capacity released and outcome velocity, not task completion.",
    example: "Track: 'Time from decision to deliverable' (outcome velocity), 'Hours freed for strategic work' (capacity released), 'Agent tasks requiring human intervention' (escalation rate).",
    color: "amber"
  }
];

export default function TechniqueCards() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [learnedCards, setLearnedCards] = useState<Set<number>>(() => {
    // Load from cookie
    const saved = document.cookie
      .split('; ')
      .find(row => row.startsWith('learnedTechniques='));
    if (saved) {
      try {
        return new Set(JSON.parse(decodeURIComponent(saved.split('=')[1])));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });

  const toggleCard = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const toggleLearned = (id: number) => {
    const newLearned = new Set(learnedCards);
    if (newLearned.has(id)) {
      newLearned.delete(id);
    } else {
      newLearned.add(id);
    }
    setLearnedCards(newLearned);

    // Save to cookie (expires in 30 days)
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `learnedTechniques=${encodeURIComponent(JSON.stringify(Array.from(newLearned)))}; expires=${expires}; path=/`;
  };

  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        icon: "bg-orange-100 text-orange-600",
        hover: "hover:border-orange-400"
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-300",
        icon: "bg-amber-100 text-amber-600",
        hover: "hover:border-amber-400"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-300",
        icon: "bg-teal-100 text-teal-600",
        hover: "hover:border-teal-400"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-300",
        icon: "bg-green-100 text-green-600",
        hover: "hover:border-green-400"
      }
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  const learnedCount = learnedCards.size;
  const totalCount = techniques.length;

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      {learnedCount > 0 && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-900">
              Progress: {learnedCount}/{totalCount} techniques explored
            </span>
          </div>
          <p className="text-sm text-green-800">
            {learnedCount === totalCount
              ? "Excellent! You've explored all core orchestration techniques. Ready to apply them?"
              : "Keep going! Click each card to learn more, then mark as learned."}
          </p>
        </div>
      )}

      {/* Technique Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techniques.map((technique) => {
          const Icon = technique.icon;
          const colors = getColorClasses(technique.color);
          const isExpanded = expandedCards.has(technique.id);
          const isLearned = learnedCards.has(technique.id);

          return (
            <Card
              key={technique.id}
              className={`border-2 ${colors.border} ${colors.hover} cursor-pointer transition-all ${
                isLearned ? 'opacity-75' : 'shadow-md'
              }`}
            >
              <CardContent className="p-5">
                {/* Card Header - Always Visible */}
                <div
                  onClick={() => toggleCard(technique.id)}
                  className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left"
                >
                  <div className={`h-12 w-12 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-lg text-slate-900">{technique.name}</h4>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{technique.shortDesc}</p>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                        {/* Full Description */}
                        <div>
                          <p className="text-slate-700 leading-relaxed">
                            {technique.fullDescription}
                          </p>
                        </div>

                        {/* Example */}
                        <div className={`${colors.bg} p-3 rounded-lg border-l-4 ${colors.border}`}>
                          <div className="flex items-start gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="font-semibold text-sm text-slate-900">Example:</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {technique.example}
                          </p>
                        </div>

                        {/* Mark as Learned Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLearned(technique.id);
                          }}
                          className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                            isLearned
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                          }`}
                        >
                          {isLearned ? (
                            <span className="flex items-center justify-center gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              Learned
                            </span>
                          ) : (
                            "Mark as Learned"
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      {learnedCount === totalCount && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">Ready to Apply These Techniques?</h3>
          <p className="mb-4 opacity-95">
            You've learned all 6 core orchestration techniques. Now it's time to put them into practice with your first workflow.
          </p>
          <div className="text-sm opacity-90">
            💡 Scroll down to the "Your First Week as an Orchestrator" section to start applying these techniques.
          </div>
        </motion.div>
      )}
    </div>
  );
}
