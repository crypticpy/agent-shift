import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Download, Copy } from "lucide-react";

interface Task {
  id: string;
  text: string;
  description?: string;
}

interface Phase {
  id: string;
  title: string;
  duration: string;
  icon: string;
  color: string;
  description: string;
  tasks: Task[];
}

const phases: Phase[] = [
  {
    id: "assessment",
    title: "Assessment Phase",
    duration: "Week 1-2",
    icon: "🔍",
    color: "blue",
    description: "Understand your current state and identify opportunities",
    tasks: [
      { id: "audit", text: "Audit current tools and usage patterns", description: "Document what tools you use, who uses them, and how much time is spent" },
      { id: "survey", text: "Survey team needs by role", description: "Ask different roles (analysts, writers, managers) what tasks consume their time" },
      { id: "pain-points", text: "Identify pain points and gaps", description: "Where do current tools fall short? What tasks are purely manual?" },
      { id: "time-tracking", text: "Calculate current time spent on tasks", description: "Use the ROI calculator to quantify time spent on routine work" },
      { id: "compliance", text: "Review security/compliance requirements", description: "Document must-have certifications (FedRAMP, HIPAA, SOC 2)" }
    ]
  },
  {
    id: "selection",
    title: "Selection Phase",
    duration: "Week 3-4",
    icon: "🎯",
    color: "green",
    description: "Choose tools and validate through pilot testing",
    tasks: [
      { id: "framework", text: "Use Decision Framework from this page", description: "Complete the quiz above to get platform/best-of-breed/hybrid recommendation" },
      { id: "pilot-users", text: "Select 3-5 pilot users per tool", description: "Choose enthusiastic early adopters who represent different use cases" },
      { id: "trials", text: "Start free trials for 3-4 candidate tools", description: "Most tools offer 14-30 day trials - test multiple simultaneously" },
      { id: "measure", text: "Measure actual time savings during trials", description: "Track before/after time for same tasks - quantify the improvement" },
      { id: "feedback", text: "Collect user feedback and preferences", description: "Daily check-ins with pilot users - what works, what doesn't" },
      { id: "integration", text: "Evaluate integration requirements", description: "Test APIs, Zapier connections, SSO setup before committing" }
    ]
  },
  {
    id: "implementation",
    title: "Implementation Phase",
    duration: "Month 2",
    icon: "⚙️",
    color: "purple",
    description: "Set up tools for team-wide deployment",
    tasks: [
      { id: "pricing", text: "Negotiate enterprise pricing (if needed)", description: "For 50+ users, contact sales for volume discounts (20-40% off)" },
      { id: "sso", text: "Set up SSO and user provisioning", description: "Configure Okta, Azure AD, or Google Workspace SSO for all tools" },
      { id: "integrations", text: "Configure integrations and workflows", description: "Set up Zapier/Make workflows, API connections, and automation" },
      { id: "docs", text: "Create internal documentation", description: "1-page quick start guides, best practices, and FAQs for each tool" },
      { id: "champions", text: "Train power users/champions", description: "2-hour session with early adopters who will help onboard others" },
      { id: "support", text: "Establish internal support process", description: "Create Slack channel or Teams group for questions and tips" }
    ]
  },
  {
    id: "scale",
    title: "Scale Phase",
    duration: "Month 3+",
    icon: "📈",
    color: "orange",
    description: "Roll out to full team and optimize",
    tasks: [
      { id: "rollout", text: "Roll out to full team in waves", description: "Deploy by department or role - don't do everyone at once" },
      { id: "metrics", text: "Monitor usage and adoption metrics", description: "Track: % of users active, hours saved per week, user satisfaction" },
      { id: "iterate", text: "Iterate based on feedback", description: "Monthly reviews - what's working? What needs adjustment?" },
      { id: "optimize", text: "Optimize tool stack (add/remove)", description: "Remove tools with <50% adoption, add tools users request" },
      { id: "leadership", text: "Share results with leadership", description: "Quarterly reports with ROI achieved, time savings, user testimonials" },
      { id: "expand", text: "Expand to additional use cases", description: "Once core tools are adopted, explore advanced workflows and integrations" }
    ]
  }
];

