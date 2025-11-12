import { Baby, Footprints, Rocket, GraduationCap, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function LearningProgressionTimeline() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
        Your Orchestration Journey
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Everyone starts as a beginner. With practice, you become an expert orchestrator. Here's what that looks like.
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Progress Bar */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-orange-300 to-emerald-300" />

        <div className="grid md:grid-cols-4 gap-8">
          {/* Week 1 - Beginner */}
          <div className="relative">
            <Card className="border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-slate-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Baby className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-slate-600 mb-2">Week 1</div>
                  <div className="text-xl font-bold text-slate-900 mb-4">Beginner</div>

                  <div className="space-y-3 text-left w-full">
                    <div className="text-sm text-slate-700">
                      <div className="font-medium mb-1">What you do:</div>
                      <ul className="space-y-1 text-xs ml-4">
                        <li>• Ask AI for help with single tasks</li>
                        <li>• Copy examples from guides</li>
                        <li>• Learn basic voice commands</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-slate-600" />
                        <span className="text-xs font-semibold text-slate-700">Time saved:</span>
                      </div>
                      <div className="text-lg font-bold text-slate-900">2-3 hrs/week</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Week 2-3 - Learning */}
          <div className="relative">
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Footprints className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-amber-700 mb-2">Week 2-3</div>
                  <div className="text-xl font-bold text-slate-900 mb-4">Learning</div>

                  <div className="space-y-3 text-left w-full">
                    <div className="text-sm text-slate-700">
                      <div className="font-medium mb-1">What you do:</div>
                      <ul className="space-y-1 text-xs ml-4">
                        <li>• Chain 2-3 agents together</li>
                        <li>• Use voice for routine work</li>
                        <li>• Start building habits</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-700">Time saved:</span>
                      </div>
                      <div className="text-lg font-bold text-amber-900">5-8 hrs/week</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Week 4-6 - Proficient */}
          <div className="relative">
            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 h-full shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-orange-700 mb-2">Week 4-6</div>
                  <div className="text-xl font-bold text-slate-900 mb-4">Proficient</div>

                  <div className="space-y-3 text-left w-full">
                    <div className="text-sm text-slate-700">
                      <div className="font-medium mb-1">What you do:</div>
                      <ul className="space-y-1 text-xs ml-4">
                        <li>• Design full workflows</li>
                        <li>• Trust the process</li>
                        <li>• Review, not do</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-700">Time saved:</span>
                      </div>
                      <div className="text-lg font-bold text-orange-900">10-15 hrs/week</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Week 8-12 - Expert */}
          <div className="relative">
            <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 h-full shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-emerald-700 mb-2">Week 8-12</div>
                  <div className="text-xl font-bold text-slate-900 mb-4">Expert</div>

                  <div className="space-y-3 text-left w-full">
                    <div className="text-sm text-slate-700">
                      <div className="font-medium mb-1">What you do:</div>
                      <ul className="space-y-1 text-xs ml-4">
                        <li>• Complex multi-agent systems</li>
                        <li>• Teaching others</li>
                        <li>• Creating custom solutions</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-emerald-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span className="text-xs font-semibold text-emerald-700">Time saved:</span>
                      </div>
                      <div className="text-lg font-bold text-emerald-900">15-20 hrs/week</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-12">
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-md">
          <CardContent className="p-8">
            {/* Mobile: 2x2 grid (Week 1 + Arrow, Week 12 + Badge) | Desktop: flex row with timeline grouped left, badge right */}
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-x-4 gap-y-6 md:gap-6">
              {/* Week 1 */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-slate-400 rounded-full flex items-center justify-center">
                  <Baby className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Week 1</div>
                  <div className="text-2xl font-bold text-slate-700">2-3 hrs saved</div>
                </div>
              </div>

              {/* Animated Arrow - rotates down on mobile, points right on desktop */}
              <div className="flex items-center justify-center md:justify-start">
                <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-slate-400 animate-pulse rotate-90 md:rotate-0" />
              </div>

              {/* Week 12 */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-emerald-600">Week 12</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    15-20 hrs saved
                  </div>
                </div>
              </div>

              {/* 7X Badge - on desktop, pushed to right with ml-auto */}
              <div className="md:ml-auto">
                <div className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-semibold text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <TrendingUp className="h-5 w-5" />
                    <span>7x increase in 3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="font-bold text-blue-900 mb-2 text-center">Start Small</div>
            <p className="text-sm text-slate-700 text-center">
              Week 1 focuses on simple, single-task assistance. Build confidence before complexity.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200 bg-orange-50/50">
          <CardContent className="p-6">
            <div className="font-bold text-orange-900 mb-2 text-center">Practice Daily</div>
            <p className="text-sm text-slate-700 text-center">
              The jump from Week 3 to Week 6 happens through consistent practice. Use AI every day.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 bg-emerald-50/50">
          <CardContent className="p-6">
            <div className="font-bold text-emerald-900 mb-2 text-center">Trust the Process</div>
            <p className="text-sm text-slate-700 text-center">
              By Week 12, you're orchestrating complex workflows you couldn't imagine in Week 1.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Insight */}
      <div className="mt-6 text-center">
        <Card className="inline-block border-2 border-orange-200 bg-orange-50/50">
          <CardContent className="p-6">
            <p className="text-lg text-slate-700 max-w-2xl">
              <strong className="text-orange-900">Most people plateau at Week 2-3.</strong> They save 5-8 hours and stop learning.
              The real power comes from pushing to Week 6+, where you're orchestrating complete workflows, not just faster tasks.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
