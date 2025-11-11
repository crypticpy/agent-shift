import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  FlaskConical,
  BarChart3,
  Palette,
  FileText,
  Zap
} from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      id: 1,
      icon: BarChart3,
      title: "Community Survey Analysis & Reporting",
      subtitle: "From Raw Data to Three Presentations",
      difficulty: "Intermediate",
      timeTraditional: "1 week + small team",
      timeAI: "10 minutes of voice input",
      savings: "95%",
      color: "blue",
      scenario: "A program manager receives results from a community health survey with 500 responses. They need to analyze the data, create an interactive portal for the community to explore results, and prepare presentations for three different audiences: executives, community members, and staff.",
      workflow: [
        {
          step: 1,
          tool: "Voice Input (Superwhisper or Windows Voice Access)",
          action: "While walking to your car, describe what you need: 'I have survey results with 500 responses. I need statistical analysis, key findings, demographic breakdowns, and presentations for executives, community, and staff.'",
          duration: "2 minutes"
        },
        {
          step: 2,
          tool: "Julius AI or ChatGPT Advanced Data Analysis",
          action: "Upload the survey CSV file. The AI automatically cleans the data, performs statistical analysis, identifies significant patterns, creates visualizations (charts, graphs), and generates a comprehensive analysis report.",
          duration: "5-10 minutes"
        },
        {
          step: 3,
          tool: "ChatGPT",
          action: "Review the analysis results. Ask ChatGPT to build a detailed prompt and information package specifically formatted for Manus to create an interactive web portal.",
          duration: "3 minutes"
        },
        {
          step: 4,
          tool: "Manus",
          action: "Paste the ChatGPT-generated prompt. Manus creates a full interactive web portal with survey results, filterable data, interactive charts, and downloadable reports that the community can explore.",
          duration: "10-15 minutes"
        },
        {
          step: 5,
          tool: "Beautiful.ai or Gamma",
          action: "Feed the analysis summary to the presentation AI. It generates three versions automatically: Executive summary (high-level metrics, ROI), Community presentation (accessible language, visual focus), Staff training deck (detailed methodology, action items).",
          duration: "5 minutes per deck"
        }
      ],
      outcome: "In about 30-40 minutes total (mostly AI working time), you've completed what would traditionally take a week with a team of analysts, web developers, and designers. The program manager only spent 10 minutes actually working - the rest was AI agents working autonomously.",
      tools: ["Superwhisper/Voice Access", "Julius AI", "ChatGPT", "Manus", "Beautiful.ai/Gamma"]
    },
    {
      id: 2,
      icon: FlaskConical,
      title: "Scientific Research Discovery",
      subtitle: "Six Months of Research in 12 Hours",
      difficulty: "Advanced",
      timeTraditional: "6 months of PhD/postdoc work",
      timeAI: "12 hours autonomous + 2 hours review",
      savings: "99%",
      color: "purple",
      scenario: "A neuroscience researcher needs to understand neuronal vulnerability in aging. This requires reviewing thousands of papers, analyzing large datasets, generating hypotheses, and producing a comprehensive report with novel findings.",
      workflow: [
        {
          step: 1,
          tool: "KOSMOS AI Scientist",
          action: "Set the research objective: 'Understand neuronal vulnerability in aging.' KOSMOS runs autonomously for up to 12 hours, reading 1,500 scientific papers, running 42,000 lines of analysis code, performing parallel data analysis, conducting literature searches, and generating hypotheses.",
          duration: "12 hours (autonomous)"
        },
        {
          step: 2,
          tool: "KOSMOS Output Review",
          action: "KOSMOS delivers a comprehensive report with novel discoveries. In real cases, KOSMOS identified that entorhinal cortex neurons have reduced flippase expression with age, potentially triggering Alzheimer's-related neuronal death. The finding was validated in human AD datasets.",
          duration: "1-2 hours human review"
        },
        {
          step: 3,
          tool: "ChatGPT or Claude",
          action: "Review KOSMOS findings, refine conclusions, identify the most significant discoveries, and prepare a manuscript draft with proper citations and methodology sections.",
          duration: "30 minutes"
        },
        {
          step: 4,
          tool: "Gamma",
          action: "Generate a conference presentation and poster design showcasing the key findings, methodology, and implications for Alzheimer's research.",
          duration: "10 minutes"
        }
      ],
      outcome: "KOSMOS compressed 6 months of traditional research into 12 hours of autonomous work. The researcher's actual time investment: about 3 hours total for setup, review, and refinement. The AI made novel discoveries that were validated in orthogonal datasets, demonstrating real scientific value.",
      tools: ["KOSMOS", "ChatGPT/Claude", "Gamma"],
      note: "KOSMOS costs $200 per run but delivers work equivalent to 6 months of a PhD scientist's time. Beta users report 79.4% accuracy on conclusions."
    },
    {
      id: 3,
      icon: Palette,
      title: "Product Design & Mockup Creation",
      subtitle: "From Concept to Stakeholder Presentation",
      difficulty: "Intermediate",
      timeTraditional: "3-5 days with design team",
      timeAI: "2-3 hours with voice + AI agents",
      savings: "90%",
      color: "pink",
      scenario: "A product manager needs to create mockups, flowcharts, and a pitch deck for a new mobile app feature. Traditionally, this requires coordinating with designers, waiting for iterations, and multiple review cycles.",
      workflow: [
        {
          step: 1,
          tool: "Voice Input (Wispr Flow or Superwhisper)",
          action: "Use voice to describe the product concept while commuting: 'New mobile app feature for scheduling appointments. Users should be able to see availability, book slots, receive confirmations, and reschedule. Target audience is busy professionals. Modern, clean design.'",
          duration: "5 minutes"
        },
        {
          step: 2,
          tool: "ChatGPT",
          action: "The voice transcript is fed to ChatGPT, which generates a detailed design brief, user stories, feature requirements, and user flow descriptions.",
          duration: "3 minutes"
        },
        {
          step: 3,
          tool: "Miro AI",
          action: "Paste the design brief. Miro AI generates flowcharts showing user journeys, creates wireframe layouts, and builds a visual sitemap of the feature.",
          duration: "10 minutes"
        },
        {
          step: 4,
          tool: "Figma AI",
          action: "Import the Miro wireframes. Figma AI creates high-fidelity mockups with proper spacing, typography, and interactions. Generate multiple screen states (empty, loading, success, error).",
          duration: "20 minutes"
        },
        {
          step: 5,
          tool: "Canva AI",
          action: "Create marketing materials and social media graphics to promote the new feature. Generate app store screenshots and promotional images.",
          duration: "15 minutes"
        },
        {
          step: 6,
          tool: "Beautiful.ai",
          action: "Build a stakeholder presentation with the problem statement, user research insights, design mockups, user flows, technical requirements, and timeline. Beautiful.ai auto-formats everything professionally.",
          duration: "10 minutes"
        }
      ],
      outcome: "In 2-3 hours, you've created comprehensive design assets that would traditionally require days of back-and-forth with a design team. The product manager can now present a fully-realized concept with professional mockups and a polished pitch deck.",
      tools: ["Wispr Flow/Superwhisper", "ChatGPT", "Miro AI", "Figma AI", "Canva AI", "Beautiful.ai"]
    },
    {
      id: 4,
      icon: FileText,
      title: "Policy Analysis & Recommendation Report",
      subtitle: "Multi-Source Research to Executive Brief",
      difficulty: "Advanced",
      timeTraditional: "2-3 weeks",
      timeAI: "4-6 hours",
      savings: "95%",
      color: "green",
      scenario: "A policy analyst needs to research a complex issue (e.g., housing affordability), review existing policies in 10 cities, analyze outcomes, and prepare recommendations for city council.",
      workflow: [
        {
          step: 1,
          tool: "Voice Input + Perplexity",
          action: "Use voice to ask Perplexity: 'Research housing affordability policies in Seattle, Portland, San Francisco, Austin, Denver, Minneapolis, Boston, New York, Chicago, and Los Angeles. Focus on inclusionary zoning, rent control, and affordable housing mandates. What worked and what didn't?'",
          duration: "5 minutes"
        },
        {
          step: 2,
          tool: "Perplexity Research",
          action: "Perplexity searches current sources, government reports, and academic papers. It provides a comprehensive summary with citations for each city's policies and outcomes.",
          duration: "10 minutes"
        },
        {
          step: 3,
          tool: "ChatGPT or Claude",
          action: "Feed Perplexity's research to ChatGPT. Ask it to: analyze patterns, identify best practices, flag failures, compare effectiveness, and draft policy recommendations tailored to your city's context.",
          duration: "15 minutes"
        },
        {
          step: 4,
          tool: "Julius AI",
          action: "If you have local housing data (prices, inventory, demographics), upload it to Julius AI. It creates visualizations showing your city's trends and how they compare to the researched cities.",
          duration: "10 minutes"
        },
        {
          step: 5,
          tool: "ChatGPT",
          action: "Combine the research, analysis, and data visualizations. Ask ChatGPT to write a comprehensive policy brief with: Executive Summary, Problem Statement, Research Findings, Data Analysis, Recommendations, Implementation Timeline, and Risk Assessment.",
          duration: "20 minutes"
        },
        {
          step: 6,
          tool: "Gamma",
          action: "Generate a presentation for city council with the key findings, data visualizations, and recommendations. Gamma creates a professional deck with proper formatting and visual hierarchy.",
          duration: "10 minutes"
        }
      ],
      outcome: "In 4-6 hours, you've produced a comprehensive policy analysis that would traditionally take 2-3 weeks of research, data gathering, analysis, and writing. The analyst becomes a guide and quality-control expert rather than spending weeks on manual research.",
      tools: ["Voice Input", "Perplexity", "ChatGPT/Claude", "Julius AI", "Gamma"]
    },
    {
      id: 5,
      icon: Users,
      title: "Grant Proposal Development",
      subtitle: "From Idea to Submission-Ready Proposal",
      difficulty: "Intermediate",
      timeTraditional: "3-4 weeks",
      timeAI: "1-2 days",
      savings: "90%",
      color: "orange",
      scenario: "A nonprofit program director needs to write a grant proposal for a new youth mental health program. This requires research on evidence-based practices, budget development, outcome metrics, and a compelling narrative.",
      workflow: [
        {
          step: 1,
          tool: "Voice Input + ChatGPT",
          action: "While driving, use voice to describe your program idea: 'Youth mental health program for ages 12-18. Focus on early intervention, peer support groups, and family engagement. Need evidence-based practices and outcome metrics.'",
          duration: "10 minutes"
        },
        {
          step: 2,
          tool: "Perplexity + ChatGPT",
          action: "Research evidence-based youth mental health interventions, successful program models, and relevant outcome metrics. ChatGPT synthesizes findings and identifies the strongest evidence for your approach.",
          duration: "30 minutes"
        },
        {
          step: 3,
          tool: "ChatGPT",
          action: "Draft the grant narrative sections: Need Statement, Program Description, Goals & Objectives, Methods, Evaluation Plan, and Sustainability. ChatGPT uses the research to support each section with evidence.",
          duration: "1 hour"
        },
        {
          step: 4,
          tool: "Julius AI or ChatGPT",
          action: "Create the budget. Provide salary info, program costs, and overhead rates. The AI generates a detailed budget with justifications for each line item.",
          duration: "30 minutes"
        },
        {
          step: 5,
          tool: "ChatGPT",
          action: "Review the funder's priorities and scoring criteria. Ask ChatGPT to revise the proposal to align with specific requirements, use the funder's language, and emphasize relevant outcomes.",
          duration: "45 minutes"
        },
        {
          step: 6,
          tool: "Beautiful.ai",
          action: "Create a visual logic model and program timeline. Many funders appreciate visual representations of how the program will work and achieve outcomes.",
          duration: "20 minutes"
        }
      ],
      outcome: "In 1-2 days of focused work (with AI doing the heavy lifting), you've created a comprehensive, evidence-based grant proposal. Traditional approach: 3-4 weeks of research, writing, and revisions. The program director focuses on strategy and storytelling while AI handles research and drafting.",
      tools: ["Voice Input", "Perplexity", "ChatGPT", "Julius AI", "Beautiful.ai"]
    },
    {
      id: 6,
      icon: Zap,
      title: "Emergency Response Plan Update",
      subtitle: "Multi-Jurisdiction Research to Updated Plan",
      difficulty: "Advanced",
      timeTraditional: "6-8 weeks",
      timeAI: "1 week",
      savings: "85%",
      color: "red",
      scenario: "An emergency management coordinator needs to update the county's emergency response plan based on lessons learned from recent disasters in other jurisdictions and new federal guidelines.",
      workflow: [
        {
          step: 1,
          tool: "Perplexity + Voice",
          action: "Research recent disaster responses (hurricanes, wildfires, floods) in similar jurisdictions. Ask: 'What worked? What failed? What are the new FEMA guidelines for 2025?'",
          duration: "1 hour"
        },
        {
          step: 2,
          tool: "ChatGPT",
          action: "Analyze the research and compare it to your current plan. ChatGPT identifies gaps, outdated procedures, and areas needing improvement based on recent best practices.",
          duration: "2 hours"
        },
        {
          step: 3,
          tool: "ChatGPT + Voice",
          action: "Draft updated sections of the plan. Use voice to describe local context and constraints. ChatGPT incorporates your input while maintaining compliance with federal guidelines.",
          duration: "4-6 hours over several days"
        },
        {
          step: 4,
          tool: "Miro AI",
          action: "Create updated organizational charts, communication flowcharts, and resource allocation maps. Miro AI generates visual representations of the new command structure and response protocols.",
          duration: "1 hour"
        },
        {
          step: 5,
          tool: "Gamma",
          action: "Build training presentations for different stakeholder groups: first responders, elected officials, community partners, and the public. Each presentation tailored to audience needs.",
          duration: "2 hours"
        },
        {
          step: 6,
          tool: "ChatGPT",
          action: "Generate a summary of changes document highlighting what's new, why it changed, and how it affects different departments. This helps with stakeholder buy-in and training.",
          duration: "30 minutes"
        }
      ],
      outcome: "In about 1 week of focused work, you've updated a comprehensive emergency response plan that would traditionally take 6-8 weeks of committee meetings, research, and drafting. The coordinator orchestrates the AI agents while focusing on local context and stakeholder engagement.",
      tools: ["Perplexity", "ChatGPT", "Miro AI", "Gamma"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "bg-purple-100 text-purple-600",
        badge: "bg-purple-600"
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        icon: "bg-pink-100 text-pink-600",
        badge: "bg-pink-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-600"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-600"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "bg-red-100 text-red-600",
        badge: "bg-red-600"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Real-World Examples
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Multi-Agent Workflow Examples
            </h1>
            <p className="text-xl opacity-95">
              See how combining AI agents transforms weeks of work into hours. These are real workflows being used today.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            const colors = getColorClasses(useCase.color);
            
            return (
              <Card key={useCase.id} className={`border-2 ${colors.border} shadow-lg`}>
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`h-14 w-14 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                        <Badge className={`${colors.badge} text-white`}>{useCase.difficulty}</Badge>
                      </div>
                      <CardDescription className="text-base">{useCase.subtitle}</CardDescription>
                    </div>
                  </div>

                  {/* Time Savings */}
                  <div className={`${colors.bg} p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4`}>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                        <Clock className="h-4 w-4" />
                        Traditional Time
                      </div>
                      <div className="font-semibold text-slate-900">{useCase.timeTraditional}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                        <Zap className="h-4 w-4" />
                        AI-Powered Time
                      </div>
                      <div className="font-semibold text-slate-900">{useCase.timeAI}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                        <TrendingUp className="h-4 w-4" />
                        Time Savings
                      </div>
                      <div className="font-semibold text-green-600">{useCase.savings} faster</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Scenario */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">The Scenario</h4>
                    <p className="text-slate-700 leading-relaxed">{useCase.scenario}</p>
                  </div>

                  {/* Workflow Steps */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">The Workflow</h4>
                    <div className="space-y-4">
                      {useCase.workflow.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <div className={`flex-shrink-0 w-8 h-8 ${colors.badge} text-white rounded-full flex items-center justify-center font-semibold text-sm`}>
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-semibold text-slate-900">{step.tool}</h5>
                              <span className="text-sm text-slate-500">{step.duration}</span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed">{step.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className={`${colors.bg} p-5 rounded-lg border-l-4 ${colors.border}`}>
                    <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                    <p className="text-slate-700 leading-relaxed">{useCase.outcome}</p>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="font-semibold text-sm text-slate-600 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-sm">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Note if exists */}
                  {useCase.note && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-yellow-900">
                        <strong>Note:</strong> {useCase.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Own Workflows?</h3>
          <p className="text-lg mb-6 opacity-95">
            Start with one simple workflow from our library, then adapt it to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workflows">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Workflows
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/catalog">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
