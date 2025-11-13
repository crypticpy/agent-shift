import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, CheckCircle2, Loader2, Sparkles, Layers, Zap, Presentation } from "lucide-react";

interface WorkflowStep {
  icon: string;
  text: string;
  duration: number;
}

interface Workflow {
  id: string;
  name: string;
  emoji: string;
  color: string;
  steps: WorkflowStep[];
  spawnTime?: number;
  output: string;
}

interface Synthesis {
  task: string;
  usesContext: string[];
  result: string;
  slidePreview?: string[];
}

interface NestedWorkflowData {
  trigger: string | string[];
  workflows: Workflow[];
  synthesis: Synthesis;
}

interface NestedWorkflowDemoProps {
  data: NestedWorkflowData;
  duration?: number;
}

interface WorkflowTimelineProps {
  workflow: Workflow;
  startTime: number;
  isPlaying: boolean;
  elapsedTime: number;
  onComplete?: () => void;
}

const StreamingTypewriter = ({
  text,
  isActive,
  speed = 40
}: {
  text: string;
  isActive: boolean;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isActive) return;

    let currentIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed + Math.random() * 20); // Variable speed for natural feel

    return () => clearInterval(interval);
  }, [text, isActive, speed]);

  return <>{displayedText}{displayedText.length < text.length && <span className="animate-pulse">|</span>}</>;
};

const MultiPhraseTrigger = ({
  triggers,
  isPlaying,
  elapsedTime
}: {
  triggers: string[];
  isPlaying: boolean;
  elapsedTime: number;
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [activeTyping, setActiveTyping] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    // Timing: 0ms, 1500ms, 3000ms for phrases
    const timings = triggers.map((_, idx) => idx * 1500);

    const newIndex = timings.findIndex(t => elapsedTime < t);
    const visibleIndex = newIndex === -1 ? triggers.length - 1 : Math.max(0, newIndex - 1);

    if (visibleIndex !== currentPhraseIndex) {
      setCurrentPhraseIndex(visibleIndex);
      setActiveTyping(visibleIndex);
    }
  }, [elapsedTime, isPlaying, triggers, currentPhraseIndex]);

  return (
    <div className="space-y-3">
      {triggers.map((trigger, idx) => (
        idx <= currentPhraseIndex && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={idx === 0 ? "font-semibold" : ""}
          >
            <p className="text-sm text-foreground italic leading-relaxed">
              "{idx === activeTyping ? (
                <StreamingTypewriter
                  text={trigger}
                  isActive={true}
                  speed={30}
                />
              ) : trigger}"
            </p>
          </motion.div>
        )
      ))}
    </div>
  );
};

