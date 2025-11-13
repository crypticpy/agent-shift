import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconTextSection } from "@/components/ui/icon-text-section";
import { ResponsiveButtonGroup } from "@/components/ui/responsive-button-group";
import {
  Smartphone,
  Laptop,
  Monitor,
  Download,
  ExternalLink,
  CheckCircle2,
  Zap
} from "lucide-react";

/**
 * DeviceSetupGuide - Practical guide for installing AI agents on all devices
 * Shows users how to get agents on phone, desktop, and laptop with sync
 */
export function DeviceSetupGuide() {
  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
        <IconTextSection
          icon={<Zap className="h-8 w-8 text-primary" />}
          title="Get Agents on All Your Devices"
          description="Set up once, access everywhere. Your AI agents should work seamlessly across your phone, laptop, and desktop—all synced and ready when you are."
          iconBg="bg-primary/10"
          className="mb-6"
        />

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/60 p-4 rounded-lg border border-primary/20">
            <Smartphone className="h-6 w-6 text-primary mb-2" />
            <p className="font-semibold mb-1">Phone</p>
            <p className="text-sm text-muted-foreground">On the go - Voice input while walking, driving, or between meetings</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg border border-chart-2/20">
            <Laptop className="h-6 w-6 text-chart-2 mb-2" />
            <p className="font-semibold mb-1">Laptop</p>
            <p className="text-sm text-muted-foreground">Mobile workspace - Same agents in coffee shops, airports, home office</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg border border-accent/20">
            <Monitor className="h-6 w-6 text-accent mb-2" />
            <p className="font-semibold mb-1">Desktop</p>
            <p className="text-sm text-muted-foreground">Power work - Multiple agents, large screens, complex workflows</p>
          </div>
        </div>
      </Card>

      {/* Device Setup Sections */}
      <div className="grid gap-8">
        {/* Phone Setup */}
        <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <IconTextSection
            icon={<Smartphone className="h-8 w-8 text-white" />}
            title="Phone Setup (iOS & Android)"
            description="Your phone is where voice input shines. Set up these apps to use agents on the go."
            iconBg="bg-gradient-to-br from-primary to-chart-1 shadow-lg"
            titleClassName="text-2xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="space-y-6">
            {/* ChatGPT */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="text-lg font-bold text-foreground flex items-center gap-2">
                    ChatGPT
                    <Badge variant="secondary">Most Popular</Badge>
                  </h5>
                  <p className="text-sm text-muted-foreground mt-1">Best for: Research, writing, general tasks</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Download the app</p>
                    <p className="text-sm text-muted-foreground">iOS: App Store | Android: Google Play</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sign in with your account</p>
                    <p className="text-sm text-muted-foreground">Use the same account as your desktop</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Enable voice mode</p>
                    <p className="text-sm text-muted-foreground">Tap the headphone icon for hands-free conversation</p>
                  </div>
                </div>
              </div>

              <ResponsiveButtonGroup>
                <Button asChild variant="default" size="sm">
                  <a href="https://apps.apple.com/app/openai-chatgpt/id6448311069" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    iOS App
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Android App
                  </a>
                </Button>
              </ResponsiveButtonGroup>
            </div>

            {/* Claude */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="text-lg font-bold text-foreground">Claude</h5>
                  <p className="text-sm text-muted-foreground mt-1">Best for: Analysis, coding, detailed explanations</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Download the app</p>
                    <p className="text-sm text-muted-foreground">iOS: App Store | Android: Google Play</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sign in with your account</p>
                    <p className="text-sm text-muted-foreground">Same account syncs conversations across devices</p>
                  </div>
                </div>
              </div>

              <ResponsiveButtonGroup>
                <Button asChild variant="default" size="sm">
                  <a href="https://apps.apple.com/app/claude-by-anthropic/id6473753684" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    iOS App
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://play.google.com/store/apps/details?id=com.anthropic.claude" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Android App
                  </a>
                </Button>
              </ResponsiveButtonGroup>
            </div>

            {/* Voice Input Apps */}
            <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl">🎤</div>
                <div>
                  <h5 className="text-lg font-bold text-foreground">Pro Tip: Dedicated Voice Apps</h5>
                  <p className="text-muted-foreground mt-1">
                    For power users, apps like Superwhisper let you speak naturally and send to any agent with a keyboard shortcut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Desktop/Laptop Setup */}
        <Card className="p-8 border-2 border-chart-2/20 hover:border-chart-2/40 transition-colors">
          <IconTextSection
            icon={<Monitor className="h-8 w-8 text-white" />}
            title="Desktop & Laptop Setup"
            description="Your computer is command central. Set up web apps and desktop applications for serious work."
            iconBg="bg-gradient-to-br from-chart-2 to-chart-5 shadow-lg"
            titleClassName="text-2xl font-bold text-foreground"
            descriptionClassName="text-muted-foreground"
            className="mb-6"
          />

          <div className="space-y-6">
            {/* Web Apps */}
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h5 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-blue-600" />
                Web-Based Agents (Works on any browser)
              </h5>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">ChatGPT</p>
                  <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    chat.openai.com <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Same account = same chat history across all devices</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">Claude</p>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    claude.ai <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Conversations sync automatically across devices</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">Gemini</p>
                  <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    gemini.google.com <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Integrated with Google Workspace</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">Perplexity</p>
                  <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    perplexity.ai <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Research-focused with citations</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm font-medium text-blue-900">💡 Bookmark these in your browser for one-click access</p>
              </div>
            </div>

            {/* Desktop Apps */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h5 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-slate-600" />
                Desktop Applications (Optional but powerful)
              </h5>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">ChatGPT Desktop App</p>
                      <p className="text-sm text-muted-foreground">macOS & Windows</p>
                    </div>
                    <Badge variant="outline">Recommended</Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Global keyboard shortcut (Option+Space) to open anywhere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Works offline for installed models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Better performance for long conversations</span>
                    </li>
                  </ul>
                  <Button asChild variant="default" size="sm">
                    <a href="https://openai.com/chatgpt/download/" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Desktop App
                    </a>
                  </Button>
                </div>

                <div className="bg-white p-5 rounded-lg border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">Voice Input Apps</p>
                      <p className="text-sm text-muted-foreground">Superwhisper, MacWhisper (macOS)</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use voice on your computer like you do on your phone. Speak naturally, it types perfectly.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/catalog" className="flex items-center gap-2">
                      See Voice Tools in Catalog
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Sync Check Card */}
        <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex items-start gap-4">
            <div className="text-4xl">✅</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-3">
                Test Your Multi-Device Setup
              </h4>
              <p className="text-muted-foreground mb-4">
                Verify everything is synced and working correctly:
              </p>
              <ol className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Start a conversation on your phone (ask ChatGPT or Claude something)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Open the same app on your computer and check if the conversation appears</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>If it does, you're synced! If not, make sure you're signed in with the same account on both devices</span>
                </li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
