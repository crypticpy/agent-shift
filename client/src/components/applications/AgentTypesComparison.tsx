import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
  Monitor,
  Image,
  Video,
  Mic,
  Search,
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles
} from "lucide-react";

/**
 * AgentTypesComparison - Shows different types of specialized agents within each platform
 * Helps users understand which platform has which specialized capabilities
 */
export function AgentTypesComparison() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-accent/10">
            <Sparkles className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Different Agents for Different Jobs
            </h3>
            <p className="text-lg text-muted-foreground">
              Not all AI agents are the same. Each platform offers specialized agents optimized for specific tasks. Understanding these differences helps you pick the right tool for each job.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-lg">
          <p className="text-amber-900 font-medium">
            <strong>Key Insight:</strong> Think of this like hiring specialists. You wouldn't hire a web designer to write code or a video editor to design graphics. Same with AI agents—each platform has strengths in different areas.
          </p>
        </div>
      </Card>

      {/* Agent Types Grid */}
      <div className="grid gap-6">
        {/* Coding Agents */}
        <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-100">
              <Code className="h-7 w-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Coding Agents</h4>
              <p className="text-muted-foreground">Write, debug, and explain code across programming languages</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Claude (Sonnet)</p>
                <Badge variant="default" className="bg-blue-600">Best</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Full codebases, debugging</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Architectural planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>200K token context</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ChatGPT (o1)</p>
                <Badge variant="outline">Strong</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Code generation, snippets</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Algorithm optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-language support</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">GitHub Copilot</p>
                <Badge variant="outline">IDE-focused</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Live autocomplete</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Context from open files</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>VS Code integration</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Use Case:</strong> Building a new feature? Start with Claude for architecture, use ChatGPT for algorithm optimization, and Copilot for line-by-line coding.
            </p>
          </div>
        </Card>

        {/* Computer Use Agents */}
        <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-100">
              <Monitor className="h-7 w-7 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Computer Use Agents</h4>
              <p className="text-muted-foreground">Control your computer, click buttons, navigate apps, automate workflows</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Claude Computer Use</p>
                <Badge variant="default" className="bg-purple-600">Pioneering</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>See screen, move mouse, type</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-step automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Works across any app</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 opacity-60">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ChatGPT</p>
                <Badge variant="secondary">Coming Soon</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Computer control features announced but not yet released</p>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 opacity-60">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Gemini</p>
                <Badge variant="secondary">In Development</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Desktop automation capabilities in research phase</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Use Case:</strong> "Fill out this expense report by pulling data from my receipts folder and entering it into the company portal." Agent sees your screen, opens apps, and completes the task.
            </p>
          </div>
        </Card>

        {/* Web/Research Agents */}
        <Card className="p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-emerald-100">
              <Globe className="h-7 w-7 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Web & Research Agents</h4>
              <p className="text-muted-foreground">Browse the web, gather information, cite sources, track current events</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Perplexity</p>
                <Badge variant="default" className="bg-emerald-600">Best</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time web search</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Inline source citations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Research mode</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ChatGPT Browse</p>
                <Badge variant="outline">Strong</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Current information</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multiple sources</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Conversation context</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Gemini</p>
                <Badge variant="outline">Google-integrated</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Google Search powered</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Workspace integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>YouTube summaries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Use Case:</strong> Competitive intelligence? Use Perplexity for cited research. Product comparisons? ChatGPT Browse synthesizes across sources. YouTube research? Gemini extracts video content.
            </p>
          </div>
        </Card>

        {/* Image Agents */}
        <Card className="p-6 border-2 border-pink-200 hover:border-pink-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-pink-100">
              <Image className="h-7 w-7 text-pink-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Image Generation Agents</h4>
              <p className="text-muted-foreground">Create images, edit photos, generate graphics, design assets</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">DALL-E 3</p>
                <Badge variant="default" className="bg-pink-600 w-fit">Accessible</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Built into ChatGPT, best for quick visuals and text rendering</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">Midjourney</p>
                <Badge variant="outline" className="w-fit">Artistic</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Discord-based, stunning artistic images, illustration-focused</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">Stable Diffusion</p>
                <Badge variant="outline" className="w-fit">Customizable</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Open source, run locally, full control, model training</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">Ideogram</p>
                <Badge variant="outline" className="w-fit">Typography</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Best at text within images, logos, posters, signage</p>
            </div>
          </div>
        </Card>

        {/* Video Agents */}
        <Card className="p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-indigo-100">
              <Video className="h-7 w-7 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Video Generation Agents</h4>
              <p className="text-muted-foreground">Create videos from text, edit clips, generate animations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Minimax</p>
                <Badge variant="default" className="bg-indigo-600">Emerging Leader</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Text-to-video generation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>High-quality output</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Growing capabilities</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Runway</p>
                <Badge variant="outline">Professional</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Advanced editing tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Motion graphics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Industry adoption</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Pika</p>
                <Badge variant="outline">Creative</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible generation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Style control</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Community-driven</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-indigo-900">
              <strong>Use Case:</strong> Social media content? Minimax generates eye-catching clips. Professional presentations? Runway offers precision editing. Quick animations? Pika provides creative flexibility.
            </p>
          </div>
        </Card>

        {/* Voice Agents */}
        <Card className="p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-orange-100">
              <Mic className="h-7 w-7 text-orange-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-1">Voice & Audio Agents</h4>
              <p className="text-muted-foreground">Voice input, speech generation, audio transcription, voice cloning</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ChatGPT Voice</p>
                <Badge variant="default" className="bg-orange-600">Most Natural</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time conversation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Low latency</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Built into mobile app</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ElevenLabs</p>
                <Badge variant="outline">Voice Cloning</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Custom voice creation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multiple languages</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Professional quality</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Whisper (OpenAI)</p>
                <Badge variant="outline">Transcription</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Accurate transcription</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>99 languages</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Open source</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary/Recommendation Card */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
        <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          How to Choose the Right Agent
        </h4>

        <div className="space-y-4">
          <div className="bg-white/80 p-5 rounded-lg border border-primary/20">
            <p className="font-semibold text-foreground mb-2">1. Start with your task type</p>
            <p className="text-sm text-muted-foreground">
              Writing a document? Text agents (ChatGPT, Claude). Building software? Coding agents. Creating visuals? Image/video agents.
            </p>
          </div>

          <div className="bg-white/80 p-5 rounded-lg border border-chart-2/20">
            <p className="font-semibold text-foreground mb-2">2. Consider your workflow</p>
            <p className="text-sm text-muted-foreground">
              Need agents to work together? Choose platforms with good multi-agent coordination (Claude, ChatGPT). Working in specific tools? Pick agents with those integrations (GitHub Copilot for VS Code, Gemini for Google Workspace).
            </p>
          </div>

          <div className="bg-white/80 p-5 rounded-lg border border-accent/20">
            <p className="font-semibold text-foreground mb-2">3. Test and iterate</p>
            <p className="text-sm text-muted-foreground">
              Most platforms offer free tiers. Try different agents for the same task. You'll quickly learn which ones match your work style and produce the quality you need.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border-l-4 border-primary">
          <p className="text-foreground font-medium">
            <strong>Pro Tip:</strong> Don't feel locked into one platform. The best orchestrators use 3-5 different agents for different specialties—Claude for code architecture, Perplexity for research, Minimax for video, ChatGPT for general tasks. Mix and match based on what each does best.
          </p>
        </div>
      </Card>
    </div>
  );
}
