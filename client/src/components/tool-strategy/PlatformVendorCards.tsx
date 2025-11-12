import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, TrendingUp, Shield, DollarSign, Clock } from "lucide-react";

interface PlatformVendor {
  name: string;
  subtitle: string;
  logo: string;
  color: string;
  strengths: string[];
  limitations: string[];
  bestFor: string;
  compliance: string[];
  pricing: string;
  innovationLag: string;
  examples: string[];
}

const vendors: PlatformVendor[] = [
  {
    name: "Microsoft 365 Copilot",
    subtitle: "Enterprise AI for Office Suite (GPT-5 Powered)",
    logo: "🏢",
    color: "blue",
    strengths: [
      "Deep Office 365 integration (Word, Excel, PowerPoint, Outlook, Teams)",
      "Role-based solutions included at no extra cost (Sales, Service, Finance - Oct 2025)",
      "Copilot Chat: New consumption-based pricing ($0.01/message)",
      "Enterprise support with SLAs and 24/7 coverage",
      "Extensive compliance certifications (FedRAMP, HIPAA)",
      "Single sign-on with Azure AD and unified admin console"
    ],
    limitations: [
      "Microsoft ecosystem lock-in",
      "2-month feature lag after OpenAI releases (improved from 3-6 months)",
      "Higher total cost ($66-87/user with E3/E5 base license)",
      "Limited customization options",
      "Requires E3/E5 licenses as prerequisite ($36-57/month)"
    ],
    bestFor: "Organizations fully committed to Microsoft stack with strict IT governance requirements and need for enterprise support",
    compliance: ["FedRAMP", "HIPAA", "SOC 2", "ISO 27001", "GDPR"],
    pricing: "$30/user/month (annual), Copilot Chat: $0.01/message consumption option",
    innovationLag: "2 months typical (improved from 3-6 months)",
    examples: [
      "GPT-5: OpenAI (Aug 2025) → Azure OpenAI (Aug 2025) → Copilot (Oct 2025) - 2 month lag",
      "October 2025: Role-based solutions (Sales, Service, Finance) now included at no extra cost",
      "November 2025: Consumption-based Copilot Chat launched alongside seat-based model"
    ]
  },
  {
    name: "Google Workspace with Gemini",
    subtitle: "AI Bundled into Workspace (Strategic Shift in 2025)",
    logo: "🔍",
    color: "green",
    strengths: [
      "Gemini 3.0 bundled into all Business/Enterprise plans (no separate add-on)",
      "Major strategic shift: $14/month total vs $32+/month in 2024 model",
      "Gmail, Docs, Sheets, Drive integration with 'Help me write'",
      "Real-time collaboration features and meeting summaries in Meet",
      "NotebookLM Plus included with Business/Enterprise plans",
      "Gemini 3.0 Pro launching November 18, 2025 (1M context window)"
    ],
    limitations: [
      "Gemini 3.0 still catching up to GPT-5/Claude 4.5 in some benchmarks",
      "Google ecosystem dependency",
      "Fewer third-party integrations vs Microsoft",
      "No access to non-Google models (OpenAI, Anthropic)"
    ],
    bestFor: "Google Workspace organizations wanting integrated AI at competitive pricing without separate add-on costs",
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA (for Workspace Enterprise Plus)"],
    pricing: "$14/user/month Business Standard (Gemini bundled) - was $32+ in 2024",
    innovationLag: "Same-day for Gemini, N/A for other models",
    examples: [
      "January 2025: Strategic pivot - Gemini eliminated as separate product, now core feature",
      "Gemini 3.0 Pro: Launching Nov 18, 2025 with 1M context, multimodal excellence",
      "Price reduction: Was $12 Workspace + $20 Gemini = $32, now $14 total (56% savings)"
    ]
  },
  {
    name: "AWS Bedrock",
    subtitle: "Multi-Model AI Platform (Claude 4.5, Llama 4, Mistral)",
    logo: "☁️",
    color: "orange",
    strengths: [
      "Access to frontier models: Claude 4.5, Llama 4 (400B params), Mistral Medium 3",
      "Same-day availability for Anthropic and Meta model releases",
      "Infrastructure-as-code deployment with AWS CDK/Terraform",
      "Granular cost control and pay-per-use pricing",
      "Custom model fine-tuning and private deployment options",
      "Integration with AWS services (Lambda, S3, SageMaker)"
    ],
    limitations: [
      "Requires significant AWS expertise and DevOps knowledge",
      "Developer-focused (not end-user friendly)",
      "No built-in UI - must build interfaces yourself",
      "AWS ecosystem lock-in with proprietary APIs",
      "Steeper learning curve vs turnkey solutions"
    ],
    bestFor: "Technical teams building custom AI applications with cloud-native requirements and multi-model strategies",
    compliance: ["FedRAMP", "HIPAA", "SOC 2", "ISO 27001", "PCI DSS"],
    pricing: "Pay-per-use (Claude 4.5: $3/$15 per million tokens, varies by model)",
    innovationLag: "Same-day for Anthropic/Meta, 1-2 months for others",
    examples: [
      "Claude Sonnet 4.5: Anthropic (Sept 29, 2025) → Bedrock (Sept 29, 2025) - same day",
      "Claude Haiku 4.5: Anthropic (Oct 15, 2025) → Bedrock (Oct 15, 2025) - same day",
      "Llama 4 Maverick: Meta (April 2025) → Bedrock (April 2025) - same day"
    ]
  },
  {
    name: "Azure OpenAI Service",
    subtitle: "Enterprise OpenAI with Microsoft SLAs (GPT-5 Access)",
    logo: "⚡",
    color: "indigo",
    strengths: [
      "Enterprise access to GPT-5 and OpenAI's latest models",
      "Same-day availability for GPT-5 (improved from 1-3 month lag)",
      "Microsoft support, SLAs, and 24/7 enterprise assistance",
      "Private deployment options with data residency controls",
      "Integration with Azure services (Functions, Cognitive Services)",
      "Content filtering and responsible AI tools built-in"
    ],
    limitations: [
      "Azure ecosystem lock-in with Microsoft-specific APIs",
      "10-30% pricing premium over direct OpenAI API",
      "Requires Azure expertise and Azure subscription",
      "Limited to OpenAI models only (no Claude, Llama, etc.)",
      "Some OpenAI features arrive later than direct API"
    ],
    bestFor: "Enterprises wanting GPT-5 capabilities with Microsoft support, compliance guarantees, and Azure integration",
    compliance: ["FedRAMP", "HIPAA", "SOC 2", "ISO 27001", "GDPR"],
    pricing: "Pay-per-use (10-30% premium over OpenAI API rates)",
    innovationLag: "Same-day for major releases (improved in 2025)",
    examples: [
      "GPT-5: OpenAI (Aug 7, 2025) → Azure OpenAI (Aug 7, 2025) - same day (improved)",
      "GPT-5.1 series: Expected same-day availability (Nov 24, 2025)",
      "Microsoft now prioritizing Azure OpenAI parity with OpenAI API"
    ]
  }
];

