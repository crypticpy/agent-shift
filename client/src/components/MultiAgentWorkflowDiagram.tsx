import { Target, Users, FileCheck, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MultiAgentWorkflowDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
        How Agents Work Together
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Some agents work in parallel (at the same time). Others work sequentially (one after another).
        You orchestrate both.
      </p>

      <div className="space-y-6">
        {/* YOU: Define Outcome */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-orange-600" />
              <div className="text-center">
                <div className="font-bold text-xl text-slate-900">YOU: Define Outcome</div>
                <div className="text-sm text-slate-600 mt-1">
                  "Create a comprehensive policy analysis on remote work with data, recommendations, and presentation"
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-slate-400" />
        </div>

        {/* Parallel Agents */}
        <div>
          <div className="text-center mb-4">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
              PARALLEL PROCESSING (Happens Simultaneously)
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Research Agent</div>
                    <div className="text-sm text-slate-600">
                      Gather studies on remote work effectiveness
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Data Agent</div>
                    <div className="text-sm text-slate-600">
                      Extract productivity metrics from internal systems
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Survey Agent</div>
                    <div className="text-sm text-slate-600">
                      Analyze employee feedback on remote work
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-teal-700 font-medium">
              All three agents work at the same time → Faster results
            </span>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-slate-400" />
        </div>

        {/* Sequential Agents */}
        <div>
          <div className="text-center mb-4">
            <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              SEQUENTIAL PROCESSING (Happens One After Another)
            </span>
          </div>

          <div className="space-y-4">
            <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-violet-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">Analysis Agent</div>
                    <div className="text-sm text-slate-600">
                      Waits for agents 1-3 to finish, then synthesizes all findings
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-purple-400" />
            </div>

            <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-violet-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">Writing Agent</div>
                    <div className="text-sm text-slate-600">
                      Uses analysis from agent 4 to draft policy recommendations
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-purple-400" />
            </div>

            <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-violet-50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    6
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">Visualization Agent</div>
                    <div className="text-sm text-slate-600">
                      Creates charts and presentation slides from the written content
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-purple-700 font-medium">
              Each agent builds on the previous one's work → Quality results
            </span>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-slate-400" />
        </div>

        {/* YOU: Review */}
        <Card className="border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-50 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-3">
              <FileCheck className="h-8 w-8 text-emerald-600" />
              <div className="text-center">
                <div className="font-bold text-xl text-slate-900">YOU: Review & Approve</div>
                <div className="text-sm text-slate-600 mt-1">
                  Check the analysis, adjust recommendations, add your expertise → Final product ready
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-teal-200 bg-teal-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-slate-900 mb-2">Parallel = Speed</div>
                <p className="text-sm text-slate-700">
                  When agents can work independently (research, data gathering, surveys),
                  run them at the same time. This cuts total time dramatically.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-purple-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-slate-900 mb-2">Sequential = Quality</div>
                <p className="text-sm text-slate-700">
                  When agents need outputs from previous agents (analysis needs data first),
                  run them in sequence. Each builds on solid foundations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Insight */}
      <div className="mt-6 text-center">
        <Card className="inline-block border-2 border-orange-200 bg-orange-50/50">
          <CardContent className="p-6">
            <p className="text-lg text-slate-700 max-w-2xl">
              <strong className="text-orange-900">Your orchestration skill:</strong> Knowing which agents to run in parallel
              (for speed) and which to run sequentially (for quality). The best workflows use both.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
