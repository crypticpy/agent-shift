import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingDown, Settings, GraduationCap, DollarSign, Link2 } from "lucide-react";

interface Concern {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  details: string[];
  example?: string;
}

const concerns: Concern[] = [
  {
    id: "security",
    icon: <Shield className="h-5 w-5 text-blue-600" />,
    question: "Are best-of-breed tools as secure as platform options?",
    answer: "Yes - enterprise versions of leading AI tools meet the same or higher security standards as platform vendors.",
    details: [
      "ChatGPT Enterprise, Claude, and Perplexity offer SOC 2, GDPR, and HIPAA compliance",
      "Many tools offer on-premise or private cloud deployment options",
      "Data residency controls available for regulated industries",
      "Audit trails and admin controls comparable to platform tools",
      "Some tools (like Superwhisper) process locally for maximum privacy"
    ],
    example: "Anthropic (Claude) is SOC 2 Type II certified, HIPAA compliant, and offers private deployment. Your data is never used for training, and you can delete it anytime."
  },
  {
    id: "vendor-stability",
    icon: <TrendingDown className="h-5 w-5 text-red-600" />,
    question: "What if a specialist vendor goes out of business?",
    answer: "Leading AI vendors are well-funded with Fortune 500 customers. Plus, data portability makes switching easy.",
    details: [
      "OpenAI: $13B funding from Microsoft, 100M+ active users globally",
      "Anthropic: $7B funding from Amazon and Google (2025)",
      "All major tools offer instant data export capabilities",
      "No long-term contracts - switch tools in days, not months",
      "Open-source alternatives (LangChain, CrewAI, n8n) provide safety net",
      "Multi-model access means no single-vendor dependency"
    ],
    example: "If Perplexity shut down tomorrow (Nov 2025), you could switch to ChatGPT search (GPT-5) or Claude in one day. Compare that to migrating off Microsoft - a multi-year project."
  },
  {
    id: "it-management",
    icon: <Settings className="h-5 w-5 text-purple-600" />,
    question: "How do we manage 10 different tools?",
    answer: "Modern integration tools and SSO make multi-tool management straightforward, especially at scale.",
    details: [
      "Single Sign-On (SSO): Okta, Azure AD, Google Workspace connect all tools",
      "Centralized billing: Vendor management platforms aggregate invoices",
      "API integrations: Zapier, Make, or custom APIs connect workflows",
      "Admin dashboards: Most tools provide usage analytics and controls",
      "User provisioning: Automated onboarding/offboarding"
    ],
    example: "A 200-person team uses 8 AI tools managed through Okta SSO. IT spends ~2 hours/month on management vs. 0 hours for a platform, but saves $50K/year and gets better tools."
  },
  {
    id: "training",
    icon: <GraduationCap className="h-5 w-5 text-green-600" />,
    question: "Will users actually adopt multiple tools?",
    answer: "Yes - modern AI tools have 30-minute learning curves, and natural language interfaces reduce training needs.",
    details: [
      "ChatGPT/Claude: If you can type a question, you can use it",
      "Most tools offer free trials - users test before committing",
      "Natural language eliminates complex training requirements",
      "Users prefer tools that make their work easier (AI tools do)",
      "Adoption rates: 80%+ for tools that deliver clear value"
    ],
    example: "Harvard Business School study (2025) found 90% adoption rate for AI tools among consultants within 2 weeks, with minimal training. Compare to typical enterprise software: 40% adoption after 6 months."
  },
  {
    id: "cost-management",
    icon: <DollarSign className="h-5 w-5 text-amber-600" />,
    question: "Will costs spiral out of control?",
    answer: "No - with proper planning, best-of-breed costs are predictable and often lower than platform bundles.",
    details: [
      "Set per-user budget caps (e.g., $100/month max per person)",
      "Role-based access: Not everyone needs every tool",
      "Track ROI: Remove tools that don't deliver value",
      "Negotiate volume discounts for 50+ users",
      "Most tools have free tiers for light users"
    ],
    example: "50-person team budget (Nov 2025): $100/user/month = $5K/month total. Microsoft 365 Copilot costs $1.5K/month ($30 × 50) for GPT-5 with 2-month lag. Best-of-breed delivers frontier models (GPT-5, Claude 4.5) with 0-day access for 3.3x the cost but transformational results."
  },
  {
    id: "interoperability",
    icon: <Link2 className="h-5 w-5 text-indigo-600" />,
    question: "Will these tools work together?",
    answer: "Yes - modern AI tools have robust APIs and standardized integrations that make connecting them straightforward.",
    details: [
      "OpenAI-compatible APIs: Many tools follow OpenAI's API standard",
      "Native integrations: Most tools connect to Slack, Google Drive, etc.",
      "Middleware platforms: Zapier, Make, n8n handle complex workflows",
      "File format compatibility: All tools read/write standard formats (PDF, DOCX, CSV)",
      "Webhook support: Real-time data sync between systems"
    ],
    example: "Workflow example (Nov 2025): Perplexity research → ChatGPT (GPT-5) drafts summary → Claude (Sonnet 4.5) refines code → Google Docs → Slack notification. All connected via Zapier/n8n in 10 minutes."
  }
];

