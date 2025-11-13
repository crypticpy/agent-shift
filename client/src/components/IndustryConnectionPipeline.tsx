import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  FileSearch,
  Briefcase,
  Sparkles,
  ArrowDown,
  BarChart,
  Mail,
  FileSpreadsheet,
  MessageSquare,
  Calendar,
  Database,
  Github,
  Workflow,
  Zap,
  Clock,
  ExternalLink,
  Video,
  Copy,
  CheckCircle2,
  Clock3,
  Link2,
  Gauge,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { getToolUrl, hasToolUrl } from "@/lib/toolUrlMapping";

interface Tool {
  name: string;
  type: "Native" | "API" | "MCP";
  icon: string;
}

interface RolePipelineData {
  scenario: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  technicalLevel: "Beginner" | "Intermediate" | "Advanced";
  tools: {
    dataSources: Tool[];
    orchestration: { name: string; icon: string };
    aiAgent: { name: string; icon: string };
  };
  icon: string;
  // Extended fields for Phase 2 & 3
  timeSaved?: string;
  automationLevel?: number;
  estimatedSetupTime?: string;
  videoUrl?: string;
  prerequisites?: string[];
  traditionalWorkflow?: string[];
  aiWorkflow?: string[];
  whyTheseTools?: string;
}

interface IndustryConnectionPipelineProps {
  data: RolePipelineData;
}

