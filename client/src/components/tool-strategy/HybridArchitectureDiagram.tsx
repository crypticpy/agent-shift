import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Users, Building, Building2 } from "lucide-react";

interface StackExample {
  title: string;
  teamSize: string;
  icon: React.ReactNode;
  infrastructure: {
    provider: string;
    cost: string;
    services: string[];
  };
  aiTools: {
    name: string;
    cost: string;
    purpose: string;
  }[];
  integration: string;
  totalCostPerUser: string;
  timeSavings: string;
  insight: string;
}

const stackExamples: StackExample[] = [
  {
    title: "Small Team Stack",
    teamSize: "5-20 people",
    icon: <Users className="h-5 w-5" />,
    infrastructure: {
      provider: "Google Workspace Business Standard",
      cost: "$14/user/month",
      services: ["Gmail", "Drive", "Docs", "Calendar", "Meet", "Gemini 3.0 (bundled)"]
    },
    aiTools: [
      { name: "ChatGPT Plus (GPT-5)", cost: "$20", purpose: "General writing & analysis" },
      { name: "Perplexity Pro", cost: "$20", purpose: "Research & fact-checking" },
      { name: "Superwhisper Pro", cost: "$8.49", purpose: "Voice-to-text" }
    ],
    integration: "Native APIs (free)",
    totalCostPerUser: "$62.49/month",
    timeSavings: "5-10 hours/week per person",
    insight: "Light infrastructure + essential AI tools. Gemini bundled for basic tasks, use specialists (GPT-5, Perplexity) for critical work. Focus on immediate productivity gains."
  },
  {
    title: "Medium Team Stack",
    teamSize: "50-200 people",
    icon: <Building className="h-5 w-5" />,
    infrastructure: {
      provider: "Microsoft 365 E3",
      cost: "$36/user/month",
      services: ["Office Suite", "Teams", "SharePoint", "OneDrive", "Exchange"]
    },
    aiTools: [
      { name: "ChatGPT Team (GPT-5)", cost: "$25", purpose: "Collaboration & writing" },
      { name: "Perplexity Pro", cost: "$20", purpose: "Research & intelligence" },
      { name: "Julius AI Standard", cost: "$37.50", purpose: "Data analysis (annual discount)" },
      { name: "Superwhisper Pro", cost: "$8.49", purpose: "Meeting notes & dictation" }
    ],
    integration: "Zapier Professional ($30/month shared cost ≈ $0.60/user)",
    totalCostPerUser: "$127.59/month",
    timeSavings: "8-12 hours/week per person",
    insight: "Microsoft for infrastructure + best-of-breed for productivity. Integration layer handles workflows between systems."
  },
  {
    title: "Enterprise Stack",
    teamSize: "500+ people",
    icon: <Building2 className="h-5 w-5" />,
    infrastructure: {
      provider: "Microsoft 365 E5",
      cost: "$57/user/month",
      services: ["Full Office Suite", "Advanced Security", "Compliance", "Analytics", "Phone System"]
    },
    aiTools: [
      { name: "ChatGPT Enterprise (GPT-5)", cost: "$60", purpose: "Secure team collaboration" },
      { name: "Perplexity Enterprise Pro", cost: "$40", purpose: "Research platform" },
      { name: "Claude Enterprise (Sonnet 4.5)", cost: "$60", purpose: "Coding & analysis" },
      { name: "Custom integrations", cost: "$30", purpose: "Workflow automation" }
    ],
    integration: "Custom API layer + Power Automate (included in E5)",
    totalCostPerUser: "$247/month",
    timeSavings: "10-15 hours/week per person",
    insight: "Full enterprise infrastructure + frontier AI models (GPT-5, Claude 4.5). Multi-model strategy provides access to best capabilities. Custom integrations for specific workflows. SSO across all tools."
  }
];

