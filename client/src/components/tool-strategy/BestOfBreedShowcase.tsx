import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Shield, Zap } from "lucide-react";

interface Tool {
  name: string;
  pricing: string;
  description: string;
  keyFeatures: string[];
  compliance: string[];
  whyNotPlatform: string;
  rating?: number;
}

interface Category {
  name: string;
  icon: string;
  color: string;
  tools: Tool[];
  categoryInsight: string;
}

const categories: Category[] = [
  {
    name: "Writing & Communication",
    icon: "✍️",
    color: "blue",
    categoryInsight: "Platform tools offer basic writing assistance, but specialized tools deliver 40% higher quality output (Harvard/MIT research, 2025)",
    tools: [
      {
        name: "ChatGPT Plus (GPT-5)",
        pricing: "$20/month",
        description: "General-purpose AI with GPT-5, agentic browsing, real-time web search, DALL-E image generation",
        keyFeatures: ["GPT-5 (Aug 2025) - state-of-the-art reasoning", "Agentic web browsing", "Custom instructions and GPTs", "Voice conversations with Advanced Voice Mode"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "GPT-5 available 2 months before Copilot (Aug vs Oct 2025), plus unconstrained creativity without enterprise content filters",
        rating: 4.7
      },
      {
        name: "Claude Pro (Sonnet 4.5)",
        pricing: "$20/month",
        description: "Best coding model in the world, long-form content analysis with 1M context window",
        keyFeatures: ["1M token context window (with beta header)", "Sonnet 4.5 - best coding performance", "Artifact creation for workflows", "Superior reasoning and nuanced analysis"],
        compliance: ["SOC 2 Type II", "GDPR", "HIPAA (Enterprise)"],
        whyNotPlatform: "5x longer context than Copilot, world-class coding performance that platform tools can't match, Artifacts feature for structured workflows",
        rating: 4.8
      },
      {
        name: "Jasper",
        pricing: "$39-125/month",
        description: "Marketing copy specialization with brand voice training and SEO optimization",
        keyFeatures: ["Brand voice templates and training", "SEO optimization tools", "Multi-language support (30+ languages)", "Plagiarism checker and originality score"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Purpose-built for marketing with industry templates, tone consistency, and SEO tools that generic AI lacks",
        rating: 4.5
      }
    ]
  },
  {
    name: "Research & Knowledge",
    icon: "🔬",
    color: "purple",
    categoryInsight: "Platform search is basic keyword matching. Specialized tools use AI reasoning + real-time sources for 95%+ citation accuracy (2025 benchmarks)",
    tools: [
      {
        name: "Perplexity Pro",
        pricing: "$20 Pro, $40 Enterprise Pro",
        description: "AI-powered research with real-time citations, source verification, and enterprise security (SOC 2, HIPAA)",
        keyFeatures: ["Real-time web search with 100+ sources per query", "Academic and professional source access", "Citation tracking and verification", "Thread-based research workflows", "Enterprise: Never trains on your data"],
        compliance: ["SOC 2", "GDPR", "HIPAA", "End-to-end encryption"],
        whyNotPlatform: "Provides verifiable sources with citations, not just generated text. Enterprise version offers audit logs, SCIM security, and data retention controls",
        rating: 4.8
      },
      {
        name: "Consensus",
        pricing: "$9-20/month",
        description: "Search 200M+ academic papers with AI-powered synthesis and claim verification",
        keyFeatures: ["Peer-reviewed sources only", "Claim verification against studies", "Study quality scoring (methodology, sample size)", "Citation export (BibTeX, EndNote)"],
        compliance: ["SOC 2"],
        whyNotPlatform: "Access to scientific literature that platform tools can't reach, with quality scoring for research validity and systematic review support",
        rating: 4.6
      },
      {
        name: "Elicit",
        pricing: "$10-25/month",
        description: "Research assistant for literature reviews, data extraction, and evidence synthesis",
        keyFeatures: ["Paper summarization and key findings extraction", "Data extraction tables from studies", "Research workflows for systematic reviews", "Evidence synthesis across multiple papers"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Designed for systematic reviews and meta-analyses - workflow platform tools don't support. Built for researchers by researchers.",
        rating: 4.5
      }
    ]
  },
  {
    name: "Data Analysis",
    icon: "📊",
    color: "green",
    categoryInsight: "Excel Copilot does basic formulas. Specialized tools do statistical analysis, ML models, advanced visualizations, and connect to data warehouses (November 2025)",
    tools: [
      {
        name: "Julius AI",
        pricing: "$20 Lite, $45 Standard, $60 Pro",
        description: "Natural language data analysis with statistical modeling, ML, and data warehouse connections",
        keyFeatures: ["Python/R code generation for analysis", "Statistical tests and ML models", "Interactive visualizations (charts, heatmaps, scatter plots)", "Data connectors: Snowflake, BigQuery, Postgres (Pro)", "15% discount on annual billing"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Performs advanced statistics and ML that Excel Copilot can't: regression, clustering, time series forecasting, predictive modeling. Connects to enterprise data warehouses.",
        rating: 4.7
      },
      {
        name: "Hex",
        pricing: "$0-Enterprise",
        description: "Collaborative data science platform with AI SQL generation and production pipelines",
        keyFeatures: ["AI SQL query generation", "Notebook interface (like Jupyter)", "Team collaboration and version control", "Data warehouse connections (Snowflake, BigQuery, Redshift)", "Production deployment pipelines"],
        compliance: ["SOC 2", "HIPAA", "GDPR"],
        whyNotPlatform: "Built for data teams - connects directly to warehouses, version control, and production pipelines. Enterprise-grade collaboration that platform tools lack.",
        rating: 4.7
      }
    ]
  },
  {
    name: "Voice & Transcription",
    icon: "🎤",
    color: "red",
    categoryInsight: "Platform transcription is cloud-only with privacy concerns. Best-of-breed offers local processing, system-wide integration, and integration with GPT-5/Claude 4.5 (2025)",
    tools: [
      {
        name: "Superwhisper",
        pricing: "$8.49/month Pro, $84.99/year",
        description: "Local Mac/iPhone/Windows voice-to-text with GPT-5 and Claude Sonnet integration, system-wide dictation",
        keyFeatures: ["Offline processing (maximum privacy)", "Mac, iPhone, and Windows (new in 2025)", "100+ languages supported", "GPT-5 and Claude Sonnet 4.5 integration", "System-wide hotkey (⌥+Space)", "Custom vocabulary and replacements"],
        compliance: ["Local processing - no cloud data transmission"],
        whyNotPlatform: "Processes locally for privacy, works everywhere (not just Office), 95%+ accuracy for technical terminology. Windows version now available.",
        rating: 4.9
      },
      {
        name: "Wispr Flow",
        pricing: "$12-20/month",
        description: "AI voice commands across all macOS applications with context awareness",
        keyFeatures: ["Universal dictation (system-level)", "Context awareness for better accuracy", "Punctuation AI and instant correction", "Works in Slack, browsers, code editors, everywhere"],
        compliance: ["Local processing (no cloud)"],
        whyNotPlatform: "System-level integration Microsoft can't match - works universally across all applications, not just Microsoft ecosystem",
        rating: 4.7
      },
      {
        name: "Otter.ai",
        pricing: "$17-40/month",
        description: "Meeting transcription with speaker identification, action items, and integration with Zoom/Teams/Meet",
        keyFeatures: ["Real-time transcription during meetings", "Speaker separation and identification", "Action item extraction and follow-ups", "Meeting summaries and highlights", "Integration with Zoom, Teams, Google Meet"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Superior speaker diarization and meeting-specific features (action items, follow-ups, integrations) vs. generic transcription in Copilot",
        rating: 4.6
      }
    ]
  },
  {
    name: "Developer Tools",
    icon: "💻",
    color: "indigo",
    categoryInsight: "Platform code assistants are limited to specific IDEs. Best-of-breed tools offer multi-model access (GPT-5, Claude 4.5, Gemini 3.0) and agent capabilities (2025)",
    tools: [
      {
        name: "GitHub Copilot",
        pricing: "$0 Free, $10 Pro, $39 Pro+",
        description: "AI pair programmer with access to Claude Haiku 4.5 (free tier), GPT-5, and multi-file agent capabilities",
        keyFeatures: ["Free tier: 2,000 completions + Claude Haiku 4.5", "Pro: GPT-5, Claude models, 300 premium requests", "Pro+: Claude Opus 4, OpenAI o3, 1,500 requests", "Copilot coding agent for multi-file tasks", "Code reviews and model selection"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Multi-model access (choose best model for task), free tier democratizes access, agent capabilities for complex refactoring that basic code completion can't handle",
        rating: 4.7
      },
      {
        name: "Cursor AI",
        pricing: "$20 Pro, $40 Teams, $200 Ultra",
        description: "AI code editor with Cursor 2.0 (Oct 2025): purpose-built coding model and agent mode for complex refactoring",
        keyFeatures: ["Cursor 2.0: Purpose-built coding model", "Agent mode for complex multi-file refactoring", "Tab autocomplete with real-time suggestions", "Access to GPT-5, Claude Opus 4, Gemini 3.0", "Credit-based pricing (not request-based)"],
        compliance: ["SOC 2", "Enterprise SSO"],
        whyNotPlatform: "Purpose-built editor with agent capabilities for complex refactoring. Multi-model selection lets you choose best tool for each task (GPT-5 for general, Claude 4.5 for coding)",
        rating: 4.8
      }
    ]
  },
  {
    name: "Visual & Design",
    icon: "🎨",
    color: "pink",
    categoryInsight: "Platform tools (Designer in Office) have limited styles and control. Specialists offer 10x more artistic capability and professional quality (2025 benchmarks)",
    tools: [
      {
        name: "Midjourney",
        pricing: "$30-120/month",
        description: "Industry-leading AI image generation with photorealistic rendering and style consistency",
        keyFeatures: ["Photorealistic rendering at frontier quality", "Style consistency across generations", "Version control and iterative refinement", "Commercial licensing included", "Used by professional designers and studios"],
        compliance: ["Standard commercial license"],
        whyNotPlatform: "Image quality and artistic control far exceeds DALL-E in Copilot - industry standard for professional designers and creative agencies",
        rating: 4.8
      },
      {
        name: "Gamma",
        pricing: "$10-20/month",
        description: "AI-powered presentation and document creation with one-click design and image generation",
        keyFeatures: ["One-click complete presentation design", "Auto-formatting and layout intelligence", "AI image generation integrated", "Export to PowerPoint/PDF", "Collaboration and sharing"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Creates full presentation designs vs. Copilot's slide-by-slide assistance - 10x faster for deck creation with professional design intelligence",
        rating: 4.5
      },
      {
        name: "Beautiful.ai",
        pricing: "$12-40/month",
        description: "Smart presentation design with automatic layouts and visual hierarchy intelligence",
        keyFeatures: ["Auto-layout engine with design intelligence", "Brand templates and style libraries", "Team libraries for consistency", "Animation presets and transitions", "Real-time collaboration"],
        compliance: ["SOC 2", "GDPR"],
        whyNotPlatform: "Design intelligence that auto-adjusts layouts for visual hierarchy - PowerPoint Copilot just generates content, doesn't understand design principles",
        rating: 4.4
      }
    ]
  }
];

export function BestOfBreedShowcase() {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.name} className="space-y-6">
          {/* Category Header */}
          <div className={`bg-gradient-to-r from-${category.color}-50 to-${category.color}-100/50 p-6 rounded-lg border-2 border-${category.color}-200`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
            </div>
            <p className="text-sm text-slate-700 italic">{category.categoryInsight}</p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.tools.map((tool) => (
              <Card key={tool.name} className="border-2 border-slate-200 hover:border-green-300 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    {tool.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{tool.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-900 border-green-300 text-xs">
                      {tool.pricing}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">{tool.description}</p>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 mb-2 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {tool.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1">
                          <span className="text-green-600 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 mb-1 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Compliance
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.compliance.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Why not platform alternative?</p>
                    <p className="text-xs text-slate-600">{tool.whyNotPlatform}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Summary Insight */}
      <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="pt-6">
          <h3 className="font-bold text-green-900 mb-3 text-lg">The Best-of-Breed Advantage (November 2025)</h3>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <strong>Platform tools are "good enough" for basic tasks.</strong> Best-of-breed tools are purpose-built
              for excellence in specific domains. The difference isn't marginal - it's transformational.
            </p>
            <p>
              <strong>Example:</strong> Excel Copilot can write basic formulas. Julius AI can perform regression analysis,
              build ML models, connect to Snowflake/BigQuery, and generate publication-ready statistical visualizations -
              work that would otherwise require a data scientist with Python/R expertise.
            </p>
            <p>
              <strong>Cost perspective (November 2025):</strong> At $8-25/month per tool, even using 4-5 specialized tools
              ($40-100/month) costs less than Microsoft 365 Copilot ($30/month + $36-57 E3/E5 base license = $66-87 total)
              while delivering far superior results for each task type. Plus, you get GPT-5 and Claude 4.5 access 2 months
              before Copilot users.
            </p>
            <p>
              <strong>Multi-model access:</strong> Best-of-breed tools now support multiple frontier models. GitHub Copilot
              offers GPT-5, Claude 4.5, and Gemini 3.0. Superwhisper integrates GPT-5 and Claude Sonnet. You're not locked
              to Microsoft's model choices and feature timelines.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
