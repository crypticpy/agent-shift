import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Zap, Link2, MessageSquare, Briefcase, Lightbulb, CheckCircle2, XCircle, Sparkles, ArrowUp, Wrench, Circle, TrendingUp, Users, Package, DollarSign, FileSearch, Code, Building } from "lucide-react";
import { Streamdown } from "streamdown";
import SpeedComparison from "@/components/SpeedComparison";
import VoiceStatsCards from "@/components/VoiceStatsCards";
import WalkingToCarDemo from "@/components/WalkingToCarDemo";
import EnhancedTimeSavingsCalculator from "@/components/TimeSavingsCalculator";
import EnhancedRoleScenarioExplorer from "@/components/RoleScenarioExplorer";
import EnhancedWalkingDemoView from "@/components/EnhancedWalkingDemo";
import MindsetSelfAssessment from "@/components/MindsetSelfAssessment";
import BeforeAfterScenarioBuilder from "@/components/BeforeAfterScenarioBuilder";
import PhaseExplorer from "@/components/PhaseExplorer";
import TechniqueCards from "@/components/TechniqueCards";
import TrapScenarios from "@/components/TrapScenarios";
import WeeklyProgressTracker from "@/components/WeeklyProgressTracker";
import OrchestrationWorkshop from "@/components/OrchestrationWorkshop";
import { VoiceToExecutionDiagram } from "@/components/VoiceToExecutionDiagram";
import SetupChecklistTracker from "@/components/SetupChecklistTracker";
import DataSourceInventory from "@/components/DataSourceInventory";
import { DeviceSetupGuide } from "@/components/applications/DeviceSetupGuide";
import { AgentTypesComparison } from "@/components/applications/AgentTypesComparison";
import { CrossPlatformWorkflow } from "@/components/applications/CrossPlatformWorkflow";
import { DailyRoutineIntegration } from "@/components/applications/DailyRoutineIntegration";
import { AgentCollaborationSetup } from "@/components/applications/AgentCollaborationSetup";

interface LearnContent {
  title: string;
  description: string;
  icon: string;
  sections: any[];
}

