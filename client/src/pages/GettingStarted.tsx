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
  Lightbulb
} from "lucide-react";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Getting Started with AI Agents
            </h1>
            <p className="text-xl opacity-95">
              Your step-by-step guide to using AI agents. No tech experience needed.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <a href="#first-conversation" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Your First Conversation
                </a>
                <a href="#voice-vs-typing" className="text-green-600 hover:text-green-800 hover:underline flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  Voice vs. Typing
                </a>
                <a href="#understanding-agents" className="text-purple-600 hover:text-purple-800 hover:underline flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Understanding AI Agents
                </a>
                <a href="#first-task" className="text-pink-600 hover:text-pink-800 hover:underline flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Your First Agent Task
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Start Path */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your 5-Minute Quick Start
            </h2>
            <p className="text-lg text-slate-600">
              Follow these simple steps to run your first AI agent task
            </p>
          </div>

          {/* Guide Cards */}
          <div className="space-y-12">
            {/* Guide 1: Your First Conversation */}
            <div id="first-conversation">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Your First Conversation with AI</CardTitle>
                    <CardDescription className="text-base">
                      Learn how to talk to your computer like you talk to a friend
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    Here's the secret:
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Talking to AI is just like texting a smart friend. You don't need special words or commands. 
                    Just say what you want in plain English.
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                    <p className="text-sm text-slate-600 mb-2">Instead of thinking:</p>
                    <p className="text-slate-800 italic mb-3">"What's the right command to make this work?"</p>
                    <p className="text-sm text-slate-600 mb-2">Just say:</p>
                    <p className="text-slate-800 font-medium">"Hey, can you help me write an email to my team about tomorrow's meeting?"</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Three ways to talk to AI:</h4>
                  <div className="grid gap-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Type it out</p>
                        <p className="text-sm text-slate-600">Open ChatGPT or Claude and type your request</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Use your phone</p>
                        <p className="text-sm text-slate-600">Open the ChatGPT app and tap the microphone button</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Use voice on your computer</p>
                        <p className="text-sm text-slate-600">Tools like Superwhisper let you talk and it types for you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guide 2: The 5-Minute Test */}
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">The 5-Minute Test</CardTitle>
                    <CardDescription className="text-base">
                      Try one simple task right now to see how it works
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Let's do this together:</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium mb-1">Open ChatGPT (it's free)</p>
                        <p className="text-sm text-slate-600">Go to chat.openai.com or download the app on your phone</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium mb-1">Copy and paste this:</p>
                        <div className="bg-white p-3 rounded border mt-2 font-mono text-sm">
                          "I need to write a quick email to my team. We're meeting tomorrow at 2pm to discuss the budget. 
                          Can you draft a friendly email reminder for me?"
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium mb-1">Hit Enter and watch</p>
                        <p className="text-sm text-slate-600">In 10 seconds, you'll have a complete email ready to send</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50/50 border-l-4 border-green-500 p-5 rounded">
                  <p className="text-green-800 font-semibold mb-2">🎉 Congratulations!</p>
                  <p className="text-green-700 text-sm">
                    You just saved 10 minutes of writing time. That's what AI agents do - they handle the boring stuff 
                    so you can focus on the important decisions.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 2: Voice vs Typing */}
            <div id="voice-vs-typing">
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Voice vs. Typing: Why Voice Changes Everything</CardTitle>
                    <CardDescription className="text-base">
                      Understand why talking is faster and easier than typing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-slate-700">Typing (Old Way)</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• You're stuck at your desk</li>
                      <li>• Takes 5-10 minutes to write</li>
                      <li>• You have to think about spelling</li>
                      <li>• Can only do one thing at a time</li>
                    </ul>
                  </div>
                  <div className="bg-green-50/60 p-5 rounded-lg border-2 border-green-200">
                    <h4 className="font-semibold mb-2 text-green-700">Voice (New Way)</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Talk while walking, driving, or cooking</li>
                      <li>• Takes 30 seconds to speak</li>
                      <li>• Just talk naturally</li>
                      <li>• Start 3 tasks in 5 minutes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Real Example:</h4>
                  <p className="text-slate-700 mb-4">
                    You're walking to your car. You pull out your phone and say:
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-600 mb-4">
                    <p className="text-slate-800 italic">
                      "Research the top 5 vacation spots in Italy for families. I need hotel options under $200 a night 
                      and kid-friendly activities. Put it all in a simple list I can share with my wife."
                    </p>
                  </div>
                  <p className="text-slate-700">
                    By the time you reach your car (2 minutes), the AI has already started working. When you get back 
                    from lunch, you have a complete vacation guide waiting for you.
                  </p>
                </div>

                {/* Research-backed stats */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">📊</div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">Research Shows Voice is Dramatically Faster</h4>
                      <p className="text-sm text-slate-600 mb-3">Stanford University study with 32 participants:</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">3x</div>
                      <div className="text-xs text-slate-600">Faster than typing</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">150</div>
                      <div className="text-xs text-slate-600">Words per minute (speech)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">20%</div>
                      <div className="text-xs text-slate-600">Fewer errors</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Source: <a href="https://news.stanford.edu/stories/2016/08/stanford-study-speech-recognition-faster-texting" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stanford University, 2016</a> - Speech recognition study comparing mobile typing vs voice input
                  </p>
                </div>

                <div className="bg-yellow-50/50 border-l-4 border-yellow-500 p-5 rounded">
                  <p className="text-yellow-800 font-semibold mb-2">💡 The Big Idea:</p>
                  <p className="text-yellow-700 text-sm">
                    Voice lets you delegate work while you're doing other things. You become the boss giving instructions, 
                    not the worker doing the task.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 3: Understanding AI Agents */}
            <div id="understanding-agents">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Understanding AI Agents</CardTitle>
                    <CardDescription className="text-base">
                      What they are and how they're different from regular AI
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Regular AI (like ChatGPT):</h4>
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <p className="text-slate-700">
                        You ask a question → It gives you an answer → You're done
                      </p>
                      <p className="text-sm text-slate-600 mt-2">
                        Example: "What's the weather today?" → "It's 72°F and sunny"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">AI Agents (the new way):</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                      <p className="text-orange-900 font-medium mb-2">
                        You give a task → The agent does multiple steps → It gives you the finished work
                      </p>
                      <p className="text-sm text-orange-800 mt-3">
                        Example: "Plan my team meeting" → The agent:
                      </p>
                      <ul className="text-sm text-orange-800 mt-2 space-y-1 ml-4">
                        <li>1. Checks everyone's calendar</li>
                        <li>2. Finds a time that works</li>
                        <li>3. Creates an agenda</li>
                        <li>4. Sends invites</li>
                        <li>5. Sets up the video call</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Think of it like this:</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-purple-900">Regular AI = Calculator</p>
                      <p className="text-sm text-purple-700">You ask, it answers, you move on</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">AI Agent = Assistant</p>
                      <p className="text-sm text-purple-700">You delegate, it handles everything, you review the results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
            {/* Guide 4: Your First Agent Task */}
            <div id="first-task">
            <Card className="border-2 border-pink-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Your First Agent Task</CardTitle>
                    <CardDescription className="text-base">
                      A complete walkthrough of delegating work to an AI agent
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-pink-50/60 p-6 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-lg mb-4">Let's create a research report together:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-medium mb-2">Step 1: Give the task</p>
                      <p className="text-sm text-slate-600 mb-2">Open ChatGPT and say:</p>
                      <div className="bg-slate-50 p-3 rounded text-sm font-mono">
                        "I need a 2-page report on electric vehicles. Include current market size, top 3 companies, 
                        and predictions for 2025. Write it in simple language that anyone can understand."
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-medium mb-2">Step 2: Let it work</p>
                      <p className="text-sm text-slate-600">
                        The AI agent will research, organize, and write the report. This takes about 2 minutes.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-medium mb-2">Step 3: Review and adjust</p>
                      <p className="text-sm text-slate-600 mb-2">
                        Read what it created. If you want changes, just ask:
                      </p>
                      <div className="bg-slate-50 p-3 rounded text-sm font-mono">
                        "Can you add a section about charging infrastructure?"
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-medium mb-2">Step 4: Use it</p>
                      <p className="text-sm text-slate-600">
                        Copy the report, paste it into a document, and share it with your team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50/50 border-l-4 border-green-500 p-5 rounded">
                  <p className="text-green-900 font-medium mb-2">⏱️ Time saved:</p>
                  <p className="text-green-800 text-sm">
                    Without AI: 4-6 hours of research and writing<br />
                    With AI: 10 minutes of guiding and reviewing<br />
                    <span className="font-bold">You just saved 5+ hours!</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for More?</h3>
            <p className="text-lg mb-6 opacity-95">
              Now that you know the basics, learn how to chain multiple agents together for even bigger time savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Learn Advanced Concepts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/workflows">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                  See Workflow Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
