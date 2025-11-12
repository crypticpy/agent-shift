import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export function VendorComparisonBrief() {
  return (
    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-amber-50/50">
      <CardHeader>
        <CardTitle className="text-xl">Platform vs. Best-of-Breed Tools: Quick Guide</CardTitle>
        <CardDescription>
          Understand your options for AI tool selection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Comparison Table */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Platform Approach */}
          <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-blue-100 text-blue-700 border-blue-300">Platform Bundle</Badge>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">
              Microsoft 365 Copilot, Google Workspace AI
            </p>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Integrated with existing tools</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Single vendor relationship</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Ecosystem lock-in</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Slower innovation (3-6 month lag)</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Higher bundled pricing ($30-60/user)</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 bg-blue-50 p-2 rounded border border-blue-200">
              <strong>Best for:</strong> Organizations with strict IT control requirements and deep platform integration needs
            </p>
          </div>

          {/* Best-of-Breed Approach */}
          <div className="bg-white p-4 rounded-lg border-2 border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-green-100 text-green-700 border-green-300">Best-of-Breed</Badge>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">
              Specialized tools for each use case
            </p>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Best-in-class for each task</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Rapid feature updates (weekly)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Flexible, no vendor lock-in</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Requires integration management</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Multiple vendor relationships</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 bg-green-50 p-2 rounded border border-green-200">
              <strong>Best for:</strong> Organizations prioritizing innovation speed, flexibility, and best-in-class results
            </p>
          </div>
        </div>

        {/* The AutoGen Insight */}
        <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 mb-2">The AutoGen Paradox:</p>
              <p className="text-sm text-amber-800 mb-2">
                <strong>40% of Fortune 100 companies use Microsoft's AutoGen</strong> framework for AI agents
                - but it's an <strong>open-source</strong>, flexible framework, not the closed Copilot Studio platform.
              </p>
              <p className="text-xs text-amber-700">
                Even Microsoft acknowledges that enterprise AI needs open, composable architectures.
                This validates the multi-vendor, best-of-breed approach for serious AI deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Hybrid Recommendation */}
        <Card className="bg-gradient-to-br from-primary/10 to-chart-1/10 border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Recommended: Hybrid Approach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Core Infrastructure</p>
                <p className="text-xs text-slate-600">Use platform for email, calendar, storage, identity</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Productivity Agents</p>
                <p className="text-xs text-slate-600">Best-of-breed tools for writing, research, analysis</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Integration Layer</p>
                <p className="text-xs text-slate-600">Connect with APIs, Zapier, or Make</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 pt-2">
              <strong>Example stack:</strong> Microsoft 365 for infrastructure + ChatGPT/Claude for writing +
              Perplexity for research + Julius AI for data analysis. Each tool excels at its job, and they
              work together via standard APIs.
            </p>
          </CardContent>
        </Card>

        {/* Call-to-Action for Detailed Guide */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-5 rounded-lg border-2 border-orange-300">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-semibold text-orange-900 mb-1">
                Need a deeper analysis?
              </p>
              <p className="text-sm text-orange-800">
                Explore our comprehensive tool selection guide with decision frameworks, cost comparisons,
                innovation speed timelines, and real-world case studies.
              </p>
            </div>
            <Link href="/tool-strategy">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white flex-shrink-0">
                View Full Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Decision Points */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm">Quick Decision Framework:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-mono text-primary">→</span>
              <span className="text-slate-700">
                <strong>Choose Platform if:</strong> You need tight IT control, single-vendor support, and fully integrated audit trails
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-green-600">→</span>
              <span className="text-slate-700">
                <strong>Choose Best-of-Breed if:</strong> You value innovation speed, flexibility, and world-class capabilities per task
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-orange-600">→</span>
              <span className="text-slate-700">
                <strong>Choose Hybrid if:</strong> You want the best of both - platform stability + specialist innovation (recommended)
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