export function PlatformVendorCards() {
  return (
    <div className="space-y-6">
      {vendors.map((vendor) => (
        <Card key={vendor.name} className={`border-2 border-${vendor.color}-200 hover:shadow-lg transition-shadow`}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{vendor.logo}</div>
                <div>
                  <CardTitle className="text-2xl mb-1">{vendor.name}</CardTitle>
                  <p className="text-sm text-slate-600">{vendor.subtitle}</p>
                </div>
              </div>
              <Badge className={`bg-${vendor.color}-100 text-${vendor.color}-900 border-${vendor.color}-300`}>
                Platform
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pricing & Innovation Lag */}
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex items-start gap-2">
                <DollarSign className={`h-5 w-5 text-${vendor.color}-600 mt-0.5`} />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Pricing</p>
                  <p className="text-sm text-slate-900">{vendor.pricing}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className={`h-5 w-5 text-${vendor.color}-600 mt-0.5`} />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Innovation Lag</p>
                  <p className="text-sm text-slate-900">{vendor.innovationLag}</p>
                </div>
              </div>
            </div>

            {/* Strengths & Limitations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {vendor.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <X className="h-4 w-4 text-red-500" />
                  Limitations
                </h4>
                <ul className="space-y-2">
                  {vendor.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                Compliance & Security
              </h4>
              <div className="flex flex-wrap gap-2">
                {vendor.compliance.map((cert) => (
                  <Badge key={cert} variant="outline" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div className={`bg-${vendor.color}-50 p-4 rounded-lg border border-${vendor.color}-200`}>
              <p className="font-semibold text-slate-900 mb-2">Best For:</p>
              <p className="text-sm text-slate-700">{vendor.bestFor}</p>
            </div>

            {/* Innovation Examples */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">2025 Feature Release Timeline:</h4>
              <ul className="space-y-1">
                {vendor.examples.map((example, i) => (
                  <li key={i} className="text-sm text-slate-600 pl-4 border-l-2 border-slate-300">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Key Insight Card */}
      <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
        <CardContent className="pt-6">
          <h3 className="font-bold text-amber-900 mb-3 text-lg">Key Insight: The Platform Trade-off (November 2025)</h3>
          <p className="text-slate-700 mb-4">
            Platform vendors prioritize <strong>integration and stability</strong> over <strong>innovation speed</strong>.
            While integration lag has improved in 2025 (Microsoft now at 2 months vs 3-6 previously), you still wait for
            cutting-edge features that are already available in best-of-breed tools.
          </p>
          <p className="text-sm text-slate-600 mb-3">
            <strong>Example:</strong> GPT-5 launched August 7, 2025. Available immediately via ChatGPT and Azure OpenAI,
            but Microsoft 365 Copilot users waited until October 2025 - a 2 month lag for the integrated experience.
          </p>
          <p className="text-sm text-slate-600">
            <strong>Google's 2025 Strategic Shift:</strong> Google Workspace eliminated Gemini as a separate add-on,
            bundling it into all Business/Enterprise plans at $14/month (vs $32+ in 2024). This aggressive pricing move
            challenges Microsoft's premium model while still keeping Gemini users 2-3 months behind frontier capabilities
            from GPT-5 and Claude 4.5.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
