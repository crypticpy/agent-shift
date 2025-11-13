import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, X, Check, AlertCircle } from "lucide-react";

interface ContextElement {
  type: string;
  icon: string;
  data: string;
}

interface ComparisonData {
  voiceInput: string;
  withoutContext: {
    response: string;
    problems: string[];
  };
  withContext: {
    response: string;
    contextUsed: ContextElement[];
  };
}

interface ContextAwareComparisonProps {
  data: ComparisonData;
  duration?: number;
}

const TypewriterText = ({
  text,
  isPlaying,
  speed = 30,
  onComplete
}: {
  text: string;
  isPlaying: boolean;
  speed?: number;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isPlaying) {
      if (displayedText === "") {
        return;
      }
      return;
    }

    setDisplayedText("");
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, isPlaying, onComplete]);

  return <>{displayedText}</>;
};

export default function ContextAwareComparison({ data, duration = 12000 }: ContextAwareComparisonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [phase, setPhase] = useState<"input" | "processing" | "results" | "complete">("input");
  const [showContextBadges, setShowContextBadges] = useState(false);
  const [highlightedContext, setHighlightedContext] = useState<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedTime(elapsed);

      // Phase transitions
      if (elapsed < 3000) {
        setPhase("input");
      } else if (elapsed < 5200) {
        setPhase("processing");
      } else if (elapsed < duration - 2000) {
        setPhase("results");
        if (elapsed >= 5700 && !showContextBadges) {
          setShowContextBadges(true);
        }
      } else {
        setPhase("complete");
      }

      if (elapsed >= duration) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);
  // Note: showContextBadges is safe to omit - it's only set within this effect

  // Highlight context elements sequentially
  useEffect(() => {
    if (phase === "results" && showContextBadges && data.withContext.contextUsed.length > 0) {
      let highlightInterval: NodeJS.Timeout;

      // Wait 500ms for badges to finish entrance animation
      const startDelay = setTimeout(() => {
        let currentIndex = 0;
        highlightInterval = setInterval(() => {
          setHighlightedContext(currentIndex);
          currentIndex++;
          if (currentIndex >= data.withContext.contextUsed.length) {
            clearInterval(highlightInterval);
            setTimeout(() => setHighlightedContext(null), 1000);
          }
        }, 1200);
      }, 500);

      return () => {
        clearTimeout(startDelay);
        if (highlightInterval) clearInterval(highlightInterval);
      };
    }
  }, [phase, showContextBadges, data.withContext.contextUsed.length]);

  const handleStart = useCallback(() => {
    setElapsedTime(0);
    setPhase("input");
    setShowContextBadges(false);
    setHighlightedContext(null);
    setIsPlaying(true);
  }, []);

  const handleReset = useCallback(() => {
    setElapsedTime(0);
    setPhase("input");
    setShowContextBadges(false);
    setHighlightedContext(null);
    setIsPlaying(false);
  }, []);

  return (
    <div className="my-6">
      {/* Main Demo Card */}
      <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
        <motion.div
          className="p-4"
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Initial State Message */}
          {!isPlaying && phase === "input" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-6 text-center px-6"
            >
              <div className="max-w-2xl">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Context makes all the difference.</strong> Watch how the same voice command produces dramatically different results with and without context awareness.
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Click "See the Difference" below to see context-aware AI in action.
                </p>
              </div>
            </motion.div>
          )}

          {/* Voice Input Box */}
          {(isPlaying || phase !== "input") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-3"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎤</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-1">You said:</p>
                  <p className="text-sm text-foreground italic">
                    "{phase === "input" ? <TypewriterText text={data.voiceInput} isPlaying={isPlaying} /> : data.voiceInput}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Split Screen Comparison */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left: WITHOUT Context */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: phase === "input" ? 0 : 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 border-red-200 dark:border-red-900 bg-red-50/30 dark:bg-red-950/20 h-full">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="h-5 w-5 text-red-600" />
                    <h4 className="font-bold text-sm text-red-900 dark:text-red-100">Without Context</h4>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "input" ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Generic AI Response */}
                    <div className="mb-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
                      <p className="text-xs text-muted-foreground mb-1">AI Response:</p>
                      <p className="text-sm">
                        {phase === "processing" ? (
                          <span className="text-muted-foreground italic">Processing...</span>
                        ) : (
                          <TypewriterText
                            text={data.withoutContext.response}
                            isPlaying={phase === "results" || phase === "complete"}
                            speed={20}
                          />
                        )}
                      </p>
                    </div>

                    {/* Problems List */}
                    {(phase === "results" || phase === "complete") && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">⚠️ Problems:</p>
                        {data.withoutContext.problems.map((problem, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.2 }}
                            className="flex items-start gap-2 text-xs text-red-700 dark:text-red-300"
                          >
                            <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                            <span>{problem}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Right: WITH Context */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: phase === "input" ? 0 : 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 border-emerald-200 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/20 h-full">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-100">With Context</h4>
                  </div>

                  {/* Context Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: showContextBadges ? 1 : 0,
                      y: showContextBadges ? 0 : -10
                    }}
                    style={{ pointerEvents: showContextBadges ? 'auto' : 'none' }}
                    className="flex flex-wrap gap-2 mb-3"
                  >
                    {data.withContext.contextUsed.map((context, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: showContextBadges ? 1 : 0,
                          scale: showContextBadges ? 1 : 0.8
                        }}
                        transition={{ delay: showContextBadges ? index * 0.1 : 0 }}
                      >
                        <Badge
                          className={`text-xs ${
                            highlightedContext === index
                              ? "bg-emerald-500 text-white ring-2 ring-emerald-300"
                              : "bg-emerald-100 text-emerald-700 border-emerald-200"
                          } transition-all duration-300`}
                        >
                          <span className="mr-1">{context.icon}</span>
                          {context.type}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "input" ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Smart AI Response */}
                    <div className="mb-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <p className="text-xs text-muted-foreground mb-1">AI Response:</p>
                      <p className="text-sm">
                        {phase === "processing" ? (
                          <span className="text-muted-foreground italic">Analyzing context...</span>
                        ) : (
                          <TypewriterText
                            text={data.withContext.response}
                            isPlaying={phase === "results" || phase === "complete"}
                            speed={20}
                          />
                        )}
                      </p>
                    </div>

                    {/* Context Details */}
                    {(phase === "results" || phase === "complete") && showContextBadges && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">✅ Context Used:</p>
                        {data.withContext.contextUsed.map((context, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.2 }}
                            className={`flex items-start gap-2 text-xs p-2 rounded-lg ${
                              highlightedContext === index
                                ? "bg-emerald-100 dark:bg-emerald-900/50 ring-2 ring-emerald-300"
                                : "bg-transparent"
                            } transition-all duration-300`}
                          >
                            <span className="text-base flex-shrink-0">{context.icon}</span>
                            <div>
                              <p className="font-semibold text-emerald-900 dark:text-emerald-100">{context.type}</p>
                              <p className="text-emerald-700 dark:text-emerald-300">{context.data}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Summary Message */}
          {phase === "complete" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-base text-blue-900 dark:text-blue-100 mb-1">The Power of Context</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Context-aware AI doesn't just hear your words—it understands your world. By knowing your location, schedule,
                    recent emails, and past interactions, it can anticipate your needs and provide personalized, actionable responses.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Control Button */}
          <div className="mt-4 flex justify-center">
            {!isPlaying && phase === "input" ? (
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-6 py-5 text-base"
              >
                <Play className="mr-2 h-5 w-5" />
                See the Difference
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
        </motion.div>
      </Card>
    </div>
  );
}