export function ConcernAccordion() {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="space-y-4">
        {concerns.map((concern) => (
          <AccordionItem
            key={concern.id}
            value={concern.id}
            className="border-2 border-slate-200 rounded-lg px-4 hover:border-orange-300 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <div className="flex-shrink-0">
                  {concern.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{concern.question}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                {/* Answer */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-1">Answer:</p>
                  <p className="text-slate-700">{concern.answer}</p>
                </div>

                {/* Details */}
                <div>
                  <p className="font-semibold text-slate-900 mb-3">Details:</p>
                  <ul className="space-y-2">
                    {concern.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-orange-600 font-bold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                {concern.example && (
                  <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded">
                    <p className="font-semibold text-slate-900 mb-1">Real-World Example:</p>
                    <p className="text-sm text-slate-700">{concern.example}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Additional Resources Card */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="p-6">
          <h3 className="font-bold text-orange-900 mb-3 text-lg">Still Have Concerns?</h3>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <strong>Start with a pilot:</strong> Test 2-3 tools with 5 users for 30 days. Measure results before
              committing to a larger rollout. Most concerns dissolve when teams see the actual impact.
            </p>
            <p>
              <strong>Benchmark against platform:</strong> Run parallel tests - same task with Copilot (GPT-5 with 2-month lag)
              vs. ChatGPT (GPT-5 immediate) vs. Claude (Sonnet 4.5). Let quality and speed speak for themselves.
            </p>
            <p>
              <strong>Talk to peers:</strong> 78% of organizations already use AI in at least one business function (November 2025).
              Find someone in your industry who's done this and learn from their experience.
            </p>
          </div>
        </div>
      </Card>

      {/* Comparison Table: Platform vs. Best-of-Breed Concerns */}
      <Card className="border-2 border-slate-200">
        <div className="p-6">
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Concern Comparison: Platform vs. Best-of-Breed</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-2 font-semibold text-slate-900">Concern</th>
                  <th className="text-left py-3 px-2 font-semibold text-blue-900">Platform Solution</th>
                  <th className="text-left py-3 px-2 font-semibold text-green-900">Best-of-Breed Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-2 font-medium text-slate-900">Security</td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-blue-100 text-blue-900 mb-2">Single vendor cert</Badge>
                    <p className="text-xs">FedRAMP, SOC 2 from one vendor</p>
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-green-100 text-green-900 mb-2">Per-tool certs</Badge>
                    <p className="text-xs">Each tool brings own certifications</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-slate-900">Vendor Risk</td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-blue-100 text-blue-900 mb-2">Low but locked in</Badge>
                    <p className="text-xs">Stable but hard to switch</p>
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-green-100 text-green-900 mb-2">Diversified</Badge>
                    <p className="text-xs">Easy to switch individual tools</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-slate-900">Management</td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-blue-100 text-blue-900 mb-2">Simple</Badge>
                    <p className="text-xs">One admin console</p>
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-green-100 text-green-900 mb-2">Manageable</Badge>
                    <p className="text-xs">SSO + Zapier handles most</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-slate-900">Training</td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-blue-100 text-blue-900 mb-2">Familiar UI</Badge>
                    <p className="text-xs">Same interface as Office</p>
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-green-100 text-green-900 mb-2">30-min each</Badge>
                    <p className="text-xs">Natural language = minimal training</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-slate-900">Cost Control</td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-blue-100 text-blue-900 mb-2">Bundled</Badge>
                    <p className="text-xs">Pay for all features (used or not)</p>
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    <Badge className="bg-green-100 text-green-900 mb-2">Granular</Badge>
                    <p className="text-xs">Pay only for tools you use</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
