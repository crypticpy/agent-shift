import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Share2,
  MessageSquare,
  Link2,
  FolderOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";

/**
 * AgentCollaborationSetup - Shows how to collaborate with team members inside agent apps
 * Sharing conversations, team workspaces, collaborative prompting
 */
export function AgentCollaborationSetup() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card className="border-2 border-purple/30 bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-purple-100">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Agents as Your First Line of Collaboration
            </h3>
            <p className="text-lg text-muted-foreground">
              Stop emailing drafts back and forth. Start collaborating directly inside agent conversations—share context, iterate together, and let agents maintain the history of decisions and revisions.
            </p>
          </div>
        </div>

        <div className="bg-purple-100 border-l-4 border-purple-500 p-5 rounded-lg">
          <p className="text-purple-900 font-medium">
            <strong>Mindset Shift:</strong> Instead of "Let me draft this, then email you for feedback," try "Let me share this agent conversation so we can both refine it together."
          </p>
        </div>
      </Card>

      {/* Sharing Conversations */}
      <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg">
            <Share2 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-foreground mb-1">Sharing Agent Conversations</h4>
            <p className="text-muted-foreground">Let teammates see the full context and continue the work</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* ChatGPT Sharing */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-lg text-foreground">ChatGPT Conversation Sharing</h5>
              <Badge variant="default" className="bg-blue-600">Most Popular</Badge>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-blue-400">
                <p className="font-semibold text-foreground mb-3">How to share:</p>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Click the share icon in the top-right of any conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Choose "Share link" (anyone with link can view) or "Create team chat" (if you have Team plan)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Copy the link and send to teammates</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white/80 p-5 rounded-lg">
                <p className="font-semibold text-foreground mb-2">What they see:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Full conversation history (your prompts + agent responses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All context the agent has about the project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ability to fork the conversation and explore different directions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <p className="text-sm text-cyan-900">
                  <strong>Use Case:</strong> "I've been working with ChatGPT on this community survey design. Here's the link—you can see all the iterations we've done and suggest changes to the questions."
                </p>
              </div>
            </div>
          </div>

          {/* Claude Projects */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-lg text-foreground">Claude Projects (Team Collaboration)</h5>
              <Badge variant="outline">Team Plan</Badge>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-lg border-l-4 border-indigo-400">
                <p className="font-semibold text-foreground mb-3">What are Projects?</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Projects are shared workspaces where your entire team can collaborate with Claude using the same context, documents, and instructions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Upload shared documents (policies, templates, data) that Claude remembers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set custom instructions that apply to all team conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Everyone sees all conversations within the project</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-900">
                  <strong>Use Case:</strong> "Our entire team works in the 'Q4 Planning' project. We've uploaded last year's results, budget templates, and strategic goals. When anyone asks Claude for help, it already knows our context—no need to re-explain every time."
                </p>
              </div>
            </div>
          </div>

          {/* Team Workspaces */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-lg text-foreground">Team Workspaces (Various Platforms)</h5>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 p-5 rounded-lg border border-emerald-200">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  Microsoft Copilot
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Built into Microsoft 365—entire team shares context from SharePoint, Teams, and Outlook automatically
                </p>
                <a href="https://www.microsoft.com/microsoft-365/copilot" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="bg-white/80 p-5 rounded-lg border border-emerald-200">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  Google Gemini for Workspace
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Integrates with Google Drive, Docs, Sheets—team members share same agent with access to shared files
                </p>
                <a href="https://workspace.google.com/solutions/ai/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Collaborative Workflow Patterns */}
      <Card className="p-8 border-2 border-amber-200 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-foreground mb-1">Collaborative Workflow Patterns</h4>
            <p className="text-muted-foreground">Real ways teams use agents together</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Pattern 1 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                1
              </div>
              <h5 className="font-bold text-lg text-foreground">Parallel Drafting</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg mb-4 border-l-4 border-amber-400">
              <p className="font-semibold text-foreground mb-3">How it works:</p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Person A:</strong> Asks agent to draft the executive summary</li>
                <li><strong>Person B:</strong> Asks agent to draft the technical details (in a separate conversation)</li>
                <li><strong>Person C:</strong> Asks agent to create data visualizations</li>
                <li><strong>All:</strong> Share links to their conversations, then one person asks agent to combine all pieces</li>
              </ol>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Benefit:</strong> 3 people complete a complex document in 1 hour instead of sequential handoffs taking 3 days</span>
            </div>
          </div>

          {/* Pattern 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                2
              </div>
              <h5 className="font-bold text-lg text-foreground">Iterative Refinement</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg mb-4 border-l-4 border-orange-400">
              <p className="font-semibold text-foreground mb-3">How it works:</p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Draft:</strong> Person A creates initial draft with agent, shares conversation link</li>
                <li><strong>Refine:</strong> Person B opens shared link, continues conversation with refinement requests</li>
                <li><strong>Validate:</strong> Person C reviews, adds final touches in same conversation</li>
                <li><strong>Result:</strong> One conversation thread contains entire evolution of the document</li>
              </ol>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Benefit:</strong> No version control chaos. Everyone sees the full history of decisions and changes.</span>
            </div>
          </div>

          {/* Pattern 3 */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                3
              </div>
              <h5 className="font-bold text-lg text-foreground">Shared Knowledge Base</h5>
            </div>

            <div className="bg-white/80 p-5 rounded-lg mb-4 border-l-4 border-pink-400">
              <p className="font-semibold text-foreground mb-3">How it works:</p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Setup:</strong> Team creates a Claude Project with all key documents (policies, templates, past work)</li>
                <li><strong>Daily Use:</strong> Every team member works in the same project space</li>
                <li><strong>Learning:</strong> Agent learns from everyone's interactions and gets better at team-specific work</li>
                <li><strong>Onboarding:</strong> New team members see how others have used agents for similar tasks</li>
              </ol>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
              <span><strong>Benefit:</strong> Agent becomes an institutional knowledge repository that every team member can tap into</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Best Practices */}
      <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
        <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-3xl">✅</span>
          Collaboration Best Practices
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-green-800 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Do This
            </h5>

            <div className="bg-white/60 p-5 rounded-lg border border-green-200">
              <p className="font-semibold text-sm text-foreground mb-2">Name conversations clearly</p>
              <p className="text-xs text-muted-foreground">
                "Q4 Budget Proposal v2" not "Chat with ChatGPT" makes it easy for teammates to find
              </p>
            </div>

            <div className="bg-white/60 p-5 rounded-lg border border-green-200">
              <p className="font-semibold text-sm text-foreground mb-2">Share early in the process</p>
              <p className="text-xs text-muted-foreground">
                Share after first draft, not after it's "perfect." Let teammates influence direction early.
              </p>
            </div>

            <div className="bg-white/60 p-5 rounded-lg border border-green-200">
              <p className="font-semibold text-sm text-foreground mb-2">Use one conversation per project</p>
              <p className="text-xs text-muted-foreground">
                Keep all related work in one thread so agent maintains context across revisions
              </p>
            </div>

            <div className="bg-white/60 p-5 rounded-lg border border-green-200">
              <p className="font-semibold text-sm text-foreground mb-2">Document key decisions in-conversation</p>
              <p className="text-xs text-muted-foreground">
                "We decided to go with approach A because..." helps future team members understand reasoning
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-lg text-red-800 flex items-center gap-2">
              <span className="text-red-600">✗</span>
              Avoid This
            </h5>

            <div className="bg-red-50/60 p-5 rounded-lg border border-red-200">
              <p className="font-semibold text-sm text-foreground mb-2">Don't export and email</p>
              <p className="text-xs text-muted-foreground">
                Sharing agent output as plain text loses all context. Share the conversation link instead.
              </p>
            </div>

            <div className="bg-red-50/60 p-5 rounded-lg border border-red-200">
              <p className="font-semibold text-sm text-foreground mb-2">Don't start duplicate conversations</p>
              <p className="text-xs text-muted-foreground">
                If a teammate already started a conversation on this topic, continue theirs instead of starting fresh
              </p>
            </div>

            <div className="bg-red-50/60 p-5 rounded-lg border border-red-200">
              <p className="font-semibold text-sm text-foreground mb-2">Don't forget to share updates</p>
              <p className="text-xs text-muted-foreground">
                If you make significant changes to a shared conversation, ping the team so they see the latest
              </p>
            </div>

            <div className="bg-red-50/60 p-5 rounded-lg border border-red-200">
              <p className="font-semibold text-sm text-foreground mb-2">Don't skip security review</p>
              <p className="text-xs text-muted-foreground">
                Check your organization's policy before uploading sensitive documents to agent platforms
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Getting Started */}
      <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowRight className="h-7 w-7 text-blue-600" />
          Getting Your Team Started
        </h4>

        <div className="space-y-4">
          <div className="bg-white/60 p-6 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-blue-600 font-bold">Week 1:</span>
              Individual practice
            </h5>
            <p className="text-sm text-muted-foreground">
              Have each team member use agents individually for their own work. Build comfort with prompting, reviewing agent outputs, and iteration patterns.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-blue-600 font-bold">Week 2:</span>
              Share one success story
            </h5>
            <p className="text-sm text-muted-foreground">
              Each person shares one conversation link where an agent helped them. Team reviews and discusses what worked well.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-blue-600 font-bold">Week 3:</span>
              Collaborative project
            </h5>
            <p className="text-sm text-muted-foreground">
              Pick one team project and deliberately use shared agent conversations. Practice iterative refinement and parallel drafting patterns.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-blue-600 font-bold">Week 4+:</span>
              Make it the default
            </h5>
            <p className="text-sm text-muted-foreground">
              For any new project, start by creating a shared agent workspace first. Make agent collaboration the norm, not the exception.
            </p>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl border-l-4 border-blue-500">
          <p className="text-foreground font-medium">
            <strong>The Goal:</strong> In one month, your team should naturally think "Let's start an agent conversation" before "Let's schedule a meeting" or "Let me draft this and email it around." When agents become your first line of collaboration, that's when you've truly adopted orchestration as a team.
          </p>
        </div>
      </Card>
    </div>
  );
}
