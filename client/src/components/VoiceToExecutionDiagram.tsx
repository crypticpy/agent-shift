import { Mic, ArrowDown, Zap, FileCheck, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function VoiceToExecutionDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
        From Voice to Results
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Watch how natural conversation becomes executed work through agent orchestration
      </p>

      <div className="space-y-6">
        {/* Voice Input */}
        <Card className="border-2 border-teal-300 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-slate-900 mb-2">VOICE INPUT</div>
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <p className="text-slate-700 italic">
                    "I need a quarterly report by Friday with sales data and customer trends.
                    Include an executive summary and recommendations for the next quarter."
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm text-teal-700 font-medium">
                  <Clock className="h-4 w-4" />
                  <span>30 seconds to describe what you need</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-slate-400" />
        </div>

        {/* AI Agent Orchestration */}
        <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-slate-900 mb-1">AI AGENT ORCHESTRATION</div>
                <div className="text-sm text-slate-600">Multiple agents working in parallel and sequence</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Parallel Agents */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">
                  Parallel Processing
                </div>

                <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    <span className="font-semibold text-sm text-slate-900">Data Agent</span>
                  </div>
                  <p className="text-xs text-slate-600 ml-4">Extract sales data from CRM</p>
                </div>

                <div className="bg-white rounded-lg p-3 border-l-4 border-amber-400 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="font-semibold text-sm text-slate-900">Research Agent</span>
                  </div>
                  <p className="text-xs text-slate-600 ml-4">Gather customer trend data</p>
                </div>
              </div>

              {/* Sequential Agents */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">
                  Sequential Processing
                </div>

                <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="font-semibold text-sm text-slate-900">Analysis Agent</span>
                  </div>
                  <p className="text-xs text-slate-600 ml-4">Identify patterns & trends</p>
                </div>

                <div className="bg-white rounded-lg p-3 border-l-4 border-amber-500 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="font-semibold text-sm text-slate-900">Writing Agent</span>
                  </div>
                  <p className="text-xs text-slate-600 ml-4">Draft executive summary</p>
                </div>

                <div className="bg-white rounded-lg p-3 border-l-4 border-orange-600 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-orange-600" />
                    <span className="font-semibold text-sm text-slate-900">Assembly Agent</span>
                  </div>
                  <p className="text-xs text-slate-600 ml-4">Build final presentation</p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-orange-100/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-orange-800">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Agents work autonomously while you do other things</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-slate-400" />
        </div>

        {/* Output Results */}
        <Card className="border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-50 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-slate-900 mb-2">OUTPUT FOR YOUR REVIEW</div>

                <div className="bg-white rounded-lg p-4 border border-emerald-200 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-slate-700">Complete quarterly report with visualizations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-slate-700">Executive summary highlighting key trends</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-slate-700">Strategic recommendations for next quarter</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Your job: 20 minutes strategic review, not 3 hours manual work</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Savings Summary */}
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-10 w-10 text-orange-600" />
                <div>
                  <div className="text-sm text-slate-600">Traditional approach</div>
                  <div className="text-2xl font-bold text-slate-700">3 hours</div>
                </div>
              </div>

              <div className="text-slate-400 text-3xl">→</div>

              <div className="flex items-center gap-3">
                <Zap className="h-10 w-10 text-orange-600" />
                <div>
                  <div className="text-sm text-slate-600">With AI orchestration</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    20 minutes
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto text-center md:text-left">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                  89% faster
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insight */}
      <div className="mt-8 text-center">
        <Card className="inline-block border-2 border-teal-200 bg-teal-50/50">
          <CardContent className="p-6">
            <p className="text-lg text-slate-700 max-w-2xl">
              <strong className="text-teal-900">The power of voice:</strong> You describe the outcome in natural language.
              The AI figures out which agents to use, in what order, and handles all the coordination.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