export function HybridArchitectureDiagram() {
  return (
    <div className="space-y-8">
      {/* Architecture Diagram */}
      <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <CardHeader>
          <CardTitle className="text-2xl">Hybrid Architecture: How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Diagram */}
          <div className="space-y-4">
            {/* Top Layer - AI Tools */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-green-600 text-white">Layer 1: Productivity Agents</Badge>
                <span className="text-xs text-slate-600">(Best-of-Breed)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded border border-green-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Writing</div>
                  <div className="text-xs text-slate-600">ChatGPT/Claude</div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Research</div>
                  <div className="text-xs text-slate-600">Perplexity</div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Data</div>
                  <div className="text-xs text-slate-600">Julius AI</div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Voice</div>
                  <div className="text-xs text-slate-600">Superwhisper</div>
                </div>
              </div>
            </div>

            {/* Integration Layer */}
            <div className="flex items-center justify-center">
              <div className="bg-amber-100 border-2 border-amber-300 rounded-lg px-6 py-3 flex items-center gap-3">
                <ArrowUpDown className="h-5 w-5 text-amber-700" />
                <div>
                  <div className="font-semibold text-amber-900">Integration Layer</div>
                  <div className="text-xs text-amber-700">APIs • Zapier • Make • Native Connectors</div>
                </div>
              </div>
            </div>

            {/* Bottom Layer - Infrastructure */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-blue-600 text-white">Layer 2: Core Infrastructure</Badge>
                <span className="text-xs text-slate-600">(Platform)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="bg-white p-3 rounded border border-blue-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Email</div>
                  <div className="text-xs text-slate-600">Outlook/Gmail</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Calendar</div>
                  <div className="text-xs text-slate-600">Platform native</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Storage</div>
                  <div className="text-xs text-slate-600">Drive/OneDrive</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Identity</div>
                  <div className="text-xs text-slate-600">SSO/Azure AD</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 text-center">
                  <div className="font-semibold text-sm text-slate-900">Compliance</div>
                  <div className="text-xs text-slate-600">Platform certs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principle */}
          <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">
            <p className="font-semibold text-purple-900 mb-2">The Hybrid Principle:</p>
            <p className="text-sm text-purple-800">
              <strong>Use platforms for what they do best:</strong> Infrastructure, identity, compliance, and integration.
              <strong> Use specialists for what they do best:</strong> Advanced AI capabilities, innovation, and task-specific excellence.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Example Stacks by Team Size */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Example Stacks by Team Size</h3>

        {stackExamples.map((stack) => (
          <Card key={stack.title} className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    {stack.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{stack.title}</CardTitle>
                    <p className="text-sm text-slate-600">{stack.teamSize}</p>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-900 border-purple-300 text-lg px-4 py-2">
                  {stack.totalCostPerUser}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Infrastructure */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-900 border-blue-300">Infrastructure</Badge>
                </h4>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">{stack.infrastructure.provider}</span>
                    <span className="text-sm font-semibold text-blue-900">{stack.infrastructure.cost}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.infrastructure.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Tools */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-900 border-green-300">AI Tools</Badge>
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {stack.aiTools.map((tool) => (
                    <div key={tool.name} className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-900">{tool.name}</span>
                        <span className="text-xs font-semibold text-green-900">{tool.cost}</span>
                      </div>
                      <p className="text-xs text-slate-600">{tool.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-50 text-amber-900 border-amber-300">Integration</Badge>
                </h4>
                <p className="text-sm text-slate-700 bg-amber-50 p-3 rounded border border-amber-200">
                  {stack.integration}
                </p>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-xs font-semibold text-purple-900 mb-1">Time Savings</p>
                  <p className="text-lg font-bold text-purple-900">{stack.timeSavings}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-xs font-semibold text-purple-900 mb-1">Total Cost</p>
                  <p className="text-lg font-bold text-purple-900">{stack.totalCostPerUser}</p>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700 italic">{stack.insight}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cost Comparison */}
      <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
        <CardContent className="pt-6">
          <h3 className="font-bold text-purple-900 mb-4 text-lg">Cost Reality Check</h3>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-900 border-blue-300">Platform Only</Badge>
              <p>
                <strong>Microsoft 365 Copilot (Nov 2025):</strong> $30/user/month + E3/E5 license ($36-57)
                = <strong>$66-87/month</strong> for GPT-5 integrated with Office (2-month feature lag)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-green-100 text-green-900 border-green-300">Google Workspace (Nov 2025)</Badge>
              <p>
                <strong>Gemini bundled strategy:</strong> $14/month total (was $32+ in 2024)
                = <strong>$14/month</strong> for Gemini 3.0 bundled, major price reduction
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-amber-100 text-amber-900 border-amber-300">Best-of-Breed Only</Badge>
              <p>
                <strong>4-5 specialized tools (GPT-5, Claude 4.5):</strong> $8-25 each = <strong>$40-100/month</strong> for
                frontier model access with 0-day availability (no platform lag)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-purple-100 text-purple-900 border-purple-300">Hybrid (Recommended)</Badge>
              <p>
                <strong>Google Workspace ($14) + 2-3 AI tools:</strong>
                = <strong>$54-75/month</strong> for Gemini basic tasks + GPT-5/Claude 4.5 for critical work - best value proposition
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-purple-200">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              The Hybrid approach delivers the best value in November 2025: Google's bundled Gemini strategy ($14 vs $32+)
              makes infrastructure incredibly affordable, while specialists (GPT-5, Claude 4.5) provide frontier capabilities
              with zero platform lag.
            </p>
            <p className="text-sm text-purple-800">
              <strong>Key insight:</strong> You get platform integration where it matters (email, calendar, storage, basic AI)
              and cutting-edge frontier models where it counts (writing, research, coding, analysis) - all at lower total cost
              than Microsoft 365 Copilot while accessing GPT-5 and Claude 4.5 2 months earlier.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
