import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Mic2,
  Brain,
  Zap,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Workflow,
  Sparkles,
  GitBranch,
  Code,
  Search,
  Palette,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  DollarSign
} from "lucide-react";

export default function MakingOf() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      name: "SuperWhisper",
      url: "https://superwhisper.com",
      category: "Voice Foundation",
      color: "orange",
      icon: Mic2,
      usage: "Primary voice-to-text interface. Running Haiku underneath to translate natural speech into better-aligned AI prompts. Used for 100% of voice input across all platforms.",
      verdict: "⭐ Essential - The universal interface layer"
    },
    {
      name: "Kimi K2",
      url: "https://kimi.moonshot.cn",
      category: "Research & Intelligence",
      color: "purple",
      icon: Search,
      usage: "Lightning-fast web browsing for gathering raw data from multiple sites simultaneously. Paired with Minimax for the research duo. Created detailed briefing documents and won 'best briefings' in platform competition.",
      verdict: "⭐⭐ Exceptionally fast data gathering"
    },
    {
      name: "ChatGPT Pro",
      url: "https://chat.openai.com",
      category: "Research & Validation",
      color: "green",
      icon: Lightbulb,
      usage: "Supplementary research and validation when needed. Used as backup to the Minimax/Kimi K2 research duo.",
      verdict: "⭐ Good backup option"
    },
    {
      name: "Manus",
      url: "https://manus.im",
      category: "Design Platform",
      color: "blue",
      icon: Palette,
      usage: "Primary design platform with excellent visual sense, web search, and real-time VM preview. Won 'best design' but hit Git/publishing issues that forced a pivot.",
      verdict: "⭐ Great design, but platform lock-in risk"
    },
    {
      name: "Minimax Agent",
      url: "https://www.minimaxi.com",
      category: "Research & Writing",
      color: "amber",
      icon: Brain,
      usage: "Powerful researcher and writer. Paired with Kimi K2 for the research duo - synthesized raw data into structured tables and detailed output. Cost-effective at scale: <$1 for 100+ high-quality results.",
      verdict: "⭐⭐⭐ Outstanding for bulk research at low cost"
    },
    {
      name: "OK Computer (Kimi)",
      url: "https://kimi.moonshot.cn",
      category: "Design Exploration",
      color: "teal",
      icon: Brain,
      usage: "Third option in design platform competition. Evaluated alongside Manus and Minimax for initial design direction.",
      verdict: "⭐ Solid alternative approach"
    },
    {
      name: "Claude Code CLI",
      url: "https://claude.ai/code",
      category: "Development Core",
      color: "orange",
      icon: Code,
      usage: "Primary development platform for 90% of the 355+ prompts. Running 4-6 concurrent instances with Sonnet 4.5 and GLM 4.6 models. Models specialized by task and critiquing each other.",
      verdict: "⭐⭐⭐ Essential - The orchestration hub"
    },
    {
      name: "Claude Sonnet 4.5",
      url: "https://www.anthropic.com/claude",
      category: "AI Models",
      color: "purple",
      icon: Zap,
      usage: "Primary AI model for code generation, architecture decisions, and complex implementations. Multiple instances running simultaneously.",
      verdict: "⭐⭐⭐ Powerhouse for code quality"
    },
    {
      name: "GLM 4.6",
      url: "https://open.bigmodel.cn",
      category: "AI Models",
      color: "blue",
      icon: Brain,
      usage: "Secondary model integrated with Claude Code. Used for specific tasks and cross-validation of approaches.",
      verdict: "⭐ Good for specialized tasks"
    },
    {
      name: "Haiku (Claude)",
      url: "https://www.anthropic.com/claude",
      category: "Voice Processing",
      color: "green",
      icon: MessageSquare,
      usage: "Embedded in SuperWhisper to translate natural speech into better-aligned AI prompts. The invisible layer making voice orchestration smoother.",
      verdict: "⭐ Perfect for voice enhancement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Workflow className="h-4 w-4" />
              <span className="text-sm font-semibold">Behind the Scenes</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Making the Sausage:<br />
              <span className="text-white/80">A Whole New Workflow</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              The unfiltered story of orchestrating 10+ AI platforms, pivoting through failures,
              using models to critique models, all guided by voice alone.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <span className="opacity-75">Platforms Used:</span> <strong>10+</strong>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <span className="opacity-75">Model Instances:</span> <strong>4-6 concurrent</strong>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                <span className="opacity-75">Major Pivots:</span> <strong>2</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Genesis */}
      <div className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Genesis: From Question to Experiment
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                After two years of public sector AI work, including building apps, training teams, and shaping policy, a pattern emerged.
                People often ask for demonstrations, wanting to see what's truly possible, as it's difficult to grasp what AI can and can't do.
                Another trend emerged, where most people treat AI like Google, using it only when they're stuck or want to get an answer.
                Many people lack exposure to understand the full capabilities of AI and that it's powerful enough now to be a <strong>full-time collaborator</strong>.
                That shift in thinking changes everything.
              </p>

              <p>
                Demonstrating that level of collaboration is also tricky in government and public sector environments. One agency has Azure.
                Another uses Google Workspace. A third is locked into legacy systems. Security requirements mean the latest tools
                lag by months or even a year. Vendors are also bad about lock-in and customizing everything. So anything shown
                in Azure may not directly translate to the rest of the world. Half the audience will struggle to replicate it.
                The challenge: find something with <strong>fewer barriers</strong>, less complexity, lower risk—and
                make it work across different platforms.
              </p>

              <p>
                Then came the question: What if <strong>one person, working entirely through voice conversations with AI</strong>,
                could build something that might typically require a full team and significant funding? No typing. No touching code.
                No looking at the code. Just orchestration—talking, guiding, collaborating.
              </p>

              <p>
                Is it possible to build an entire website with interactive modules and advanced functionality, full copywriting,
                editing, and review, using the exact methods being taught—voice orchestration, agent collaboration, and zero manual coding?
                Let the asset itself be the proof. After test runs demonstrated how quickly agents could research, scrape data, and
                assemble content, the path was clear: <strong>this is what people need to see</strong>—
              </p>

              <div className="bg-gradient-to-r from-orange-100 to-amber-100 border-l-4 border-orange-500 p-6 rounded-lg my-8">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                  <p className="font-bold text-orange-900 text-xl">The Proof of Concept</p>
                </div>
                <p className="text-orange-800 font-medium">
                  One person. Voice only. $80-220K value. Zero code touched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Journey */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Five Phases: From Research to Launch
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              This experiment unfolded in five distinct phases. This wasn't a straight line. It was experimentation, competition, failure, and adaptation—all driven by voice.
            </p>

            {/* Phase 1 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Search className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">Phase 1: Research & Intelligence Gathering</h3>
                    <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Foundation</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Before writing any code, data was needed. Lots of it. 190+ AI tools don't research themselves.
                    The challenge: gather high-quality data at scale without breaking the bank.
                  </p>
                  <Card className="border-2 border-purple-200 mb-4">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-600" />
                        The Dynamic Duo
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-purple-900 mb-2">Minimax Agent</h5>
                          <p className="text-sm text-slate-600">Powerful researcher and writer. Excellent at producing structured, high-quality output.</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">Kimi K2</h5>
                          <p className="text-sm text-slate-600">Lightning-fast web browsing. Fast at gathering information from many sites simultaneously.</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">
                        These two worked in tandem: Kimi K2 would rapidly gather raw data from across the web,
                        Minimax would synthesize it into structured tables and detailed briefings.
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded text-sm">
                        <p className="font-medium text-green-900 mb-1">GPT Pro as Backup</p>
                        <p className="text-slate-600">Used for supplementary research and validation when needed.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        The Cost Equation
                      </h4>
                      <p className="text-sm text-slate-700 mb-4">
                        The goal was to create <strong>tables of structured data</strong> on 190+ tools. The approach required volume,
                        quality, and speed—but at a sustainable cost.
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h5 className="font-semibold text-slate-900 text-sm">Minimax + Kimi K2 (2-3 research passes)</h5>
                              <p className="text-xs text-slate-600">Chinese open-source models</p>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-green-600">&lt;$1</div>
                              <div className="text-xs text-slate-600">100+ results</div>
                            </div>
                          </div>
                          <div className="text-xs text-slate-600">High quality, structured output, lightning fast</div>
                        </div>

                        <div className="bg-white p-3 rounded-lg border border-red-200">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h5 className="font-semibold text-slate-900 text-sm">Manus (similar research task)</h5>
                              <p className="text-xs text-slate-600">Premium platform with research capabilities</p>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-red-600">$$$</div>
                              <div className="text-xs text-slate-600">~20 results</div>
                            </div>
                          </div>
                          <div className="text-xs text-slate-600">High quality, but several dollars vs cents per pass</div>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-900 mb-2 text-sm">Why Other Tools Weren't Used</h5>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span><strong>Claude:</strong> Excellent at research and distilling, but very expensive and slow for bulk data gathering</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span><strong>Google (Gemini):</strong> Can research many sources, but not optimized for raw, structured data output</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span><strong>Other Western APIs:</strong> Cost-prohibitive for the required scale (190+ tools × multiple data points)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 pt-4 border-t border-green-200">
                        <p className="text-sm text-slate-700">
                          <strong>The verdict:</strong> Open-source Chinese models (Minimax, Kimi K2) offered the best cost-to-quality ratio
                          for bulk research tasks. This isn't a quality judgment—it's economics. When you need to process hundreds of data points,
                          cost efficiency becomes critical.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Palette className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">Phase 2: The AI-Judged Design Competition</h3>
                    <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">Design Wars</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    With research complete, great web design was needed. Instead of picking one platform, a competition was run.
                    <strong>AI models were configured to judge each other's work</strong>.
                  </p>

                  <Card className="border-2 border-amber-200 mb-4">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-amber-600" />
                        The Contestants
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-blue-900">Manus</h5>
                            <div className="text-xl">🏆</div>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">Strong design instincts, VM preview, integrated voice</p>
                          <div className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">
                            Winner: Best Web Design
                          </div>
                        </div>
                        <div className="p-4 bg-amber-50 rounded-lg">
                          <h5 className="font-semibold text-amber-900 mb-2">Minimax</h5>
                          <p className="text-sm text-slate-600 mb-2">Excellent at presentations (fast, high-quality), but web design wasn't its strength</p>
                          <div className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">
                            Best for: Presentations
                          </div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h5 className="font-semibold text-purple-900 mb-2">OK Computer</h5>
                          <p className="text-sm text-slate-600 mb-2">Kimi's platform for comparison</p>
                          <div className="text-xs font-medium text-slate-600">Solid alternative</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h5 className="font-semibold text-green-900 mb-2">ChatGPT (Codex)</h5>
                          <p className="text-sm text-slate-600 mb-2">Tried for web design generation</p>
                          <div className="text-xs font-medium text-slate-600">Good baseline</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 bg-purple-50/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-600" />
                        The Judging Process: Models Critique Models
                      </h4>
                      <p className="text-sm text-slate-700 mb-4">
                        The winner wasn't chosen manually. The AI models were set up to evaluate each other.
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            1
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Generated designs from all four platforms</p>
                            <p className="text-xs text-slate-600">Each platform created its version of the site</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            2
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Used ChatGPT's visual agent in Atlas browser</p>
                            <p className="text-xs text-slate-600">The visual agent could see and analyze the actual rendered designs</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            3
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Models evaluated multiple design factors</p>
                            <p className="text-xs text-slate-600">Mobile responsiveness, information architecture, accessibility, visual hierarchy, and more</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-8 w-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            4
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Models chose the winner through critique</p>
                            <p className="text-xs text-slate-600">Multiple iterations of feedback and comparison</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm font-semibold text-blue-900 mb-1">🏆 The Verdict</p>
                        <p className="text-sm text-slate-700">
                          <strong>Manus won the model-to-model design showdown.</strong> The AI judges consistently rated Manus's
                          web design output as superior for layout, component structure, and overall user experience—even though
                          Minimax excelled at presentation design.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-4 bg-slate-50 border-l-4 border-amber-500 p-4 rounded">
                    <p className="text-sm text-slate-700">
                      <strong>Why this matters:</strong> Having models critique models removed human bias from the design selection.
                      The process focused on orchestrating an objective evaluation based on design principles, not picking favorites.
                      This is orchestration at its finest: using AI to make AI better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">Phase 3: The Git Failure & The Rescue Mission</h3>
                    <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Crisis & Recovery</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    With Manus winning the design competition, all work was consolidated into their platform. Then the Git system corrupted.
                    What followed was a dramatic data rescue mission that showed both the risks and rewards of bleeding-edge platforms.
                  </p>

                  <Card className="border-2 border-orange-200 bg-orange-50/30 mb-4">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <GitBranch className="h-5 w-5 text-orange-600" />
                        What Went Wrong
                      </h4>
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            1
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900">Uploaded all work from other platforms into Manus</p>
                            <p className="text-sm text-slate-600">Hundreds of files, components, data structures—everything</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            2
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900">Made edits and improvements in the VM</p>
                            <p className="text-sm text-slate-600">Everything worked perfectly in the live preview. Amazing features like integrated VS Code.</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            3
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900">Hit publish... nothing happened</p>
                            <p className="text-sm text-slate-600">Something in the Git system got corrupted. Could see the checkpoint, access the site, but couldn't publish.</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            4
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900">Contacted Manus support</p>
                            <p className="text-sm text-slate-600">They couldn't help—Git corruption meant no way to recover through normal channels.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded text-sm text-slate-700">
                        <strong>Context:</strong> Manus is pushing the limits of what's possible with browser-based development environments.
                        Features like integrated VS Code and live VM previews are bleeding edge. And bleeding edge means occasional bleeding.
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        The Rescue Mission
                      </h4>
                      <p className="text-sm text-slate-700 mb-4">
                        Manus's advanced features actually <strong>enabled the rescue</strong>. Because the platform provides VM access,
                        creative solutions became possible.
                      </p>
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            1
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Opened Manus Computer View</p>
                            <p className="text-xs text-slate-600">Remote access into the virtual machine where the project files were stored</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            2
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Accessed VS Code terminal</p>
                            <p className="text-xs text-slate-600">Manus's integrated VS Code provided full shell access</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            3
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Navigated to the root filesystem</p>
                            <p className="text-xs text-slate-600">Found the checkpoint VM with the latest work still intact</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            4
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Tar zipped everything</p>
                            <p className="text-xs text-slate-600">Compressed all assets, components, and data into an archive ready for export</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            5
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Used AI to salvage and organize</p>
                            <p className="text-xs text-slate-600">
                              AI agents processed all the rescued files, extracting the data catalog and newer UI components.
                              Everything was organized for the local setup.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-4">
                        <p className="text-sm font-semibold text-purple-900 mb-1">🎤 Still Voice-First, Even in Crisis</p>
                        <p className="text-sm text-slate-700 mb-2">
                          <strong>The majority of this rescue operation was conducted with voice commands.</strong> Only 2-3 times
                          was manual typing required—and looking back, those instances probably could have been avoided
                          using Atlas browser's visual agent.
                        </p>
                        <p className="text-sm text-slate-700">
                          This wasn't just <em>talking</em> about voice orchestration. This was <strong>proving</strong> it works—even when
                          things go sideways.
                        </p>
                      </div>

                      <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm font-semibold text-green-900 mb-1">💡 Mission Accomplished</p>
                        <p className="text-sm text-slate-700">
                          Everything was rescued. Zero data loss. And ironically, it was Manus's advanced VM features that made the rescue possible.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-1">The Strategic Decision</p>
                    <p className="text-sm text-slate-700">
                      Too much had been invested in these assets to risk another platform failure. The decision was clear:
                      <strong> bring everything local</strong> for 100% control. Use GitHub for proper version control and backup.
                      No more platform dependencies for critical infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">Phase 4: Going Local - The Power of Claude Code</h3>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Breakthrough</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    100% local development. Full control. Multiple AI models running in parallel. This is where everything clicked.
                  </p>
                  <Card className="border-2 border-green-200">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-green-600" />
                        The Setup
                      </h4>
                      <div className="space-y-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-slate-900 mb-2">4-6 Concurrent AI Coding Instances</h5>
                          <p className="text-sm text-slate-600 mb-3">Multiple models running in parallel through Claude Code CLI and other tools</p>
                          <div className="grid md:grid-cols-2 gap-2 text-xs">
                            <div className="bg-white p-2 rounded border border-slate-200">
                              <div className="font-medium text-slate-900">Instances 1-3: Sonnet 4.5</div>
                              <div className="text-slate-600">Architecture, components, complex implementations</div>
                            </div>
                            <div className="bg-white p-2 rounded border border-slate-200">
                              <div className="font-medium text-slate-900">Instance 4: GLM 4.6</div>
                              <div className="text-slate-600">Component development & styling</div>
                            </div>
                            <div className="bg-white p-2 rounded border border-slate-200">
                              <div className="font-medium text-slate-900">Instance 5: Kimi K2</div>
                              <div className="text-slate-600">Coding tasks via Claude Code</div>
                            </div>
                            <div className="bg-white p-2 rounded border border-slate-200">
                              <div className="font-medium text-slate-900">Instance 6: Multi-Tool Testing</div>
                              <div className="text-slate-600">Factory Droid, Crush, Codex experiments</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                          <h5 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            The Orchestration Breakthrough
                          </h5>
                          <p className="text-sm text-slate-700 mb-2">
                            <strong>Models were configured to critique each other's work</strong>.
                          </p>
                          <p className="text-sm text-slate-700">
                            One instance would generate code. Another would review it and suggest improvements. A third would
                            implement the suggestions. The orchestration involved bouncing ideas between models to reduce effort
                            and improve results.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-slate-900 mb-2">90% of 355+ Prompts Happened Here</h5>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-2xl font-bold text-green-600">355+</div>
                              <div className="text-slate-600">Total prompts</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-green-600">~320</div>
                              <div className="text-slate-600">In Claude Code CLI</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-green-600">98</div>
                              <div className="text-slate-600">Lines per prompt</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 p-5 rounded-lg">
                          <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2 text-lg">
                            <Sparkles className="h-5 w-5 text-purple-600" />
                            Why Claude Dominated: The Sonnet 4.5 Turning Point
                          </h5>
                          <div className="space-y-3 text-sm text-slate-700">
                            <p className="leading-relaxed">
                              Once <strong>SuperWhisper was piped directly into Claude Code CLI</strong>, the quality of the
                              design and code <strong>shot up dramatically</strong>. It's genuinely hard to express how much faster
                              things started moving.
                            </p>
                            <p className="leading-relaxed">
                              There's a <strong>definite difference</strong> between open models and Claude—and even ChatGPT—when it
                              comes to design and front-end work. <strong>Complete night and day</strong>, especially for technical
                              aspects like particle systems, interactive modules, and complex UI orchestration.
                            </p>
                            <p className="leading-relaxed">
                              While tools like Codex are highly capable at solving hard technical problems, this project didn't have
                              super advanced algorithmic challenges. It was about <strong>interaction, communication, and speed</strong>.
                            </p>
                            <p className="leading-relaxed font-semibold text-purple-900">
                              Once the workflow shifted to Sonnet, everything changed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">Phase 5: Deployment to Vercel</h3>
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Production</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    From local development to live production. Setting up professional hosting infrastructure through voice commands.
                  </p>
                  <Card className="border-2 border-blue-200">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <GitBranch className="h-5 w-5 text-blue-600" />
                        Why Vercel Over GitHub Pages
                      </h4>
                      <div className="space-y-3 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-slate-900 mb-2 text-sm">The SPA Routing Problem</h5>
                          <p className="text-sm text-slate-600 mb-2">
                            This React SPA uses client-side routing (Wouter). When users access pages directly like
                            <code className="bg-slate-200 px-1 rounded mx-1">/catalog</code> or
                            <code className="bg-slate-200 px-1 rounded mx-1">/making-of</code>, the server needs to serve
                            <code className="bg-slate-200 px-1 rounded mx-1">index.html</code> for all routes.
                          </p>
                          <p className="text-sm text-slate-600">
                            GitHub Pages doesn't support this configuration without hacky workarounds. Vercel handles it natively.
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                            <h5 className="font-semibold text-green-900 mb-1 text-sm">Vercel Advantages</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• SPA routing via vercel.json</li>
                              <li>• Instant global CDN</li>
                              <li>• Preview deployments per commit</li>
                              <li>• Automatic builds from Git</li>
                              <li>• Zero configuration needed</li>
                            </ul>
                          </div>
                          <div className="bg-slate-50 border-l-4 border-slate-400 p-3 rounded">
                            <h5 className="font-semibold text-slate-900 mb-1 text-sm">GitHub Pages Limitations</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• No native SPA routing</li>
                              <li>• 404 errors on direct links</li>
                              <li>• Requires 404.html workarounds</li>
                              <li>• Slower deployment pipeline</li>
                              <li>• Limited configuration options</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 mt-6">
                        <Zap className="h-5 w-5 text-blue-600" />
                        The Deployment Process
                      </h4>
                      <div className="space-y-3">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            1
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Voice-orchestrated vercel.json configuration</p>
                            <p className="text-xs text-slate-600">Created SPA rewrite rules to serve index.html for all routes, fixing the 404 issue</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            2
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Connected GitHub repository to Vercel</p>
                            <p className="text-xs text-slate-600">Linked the repo for automatic deployments on every push to main branch</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            3
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Configured build settings</p>
                            <p className="text-xs text-slate-600">Set build command (pnpm build), output directory (dist/public), and environment variables</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            4
                          </div>
                          <div className="w-full">
                            <p className="font-medium text-slate-900 text-sm">Connected custom domain</p>
                            <p className="text-xs text-slate-600">DNS configuration and SSL certificate setup handled automatically by Vercel</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mt-6">
                        <p className="text-sm font-semibold text-blue-900 mb-1">⚡ Real-Time Workflow</p>
                        <p className="text-sm text-slate-700">
                          Voice command → Code change → Git commit → Vercel deployment → Live site updated. The entire
                          pipeline from speaking a change to seeing it live: typically under 2 minutes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Was Built */}
      <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Was Built
            </h2>

            {/* The Metrics */}
            <Card className="border-2 border-slate-200 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">The Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-orange-600 mb-1">355+</div>
                    <div className="text-sm text-slate-600">Total prompts</div>
                    <div className="text-xs text-slate-500 mt-1">98 lines per prompt average</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-600 mb-1">190+</div>
                    <div className="text-sm text-slate-600">AI tools cataloged</div>
                    <div className="text-xs text-slate-500 mt-1">Researched and documented</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-1">$80-220K</div>
                    <div className="text-sm text-slate-600">Estimated value</div>
                    <div className="text-xs text-slate-500 mt-1">Comparable deliverable</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-600 mb-1">40k+</div>
                    <div className="text-sm text-slate-600">Words spoken</div>
                    <div className="text-xs text-slate-500 mt-1">Estimated voice input</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
                    <div className="text-sm text-slate-600">Platforms used</div>
                    <div className="text-xs text-slate-500 mt-1">Tools orchestrated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-1">4-6</div>
                    <div className="text-sm text-slate-600">Concurrent instances</div>
                    <div className="text-xs text-slate-500 mt-1">AI models in parallel</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">2</div>
                    <div className="text-sm text-slate-600">Major pivots survived</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">1 person</div>
                    <div className="text-sm text-slate-600">Weeks of work</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Compared to Other Approaches</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* WordPress/Website Builder */}
                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg">WordPress / Website Builder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Template-based</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Fully custom</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Pre-built components</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Any feature needed</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Generic designs</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Unique branding</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Click interface</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Natural language</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Still the doer</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Orchestrator role</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Traditional Team */}
                <Card className="border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Traditional Development Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">$150k-$220k budget</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Fraction of cost</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">3-6 months timeline</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Weeks</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Managing people</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Orchestrating AI</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Communication overhead</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Direct commands</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Vendor dependency</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Full ownership</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Solo Traditional */}
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Solo Traditional Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Typing code</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Speaking intent</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Tool switching</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Unified interface</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Manual execution</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Parallel processing</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Single-threaded</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">4-6 concurrent tasks</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <div>
                          <span className="text-slate-500">Implementation focus</span>
                          <span className="text-slate-400 mx-2">vs</span>
                          <span className="font-medium text-slate-900">Direction focus</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* The Shift */}
              <Card className="border-2 border-blue-200 bg-blue-50/30 mt-8">
                <CardContent className="pt-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    From executing tasks to directing intelligence. From writing code to describing outcomes.
                    From doer to orchestrator.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* The Tool Stack */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              The Complete Tool Stack
            </h2>
            <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
              Every platform involved in this project, what it was used for, and an honest assessment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                const colorClasses = {
                  orange: 'bg-orange-50 border-orange-200 text-orange-700',
                  purple: 'bg-purple-50 border-purple-200 text-purple-700',
                  green: 'bg-green-50 border-green-200 text-green-700',
                  blue: 'bg-blue-50 border-blue-200 text-blue-700',
                  amber: 'bg-amber-50 border-amber-200 text-amber-700',
                  teal: 'bg-teal-50 border-teal-200 text-teal-700'
                };

                return (
                  <Card key={index} className="card-lift border-2 hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <CardTitle className="text-xl flex items-center justify-between">
                        {tool.name}
                        <span className="text-xs font-medium text-slate-500">{tool.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                        {tool.usage}
                      </p>
                      <div className="pt-3 border-t border-slate-200">
                        <p className="text-xs font-medium text-slate-700">{tool.verdict}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Key Lessons Learned
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-green-200 bg-green-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-900">
                    <CheckCircle2 className="h-6 w-6" />
                    What Worked
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Platform Competition:</strong> Running parallel experiments revealed the best tools faster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Local Development:</strong> Full control, no platform lock-in, instant pivots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Model Diversity:</strong> Different models excel at different tasks—use them all</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Models Critiquing Models:</strong> Having AIs review each other's work = better results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Voice as Universal Interface:</strong> One input method across all platforms = no context switching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-orange-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900">
                    <AlertTriangle className="h-6 w-6" />
                    What Didn't
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-orange-600 rounded-full mt-2"></div>
                      <span><strong>Platform Lock-in:</strong> Manus publishing failure showed the risk of relying on one platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-orange-600 rounded-full mt-2"></div>
                      <span><strong>Early Consolidation:</strong> Moving everything to one platform too soon created fragility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-orange-600 rounded-full mt-2"></div>
                      <span><strong>Assuming Stability:</strong> Even great platforms can have breaking bugs at critical moments</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm font-medium text-orange-900">
                      The Silver Lining: Voice orchestration made recovery effortless. 15 minutes to pivot completely.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="animated-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Are You Ready to Cook?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              This workflow isn't mystical. It's orchestration. And you can do it too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/getting-started">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Learn the Workflow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-study">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                  See the Numbers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
