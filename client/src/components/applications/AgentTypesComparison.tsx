import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconTextSection } from "@/components/ui/icon-text-section";
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
  Sparkles,
  Layers
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
        <IconTextSection
          icon={<Sparkles className="h-8 w-8 text-accent" />}
          title="Different Agents for Different Jobs"
          description="Not all AI agents are the same. Each platform offers specialized agents optimized for specific tasks. Understanding these differences helps you pick the right tool for each job."
          iconBg="bg-accent/10"
          className="mb-6"
        />

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
          <IconTextSection
            icon={<Code className="h-7 w-7 text-blue-600" />}
            title="Coding Agents"
            description="Write, debug, and explain code across programming languages"
            iconBg="bg-blue-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Claude (Sonnet)</p>
                <Badge variant="default" className="bg-blue-600">Best Overall</Badge>
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
                <p className="font-bold text-foreground">OpenAI Codex</p>
                <Badge variant="outline">Cloud Agent</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Autonomous coding tasks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Runs tests, fixes bugs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-task parallel work</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Jules (Google)</p>
                <Badge variant="outline">Async Agent</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>GitHub integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Async task execution</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Gemini 2.5 powered</span>
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
              <strong>Use Case:</strong> Building a new feature? Start with Claude for architecture, use OpenAI Codex for autonomous implementation, Jules for async GitHub workflows, and Copilot for line-by-line coding.
            </p>
          </div>
        </Card>

        {/* Computer Use Agents */}
        <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
          <IconTextSection
            icon={<Monitor className="h-7 w-7 text-purple-600" />}
            title="Computer Use Agents"
            description="Control your computer, click buttons, navigate apps, automate workflows"
            iconBg="bg-purple-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

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

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">ChatGPT agent</p>
                <Badge variant="outline">Now Available</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Browse & interact with sites</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Run code, analyze data</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Agent mode in Plus/Pro</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Gemini Computer Use</p>
                <Badge variant="outline">Available</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Browser automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Screenshot inference</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>UI action generation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Use Case:</strong> "Fill out this expense report by pulling data from my receipts folder and entering it into the company portal." Agent sees your screen, opens apps, and completes the task. Or use ChatGPT agent to book appointments and research while you browse.
            </p>
          </div>
        </Card>

        {/* Web/Research Agents */}
        <Card className="p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
          <IconTextSection
            icon={<Globe className="h-7 w-7 text-emerald-600" />}
            title="Web & Research Agents"
            description="Browse the web, gather information, cite sources, track current events"
            iconBg="bg-emerald-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Perplexity</p>
                <Badge variant="default" className="bg-emerald-600">Best Research</Badge>
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
                <p className="font-bold text-foreground">ChatGPT Atlas</p>
                <Badge variant="outline">AI Browser</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Agent mode while browsing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Browser memories</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tasks while you browse</span>
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
              <strong>Use Case:</strong> Competitive intelligence? Use Perplexity for cited research. Need agents while browsing? ChatGPT Atlas automates tasks as you browse. YouTube research? Gemini extracts video content and integrates with Google Workspace.
            </p>
          </div>
        </Card>

        {/* Image Agents */}
        <Card className="p-6 border-2 border-pink-200 hover:border-pink-400 transition-colors">
          <IconTextSection
            icon={<Image className="h-7 w-7 text-pink-600" />}
            title="Image Generation Agents"
            description="Create images, edit photos, generate graphics, design assets"
            iconBg="bg-pink-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">ChatGPT (GPT-4o)</p>
                <Badge variant="default" className="bg-pink-600 w-fit">#1 Overall</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Best text accuracy, photorealism, complex scenes. Built into ChatGPT.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">Google Imagen 4</p>
                <Badge variant="outline" className="w-fit">Speed & Realism</Badge>
              </div>
              <p className="text-sm text-muted-foreground">4K output, photorealistic, accurate text, built-in watermarking</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">MiniMax Image</p>
                <Badge variant="outline" className="w-fit">Photorealistic</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Realistic photos, clean compositions, camera effects. $0.01/image.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-2 mb-3">
                <p className="font-bold text-foreground">Midjourney V7</p>
                <Badge variant="outline" className="w-fit">Artistic</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Stunning artistic images, illustration-focused, creative quality</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-pink-50 rounded-lg">
            <p className="text-sm text-pink-900">
              <strong>Use Case:</strong> Marketing materials? ChatGPT for text-heavy designs. Product photos? MiniMax or Imagen 4 for photorealism. Artistic concepts? Midjourney for creative illustrations.
            </p>
          </div>
        </Card>

        {/* Video Agents */}
        <Card className="p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
          <IconTextSection
            icon={<Video className="h-7 w-7 text-indigo-600" />}
            title="Video Generation Agents"
            description="Create videos from text, edit clips, generate animations with audio"
            iconBg="bg-indigo-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">OpenAI Sora 2</p>
                <Badge variant="default" className="bg-indigo-600">Physics Master</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cinematic realism</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Accurate physics simulation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Synchronized audio (1080p)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Google Veo 3.1</p>
                <Badge variant="outline">4K + Control</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>4K resolution output</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lip-synced dialogue</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Creative controls + API</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Runway Gen-3</p>
                <Badge variant="outline">Professional</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Advanced editing suite</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Motion graphics tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Industry standard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-indigo-900">
              <strong>Use Case:</strong> Cinematic shorts with realistic physics? Sora 2 excels at natural movement. High-resolution commercial content? Veo 3.1 delivers 4K with dialogue. Professional film editing? Runway Gen-3 offers the full creative toolkit.
            </p>
          </div>
        </Card>

        {/* Voice Agents */}
        <Card className="p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
          <IconTextSection
            icon={<Mic className="h-7 w-7 text-orange-600" />}
            title="Voice & Audio Agents"
            description="Real-time conversation, speech generation, transcription, voice cloning"
            iconBg="bg-orange-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

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
                  <span>Ultra-low latency</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Voice customization (2025)</span>
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
                  <span>Emotionally rich speech</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Custom voice creation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>32+ languages</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">GPT-4o Transcribe</p>
                <Badge variant="outline">Transcription</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lower word error rate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Better language recognition</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>API access (2025 upgrade)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-orange-900">
              <strong>Use Case:</strong> Real-time phone calls? ChatGPT Voice for natural conversation. Podcasts and audiobooks? ElevenLabs for emotional depth. Meeting transcripts? GPT-4o Transcribe for accuracy across languages.
            </p>
          </div>
        </Card>

        {/* Super Agents / Agent Platforms */}
        <Card className="p-6 border-2 border-violet-200 hover:border-violet-400 transition-colors bg-gradient-to-br from-violet-50 to-purple-50">
          <IconTextSection
            icon={<Layers className="h-7 w-7 text-violet-600" />}
            title="Super Agents / Agent Platforms"
            description="Fully integrated systems with VM spawning, built-in IDEs, presentation tools, and multiple capabilities—no add-ons needed"
            iconBg="bg-violet-100"
            titleClassName="text-xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border-2 border-violet-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Kimi K2</p>
                <Badge variant="default" className="bg-violet-600">OK Computer</Badge>
              </div>
              <div className="space-y-2 text-sm mb-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Virtual computer for tasks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Website builder (chat → site)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1M row data processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>VS Code integration (Cline)</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">1T parameter MoE, K2 Thinking (Nov 2025)</p>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-violet-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">Manus</p>
                <Badge variant="outline">Cloud VM</Badge>
              </div>
              <div className="space-y-2 text-sm mb-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Dedicated cloud VM per session</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sandboxed environment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-agent architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Runs 24/7 even when offline</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">Launched March 2025, 2M+ waitlist signups</p>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-violet-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-foreground">MiniMax Agent</p>
                <Badge variant="outline">All-in-One</Badge>
              </div>
              <div className="space-y-2 text-sm mb-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Shell, Browser, Python built-in</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No-code app builder</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lightning & Pro modes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>8% of Claude price, 2x speed</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">M2 model (230B params), 69.4 SWE-bench score</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-violet-50 rounded-lg border-l-4 border-violet-500">
            <p className="text-sm text-violet-900">
              <strong>Use Case:</strong> Need a full development environment? These platforms spawn virtual machines with IDE access. Building apps from scratch? No-code builders turn descriptions into working sites. Processing massive datasets? They handle millions of rows natively. Unlike specialized agents, super agents combine coding, browsing, data processing, and presentations in one platform.
            </p>
          </div>

          <div className="mt-4 p-5 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg border border-violet-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-bold text-foreground mb-2">The Future: Router Models & Unified Platforms</p>
                <p className="text-sm text-muted-foreground">
                  ChatGPT and Google are moving toward this model—folding multiple specialized models under a router that picks the right one for each task. These Chinese platforms (Kimi K2, Manus, MiniMax) are already there, offering truly general-purpose AI agents that can tackle complex, multi-step workflows across domains without switching tools.
                </p>
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
            <strong>Pro Tip:</strong> Don't feel locked into one platform. The best orchestrators use 3-5 different agents for different specialties—Claude for code architecture, Perplexity for research, MiniMax for video, ChatGPT for general tasks. For complex multi-step projects requiring VM environments and full development stacks, consider super agent platforms like Kimi K2, Manus, or MiniMax Agent. Mix and match based on what each does best.
          </p>
        </div>
      </Card>
    </div>
  );
}