export function ActionPlanBuilder() {
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (taskId: string) => {
    const newChecked = new Set(checkedTasks);
    if (newChecked.has(taskId)) {
      newChecked.delete(taskId);
    } else {
      newChecked.add(taskId);
    }
    setCheckedTasks(newChecked);
  };

  const exportPlan = () => {
    let planText = "AI TOOL STRATEGY IMPLEMENTATION PLAN\n";
    planText += "=====================================\n\n";

    phases.forEach((phase) => {
      planText += `${phase.icon} ${phase.title} (${phase.duration})\n`;
      planText += `${phase.description}\n\n`;

      phase.tasks.forEach((task) => {
        const status = checkedTasks.has(task.id) ? "[✓]" : "[ ]";
        planText += `${status} ${task.text}\n`;
        if (task.description) {
          planText += `    → ${task.description}\n`;
        }
      });

      planText += "\n";
    });

    planText += `\nProgress: ${checkedTasks.size} of ${phases.reduce((sum, p) => sum + p.tasks.length, 0)} tasks completed\n`;
    planText += `Generated: ${new Date().toLocaleDateString()}\n`;

    navigator.clipboard.writeText(planText);
  };

  const totalTasks = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  const progress = (checkedTasks.size / totalTasks) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Overview */}
      <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-orange-900 text-lg mb-1">Your Progress</h3>
              <p className="text-sm text-orange-700">
                {checkedTasks.size} of {totalTasks} tasks completed ({Math.round(progress)}%)
              </p>
            </div>
            <Button onClick={exportPlan} variant="outline" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Export Plan
            </Button>
          </div>
          <div className="w-full bg-orange-200 rounded-full h-3">
            <div
              className="bg-orange-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Phases */}
      {phases.map((phase) => {
        const phaseTasks = phase.tasks.length;
        const phaseCompleted = phase.tasks.filter((t) => checkedTasks.has(t.id)).length;
        const phaseProgress = (phaseCompleted / phaseTasks) * 100;

        return (
          <Card key={phase.id} className={`border-2 border-${phase.color}-200 hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-3xl">{phase.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <Badge className={`bg-${phase.color}-100 text-${phase.color}-900 border-${phase.color}-300`}>
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{phase.description}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <div
                          className={`bg-${phase.color}-600 h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${phaseProgress}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-600 font-semibold">
                        {phaseCompleted}/{phaseTasks}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {phase.tasks.map((task) => {
                  const isChecked = checkedTasks.has(task.id);

                  return (
                    <button
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isChecked
                          ? `border-${phase.color}-300 bg-${phase.color}-50`
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isChecked ? (
                          <CheckCircle2 className={`h-5 w-5 text-${phase.color}-600 mt-0.5 flex-shrink-0`} />
                        ) : (
                          <Circle className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className={`font-medium ${isChecked ? `text-${phase.color}-900` : "text-slate-900"}`}>
                            {task.text}
                          </p>
                          {task.description && (
                            <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Downloadable Templates */}
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Downloadable Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col items-start">
              <span className="font-semibold mb-1">Tool Evaluation Matrix</span>
              <span className="text-xs text-slate-600">Compare 5+ tools across key criteria (Excel)</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col items-start">
              <span className="font-semibold mb-1">Pilot Program Charter</span>
              <span className="text-xs text-slate-600">30-day pilot plan template (Word)</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col items-start">
              <span className="font-semibold mb-1">User Survey Questions</span>
              <span className="text-xs text-slate-600">Needs assessment questionnaire (Google Form)</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col items-start">
              <span className="font-semibold mb-1">ROI Tracking Dashboard</span>
              <span className="text-xs text-slate-600">Measure time savings and adoption (Excel)</span>
            </Button>
          </div>
          <p className="text-xs text-slate-600 text-center mt-4">
            Templates coming soon - check back or contact us for early access
          </p>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="pt-6">
          <h3 className="font-bold text-green-900 mb-4 text-lg">Success Metrics to Track</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Quantitative</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• 60%+ time savings on target tasks</li>
                <li>• 80%+ user adoption rate</li>
                <li>• Break-even within 4-8 weeks</li>
                <li>• 10+ hours/week saved per user</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Qualitative</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• 4/5 user satisfaction rating</li>
                <li>• Positive sentiment in feedback</li>
                <li>• Users request more AI tools</li>
                <li>• Reduced frustration with tasks</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-slate-900 mb-2">Strategic</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Capacity for strategic work</li>
                <li>• Improved output quality</li>
                <li>• Competitive advantage gained</li>
                <li>• Talent attraction/retention</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final CTA */}
      <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 text-center">
        <CardContent className="pt-6">
          <h3 className="font-bold text-orange-900 mb-3 text-lg">Ready to Get Started?</h3>
          <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
            The best time to start was last quarter. The second best time is today. Every week you wait is another week
            of unrealized productivity gains.
          </p>
          <p className="text-sm text-slate-600">
            Scroll back up to complete the Decision Framework quiz or jump straight to the ROI Calculator to quantify
            your opportunity.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
