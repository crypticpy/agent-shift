import { ArrowRight, Clock, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DoerVsOrchestratorDiagram() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
        The Shift
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        This isn't about working faster. It's about working differently.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* OLD WAY - DOER */}
        <Card className="border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 font-semibold mb-3">
                <span className="text-2xl">👷</span>
                <span>The Old Way: DOER</span>
              </div>
            </div>

            {/* Sequential Task Flow */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    1
                  </div>
                  <span className="font-semibold text-slate-900">Research topic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 ml-11">
                  <Clock className="h-4 w-4" />
                  <span>3 hours</span>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    2
                  </div>
                  <span className="font-semibold text-slate-900">Write draft</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 ml-11">
                  <Clock className="h-4 w-4" />
                  <span>4 hours</span>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    3
                  </div>
                  <span className="font-semibold text-slate-900">Edit & format</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 ml-11">
                  <Clock className="h-4 w-4" />
                  <span>2 hours</span>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    4
                  </div>
                  <span className="font-semibold text-slate-900">Add citations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 ml-11">
                  <Clock className="h-4 w-4" />
                  <span>1 hour</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t-2 border-slate-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700 mb-2">10 hours</div>
                <div className="text-sm text-slate-600">Your focus: Tasks</div>
                <div className="text-sm text-slate-600">Manually doing each step</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NEW WAY - ORCHESTRATOR */}
        <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 text-orange-900 font-semibold mb-3 border border-orange-200">
                <span className="text-2xl">🎼</span>
                <span>The New Way: ORCHESTRATOR</span>
              </div>
            </div>

            {/* Define Outcome */}
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4 shadow-sm">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900 mb-1">YOU: Define Outcome</div>
                  <div className="text-sm text-slate-600">
                    "Create a policy brief on remote work with 10 sources, executive summary, and recommendations"
                  </div>
                  <div className="flex items-center gap-2 text-sm text-orange-700 mt-2 font-medium">
                    <Clock className="h-4 w-4" />
                    <span>10 minutes to set up</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Coordination */}
            <div className="bg-gradient-to-br from-orange-100/50 to-amber-100/50 rounded-lg p-5 border border-orange-200 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <Users className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <div className="font-bold text-slate-900">AI Agents Execute</div>
              </div>

              <div className="space-y-2 ml-9">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  <span>Research Agent: Gather 10 credible sources</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>Writing Agent: Draft policy analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  <span>Summary Agent: Create executive summary</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>Format Agent: Structure & citations</span>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 shadow-sm">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900 mb-1">YOU: Review & Refine</div>
                  <div className="text-sm text-slate-600">
                    Check the work, add your expertise, adjust recommendations
                  </div>
                  <div className="flex items-center gap-2 text-sm text-orange-700 mt-2 font-medium">
                    <Clock className="h-4 w-4" />
                    <span>1-2 hours review time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t-2 border-orange-300">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                  2 hours
                </div>
                <div className="text-sm text-slate-700 font-medium">Your focus: Outcomes</div>
                <div className="text-sm text-slate-600">Strategic decisions & quality review</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insight */}
      <div className="mt-8 text-center">
        <Card className="inline-block border-2 border-orange-200 bg-orange-50/50">
          <CardContent className="p-6">
            <p className="text-lg text-slate-700 max-w-2xl">
              <strong className="text-orange-900">The shift:</strong> You don't need to execute every task.
              You define what success looks like.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
