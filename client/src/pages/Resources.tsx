import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import {
  BookOpen,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Shield,
  Rocket,
  Calendar,
  ArrowRight,
  Briefcase,
  ExternalLink
} from "lucide-react";
import { useParticleBurst } from "@/hooks/useParticleBurst";

export default function Resources() {
  const handleBurst = useParticleBurst();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Orchestration Toolkit
            </h1>
            <p className="text-xl opacity-95">
              Guides, timelines, and resources to help you shift from doing to orchestrating
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Context Card */}
          <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <p className="text-lg text-slate-700">
                You've learned the concept: <strong>You orchestrate. Agents execute.</strong>{" "}
                Now here's everything you need to make it real in your organization—from
                your first 30 days to security guidelines to future roadmaps.
              </p>
            </CardContent>
          </Card>

          {/* Featured: Business Case Article */}
          <Card className="mb-8 border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-orange-600 text-white mb-2">Featured Resource</Badge>
                    <CardTitle className="text-2xl mb-2">The Business Case for Agentic AI</CardTitle>
                    <CardDescription className="text-base">
                      Comprehensive research-backed analysis with 50+ peer-reviewed citations from McKinsey, Stanford, MIT, and Gartner.
                      Present this to leadership with confidence.
                    </CardDescription>
                  </div>
                </div>
                <Link href="/business-case">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white flex-shrink-0">
                    View Business Case
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">ROI & Statistics</div>
                    <div className="text-xs text-slate-600">171% average return, 74% achieve ROI in year 1</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Strategic Benefits</div>
                    <div className="text-xs text-slate-600">Beyond time savings: capability expansion & agility</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Implementation Guide</div>
                    <div className="text-xs text-slate-600">Why 40% fail and how to set yours up for success</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="implementation" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto bg-orange-100">
              <TabsTrigger value="implementation" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Implementation</TabsTrigger>
              <TabsTrigger value="roadmap" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Future Roadmap</TabsTrigger>
              <TabsTrigger value="limitations" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Limitations</TabsTrigger>
            </TabsList>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-8">
              <Card className="border-2 border-amber-200 shadow-lg card-lift hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center shadow-md">
                      <Rocket className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-3xl">30-Day Implementation Plan</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    A step-by-step guide to get your team using AI agents effectively
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Week 1 */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200 card-lift hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-base px-4 py-1 transition-colors">Week 1</Badge>
                      <h3 className="text-xl font-semibold">Learn & Explore</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Day 1-2: Education</p>
                          <p className="text-sm text-slate-600">Read the Getting Started guides. Watch a few tutorial videos. Understand the basics.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Day 3-4: Pick One Tool</p>
                          <p className="text-sm text-slate-600">Choose ChatGPT, Claude, or Perplexity. Sign up for the paid version ($20/month).</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Day 5-7: Practice</p>
                          <p className="text-sm text-slate-600">Try the "5-Minute Test" from Getting Started. Do one simple task each day.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-200 card-lift hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-base px-4 py-1 transition-colors">Week 2</Badge>
                      <h3 className="text-xl font-semibold">Start Using Daily</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Pick One Workflow</p>
                          <p className="text-sm text-slate-600">Choose a beginner workflow that matches your daily work. Follow it exactly.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Use It Every Day</p>
                          <p className="text-sm text-slate-600">Do this one workflow daily for the entire week. Build the habit.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Track Your Time</p>
                          <p className="text-sm text-slate-600">Write down how long tasks took before and after. See the difference.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week 3 */}
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200 card-lift hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-teal-500 hover:bg-teal-600 text-white text-base px-4 py-1 transition-colors">Week 3</Badge>
                      <h3 className="text-xl font-semibold">Add More Workflows</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Add 2-3 More Workflows</p>
                          <p className="text-sm text-slate-600">Pick workflows for other common tasks. Start using them regularly.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Try Voice Control</p>
                          <p className="text-sm text-slate-600">Start using voice input for at least one task. It feels weird at first - that's normal.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Share with One Colleague</p>
                          <p className="text-sm text-slate-600">Show someone what you're doing. Teach them one simple workflow.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week 4 */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200 card-lift hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-base px-4 py-1 transition-colors">Week 4</Badge>
                      <h3 className="text-xl font-semibold">Optimize & Scale</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Try Agent Chaining</p>
                          <p className="text-sm text-slate-600">Pick one intermediate workflow that chains agents together. Follow the steps carefully.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Calculate Your ROI</p>
                          <p className="text-sm text-slate-600">Use the ROI calculator to see how much time and money you've saved.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Plan Team Rollout</p>
                          <p className="text-sm text-slate-600">If it's working for you, plan how to introduce it to your team.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security & Compliance */}
              <Card className="border-2 border-red-200 shadow-lg card-lift hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center shadow-md">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl">Security & Compliance Checklist</CardTitle>
                  </div>
                  <CardDescription>
                    Important considerations before implementing AI agents
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
                    <p className="text-red-900 font-medium mb-2">Critical: Don't Share Sensitive Data</p>
                    <p className="text-red-800 text-sm">
                      Never put confidential information, personal data, or proprietary information into public AI tools 
                      unless your organization has approved it and signed a business agreement with the AI provider.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Check Your Organization's Policy</p>
                        <p className="text-sm text-slate-600">Many organizations now have AI usage policies. Read them before you start.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Use Enterprise Versions When Possible</p>
                        <p className="text-sm text-slate-600">Enterprise versions (ChatGPT Enterprise, Claude for Work) offer better data protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Anonymize Data</p>
                        <p className="text-sm text-slate-600">Remove names, addresses, and identifying information before using AI tools.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Review AI Outputs</p>
                        <p className="text-sm text-slate-600">Always review what AI creates before sharing it. You're responsible for the final product.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Document Your Process</p>
                        <p className="text-sm text-slate-600">Keep records of how you used AI, especially for important decisions or public-facing content.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Procurement Guide */}
              <Card className="border-2 border-amber-200 shadow-lg card-lift hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Procurement Guide</CardTitle>
                  <CardDescription>
                    How to get approval and budget for AI tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border border-amber-200">
                    <h4 className="font-semibold mb-3">Build Your Business Case</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>1. Calculate ROI:</strong> Use the ROI calculator to show dollar savings</p>
                      <p><strong>2. Start Small:</strong> Request one tool ($20-30/month) for a pilot</p>
                      <p><strong>3. Show Results:</strong> After 30 days, share your time savings and productivity gains</p>
                      <p><strong>4. Scale Up:</strong> Request team licenses once you prove the value</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-3">Typical Costs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Individual AI tool (ChatGPT, Claude):</span>
                        <span className="font-medium">$20-30/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Voice transcription (Superwhisper, Otter):</span>
                        <span className="font-medium">$10-30/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enterprise team license:</span>
                        <span className="font-medium">$25-60/user/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Specialized tools (research, design):</span>
                        <span className="font-medium">$15-50/month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Future Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-8">
              <Card className="border-2 border-teal-200 shadow-lg card-lift hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center shadow-md">
                      <TrendingUp className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-3xl">What's Coming in 2025-2026</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Major trends and capabilities to watch for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-teal-500 to-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-xl font-semibold mb-3">The Big Shift: Long-Horizon Agents</h3>
                    <p className="leading-relaxed">
                      AI agents are moving from "quick tasks" to "multi-day projects." Soon, you'll be able to give an agent 
                      a complex project on Monday and get the completed work on Friday - with the agent working autonomously 
                      for hours or days at a time.
                    </p>
                  </div>

                  {/* 2025 Trends */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-orange-600" />
                      <h4 className="text-xl font-semibold">2025: This Year</h4>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border-l-4 border-orange-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Better Voice Interfaces</h5>
                      <p className="text-sm text-slate-700">
                        Voice AI will get much better at understanding context and handling interruptions. 
                        Talking to AI will feel as natural as talking to a person.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-lg border-l-4 border-teal-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Automatic Agent Chaining</h5>
                      <p className="text-sm text-slate-700">
                        Instead of manually connecting agents, AI will automatically figure out which agents to use 
                        and in what order. You just describe the end goal.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border-l-4 border-amber-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Mobile-First AI</h5>
                      <p className="text-sm text-slate-700">
                        AI agents will work smoothly on your phone. Start a task on your phone while walking,
                        and see the results on your computer later.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border-l-4 border-orange-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Enterprise Integration</h5>
                      <p className="text-sm text-slate-700">
                        AI agents will connect directly to your organization's systems - email, databases, 
                        document management - with proper security and permissions.
                      </p>
                    </div>
                  </div>

                  {/* 2026 Trends */}
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-teal-600" />
                      <h4 className="text-xl font-semibold">2026: Next Year</h4>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-lg border-l-4 border-teal-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Multi-Day Autonomous Projects</h5>
                      <p className="text-sm text-slate-700">
                        Give an agent a complex research project or analysis task and let it work for days. 
                        It will gather information, analyze it, create drafts, and refine them - all without you.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border-l-4 border-orange-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Team AI Assistants</h5>
                      <p className="text-sm text-slate-700">
                        AI agents that know your team's work patterns, preferences, and ongoing projects. 
                        They'll proactively suggest help and coordinate work across team members.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border-l-4 border-amber-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Specialized Government Agents</h5>
                      <p className="text-sm text-slate-700">
                        AI agents specifically trained for public sector work - understanding regulations, 
                        compliance requirements, and government processes.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-lg border-l-4 border-teal-600 card-lift hover:shadow-md transition-all">
                      <h5 className="font-semibold mb-2">Enhanced Security & Privacy</h5>
                      <p className="text-sm text-slate-700">
                        Better tools for keeping sensitive data private. On-premise AI options that never 
                        send data to the cloud.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <h4 className="font-semibold text-lg mb-3">What This Means for You</h4>
                    <p className="text-sm leading-relaxed">
                      Start learning now with simple workflows. As AI gets more capable, you'll already know how to 
                      use it effectively. The people who start today will have a huge advantage in 2026 when these 
                      advanced capabilities arrive.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Limitations Tab */}
            <TabsContent value="limitations" className="space-y-8">
              <Card className="border-2 border-orange-200 shadow-lg card-lift hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center shadow-md">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-3xl">What AI Agents Can't Do (Yet)</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Be realistic about current limitations to avoid frustration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-300">
                    <p className="text-orange-900 font-medium text-lg mb-3">
                      AI agents are powerful, but they're not magic. Here's what doesn't work well yet:
                    </p>
                  </div>

                  {/* Limitations */}
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Complex Judgment Calls</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        AI can analyze data and suggest options, but it can't make nuanced decisions that require 
                        deep context, political awareness, or ethical judgment.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">Example:</p>
                        <p className="text-red-800">
                          Don't ask AI to decide whether to approve a controversial policy. Do ask it to analyze 
                          the pros, cons, and stakeholder impacts so you can decide.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Real-Time Information</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        Most AI tools have a knowledge cutoff date. They don't know what happened yesterday or today 
                        unless you tell them or they can search the web.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">Solution:</p>
                        <p className="text-red-800">
                          Use Perplexity or ChatGPT with web search enabled for current information. Or manually 
                          provide recent data to the AI.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Perfect Accuracy</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        AI makes mistakes. It can "hallucinate" facts, misunderstand instructions, or miss important details. 
                        Always review its work.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">Best Practice:</p>
                        <p className="text-red-800">
                          Treat AI output as a first draft, not a final product. You're the quality control.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Understanding Your Specific Context</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        AI doesn't know your organization's culture, internal politics, or unwritten rules. 
                        It can't read between the lines.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">Workaround:</p>
                        <p className="text-red-800">
                          Give AI context in your prompts. Explain your organization's priorities, constraints, 
                          and preferences.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Emotional Intelligence</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        AI can't truly understand emotions, read social cues, or handle sensitive interpersonal situations.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">When to Use Humans:</p>
                        <p className="text-red-800">
                          Difficult conversations, conflict resolution, delivering bad news, building relationships - 
                          these need human touch.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-2 border-red-200 card-lift hover:shadow-md transition-all">
                      <div className="flex gap-3 items-start mb-3">
                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-lg">Creative Originality</h4>
                      </div>
                      <p className="text-slate-700 mb-3">
                        AI can remix and combine existing ideas, but it struggles with truly novel, groundbreaking creativity.
                      </p>
                      <div className="bg-red-50 p-3 rounded text-sm border border-red-200">
                        <p className="font-medium text-red-900 mb-1">Best Use:</p>
                        <p className="text-red-800">
                          Use AI to generate many options quickly, then use your human creativity to pick the best 
                          and make it unique.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* When to Use Humans */}
                  <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100 card-lift hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-teal-600" />
                        <CardTitle className="text-xl text-teal-900">When to Use Humans Instead</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-teal-900">
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Final decisions on important or controversial matters</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Sensitive communications (layoffs, discipline, personal matters)</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Situations requiring empathy and emotional support</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Work that requires your specific expertise and experience</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Building relationships and trust with stakeholders</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Creative work that needs to be truly original</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Anything involving confidential or sensitive information</span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-100 border-l-4 border-orange-600 p-5 rounded shadow-md">
                    <p className="text-orange-900 font-medium mb-2">The Right Mindset:</p>
                    <p className="text-orange-800">
                      Think of AI as a very capable assistant, not a replacement for human judgment. 
                      Use it for the time-consuming work so you can focus on the work that requires your unique human skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white text-center shadow-lg card-lift hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-95">
              You now have everything you need to successfully implement AI agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/getting-started">
                <Button
                  size="lg"
                  variant="secondary"
                  className="relative text-lg px-8 hover:bg-accent hover:text-white transition-all overflow-hidden"
                  onClick={handleBurst}
                >
                  Start with the Basics
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/workflows">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-lg px-8 bg-white/10 hover:bg-accent text-white border-white hover:border-accent transition-all overflow-hidden"
                  onClick={handleBurst}
                >
                  View Workflows
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
