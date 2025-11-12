import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Laptop,
  Monitor,
  ArrowRight,
  MessageSquare,
  Clock,
  CheckCircle2,
  Zap,
  Cloud
} from "lucide-react";

/**
 * CrossPlatformWorkflow - Shows how conversations and work sync across all devices
 * Demonstrates the power of cloud-synced agents that work everywhere
 */
export function CrossPlatformWorkflow() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-blue-100">
            <Cloud className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              One Agent Team, Every Device
            </h3>
            <p className="text-lg text-muted-foreground">
              Your agents aren't stuck on one device. Start a task on your phone, continue on your laptop, finish on your desktop. Everything syncs automatically through the cloud.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-lg">
          <p className="text-blue-900 font-medium">
            <strong>Key Benefit:</strong> You're not "using AI on your phone" or "using AI on your computer." You're orchestrating a team that's always available, no matter which device you pick up.
          </p>
        </div>
      </Card>

      {/* Visual Workflow Diagram */}
      <Card className="p-8 border-2 border-slate-200">
        <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
          A Day in the Life: Multi-Device Orchestration
        </h4>

        <div className="space-y-8">
          {/* Morning - Phone */}
          <div className="relative">
            <div className="flex items-start gap-6">
              {/* Time & Device */}
              <div className="flex-shrink-0 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">7:30 AM</Badge>
                <p className="text-xs text-muted-foreground mt-1">Walking to car</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                    <p className="font-bold text-foreground">Start Task via Voice</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg mb-4 border-l-4 border-orange-400">
                    <p className="text-sm text-foreground italic">
                      "Research the top 5 project management tools for teams under 20 people. Include pricing, key features, and integration with Slack and Google Workspace. Format it as a comparison table."
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Takes 30 seconds to speak. Agent starts working while you drive.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="absolute left-12 top-28 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-green-300 -mb-4 z-0"></div>
          </div>

          {/* Mid-Morning - Laptop */}
          <div className="relative">
            <div className="flex items-start gap-6">
              {/* Time & Device */}
              <div className="flex-shrink-0 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <Laptop className="h-10 w-10 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">9:00 AM</Badge>
                <p className="text-xs text-muted-foreground mt-1">Coffee shop</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="font-bold text-foreground">Review & Refine</p>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/80 p-4 rounded-lg">
                      <p className="text-sm text-foreground mb-2">
                        <strong>Agent has completed initial research:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Found 8 tools (filtered to top 5)</li>
                        <li>• Compiled pricing from official websites</li>
                        <li>• Verified integration capabilities</li>
                        <li>• Created comparison table</li>
                      </ul>
                    </div>
                    <div className="bg-white/80 p-4 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm text-foreground italic">
                        "Add a column showing which tools have mobile apps and include user ratings from G2."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>5 minutes to review and request additions. Agent updates while you respond to emails.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="absolute left-12 top-28 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-blue-300 -mb-4 z-0"></div>
          </div>

          {/* Afternoon - Desktop */}
          <div className="relative">
            <div className="flex items-start gap-6">
              {/* Time & Device */}
              <div className="flex-shrink-0 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">2:00 PM</Badge>
                <p className="text-xs text-muted-foreground mt-1">At office desk</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <p className="font-bold text-foreground">Finalize & Present</p>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/80 p-4 rounded-lg">
                      <p className="text-sm text-foreground mb-2">
                        <strong>Updated research ready:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Mobile app availability added</li>
                        <li>• G2 ratings included (4.2-4.7 stars)</li>
                        <li>• Professional formatting applied</li>
                        <li>• Export-ready for presentation</li>
                      </ul>
                    </div>
                    <div className="bg-white/80 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm text-foreground italic">
                        "Create a 5-slide presentation from this comparison. Slide 1: Overview. Slides 2-4: Top 3 recommendations. Slide 5: Implementation timeline."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Agent generates presentation in 3 minutes. You add strategic commentary and share with team.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⏱️</div>
            <div>
              <h5 className="font-bold text-foreground mb-2 text-lg">Total Human Time: 35 minutes</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span><strong>30 seconds</strong> to assign task via voice (phone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span><strong>5 minutes</strong> to review and refine (laptop)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span><strong>30 minutes</strong> to add strategic context and present (desktop)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white/60 rounded-lg">
                <p className="text-sm font-semibold text-purple-900">
                  Without AI: 6-8 hours of manual research, comparison, and slide creation
                </p>
                <p className="text-sm font-semibold text-green-700 mt-1">
                  With Multi-Device Agents: 35 minutes of strategic work = 90% time saved
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* How Sync Works */}
      <Card className="p-8 border-2 border-indigo-200">
        <h4 className="text-2xl font-bold text-foreground mb-6">
          How Cross-Device Sync Actually Works
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          {/* What Syncs */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              What Syncs Automatically
            </h5>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-sm text-foreground mb-1">Conversation History</p>
                <p className="text-xs text-muted-foreground">Every message you send and every response from agents</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-sm text-foreground mb-1">File Attachments</p>
                <p className="text-xs text-muted-foreground">Documents, images, and data you've shared</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-sm text-foreground mb-1">Agent Instructions</p>
                <p className="text-xs text-muted-foreground">Custom instructions or system prompts you've configured</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-sm text-foreground mb-1">Project Context</p>
                <p className="text-xs text-muted-foreground">Ongoing work the agent remembers about your projects</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              Requirements for Sync
            </h5>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm text-foreground mb-1">Same Account</p>
                <p className="text-xs text-muted-foreground">Sign in with the same email/account on all devices</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm text-foreground mb-1">Internet Connection</p>
                <p className="text-xs text-muted-foreground">Sync happens through the cloud, needs active connection</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm text-foreground mb-1">Latest App Version</p>
                <p className="text-xs text-muted-foreground">Keep apps updated for best sync experience</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm text-foreground mb-1">Wait a Few Seconds</p>
                <p className="text-xs text-muted-foreground">Sync usually happens instantly, but may take 5-10 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Pro Tips */}
      <Card className="p-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
        <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-3xl">💡</span>
          Pro Tips for Multi-Device Orchestration
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Use Voice on Mobile</h5>
            <p className="text-sm text-muted-foreground">
              Your phone is perfect for starting tasks while you're moving. Use voice to delegate work, then review results later on your computer where you have a bigger screen.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Bookmark on Desktop</h5>
            <p className="text-sm text-muted-foreground">
              Add chat.openai.com, claude.ai, and other agent platforms to your browser bookmarks bar. One-click access means you'll actually use them instead of defaulting to manual work.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Name Your Conversations</h5>
            <p className="text-sm text-muted-foreground">
              Most platforms let you rename conversations. Use descriptive names like "Q4 Budget Analysis" instead of "New Chat" so you can find them easily across devices.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-foreground mb-2">Pin Important Chats</h5>
            <p className="text-sm text-muted-foreground">
              Working on a big project? Pin that conversation so it appears at the top on all devices. Makes it easy to jump back in regardless of which device you're using.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-l-4 border-amber-500">
          <p className="text-foreground font-medium">
            <strong>The Big Picture:</strong> You're not limited by which device you have in front of you. Start work when inspiration strikes (phone), refine when you have focused time (laptop), present when you're at your desk (desktop). Your agent team follows you everywhere.
          </p>
        </div>
      </Card>
    </div>
  );
}
