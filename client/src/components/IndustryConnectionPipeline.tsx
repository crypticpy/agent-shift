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
  Zap
} from "lucide-react";

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
}

interface IndustryConnectionPipelineProps {
  data: RolePipelineData;
}

export function IndustryConnectionPipeline({ data }: IndustryConnectionPipelineProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
          badgeBg: "bg-green-100"
        };
      case "Medium":
        return {
          border: "border-amber-300",
          bg: "bg-amber-50",
          text: "text-amber-700",
          badgeBg: "bg-amber-100"
        };
      case "Advanced":
        return {
          border: "border-purple-300",
          bg: "bg-purple-50",
          text: "text-purple-700",
          badgeBg: "bg-purple-100"
        };
      default:
        return {
          border: "border-slate-300",
          bg: "bg-slate-50",
          text: "text-slate-700",
          badgeBg: "bg-slate-100"
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

  const difficultyColors = getDifficultyColor(data.difficulty);
  const RoleIcon = getIcon(data.icon);

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

            {/* Role Title and Badges */}
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{data.scenario}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {/* Difficulty Badge */}
                <Badge
                  className={`${difficultyColors.badgeBg} ${difficultyColors.text} border ${difficultyColors.border}`}
                >
                  {data.difficulty}
                </Badge>

                {/* Technical Level Badge */}
                <Badge variant="outline" className="border-slate-300">
                  {data.technicalLevel}
                </Badge>

                {/* Tool Count */}
                <Badge variant="secondary">
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

        {/* Description (always visible) */}
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
              {/* Description */}
              <p className="text-sm text-slate-600">{data.description}</p>

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
                      return (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className="group relative"
                        >
                          <div
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 ${getConnectionTypeColor(
                              tool.type
                            )} hover:scale-105 transition-transform cursor-pointer`}
                          >
                            <ToolIcon className="h-4 w-4" />
                            <span className="text-sm font-medium">{tool.name}</span>
                            <Badge
                              variant="secondary"
                              className="text-xs px-1.5 py-0"
                            >
                              {tool.type}
                            </Badge>
                          </div>
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
                      return (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-orange-300 bg-orange-50 hover:shadow-md transition-all">
                          <OrchIcon className="h-5 w-5 text-orange-600" />
                          <span className="font-semibold text-orange-900">
                            {data.tools.orchestration.name}
                          </span>
                        </div>
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
                      return (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-emerald-300 bg-emerald-50 hover:shadow-md transition-all">
                          <AIIcon className="h-5 w-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-900">
                            {data.tools.aiAgent.name}
                          </span>
                        </div>
                      );
                    })()}
                  </motion.div>
                </div>
              </div>

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
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
