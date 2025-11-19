import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Clock,
  Zap,
  TrendingUp,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Play,
  ChevronDown,
  ChevronUp,
  Video
} from "lucide-react";
import { getToolUrl, hasToolUrl } from "@/lib/toolUrlMapping";

/**
 * Represents a single step in a workflow
 */
interface WorkflowStep {
  step: number;
  tool: string;
  action: string;
  duration: string;
}

/**
 * Props for the EnhancedWorkflowCard component
 * Displays a complete AI workflow use case with expandable details
 */
interface EnhancedWorkflowCardProps {
  /** Unique identifier for the use case */
  id: string;
  /** Icon name for the workflow */
  icon: string;
  /** Display title of the workflow */
  title: string;
  /** Difficulty level (Easy, Beginner, Intermediate, Medium, Advanced, Expert, Cutting-Edge Preview) */
  difficulty: string;
  /** Time required for traditional approach */
  timeTraditional: string;
  /** Time required with AI approach */
  timeAI: string;
  /** Time savings percentage */
  savings: string;
  /** Estimated time to set up the workflow */
  estimatedSetupTime: string;
  /** Array of workflow steps */
  workflow: WorkflowStep[];
  /** List of tools used in the workflow */
  tools: string[];
  /** Optional video demonstration URL */
  videoUrl: string | null;
  /** Explanation of why these specific tools were chosen */
  whyTheseTools: string;
  /** Optional color theme (blue, purple, orange, amber) */
  color?: string;
  /** Optional scenario description */
  scenario?: string;
  /** Optional expected outcome */
  outcome?: string;
}

/**
 * Enhanced workflow card component for displaying complete AI workflow use cases
 * Features collapsible design, difficulty visualization, and accessibility support
 */
