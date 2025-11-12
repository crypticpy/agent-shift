import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, CheckCircle2, Circle, Download, Clock, Target, TrendingUp
} from 'lucide-react';

interface Task {
  id: string;
  description: string;
}

interface Week {
  id: number;
  title: string;
  goal: string;
  tools: string;
  tasks: Task[];
  milestone: string;
  outcome: string;
  color: string;
}

const weeks: Week[] = [
  {
    id: 1,
    title: "Week 1: The Doer Audit",
    goal: "Identify all routine tasks you currently do manually",
    tools: "Time tracking, task documentation",
    tasks: [
      { id: "w1t1", description: "Track every recurring task this week" },
      { id: "w1t2", description: "Create a list with estimated time per task" },
      { id: "w1t3", description: "Note frequency (daily/weekly/monthly) for each task" },
      { id: "w1t4", description: "Identify top 3 time-consuming routine tasks" }
    ],
    milestone: "Complete task inventory with time estimates",
    outcome: "Clear visibility into where your time goes. You now know what to orchestrate first.",
    color: "slate"
  },
  {
    id: 2,
    title: "Week 2: First Single-Agent Workflows",
    goal: "Delegate one complete task to an AI agent without mid-task intervention",
    tools: "AI agent platform, workflow documentation",
    tasks: [
      { id: "w2t1", description: "Choose your most time-consuming routine task" },
      { id: "w2t2", description: "Design the workflow: inputs, process, outputs" },
      { id: "w2t3", description: "Implement with a single agent" },
      { id: "w2t4", description: "Let it run without helping - review the output" },
      { id: "w2t5", description: "Measure time saved vs. manual approach" }
    ],
    milestone: "Successfully complete one routine task via agent delegation",
    outcome: "First tangible capacity release. Proof that AI can handle complete tasks independently.",
    color: "amber"
  },
  {
    id: 3,
    title: "Week 3: Multi-Agent Orchestration",
    goal: "Design a hierarchical workflow where specialized agents coordinate without constant human intervention",
    tools: "Multi-agent platform, context engineering framework",
    tasks: [
      { id: "w3t1", description: "Choose a more complex task (e.g., research project or content creation)" },
      { id: "w3t2", description: "Design a multi-agent workflow with a coordinator" },
      { id: "w3t3", description: "Implement context engineering—each agent gets scoped inputs" },
      { id: "w3t4", description: "Run the workflow and observe agent coordination" },
      { id: "w3t5", description: "Measure outcome velocity (decision to result time)" }
    ],
    milestone: "Execute a multi-agent workflow successfully",
    outcome: "Understanding of delegation hierarchies. Ability to orchestrate complex workflows.",
    color: "teal"
  },
  {
    id: 4,
    title: "Week 4: System Orchestrator",
    goal: "Measure impact with new KPIs and create reusable workflow templates",
    tools: "Template library, metrics dashboard",
    tasks: [
      { id: "w4t1", description: "Calculate total capacity released this month (hours saved)" },
      { id: "w4t2", description: "Measure outcome velocity for orchestrated workflows" },
      { id: "w4t3", description: "Document your top 2-3 workflows as reusable templates" },
      { id: "w4t4", description: "Identify next workflows to orchestrate" },
      { id: "w4t5", description: "Share one workflow template with a colleague" }
    ],
    milestone: "Documented orchestration templates with metrics",
    outcome: "You're no longer a doer or delegator—you're an orchestrator with measurable business impact.",
    color: "orange"
  }
];

