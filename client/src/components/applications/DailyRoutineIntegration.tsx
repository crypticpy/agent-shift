import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconTextSection } from "@/components/ui/icon-text-section";
import {
  Sun,
  Coffee,
  Briefcase,
  Moon,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Zap
} from "lucide-react";

/**
 * DailyRoutineIntegration - Shows how to integrate agents into daily workflow
 * Morning, afternoon, evening patterns for using agents first
 */
export function DailyRoutineIntegration() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
        <IconTextSection
          icon={<Zap className="h-8 w-8 text-primary" />}
          title="Make Agents Your First Stop, Not Your Last Resort"
          description={<>The shift to orchestration happens when you go to agents <strong>first</strong>, not after you're stuck. Here's how to rewire your daily routine so agents become your default collaborators.</>}
          iconBg="bg-primary/10"
          className="mb-6"
        />

        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-lg">
          <p className="text-amber-900 font-medium">
            <strong>Old habit:</strong> Start work manually → Get stuck → Ask AI for help<br />
            <strong>New habit:</strong> Think of a task → Ask agent first → Validate and refine their output
          </p>
        </div>
      </Card>

      {/* Morning Routine */}
      <Card className="p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
        <IconTextSection
          icon={<Sun className="h-8 w-8 text-white" />}
          title="Morning (6AM - 10AM)"
          description="Set up your day before you even sit down"
          iconBg="bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg p-4 rounded-xl"
          titleClassName="text-2xl font-bold text-foreground"
          descriptionClassName="text-muted-foreground"
          className="mb-6"
        />

        <div className="space-y-6">
          {/* While Getting Ready */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="h-6 w-6 text-orange-600" />
              <h5 className="font-bold text-lg text-foreground">While Getting Ready (Phone + Voice)</h5>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 1: Prep for first meeting</p>
                    <Badge variant="outline" className="text-xs">2 minutes</Badge>
                  </div>
                  <MessageSquare className="h-5 w-5 text-orange-600 flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I have a 9am meeting with Sarah about Q4 budget. Pull up the budget doc from our shared drive, summarize the main points, and identify the 3 biggest line items we should discuss."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Agent prepares summary while you shower. Review in 10 minutes when you check your phone.</span>
                </div>
              </div>

              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 2: Delegate daily monitoring</p>
                    <Badge variant="outline" className="text-xs">1 minute</Badge>
                  </div>
                  <MessageSquare className="h-5 w-5 text-orange-600 flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Check our project management tool and flag any tasks that became overdue overnight or any new high-priority items. Send me a quick summary."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Agent monitors while you make coffee. You get a prioritized list by the time you sit down.</span>
                </div>
              </div>

              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 3: Email triage</p>
                    <Badge variant="outline" className="text-xs">1 minute</Badge>
                  </div>
                  <MessageSquare className="h-5 w-5 text-orange-600 flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Review my unread emails from the last 12 hours. Identify: 1) Anything urgent that needs immediate response. 2) Questions I can answer. 3) Things I can ignore."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Agent triages inbox. You review the priority list instead of 47 individual emails.</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 bg-orange-100 rounded-lg">
              <p className="text-sm font-medium text-orange-900">
                <strong>Morning Impact:</strong> You've delegated 3 tasks before breakfast. By the time you open your laptop, agents have done 90 minutes of prep work in 4 minutes of your time.
              </p>
            </div>
          </div>

          {/* Commute Time */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-6 w-6 text-amber-600" />
              <h5 className="font-bold text-lg text-foreground">During Commute (Phone + Voice)</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg">
              <p className="font-semibold text-foreground mb-3">Task 4: Start research for afternoon work</p>
              <p className="text-sm text-muted-foreground italic mb-3">
                "I need to write a proposal for expanding our community outreach program. Research 5 similar programs from other cities—what they do, their budget, and their outcomes. Put it in a simple table."
              </p>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Agent researches while you drive/ride. Draft proposal foundation ready by lunch.</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Midday/Afternoon Routine */}
      <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
        <IconTextSection
          icon={<Briefcase className="h-8 w-8 text-white" />}
          title="Midday & Afternoon (10AM - 5PM)"
          description="Agent-first approach for focused work"
          iconBg="bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg p-4 rounded-xl"
          titleClassName="text-2xl font-bold text-foreground"
          descriptionClassName="text-muted-foreground"
          className="mb-6"
        />

        <div className="space-y-6">
          {/* Before Starting Tasks */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <h5 className="font-bold text-lg text-foreground">Before Starting Any Task (Desktop)</h5>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-blue-400">
                <p className="font-semibold text-foreground mb-3">The 2-Minute Rule: Ask Agent First</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Before you start ANY task, spend 2 minutes asking an agent to help plan or draft it. Examples:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>"Writing a policy memo?"</strong> → Agent drafts outline, you validate structure
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>"Analyzing data?"</strong> → Agent suggests analysis approach, you confirm methodology
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>"Planning a meeting?"</strong> → Agent creates agenda + materials, you refine
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>"Responding to complex email?"</strong> → Agent drafts response, you add personal touch
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-indigo-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 5: Complex document creation</p>
                    <Badge variant="outline" className="text-xs">5 min setup, agent works 20 min</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Create a community engagement plan for our new initiative. Include: 1) Stakeholder map, 2) Communication timeline, 3) Engagement tactics, 4) Success metrics. Base it on the research you did this morning about other cities' programs."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground mt-3">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Agent uses morning research + creates full plan. You spend 30 min adding local context instead of 3 hours starting from scratch.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Between Meetings */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
              <h5 className="font-bold text-lg text-foreground">Between Meetings (Phone or Desktop)</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg">
              <p className="font-semibold text-foreground mb-3">Task 6: Meeting follow-up delegation</p>
              <p className="text-sm text-muted-foreground italic mb-3">
                "I just finished a meeting about the budget. Key decisions: approved $50K for outreach, need proposal by Friday, must include 3 partner orgs. Draft the proposal structure and identify which partner orgs from our contacts would be best fits."
              </p>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Delegate immediately after meeting. Agent works while you're in your next meeting.</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Evening Routine */}
      <Card className="p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
        <IconTextSection
          icon={<Moon className="h-8 w-8 text-white" />}
          title="Evening (5PM - End of Day)"
          description="Set up tomorrow before you leave"
          iconBg="bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg p-4 rounded-xl"
          titleClassName="text-2xl font-bold text-foreground"
          descriptionClassName="text-muted-foreground"
          className="mb-6"
        />

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
              <h5 className="font-bold text-lg text-foreground">Before Logging Off (Desktop)</h5>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 7: Overnight work delegation</p>
                    <Badge variant="outline" className="text-xs">5 minutes</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Tomorrow I need to present 3 budget scenarios to the leadership team. Create: 1) Conservative scenario (5% increase), 2) Moderate scenario (10% increase), 3) Growth scenario (15% increase). For each, show impact on programs and staffing. Format as presentation slides."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Agent creates full presentation overnight. You review and add commentary in the morning.</span>
                </div>
              </div>

              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-pink-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Task 8: Next day prep</p>
                    <Badge variant="outline" className="text-xs">2 minutes</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Review my calendar for tomorrow and create a prep checklist: what I need to read beforehand, what documents I need, what decisions I need to make. Prioritize by meeting start time."
                </p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Wake up to a clear prioritized plan instead of scrambling to prep for 9am meeting.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Evening Wind-Down */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <Moon className="h-6 w-6 text-pink-600" />
              <h5 className="font-bold text-lg text-foreground">Optional: Evening at Home (Phone)</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg">
              <p className="font-semibold text-foreground mb-3">Task 9: Personal prep (if needed)</p>
              <p className="text-sm text-muted-foreground italic mb-3">
                "I have a big presentation on Friday. Help me prepare: 1) What are the 5 most common objections to budget increases? 2) Draft responses to each. 3) Suggest data visualizations that would make the case compelling."
              </p>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                <span>Agent prepares while you have dinner. Review polished materials later or tomorrow morning.</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Daily Summary */}
      <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
        <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-3xl">📊</span>
          Daily Time Accounting
        </h4>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h5 className="font-bold text-lg text-foreground mb-4">Human Time Invested</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Morning delegation (3 tasks)</span>
                <strong>4 minutes</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Commute task setup</span>
                <strong>2 minutes</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Afternoon task setup</span>
                <strong>5 minutes</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Between meetings</span>
                <strong>3 minutes</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Evening prep</span>
                <strong>7 minutes</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Review/validation</span>
                <strong>45 minutes</strong>
              </div>
              <div className="flex justify-between p-4 bg-green-100 rounded-lg border-2 border-green-400">
                <strong>Total Human Time</strong>
                <strong className="text-green-700">66 minutes</strong>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg text-foreground mb-4">Work Completed</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Meeting prep + summaries</span>
                <strong>90 min saved</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Email triage</span>
                <strong>30 min saved</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Research report</span>
                <strong>3 hrs saved</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Engagement plan draft</span>
                <strong>2.5 hrs saved</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Budget presentation</span>
                <strong>2 hrs saved</strong>
              </div>
              <div className="flex justify-between p-3 bg-white/60 rounded-lg">
                <span>Tomorrow's prep</span>
                <strong>45 min saved</strong>
              </div>
              <div className="flex justify-between p-4 bg-green-100 rounded-lg border-2 border-green-400">
                <strong>Total Time Saved</strong>
                <strong className="text-green-700">~9 hours</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-l-4 border-green-500">
          <p className="text-lg font-bold text-green-900 mb-2">
            Net Result: You orchestrated 9+ hours of work in 66 minutes
          </p>
          <p className="text-sm text-green-800">
            That's not "AI helping you work faster." That's a fundamental transformation in how work gets done. You spent 66 minutes on strategic thinking, validation, and high-value decisions. Agents handled the execution—research, drafting, analysis, formatting. This is orchestration.
          </p>
        </div>
      </Card>

      {/* Habit Building */}
      <Card className="p-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
        <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-3xl">🔄</span>
          Building the Agent-First Habit
        </h4>

        <div className="space-y-4">
          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Week 1: Just mornings</h5>
            <p className="text-sm text-muted-foreground">
              Start with just the 3 morning tasks. Get comfortable delegating while getting ready. Don't worry about the rest of the day yet.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Week 2: Add the 2-minute rule</h5>
            <p className="text-sm text-muted-foreground">
              Before starting any task during your workday, pause for 2 minutes and ask: "Can an agent draft this first?" If yes, delegate it.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Week 3: Evening setup</h5>
            <p className="text-sm text-muted-foreground">
              Add the evening prep tasks. Get comfortable assigning work that runs overnight or early morning before you arrive.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Week 4: You're an orchestrator</h5>
            <p className="text-sm text-muted-foreground">
              By now, going to agents first feels natural. You've rewired the habit. Instead of "I need to do this task," you think "Who should do this task?" The orchestrator mindset is now your default.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