// Troubleshooting Card Component - separate to avoid hooks violations
function TroubleshootingCard({ example, index }: { example: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map category to color scheme
  const getCategoryColor = (category: string) => {
    const lowerCat = category?.toLowerCase() || '';
    if (lowerCat.includes('permissions')) {
      return { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-700 border-red-300', icon: '🔐' };
    } else if (lowerCat.includes('performance')) {
      return { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700 border-amber-300', icon: '⚡' };
    } else if (lowerCat.includes('data') || lowerCat.includes('sync')) {
      return { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700 border-blue-300', icon: '🔄' };
    } else if (lowerCat.includes('integration')) {
      return { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700 border-purple-300', icon: '🔗' };
    }
    return { bg: 'bg-slate-50', border: 'border-slate-200', badge: 'bg-slate-100 text-slate-700 border-slate-300', icon: '⚙️' };
  };

  const colors = getCategoryColor(example.category);

  return (
    <Card key={index} className={`border-2 ${colors.border} transition-all ${isExpanded ? 'shadow-lg' : ''}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <CardHeader className="cursor-pointer hover:bg-slate-50/50 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <span className="text-2xl flex-shrink-0">{colors.icon}</span>
              <div className="flex-1">
                <CardTitle className="text-base text-slate-900 mb-1">
                  {example.problem}
                </CardTitle>
                {example.category && (
                  <Badge variant="outline" className={`${colors.badge} text-xs`}>
                    {example.category}
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex-shrink-0 text-slate-400">
              {isExpanded ? (
                <ArrowUp className="h-5 w-5" />
              ) : (
                <ArrowUp className="h-5 w-5 rotate-180" />
              )}
            </div>
          </div>
        </CardHeader>
      </button>

      {isExpanded && (
        <CardContent className="space-y-4 pt-0">
          {/* Solutions */}
          {example.solutions && (
            <div className={`${colors.bg} rounded-lg p-4 border ${colors.border}`}>
              <p className="text-sm font-semibold text-slate-900 mb-3">🔍 Check these solutions:</p>
              <ul className="space-y-2">
                {example.solutions.map((solution: string, j: number) => (
                  <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Insight */}
          {example.insight && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
                <span className="text-green-600">💡</span> Key Insight:
              </p>
              <p className="text-sm text-green-800 leading-relaxed italic">{example.insight}</p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

// Security Checklist Item Component - separate to avoid hooks violations
function SecurityChecklistItem({ tip, index }: { tip: any; index: number }) {
  const [checked, setChecked] = useState(() => {
    const saved = document.cookie
      .split('; ')
      .find(row => row.startsWith(`securityCheck_${tip.id}=`));
    return saved ? saved.split('=')[1] === 'true' : false;
  });

  const handleCheck = () => {
    const newValue = !checked;
    setChecked(newValue);
    const expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `securityCheck_${tip.id}=${newValue}; expires=${expires}; path=/`;
  };

  return (
    <button
      onClick={handleCheck}
      className="w-full text-left"
    >
      <Card className={`border-2 transition-all hover:shadow-lg ${
        checked ? 'border-green-300 bg-green-50/30' : 'border-slate-200 hover:border-orange-300'
      }`}>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              {checked ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-slate-300" />
              )}
            </div>
            <div className="flex-1">
              <CardTitle className="text-base flex items-center gap-2 mb-2">
                {tip.tip}
                {tip.priority && (
                  <Badge variant={tip.priority === 'Critical' ? 'destructive' : 'outline'} className="text-xs">
                    {tip.priority}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                <Streamdown>{tip.description}</Streamdown>
                {tip.reasoning && (
                  <div className="mt-2 text-xs text-slate-600">
                    <strong>Why:</strong> {tip.reasoning}
                  </div>
                )}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </button>
  );
}

export default function Learn() {
  const [activeTab, setActiveTab] = useState("mindset");
  const [content, setContent] = useState<Record<string, LearnContent>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Load all JSON content files
    const loadContent = async () => {
      try {
        const tabs = [
          "mindset",
          "setup",
          "applications",
          "voice-basics",
          "advanced-voice",
          "chaining",
          "ai-to-ai"
        ];
        
        const contentPromises = tabs.map(async (tab) => {
          const response = await fetch(`/learn-${tab}.json`);
          const data = await response.json();
          return [tab, data];
        });

        const results = await Promise.all(contentPromises);
        const contentMap = Object.fromEntries(results);
        setContent(contentMap);
        setLoading(false);
      } catch (error) {
        console.error("Error loading learn content:", error);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Mic,
      Zap,
      Link2,
      MessageSquare,
      Briefcase,
      Lightbulb,
      Wrench
    };
    return icons[iconName] || Mic;
  };

  const renderSection = (section: any, index: number) => {
    return (
      <div key={index} className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-foreground">
            {section.heading}
          </h3>
        </div>

        {/* Mindset Self Assessment */}
        {section.mindsetSelfAssessment && (
          <div className="my-8">
            <MindsetSelfAssessment />
          </div>
        )}

        {/* Before/After Scenario Builder */}
        {section.beforeAfterScenario && (
          <div className="my-8">
            <BeforeAfterScenarioBuilder />
          </div>
        )}

        {/* Phase Explorer */}
        {section.phaseExplorer && (
          <div className="my-8">
            <PhaseExplorer />
          </div>
        )}

        {/* Technique Cards */}
        {section.techniqueCards && (
          <div className="my-8">
            <TechniqueCards />
          </div>
        )}

        {/* Trap Scenarios */}
        {section.trapScenarios && (
          <div className="my-8">
            <TrapScenarios />
          </div>
        )}

        {/* Orchestration Workshop */}
        {section.orchestrationWorkshop && (
          <div className="my-8">
            <OrchestrationWorkshop />
          </div>
        )}

        {/* Weekly Progress Tracker */}
        {section.weeklyProgressTracker && (
          <div className="my-8">
            <WeeklyProgressTracker />
          </div>
        )}

        {/* Data Source Inventory */}
        {section.dataSourceInventory && (
          <div className="my-8">
            <DataSourceInventory
              principle={section.principle}
              dataSources={section.dataSources}
            />
          </div>
        )}

        {/* Setup Checklist Tracker */}
        {section.setupChecklistTracker && (
          <div className="my-8">
            <SetupChecklistTracker checklist={section.checklist} />
          </div>
        )}

        {/* Device Setup Guide */}
        {section.deviceSetupGuide && (
          <div className="my-8">
            <DeviceSetupGuide />
          </div>
        )}

        {/* Agent Types Comparison */}
        {section.agentTypesComparison && (
          <div className="my-8">
            <AgentTypesComparison />
          </div>
        )}

        {/* Cross Platform Workflow */}
        {section.crossPlatformWorkflow && (
          <div className="my-8">
            <CrossPlatformWorkflow />
          </div>
        )}

        {/* Daily Routine Integration */}
        {section.dailyRoutineIntegration && (
          <div className="my-8">
            <DailyRoutineIntegration />
          </div>
        )}

        {/* Agent Collaboration Setup */}
        {section.agentCollaborationSetup && (
          <div className="my-8">
            <AgentCollaborationSetup />
          </div>
        )}

        {/* Time Savings Calculator */}
        {section.timeSavingsCalculator && (
          <div className="my-8">
            <EnhancedTimeSavingsCalculator />
          </div>
        )}

        {/* Role Scenarios Explorer */}
        {section.roleScenarios && (
          <div className="my-8">
            <EnhancedRoleScenarioExplorer />
          </div>
        )}

        {/* Enhanced Walking Demo */}
        {section.enhancedWalkingDemo && (
          <div className="my-8">
            <EnhancedWalkingDemoView
              tasks={section.enhancedWalkingDemo.tasks}
              totalDuration={section.enhancedWalkingDemo.totalDuration}
              taskStartDelay={section.enhancedWalkingDemo.taskStartDelay}
            />
          </div>
        )}

        {/* Speed Comparison Interactive Visual */}
        {section.heading === "Why Voice Changes Everything" && (
          <div className="my-8" id="why-voice-changes-everything">
            <SpeedComparison />
          </div>
        )}

        {/* Intro text (for sections without stats or walkingDemo) */}
        {section.intro && !section.stats && !section.walkingDemo && (
          <div className="text-lg text-muted-foreground leading-relaxed">
            <Streamdown>{section.intro}</Streamdown>
          </div>
        )}

        {/* Voice Stats Cards */}
        {section.stats && (
          <div>
            {section.intro && (
              <div className="text-lg text-muted-foreground leading-relaxed mb-6">
                <Streamdown>{section.intro}</Streamdown>
              </div>
            )}
            <VoiceStatsCards stats={section.stats} />

            {/* Additional Research */}
            {section.additionalResearch && (
              <div className="mt-8 space-y-3">
                {section.additionalResearch.map((paragraph: string, i: number) => (
                  <div key={i} className="text-sm text-muted-foreground">
                    <Streamdown>{paragraph}</Streamdown>
                  </div>
                ))}
              </div>
            )}

            {/* Navigation Link to Speed Comparison */}
            {section.navigationLink && (
              <div className="mt-8">
                <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Sparkles className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-base text-foreground">
                          {section.navigationLink.text}
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          const element = document.getElementById(section.navigationLink.scrollTo);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white flex-shrink-0"
                      >
                        {section.navigationLink.buttonText}
                        <ArrowUp className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {/* Walking to Car Demo */}
        {section.walkingDemo && (
          <div>
            {section.intro && (
              <div className="text-lg text-muted-foreground leading-relaxed mb-6">
                <Streamdown>{section.intro}</Streamdown>
              </div>
            )}
            <WalkingToCarDemo
              voiceInput={section.walkingDemo.voiceInput}
              tasks={section.walkingDemo.tasks}
              totalDuration={section.walkingDemo.totalDuration}
              typewriterDuration={section.walkingDemo.typewriterDuration}
              taskStartDelay={section.walkingDemo.taskStartDelay}
            />

            {/* Voice to Execution Diagram - Only shown in voice-basics tab */}
            {activeTab === "voice-basics" && (
              <div className="mt-12">
                <VoiceToExecutionDiagram />
              </div>
            )}
          </div>
        )}

        {/* Regular content paragraphs */}
        {section.content && (
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6 space-y-4">
              {section.content.map((paragraph: string, i: number) => (
                <div key={i} className="text-base text-muted-foreground leading-relaxed">
                  <Streamdown>{paragraph}</Streamdown>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Examples (Do/Don't) - Only render if trapScenarios is not present */}
        {section.examples && section.examples[0]?.type && !section.trapScenarios && (
          <div className="grid md:grid-cols-2 gap-4">
            {section.examples.map((ex: any, i: number) => (
              <Card key={i} className={`border-2 transition-all hover:shadow-lg h-full ${
                ex.type === 'do' 
                   ? 'border-green-100 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700 bg-green-50/30 dark:bg-green-950/30' 
                  : 'border-red-100 dark:border-red-800 hover:border-red-200 dark:hover:border-red-700 bg-red-50/30 dark:bg-red-950/30'
              }`}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {ex.type === 'do' ? (
                      <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                    ) : (
                      <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                    )}
                    <CardTitle className="text-base">{ex.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &quot;{ex.example}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Work/Home Examples (role-based) - Only render if trapScenarios is not present */}
        {section.examples && section.examples[0]?.role && !section.trapScenarios && (
          <div className="space-y-4">
            {section.examples.map((ex: any, i: number) => (
              <Card key={i} className="card-lift border-2 hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{ex.role || ex.scenario}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ex.before && (
                    <div>
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Before:</p>
                      <div className="text-sm text-muted-foreground">
                        <Streamdown>{ex.before}</Streamdown>
                      </div>
                    </div>
                  )}
                  {ex.after && (
                    <div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">After:</p>
                      <div className="text-sm text-muted-foreground">
                        <Streamdown>{ex.after}</Streamdown>
                      </div>
                    </div>
                  )}
                  {ex.description && (
                    <div className="text-sm text-muted-foreground">
                      <Streamdown>{ex.description}</Streamdown>
                    </div>
                  )}
                  {ex.impact && (
                    <div className="pt-2 border-t">
                      <p className="text-sm font-semibold text-primary mb-1">Impact:</p>
                      <div className="text-sm text-muted-foreground">
                        <Streamdown>{ex.impact}</Streamdown>
                      </div>
                    </div>
                  )}
                  {ex.timeSaved && (
                    <div className="pt-2">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100">
                        ⏱️ {ex.timeSaved}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Decision Tree Examples (with topChoices, reasoning, setupTime, difficultyLevel) */}
        {section.examples && section.examples[0]?.topChoices && !section.trapScenarios && (
          <div className="space-y-4">
            {section.examples.map((ex: any, i: number) => {
              // Map difficulty to color scheme
              const getDifficultyColor = (level: string) => {
                if (level?.toLowerCase().includes('easy') || level?.toLowerCase().includes('beginner')) {
                  return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-700 border-green-300' };
                } else if (level?.toLowerCase().includes('medium')) {
                  return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700 border-amber-300' };
                } else if (level?.toLowerCase().includes('advanced')) {
                  return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700 border-purple-300' };
                }
                return { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-700 border-slate-300' };
              };

              const colors = getDifficultyColor(ex.difficultyLevel);

              return (
                <Card key={i} className={`border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-all`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <CardTitle className="text-lg flex-1">
                        <span className="text-slate-700">🎯 {ex.scenario}</span>
                      </CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        {ex.difficultyLevel && (
                          <Badge variant="outline" className={colors.badge}>
                            {ex.difficultyLevel}
                          </Badge>
                        )}
                        {ex.setupTime && (
                          <Badge variant="outline" className="text-orange-700 border-orange-300 bg-orange-50">
                            ⏱ {ex.setupTime}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Top Choices */}
                    {ex.topChoices && (
                      <div className="bg-white rounded-lg p-4 border border-slate-200">
                        <p className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="text-orange-500">✓</span> Recommended Tools:
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">{ex.topChoices}</p>
                      </div>
                    )}

                    {/* Reasoning */}
                    {ex.reasoning && (
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-sm font-semibold text-blue-900 mb-2 flex items-center gap-2">
                          <span className="text-blue-600">💡</span> Why This Works:
                        </p>
                        <p className="text-sm text-blue-800 leading-relaxed">{ex.reasoning}</p>
                      </div>
                    )}

                    {/* Limitation (for beginner scenarios) */}
                    {ex.limitation && (
                      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <p className="text-sm font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                          <span className="text-yellow-600">⚠️</span> Important Note:
                        </p>
                        <p className="text-sm text-yellow-800 leading-relaxed">{ex.limitation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Tools grid */}
        {section.tools && (
          <div className="grid md:grid-cols-2 gap-6">
            {section.tools.map((tool: any, i: number) => (
              <Card key={i} className="border-2 hover:border-primary/30 dark:hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-chart-1">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tool.features && (
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature: string, j: number) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {tool.pricing && (
                    <div className="pt-2 border-t">
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Pricing:</p>
                      <p className="text-sm text-foreground">{tool.pricing}</p>
                    </div>
                  )}
                  {tool.platforms && (
                    <div className="pt-2 border-t">
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Platforms:</p>
                      <div className="flex flex-wrap gap-1">
                        {tool.platforms.map((platform: string, j: number) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {(tool.url || tool.setup) && (
                    <div className="flex gap-2 pt-2">
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
                        >
                          Visit Website
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {tool.setup && tool.setup !== tool.url && (
                        <a
                          href={tool.setup}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold"
                        >
                          Setup Guide
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Steps (simple array) */}
        {section.steps && Array.isArray(section.steps) && typeof section.steps[0] === 'string' && (
          <Card className="border-2 border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-chart-1">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                {section.stepsTitle || "Steps"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {section.steps.map((step: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-chart-1 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        )}

        {/* Steps (object array with step/description) */}
        {section.steps && Array.isArray(section.steps) && section.steps[0]?.step && !section.stepWizard && (
          <div className="space-y-4">
            {section.steps.map((step: any, i: number) => (
              <Card key={i} className="border-2 hover:border-primary/30 dark:hover:border-primary/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-chart-1 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    {step.step}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                </CardHeader>
                {step.example && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">&quot;{step.example}&quot;</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Steps Wizard (enhanced with expandable sections) */}
        {section.stepWizard && section.steps && (
          <div className="space-y-4">
            {section.steps.map((step: any, i: number) => (
              <Card key={i} className="border-2 border-orange-200 hover:border-orange-300 transition-all shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{step.step}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                      </div>
                    </div>
                    {step.timeInvestment && (
                      <Badge variant="outline" className="flex-shrink-0 text-orange-700 border-orange-300">
                        ⏱ {step.timeInvestment}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {step.tasks && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Checklist:</p>
                      <ul className="space-y-1">
                        {step.tasks.map((task: string, j: number) => (
                          <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.goodUseCases && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm font-semibold text-green-900 mb-2">💡 Good first use cases:</p>
                      <ul className="space-y-1">
                        {step.goodUseCases.map((useCase: string, j: number) => (
                          <li key={j} className="text-sm text-green-800 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.researchChecklist && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm font-semibold text-blue-900 mb-2">🔍 Research checklist:</p>
                      <ul className="space-y-1">
                        {step.researchChecklist.map((item: string, j: number) => (
                          <li key={j} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-600 mt-0.5">□</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.commonCombinations && (
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm font-semibold text-purple-900 mb-2">🔗 Common tool combinations:</p>
                      <div className="space-y-2">
                        {step.commonCombinations.map((combo: any, j: number) => (
                          <div key={j} className="text-sm">
                            <span className="text-purple-900 font-medium">{combo.sources}</span>
                            <span className="text-purple-700"> → {combo.tools}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.setupProcess && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Setup process:</p>
                      <ol className="space-y-1">
                        {step.setupProcess.map((process: string, j: number) => (
                          <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-orange-600 font-semibold">{j + 1}.</span>
                            <span>{process}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {step.securityNote && (
                    <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-500">
                      <p className="text-sm text-yellow-900">
                        <strong>🔒 Security note:</strong> {step.securityNote}
                      </p>
                    </div>
                  )}
                  {step.testExamples && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm font-semibold text-green-900 mb-2">🧪 Test examples:</p>
                      <ul className="space-y-1">
                        {step.testExamples.map((example: string, j: number) => (
                          <li key={j} className="text-sm text-green-800 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">▸</span>
                            <span className="font-mono">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(step.ifWorks || step.ifFails) && (
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.ifWorks && (
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-sm font-semibold text-green-900 mb-1">✅ If it works:</p>
                          <p className="text-sm text-green-800">{step.ifWorks}</p>
                        </div>
                      )}
                      {step.ifFails && (
                        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                          <p className="text-sm font-semibold text-red-900 mb-1">❌ If it fails:</p>
                          <p className="text-sm text-red-800">{step.ifFails}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Callout (with title, steps, footer) */}
        {section.callout && (
          <Card className="border-2 border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                {section.callout.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.callout.steps && (
                <ol className="space-y-3">
                  {section.callout.steps.map((step: any, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-chart-1 text-white flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-base leading-relaxed">{typeof step === 'string' ? step : step.step || JSON.stringify(step)}</span>
                    </li>
                  ))}
                </ol>
              )}
              {section.callout.days && (
                <div className="space-y-3">
                  {section.callout.days.map((day: any, i: number) => (
                    <Card key={i} className="bg-white dark:bg-slate-900">
                      <CardHeader>
                        <CardTitle className="text-base">{day.day}: {day.task}</CardTitle>
                        <CardDescription>{day.action}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{day.time}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              {section.callout.footer && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground italic">{section.callout.footer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Example (with scenario, steps, result) */}
        {section.example && (
          <Card className="border-2 border-accent/30 dark:border-accent/40">
            <CardHeader>
              <CardTitle className="text-lg">Example: {section.example.scenario}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.example.steps && (
                <div className="space-y-3">
                  {section.example.steps.map((step: any, i: number) => (
                    <div key={i} className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-sm text-primary dark:text-primary">{step.agent}</p>
                      <p className="text-sm text-muted-foreground mt-1"><strong>Task:</strong> {step.task}</p>
                      <p className="text-sm text-muted-foreground mt-1"><strong>Output:</strong> {step.output}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.example.humanPrompt && (
                <div className="space-y-3">
                  <div className="bg-red-50/60 dark:bg-red-950/60 p-5 rounded-lg border border-red-100 dark:border-red-900">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Human Approach:</p>
                    <p className="text-sm text-muted-foreground">{section.example.humanPrompt.what}</p>
                    <p className="text-sm text-muted-foreground mt-2"><strong>Result:</strong> {section.example.humanPrompt.result}</p>
                  </div>
                  <div className="bg-green-50/60 dark:bg-green-950/60 p-5 rounded-lg border border-green-100 dark:border-green-900">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">AI-to-AI Approach:</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Step 1:</strong> {section.example.aiPrompt.step1}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Step 2:</strong> {section.example.aiPrompt.step2}</p>
                    <p className="text-sm text-muted-foreground"><strong>Step 3:</strong> {section.example.aiPrompt.step3}</p>
                  </div>
                </div>
              )}
              {section.example.result && (
                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-primary dark:text-primary mb-1">Result:</p>
                  <div className="text-sm text-muted-foreground">
                    <Streamdown>{section.example.result}</Streamdown>
                  </div>
                </div>
              )}
              {section.example.timeSaved && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  ⏱️ {section.example.timeSaved}
                </Badge>
              )}
            </CardContent>
          </Card>
        )}

        {/* Benefits */}
        {section.benefits && (
          <div className="grid md:grid-cols-2 gap-6">
            {section.benefits.map((benefit: any, i: number) => (
              <Card key={i} className="border-2 border-primary/20 dark:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-chart-1 w-fit mb-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {/* Patterns - Only render if phaseExplorer is not present */}
        {section.patterns && !section.phaseExplorer && (
          <div className="grid md:grid-cols-2 gap-4">
            {section.patterns.map((pattern: any, i: number) => (
              <Card key={i} className="border-2 hover:border-primary/30 dark:hover:border-primary/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-base">{pattern.name}</CardTitle>
                  <CardDescription>
                    <span className="text-xs"><strong>Use:</strong> {pattern.use}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground"><strong>Agents:</strong> {pattern.agents}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Use Cases (role-based with icons and recommended setups) */}
        {section.useCases && section.useCases[0]?.recommendedSetup && (
          <div className="grid md:grid-cols-2 gap-4">
            {section.useCases.map((useCase: any, i: number) => {
              // Map icon names to lucide-react components
              const getIcon = (iconName: string) => {
                const iconMap: Record<string, any> = {
                  TrendingUp: TrendingUp,
                  Users: Users,
                  Package: Package,
                  DollarSign: DollarSign,
                  FileSearch: FileSearch,
                  Briefcase: Briefcase,
                  Code: Code,
                  Building: Building
                };
                return iconMap[iconName] || Briefcase;
              };
              const IconComponent = getIcon(useCase.icon);

              return (
                <Card key={i} className="border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{useCase.scenario}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed text-slate-600">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm font-semibold text-orange-900 mb-2 flex items-center gap-2">
                        <span className="text-orange-600">🔧</span> Recommended Setup:
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">{useCase.recommendedSetup}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Use Cases (simple examples without recommendedSetup) */}
        {section.useCases && !section.useCases[0]?.recommendedSetup && (
          <div className="space-y-4">
            {section.useCases.map((useCase: any, i: number) => (
              <Card key={i} className="border-2 hover:border-primary/30 dark:hover:border-primary/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.scenario}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {useCase.example && (
                    <p className="text-sm text-muted-foreground italic">&quot;{useCase.example}&quot;</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Troubleshooting Examples (expandable accordion with problem/solutions/insight) */}
        {section.examples && section.examples[0]?.problem && section.examples[0]?.solutions && (
          <div className="space-y-3">
            {section.examples.map((ex: any, i: number) => (
              <TroubleshootingCard key={i} example={ex} index={i} />
            ))}
          </div>
        )}

        {/* Template */}
        {section.template && (
          <Card className="border-2 border-accent/30 dark:border-accent/40 bg-accent/10 dark:bg-accent/10">
            <CardHeader>
              <CardTitle className="text-lg">{section.template.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                <p className="text-sm font-mono text-muted-foreground">{section.template.prompt}</p>
              </div>
              {section.template.example && (
                <div>
                  <p className="text-sm font-semibold mb-2">Example:</p>
                  <p className="text-sm text-muted-foreground italic">&quot;{section.template.example}&quot;</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Workflows - Only render if weeklyProgressTracker is not present */}
        {section.workflows && !section.weeklyProgressTracker && (
          <div className="space-y-6">
            {section.workflows.map((workflow: any, i: number) => (
              <Card key={i} className="border-2 border-accent/30 dark:border-accent/40 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{workflow.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {workflow.tools}
                        </Badge>
                        {workflow.time && (
                          <Badge variant="outline">⏱️ {workflow.time}</Badge>
                        )}
                        {workflow.timeSaved && (
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100">
                            💰 Saves: {workflow.timeSaved}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base leading-relaxed">{workflow.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {workflow.setup && (
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-primary">Setup Steps:</p>
                      {workflow.setup.map((step: any, j: number) => (
                        <div key={j} className="border-l-4 border-primary pl-4 py-2">
                          <p className="font-semibold text-sm mb-1">{j + 1}. {step.step}</p>
                          <div className="text-sm text-muted-foreground">
                            <Streamdown>{step.details}</Streamdown>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {workflow.result && (
                    <div className="pt-3 border-t bg-green-50/60 dark:bg-green-950/60 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Result:</p>
                      <div className="text-sm text-muted-foreground">
                        <Streamdown>{workflow.result}</Streamdown>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Security Checklist - Interactive */}
        {section.securityChecklist && section.tips && (
          <div className="space-y-3">
            {section.tips.map((tip: any, i: number) => (
              <SecurityChecklistItem key={i} tip={tip} index={i} />
            ))}
          </div>
        )}

        {/* Tips - Only render if techniqueCards and securityChecklist are not present */}
        {section.tips && !section.techniqueCards && !section.securityChecklist && (
          <div className="space-y-3">
            {section.tips.map((tip: any, i: number) => (
              <Card key={i} className="border-2 hover:border-primary/30 dark:hover:border-primary/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    {tip.tip}
                    {tip.complexity && (
                      <Badge variant="outline" className="text-xs ml-2">
                        {tip.complexity}
                      </Badge>
                    )}
                    {tip.setupTime && (
                      <Badge variant="outline" className="text-xs">
                        {tip.setupTime}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-2">
                    <Streamdown>{tip.description || tip.why}</Streamdown>
                    {tip.whatItIs && (
                      <div className="mt-2 pt-2 border-t border-slate-200">
                        <p className="text-sm text-slate-700"><strong>What it is:</strong> {tip.whatItIs}</p>
                      </div>
                    )}
                    {tip.example && (
                      <div className="mt-2 pt-2 border-t border-slate-200">
                        <p className="text-sm text-slate-700"><strong>Example:</strong> {tip.example}</p>
                      </div>
                    )}
                    {tip.lookFor && (
                      <div className="mt-2 pt-2 border-t border-slate-200">
                        <p className="text-sm text-slate-700"><strong>Look for:</strong> {tip.lookFor}</p>
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {/* Transformation (before/after) */}
        {section.transformation && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-100 dark:border-red-800 bg-red-50/20 dark:bg-red-950/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 dark:text-red-400">
                  {section.transformation.before.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.transformation.before.characteristics.map((char: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-800 bg-green-50/20 dark:bg-green-950/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 dark:text-green-400">
                  {section.transformation.after.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.transformation.after.characteristics.map((char: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Story */}
        {section.story && (
          <Card className="border-2 border-primary/20 dark:border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Real-World Example</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">The Setup:</p>
                <p className="text-sm text-muted-foreground">{section.story.setup}</p>
              </div>
              <div className="bg-red-50/60 dark:bg-red-950/60 p-5 rounded-lg border border-red-100 dark:border-red-900">
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Traditional Way:</p>
                <p className="text-sm text-muted-foreground">{section.story.traditional}</p>
              </div>
              <div className="bg-green-50/60 dark:bg-green-950/60 p-5 rounded-lg border border-green-100 dark:border-green-900">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">With AI Agents:</p>
                <p className="text-sm text-muted-foreground">{section.story.withAgents}</p>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-semibold text-primary dark:text-primary mb-1">The Impact:</p>
                <p className="text-sm text-muted-foreground">{section.story.impact}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const tabConfig = [
    { value: "mindset", label: "Mindset", icon: Lightbulb },
    { value: "setup", label: "Setup", icon: Wrench },
    { value: "applications", label: "Applications", icon: Briefcase },
    { value: "voice-basics", label: "Voice Basics", icon: Mic },
    { value: "advanced-voice", label: "Advanced Voice", icon: Zap },
    { value: "chaining", label: "Chaining", icon: Link2 },
    { value: "ai-to-ai", label: "AI-to-AI", icon: MessageSquare }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-mesh">
        <div className="text-center glass rounded-2xl p-8 backdrop-blur-md">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary mx-auto mb-4"></div>
          <p className="text-foreground font-medium">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Warm Intelligence Design */}
      <div className="relative animated-gradient text-white py-28 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="glass backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 text-base font-medium">
              🎓 Stop Doing. Start Guiding.
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              Guide AI Agents
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
              Master voice control, agent chaining, and the art of orchestration. Everything you need to transform from doer to guide.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-10">
          <TabsList className="grid w-full grid-cols-7 h-auto p-2 bg-card/95 backdrop-blur-sm border-2 rounded-xl shadow-lg">
            {tabConfig.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:font-bold transition-all duration-300 rounded-lg"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(content).map(([key, data]) => {
            const Icon = getIcon(data.icon);
            return (
              <TabsContent key={key} value={key} className="space-y-10">
                {/* Tab Header */}
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 border-2 border-primary/20">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">{data.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">{data.description}</p>
                </div>

                {/* Tab Content Sections */}
                <div className="max-w-5xl mx-auto space-y-16">
                  {data.sections.map((section, index) => renderSection(section, index))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
