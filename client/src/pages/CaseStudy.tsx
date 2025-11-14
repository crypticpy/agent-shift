import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  DollarSign,
  Clock,
  Mic2,
  Users,
  Zap,
  TrendingDown,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  FileCode,
  BarChart3,
  Brain
} from "lucide-react";

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden animated-gradient text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Meta Case Study</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How This Site Was Built:<br />
              <span className="text-white/90">Voice-First Development in Action</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              355 voice prompts. 23,000 words spoken. 42,000 lines of code generated.
              24 hours of orchestration time. One radical workflow.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm opacity-90">Time Efficiency</div>
                <div className="text-3xl font-bold">60-180x</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm opacity-90">Cost Efficiency</div>
                <div className="text-3xl font-bold">1000x+</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm opacity-90">Code per Prompt</div>
                <div className="text-3xl font-bold">98 lines</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              How do you communicate the true capabilities of today's AI agents?
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Not another snake game. Definitely not another pool simulation. Not a 3D anything.
              Probably not another Product Hunt dime-a-dozen SaaS.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              What about something with <strong className="text-slate-900">staying power</strong>?
              A real asset for the community. Not just a proof of concept. An e-learning platform.
              A complete web application that actually helps people.
            </p>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Yes. That's it. That was the challenge. Build something that would actually matter.
              Something with real utility that could stand on its own.
              Not an ephemeral demo. <strong className="text-slate-900">A real platform.</strong> That meant:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-orange-200">
                <CardContent className="pt-6">
                  <FileCode className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Technical Requirements</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>10+ unique pages with custom layouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Custom design system built on Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Particle systems, gradient animations, visual effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Working filters, search, and calculators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Responsive design across devices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200">
                <CardContent className="pt-6">
                  <MessageSquare className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Content Requirements</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete copywriting for 10+ pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>7 educational modules with detailed content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>190+ AI tool catalog with descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Workflow guides and use case examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Research-backed business case content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <p className="text-lg font-medium text-slate-900 mb-2">Traditional Estimate</p>
              <p className="text-slate-600">
                A typical agency would quote <strong className="text-slate-900">$80,000-$220,000</strong> and
                a timeline of <strong className="text-slate-900">3-6 months</strong> for a project of this scope.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Approach */}
      <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Approach
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              This wasn't about one AI showing off. Not about crowning a winner and using it for everything.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              It was about <strong className="text-slate-900">six AI models working as a team</strong>.
              Research specialists. Design experts. Code generators. Each one with incredible skillsets.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              But they needed coordination. Direction. A <strong className="text-slate-900">conductor</strong>.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              That's when the orchestra begins to perform. One human conducting through voice. Stream-of-consciousness
              decision making. Multitasking across work streams. Six models working simultaneously on different parts of the project.
            </p>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              It took experimentation to find this formula. But once it clicked?
              The ensemble could really sing.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="glass card-lift">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic2 className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1. Speak</h3>
                  <p className="text-sm text-slate-600">
                    Plain speech prompts via SuperWhisper voice-to-text
                  </p>
                </CardContent>
              </Card>

              <Card className="glass card-lift">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">2. Orchestrate</h3>
                  <p className="text-sm text-slate-600">
                    3-4 AI instances working in parallel on different features
                  </p>
                </CardContent>
              </Card>

              <Card className="glass card-lift">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">3. Refine</h3>
                  <p className="text-sm text-slate-600">
                    Quick iterations through conversational feedback
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Workflow in Action</h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                  <div className="h-8 w-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Voice Prompt</h4>
                    <p className="text-slate-600 text-sm">
                      "Create a footer with four columns showing our branding, quick links, GitHub connections,
                      and a bold banner claiming this was 100% voice-built with SuperWhisper and AI agents."
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                  <div className="h-8 w-8 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">AI Implementation</h4>
                    <p className="text-slate-600 text-sm">
                      Claude generates complete Footer component with glass morphism effects, animated gradient banner,
                      responsive layout, and polished hover animations. ~160 lines of production code.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                  <div className="h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Iterative Refinement</h4>
                    <p className="text-slate-600 text-sm">
                      "The hover effects are wonky. Polish them up." → Instant fixes to link animations,
                      badge interactions, and transitions. No context switching required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Numbers */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              The Numbers: Voice vs. Traditional
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Traditional Agency */}
              <Card className="border-2 border-slate-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-600 text-white px-4 py-1 text-xs font-semibold">
                  TRADITIONAL
                </div>
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    Agency Approach
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Timeline</span>
                        <span className="text-2xl font-bold text-slate-900">3-6 months</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Cost</span>
                        <span className="text-2xl font-bold text-slate-900">$80k-$220k</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Team Size</span>
                        <span className="text-2xl font-bold text-slate-900">5-10 people</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="text-sm text-slate-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>2-3 weeks: Discovery & Strategy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>4-6 weeks: UX/Design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>12-16 weeks: Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>4-6 weeks: Content/Copy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Voice Orchestration */}
              <Card className="border-2 border-green-400 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 text-xs font-semibold">
                  VOICE ORCHESTRATION
                </div>
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Mic2 className="h-6 w-6 text-green-600" />
                    Our Approach
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Timeline</span>
                        <span className="text-2xl font-bold text-green-600">24-28 hours</span>
                      </div>
                      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '2%' }}></div>
                      </div>
                      <div className="text-xs text-green-600 mt-1 font-medium">180x faster ⚡</div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Cost</span>
                        <span className="text-2xl font-bold text-green-600">~$300</span>
                      </div>
                      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '0.1%' }}></div>
                      </div>
                      <div className="text-xs text-green-600 mt-1 font-medium">1000x+ cheaper 💰</div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Team Size</span>
                        <span className="text-2xl font-bold text-green-600">1 person + AI</span>
                      </div>
                      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '15%' }}></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-green-200">
                      <div className="text-sm text-slate-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <Mic2 className="h-4 w-4 text-green-600" />
                          <span>355 voice prompts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-green-600" />
                          <span>~23,000 words spoken</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-green-600" />
                          <span>42,000 lines generated</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-green-600" />
                          <span>98 lines per prompt</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-slate-900 mb-2">98</div>
                <div className="text-sm text-slate-600">Lines of code per voice prompt</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <TrendingDown className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-slate-900 mb-2">0.66</div>
                <div className="text-sm text-slate-600">Words spoken per line of code</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                <Sparkles className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-slate-900 mb-2">1.5</div>
                <div className="text-sm text-slate-600">Lines of code per word spoken</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Output */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Output
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              What actually shipped?
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Not vapor. Not a prototype collecting dust.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              <strong className="text-slate-900">Real code. Real features. Real platform.</strong> You're using it right now.
              Every page. Every animation. Every line. All created through conversation—speech to AI, sometimes AI to AI.
            </p>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              No IDEs. No editors. No design software. No Canvas applications.
            </p>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Voice to a prompt. Straight to the command line. Sometimes six instances of Claude Code running simultaneously.
              Multiple web browsers. <strong className="text-slate-900">No traditional tools. No special services.</strong> This is about as close to pure AI orchestration as it gets.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-orange-600" />
                  Code Breakdown
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">TypeScript/TSX</span>
                    <span className="font-bold text-slate-900">33,835 lines</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">CSS Styling</span>
                    <span className="font-bold text-slate-900">949 lines</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Data/Content JSON</span>
                    <span className="font-bold text-slate-900">7,194 lines</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-slate-600 font-semibold">Total Lines</span>
                    <span className="font-bold text-xl text-green-600">~42,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Features Delivered
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>10+ unique pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>Custom Tailwind design system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>Animations and visual effects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>Working tools and calculators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>190+ tool catalog</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>7 educational modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>Mobile and desktop support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                    <span>Clean page structure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Insight */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What This Actually Means
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              This isn't about replacing developers.
            </p>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              It's about <strong className="text-slate-900">freeing you from the mechanical parts</strong>.
              The typing. The syntax. The repetitive patterns. Let AI handle that.
              You focus on the thinking.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl mb-8">
              <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed mb-4">
                "23,000 words spoken. 42,000 lines of code generated. While doing other things."
              </blockquote>
              <p className="text-slate-600 text-lg">
                That's not the future of software development.
              </p>
              <p className="text-slate-600 text-lg">
                <strong className="text-slate-900">That's today.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-slate-50 rounded-xl">
                <Mic2 className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Just Talk</h3>
                <p className="text-sm text-slate-600">
                  Describe what you want in plain English. No translating ideas into syntax.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <Zap className="h-8 w-8 text-amber-600 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Parallel Workflows</h3>
                <p className="text-sm text-slate-600">
                  Multiple AI instances working on different features simultaneously.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <Clock className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-lg mb-2">While Multitasking</h3>
                <p className="text-sm text-slate-600">
                  Orchestrate development while walking, thinking, or doing other creative work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="animated-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Every page on this site was built the same way. Explore the platform and see what voice-orchestrated development can create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/getting-started">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Get Started with AI Agents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/catalog">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                  Explore the Tool Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
