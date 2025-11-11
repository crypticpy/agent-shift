import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  MessageSquare,
  Clock,
  Mic,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Play,
  Lightbulb,
  Briefcase
} from "lucide-react";
import { AdvancedParticles } from "@/components/advanced-particles";
import { useParticleBurst } from "@/hooks/useParticleBurst";

export default function GettingStarted() {
  const handleBurst = useParticleBurst();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-secondary/10">
      {/* Hero */}
      <div className="relative animated-gradient text-white py-20 px-4 overflow-hidden">
        {/* Advanced Particle System - Wind-driven with flocking */}
        <AdvancedParticles count={150} windSpeed={80} flockingEnabled={true} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Getting Started with AI Agents
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Your step-by-step guide to using AI agents. No tech experience needed.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass card-lift border-2 border-primary/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-chart-1 to-accent"></div>
            <CardHeader className="pb-4 pt-8">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Quick Navigation
              </CardTitle>
              <CardDescription className="text-base mt-2">Jump to any section below</CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#first-conversation" className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all flex items-center gap-4 p-5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-chart-1 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-base text-foreground relative z-10">Your First Conversation</span>
                </a>
                <a href="#voice-vs-typing" className="group relative bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-2 border-chart-2/30 hover:border-chart-2 hover:shadow-lg transition-all flex items-center gap-4 p-5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-chart-2/0 to-chart-2/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 bg-gradient-to-br from-chart-2 to-chart-5 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-base text-foreground relative z-10">Voice vs. Typing</span>
                </a>
                <a href="#understanding-agents" className="group relative bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all flex items-center gap-4 p-5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 bg-gradient-to-br from-accent to-chart-3 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-base text-foreground relative z-10">Understanding AI Agents</span>
                </a>
                <a href="#first-task" className="group relative bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-2 border-chart-1/30 hover:border-chart-1 hover:shadow-lg transition-all flex items-center gap-4 p-5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-chart-1/0 to-chart-1/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 bg-gradient-to-br from-chart-1 to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-base text-foreground relative z-10">Your First Agent Task</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Business Case Link */}
          <Card className="mt-6 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Briefcase className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">
                      Need to present this to your manager?
                    </div>
                    <div className="text-sm text-blue-700">
                      Get a research-backed business case with ROI data, strategic benefits, and implementation guidance
                    </div>
                  </div>
                </div>
                <Link href="/business-case">
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white flex-shrink-0">
                    Build Business Case
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Start Path */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Your 5-Minute Quick Start
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Follow these simple steps to run your first AI agent task
            </p>
          </div>

          {/* Guide Cards */}
          <div className="space-y-16">
            {/* Guide 1: Your First Conversation */}
            <div id="first-conversation" className="space-y-16">
            <Card className="card-lift border-2 border-primary/30 shadow-xl hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-chart-1"></div>
              <CardHeader className="pb-6">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-gradient-to-br from-primary to-chart-1 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3 text-foreground font-bold">Your First Conversation with AI</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Learn how to talk to your computer like you talk to a friend
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass bg-primary/5 p-8 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    Here's the secret:
                  </h4>
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    Talking to AI is just like texting a smart friend. You don't need special words or commands.
                    Just say what you want in plain English.
                  </p>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">Instead of thinking:</p>
                    <p className="text-foreground italic mb-5 text-lg">"What's the right command to make this work?"</p>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">Just say:</p>
                    <p className="text-foreground font-semibold text-lg">"Hey, can you help me write an email to my team about tomorrow's meeting?"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-foreground">Three ways to talk to AI:</h4>
                  <div className="grid gap-4">
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-chart-2/5 border border-chart-2/20 hover:bg-chart-2/10 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-chart-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg text-foreground">Type it out</p>
                        <p className="text-base text-muted-foreground mt-1">Open ChatGPT or Claude and type your request</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-chart-2/5 border border-chart-2/20 hover:bg-chart-2/10 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-chart-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg text-foreground">Use your phone</p>
                        <p className="text-base text-muted-foreground mt-1">Open the ChatGPT app and tap the microphone button</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-chart-2/5 border border-chart-2/20 hover:bg-chart-2/10 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-chart-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg text-foreground">Use voice on your computer</p>
                        <p className="text-base text-muted-foreground mt-1">Tools like Superwhisper let you talk and it types for you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guide 2: The 5-Minute Test */}
            <Card className="card-lift border-2 border-accent/30 shadow-xl hover:border-accent transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-chart-3"></div>
              <CardHeader className="pb-6">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-gradient-to-br from-accent to-chart-3 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3 text-foreground font-bold">The 5-Minute Test</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Try one simple task right now to see how it works
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass bg-accent/5 p-8 rounded-xl border border-accent/20">
                  <h4 className="font-bold text-xl mb-6 text-foreground">Let's do this together:</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-gradient-to-br from-accent to-chart-3 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-2 text-lg text-foreground">Open ChatGPT (it's free)</p>
                        <p className="text-base text-muted-foreground">Go to chat.openai.com or download the app on your phone</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-gradient-to-br from-accent to-chart-3 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-3 text-lg text-foreground">Copy and paste this:</p>
                        <div className="bg-white p-5 rounded-lg border border-accent/20 shadow-sm mt-3 font-mono text-sm leading-relaxed">
                          "I need to write a quick email to my team. We're meeting tomorrow at 2pm to discuss the budget.
                          Can you draft a friendly email reminder for me?"
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-gradient-to-br from-accent to-chart-3 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-2 text-lg text-foreground">Hit Enter and watch</p>
                        <p className="text-base text-muted-foreground">In 10 seconds, you'll have a complete email ready to send</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass bg-chart-2/10 border-l-4 border-chart-2 p-6 rounded-lg">
                  <p className="text-chart-2 font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="text-2xl">🎉</span> Congratulations!
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    You just saved 10 minutes of writing time. That's what AI agents do - they handle the boring stuff
                    so you can focus on the important decisions.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 2: Voice vs Typing */}
            <div id="voice-vs-typing">
            <Card className="card-lift border-2 border-chart-2/30 shadow-xl hover:border-chart-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-2 to-chart-5"></div>
              <CardHeader className="pb-6">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-gradient-to-br from-chart-2 to-chart-5 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mic className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3 text-foreground font-bold">Voice vs. Typing: Why Voice Changes Everything</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Understand why talking is faster and easier than typing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass bg-muted/50 p-6 rounded-xl border border-muted">
                    <h4 className="font-bold mb-4 text-lg text-muted-foreground">Typing (Old Way)</h4>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">•</span>
                        <span>You're stuck at your desk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">•</span>
                        <span>Takes 5-10 minutes to write</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">•</span>
                        <span>You have to think about spelling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">•</span>
                        <span>Can only do one thing at a time</span>
                      </li>
                    </ul>
                  </div>
                  <div className="glass bg-chart-2/10 p-6 rounded-xl border-2 border-chart-2/30 shadow-md">
                    <h4 className="font-bold mb-4 text-lg text-chart-2">Voice (New Way)</h4>
                    <ul className="space-y-3 text-base text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">✓</span>
                        <span>Talk while walking, driving, or cooking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">✓</span>
                        <span>Takes 30 seconds to speak</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">✓</span>
                        <span>Just talk naturally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">✓</span>
                        <span>Start 3 tasks in 5 minutes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="glass bg-primary/5 p-8 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-xl mb-4 text-foreground">Real Example:</h4>
                  <p className="text-foreground/80 mb-5 text-lg leading-relaxed">
                    You're walking to your car. You pull out your phone and say:
                  </p>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary mb-5 shadow-sm">
                    <p className="text-foreground italic text-lg leading-relaxed">
                      "Research the top 5 vacation spots in Italy for families. I need hotel options under $200 a night
                      and kid-friendly activities. Put it all in a simple list I can share with my wife."
                    </p>
                  </div>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    By the time you reach your car (2 minutes), the AI has already started working. When you get back
                    from lunch, you have a complete vacation guide waiting for you.
                  </p>
                </div>

                {/* Research-backed stats */}
                <div className="glass animated-gradient-subtle p-8 rounded-xl border-2 border-accent/30 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">📊</div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-800 mb-3">Research Shows Voice is Dramatically Faster</h4>
                      <p className="text-slate-700 mb-4">Stanford University study with 32 participants:</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-5 mb-5">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                      <div className="text-4xl font-bold text-primary mb-2">3x</div>
                      <div className="text-sm text-muted-foreground font-medium">Faster than typing</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                      <div className="text-4xl font-bold text-chart-2 mb-2">150</div>
                      <div className="text-sm text-muted-foreground font-medium">Words per minute (speech)</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                      <div className="text-4xl font-bold text-accent mb-2">20%</div>
                      <div className="text-sm text-muted-foreground font-medium">Fewer errors</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">
                    Source: <a href="https://news.stanford.edu/stories/2016/08/stanford-study-speech-recognition-faster-texting" target="_blank" rel="noopener noreferrer" className="text-slate-600 underline hover:text-slate-500">Stanford University, 2016</a> - Speech recognition study comparing mobile typing vs voice input
                  </p>
                </div>

                <div className="glass bg-secondary/20 border-l-4 border-secondary p-6 rounded-lg">
                  <p className="text-foreground font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="text-2xl">💡</span> The Big Idea:
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Voice lets you delegate work while you're doing other things. You become the boss giving instructions,
                    not the worker doing the task.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 3: Understanding AI Agents */}
            <div id="understanding-agents">
            <Card className="card-lift border-2 border-chart-1/30 shadow-xl hover:border-chart-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 to-secondary"></div>
              <CardHeader className="pb-6">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-gradient-to-br from-chart-1 to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3 text-foreground font-bold">Understanding AI Agents</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      What they are and how they're different from regular AI
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-foreground">Regular AI (like ChatGPT):</h4>
                    <div className="glass bg-muted/50 p-6 rounded-xl border border-muted">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        You ask a question → It gives you an answer → You're done
                      </p>
                      <p className="text-base text-muted-foreground mt-4">
                        Example: "What's the weather today?" → "It's 72°F and sunny"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4 text-foreground">AI Agents (the new way):</h4>
                    <div className="glass bg-chart-1/10 p-6 rounded-xl border-2 border-chart-1/30 shadow-md">
                      <p className="text-foreground font-semibold mb-4 text-lg">
                        You give a task → The agent does multiple steps → It gives you the finished work
                      </p>
                      <p className="text-base text-foreground/80 mt-5 font-medium">
                        Example: "Plan my team meeting" → The agent:
                      </p>
                      <ul className="text-base text-foreground/80 mt-4 space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 font-bold">1.</span>
                          <span>Checks everyone's calendar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 font-bold">2.</span>
                          <span>Finds a time that works</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 font-bold">3.</span>
                          <span>Creates an agenda</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 font-bold">4.</span>
                          <span>Sends invites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 font-bold">5.</span>
                          <span>Sets up the video call</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass bg-accent/5 p-8 rounded-xl border border-accent/20">
                  <h4 className="font-bold text-xl mb-6 text-foreground">Think of it like this:</h4>
                  <div className="space-y-5">
                    <div className="p-5 rounded-lg bg-white border border-accent/20 shadow-sm">
                      <p className="font-bold text-lg text-accent mb-2">Regular AI = Calculator</p>
                      <p className="text-base text-muted-foreground">You ask, it answers, you move on</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white border border-accent/20 shadow-sm">
                      <p className="font-bold text-lg text-accent mb-2">AI Agent = Assistant</p>
                      <p className="text-base text-muted-foreground">You delegate, it handles everything, you review the results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 4: Your First Agent Task */}
            <div id="first-task">
            <Card className="card-lift border-2 border-primary/30 shadow-xl hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-accent"></div>
              <CardHeader className="pb-6">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Play className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3 text-foreground font-bold">Your First Agent Task</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      A complete walkthrough of delegating work to an AI agent
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass bg-primary/5 p-8 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-xl mb-6 text-foreground">Let's create a research report together:</h4>

                  <div className="space-y-5">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-bold mb-3 text-lg text-foreground">Step 1: Give the task</p>
                      <p className="text-base text-muted-foreground mb-4">Open ChatGPT and say:</p>
                      <div className="bg-muted/30 p-5 rounded-lg text-base font-mono leading-relaxed">
                        "I need a 2-page report on electric vehicles. Include current market size, top 3 companies,
                        and predictions for 2025. Write it in simple language that anyone can understand."
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-chart-1 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-bold mb-3 text-lg text-foreground">Step 2: Let it work</p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        The AI agent will research, organize, and write the report. This takes about 2 minutes.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-bold mb-3 text-lg text-foreground">Step 3: Review and adjust</p>
                      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        Read what it created. If you want changes, just ask:
                      </p>
                      <div className="bg-muted/30 p-5 rounded-lg text-base font-mono leading-relaxed">
                        "Can you add a section about charging infrastructure?"
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-chart-2 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-bold mb-3 text-lg text-foreground">Step 4: Use it</p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Copy the report, paste it into a document, and share it with your team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass bg-chart-2/10 border-l-4 border-chart-2 p-6 rounded-lg">
                  <p className="text-foreground font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="text-2xl">⏱️</span> Time saved:
                  </p>
                  <div className="text-foreground/80 leading-relaxed space-y-1">
                    <p>Without AI: <span className="font-medium">4-6 hours</span> of research and writing</p>
                    <p>With AI: <span className="font-medium">45-60 minutes</span> of guiding and reviewing</p>
                    <p className="font-bold text-chart-2 text-lg mt-3">You just saved 3-5 hours! (80-85% time savings)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-16 animated-gradient rounded-2xl p-8 md:p-10 text-white text-center shadow-2xl card-lift">
            <h3 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">Ready for More?</h3>
            <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
              Now that you know the basics, learn how to chain multiple agents together for even bigger time savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Link href="/learn">
                <Button
                  size="lg"
                  variant="secondary"
                  className="relative text-base md:text-lg px-6 md:px-10 py-5 md:py-6 font-semibold transition-all shadow-lg hover:shadow-xl"
                  onClick={handleBurst}
                >
                  Learn Advanced Concepts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/workflows">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-base md:text-lg px-6 md:px-10 py-5 md:py-6 font-semibold bg-white/10 hover:bg-accent text-white border-2 border-white hover:border-accent transition-all shadow-lg hover:shadow-xl"
                  onClick={handleBurst}
                >
                  See Workflow Recipes
                </Button>
              </Link>
              <Link href="/business-case">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-base md:text-lg px-6 md:px-10 py-5 md:py-6 font-semibold bg-white/10 hover:bg-accent text-white border-2 border-white hover:border-accent transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                  onClick={handleBurst}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Business Case
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
