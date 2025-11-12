import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle2 } from "lucide-react";

interface CalculationResult {
  timeSavedPerTask: number;
  tasksPerWeek: number;
  totalWeeklySavings: number;
  totalAnnualHours: number;
  dollarValue: number;
  breakEvenWeeks: number;
}

interface ConversationPlaybookProps {
  result: CalculationResult | null;
  taskType: string;
  taskPresets: Record<string, { name: string; manual: number; ai: number; savings: number }>;
}

export function ConversationPlaybook({ result, taskType, taskPresets }: ConversationPlaybookProps) {
  const preset = taskType ? taskPresets[taskType as keyof typeof taskPresets] : null;

  return (
    <div className="space-y-6">
      {/* Elevator Pitch */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Your Elevator Pitch
          </CardTitle>
          <CardDescription>30-second conversation starter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
            <p className="text-sm leading-relaxed">
              "I've been using AI tools to handle {preset?.name.toLowerCase() || "routine tasks"} and
              {result ? ` I'm saving ${result.totalWeeklySavings.toFixed(1)} hours every week` : " cutting my time significantly"}.
              The ROI is solid - {result ? `$${result.dollarValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} annual value after costs` : "pays for itself in weeks"}.
              It's like having a skilled assistant working 24/7, and the quality is actually improving my output."
            </p>
          </div>
          <div className="text-xs text-slate-600">
            <strong>Pro tip:</strong> Lead with your specific results, not theory. People respond to real numbers from real experience.
          </div>
        </CardContent>
      </Card>

      {/* Helpful Analogies */}
      <Card className="border-chart-2/20">
        <CardHeader>
          <CardTitle className="text-lg">Helpful Analogies</CardTitle>
          <CardDescription>Make it relatable</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">The Intern Analogy</Badge>
            <p className="text-sm text-slate-700">
              "It's like having an intern who never sleeps, never takes breaks, and gets better every month.
              You still review their work, but they handle all the initial heavy lifting."
            </p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">The Calculator Analogy</Badge>
            <p className="text-sm text-slate-700">
              "Remember when everyone did math by hand? AI for knowledge work is like calculators for math -
              you still need to know what you're doing, but the tool handles the tedious parts."
            </p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">The Research Librarian</Badge>
            <p className="text-sm text-slate-700">
              "It's like having a research librarian who's read everything and can instantly find
              what you need, summarize it, and help you connect the dots."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common Objections */}
      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="text-lg">Handling Common Questions</CardTitle>
          <CardDescription>Quick responses to pushback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">"Isn't it expensive?"</p>
                <p className="text-sm text-slate-600 mt-1">
                  "Most tools cost $20-30/month. {result ? `At my hourly rate, that pays for itself in ${result.breakEvenWeeks < 1 ? "less than a week" : `${result.breakEvenWeeks.toFixed(1)} weeks`}` : "That's like 30 minutes of my time, and I save hours every week"}."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">"What about security?"</p>
                <p className="text-sm text-slate-600 mt-1">
                  "Enterprise versions have the same certifications as our existing tools - FedRAMP, SOC 2, HIPAA compliance.
                  Plus, we control what data goes in and can use on-premise options if needed."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">"Sounds complicated to learn"</p>
                <p className="text-sm text-slate-600 mt-1">
                  "I thought so too. Took me about 30 minutes to get started, now I use it daily.
                  It's actually simpler than most software we already use - you just type what you need in plain English."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">"Will it replace jobs?"</p>
                <p className="text-sm text-slate-600 mt-1">
                  "It replaces tasks, not jobs. Think about when email replaced memos - people adapted and focused on higher-value work.
                  This lets us do more strategic work instead of grunt work."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900">"Can we trust the output?"</p>
                <p className="text-sm text-slate-600 mt-1">
                  "You review everything, just like you'd review work from a colleague. The difference is it gives you a solid 80% draft in seconds,
                  and you refine the last 20%. That's way faster than starting from scratch."
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Closing */}
      <Card className="bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-slate-900 mb-2">Your Ask:</h4>
          <p className="text-sm text-slate-700 mb-3">
            "Want me to show you how it works with one of your actual tasks? Takes 5 minutes and you'll see exactly why this is worth exploring."
          </p>
          <p className="text-xs text-slate-600">
            <strong>Why this works:</strong> You're offering a demo, not asking for commitment. Makes it low-pressure and concrete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
