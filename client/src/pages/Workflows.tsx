import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import {
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Star,
  DollarSign,
  Sparkles
} from "lucide-react";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { FlowingStreams } from "@/components/FlowingStreams";
import { useParticleBurst } from "@/hooks/useParticleBurst";
import { useComplementaryColors } from "@/hooks/useComplementaryColors";
import { MultiAgentWorkflowDiagram } from "@/components/MultiAgentWorkflowDiagram";

interface WorkflowStep {
  title: string;
  time: string;
  description: string;
  tools: string[];
}

interface Workflow {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeManual: string;
  timeAI: string;
  timeSaved: string;
  roiAnnual: string;
  category: string;
  pattern: string; // Orchestration pattern label
  steps: WorkflowStep[];
}

const workflows: Workflow[] = [
  {
    id: "voice-memo-email",
    title: "Voice Memo to Email",
    description: "Turn a quick voice note into a professional email in minutes",
    difficulty: "Beginner",
    timeManual: "15 minutes",
    timeAI: "5 minutes",
    timeSaved: "10 minutes per email",
    roiAnnual: "$5,000+ for frequent emailers",
    category: "Beginner",
    pattern: "Sequential: Capture → Transcribe → Polish",
    steps: [
      {
        title: "Record Your Thoughts",
        time: "2 minutes",
        description: "Use your phone's voice memo app or Superwhisper to record what you want to say. Don't worry about being perfect - just talk naturally.",
        tools: ["Apple Voice Memos", "Google Recorder", "Superwhisper"]
      },
      {
        title: "Transcribe to Text",
        time: "1 minute",
        description: "Upload your voice memo to an AI transcription tool. Most tools do this automatically.",
        tools: ["Whisperflow", "Otter.ai", "ChatGPT Voice"]
      },
      {
        title: "Polish the Email",
        time: "2 minutes",
        description: "Copy the transcript into ChatGPT and say: 'Turn this into a professional email.' Review and send.",
        tools: ["ChatGPT", "Claude", "Gmail with Gemini"]
      }
    ]
  },
  {
    id: "meeting-notes-summary",
    title: "Meeting Notes to Summary",
    description: "Transform messy meeting notes into a clean summary with action items",
    difficulty: "Beginner",
    timeManual: "30 minutes",
    timeAI: "10 minutes",
    timeSaved: "20 minutes per meeting",
    roiAnnual: "$10,000+ for managers",
    category: "Beginner",
    pattern: "Sequential: Record → Transcribe → Summarize",
    steps: [
      {
        title: "Record the Meeting",
        time: "0 minutes (automatic)",
        description: "Use your video platform's built-in recording or a meeting assistant to capture everything automatically.",
        tools: ["Zoom", "Teams", "Otter.ai", "Fireflies.ai"]
      },
      {
        title: "Get the Transcript",
        time: "2 minutes",
        description: "Download the transcript from your meeting tool. Most platforms generate this automatically now.",
        tools: ["Zoom", "Teams", "Otter.ai"]
      },
      {
        title: "Create the Summary",
        time: "3 minutes",
        description: "Paste the transcript into ChatGPT and ask: 'Summarize this meeting. Include key decisions, action items with owners, and next steps.'",
        tools: ["ChatGPT", "Claude", "Notion AI"]
      },
      {
        title: "Share with Team",
        time: "5 minutes",
        description: "Review the summary, make any quick edits, and send it to your team.",
        tools: ["Email", "Slack", "Teams"]
      }
    ]
  },
  {
    id: "quick-research-brief",
    title: "Quick Research Brief",
    description: "Get a comprehensive research summary on any topic in minutes",
    difficulty: "Beginner",
    timeManual: "2 hours",
    timeAI: "15 minutes",
    timeSaved: "1 hour 45 minutes",
    roiAnnual: "$15,000+ for researchers",
    category: "Beginner",
    pattern: "Iterative: Research → Review → Refine → Format",
    steps: [
      {
        title: "Ask for Research",
        time: "2 minutes",
        description: "Tell ChatGPT or Perplexity what you need to know. Be specific about what information matters most to you.",
        tools: ["ChatGPT", "Perplexity", "Claude"]
      },
      {
        title: "Review and Refine",
        time: "8 minutes",
        description: "Read what the AI found. Ask follow-up questions to dig deeper into specific areas.",
        tools: ["ChatGPT", "Perplexity"]
      },
      {
        title: "Format and Save",
        time: "5 minutes",
        description: "Ask the AI to format it as a brief with sections. Copy into a document and add your own insights.",
        tools: ["Google Docs", "Microsoft Word", "Notion"]
      }
    ]
  },
  {
    id: "meeting-to-presentation",
    title: "Meeting to Presentation",
    description: "Turn a recorded meeting into a shareable presentation",
    difficulty: "Intermediate",
    timeManual: "3-5 hours",
    timeAI: "30 minutes",
    timeSaved: "4+ hours",
    roiAnnual: "$20,000+ for frequent presenters",
    category: "Intermediate",
    pattern: "Sequential: Record → Extract → Generate → Polish",
    steps: [
      {
        title: "Record & Transcribe",
        time: "5 minutes",
        description: "Record your meeting and let the platform generate a transcript automatically.",
        tools: ["Zoom", "Teams", "Otter.ai"]
      },
      {
        title: "Extract Key Points",
        time: "10 minutes",
        description: "Paste the transcript into ChatGPT: 'Extract the key topics, decisions, and action items from this meeting. Format as a presentation outline.'",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Generate Slides",
        time: "10 minutes",
        description: "Copy the outline into Gamma or Beautiful.ai. The AI will create professional slides automatically.",
        tools: ["Gamma", "Beautiful.ai", "Tome"]
      },
      {
        title: "Polish and Brand",
        time: "5 minutes",
        description: "Add your organization's branding, adjust colors, and add any specific images or data.",
        tools: ["Gamma", "PowerPoint", "Google Slides"]
      }
    ]
  },
  {
    id: "email-automation",
    title: "Email Triage & Response",
    description: "Automatically categorize and draft responses to common emails",
    difficulty: "Intermediate",
    timeManual: "1-2 hours daily",
    timeAI: "20 minutes daily",
    timeSaved: "1+ hour daily",
    roiAnnual: "$25,000+ for high-volume inboxes",
    category: "Intermediate",
    pattern: "Batch Processing: Summarize → Draft → Review",
    steps: [
      {
        title: "Summarize Incoming Emails",
        time: "5 minutes",
        description: "Use Gmail's Gemini or Outlook's Copilot to get AI summaries of long emails. Create folders for common topics.",
        tools: ["Gmail with Gemini", "Outlook with Copilot"]
      },
      {
        title: "Draft Standard Responses",
        time: "10 minutes",
        description: "For routine questions, use AI to draft responses using your pre-approved language and templates.",
        tools: ["Gmail AI", "Outlook Copilot", "Superhuman"]
      },
      {
        title: "Review and Send",
        time: "5 minutes",
        description: "Quickly review each AI-generated response, make small edits if needed, and send. You stay in control.",
        tools: ["Email client"]
      }
    ]
  },
  {
    id: "research-to-report",
    title: "Research to Report",
    description: "Create a well-structured report from multiple research sources",
    difficulty: "Intermediate",
    timeManual: "4-6 hours",
    timeAI: "45 minutes",
    timeSaved: "5+ hours",
    roiAnnual: "$30,000+ for analysts",
    category: "Intermediate",
    pattern: "Sequential: Gather → Structure → Generate → Format",
    steps: [
      {
        title: "Gather and Summarize Sources",
        time: "15 minutes",
        description: "Feed your research materials (articles, PDFs, notes) into ChatGPT. Ask for a summary of each source's key findings.",
        tools: ["ChatGPT", "Claude", "NotebookLM"]
      },
      {
        title: "Create Report Structure",
        time: "10 minutes",
        description: "Ask the AI: 'Based on these summaries, create a report outline with Executive Summary, Background, Key Findings, and Recommendations.'",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Generate Full Report",
        time: "15 minutes",
        description: "Have the AI expand each section of the outline into full paragraphs. Review for accuracy and add your expert analysis.",
        tools: ["ChatGPT", "Claude", "Notion AI"]
      },
      {
        title: "Format and Finalize",
        time: "5 minutes",
        description: "Copy into your word processor, add charts or images, apply formatting, and do a final review.",
        tools: ["Microsoft Word", "Google Docs"]
      }
    ]
  },
  {
    id: "voice-dictation-workflow",
    title: "Voice Dictation Workflow",
    description: "Draft documents and reports using only your voice",
    difficulty: "Intermediate",
    timeManual: "1 hour typing",
    timeAI: "15 minutes speaking",
    timeSaved: "45 minutes (80% faster)",
    roiAnnual: "$15,000+ for field staff",
    category: "Intermediate",
    pattern: "Sequential: Speak → Transcribe → Polish",
    steps: [
      {
        title: "Start Dictation",
        time: "1 minute",
        description: "Open your dictation software. Start speaking your content naturally - don't worry about perfect grammar.",
        tools: ["Superwhisper", "Dragon Professional", "Mac Dictation"]
      },
      {
        title: "Speak Your Content",
        time: "10 minutes",
        description: "Talk through your entire document. Speak in complete thoughts. The AI will capture everything.",
        tools: ["Voice input"]
      },
      {
        title: "AI Cleanup",
        time: "4 minutes",
        description: "Copy the raw transcript into ChatGPT: 'Clean up this dictated text. Fix grammar, add proper formatting, and organize into clear sections.'",
        tools: ["ChatGPT", "Claude", "Grammarly"]
      }
    ]
  },
  {
    id: "multi-agent-research",
    title: "Multi-Agent Research Project",
    description: "Chain multiple AI agents together for comprehensive research",
    difficulty: "Advanced",
    timeManual: "20-30 hours",
    timeAI: "2 hours (mostly AI working)",
    timeSaved: "25+ hours",
    roiAnnual: "$50,000+ for research teams",
    category: "Advanced",
    pattern: "Agent Chain: Research → Analyze → Write → Visualize",
    steps: [
      {
        title: "Agent 1: Topic Research",
        time: "5 minutes setup",
        description: "Give Perplexity or ChatGPT your research question. Ask it to find the latest data, studies, and expert opinions.",
        tools: ["Perplexity", "ChatGPT", "Claude"]
      },
      {
        title: "Agent 2: Analysis & Synthesis",
        time: "5 minutes setup",
        description: "Take Agent 1's output and feed it to a second agent: 'Analyze these findings. Identify patterns, contradictions, and key insights.'",
        tools: ["ChatGPT", "Claude", "NotebookLM"]
      },
      {
        title: "Agent 3: Report Writing",
        time: "5 minutes setup",
        description: "Give Agent 2's analysis to a third agent: 'Write a comprehensive report with these sections: Executive Summary, Methodology, Findings, Implications, Recommendations.'",
        tools: ["ChatGPT", "Claude", "Notion AI"]
      },
      {
        title: "Agent 4: Visualization",
        time: "10 minutes",
        description: "Ask a fourth agent to create charts and visual summaries of the key data points.",
        tools: ["ChatGPT Code Interpreter", "Claude", "Datawrapper"]
      },
      {
        title: "Human Review & Polish",
        time: "1.5 hours",
        description: "Review all outputs, verify facts, add your expert insights, and polish the final deliverable.",
        tools: ["Your expertise"]
      }
    ]
  },
  {
    id: "policy-analysis-pipeline",
    title: "Policy Analysis Pipeline",
    description: "Analyze policy documents and create recommendations",
    difficulty: "Advanced",
    timeManual: "10-15 hours",
    timeAI: "3 hours",
    timeSaved: "10+ hours",
    roiAnnual: "$40,000+ for policy analysts",
    category: "Advanced",
    pattern: "Sequential Analysis: Ingest → Compare → Assess → Recommend",
    steps: [
      {
        title: "Document Ingestion",
        time: "10 minutes",
        description: "Upload policy documents, regulations, and related materials to NotebookLM or ChatGPT.",
        tools: ["NotebookLM", "ChatGPT", "Claude"]
      },
      {
        title: "Comparative Analysis",
        time: "15 minutes",
        description: "Ask AI to compare the policy with similar policies in other jurisdictions. Identify best practices and potential issues.",
        tools: ["ChatGPT", "Claude", "Perplexity"]
      },
      {
        title: "Impact Assessment",
        time: "20 minutes",
        description: "Have AI analyze potential impacts on different stakeholder groups. Generate scenarios and projections.",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Recommendation Generation",
        time: "15 minutes",
        description: "Ask AI to draft policy recommendations based on the analysis. Include pros, cons, and implementation considerations.",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Expert Review & Refinement",
        time: "2 hours",
        description: "Apply your policy expertise to validate AI findings, add nuance, and ensure recommendations are politically and practically feasible.",
        tools: ["Your expertise"]
      }
    ]
  },
  {
    id: "data-analysis-dashboard",
    title: "Data Analysis to Dashboard",
    description: "Turn raw data into insights and visualizations",
    difficulty: "Advanced",
    timeManual: "8-10 hours",
    timeAI: "2 hours",
    timeSaved: "7+ hours",
    roiAnnual: "$35,000+ for data analysts",
    category: "Advanced",
    pattern: "Sequential: Clean → Analyze → Visualize → Present",
    steps: [
      {
        title: "Data Upload & Cleaning",
        time: "15 minutes",
        description: "Upload your dataset to ChatGPT Code Interpreter or Claude. Ask it to clean the data and identify any issues.",
        tools: ["ChatGPT Code Interpreter", "Claude", "Julius AI"]
      },
      {
        title: "Exploratory Analysis",
        time: "20 minutes",
        description: "Ask AI to perform exploratory analysis: 'What are the key trends? Any correlations? Outliers? Interesting patterns?'",
        tools: ["ChatGPT", "Claude", "Julius AI"]
      },
      {
        title: "Create Visualizations",
        time: "30 minutes",
        description: "Request specific charts and graphs: 'Create a time series chart, a comparison bar chart, and a correlation heatmap.'",
        tools: ["ChatGPT Code Interpreter", "Claude", "Datawrapper"]
      },
      {
        title: "Generate Insights",
        time: "15 minutes",
        description: "Ask AI: 'Based on this analysis, what are the top 5 insights? What actions should we consider?'",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Build Dashboard",
        time: "40 minutes",
        description: "Compile the visualizations and insights into a dashboard or presentation. Add context and recommendations.",
        tools: ["Google Slides", "PowerPoint", "Tableau"]
      }
    ]
  },
  {
    id: "agent-chaining-complex",
    title: "Advanced Agent Chaining",
    description: "Master the art of chaining multiple specialized agents",
    difficulty: "Advanced",
    timeManual: "15-20 hours",
    timeAI: "3 hours (1 hour active, 2 hours AI working)",
    timeSaved: "16+ hours",
    roiAnnual: "$60,000+ for power users",
    category: "Advanced",
    pattern: "Multi-Agent: Design → Gather → Analyze → Synthesize",
    steps: [
      {
        title: "Design the Chain",
        time: "15 minutes",
        description: "Map out your workflow: What needs to happen? What's the output of each step? Which AI is best for each task?",
        tools: ["Pen and paper", "Miro", "Notion"]
      },
      {
        title: "Agent 1: Information Gathering",
        time: "10 minutes",
        description: "Use a research-focused AI to gather all necessary information. Be specific about what you need.",
        tools: ["Perplexity", "ChatGPT", "Consensus"]
      },
      {
        title: "Agent 2: Prompt Creation",
        time: "10 minutes",
        description: "Feed Agent 1's output to a second AI: 'Create a detailed prompt for analyzing this information. The next AI should identify patterns and generate insights.'",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Agent 3: Analysis",
        time: "10 minutes",
        description: "Use the AI-generated prompt with a third agent to perform the analysis.",
        tools: ["ChatGPT", "Claude", "NotebookLM"]
      },
      {
        title: "Agent 4: Synthesis & Formatting",
        time: "10 minutes",
        description: "Take the analysis and ask a fourth agent to synthesize it into your desired format (report, presentation, brief, etc.).",
        tools: ["ChatGPT", "Claude", "Notion AI"]
      },
      {
        title: "Human Orchestration",
        time: "2 hours",
        description: "Review each step's output, guide the process, verify accuracy, and add your expertise throughout.",
        tools: ["Your judgment"]
      }
    ]
  },
  {
    id: "ai-to-ai-cascading",
    title: "AI-to-AI Prompt Cascading",
    description: "Let AI agents write prompts for each other",
    difficulty: "Advanced",
    timeManual: "Variable",
    timeAI: "Variable",
    timeSaved: "50%+ of prompt writing time",
    roiAnnual: "$20,000+ for frequent AI users",
    category: "Advanced",
    pattern: "Cascading: Define → Generate Prompt → Execute → Refine",
    steps: [
      {
        title: "Define the End Goal",
        time: "5 minutes",
        description: "Clearly state what you want to achieve. Be specific about the final deliverable.",
        tools: ["Your planning"]
      },
      {
        title: "Ask for Prompt Creation",
        time: "5 minutes",
        description: "Tell the first AI: 'I need to [goal]. Create a detailed prompt that another AI can use to accomplish this perfectly.'",
        tools: ["ChatGPT", "Claude"]
      },
      {
        title: "Review the Generated Prompt",
        time: "5 minutes",
        description: "Read the AI-generated prompt. Make sure it captures your intent. Adjust if needed.",
        tools: ["Your judgment"]
      },
      {
        title: "Use the Prompt",
        time: "5 minutes",
        description: "Copy the AI-generated prompt and give it to a second AI (can be the same tool or a different one).",
        tools: ["ChatGPT", "Claude", "Perplexity"]
      },
      {
        title: "Iterate if Needed",
        time: "Variable",
        description: "If the output isn't perfect, ask the first AI to refine the prompt. Then try again with the second AI.",
        tools: ["Multiple AI tools"]
      }
    ]
  }
];

