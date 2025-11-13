import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Lightbulb,
  Wrench,
  Zap,
  Calculator,
  FileText,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Sparkles
} from "lucide-react";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { AdvancedParticles } from "@/components/advanced-particles";
import { useParticleBurst } from "@/hooks/useParticleBurst";
import { useIsMobile } from "@/hooks/useMobile";
import { DoerVsOrchestratorDiagram } from "@/components/DoerVsOrchestratorDiagram";
import { PARTICLE_COUNTS } from "@/constants/animations";

// Updated version
export default function Index() {
  const handleBurst = useParticleBurst();
  const isMobile = useIsMobile();

  // Adjust particle count for mobile performance
  const particleCount = isMobile ? PARTICLE_COUNTS.MOBILE : PARTICLE_COUNTS.INDEX_PAGE_DESKTOP;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Hero Section */}
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          {/* Floating Orbs - Aurora Depth Effect */}
          <FloatingOrbs />

          {/* Wind-Driven Particles - Reduced on mobile for performance */}
          <AdvancedParticles count={particleCount} windSpeed={80} flockingEnabled={true} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Stop Doing. Start Talking.
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            From{" "}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Doer
            </span>
            {" "}to{" "}
            <span className="animated-gradient bg-gradient-to-r from-[#FF6B35] via-[#FFC107] via-[#10B981] to-[#14B8A6] bg-clip-text text-transparent">
              Orchestrator
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-orange-600">Ideas strike anytime.</span> Capture and act on them now—through conversation with intelligent agents.
          </p>
          <p className="text-lg text-slate-600 mb-4 max-w-2xl mx-auto">
            Voice-first collaboration that transforms busywork into creative thinking.
          </p>
          <p className="text-sm text-slate-500 mb-8 max-w-2xl mx-auto italic">
            Your best thinking happens during walks, while reading, in moments of insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/getting-started">
              <Button
                size="lg"
                className="relative text-lg px-8 py-6 bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/80 text-white rounded-lg font-semibold card-lift overflow-hidden"
                onClick={handleBurst}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/workflows">
              <Button
                size="lg"
                variant="outline"
                className="relative text-lg px-8 py-6 border-2 border-accent rounded-lg font-semibold hover:border-accent/80 hover:bg-accent/10 card-lift overflow-hidden"
                onClick={handleBurst}
              >
                View Workflows
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-4">
            <div className="glass card-lift rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-500">190+</div>
              <div className="text-sm text-slate-600">AI Tools</div>
            </div>
            <div className="glass card-lift rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-500">18</div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>
            <div className="glass card-lift rounded-lg p-4">
              <div className="text-3xl font-bold text-teal-500">3×</div>
              <div className="text-sm text-slate-600">Faster (voice)</div>
            </div>
            <div className="glass card-lift rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600">60%+</div>
              <div className="text-sm text-slate-600">Time Reclaimed*</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4 max-w-3xl mx-auto">
            *Based on McKinsey research showing 60-70% of work activities can be automated with generative AI (2023),
            Stanford study confirming voice interaction is 3× faster than typing for knowledge work (2016).
          </p>
          </div>
        </div>
      </div>

      {/* Doer vs Orchestrator Diagram */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <DoerVsOrchestratorDiagram />
        </div>
      </div>

      {/* The Three Stages of AI Evolution */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Your Journey: Three Stages to Advanced Orchestration
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Start where you are. Progress at your pace. Master the art of AI collaboration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stage 1: Reactive */}
              <Card className="glass card-lift border-2 border-orange-200 hover:border-orange-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">1</span>
                  </div>
                  <CardTitle className="text-xl text-orange-700">Reactive</CardTitle>
                  <CardDescription className="text-slate-600">
                    Using AI when you need help on specific tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800 font-medium">
                      💡 You're probably here already
                    </p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Single commands and simple requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>AI assists with individual tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Focus on immediate problem-solving</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-xs text-orange-800 font-medium">
                      🎤 Next step: Start using your voice—it's 3× faster than typing
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 2: Proactive */}
              <Card className="glass card-lift border-2 border-amber-200 hover:border-amber-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <CardTitle className="text-xl text-amber-700">Proactive</CardTitle>
                  <CardDescription className="text-slate-600">
                    Collaborating with AI from the beginning of workflows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800 font-medium">
                      🎯 Goal: AI as your collaborator
                    </p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Start conversations with AI at workflow beginning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Plan outcomes together, execute separately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>AI handles execution, you handle decisions</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-xs text-amber-800 font-medium">
                      🤝 Example: "Research this topic, create outline, draft slides—I handle the strategy"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 3: Advanced Orchestration */}
              <Card className="glass card-lift border-2 border-teal-200 hover:border-teal-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-teal-600">3</span>
                  </div>
                  <CardTitle className="text-xl text-teal-700">Advanced Orchestration</CardTitle>
                  <CardDescription className="text-slate-600">
                    Stacking multiple AI tools with voice command control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                    <p className="text-sm text-teal-800 font-medium">
                      🎪 Ultimate: You are the team leader
                    </p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>AI agents collaborate with each other</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Voice triggers complex multi-step workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>You're the conductor, not the player</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                    <p className="text-xs text-teal-800 font-medium">
                      ⚡ Example: "Create quarterly report" → AI team researches, analyzes, formats, delivers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-slate-600 mb-4">
                <strong>The transformation:</strong> From typing commands to voice conversations that execute complex work
              </p>
              <Link href="/learn">
                <Button variant="outline" className="border-2 border-orange-300 hover:border-orange-400 hover:bg-orange-50">
                  Learn the Progression
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Find Here */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            What You'll Find Here
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Everything you need to start using AI agents in your daily work and life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/getting-started">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-orange-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Getting Started</CardTitle>
                  <CardDescription>
                    Learn the basics: voice-controlled AI, your first agent task
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>5-minute quick start</span>
                    </div>
                    <p className="text-xs text-slate-500">Perfect for beginners</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/learn">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-amber-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Learn Concepts</CardTitle>
                  <CardDescription>
                    Voice control, agent chaining, long-running tasks, checkpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Visual guides</span>
                    </div>
                    <p className="text-xs text-slate-500">Simple explanations</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/catalog">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-teal-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Tool Catalog</CardTitle>
                  <CardDescription>
                    Browse 190+ AI tools with ratings, pricing, and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4" />
                      <span>190+ tools cataloged</span>
                    </div>
                    <p className="text-xs text-slate-500">Find the right tool</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/workflows">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-orange-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Workflow Recipes</CardTitle>
                  <CardDescription>
                    Step-by-step guides to reclaim hours each week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>60%+ time savings</span>
                    </div>
                    <p className="text-xs text-slate-500">Paint-by-numbers</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/guidance">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-amber-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">ROI Calculator</CardTitle>
                  <CardDescription>
                    Calculate how much time and money you can save with AI agents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator className="h-4 w-4" />
                      <span>Instant calculations</span>
                    </div>
                    <p className="text-xs text-slate-500">See your savings</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources">
              <Card className="glass card-lift hover:shadow-lg transition-all cursor-pointer border-2 hover:border-teal-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Resources</CardTitle>
                  <CardDescription>
                    Implementation guides, roadmap, and what to watch out for
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      <span>30-day playbook</span>
                    </div>
                    <p className="text-xs text-slate-500">Start today</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Why This Moment? */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Why This Moment?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              AI capabilities reached an inflection point in 2025. Voice interaction technology matured.
              The barrier between idea and execution has never been lower.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Voice-First Era</h3>
                <p className="text-sm text-slate-600">
                  Natural conversation with AI is now faster and more intuitive than typing
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Capability Explosion</h3>
                <p className="text-sm text-slate-600">
                  AI agents can now handle complex, multi-step workflows reliably
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Early Adopter Advantage</h3>
                <p className="text-sm text-slate-600">
                  Those learning orchestration now gain years of competitive advantage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Transformation - Restructured */}
      <div className="animated-gradient bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Transformation
            </h2>

            {/* Big Quote */}
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed opacity-95 font-medium">
              "This isn't more work. It's a better division of work."
            </p>

            {/* Three Key Changes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl mb-3">🗣️</div>
                <h3 className="text-lg font-semibold mb-3">Interface Change</h3>
                <p className="text-sm opacity-90">
                  From keyboard commands to natural conversation with intelligent agents
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-3">Role Change</h3>
                <p className="text-sm opacity-90">
                  From task-doer to outcome-orchestrator and strategic decision-maker
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-lg font-semibold mb-3">Time Change</h3>
                <p className="text-sm opacity-90">
                  From execution time to creative thinking and problem-solving time
                </p>
              </div>
            </div>

            {/* Core Message */}
            <p className="text-lg mb-6 opacity-95 leading-relaxed">
              Let AI handle execution. You handle the decisions. Shift your energy to creative problem-solving and strategic thinking.
            </p>

            {/* Final CTA */}
            <Link href="/learn">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-lg font-semibold card-lift">
                Learn How This Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Proof - Testimonials */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Five-Star Results
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              See what you can achieve by transforming how you work with AI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="glass card-lift border-2 border-orange-100 hover:border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic">
                    "I draft emails while walking my dog. What used to take 30 minutes now takes 5, and the quality is better because I'm thinking strategically, not just getting the words out."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold">
                      SJ
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Sarah Johnson</p>
                      <p className="text-xs text-slate-500">Product Manager, Tech Startup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="glass card-lift border-2 border-amber-100 hover:border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic">
                    "Created a comprehensive quarterly report in 15 minutes instead of 3 hours. The AI agents handled research, analysis, and formatting. I just provided the insights."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold">
                      MC
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Michael Chen</p>
                      <p className="text-xs text-slate-500">Director of Analytics, Finance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="glass card-lift border-2 border-teal-100 hover:border-teal-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic">
                    "My calendar went from 60% busywork to 10%. I now spend 2 hours a day on strategic thinking instead of email wrangling. It's transformed how I work."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                      EP
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Emily Parker</p>
                      <p className="text-xs text-slate-500">VP of Operations, Healthcare</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-slate-600 mb-2">
                <strong>Start your transformation</strong> and achieve these kinds of results
              </p>
              <p className="text-xs text-slate-500">
                *Results vary based on current workflows, implementation, and effort invested
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Your Time Back?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Start with one simple workflow. See the results. Then expand from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/getting-started">
                <Button
                  size="lg"
                  className="relative text-lg px-8 py-6 bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/80 text-white rounded-lg font-semibold card-lift overflow-hidden"
                  onClick={handleBurst}
                >
                  Start Orchestrating
                </Button>
              </Link>
              <Link href="/workflows">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-lg px-8 py-6 border-2 border-accent rounded-lg font-semibold hover:border-accent/80 hover:bg-accent/10 card-lift overflow-hidden"
                  onClick={handleBurst}
                >
                  See Orchestration Patterns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
