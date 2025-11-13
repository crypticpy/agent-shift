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
  TrendingUp,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Play,
  ArrowRight,
  Link2,
  Zap,
  Settings,
  ChevronDown,
  ChevronUp,
  Video
} from "lucide-react";
import { getToolUrl, hasToolUrl } from "@/lib/toolUrlMapping";

/**
 * Represents a data source in the connection pipeline
 */
interface DataSource {
  name: string;
  type: string;
  icon: string;
}

/**
 * Represents the orchestration platform
 */
interface OrchestrationType {
  name: string;
  icon: string;
}

/**
 * Represents the AI agent configuration
 */
interface AIAgentType {
  name: string;
  icon: string;
}

/**
 * Props for the RoleSetupCard component
 * Displays a role-specific AI agent connection setup with data pipeline visualization
 */
interface RoleSetupCardProps {
  /** Unique identifier for the setup */
  id: string;
  /** Role or scenario title */
  scenario: string;
  /** Detailed description of the setup */
  description: string;
  /** Difficulty level (Easy, Medium, Advanced) */
  difficulty: string;
  /** Technical skill level required */
  technicalLevel: string;
  /** Time saved with AI approach */
  timeSaved: string;
  /** Percentage of automation (0-100) */
  automationLevel: number;
  /** Estimated time to complete setup */
  estimatedSetupTime: string;
  /** Tool configuration for the connection pipeline */
  tools: {
    dataSources: DataSource[];
    orchestration: OrchestrationType;
    aiAgent: AIAgentType;
  };
  /** Icon for visual representation */
  icon: string;
  /** List of prerequisites needed before setup */
  prerequisites: string[];
  /** Steps in traditional workflow approach */
  traditionalWorkflow: string[];
  /** Steps in AI-powered workflow approach */
  aiWorkflow: string[];
  /** Explanation of tool choices */
  whyTheseTools: string;
  /** Optional video demonstration URL */
  videoUrl: string | null;
}

/**
 * Role-based setup card component for displaying AI agent connection configurations
 * Features data pipeline visualization, workflow comparison, and accessibility support
 */