export default function EnhancedWorkflowCard({
  id,
  icon,
  title,
  difficulty,
  timeTraditional,
  timeAI,
  savings,
  estimatedSetupTime,
  workflow,
  tools,
  videoUrl,
  whyTheseTools,
  color = "blue",
  scenario,
  outcome
}: EnhancedWorkflowCardProps) {
  const [copied, setCopied] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Map icon name to Lucide icon (we'll use the icon prop passed in)
  const getIconComponent = (iconName: string) => {
    // For now, we'll return a generic icon
    // In the full implementation, you'd map icon names to actual Lucide components
    return Sparkles;
  };

  const IconComponent = getIconComponent(icon);

  /**
   * Color scheme structure for consistent theming across card elements
   */
  interface ColorScheme {
    bg: string;
    border: string;
    icon: string;
    badge: string;
    difficulty: {
      bg: string;
      text: string;
      border: string;
    };
  }

  /**
   * Maps color keys to Tailwind CSS classes for consistent theming
   * @param colorKey - Color theme identifier (blue, purple, orange, amber)
   * @returns ColorScheme object with all relevant CSS classes
   */
  const getColorClasses = (colorKey: string): ColorScheme => {
    const colors: Record<string, ColorScheme> = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-300",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-500",
        difficulty: {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-300"
        }
      },
      purple: {
        bg: "bg-teal-50",
        border: "border-teal-300",
        icon: "bg-teal-100 text-teal-600",
        badge: "bg-teal-500",
        difficulty: {
          bg: "bg-teal-100",
          text: "text-teal-700",
          border: "border-teal-300"
        }
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-500",
        difficulty: {
          bg: "bg-orange-100",
          text: "text-orange-700",
          border: "border-orange-300"
        }
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-300",
        icon: "bg-amber-100 text-amber-600",
        badge: "bg-amber-500",
        difficulty: {
          bg: "bg-amber-100",
          text: "text-amber-700",
          border: "border-amber-300"
        }
      }
    };
    return colors[colorKey] || colors.blue;
  };

  const colors = getColorClasses(color);

  // Render difficulty dots (1-3 based on level) - Memoized for performance
  const renderDifficultyDots = useMemo(() => {
    const difficultyLevels: Record<string, number> = {
      "Easy": 1,
      "Beginner": 1,
      "Intermediate": 2,
      "Medium": 2,
      "Advanced": 3,
      "Expert": 3,
      "Cutting-Edge Preview": 3
    };
    const level = difficultyLevels[difficulty] || 2;

    // Map color keys to actual gradient values (Tailwind JIT doesn't support dynamic class names)
    const gradientMap: Record<string, string> = {
      blue: "linear-gradient(to right, rgb(96 165 250), rgb(37 99 235))",
      purple: "linear-gradient(to right, rgb(94 234 212), rgb(20 184 166))",
      orange: "linear-gradient(to right, rgb(251 146 60), rgb(234 88 12))",
      amber: "linear-gradient(to right, rgb(251 191 36), rgb(245 158 11))"
    };

    return (
      <div className="flex items-center gap-1" role="img" aria-label={`Difficulty: ${level} out of 3`}>
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="h-2 w-2 rounded-full transition-all duration-300"
            style={{
              background: dot <= level
                ? (gradientMap[color] || gradientMap.blue)
                : "rgb(226 232 240)"
            }}
          />
        ))}
      </div>
    );
  }, [difficulty, color]);

  // Generate setup guide for copy functionality - Memoized for performance
  const generateSetupGuide = useCallback(() => {
    let guide = `# ${title}\n\n`;
    guide += `**Difficulty:** ${difficulty}\n`;
    guide += `**Estimated Setup Time:** ${estimatedSetupTime}\n\n`;

    if (scenario) {
      guide += `## Scenario\n${scenario}\n\n`;
    }

    guide += `## Tools Required\n`;
    tools.forEach(tool => {
      const url = getToolUrl(tool);
      guide += url ? `- [${tool}](${url})\n` : `- ${tool}\n`;
    });

    guide += `\n## Workflow Steps\n`;
    workflow.forEach(step => {
      guide += `\n### Step ${step.step}: ${step.tool}\n`;
      guide += `${step.action}\n`;
      guide += `**Duration:** ${step.duration}\n`;
    });

    if (outcome) {
      guide += `\n## Expected Outcome\n${outcome}\n`;
    }

    if (whyTheseTools) {
      guide += `\n## Why These Tools?\n${whyTheseTools}\n`;
    }

    return guide;
  }, [title, difficulty, estimatedSetupTime, scenario, tools, workflow, outcome, whyTheseTools]);

  const handleCopySetup = useCallback(async () => {
    try {
      const setupGuide = generateSetupGuide();
      await navigator.clipboard.writeText(setupGuide);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Fallback: Could show an error message to user
      // For now, just log the error
    }
  }, [generateSetupGuide]);

  return (
    <Card className={`border-2 ${colors.border} shadow-lg card-lift glass`}>
      <CardHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4 text-center md:text-left">
          <div className={`h-14 w-14 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="h-7 w-7" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-3 mb-2">
              <CardTitle className="text-2xl">{title}</CardTitle>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Badge className={`${colors.badge} text-white`}>{difficulty}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Setup: {estimatedSetupTime}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed Preview - Mini Stats */}
        {!isExpanded && (
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
              <Clock className="h-3 w-3 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">{savings} faster</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <Zap className="h-3 w-3 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700">{tools.length} tools</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
              <span className="text-xs font-semibold text-purple-700 mr-1">Difficulty:</span>
              {renderDifficultyDots}
            </div>
          </div>
        )}

        {/* Collapsed Preview - Tool Stack */}
        {!isExpanded && (
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2" role="list" aria-label="Tools used in workflow">
              {tools.slice(0, 4).map((tool, i) => {
                const isClickable = hasToolUrl(tool);
                const toolUrl = getToolUrl(tool);

                const avatar = (
                  <div
                    className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform cursor-pointer"
                    title={tool}
                    role="listitem"
                  >
                    <Sparkles className="h-4 w-4 text-slate-600" aria-hidden="true" />
                  </div>
                );

                return isClickable ? (
                  <a
                    key={i}
                    href={toolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${tool} - Opens in new tab`}
                  >
                    {avatar}
                  </a>
                ) : (
                  <div key={i} role="listitem" aria-label={tool}>
                    {avatar}
                  </div>
                );
              })}
              {tools.length > 4 && (
                <div
                  className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-sm"
                  role="listitem"
                  aria-label={`${tools.length - 4} more tools`}
                >
                  <span className="text-xs font-medium text-slate-600">+{tools.length - 4}</span>
                </div>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span className="text-sm text-slate-600">AI Workflow Pipeline</span>
          </div>
        )}

        {/* Time Savings - Full View (shown when expanded) */}
        {isExpanded && (
          <div className={`${colors.bg} p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 mb-4`}>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <Clock className="h-4 w-4" />
                Traditional Time
              </div>
              <div className="font-semibold text-slate-900">{timeTraditional}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <Zap className="h-4 w-4" />
                AI-Powered Time
              </div>
              <div className="font-semibold text-slate-900">{timeAI}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <TrendingUp className="h-4 w-4" />
                Time Saved
              </div>
              <div className="font-semibold text-green-600">{savings}</div>
            </div>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          aria-expanded={isExpanded}
          aria-controls={`card-content-${id}`}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show Full Details
            </>
          )}
        </Button>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`card-content-${id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            style={{ willChange: "opacity, height" }}
          >
            <CardContent className="space-y-6">
              {/* Scenario */}
        {scenario && (
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">The Scenario</h4>
            <p className="text-slate-600 leading-relaxed">{scenario}</p>
          </div>
        )}

        {/* Video Demo Section */}
        <Collapsible open={videoOpen} onOpenChange={setVideoOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start p-0 h-auto hover:bg-transparent"
            >
              <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                <Play className="h-4 w-4" />
                Video Demonstration <span className="text-slate-500 font-normal">(Coming Soon)</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    videoOpen ? "transform rotate-180" : ""
                  }`}
                />
              </h4>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <div className={`relative rounded-xl border-2 ${colors.difficulty.border} overflow-hidden`}>
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full"
                  poster="/placeholder-video.jpg"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />

                  {/* Enhanced Coming Soon placeholder */}
                  <div className="text-center z-10">
                    <Video className={`h-12 w-12 mx-auto mb-3 ${colors.difficulty.text} opacity-40`} />
                    <Badge className={`${colors.difficulty.bg} ${colors.difficulty.text} border ${colors.difficulty.border} animate-pulse`}>
                      <Sparkles className="h-3 w-3 mr-1" />
                      Video Demo Coming Soon
                    </Badge>
                    <p className="text-xs text-slate-500 mt-2">See this use case in action</p>
                  </div>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Tools Used - with clickable links */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Tools Used</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => {
              const toolUrl = getToolUrl(tool);
              const isClickable = hasToolUrl(tool);

              const toolBadgeContent = (
                <Badge
                  variant="secondary"
                  className={`${isClickable ? 'cursor-pointer hover:bg-slate-200 transition-colors' : ''} flex items-center gap-1`}
                >
                  {tool}
                  {isClickable && <ExternalLink className="h-3 w-3 ml-1" />}
                </Badge>
              );

              return isClickable ? (
                <a
                  key={index}
                  href={toolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  {toolBadgeContent}
                </a>
              ) : (
                <span key={index}>
                  {toolBadgeContent}
                </span>
              );
            })}
          </div>
        </div>

        {/* Why These Tools? */}
        <div className={`${colors.bg} p-4 rounded-lg border ${colors.difficulty.border}`}>
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Why These Tools?
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed">{whyTheseTools}</p>
        </div>

        {/* Workflow Steps */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">The Workflow</h4>
          <div className="space-y-4">
            {workflow.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className={`flex-shrink-0 h-8 w-8 ${colors.badge} text-white rounded-full flex items-center justify-center font-semibold text-sm`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h5 className="font-semibold text-slate-900">{step.tool}</h5>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        {outcome && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              The Result
            </h4>
            <p className="text-green-800 text-sm leading-relaxed">{outcome}</p>
          </div>
        )}

        {/* Copy Setup Guide Button */}
        <div className="flex justify-end pt-2">
          <Button
            onClick={handleCopySetup}
            variant="outline"
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Setup Guide
              </>
            )}
          </Button>
        </div>
      </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