export function IndustryConnectionPipeline({ data }: IndustryConnectionPipelineProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPrerequisites, setShowPrerequisites] = useState(false);
  const [showWhyTools, setShowWhyTools] = useState(false);
  const [copied, setCopied] = useState(false);

  // Icon mapping
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      TrendingUp,
      Users,
      Package,
      DollarSign,
      FileSearch,
      Briefcase,
      Sparkles,
      BarChart,
      Mail,
      FileSpreadsheet,
      MessageSquare,
      Calendar,
      Database,
      Github,
      Workflow,
      Zap
    };
    return iconMap[iconName] || Briefcase;
  };

  // Difficulty color mapping
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return {
          border: "border-green-300",
          bg: "bg-green-50",
          text: "text-green-700",
          badgeBg: "bg-green-100",
          gradient: "from-green-500 to-emerald-500"
        };
      case "Medium":
        return {
          border: "border-amber-300",
          bg: "bg-amber-50",
          text: "text-amber-700",
          badgeBg: "bg-amber-100",
          gradient: "from-amber-500 to-orange-500"
        };
      case "Advanced":
        return {
          border: "border-purple-300",
          bg: "bg-purple-50",
          text: "text-purple-700",
          badgeBg: "bg-purple-100",
          gradient: "from-purple-500 to-pink-500"
        };
      default:
        return {
          border: "border-slate-300",
          bg: "bg-slate-50",
          text: "text-slate-700",
          badgeBg: "bg-slate-100",
          gradient: "from-slate-500 to-gray-500"
        };
    }
  };

  // Connection type color mapping
  const getConnectionTypeColor = (type: string) => {
    switch (type) {
      case "Native":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "API":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "MCP":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  // Copy setup guide to clipboard
  const handleCopySetup = () => {
    const setupGuide = `
# ${data.scenario} - AI Setup Guide

## Overview
${data.description}

**Difficulty:** ${data.difficulty}
**Technical Level:** ${data.technicalLevel}
${data.estimatedSetupTime ? `**Setup Time:** ${data.estimatedSetupTime}` : ''}

## Tools Needed

### Data Sources
${data.tools.dataSources.map(tool => `- ${tool.name} (${tool.type} connection)`).join('\n')}

### Orchestration Platform
- ${data.tools.orchestration.name}

### AI Agent
- ${data.tools.aiAgent.name}

${data.prerequisites ? `## Prerequisites
${data.prerequisites.map(p => `- ${p}`).join('\n')}` : ''}

${data.whyTheseTools ? `## Why These Tools?
${data.whyTheseTools}` : ''}

---
Generated from Agent Shift - https://agentshift.com
    `.trim();

    navigator.clipboard.writeText(setupGuide);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const difficultyColors = getDifficultyColor(data.difficulty);
  const RoleIcon = getIcon(data.icon);

  // Calculate total tools
  const totalTools = data.tools.dataSources.length + 2; // +2 for orchestration and AI agent

  // Render difficulty dots
  const renderDifficultyDots = () => {
    const levels = { Easy: 1, Medium: 2, Advanced: 3 };
    const level = levels[data.difficulty] || 1;
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot <= level
                ? `bg-gradient-to-r ${difficultyColors.gradient}`
                : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card
      className={`border-2 ${difficultyColors.border} hover:shadow-lg transition-all ${
        isExpanded ? difficultyColors.bg : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            {/* Role Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md">
              <RoleIcon className="h-6 w-6 text-white" />
            </div>

            {/* Role Title and Info */}
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{data.scenario}</CardTitle>

              {/* Stat Cards (When Collapsed) */}
              {!isExpanded && data.timeSaved && (
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                    <Clock className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">{data.timeSaved}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                    <Link2 className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700">{totalTools} tools</span>
                  </div>
                  {data.automationLevel && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                      <Gauge className="h-3 w-3 text-purple-600" />
                      <span className="text-xs font-semibold text-purple-700">{data.automationLevel}% automated</span>
                    </div>
                  )}
                </div>
              )}

              {/* Tool Stack Mini-Preview (When Collapsed) */}
              {!isExpanded && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {data.tools.dataSources.slice(0, 3).map((tool, i) => {
                      const ToolIcon = getIcon(tool.icon);
                      return (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm"
                          title={tool.name}
                        >
                          <ToolIcon className="h-3 w-3 text-slate-600" />
                        </div>
                      );
                    })}
                    {data.tools.dataSources.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <span className="text-xs font-medium text-slate-600">
                          +{data.tools.dataSources.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                  <div className="text-xs text-slate-600 font-medium">
                    {data.tools.orchestration.name} → {data.tools.aiAgent.name}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {/* Enhanced Difficulty with Dots */}
                <div className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 bg-white">
                  {renderDifficultyDots}
                  <span className={`text-xs font-medium ${difficultyColors.text}`}>
                    {data.difficulty}
                  </span>
                </div>

                {/* Technical Level Badge */}
                <Badge variant="outline" className="border-slate-300 text-xs">
                  {data.technicalLevel}
                </Badge>

                {/* Setup Time Badge */}
                {data.estimatedSetupTime && (
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                    <Clock3 className="h-3 w-3 mr-1" />
                    {data.estimatedSetupTime}
                  </Badge>
                )}

                {/* Data Sources Count */}
                <Badge variant="secondary" className="text-xs">
                  {data.tools.dataSources.length} Data Sources
                </Badge>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0"
          >
            {isExpanded ? (
              <>
                Hide <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                View Setup <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* Description (always visible when collapsed) */}
        {!isExpanded && (
          <p className="text-sm text-slate-600 mt-3">{data.description}</p>
        )}
      </CardHeader>

      {/* Pipeline Visualization (expanded state) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="space-y-6 pt-0">
              {/* Stat Cards (Expanded View) */}
              {(data.timeSaved || data.automationLevel) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.timeSaved && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-600 font-medium">Time Saved</p>
                        <p className="text-lg font-bold text-emerald-700">{data.timeSaved}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Link2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 font-medium">Tools Connected</p>
                      <p className="text-lg font-bold text-blue-700">{totalTools}</p>
                    </div>
                  </div>
                  {data.automationLevel && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                        <Gauge className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-purple-600 font-medium">Automation Level</p>
                        <p className="text-lg font-bold text-purple-700">{data.automationLevel}%</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-slate-600">{data.description}</p>

              {/* Video Demonstration Section */}
              <div className={`relative rounded-xl border-2 ${difficultyColors.border} overflow-hidden`}>
                {data.videoUrl ? (
                  <div className="aspect-video bg-slate-900">
                    <video
                      src={data.videoUrl}
                      controls
                      className="w-full h-full"
                      poster="/placeholder-video.jpg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
                    <div className="text-center z-10">
                      <Video className={`h-12 w-12 mx-auto mb-3 ${difficultyColors.text} opacity-40`} />
                      <Badge className={`${difficultyColors.badgeBg} ${difficultyColors.text} border ${difficultyColors.border} animate-pulse`}>
                        <Sparkles className="h-3 w-3 mr-1" />
                        Video Demo Coming Soon
                      </Badge>
                      <p className="text-xs text-slate-500 mt-2">See this use case in action</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Before/After Comparison */}
              {data.traditionalWorkflow && data.aiWorkflow && (
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Traditional Workflow */}
                  <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50/30">
                    <h4 className="text-sm font-semibold text-red-900 mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Traditional Workflow
                    </h4>
                    <ul className="space-y-2">
                      {data.traditionalWorkflow.map((step, i) => (
                        <li key={i} className="text-xs text-red-800 flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-[10px] font-bold">
                            {i + 1}
                          </span>
                          <span className="flex-1">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI-Powered Workflow */}
                  <div className="border-2 border-emerald-200 rounded-lg p-4 bg-emerald-50/30">
                    <h4 className="text-sm font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      AI-Powered Workflow
                    </h4>
                    <ul className="space-y-2">
                      {data.aiWorkflow.map((step, i) => (
                        <li key={i} className="text-xs text-emerald-800 flex items-start gap-2">
                          <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-emerald-500" />
                          <span className="flex-1">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Prerequisites Checklist */}
              {data.prerequisites && data.prerequisites.length > 0 && (
                <div className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setShowPrerequisites(!showPrerequisites)}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Prerequisites ({data.prerequisites.length})
                    </span>
                    {showPrerequisites ? (
                      <ChevronUp className="h-4 w-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {showPrerequisites && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-200"
                      >
                        <div className="p-3 space-y-2">
                          {data.prerequisites.map((prereq, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <input
                                type="checkbox"
                                id={`prereq-${i}`}
                                className="mt-0.5 h-4 w-4 rounded border-slate-300"
                              />
                              <label htmlFor={`prereq-${i}`} className="text-sm text-slate-600 cursor-pointer">
                                {prereq}
                              </label>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Pipeline Stages */}
              <div className="space-y-6">
                {/* Stage 1: Data Sources */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Data Sources
                  </h4>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {data.tools.dataSources.map((tool, i) => {
                      const ToolIcon = getIcon(tool.icon);
                      const toolUrl = getToolUrl(tool.name);
                      const hasUrl = hasToolUrl(tool.name);

                      const toolBadgeContent = (
                        <div
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 ${getConnectionTypeColor(
                            tool.type
                          )} ${hasUrl ? 'hover:scale-105 hover:shadow-md cursor-pointer' : ''} transition-all group`}
                        >
                          <ToolIcon className="h-4 w-4" />
                          <span className="text-sm font-medium">{tool.name}</span>
                          {hasUrl && (
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                          <Badge
                            variant="secondary"
                            className="text-xs px-1.5 py-0"
                          >
                            {tool.type}
                          </Badge>
                        </div>
                      );

                      return (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 }
                          }}
                        >
                          {hasUrl ? (
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
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Arrow Down */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                </motion.div>

                {/* Stage 2: Orchestration Tool */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Workflow className="h-4 w-4" />
                    Orchestration Platform
                  </h4>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                  >
                    {(() => {
                      const OrchIcon = getIcon(data.tools.orchestration.icon);
                      const orchUrl = getToolUrl(data.tools.orchestration.name);
                      const hasUrl = hasToolUrl(data.tools.orchestration.name);

                      const orchContent = (
                        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-orange-300 bg-orange-50 ${hasUrl ? 'hover:shadow-md cursor-pointer' : ''} transition-all group`}>
                          <OrchIcon className="h-5 w-5 text-orange-600" />
                          <span className="font-semibold text-orange-900">
                            {data.tools.orchestration.name}
                          </span>
                          {hasUrl && (
                            <ExternalLink className="h-4 w-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      );

                      return hasUrl ? (
                        <a href={orchUrl} target="_blank" rel="noopener noreferrer">
                          {orchContent}
                        </a>
                      ) : (
                        orchContent
                      );
                    })()}
                  </motion.div>
                </div>

                {/* Arrow Down */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                </motion.div>

                {/* Stage 3: AI Agent */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Agent
                  </h4>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center"
                  >
                    {(() => {
                      const AIIcon = getIcon(data.tools.aiAgent.icon);
                      const aiUrl = getToolUrl(data.tools.aiAgent.name);
                      const hasUrl = hasToolUrl(data.tools.aiAgent.name);

                      const aiContent = (
                        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-emerald-300 bg-emerald-50 ${hasUrl ? 'hover:shadow-md cursor-pointer' : ''} transition-all group`}>
                          <AIIcon className="h-5 w-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-900">
                            {data.tools.aiAgent.name}
                          </span>
                          {hasUrl && (
                            <ExternalLink className="h-4 w-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      );

                      return hasUrl ? (
                        <a href={aiUrl} target="_blank" rel="noopener noreferrer">
                          {aiContent}
                        </a>
                      ) : (
                        aiContent
                      );
                    })()}
                  </motion.div>
                </div>
              </div>

              {/* Why These Tools? */}
              {data.whyTheseTools && (
                <div className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setShowWhyTools(!showWhyTools)}
                    className="w-full flex items-center justify-between p-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4" />
                      Why These Tools?
                    </span>
                    {showWhyTools ? (
                      <ChevronUp className="h-4 w-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {showWhyTools && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-200"
                      >
                        <div className="p-3">
                          <p className="text-sm text-slate-600">{data.whyTheseTools}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Connection Type Legend */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 mb-2 font-medium">
                  Connection Types:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                    Native - Built-in integration
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
                    API - Custom API connection
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                    MCP - Model Context Protocol
                  </Badge>
                </div>
              </div>

              {/* Copy Setup Guide Button */}
              <div className="flex justify-center pt-2">
                <Button
                  onClick={handleCopySetup}
                  variant="outline"
                  size="sm"
                  className="group"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
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

// Add shimmer animation to global CSS or tailwind.config.js
// @keyframes shimmer {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// }
// .animate-shimmer { animation: shimmer 2s infinite; }