export default function RoleSetupCard({
  id,
  scenario,
  description,
  difficulty,
  technicalLevel,
  timeSaved,
  automationLevel,
  estimatedSetupTime,
  tools,
  icon,
  prerequisites,
  traditionalWorkflow,
  aiWorkflow,
  whyTheseTools,
  videoUrl
}: RoleSetupCardProps) {
  const [copied, setCopied] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Color scheme structure for difficulty-based theming
   */
  interface DifficultyColorScheme {
    bg: string;
    border: string;
    icon: string;
    badge: string;
    textColor: string;
  }

  /**
   * Maps difficulty levels to appropriate color schemes
   * @param level - Difficulty level (Easy, Medium, Advanced)
   * @returns DifficultyColorScheme object with all relevant CSS classes
   */
  const getDifficultyColors = (level: string): DifficultyColorScheme => {
    const colorMap: Record<string, DifficultyColorScheme> = {
      Easy: {
        bg: "bg-green-50",
        border: "border-green-300",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-500",
        textColor: "text-green-600"
      },
      Medium: {
        bg: "bg-blue-50",
        border: "border-blue-300",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-500",
        textColor: "text-blue-600"
      },
      Advanced: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-500",
        textColor: "text-orange-600"
      }
    };
    return colorMap[level] || colorMap.Medium;
  };

  const difficultyColors = getDifficultyColors(difficulty);

  // Render difficulty dots (1-3 based on level) - Memoized for performance
  const renderDifficultyDots = useMemo(() => {
    const difficultyLevels: Record<string, number> = {
      "Easy": 1,
      "Medium": 2,
      "Advanced": 3
    };
    const level = difficultyLevels[difficulty] || 2;

    const gradientMap: Record<string, string> = {
      "Easy": "linear-gradient(to right, rgb(74 222 128), rgb(22 163 74))",
      "Medium": "linear-gradient(to right, rgb(96 165 250), rgb(37 99 235))",
      "Advanced": "linear-gradient(to right, rgb(251 146 60), rgb(234 88 12))"
    };

    return (
      <div className="flex items-center gap-1" role="img" aria-label={`Difficulty: ${level} out of 3`}>
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="h-2 w-2 rounded-full transition-all duration-300"
            style={{
              background: dot <= level
                ? (gradientMap[difficulty] || gradientMap.Medium)
                : "rgb(226 232 240)"
            }}
          />
        ))}
      </div>
    );
  }, [difficulty]);

  // Generate setup guide for copy functionality - Memoized for performance
  const generateSetupGuide = useCallback(() => {
    let guide = `# ${scenario} - AI Agent Connection Setup\n\n`;
    guide += `${description}\n\n`;
    guide += `**Difficulty:** ${difficulty}\n`;
    guide += `**Technical Level:** ${technicalLevel}\n`;
    guide += `**Estimated Setup Time:** ${estimatedSetupTime}\n`;
    guide += `**Time Saved:** ${timeSaved}\n`;
    guide += `**Automation Level:** ${automationLevel}%\n\n`;

    // Prerequisites
    guide += `## Prerequisites\n`;
    prerequisites.forEach(prereq => {
      guide += `- ${prereq}\n`;
    });

    // Tools
    guide += `\n## Tools Required\n\n`;
    guide += `### Data Sources\n`;
    tools.dataSources.forEach(source => {
      const url = getToolUrl(source.name);
      guide += url ? `- [${source.name}](${url}) (${source.type} connection)\n` : `- ${source.name} (${source.type} connection)\n`;
    });

    const orchUrl = getToolUrl(tools.orchestration.name);
    guide += `\n### Orchestration Platform\n`;
    guide += orchUrl ? `- [${tools.orchestration.name}](${orchUrl})\n` : `- ${tools.orchestration.name}\n`;

    const aiUrl = getToolUrl(tools.aiAgent.name);
    guide += `\n### AI Agent\n`;
    guide += aiUrl ? `- [${tools.aiAgent.name}](${aiUrl})\n` : `- ${tools.aiAgent.name}\n`;

    // Traditional vs AI Workflow
    guide += `\n## Traditional Workflow\n`;
    traditionalWorkflow.forEach((step, i) => {
      guide += `${i + 1}. ${step}\n`;
    });

    guide += `\n## AI-Powered Workflow\n`;
    aiWorkflow.forEach((step, i) => {
      guide += `${i + 1}. ${step}\n`;
    });

    // Why These Tools
    guide += `\n## Why These Tools?\n${whyTheseTools}\n`;

    return guide;
  }, [scenario, description, difficulty, technicalLevel, estimatedSetupTime, timeSaved, automationLevel, prerequisites, tools, traditionalWorkflow, aiWorkflow, whyTheseTools]);

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
    <Card className={`border-2 ${difficultyColors.border} shadow-lg card-lift glass`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div>
            <CardTitle className="text-2xl mb-2">{scenario}</CardTitle>
            <p className="text-base text-slate-600">{description}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={`${difficultyColors.badge} text-white`}>
            {difficulty}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Setup: {estimatedSetupTime}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Settings className="h-3 w-3" />
            {technicalLevel}
          </Badge>
        </div>

        {/* Collapsed Preview - Mini Stats */}
        {!isExpanded && (
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
              <Clock className="h-3 w-3 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">{timeSaved} saved</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <Zap className="h-3 w-3 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700">{automationLevel}% automated</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
              <span className="text-xs font-semibold text-purple-700 mr-1">Difficulty:</span>
              {renderDifficultyDots}
            </div>
          </div>
        )}

        {/* Collapsed Preview - Tool Stack Pipeline */}
        {!isExpanded && (
          <div className="flex items-center gap-3 mb-4 overflow-x-auto">
            <div className="flex -space-x-2 flex-shrink-0" role="list" aria-label="Data sources">
              {tools.dataSources.slice(0, 3).map((source, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform cursor-pointer"
                  title={source.name}
                  role="listitem"
                  aria-label={source.name}
                >
                  <Sparkles className="h-4 w-4 text-slate-600" aria-hidden="true" />
                </div>
              ))}
              {tools.dataSources.length > 3 && (
                <div
                  className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-sm"
                  role="listitem"
                  aria-label={`${tools.dataSources.length - 3} more data sources`}
                >
                  <span className="text-xs font-medium text-slate-600">+{tools.dataSources.length - 3}</span>
                </div>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
            <Badge variant="secondary" className="flex-shrink-0" aria-label={`Orchestration platform: ${tools.orchestration.name}`}>{tools.orchestration.name}</Badge>
            <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
            <Badge className="bg-purple-500 text-white flex-shrink-0" aria-label={`AI agent: ${tools.aiAgent.name}`}>
              <Sparkles className="h-3 w-3 mr-1" aria-hidden="true" />
              {tools.aiAgent.name}
            </Badge>
          </div>
        )}

        {/* Stat Cards - Full View (shown when expanded) */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Time Saved */}
            <div className={`${difficultyColors.bg} p-4 rounded-lg border ${difficultyColors.border}`}>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <Clock className="h-4 w-4" />
                Time Saved
              </div>
              <div className="text-2xl font-bold text-slate-900">{timeSaved}</div>
            </div>

            {/* Automation Level */}
            <div className={`${difficultyColors.bg} p-4 rounded-lg border ${difficultyColors.border}`}>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <Zap className="h-4 w-4" />
                Automation Level
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${difficultyColors.badge} transition-all duration-500`}
                    style={{ width: `${automationLevel}%` }}
                  />
                </div>
                <span className="text-lg font-bold text-slate-900">{automationLevel}%</span>
              </div>
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
            <div className={`relative rounded-xl border-2 ${difficultyColors.border} overflow-hidden`}>
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
                    <Video className={`h-12 w-12 mx-auto mb-3 ${difficultyColors.textColor} opacity-40`} />
                    <Badge className={`${difficultyColors.bg} ${difficultyColors.textColor} border ${difficultyColors.border} animate-pulse`}>
                      <Sparkles className="h-3 w-3 mr-1" />
                      Video Demo Coming Soon
                    </Badge>
                    <p className="text-xs text-slate-500 mt-2">See this role setup in action</p>
                  </div>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Connection Pipeline */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <Link2 className="h-4 w-4" />
            Data Connection Pipeline
          </h4>

          <div className="flex flex-col gap-3">
            {/* Data Sources */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Data Sources</p>
              <div className="flex flex-wrap gap-2">
                {tools.dataSources.map((source, index) => {
                  const toolUrl = getToolUrl(source.name);
                  const isClickable = hasToolUrl(source.name);

                  const toolBadgeContent = (
                    <Badge
                      variant="outline"
                      className={`${isClickable ? 'cursor-pointer hover:bg-slate-100 transition-colors' : ''}`}
                    >
                      {source.name} <span className="text-slate-400 ml-1">({source.type})</span>
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
                    <span key={index}>{toolBadgeContent}</span>
                  );
                })}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </div>

            {/* Orchestration */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Orchestration Platform</p>
              <div>
                {(() => {
                  const toolUrl = getToolUrl(tools.orchestration.name);
                  const isClickable = hasToolUrl(tools.orchestration.name);

                  const toolBadgeContent = (
                    <Badge
                      className={`${difficultyColors.badge} text-white ${isClickable ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                    >
                      {tools.orchestration.name}
                      {isClickable && <ExternalLink className="h-3 w-3 ml-1" />}
                    </Badge>
                  );

                  return isClickable ? (
                    <a
                      href={toolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      {toolBadgeContent}
                    </a>
                  ) : (
                    toolBadgeContent
                  );
                })()}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </div>

            {/* AI Agent */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">AI Agent</p>
              <div>
                {(() => {
                  const toolUrl = getToolUrl(tools.aiAgent.name);
                  const isClickable = hasToolUrl(tools.aiAgent.name);

                  const toolBadgeContent = (
                    <Badge
                      className={`bg-purple-500 text-white ${isClickable ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      {tools.aiAgent.name}
                      {isClickable && <ExternalLink className="h-3 w-3 ml-1" />}
                    </Badge>
                  );

                  return isClickable ? (
                    <a
                      href={toolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      {toolBadgeContent}
                    </a>
                  ) : (
                    toolBadgeContent
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className={`${difficultyColors.bg} p-4 rounded-lg border ${difficultyColors.border}`}>
          <h4 className="font-semibold text-slate-900 mb-3">Prerequisites</h4>
          <ul className="space-y-2">
            {prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why These Tools? */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-orange-600" />
            Why These Tools?
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed">{whyTheseTools}</p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Traditional Workflow */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 rotate-180" />
              Traditional Workflow
            </h4>
            <ol className="space-y-2 list-decimal list-inside">
              {traditionalWorkflow.map((step, index) => (
                <li key={index} className="text-sm text-red-800 leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* AI Workflow */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              AI-Powered Workflow
            </h4>
            <ol className="space-y-2 list-decimal list-inside">
              {aiWorkflow.map((step, index) => (
                <li key={index} className="text-sm text-green-800 leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

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
