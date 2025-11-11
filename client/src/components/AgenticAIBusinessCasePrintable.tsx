import { forwardRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Lightbulb,
  Users,
  Target,
  BarChart3,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
  Stethoscope,
  Factory,
  Code,
  Briefcase,
  ExternalLink
} from "lucide-react";

// This component renders ALL tabs for printing as a continuous document
export const AgenticAIBusinessCasePrintable = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="print-container p-8 bg-white">
      {/* Print-specific styles */}
      <style>{`
        @media print {
          /* Page setup */
          @page {
            size: A4;
            margin: 12mm 8mm;
          }

          /* Force color printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* Page break controls */
          .page-break-before {
            page-break-before: always;
            break-before: page;
          }

          .page-break-after {
            page-break-after: always;
            break-after: page;
          }

          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Ensure gradients render */
          [class*="gradient"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Typography */
          body {
            font-size: 9pt;
            line-height: 1.3;
          }

          h1 { font-size: 20pt; page-break-after: avoid; }
          h2 { font-size: 16pt; page-break-after: avoid; margin-top: 12pt; }
          h3 { font-size: 13pt; page-break-after: avoid; }

          /* Reduce spacing for print */
          .print-container {
            padding: 0 !important;
          }

          /* Cards */
          .card {
            border: 0.5pt solid #e5e7eb;
            box-shadow: none !important;
            margin-bottom: 8pt;
          }
        }
      `}</style>

      {/* Cover Page */}
      <div className="avoid-break mb-6">
        <div className="bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] text-white p-6 rounded-lg">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm font-medium">Research-Backed Business Case</span>
            </div>
            <h1 className="text-3xl font-bold mb-3">
              The Business Case for Agentic AI
            </h1>
            <p className="text-lg mb-3">
              Beyond time savings: capability expansion, skill democratization, and strategic advantage
            </p>
            <p className="text-xs opacity-90">
              Comprehensive analysis based on 50+ peer-reviewed studies from McKinsey, Stanford, MIT, Gartner,
              and academic research institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: ROI & Statistics */}
      <div className="page-break-after">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[oklch(0.65_0.18_35)]">
          <TrendingUp className="h-6 w-6" />
          ROI & Statistics
        </h2>

        {/* Financial Returns */}
        <div className="avoid-break mb-4">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Financial Returns
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-green-700 mb-1">171%</div>
                <div className="text-xs font-medium text-green-900">Average Expected ROI</div>
                <div className="text-[9px] text-green-700">192% in U.S. organizations</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-blue-700 mb-1">74%</div>
                <div className="text-xs font-medium text-blue-900">Achieve ROI in Year 1</div>
                <div className="text-[9px] text-blue-700">From generative AI initiatives</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-700 mb-1">152%</div>
                <div className="text-xs font-medium text-orange-900">GenAI Average Return</div>
                <div className="text-[9px] text-orange-700">62% see &gt;100% returns</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-purple-700 mb-1">3.7x</div>
                <div className="text-xs font-medium text-purple-900">ROI Per Dollar Invested</div>
                <div className="text-[9px] text-purple-700">In GenAI and related tech</div>
              </CardContent>
            </Card>
          </div>
          <div className="text-[8px] text-slate-600 border-l-2 border-slate-400 pl-2 bg-slate-50 p-2">
            <strong>Sources:</strong> PagerDuty/Wakefield Research Survey (2025), Google Cloud Study (Sept 2025)
          </div>
        </div>

        {/* Revenue and Cost Impact */}
        <div className="avoid-break mb-4">
          <h3 className="text-lg font-bold mb-2">Revenue and Cost Impact</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-2 bg-white rounded border text-xs">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold">59% Revenue Increases</div>
                <div className="text-[9px] text-slate-600">Organizations report revenue growth from AI implementation</div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-white rounded border text-xs">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold">42% Cost Reductions</div>
                <div className="text-[9px] text-slate-600">Businesses implementing multi-agent systems save average $2.1M annually</div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-white rounded border text-xs">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold">80% Reduction in Processing Costs</div>
                <div className="text-[9px] text-slate-600">Direct Mortgage Corp: 20x faster loan application approval</div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Adoption */}
        <div className="avoid-break">
          <h3 className="text-lg font-bold mb-2">Current Adoption State</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded border-2 border-[oklch(0.65_0.18_35)]/20">
              <div className="text-2xl font-bold text-[oklch(0.35_0.15_35)] mb-1">85%</div>
              <div className="text-[9px] font-medium">Organizations Using AI Agents</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded border-2 border-[oklch(0.65_0.18_35)]/20">
              <div className="text-2xl font-bold text-[oklch(0.35_0.15_35)] mb-1">52%</div>
              <div className="text-[9px] font-medium">Executives Report Deployment</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-[oklch(0.98_0.05_35)] to-[oklch(0.96_0.06_45)] rounded border-2 border-[oklch(0.65_0.18_35)]/20">
              <div className="text-2xl font-bold text-[oklch(0.35_0.15_35)] mb-1">40%</div>
              <div className="text-[9px] font-medium">Fortune 100 Using AutoGen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Strategic Benefits */}
      <div className="page-break-after">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[oklch(0.65_0.18_35)]">
          <Lightbulb className="h-6 w-6" />
          Five Strategic Benefits Beyond Time Savings
        </h2>

        {/* Benefit 1: Capability Expansion */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded border-2 border-blue-200">
          <h3 className="text-base font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            1. Capability Expansion
          </h3>
          <p className="text-xs text-blue-900 mb-2">
            Employees accomplish complex tasks without extensive training or specialized knowledge.
          </p>
          <div className="space-y-1 mb-2">
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-blue-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-blue-900"><strong>34% productivity increase</strong> for less-skilled workers</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-blue-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-blue-900">Workers with <strong>2 months + AI</strong> perform as well as 6+ months without</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-blue-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-blue-900">AI capability doubling every <strong>7 months</strong></span>
            </div>
          </div>
          <div className="text-[8px] text-blue-800 bg-white/60 p-2 rounded border border-blue-300">
            <strong>Real Applications:</strong> Data analysis without training, Web development without coding, SharePoint admin without IT certification, Professional communications without business writing experience
          </div>
          <div className="mt-2 p-2 bg-blue-100 border-l-2 border-blue-500 rounded">
            <p className="text-[7px] text-blue-900">
              <strong>Sources:</strong> Stanford & MIT: "Generative AI at Work", CNBC Study Coverage, METR: Long-Horizon Tasks
            </p>
          </div>
        </div>

        {/* Benefit 2: Skill Democratization */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded border-2 border-purple-200">
          <h3 className="text-base font-bold text-purple-900 mb-2 flex items-center gap-2">
            <Users className="h-5 w-5" />
            2. Skill Democratization
          </h3>
          <p className="text-xs text-purple-900 mb-2">
            Advanced capabilities previously limited to specialists become accessible to broader workforce.
          </p>
          <div className="space-y-1">
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-purple-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-purple-900"><strong>80% of U.S. workers</strong> will see AI affect 10%+ of their tasks</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-purple-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-purple-900">GitHub Copilot: <strong>55-75% higher productivity</strong></span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-purple-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-purple-900">Framework adoption increased <strong>920%</strong> (2023-2025)</span>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-purple-800 bg-white/60 p-2 rounded border border-purple-300">
            <strong>Transformation Examples:</strong> Knowledge workers: 65-86% time savings vs. human-only workflows; 72% of companies use AI across multiple departments; Cross-functional teams can handle tasks previously requiring specialists
          </div>
          <div className="mt-2 p-2 bg-purple-100 border-l-2 border-purple-500 rounded">
            <p className="text-[7px] text-purple-900">
              <strong>Sources:</strong> Stanford Future of Work Study, DigitalDefynd Statistics, GitHub Research
            </p>
          </div>
        </div>

        {/* Benefit 3: Quality Improvements */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded border-2 border-green-200">
          <h3 className="text-base font-bold text-green-900 mb-2 flex items-center gap-2">
            <Target className="h-5 w-5" />
            3. Quality Improvements
          </h3>
          <div className="space-y-1">
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-green-900"><strong>12x better performance</strong> on complex tasks vs baseline LLMs</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-green-900"><strong>40% faster</strong> with <strong>18% higher quality</strong></span>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-green-800 bg-white/60 p-2 rounded border border-green-300">
            <strong>Quality Mechanisms:</strong> Autonomous detection and correction of anomalies (duplicates, missing fields, formatting errors); Consistent application of nuanced regulatory logic; Reduced human error through standardized processes; Significant increases in SLA compliance and reductions in MTTR
          </div>
          <div className="mt-2 p-2 bg-green-100 border-l-2 border-green-500 rounded">
            <p className="text-[7px] text-green-900">
              <strong>Sources:</strong> AI Multiple: Agent Performance, XenonStack: Data Quality
            </p>
          </div>
        </div>

        {/* Benefit 4: Organizational Agility */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded border-2 border-orange-200">
          <h3 className="text-base font-bold text-orange-900 mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            4. Organizational Agility
          </h3>
          <div className="space-y-1">
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-orange-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-orange-900"><strong>1.6x more likely</strong> to exceed expectations with change management</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-orange-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-orange-900"><strong>2-5 people supervise 50-100 agents</strong></span>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-orange-800 bg-white/60 p-2 rounded border border-orange-300">
            <strong>Strategic Advantages:</strong> Rapid workflow redesign and process optimization; Continuous orchestration of human talent and AI agents; Autonomous decision-making for routine operations; Organizations with highest AI outcomes display high trust, data fluency, and agility
          </div>
          <div className="mt-2 p-2 bg-orange-100 border-l-2 border-orange-500 rounded">
            <p className="text-[7px] text-orange-900">
              <strong>Sources:</strong> Springer: Architecting Agility, Deloitte: AI Culture, UC Berkeley CMR
            </p>
          </div>
        </div>

        {/* Benefit 5: Reduced Specialist Dependency */}
        <div className="avoid-break p-3 bg-gradient-to-br from-red-50 to-pink-50 rounded border-2 border-red-200">
          <h3 className="text-base font-bold text-red-900 mb-2 flex items-center gap-2">
            <Users className="h-5 w-5" />
            5. Reduced Specialist Dependency
          </h3>
          <div className="space-y-1">
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-red-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-red-900"><strong>30% reduction</strong> in mundane tasks</span>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 text-red-700 mt-0.5 flex-shrink-0" />
              <span className="text-[9px] text-red-900"><strong>7.8% overall productivity increase</strong></span>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-red-800 bg-white/60 p-2 rounded border border-red-300">
            <strong>Role Evolution (Not Replacement):</strong> M-shaped supervisors: Broad generalists orchestrating agent teams; T-shaped experts: Deep specialists handling exceptions and workflow redesign; AI-augmented workers: Frontline employees with expanded capabilities; Important: Rising demand for critical thinking, system design, and pattern recognition
          </div>
          <div className="mt-2 p-2 bg-red-100 border-l-2 border-red-500 rounded">
            <p className="text-[7px] text-red-900">
              <strong>Sources:</strong> Arion Research: Knowledge Workers, Terralogic: Multi-Agent Systems
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Industry Applications */}
      <div className="page-break-after">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[oklch(0.65_0.18_35)]">
          <Building2 className="h-6 w-6" />
          Industry-Specific Applications
        </h2>

        {/* Healthcare */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded border-2 border-blue-200">
          <div className="flex items-start gap-3 mb-2">
            <div className="h-10 w-10 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-blue-900">Healthcare</h3>
              <p className="text-[9px] text-blue-700">Market: $538.51M (2024) → $4.96B (2030)</p>
            </div>
          </div>
          <div className="text-[9px] text-blue-900 mb-2">
            <strong>Applications:</strong> Autonomous medical image analysis (X-ray, MRI, CT scans); Intelligent patient triage and routing systems; Drug discovery and molecular research assistants; Administrative workflow automation (billing, scheduling, records)
          </div>
          <div className="bg-white/60 p-2 rounded border border-blue-300 mb-2">
            <div className="text-[9px] text-blue-900">
              <strong>Real Example:</strong> Mayo Clinic pilot with VoiceCare AI (Feb 2025) to automate back-office operations, minimize errors, and improve efficiency in clinical documentation and administrative processes.
            </div>
          </div>
          <div className="p-2 bg-blue-100 border-l-2 border-blue-500 rounded">
            <p className="text-[7px] text-blue-900">
              <strong>Source:</strong> Grand View Research: Healthcare Market
            </p>
          </div>
        </div>

        {/* Manufacturing */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-slate-50 to-gray-50 rounded border-2 border-slate-300">
          <div className="flex items-start gap-3 mb-2">
            <div className="h-10 w-10 bg-slate-700 rounded flex items-center justify-center flex-shrink-0">
              <Factory className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Manufacturing</h3>
              <p className="text-[9px] text-slate-700">Predictive maintenance, Quality control, Supply chain</p>
            </div>
          </div>
          <div className="text-[9px] text-slate-900 mb-2">
            <strong>Applications:</strong> Predictive maintenance moving to autonomous action; Real-time workflow adaptation and optimization; Sustainable operations and energy management; Automated fault detection and repair initiation
          </div>
          <div className="bg-white p-2 rounded border border-slate-300 mb-2">
            <div className="text-[9px] text-slate-900">
              <strong>Real Example:</strong> Siemens predictive maintenance agent improved asset utilization, minimized workflow interruptions, and enhanced production reliability through autonomous monitoring and decision-making.
            </div>
          </div>
          <div className="p-2 bg-slate-100 border-l-2 border-slate-500 rounded">
            <p className="text-[7px] text-slate-900">
              <strong>Source:</strong> HBLAB Group: Agentic AI In-Depth Report
            </p>
          </div>
        </div>

        {/* Financial Services */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded border-2 border-green-200">
          <div className="flex items-start gap-3 mb-2">
            <div className="h-10 w-10 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-green-900">Financial Services</h3>
              <p className="text-[9px] text-green-700">Fraud detection, Risk assessment, Trading</p>
            </div>
          </div>
          <div className="text-[9px] text-green-900 mb-2">
            <strong>Applications:</strong> Real-time fraud mitigation and suspicious activity detection; Automated credit risk evaluation and decisioning; Intelligent customer service routing and resolution; Rapid trading decisions and portfolio optimization
          </div>
          <div className="bg-white/60 p-2 rounded border border-green-300 mb-2">
            <div className="text-[9px] text-green-900 mb-1">
              <strong>Real Examples:</strong> Global Telecommunications Company: 50% faster payment processing with 90%+ accuracy
            </div>
            <div className="text-[9px] text-green-900">
              Direct Mortgage Corp: 80% reduction in loan processing costs with 20x faster application approval
            </div>
          </div>
          <div className="p-2 bg-green-100 border-l-2 border-green-500 rounded">
            <p className="text-[7px] text-green-900">
              <strong>Source:</strong> Creolestudios: Real-World Case Studies
            </p>
          </div>
        </div>

        {/* Software Development */}
        <div className="avoid-break p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded border-2 border-purple-200">
          <div className="flex items-start gap-3 mb-2">
            <div className="h-10 w-10 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-purple-900">Software Development</h3>
              <p className="text-[9px] text-purple-700">70% of Fortune 500 use Microsoft 365 Copilot</p>
            </div>
          </div>
          <div className="text-[9px] text-purple-900 mb-2">
            <strong>Developer Impact:</strong> 55-75% higher productivity and job satisfaction with GitHub Copilot; 15-126% productivity boosts with AI coding tools; 33% acceptance rate for suggestions, 20% for lines of code
          </div>
          <div className="text-[9px] text-purple-900 mb-2">
            <strong>Agentic Capabilities:</strong> Autonomous bug fixing and patch generation; Automated test coverage generation and maintenance; Code refactoring across multiple files and modules; Pull request creation and code review assistance
          </div>
          <div className="p-2 bg-purple-100 border-l-2 border-purple-500 rounded">
            <p className="text-[7px] text-purple-900">
              <strong>Sources:</strong> GitHub Research (2024), arXiv: ZoomInfo Study
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Implementation */}
      <div className="page-break-after">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[oklch(0.65_0.18_35)]">
          <Target className="h-6 w-6" />
          Implementation: Barriers & Success Factors
        </h2>

        {/* Failure Warning */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded border-2 border-red-300">
          <div className="flex items-start gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
            <h3 className="text-base font-bold text-red-900">Why Projects Fail</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-white p-2 rounded border border-red-200">
              <div className="text-2xl font-bold text-red-700 mb-1">40%</div>
              <div className="text-[9px] font-medium text-red-900">Projects Will Be Canceled by 2027</div>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <div className="text-2xl font-bold text-red-700 mb-1">95%</div>
              <div className="text-[9px] font-medium text-red-900">GenAI Pilots Failing (MIT)</div>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <div className="text-2xl font-bold text-red-700 mb-1">5%</div>
              <div className="text-[9px] font-medium text-red-900">Achieve Revenue Acceleration</div>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <div className="text-2xl font-bold text-red-700 mb-1">&lt;10%</div>
              <div className="text-[9px] font-medium text-red-900">Reach Production</div>
            </div>
          </div>
          <div className="text-[9px] text-red-900 bg-red-100 p-2 rounded mb-2">
            <strong>Primary Reasons:</strong> Escalating costs, Unclear business value, Inadequate risk controls, Hype-driven deployment
          </div>
          <div className="p-2 bg-red-100 border-l-2 border-red-600 rounded">
            <p className="text-[7px] text-red-900">
              <strong>Sources:</strong> Gartner Press Release (June 2025), Fortune: MIT Report
            </p>
          </div>
        </div>

        {/* Key Barriers */}
        <div className="avoid-break mb-4">
          <h3 className="text-base font-bold mb-2">Key Implementation Barriers</h3>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border border-amber-300">
              <div className="font-semibold text-amber-900 mb-1 flex items-center gap-1 text-[9px]">
                <div className="h-4 w-4 bg-amber-600 text-white rounded flex items-center justify-center text-[7px] font-bold flex-shrink-0">1</div>
                Infrastructure & Data (Top Barrier)
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-amber-900 ml-1">
                <li><strong>65% of companies</strong> lack foundation to build useful agentic AI</li>
                <li>Data complexity and silos cited as top barriers by IT professionals</li>
                <li>Regulatory concerns are primary barrier (33%)</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-amber-300">
              <div className="font-semibold text-amber-900 mb-1 flex items-center gap-1 text-[9px]">
                <div className="h-4 w-4 bg-amber-600 text-white rounded flex items-center justify-center text-[7px] font-bold flex-shrink-0">2</div>
                Organizational & Cultural
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-amber-900 ml-1">
                <li><strong>64% of senior leaders</strong> agree fear of replacement (vs. augmentation) will stifle adoption</li>
                <li>Siloed, fearful environments without committed sponsorship</li>
                <li>Technical, organizational, data, and cultural barriers prevent scaling</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-amber-300">
              <div className="font-semibold text-amber-900 mb-1 flex items-center gap-1 text-[9px]">
                <div className="h-4 w-4 bg-amber-600 text-white rounded flex items-center justify-center text-[7px] font-bold flex-shrink-0">3</div>
                Governance & Risk
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-amber-900 ml-1">
                <li>Only <strong>18% have proper AI governance councils</strong> (significant success predictor)</li>
                <li>Gap between academic prototypes (TRL 4-6) and production requirements (TRL 8-9)</li>
                <li>Regulation and risk emerging as #1 barrier (10pp increase in one year)</li>
              </ul>
            </div>
          </div>
          <div className="mt-2 p-2 bg-amber-100 border-l-2 border-amber-500 rounded">
            <p className="text-[7px] text-amber-900">
              <strong>Sources:</strong> UC Berkeley CMR, Harvard Business Review, EY Research
            </p>
          </div>
        </div>

        {/* Success Factors */}
        <div className="avoid-break mb-4">
          <h3 className="text-base font-bold mb-2 flex items-center gap-1">
            <CheckCircle2 className="h-5 w-5 text-green-700" />
            Success Factors and Best Practices
          </h3>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Strategic Foundation</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-green-900 ml-1">
                <li><strong>80% success rate</strong> with formal AI strategy vs. 37% without</li>
                <li><strong>1.6x more likely</strong> to exceed expectations with proper change management</li>
                <li>AI governance councils are significant predictors of success (yet only 18% have them)</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Implementation Approach</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-green-900 ml-1">
                <li>Disciplined use-case selection with clear business value</li>
                <li>Clear-eyed assessment of technology maturity</li>
                <li>Willingness to leverage alternative AI techniques when appropriate</li>
                <li>Empower line managers (not just central AI labs) to drive adoption</li>
                <li>Select tools that integrate deeply and adapt over time</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Organizational Prerequisites</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-green-900 ml-1">
                <li>Collaborative, flexible culture emphasizing augmentation over replacement</li>
                <li>Engaged, visionary leadership with committed sponsorship</li>
                <li>Upskilled workforce prepared for new ways of working</li>
                <li>Adapted technology infrastructure and accelerated data productization</li>
                <li>Agent-specific governance mechanisms</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Budget Allocation</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-green-900 ml-1">
                <li><strong>75% year-over-year growth</strong> in AI orchestration budgets</li>
                <li>BCG recommends: <strong>2/3 of effort/resources on people-related capabilities</strong>, 1/3 on technology</li>
              </ul>
            </div>
          </div>
          <div className="mt-2 p-2 bg-green-100 border-l-2 border-green-500 rounded">
            <p className="text-[7px] text-green-900">
              <strong>Sources:</strong> McKinsey: One Year of Agentic AI, Deloitte: AI Culture, Axis Intelligence: Governance Guide
            </p>
          </div>
        </div>

        {/* Practical Recommendations */}
        <div className="avoid-break mb-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded border-2 border-blue-200">
          <h3 className="text-base font-bold text-blue-900 mb-2">Practical Recommendations for Management</h3>
          <div className="space-y-2">
            <div>
              <div className="font-semibold text-blue-900 mb-1 text-[9px]">1. Assess Organizational Readiness</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-blue-900 ml-2">
                <li>Evaluate data infrastructure and quality</li>
                <li>Review governance structures (aim for AI governance council)</li>
                <li>Measure organizational trust and data fluency</li>
                <li>Identify cultural barriers to adoption</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-900 mb-1 text-[9px]">2. Develop Formal AI Strategy</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-blue-900 ml-2">
                <li>Success rate jumps from 37% to 80% with strategy</li>
                <li>Define clear business objectives beyond "AI for AI's sake"</li>
                <li>Select use cases with disciplined criteria</li>
                <li>Set measurable ROI targets</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-900 mb-1 text-[9px]">3. Invest in Change Management</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-blue-900 ml-2">
                <li>Allocate 2/3 of resources to people-related capabilities</li>
                <li>Build AI-ready culture emphasizing augmentation vs. replacement</li>
                <li>Empower line managers, not just central AI labs</li>
                <li>Establish continuous learning programs</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-900 mb-1 text-[9px]">4. Build Foundational Infrastructure</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-blue-900 ml-2">
                <li>Address data silos and complexity</li>
                <li>Accelerate data productization</li>
                <li>Adapt technology infrastructure for agent deployment</li>
                <li>Implement agent-specific governance mechanisms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Market Outlook */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[oklch(0.65_0.18_35)]">
          <BarChart3 className="h-6 w-6" />
          Market Projections & Future Outlook
        </h2>

        {/* Short-Term */}
        <div className="avoid-break mb-4">
          <h3 className="text-base font-bold mb-2">Short-Term (2026-2028)</h3>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border">
              <div className="font-bold text-blue-700 text-sm">2026</div>
              <div className="text-[9px]">40% of enterprise apps will feature AI agents (up from &lt;5% in 2025)</div>
            </div>
            <div className="bg-white p-2 rounded border">
              <div className="font-bold text-blue-700 text-sm">2027</div>
              <div className="text-[9px]">$58B market shake-up from AI agents challenging productivity tools</div>
            </div>
            <div className="bg-white p-2 rounded border">
              <div className="font-bold text-blue-700 text-sm">2028</div>
              <div className="text-[9px]">15% of work decisions made autonomously, 33% of enterprise software includes AI</div>
            </div>
          </div>
        </div>

        {/* Long-Term */}
        <div className="avoid-break mb-4">
          <h3 className="text-base font-bold mb-2">Long-Term (2030-2035)</h3>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-3">
                <div className="text-3xl font-bold text-green-700 mb-1">$17.5T</div>
                <div className="text-[9px] font-medium text-green-900">Agentic Commerce (2030)</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-3">
                <div className="text-3xl font-bold text-blue-700 mb-1">$103.6B</div>
                <div className="text-[9px] font-medium text-blue-900">AI Agent Market (2032)</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="pt-3">
                <div className="text-3xl font-bold text-orange-700 mb-1">$199B</div>
                <div className="text-[9px] font-medium text-orange-900">Agentic AI Market (2034)</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <CardContent className="pt-3">
                <div className="text-3xl font-bold text-purple-700 mb-1">$450B</div>
                <div className="text-[9px] font-medium text-purple-900">Enterprise Software (2035)</div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-white p-2 rounded border border-purple-300 mb-2">
            <div className="font-semibold text-purple-900 mb-1 text-[9px]">Capability Evolution:</div>
            <p className="text-[8px] text-purple-900">
              If current trends continue (AI capability doubling every 7 months), frontier AI systems will handle <strong>month-long autonomous projects by end of decade</strong>, driven by greater reliability, ability to adapt to mistakes, better logical reasoning, and enhanced tool use.
            </p>
          </div>
          <div className="p-2 bg-purple-100 border-l-2 border-purple-500 rounded">
            <p className="text-[7px] text-purple-900">
              <strong>Sources:</strong> Agentic Commerce Report, Precedence Research, METR: Long-Horizon Capabilities
            </p>
          </div>
        </div>

        {/* Investment Trends */}
        <div className="avoid-break mb-4">
          <h3 className="text-base font-bold mb-2 flex items-center gap-1">
            <DollarSign className="h-5 w-5 text-green-700" />
            Investment Trends
          </h3>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Current Investment:</div>
              <ul className="list-disc list-inside space-y-0.5 text-[8px] text-green-900 ml-1">
                <li><strong>$67.2B</strong> invested in GenAI in United States (2023)</li>
                <li><strong>Accenture:</strong> $3 billion investment, doubling AI workforce from 40,000 to 80,000</li>
                <li><strong>Deloitte & KPMG:</strong> Multi-billion dollar spending on AI assistants and automation</li>
                <li><strong>75% year-over-year growth</strong> in AI orchestration budgets</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border border-green-300">
              <div className="font-semibold text-green-900 mb-1 text-[9px]">Enterprise Commitment:</div>
              <div className="grid grid-cols-4 gap-1 mt-1">
                <div className="text-center p-1 bg-green-50 rounded">
                  <div className="text-lg font-bold text-green-700">19%</div>
                  <div className="text-[7px] text-green-900">Significant</div>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <div className="text-lg font-bold text-green-700">42%</div>
                  <div className="text-[7px] text-green-900">Conservative</div>
                </div>
                <div className="text-center p-1 bg-amber-50 rounded">
                  <div className="text-lg font-bold text-amber-700">31%</div>
                  <div className="text-[7px] text-amber-900">Wait-and-See</div>
                </div>
                <div className="text-center p-1 bg-red-50 rounded">
                  <div className="text-lg font-bold text-red-700">8%</div>
                  <div className="text-[7px] text-red-900">No Invest</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 p-2 bg-green-100 border-l-2 border-green-500 rounded">
            <p className="text-[7px] text-green-900">
              <strong>Source:</strong> Medium: Strategy Consulting AI Analysis
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="avoid-break p-4 bg-gradient-to-r from-[oklch(0.65_0.18_35)] to-[oklch(0.70_0.16_50)] text-white rounded">
          <h3 className="text-base font-bold mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            The Strategic Imperative
          </h3>
          <div className="space-y-2 text-[9px] opacity-95">
            <p>
              <strong>The "GenAI Paradox":</strong> 78% use gen AI, yet 78% report no bottom-line impact. Agentic AI is the path forward.
            </p>
            <p>
              <strong>Competitive Landscape:</strong> 52% already deploying, 40% of Fortune 100 using AutoGen. First-mover advantage in capability building.
            </p>
            <p>
              <strong>Five-Year View:</strong> By 2028, 15% of decisions autonomous. By 2030, $17.5T agentic commerce. Month-long autonomous projects capability. Organizations that succeed will be those that start building foundations now.
            </p>
            <div className="border-t border-white/30 pt-2 mt-2">
              <p className="text-[9px] font-semibold">Final Recommendation:</p>
              <p className="mt-1 text-[8px]">
                Act now, but strategically. Don't wait for perfect conditions, but don't rush into hype-driven deployment. Focus on foundations: data, governance, culture. Think beyond automation to capability expansion and quality improvements. Invest in people—change management and upskilling are critical success factors. Measure holistically: ROI extends far beyond time savings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-3 border-t text-center text-[9px] text-gray-600">
        <p className="font-semibold">Generated from AI Agent Portal - Business Case Generator</p>
        <p className="mt-1">For interactive ROI calculator, customizable templates, and implementation guides, visit our portal</p>
        <p className="mt-2 text-[8px]">
          Based on 50+ peer-reviewed studies from McKinsey, Stanford, MIT, Gartner, Harvard Business Review, and academic institutions
        </p>
      </div>
    </div>
  );
});

AgenticAIBusinessCasePrintable.displayName = "AgenticAIBusinessCasePrintable";