const WorkflowTimeline = ({ workflow, startTime, isPlaying, elapsedTime, onComplete }: WorkflowTimelineProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const [hasNotifiedComplete, setHasNotifiedComplete] = useState(false);

  useEffect(() => {
    if (!isPlaying || elapsedTime < startTime) {
      return;
    }

    const workflowElapsed = elapsedTime - startTime;

    // Calculate which step we should be on
    let accumulatedTime = 0;
    let targetStepIndex = -1;

    for (let i = 0; i < workflow.steps.length; i++) {
      accumulatedTime += workflow.steps[i].duration;
      if (workflowElapsed < accumulatedTime) {
        targetStepIndex = i;
        break;
      }
    }

    // If we've completed all steps
    if (targetStepIndex === -1 && workflowElapsed >= accumulatedTime) {
      if (!isComplete) {
        setIsComplete(true);
        setCurrentStepIndex(workflow.steps.length - 1);
        if (!hasNotifiedComplete && onComplete) {
          setHasNotifiedComplete(true);
          onComplete();
        }
      }
    } else if (targetStepIndex !== currentStepIndex) {
      setCurrentStepIndex(targetStepIndex);
    }
  }, [elapsedTime, isPlaying, startTime, workflow.steps, currentStepIndex, isComplete, onComplete, hasNotifiedComplete]);

  // Reset when animation restarts
  useEffect(() => {
    if (!isPlaying && elapsedTime === 0) {
      setCurrentStepIndex(-1);
      setIsComplete(false);
      setHasNotifiedComplete(false);
    }
  }, [isPlaying, elapsedTime]);

  if (elapsedTime < startTime) {
    return null;
  }

  const totalDuration = workflow.steps.reduce((sum, step) => sum + step.duration, 0);
  const workflowElapsed = Math.max(0, elapsedTime - startTime);
  const progress = Math.min((workflowElapsed / totalDuration) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <Card className={`border-2 transition-colors duration-300 ${
        isComplete
          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30"
          : `border-${workflow.color}/40 bg-${workflow.color}/5`
      }`}>
        <div className="p-4">
          {/* Workflow Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{workflow.emoji}</span>
              <h4 className="font-bold text-sm">{workflow.name}</h4>
              {workflow.spawnTime && (
                <Badge variant="outline" className="text-xs">
                  Spawned Dynamically
                </Badge>
              )}
            </div>
            {isComplete && (
              <Badge className="bg-emerald-500 text-white">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-3 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-${workflow.color} to-${workflow.color}/70`}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-2">
            {workflow.steps.map((step, index) => {
              const isCurrentStep = index === currentStepIndex && !isComplete;
              const isPastStep = index < currentStepIndex || isComplete;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-xs ${
                    isCurrentStep
                      ? "text-foreground font-medium"
                      : isPastStep
                      ? "text-muted-foreground line-through"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {isCurrentStep ? (
                    <Loader2 className="h-3 w-3 animate-spin text-primary flex-shrink-0" />
                  ) : isPastStep ? (
                    <CheckCircle2 className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <span className="text-sm flex-shrink-0 opacity-50">{step.icon}</span>
                  )}
                  <span>{step.text}</span>
                </div>
              );
            })}
          </div>

          {/* Output */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800"
            >
              <p className="text-xs text-muted-foreground mb-1">📦 Output:</p>
              <p className="text-xs font-medium">{workflow.output}</p>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default function NestedWorkflowDemo({ data, duration = 20000 }: NestedWorkflowDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [completedWorkflows, setCompletedWorkflows] = useState<Set<string>>(new Set());
  const [showSynthesis, setShowSynthesis] = useState(false);
  const [synthesisPhase, setSynthesisPhase] = useState<"collecting" | "generating" | "complete">("collecting");

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedTime(elapsed);

      if (elapsed >= duration) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Trigger synthesis when all workflows complete
  useEffect(() => {
    if (completedWorkflows.size === data.workflows.length && completedWorkflows.size > 0 && !showSynthesis) {
      setTimeout(() => {
        setShowSynthesis(true);
        setSynthesisPhase("collecting");
        setTimeout(() => {
          setSynthesisPhase("generating");
          setTimeout(() => {
            setSynthesisPhase("complete");
          }, 2000);
        }, 1500);
      }, 500);
    }
  }, [completedWorkflows, data.workflows.length, showSynthesis]);

  const handleWorkflowComplete = useCallback((workflowId: string) => {
    setCompletedWorkflows(prev => new Set(prev).add(workflowId));
  }, []);

  const handleStart = useCallback(() => {
    setElapsedTime(0);
    setCompletedWorkflows(new Set());
    setShowSynthesis(false);
    setSynthesisPhase("collecting");
    setIsPlaying(true);
  }, []);

  const handleReset = useCallback(() => {
    setElapsedTime(0);
    setCompletedWorkflows(new Set());
    setShowSynthesis(false);
    setSynthesisPhase("collecting");
    setIsPlaying(false);
  }, []);

  const allWorkflowsComplete = completedWorkflows.size === data.workflows.length && completedWorkflows.size > 0;

  return (
    <div className="my-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Nested Workflow Orchestration
        </h3>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Watch multiple workflows run in parallel, stack context, and synthesize into intelligent outputs
        </p>
      </div>

      {/* Main Demo Card */}
      <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
        <div className="p-6">
          {/* Voice Trigger */}
          {(isPlaying || allWorkflowsComplete) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎤</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    You said:
                  </p>
                  {Array.isArray(data.trigger) ? (
                    <MultiPhraseTrigger
                      triggers={data.trigger}
                      isPlaying={isPlaying}
                      elapsedTime={elapsedTime}
                    />
                  ) : (
                    <p className="text-sm text-foreground italic">"{data.trigger}"</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Workflow Timelines */}
          {(isPlaying || allWorkflowsComplete) && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-base">Parallel Workflows</h4>
                <Badge variant="secondary" className="ml-auto">
                  {completedWorkflows.size} / {data.workflows.length} Complete
                </Badge>
              </div>

              <div className="space-y-0">
                {data.workflows.map((workflow) => (
                  <WorkflowTimeline
                    key={workflow.id}
                    workflow={workflow}
                    startTime={workflow.spawnTime || 0}
                    isPlaying={isPlaying}
                    elapsedTime={elapsedTime}
                    onComplete={() => handleWorkflowComplete(workflow.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Context Stacking Visualization */}
          {allWorkflowsComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <Layers className="h-6 w-6 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-sm text-purple-900 dark:text-purple-100 mb-2">Context Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {data.workflows.map((workflow, index) => (
                      <motion.div
                        key={workflow.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                          {workflow.emoji} {workflow.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Synthesis Phase */}
          <AnimatePresence>
            {showSynthesis && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-bold text-base">AI Synthesis</h4>
                </div>

                <Card className="border-2 border-emerald-200 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/20">
                  <div className="p-4">
                    {/* Task */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Task:</p>
                      <p className="text-sm font-medium">{data.synthesis.task}</p>
                    </div>

                    {/* Context Sources */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Using context from:</p>
                      <div className="flex flex-wrap gap-2">
                        {data.synthesis.usesContext.map((contextRef, index) => {
                          const workflowId = contextRef.split('.')[0];
                          const workflow = data.workflows.find(w => w.id === workflowId);
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.15 }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {workflow?.emoji} {contextRef}
                              </Badge>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Status */}
                    {synthesisPhase === "collecting" && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Collecting workflow outputs...</span>
                      </div>
                    )}

                    {synthesisPhase === "generating" && (
                      <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Generating presentation...</span>
                      </div>
                    )}

                    {synthesisPhase === "complete" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300 font-semibold">
                          <Presentation className="h-4 w-4" />
                          <span>Presentation Ready!</span>
                        </div>

                        <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <p className="text-xs text-muted-foreground mb-2">Result:</p>
                          <p className="text-sm mb-3">{data.synthesis.result}</p>

                          {data.synthesis.slidePreview && (
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                                📊 Slide Preview (10 slides):
                              </p>
                              {data.synthesis.slidePreview.map((slide, index) => (
                                <div key={index} className="text-xs text-muted-foreground pl-3 border-l-2 border-emerald-200 dark:border-emerald-800">
                                  {index + 1}. {slide}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final Summary */}
          {synthesisPhase === "complete" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-blue-900 dark:text-blue-100 mb-1">The Power of Workflow Composition</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Multiple workflows running in parallel, each contributing specialized context. When combined, they create
                    outputs far more sophisticated than any single workflow could achieve alone.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Time saved:</strong> Manual approach would take 2.5 hours. With nested workflows: 18 minutes (89% faster).
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Control Button */}
          <div className="mt-6 flex justify-center">
            {!isPlaying && !allWorkflowsComplete ? (
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-5 text-base"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Workflow
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                onClick={handleReset}
                className="border-2 border-primary px-6 py-5 text-base"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Replay
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
