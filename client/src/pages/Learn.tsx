import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Zap, Link2, MessageSquare, Briefcase, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Streamdown } from "streamdown";

interface LearnContent {
  title: string;
  description: string;
  icon: string;
  sections: any[];
}

export default function Learn() {
  const [activeTab, setActiveTab] = useState("voice-basics");
  const [content, setContent] = useState<Record<string, LearnContent>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all JSON content files
    const loadContent = async () => {
      try {
        const tabs = [
          "voice-basics",
          "advanced-voice",
          "chaining",
          "ai-to-ai",
          "applications"
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
      Briefcase
    };
    return icons[iconName] || Mic;
  };

  const renderSection = (section: any, index: number) => {
    return (
      <div key={index} className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {section.heading}
          </h3>
        </div>
        
        {/* Regular content paragraphs */}
        {section.content && (
          <div className="space-y-4">
            {section.content.map((paragraph: string, i: number) => (
              <div key={i}>
                <Streamdown>{paragraph}</Streamdown>
              </div>
            ))}
          </div>
        )}

        {/* Examples (Do/Don't) */}
        {section.examples && section.examples[0]?.type && (
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

        {/* Work/Home Examples (role-based) */}
        {section.examples && section.examples[0]?.role && (
          <div className="space-y-4">
            {section.examples.map((ex: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{ex.role || ex.scenario}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ex.before && (
                    <div>
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Before:</p>
                      <p className="text-sm text-muted-foreground">{ex.before}</p>
                    </div>
                  )}
                  {ex.after && (
                    <div>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">After:</p>
                      <p className="text-sm text-muted-foreground">{ex.after}</p>
                    </div>
                  )}
                  {ex.description && (
                    <p className="text-sm text-muted-foreground">{ex.description}</p>
                  )}
                  {ex.impact && (
                    <div className="pt-2 border-t">
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Impact:</p>
                      <p className="text-sm text-muted-foreground">{ex.impact}</p>
                    </div>
                  )}
                  {ex.timeSaved && (
                    <div className="pt-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        ⏱️ {ex.timeSaved}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Intro text */}
        {section.intro && (
          <p className="text-lg text-muted-foreground leading-relaxed">{section.intro}</p>
        )}

        {/* Tools grid */}
        {section.tools && (
          <div className="grid md:grid-cols-2 gap-6">
            {section.tools.map((tool: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{tool.description}</CardDescription>
                </CardHeader>
                {tool.features && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature: string, j: number) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Steps (simple array) */}
        {section.steps && Array.isArray(section.steps) && typeof section.steps[0] === 'string' && (
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                {section.stepsTitle || "Steps"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {section.steps.map((step: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold">
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
        {section.steps && Array.isArray(section.steps) && section.steps[0]?.step && (
          <div className="space-y-4">
            {section.steps.map((step: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold">
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

        {/* Callout (with title, steps, footer) */}
        {section.callout && (
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                {section.callout.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.callout.steps && (
                <ol className="space-y-3">
                  {section.callout.steps.map((step: any, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold">
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
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg">Example: {section.example.scenario}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.example.steps && (
                <div className="space-y-3">
                  {section.example.steps.map((step: any, i: number) => (
                    <div key={i} className="border-l-4 border-purple-500 pl-4">
                      <p className="font-semibold text-sm text-purple-600 dark:text-purple-400">{step.agent}</p>
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
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Result:</p>
                  <p className="text-sm text-muted-foreground">{section.example.result}</p>
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
              <Card key={i} className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 w-fit mb-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {/* Patterns */}
        {section.patterns && (
          <div className="grid md:grid-cols-2 gap-4">
            {section.patterns.map((pattern: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
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

        {/* Use Cases */}
        {section.useCases && (
          <div className="space-y-4">
            {section.useCases.map((useCase: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.scenario}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">&quot;{useCase.example}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Template */}
        {section.template && (
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
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

        {/* Tips */}
        {section.tips && (
          <div className="space-y-3">
            {section.tips.map((tip: any, i: number) => (
              <Card key={i} className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    {tip.tip}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{tip.why}</CardDescription>
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
          <Card className="border-2 border-purple-200 dark:border-purple-800">
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
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">The Impact:</p>
                <p className="text-sm text-muted-foreground">{section.story.impact}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const tabConfig = [
    { value: "voice-basics", label: "Voice Basics", icon: Mic },
    { value: "advanced-voice", label: "Advanced Voice", icon: Zap },
    { value: "chaining", label: "Chaining", icon: Link2 },
    { value: "ai-to-ai", label: "AI-to-AI", icon: MessageSquare },
    { value: "applications", label: "Applications", icon: Briefcase }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section with Enhanced Design */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white py-24 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              🎓 Stop Doing. Start Guiding.
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              Learn the Fundamentals
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Master voice control, agent chaining, and the art of orchestration. Everything you need to transform from doer to guide.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-muted/70 border border-border">
            {tabConfig.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all"
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
              <TabsContent key={key} value={key} className="space-y-8">
                {/* Tab Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>
                  <p className="text-xl text-muted-foreground">{data.description}</p>
                </div>

                {/* Tab Content Sections */}
                <div className="max-w-5xl mx-auto space-y-12">
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
