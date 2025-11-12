import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Download,
  Copy,
  TrendingUp,
  Lightbulb,
  Users,
  Target,
  BarChart3,
  FileText,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
  Stethoscope,
  Factory,
  DollarSign,
  Code,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { AgenticAIBusinessCasePrintable } from "@/components/AgenticAIBusinessCasePrintable";
import { MoneyParticles } from "@/components/MoneyParticles";

export default function AgenticAIBusinessCase() {
  const [activeTab, setActiveTab] = useState("roi");
  const [companyName, setCompanyName] = useState("");
  const [department, setDepartment] = useState("");
  const [useCase, setUseCase] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ref for the printable component
  const printableRef = useRef<HTMLDivElement>(null);

  // Configure print function with react-to-print
  const handlePrint = useReactToPrint({
    contentRef: printableRef,
    documentTitle: "Agentic-AI-Business-Case",
    pageStyle: `
      @page {
        size: A4;
        margin: 12mm 8mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `,
    onAfterPrint: () => {
      console.log("PDF ready - user can save from browser dialog");
    }
  });

  // Legacy text download function (keep for backup)
  const generatePDF = () => {
    // Now using handlePrint for beautiful PDFs
    // This function kept for reference
    if (handlePrint) {
      handlePrint();
    } else {
      console.error("handlePrint is not available");
    }
  };

  const copyTemplate = () => {
    const template = `
AGENTIC AI BUSINESS CASE PROPOSAL

Company: ${companyName || '[Your Company]'}
Department: ${department || '[Your Department]'}
Primary Use Case: ${useCase || '[Describe your use case]'}

EXECUTIVE SUMMARY
Implementing agentic AI systems presents a significant opportunity for ${companyName || '[Your Company]'} to enhance operational efficiency, expand capabilities, and maintain competitive advantage. This proposal outlines the business case for agentic AI adoption based on extensive industry research and peer-reviewed studies.

KEY STATISTICS
• Average ROI: 171% (192% in U.S. organizations)
• 74% achieve ROI within first year
• 59% report revenue increases
• 42% report cost reductions
• $2.1M average annual cost reduction with multi-agent systems

STRATEGIC BENEFITS BEYOND TIME SAVINGS

1. CAPABILITY EXPANSION
Enable employees to accomplish complex tasks without specialized training:
• Data analysis without statistical expertise
• Web development without coding skills
• Professional communications without business writing experience
• 34% productivity increase for less-skilled workers (Stanford/MIT)

2. SKILL DEMOCRATIZATION
Advanced capabilities become accessible to broader workforce:
• 80% of U.S. workers will see AI affect at least 10% of their tasks
• GitHub Copilot users: 55-75% higher productivity and job satisfaction
• Fortune 100: 40% now use Microsoft AutoGen for internal systems

3. QUALITY IMPROVEMENTS
Superior outputs through consistent best practices:
• 40% faster completion with 18% higher quality outputs
• 12x better performance on complex multi-step tasks vs. baseline LLMs
• Significant increases in SLA compliance and reductions in MTTR

4. ORGANIZATIONAL AGILITY
Faster response to market changes and business challenges:
• 1.6x more likely to exceed expectations with proper change management
• Human teams of 2-5 can supervise 50-100 specialized agents
• Enables continuous orchestration of human talent and AI agents

5. REDUCED SPECIALIST DEPENDENCY
Accomplish tasks without bottlenecks from limited specialist availability:
• 30% reduction in time spent on mundane, repetitive tasks
• 7.8% overall productivity increase
• Elevation of workers to supervisory roles overseeing AI agent squads

IMPLEMENTATION REQUIREMENTS FOR SUCCESS
• Formal AI strategy (80% success rate vs. 37% without)
• AI governance council (only 18% have this - significant predictor of success)
• Change management investment (1.6x more likely to exceed expectations)
• Data infrastructure and quality foundation
• Cultural emphasis on augmentation vs. replacement

MARKET VALIDATION
• 85% of organizations have integrated AI agents in at least one workflow (2025)
• 52% of executives report active AI agent deployment
• $199B projected market by 2034 (from $7.38B in 2025)
• 40% of Fortune 100 firms using AutoGen

RISK MITIGATION
Awareness of common failure modes:
• 40% of agentic AI projects may be canceled by end of 2027 (Gartner)
• Primary failure reasons: escalating costs, unclear business value, inadequate risk controls
• Success factors: disciplined use-case selection, proper governance, empowered line managers

NEXT STEPS
1. Assess organizational readiness (data infrastructure, governance, culture)
2. Develop formal AI strategy with clear business objectives
3. Build AI governance council
4. Select high-impact pilot use case
5. Invest in change management and upskilling

RESEARCH CITATIONS
• McKinsey QuantumBlack: "Seizing the agentic AI advantage"
• Stanford & MIT: "Generative AI at Work" - NBER Working Paper
• Gartner: Agentic AI predictions and market analysis
• Precedence Research: Agentic AI Market Size projections
• Harvard Business Review: "Why Agentic AI Projects Fail"
• Springer: "Architecting Agility: Impact of AI Capability"
• California Management Review: "The Non-Human Enterprise"

Generated from: AI Agent Portal Business Case Generator
    `.trim();

    navigator.clipboard.writeText(template);
  };

  return (
    <>
      {/* Hidden printable component */}
      <div style={{ display: "none" }}>
        <AgenticAIBusinessCasePrintable ref={printableRef} />
      </div>

      {/* Visible UI */}
      <div className="min-h-screen bg-gradient-to-br from-[oklch(0.98_0.02_35)] via-white to-[oklch(0.97_0.03_85)]">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] text-white py-16 relative overflow-hidden">
        <MoneyParticles className="z-0" spawnRate={3.0} maxParticles={60} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm font-medium">Research-Backed Business Case</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Business Case for Agentic AI
            </h1>
            <p className="text-xl opacity-95 mb-6">
              Beyond time savings: capability expansion, skill democratization, and strategic advantage
            </p>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              Comprehensive analysis based on 50+ peer-reviewed studies from McKinsey, Stanford, MIT, Gartner,
              and academic research institutions. Present this to leadership with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                variant="secondary"
                onClick={handlePrint}
                className="bg-white text-[oklch(0.65_0.18_35)] hover:bg-white/90"
              >
                <Download className="h-5 w-5 mr-2" />
                Download as PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white"
              >
                <a href="#template">
                  <FileText className="h-5 w-5 mr-2" />
                  Customize Template
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2 bg-transparent">
              <TabsTrigger
                value="roi"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[oklch(0.65_0.18_35)] data-[state=active]:to-[oklch(0.70_0.16_50)] data-[state=active]:text-white py-3"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                ROI & Statistics
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[oklch(0.65_0.18_35)] data-[state=active]:to-[oklch(0.70_0.16_50)] data-[state=active]:text-white py-3"
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Strategic Benefits
              </TabsTrigger>
              <TabsTrigger
                value="industries"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[oklch(0.65_0.18_35)] data-[state=active]:to-[oklch(0.70_0.16_50)] data-[state=active]:text-white py-3"
              >
                <Building2 className="h-4 w-4 mr-2" />
                Industries
              </TabsTrigger>
              <TabsTrigger
                value="implementation"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[oklch(0.65_0.18_35)] data-[state=active]:to-[oklch(0.70_0.16_50)] data-[state=active]:text-white py-3"
              >
                <Target className="h-4 w-4 mr-2" />
                Implementation
              </TabsTrigger>
              <TabsTrigger
                value="outlook"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[oklch(0.65_0.18_35)] data-[state=active]:to-[oklch(0.70_0.16_50)] data-[state=active]:text-white py-3"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Market Outlook
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: ROI & Statistics */}
            <TabsContent value="roi" className="space-y-6">
              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                    The ROI Reality: What the Numbers Actually Show
                  </CardTitle>
                  <CardDescription>
                    Comprehensive financial returns data from industry research and enterprise deployments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Financial Returns */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Financial Returns
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-green-700 mb-2">171%</div>
                          <div className="text-sm font-medium text-green-900">Average Expected ROI</div>
                          <div className="text-xs text-green-700 mt-1">192% in U.S. organizations</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-blue-700 mb-2">74%</div>
                          <div className="text-sm font-medium text-blue-900">Achieve ROI in Year 1</div>
                          <div className="text-xs text-blue-700 mt-1">From generative AI initiatives</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-orange-700 mb-2">152%</div>
                          <div className="text-sm font-medium text-orange-900">GenAI Average Return</div>
                          <div className="text-xs text-orange-700 mt-1">62% see &gt;100% returns</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-purple-700 mb-2">3.7x</div>
                          <div className="text-sm font-medium text-purple-900">ROI Per Dollar Invested</div>
                          <div className="text-xs text-purple-700 mt-1">In GenAI and related tech</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 border-l-4 border-slate-400 rounded">
                      <p className="text-xs text-slate-700">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.pagerduty.com/resources/ai/learn/companies-expecting-agentic-ai-roi-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          PagerDuty/Wakefield Research Survey (2025) <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.googlecloudpresscorner.com/2025-09-04-Google-Cloud-Study-Reveals-52-of-Executives-Say-Their-Organizations-Have-Deployed-AI-Agents,-Unlocking-a-New-Wave-of-Business-Value,1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Google Cloud Study (Sept 2025) <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Revenue and Cost Impact */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-[oklch(0.65_0.18_35)]" />
                      Revenue and Cost Impact
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900">59% Revenue Increases</div>
                          <div className="text-sm text-slate-600">Organizations report revenue growth from AI implementation</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900">42% Cost Reductions</div>
                          <div className="text-sm text-slate-600">Businesses implementing multi-agent systems save average $2.1M annually</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900">80% Reduction in Processing Costs</div>
                          <div className="text-sm text-slate-600">Direct Mortgage Corp: 20x faster loan application approval</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 border-l-4 border-slate-400 rounded">
                      <p className="text-xs text-slate-700">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          McKinsey Research (2025) <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://terralogic.com/multi-agent-ai-systems-why-they-matter-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Terralogic Study <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.creolestudios.com/real-world-ai-agent-case-studies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Creolestudios Case Studies <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Market Adoption */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-[oklch(0.65_0.18_35)]" />
                      Current Adoption State
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded-lg border-2 border-[oklch(0.65_0.18_35)]/20">
                        <div className="text-3xl font-bold text-[oklch(0.35_0.15_35)] mb-2">85%</div>
                        <div className="text-sm font-medium text-slate-700">Organizations Using AI Agents</div>
                        <div className="text-xs text-slate-600 mt-1">In at least one workflow (2025)</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded-lg border-2 border-[oklch(0.65_0.18_35)]/20">
                        <div className="text-3xl font-bold text-[oklch(0.35_0.15_35)] mb-2">52%</div>
                        <div className="text-sm font-medium text-slate-700">Executives Report Deployment</div>
                        <div className="text-xs text-slate-600 mt-1">Active AI agent usage</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded-lg border-2 border-[oklch(0.65_0.18_35)]/20">
                        <div className="text-3xl font-bold text-[oklch(0.35_0.15_35)] mb-2">40%</div>
                        <div className="text-sm font-medium text-slate-700">Fortune 100 Using AutoGen</div>
                        <div className="text-xs text-slate-600 mt-1">Microsoft's agentic framework</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Strategic Benefits */}
            <TabsContent value="benefits" className="space-y-6">
              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                    Five Strategic Benefits Beyond Time Savings
                  </CardTitle>
                  <CardDescription>
                    How agentic AI transforms organizational capabilities and competitive advantage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Benefit 1: Capability Expansion */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Sparkles className="h-6 w-6" />
                      1. Capability Expansion: Doing More Without Specialized Training
                    </h3>
                    <p className="text-blue-900 mb-4">
                      <strong>Core Benefit:</strong> Agentic AI enables employees to accomplish complex tasks they couldn't previously perform without extensive training or specialized knowledge.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-900"><strong>34% productivity increase</strong> for less-skilled workers (vs. 14% average across all skill levels)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-900">Workers with <strong>2 months experience + AI</strong> perform as well as 6+ months without AI</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-900">AI capability doubling every <strong>7 months</strong>; projected to handle month-long projects by decade's end</span>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded border border-blue-300">
                      <div className="font-semibold text-blue-900 mb-2">Real-World Applications:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-blue-900">
                        <li>Data analysis without statistical training</li>
                        <li>Web development without coding expertise</li>
                        <li>SharePoint administration without IT certification</li>
                        <li>Professional communications without business writing experience</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 rounded">
                      <p className="text-xs text-blue-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.nber.org/system/files/working_papers/w31161/w31161.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          Stanford & MIT: "Generative AI at Work" <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.cnbc.com/2023/04/25/stanford-and-mit-study-ai-boosted-worker-productivity-by-14percent.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          CNBC Study Coverage <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          METR: Long-Horizon Tasks <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2: Skill Democratization */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Users className="h-6 w-6" />
                      2. Skill Democratization: Breaking Down Knowledge Barriers
                    </h3>
                    <p className="text-purple-900 mb-4">
                      <strong>Core Benefit:</strong> Advanced capabilities previously limited to specialists become accessible to the broader workforce.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-purple-900"><strong>80% of U.S. workers</strong> will see AI affect at least 10% of their tasks</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-purple-900">GitHub Copilot users: <strong>55-75% higher productivity</strong> and job satisfaction</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-purple-900">Agentic framework adoption increased <strong>920%</strong> from early 2023 to mid-2025</span>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded border border-purple-300">
                      <div className="font-semibold text-purple-900 mb-2">Transformation Examples:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-purple-900">
                        <li>Knowledge workers: 65-86% time savings vs. human-only workflows</li>
                        <li>72% of companies use AI across multiple departments (up significantly YoY)</li>
                        <li>Cross-functional teams can handle tasks previously requiring specialists</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-purple-100 border-l-4 border-purple-500 rounded">
                      <p className="text-xs text-purple-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://futureofwork.saltlab.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          Stanford Future of Work Study <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://digitaldefynd.com/IQ/agentic-ai-statistics/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          DigitalDefynd Statistics <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          GitHub Research <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3: Quality Improvements */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      3. Quality Improvements: Enhanced Accuracy and Consistency
                    </h3>
                    <p className="text-green-900 mb-4">
                      <strong>Core Benefit:</strong> Agentic AI delivers superior quality outputs through consistent application of best practices and error detection.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-900"><strong>12x better performance</strong> on complex multi-step tasks vs. baseline LLMs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-900"><strong>40% faster completion</strong> with <strong>18% higher quality</strong> outputs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-900">Performance improved by <strong>18.8 to 67.3 percentage points</strong> year-over-year on benchmarks</span>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded border border-green-300">
                      <div className="font-semibold text-green-900 mb-2">Quality Mechanisms:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                        <li>Autonomous detection and correction of anomalies (duplicates, missing fields, formatting errors)</li>
                        <li>Consistent application of nuanced regulatory logic</li>
                        <li>Reduced human error through standardized processes</li>
                        <li>Significant increases in SLA compliance and reductions in MTTR</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 rounded">
                      <p className="text-xs text-green-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://research.aimultiple.com/ai-agent-performance/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          AI Multiple: Agent Performance <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.xenonstack.com/blog/agentic-ai-data-quality" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          XenonStack: Data Quality <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4: Organizational Agility */}
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200">
                    <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6" />
                      4. Organizational Agility: Faster Response to Change
                    </h3>
                    <p className="text-orange-900 mb-4">
                      <strong>Core Benefit:</strong> Organizations can adapt more quickly to market changes, business challenges, and new opportunities.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-orange-900"><strong>1.6x more likely</strong> to exceed expectations with proper change management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-orange-900">Human teams of <strong>2-5 people can supervise 50-100 specialized agents</strong></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-orange-900">AI architecture positively enables firm change capability and operational agility</span>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded border border-orange-300">
                      <div className="font-semibold text-orange-900 mb-2">Strategic Advantages:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-orange-900">
                        <li>Rapid workflow redesign and process optimization</li>
                        <li>Continuous orchestration of human talent and AI agents</li>
                        <li>Autonomous decision-making for routine operations</li>
                        <li>Organizations with highest AI outcomes display high trust, data fluency, and agility</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-orange-100 border-l-4 border-orange-500 rounded">
                      <p className="text-xs text-orange-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://link.springer.com/chapter/10.1007/978-3-031-36757-1_12" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline inline-flex items-center gap-1">
                          Springer: Architecting Agility <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/articles/build-ai-ready-culture.html" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline inline-flex items-center gap-1">
                          Deloitte: AI Culture <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://cmr.berkeley.edu/2025/10/the-non-human-enterprise-how-ai-agents-reshape-organizations/" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline inline-flex items-center gap-1">
                          UC Berkeley CMR <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Benefit 5: Reduced Specialist Dependency */}
                  <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border-2 border-red-200">
                    <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                      <Users className="h-6 w-6" />
                      5. Reduced Specialist Dependency: Strategic Workforce Flexibility
                    </h3>
                    <p className="text-red-900 mb-4">
                      <strong>Core Benefit:</strong> Organizations can accomplish specialized tasks without bottlenecks created by limited specialist availability.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-red-900"><strong>30% reduction</strong> in time spent on mundane, repetitive tasks</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-red-900"><strong>7.8% overall productivity increase</strong> across organizations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-red-900">Elevation of workers to <strong>supervisory roles</strong> overseeing AI agent squads</span>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded border border-red-300">
                      <div className="font-semibold text-red-900 mb-2">Role Evolution (Not Replacement):</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-red-900">
                        <li><strong>M-shaped supervisors:</strong> Broad generalists orchestrating agent teams</li>
                        <li><strong>T-shaped experts:</strong> Deep specialists handling exceptions and workflow redesign</li>
                        <li><strong>AI-augmented workers:</strong> Frontline employees with expanded capabilities</li>
                        <li><strong>Important:</strong> Rising demand for critical thinking, system design, and pattern recognition</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 rounded">
                      <p className="text-xs text-red-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.arionresearch.com/blog/wdj4ojs3wqkfdaxuey4j9ow2fa07au" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline inline-flex items-center gap-1">
                          Arion Research: Knowledge Workers <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://terralogic.com/multi-agent-ai-systems-why-they-matter-2025/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline inline-flex items-center gap-1">
                          Terralogic: Multi-Agent Systems <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Industries */}
            <TabsContent value="industries" className="space-y-6">
              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                    Industry-Specific Applications and ROI
                  </CardTitle>
                  <CardDescription>
                    How different sectors are deploying agentic AI and the results they're achieving
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Healthcare */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">Healthcare</h3>
                        <p className="text-sm text-blue-700">Market: $538.51M (2024) → $4.96B (2030), CAGR 45.56%</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-blue-900 mb-2">Applications:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-900">
                          <li>Autonomous medical image analysis (X-ray, MRI, CT scans)</li>
                          <li>Intelligent patient triage and routing systems</li>
                          <li>Drug discovery and molecular research assistants</li>
                          <li>Administrative workflow automation (billing, scheduling, records)</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 p-3 rounded border border-blue-300">
                        <div className="font-semibold text-blue-900 text-sm mb-1">Real Example:</div>
                        <p className="text-xs text-blue-900">
                          <strong>Mayo Clinic</strong> pilot with VoiceCare AI (Feb 2025) to automate back-office operations,
                          minimize errors, and improve efficiency in clinical documentation and administrative processes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 rounded">
                      <p className="text-xs text-blue-900">
                        <strong>Source:</strong>{" "}
                        <a href="https://www.grandviewresearch.com/industry-analysis/agentic-ai-healthcare-market-report" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          Grand View Research: Healthcare Market <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Manufacturing */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg border-2 border-slate-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Factory className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Manufacturing</h3>
                        <p className="text-sm text-slate-700">Focus: Predictive maintenance, quality control, supply chain optimization</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-slate-900 mb-2">Applications:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-900">
                          <li>Predictive maintenance moving to autonomous action</li>
                          <li>Real-time workflow adaptation and optimization</li>
                          <li>Sustainable operations and energy management</li>
                          <li>Automated fault detection and repair initiation</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded border border-slate-300">
                        <div className="font-semibold text-slate-900 text-sm mb-1">Real Example:</div>
                        <p className="text-xs text-slate-900">
                          <strong>Siemens</strong> predictive maintenance agent improved asset utilization,
                          minimized workflow interruptions, and enhanced production reliability through autonomous
                          monitoring and decision-making.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-slate-100 border-l-4 border-slate-500 rounded">
                      <p className="text-xs text-slate-900">
                        <strong>Source:</strong>{" "}
                        <a href="https://hblabgroup.com/agentic-ai-in-depth-report/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:underline inline-flex items-center gap-1">
                          HBLAB Group: Agentic AI In-Depth Report <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Financial Services */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-900">Financial Services</h3>
                        <p className="text-sm text-green-700">Focus: Fraud detection, risk assessment, customer service, trading</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-green-900 mb-2">Applications:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li>Real-time fraud mitigation and suspicious activity detection</li>
                          <li>Automated credit risk evaluation and decisioning</li>
                          <li>Intelligent customer service routing and resolution</li>
                          <li>Rapid trading decisions and portfolio optimization</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 p-3 rounded border border-green-300">
                        <div className="font-semibold text-green-900 text-sm mb-1">Real Examples:</div>
                        <p className="text-xs text-green-900 mb-2">
                          <strong>Global Telecommunications Company:</strong> 50% faster payment processing with 90%+ accuracy
                        </p>
                        <p className="text-xs text-green-900">
                          <strong>Direct Mortgage Corp:</strong> 80% reduction in loan processing costs with 20x faster application approval
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 rounded">
                      <p className="text-xs text-green-900">
                        <strong>Source:</strong>{" "}
                        <a href="https://www.creolestudios.com/real-world-ai-agent-case-studies/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          Creolestudios: Real-World Case Studies <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Software Development */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border-2 border-purple-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-900">Software Development</h3>
                        <p className="text-sm text-purple-700">Nearly 70% of Fortune 500 use Microsoft 365 Copilot</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-purple-900 mb-2">Developer Impact:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-purple-900">
                          <li><strong>55-75% higher productivity</strong> and job satisfaction with GitHub Copilot</li>
                          <li><strong>15-126% productivity boosts</strong> with AI coding tools</li>
                          <li><strong>33% acceptance rate</strong> for suggestions, 20% for lines of code</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-900 mb-2">Agentic Capabilities:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-purple-900">
                          <li>Autonomous bug fixing and patch generation</li>
                          <li>Automated test coverage generation and maintenance</li>
                          <li>Code refactoring across multiple files and modules</li>
                          <li>Pull request creation and code review assistance</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-purple-100 border-l-4 border-purple-500 rounded">
                      <p className="text-xs text-purple-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          GitHub Research (2024) <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://arxiv.org/html/2501.13282v1" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          arXiv: ZoomInfo Study <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 4: Implementation */}
            <TabsContent value="implementation" className="space-y-6">
              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Target className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                    Implementation Realities: Barriers and Success Factors
                  </CardTitle>
                  <CardDescription>
                    Understanding why projects fail and how to set yours up for success
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Failure Warning */}
                  <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-300">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="h-7 w-7 text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-red-900 mb-2">The Failure Warning: Why Projects Fail</h3>
                        <p className="text-sm text-red-900">Critical statistics every leader should know before starting an agentic AI initiative:</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border-2 border-red-200">
                        <div className="text-3xl font-bold text-red-700 mb-2">40%</div>
                        <div className="text-sm font-medium text-red-900">Projects Will Be Canceled</div>
                        <div className="text-xs text-red-700 mt-1">By end of 2027 (Gartner)</div>
                      </div>
                      <div className="bg-white p-4 rounded border-2 border-red-200">
                        <div className="text-3xl font-bold text-red-700 mb-2">95%</div>
                        <div className="text-sm font-medium text-red-900">GenAI Pilots Failing</div>
                        <div className="text-xs text-red-700 mt-1">MIT Report on enterprise pilots</div>
                      </div>
                      <div className="bg-white p-4 rounded border-2 border-red-200">
                        <div className="text-3xl font-bold text-red-700 mb-2">5%</div>
                        <div className="text-sm font-medium text-red-900">Achieve Revenue Acceleration</div>
                        <div className="text-xs text-red-700 mt-1">From AI pilot programs</div>
                      </div>
                      <div className="bg-white p-4 rounded border-2 border-red-200">
                        <div className="text-3xl font-bold text-red-700 mb-2">&lt;10%</div>
                        <div className="text-sm font-medium text-red-900">Reach Production</div>
                        <div className="text-xs text-red-700 mt-1">Vertical use cases that scale</div>
                      </div>
                    </div>
                    <div className="mt-4 bg-red-100 p-4 rounded border border-red-300">
                      <div className="font-semibold text-red-900 text-sm mb-2">Primary Failure Reasons:</div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-red-900">
                        <li>Escalating costs without clear ROI justification</li>
                        <li>Unclear or poorly defined business value</li>
                        <li>Inadequate risk controls and governance</li>
                        <li>Hype-driven rather than strategy-driven deployment</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-600 rounded">
                      <p className="text-xs text-red-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline inline-flex items-center gap-1">
                          Gartner Press Release (June 2025) <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline inline-flex items-center gap-1">
                          Fortune: MIT Report <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Implementation Barriers */}
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200">
                    <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-6 w-6" />
                      Key Implementation Barriers
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border border-amber-300">
                        <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                          <div className="h-6 w-6 bg-amber-600 text-white rounded flex items-center justify-center text-xs font-bold">1</div>
                          Infrastructure & Data (Top Barrier)
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-amber-900">
                          <li><strong>65% of companies</strong> lack foundation to build useful agentic AI</li>
                          <li>Data complexity and silos cited as top barriers by IT professionals</li>
                          <li>Regulatory concerns are primary barrier (33%)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-amber-300">
                        <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                          <div className="h-6 w-6 bg-amber-600 text-white rounded flex items-center justify-center text-xs font-bold">2</div>
                          Organizational & Cultural
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-amber-900">
                          <li><strong>64% of senior leaders</strong> agree fear of replacement (vs. augmentation) will stifle adoption</li>
                          <li>Siloed, fearful environments without committed sponsorship</li>
                          <li>Technical, organizational, data, and cultural barriers prevent scaling</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-amber-300">
                        <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                          <div className="h-6 w-6 bg-amber-600 text-white rounded flex items-center justify-center text-xs font-bold">3</div>
                          Governance & Risk
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-amber-900">
                          <li>Only <strong>18% have proper AI governance councils</strong> (significant success predictor)</li>
                          <li>Gap between academic prototypes (TRL 4-6) and production requirements (TRL 8-9)</li>
                          <li>Regulation and risk emerging as #1 barrier (10pp increase in one year)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-amber-100 border-l-4 border-amber-500 rounded">
                      <p className="text-xs text-amber-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://cmr.berkeley.edu/2025/08/adoption-of-ai-and-agentic-systems-value-challenges-and-pathways/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline inline-flex items-center gap-1">
                          UC Berkeley CMR <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://hbr.org/2025/10/why-agentic-ai-projects-fail-and-how-to-set-yours-up-for-success" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline inline-flex items-center gap-1">
                          Harvard Business Review <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.ey.com/en_us/newsroom/2025/07/ai-investments-surge-but-agentic-ai-understanding-and-adoption-lag-behind" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline inline-flex items-center gap-1">
                          EY Research <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Success Factors */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6" />
                      Success Factors and Best Practices
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Strategic Foundation</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li><strong>80% success rate</strong> with formal AI strategy vs. 37% without</li>
                          <li><strong>1.6x more likely</strong> to exceed expectations with proper change management</li>
                          <li>AI governance councils are significant predictors of success (yet only 18% have them)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Implementation Approach</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li>Disciplined use-case selection with clear business value</li>
                          <li>Clear-eyed assessment of technology maturity</li>
                          <li>Willingness to use alternative AI techniques when appropriate</li>
                          <li><strong>Train teams to think like orchestrators, not just tool users</strong> - Focus on outcome-focused thinking rather than task automation</li>
                          <li>Empower line managers (not just central AI labs) to drive adoption</li>
                          <li>Select tools that integrate deeply and adapt over time</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Organizational Prerequisites</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li>Collaborative, flexible culture emphasizing augmentation over replacement</li>
                          <li>Engaged, visionary leadership with committed sponsorship</li>
                          <li>Upskilled workforce prepared for new ways of working</li>
                          <li>Adapted technology infrastructure and accelerated data productization</li>
                          <li>Agent-specific governance mechanisms</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Budget Allocation</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li><strong>75% year-over-year growth</strong> in AI orchestration budgets</li>
                          <li>BCG recommends: <strong>2/3 of effort/resources on people-related capabilities</strong>, 1/3 on technology</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 rounded">
                      <p className="text-xs text-green-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/one-year-of-agentic-ai-six-lessons-from-the-people-doing-the-people-doing-the-work" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          McKinsey: One Year of Agentic AI <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/articles/build-ai-ready-culture.html" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          Deloitte: AI Culture <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://axis-intelligence.com/ai-governance-framework-fortune-500-guide/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          Axis Intelligence: Governance Guide <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Practical Recommendations */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Practical Recommendations for Management</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-blue-900 mb-2 text-sm">1. Assess Organizational Readiness</div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-blue-900 ml-4">
                          <li>Evaluate data infrastructure and quality</li>
                          <li>Review governance structures (aim for AI governance council)</li>
                          <li>Measure organizational trust and data fluency</li>
                          <li>Identify cultural barriers to adoption</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900 mb-2 text-sm">2. Develop Formal AI Strategy</div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-blue-900 ml-4">
                          <li>Success rate jumps from 37% to 80% with strategy</li>
                          <li>Define clear business objectives beyond "AI for AI's sake"</li>
                          <li>Select use cases with disciplined criteria</li>
                          <li>Set measurable ROI targets</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900 mb-2 text-sm">3. Invest in Change Management</div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-blue-900 ml-4">
                          <li>Allocate 2/3 of resources to people-related capabilities</li>
                          <li>Build AI-ready culture emphasizing augmentation vs. replacement</li>
                          <li>Empower line managers, not just central AI labs</li>
                          <li>Establish continuous learning programs</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900 mb-2 text-sm">4. Build Foundational Infrastructure</div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-blue-900 ml-4">
                          <li>Address data silos and complexity</li>
                          <li>Accelerate data productization</li>
                          <li>Adapt technology infrastructure for agent deployment</li>
                          <li>Implement agent-specific governance mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 5: Market Outlook */}
            <TabsContent value="outlook" className="space-y-6">
              <Card className="border-2 border-[oklch(0.65_0.18_35)]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                    Market Projections and Future Outlook
                  </CardTitle>
                  <CardDescription>
                    Where the agentic AI market is headed over the next decade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Short-Term Predictions */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6" />
                      Short-Term Predictions (2026-2028)
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-2 border-blue-300">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="text-2xl font-bold text-blue-700">2026</div>
                          <div className="flex-1">
                            <div className="font-semibold text-blue-900">40% Enterprise Application Penetration</div>
                            <div className="text-sm text-blue-700 mt-1">
                              40% of enterprise applications will feature task-specific AI agents (up from &lt;5% in 2025) - Gartner
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border-2 border-blue-300">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="text-2xl font-bold text-blue-700">2027</div>
                          <div className="flex-1">
                            <div className="font-semibold text-blue-900">Multi-Agent Systems Mainstream</div>
                            <div className="text-sm text-blue-700 mt-1">
                              One-third of agentic AI implementations will combine agents with different skills for complex tasks
                            </div>
                            <div className="text-sm text-blue-700 mt-1">
                              AI agents will challenge mainstream productivity tools, prompting a <strong>$58 billion market shake-up</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border-2 border-blue-300">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="text-2xl font-bold text-blue-700">2028</div>
                          <div className="flex-1">
                            <div className="font-semibold text-blue-900">Autonomous Decision-Making Era</div>
                            <div className="text-sm text-blue-700 mt-1">
                              <strong>15% of day-to-day work decisions</strong> made autonomously through agentic AI (up from 0% in 2024)
                            </div>
                            <div className="text-sm text-blue-700 mt-1">
                              <strong>33% of enterprise software applications</strong> will include agentic AI (up from &lt;1% in 2024)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 rounded">
                      <p className="text-xs text-blue-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          Gartner Predictions <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.mescomputing.com/news/ai/5-predictions-about-agentic-ai-from-gartner" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">
                          MES Computing Analysis <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Long-Term Projections */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="h-6 w-6" />
                      Long-Term Projections (2030-2035)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-green-700 mb-2">$17.5T</div>
                          <div className="text-sm font-medium text-green-900">Agentic Commerce (2030)</div>
                          <div className="text-xs text-green-700 mt-1">McKinsey, BCG, Deloitte, PwC projections</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-blue-700 mb-2">$103.6B</div>
                          <div className="text-sm font-medium text-blue-900">Global AI Agent Market (2032)</div>
                          <div className="text-xs text-blue-700 mt-1">From $7.38B in 2025</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-orange-700 mb-2">$199B</div>
                          <div className="text-sm font-medium text-orange-900">Agentic AI Market (2034)</div>
                          <div className="text-xs text-orange-700 mt-1">Precedence Research projection</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                        <CardContent className="pt-6">
                          <div className="text-4xl font-bold text-purple-700 mb-2">$450B</div>
                          <div className="text-sm font-medium text-purple-900">Enterprise Software Revenue (2035)</div>
                          <div className="text-xs text-purple-700 mt-1">30% from agentic AI - Gartner best case</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="bg-white p-4 rounded border border-purple-300">
                      <div className="font-semibold text-purple-900 mb-2">Capability Evolution:</div>
                      <p className="text-sm text-purple-900">
                        If current trends continue (AI capability doubling every 7 months), frontier AI systems will handle
                        <strong> month-long autonomous projects by end of decade</strong>, driven by greater reliability,
                        ability to adapt to mistakes, better logical reasoning, and enhanced tool use.
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-purple-100 border-l-4 border-purple-500 rounded">
                      <p className="text-xs text-purple-900">
                        <strong>Sources:</strong>{" "}
                        <a href="https://agenticcommerce.com/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          Agentic Commerce Report <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://www.precedenceresearch.com/agentic-ai-market" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          Precedence Research <ExternalLink className="h-3 w-3" />
                        </a>
                        {", "}
                        <a href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline inline-flex items-center gap-1">
                          METR: Long-Horizon Capabilities <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Investment Trends */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                      <DollarSign className="h-6 w-6" />
                      Investment Trends
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Current Investment:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-900">
                          <li><strong>$67.2B</strong> invested in GenAI in United States (2023)</li>
                          <li><strong>Accenture:</strong> $3 billion investment, doubling AI workforce from 40,000 to 80,000</li>
                          <li><strong>Deloitte & KPMG:</strong> Multi-billion dollar spending on AI assistants and automation</li>
                          <li><strong>75% year-over-year growth</strong> in AI orchestration budgets</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-300">
                        <div className="font-semibold text-green-900 mb-2">Enterprise Commitment:</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="text-center p-3 bg-green-50 rounded">
                            <div className="text-2xl font-bold text-green-700">19%</div>
                            <div className="text-xs text-green-900">Significant Investments</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded">
                            <div className="text-2xl font-bold text-green-700">42%</div>
                            <div className="text-xs text-green-900">Conservative Investments</div>
                          </div>
                          <div className="text-center p-3 bg-amber-50 rounded">
                            <div className="text-2xl font-bold text-amber-700">31%</div>
                            <div className="text-xs text-amber-900">Wait-and-See Approach</div>
                          </div>
                          <div className="text-center p-3 bg-red-50 rounded">
                            <div className="text-2xl font-bold text-red-700">8%</div>
                            <div className="text-xs text-red-900">No Investments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 rounded">
                      <p className="text-xs text-green-900">
                        <strong>Source:</strong>{" "}
                        <a href="https://medium.com/@takafumi.endo/how-ai-is-redefining-strategy-consulting-insights-from-mckinsey-bcg-and-bain-69d6d82f1bab" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center gap-1">
                          Medium: Strategy Consulting AI Analysis <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-6 bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] text-white rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="h-6 w-6" />
                      The Strategic Imperative
                    </h3>
                    <div className="space-y-3 text-sm opacity-95">
                      <p>
                        <strong>The "GenAI Paradox":</strong> 78% of companies use gen AI, yet just as many report no significant
                        bottom-line impact (McKinsey). The shift to agentic AI represents the path forward from this paradox.
                      </p>
                      <p>
                        <strong>The Competitive Landscape:</strong> 52% of organizations already deploying AI agents, 40% of Fortune 100
                        using AutoGen, early adopters dedicating 50%+ of future AI budgets to AI agents. First-mover advantage in capability
                        building and organizational learning.
                      </p>
                      <p>
                        <strong>The Five-Year View:</strong> By 2028, 15% of work decisions made autonomously. By 2030, $17.5 trillion in
                        agentic commerce. Capability to handle month-long autonomous projects. Organizations that succeed will be those that
                        start building foundations now.
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <p className="text-base font-semibold">Final Recommendation:</p>
                        <p className="mt-2">
                          Act now, but strategically. Don't wait for perfect conditions, but don't rush into hype-driven deployment.
                          Focus on foundations: data, governance, culture. Think beyond automation to capability expansion and quality
                          improvements. Invest in people—change management and upskilling are critical success factors. Measure holistically:
                          ROI extends far beyond time savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Customizable Template Section */}
          <div id="template" className="mt-12 scroll-mt-8">
            <Card className="border-2 border-[oklch(0.65_0.18_35)]/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="h-6 w-6 text-[oklch(0.65_0.18_35)]" />
                  Customizable Business Case Template
                </CardTitle>
                <CardDescription>
                  Fill in your details to create a personalized business case proposal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      placeholder="Acme Corporation"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Division</Label>
                    <Input
                      id="department"
                      placeholder="Operations, Marketing, IT..."
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="use-case">Primary Use Case</Label>
                  <Textarea
                    id="use-case"
                    placeholder="Describe the main task or workflow you want to automate with agentic AI..."
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-slate-600">
                    Example: "Automating customer service ticket routing and resolution with 24/7 AI agents"
                  </p>
                </div>
                <Button
                  onClick={copyTemplate}
                  className="w-full bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] hover:from-[oklch(0.60_0.18_35)] hover:to-[oklch(0.65_0.16_50)] text-white"
                  size="lg"
                >
                  <Copy className="h-5 w-5 mr-2" />
                  Copy Customized Business Case
                </Button>
                <p className="text-xs text-center text-slate-600 -mt-2">
                  Formatted text will be copied to your clipboard, ready to paste into documents or emails
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Implementation Strategy?</h3>
            <p className="text-lg mb-6 opacity-95">
              Explore practical workflows and use the ROI calculator to quantify your specific opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[oklch(0.65_0.18_35)] hover:bg-white/90"
                >
                  ROI Calculator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/workflows">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  View Workflows
                </Button>
              </Link>
              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  Implementation Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
