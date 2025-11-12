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
import { DoerVsOrchestratorDiagram } from "@/components/DoerVsOrchestratorDiagram";

// Updated version
export default function Index() {
  const handleBurst = useParticleBurst();

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

          {/* Wind-Driven Particles */}
          <AdvancedParticles count={150} windSpeed={80} flockingEnabled={true} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Stop Doing. Start Guiding.
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            From{" "}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Do
            </span>
            {" "}to{" "}
            <span className="animated-gradient bg-gradient-to-r from-[#FF6B35] via-[#FFC107] via-[#10B981] to-[#14B8A6] bg-clip-text text-transparent">
              Orchestrate
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ideas can strike anytime through conversation with intelligent agents who execute complex work.
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Busy work no longer blocks your creative time or inhibits your decision-making. More ideas become impactful. Your mind is freed for complex challenges.
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
              <div className="text-3xl font-bold text-teal-500">60%+</div>
              <div className="text-sm text-slate-600">Time Saved*</div>
            </div>
            <div className="glass card-lift rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600">12+</div>
              <div className="text-sm text-slate-600">Workflows</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4 max-w-3xl mx-auto">
            *Based on McKinsey research showing 60-70% of work activities can be automated with generative AI (2023),
            and multiple peer-reviewed studies documenting significant productivity gains across knowledge work tasks.
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

            <Link href="/calculator">
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

      {/* The Big Idea */}
      <div className="animated-gradient bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Transformation
            </h2>
            <p className="text-xl mb-6 leading-relaxed opacity-95 font-medium">
              Productivity is changing. This isn't more work. It's a better division of work.
            </p>
            <p className="text-lg mb-6 opacity-95 leading-relaxed font-normal">
              Your best thinking doesn't happen at a desk—it happens during walks, while reading, in moments of insight. Now you can capture those ideas through conversations with intelligent agents who execute complex work.
            </p>
            <p className="text-lg mb-6 opacity-95 leading-relaxed font-normal">
              Let AI handle execution. You handle the decisions. Shift your energy to creative problem-solving and strategic thinking.
            </p>
            <p className="text-lg mb-8 opacity-95 leading-relaxed font-normal">
              Less work blocks your calendar or inhibits your decision-making. More ideas become impactful. Your mind is freed for the complex challenges that matter.
            </p>
            <p className="text-lg mb-8 opacity-95 leading-relaxed font-normal">
              Everyone can use AI agents. Great ideas that dried on the vine can finally happen.
            </p>
            <Link href="/learn">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-lg font-semibold card-lift">
                Learn How This Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