export default function Workflows() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const calloutRef = useRef<HTMLDivElement>(null);
  const handleBurst = useParticleBurst();
  const { complementaryHue, complementLight, complementDark, cssVariables } = useComplementaryColors();

  const categories = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredWorkflows = selectedCategory === "all"
    ? workflows
    : workflows.filter(w => w.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track scroll position to show/hide floating CTA
  useEffect(() => {
    const handleScroll = () => {
      if (calloutRef.current) {
        const rect = calloutRef.current.getBoundingClientRect();
        // Show floating CTA when callout has scrolled past the top of viewport
        setShowFloatingCTA(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-50 text-green-700 border-green-300 hover:bg-green-100";
      case "Intermediate": return "bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100";
      case "Advanced": return "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-amber-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 relative overflow-hidden">
        {/* Floating Orbs - Aurora Depth Effect */}
        <FloatingOrbs />

        {/* Flowing Streams - River Flow Effect */}
        <FlowingStreams particleCount={300} layers={4} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <Badge
                className="px-4 py-2 text-sm text-slate-800 border-transparent"
                style={{
                  background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.20 ${complementLight}))`,
                }}
              >
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Step-by-Step AI Workflows
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Workflow Recipes
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Actionable guides for combining AI tools to save hours every week
            </p>
          </div>
        </div>
      </div>

      {/* Multi-Agent Workflow Diagram */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <MultiAgentWorkflowDiagram />
        </div>
      </div>

      {/* Understanding Agents Callout */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass card-lift p-8 rounded-2xl border-2 border-blue-200/50 bg-white/80 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Understanding "Agents" in These Workflows</h3>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    When we say "Agent 1," "Agent 2," etc., we're talking about <span className="font-semibold text-slate-900">functional roles</span>, not different tools.
                  </p>
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    Think of it like this: The same AI tool can play different roles depending on what you ask it to do.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🔄</span>
                    One Tool, Multiple Roles
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    You could use ChatGPT for all 3 steps in a workflow—just give it different prompts for each role.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    Built-In Orchestration
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Advanced platforms like Manus or Claude can spawn sub-agents internally to handle different parts of your request.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-xl border border-teal-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🎨</span>
                    Mix and Match
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Use ChatGPT for research, Claude for writing, and Perplexity for fact-checking—whatever works best.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-slate-900">
                  💡 The key insight: What makes it "multi-agent" is the <span className="text-blue-600">orchestration pattern</span> (how tasks flow together), not how many tool subscriptions you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Callout to Use Cases */}
          <div ref={calloutRef} className="glass card-lift p-6 md:p-8 rounded-2xl mb-12 border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.22 ${complementLight}))`,
                }}
              >
                <Sparkles className="h-7 w-7 text-slate-800" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 text-center md:text-left">Want to See Advanced Multi-Agent Workflows?</h3>
                <p className="mb-6 text-slate-700 text-base md:text-lg leading-relaxed text-center md:text-left">
                  Check out our Use Cases page for detailed examples of complex workflows that chain 3-5 agents together.
                  See how to turn a week of work into 30 minutes using tools like KOSMOS, Julius AI, Manus, and Beautiful.ai.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href="/use-cases">
                    <Button
                      className="w-full md:w-auto relative text-slate-800 shadow-lg overflow-hidden border-0 text-sm md:text-base"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.22 ${complementLight}))`,
                      }}
                      onClick={handleBurst}
                    >
                      View Advanced Use Cases
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="sticky top-0 z-30 bg-gradient-to-br from-warm-50 via-white to-amber-50 py-4 -mx-4 px-4 mb-6">
            <Tabs defaultValue="all" className="">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto bg-slate-100/80 backdrop-blur-sm p-1.5 md:p-2 rounded-xl shadow-md">
              <TabsTrigger
                value="all"
                onClick={() => setSelectedCategory("all")}
                className="data-[state=active]:text-slate-800 rounded-lg text-xs sm:text-sm"
                style={
                  selectedCategory === "all"
                    ? { background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.20 ${complementLight}))` }
                    : {}
                }
              >
                All Workflows
              </TabsTrigger>
              <TabsTrigger
                value="Beginner"
                onClick={() => setSelectedCategory("Beginner")}
                className="data-[state=active]:text-slate-800 rounded-lg text-xs sm:text-sm"
                style={
                  selectedCategory === "Beginner"
                    ? { background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.20 ${complementLight}))` }
                    : {}
                }
              >
                Beginner
              </TabsTrigger>
              <TabsTrigger
                value="Intermediate"
                onClick={() => setSelectedCategory("Intermediate")}
                className="data-[state=active]:text-slate-800 rounded-lg text-xs sm:text-sm"
                style={
                  selectedCategory === "Intermediate"
                    ? { background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.20 ${complementLight}))` }
                    : {}
                }
              >
                Intermediate
              </TabsTrigger>
              <TabsTrigger
                value="Advanced"
                onClick={() => setSelectedCategory("Advanced")}
                className="data-[state=active]:text-slate-800 rounded-lg text-xs sm:text-sm"
                style={
                  selectedCategory === "Advanced"
                    ? { background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.20 ${complementLight}))` }
                    : {}
                }
              >
                Advanced
              </TabsTrigger>
            </TabsList>
            </Tabs>
          </div>

          {/* Workflow Cards */}
          <div className="space-y-8">
            {filteredWorkflows.map((workflow) => (
              <Card key={workflow.id} className="border-2 border-primary/10 card-lift glass overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="text-2xl md:text-3xl text-slate-900">{workflow.title}</CardTitle>
                        <Badge className={`${getDifficultyColor(workflow.difficulty)} border transition-colors`}>
                          {workflow.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-base md:text-lg text-slate-600 mb-3">
                        {workflow.description}
                      </CardDescription>

                      {/* Orchestration Pattern Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                        <span className="text-xs">🎼</span>
                        <span>{workflow.pattern}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats - Enhanced with modern design */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="glass p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Manual</span>
                      </div>
                      <div className="font-bold text-lg text-slate-900">{workflow.timeManual}</div>
                    </div>
                    <div className="glass p-4 rounded-xl border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all">
                      <div className="flex items-center gap-2 text-slate-900 text-sm mb-2">
                        <Zap className="h-4 w-4" />
                        <span className="font-medium">With AI</span>
                      </div>
                      <div className="font-bold text-lg text-slate-900">{workflow.timeAI}</div>
                    </div>
                    <div className="glass p-4 rounded-xl border border-accent/20 bg-accent/10 hover:bg-accent/20 transition-all">
                      <div className="flex items-center gap-2 text-slate-900 text-sm mb-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-medium">Time Saved</span>
                      </div>
                      <div className="font-bold text-lg text-slate-900">{workflow.timeSaved}</div>
                    </div>
                    <div className="glass p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all">
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-medium">ROI</span>
                      </div>
                      <div className="font-bold text-sm text-primary">{workflow.roiAnnual}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {expandedWorkflow === workflow.id ? (
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="h-1 w-12 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.22 ${complementLight}))`,
                          }}
                        ></div>
                        <h4 className="font-bold text-xl text-slate-900">Step-by-Step Instructions</h4>
                      </div>

                      {/* Visual Timeline */}
                      <div className="relative">
                        {workflow.steps.map((step, index) => (
                          <div key={index} className="relative pb-6 last:pb-0">
                            {/* Timeline connector */}
                            {index < workflow.steps.length - 1 && (
                              <div
                                className="absolute left-5 top-12 bottom-0 w-0.5"
                                style={{
                                  background: `linear-gradient(to bottom, oklch(0.65 0.18 ${complementaryHue} / 0.3), oklch(0.70 0.20 ${complementLight} / 0.3))`,
                                }}
                              ></div>
                            )}

                            <div className="glass p-4 md:p-6 rounded-2xl border-l-4 border-primary hover:border-accent transition-all card-lift bg-white/50">
                              <div className="flex gap-3 md:gap-5 items-start">
                                <div
                                  className="h-10 w-10 md:h-12 md:w-12 text-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-base md:text-lg shadow-lg"
                                  style={{
                                    background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.70 0.22 ${complementLight}))`,
                                  }}
                                >
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                    <h5 className="font-bold text-base md:text-lg lg:text-xl text-slate-900">{step.title}</h5>
                                    <Badge variant="outline" className="flex items-center gap-1.5 border-accent/30 text-slate-900 text-xs md:text-sm">
                                      <Clock className="h-3.5 w-3.5" />
                                      {step.time}
                                    </Badge>
                                  </div>
                                  <p className="text-slate-700 mb-4 leading-relaxed">{step.description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {step.tools.map((tool, toolIndex) => (
                                      <Badge
                                        key={toolIndex}
                                        variant="secondary"
                                        className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-primary/10 hover:to-accent/10 border border-slate-200 transition-all text-slate-900"
                                      >
                                        {tool}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => setExpandedWorkflow(null)}
                        className="w-full mt-4 border-primary/30 hover:bg-primary/5"
                      >
                        Close Instructions
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Button
                        onClick={() => setExpandedWorkflow(workflow.id)}
                        className="w-full sm:w-auto text-slate-900 shadow-lg text-sm md:text-base py-4 md:py-5 px-5 md:px-6 border-0"
                        style={{
                          background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.68 0.20 ${complementLight}), oklch(0.70 0.22 ${complementDark}))`,
                        }}
                      >
                        View Step-by-Step Instructions
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl p-10 text-white text-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.68 0.20 ${complementLight}), oklch(0.70 0.22 ${complementDark}))`,
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Calculate Your Savings?</h3>
              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                See exactly how much time and money these workflows can save you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/calculator">
                  <Button
                    size="lg"
                    className="relative text-lg px-10 py-6 bg-white shadow-xl overflow-hidden border-0"
                    style={{
                      color: `oklch(0.65 0.18 ${complementaryHue})`,
                    }}
                    onClick={handleBurst}
                  >
                    Use ROI Calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/catalog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative text-lg px-10 py-6 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 shadow-xl backdrop-blur-sm overflow-hidden"
                    onClick={handleBurst}
                  >
                    Browse AI Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <Link href="/use-cases">
            <Button
              size="lg"
              className="relative text-white shadow-2xl overflow-hidden border-0 text-base px-6 py-6 hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, oklch(0.65 0.18 ${complementaryHue}), oklch(0.68 0.20 ${complementLight}), oklch(0.70 0.22 ${complementDark}))`,
              }}
              onClick={handleBurst}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              View Advanced Use Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