export default function WeeklyProgressTracker() {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(() => {
    // Load from cookie
    const saved = document.cookie
      .split('; ')
      .find(row => row.startsWith('weeklyProgress='));
    if (saved) {
      try {
        return new Set(JSON.parse(decodeURIComponent(saved.split('=')[1])));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });

  useEffect(() => {
    // Save to cookie (expires in 90 days)
    const expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `weeklyProgress=${encodeURIComponent(JSON.stringify(Array.from(completedTasks)))}; expires=${expires}; path=/`;
  }, [completedTasks]);

  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getWeekProgress = (week: Week) => {
    const completed = week.tasks.filter(task => completedTasks.has(task.id)).length;
    const total = week.tasks.length;
    return { completed, total, percentage: (completed / total) * 100 };
  };

  const totalTasks = weeks.reduce((sum, week) => sum + week.tasks.length, 0);
  const totalCompleted = Array.from(completedTasks).length;
  const overallProgress = (totalCompleted / totalTasks) * 100;

  const downloadActionPlan = () => {
    const content = weeks.map(week => {
      const progress = getWeekProgress(week);
      return `${week.title}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal: ${week.goal}
Tools: ${week.tools}
Progress: ${progress.completed}/${progress.total} tasks completed

Tasks:
${week.tasks.map(task => `${completedTasks.has(task.id) ? '✓' : '○'} ${task.description}`).join('\n')}

Milestone: ${week.milestone}
Expected Outcome: ${week.outcome}

`;
    }).join('\n');

    const fullContent = `4-WEEK ORCHESTRATOR TRANSFORMATION TIMELINE
Generated: ${new Date().toLocaleDateString()}
Overall Progress: ${totalCompleted}/${totalTasks} tasks (${overallProgress.toFixed(0)}%)

${content}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by Agent Shift - Your AI Orchestration Learning Platform
`;

    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orchestrator-action-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      slate: {
        bg: "bg-slate-50",
        border: "border-slate-300",
        icon: "bg-slate-100 text-slate-600",
        progress: "bg-slate-500"
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-300",
        icon: "bg-amber-100 text-amber-600",
        progress: "bg-amber-500"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-300",
        icon: "bg-teal-100 text-teal-600",
        progress: "bg-teal-500"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        icon: "bg-orange-100 text-orange-600",
        progress: "bg-orange-500"
      }
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  return (
    <div className="space-y-6">
      {/* Overall Progress Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Your 4-Week Transformation</h3>
          <p className="text-sm text-slate-600">
            Track your journey from Doer to Orchestrator
          </p>
        </div>
        <Button
          onClick={downloadActionPlan}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Action Plan
        </Button>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-slate-100 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">Overall Progress</span>
          <span className="text-sm font-semibold text-slate-900">{totalCompleted}/{totalTasks} tasks</span>
        </div>
        <div className="bg-slate-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full"
          />
        </div>
        {overallProgress === 100 && (
          <p className="text-sm text-green-600 font-medium mt-2">
            🎉 Congratulations! You've completed your transformation to Orchestrator!
          </p>
        )}
      </div>

      {/* Weekly Cards */}
      <div className="space-y-4">
        {weeks.map((week) => {
          const progress = getWeekProgress(week);
          const colors = getColorClasses(week.color);
          const isComplete = progress.completed === progress.total;

          return (
            <Card key={week.id} className={`border-2 ${colors.border} ${isComplete ? 'shadow-md' : ''}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <CardTitle className="text-xl">{week.title}</CardTitle>
                      <Badge
                        variant={isComplete ? "default" : "outline"}
                        className={isComplete ? "bg-green-500" : ""}
                      >
                        {progress.completed}/{progress.total}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      <strong>Goal:</strong> {week.goal}
                    </CardDescription>
                    <div className="mt-2 text-sm text-slate-600">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Tools: {week.tools}
                    </div>
                  </div>
                </div>

                {/* Week Progress Bar */}
                <div className="mt-4 bg-slate-100 rounded-full h-2">
                  <div
                    className={`${colors.progress} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tasks Checklist */}
                <div className="space-y-2">
                  {week.tasks.map((task) => {
                    const isCompleted = completedTasks.has(task.id);
                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300" />
                          )}
                        </div>
                        <span className={`flex-1 ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
                          {task.description}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Milestone & Outcome */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`${colors.bg} p-4 rounded-lg border-l-4 ${colors.border} space-y-3`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-sm text-slate-900">Milestone Achieved</span>
                      </div>
                      <p className="text-sm text-slate-700">{week.milestone}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-sm text-slate-900">Expected Outcome</span>
                      </div>
                      <p className="text-sm text-slate-700">{week.outcome}</p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Completion Message */}
      {overallProgress === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Transformation Complete!</h3>
              <p className="mb-3 opacity-95">
                You've completed all 4 weeks of the orchestrator transformation. You now have the skills, workflows, and mindset to operate as a true orchestrator.
              </p>
              <p className="text-sm opacity-90">
                <strong>Next Step:</strong> Continue refining your orchestration templates, share them with colleagues, and measure your ongoing impact with outcome-based KPIs.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
